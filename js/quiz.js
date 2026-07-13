/* =====================================================================
   EMC.quiz — session state, question renderers, scoring.
   ===================================================================== */
(function () {
  "use strict";
  window.EMC = window.EMC || {};
  const U = () => EMC.util;

  let session = null; // in-memory only; saved attempts persist via EMC.storage

  function buildSession(level) {
    const settings = EMC.storage.settings();
    let qs = EMC.data.getLevel(level).map(q => JSON.parse(JSON.stringify(q)));

    if (settings.randomizeQuestions) qs = U().shuffle(qs);

    qs = qs.map(q => {
      if (settings.randomizeChoices) {
        if (q.questionType === "match") {
          q.pairs = q.pairs.map((p, i) => Object.assign({}, p, { _rid: i }));
          q._rightOrder = U().shuffle(q.pairs.map(p => p._rid));
        } else if (q.questionType === "order") {
          q._bank = U().shuffle(q.items.map((it, i) => ({ text: it, i })));
        } else if (q.options) {
          q.options = U().shuffle(q.options);
        }
      } else {
        if (q.questionType === "match") q._rightOrder = q.pairs.map((p, i) => i);
        if (q.questionType === "order") q._bank = U().shuffle(q.items.map((it, i) => ({ text: it, i })));
      }
      return q;
    });

    session = {
      level,
      questions: qs,
      index: 0,
      answers: {},           // qid -> { locked, revealed, value, isCorrect }
      startTime: Date.now(),
      timerDeadline: settings.timerEnabled ? Date.now() + (settings.timerMinutes[level] || 20) * 60000 : null,
      timerInterval: null,
      audioPlays: {}         // qid -> count (for teacher review, informational)
    };
    return session;
  }

  function getSession() { return session; }
  function clearSession() {
    if (session && session.timerInterval) clearInterval(session.timerInterval);
    session = null;
  }

  function currentQuestion() { return session.questions[session.index]; }

  function isAnswered(qid) { return !!(session.answers[qid] && session.answers[qid].locked); }

  /* ---------------------------------------------------------------
     Grading
     ------------------------------------------------------------- */
  function gradeAnswer(q, value) {
    if (q.questionType === "match") {
      const map = value || {}; // leftIndex -> rightRid
      // Each pair is correct when the student linked left[i] to the right option
      // whose original identity (_rid, or its index when not randomized) is i.
      let allCorrect = q.pairs.length > 0;
      q.pairs.forEach((p, i) => {
        const correctRid = p._rid != null ? p._rid : i;
        if (map[i] !== correctRid) allCorrect = false;
      });
      return allCorrect;
    }
    if (q.questionType === "order") {
      const seq = value || [];
      if (seq.length !== q.items.length) return false;
      return seq.every((text, i) => text === q.items[i]);
    }
    return value === q.correctAnswer;
  }

  function feedbackMessages() {
    return {
      correct: ["Correct!", "Nice work!", "You remembered it!", "Well done!", "That's right!"],
    };
  }

  function buildFeedback(q, value, isCorrect) {
    const settings = EMC.storage.settings();
    const showExpl = settings.showExplanationsDuringTest;
    if (isCorrect) {
      const msgs = feedbackMessages().correct;
      const title = msgs[Math.floor(Math.random() * msgs.length)];
      return { correct: true, title, body: showExpl ? q.explanation : "" };
    }
    let leadIn = "";
    if (q.questionType === "match" || q.questionType === "order") {
      leadIn = "That's not quite right yet. ";
    } else {
      leadIn = value ? "You chose “" + value + "”, but that's not correct. " : "No answer was chosen. ";
    }
    return {
      correct: false,
      title: "Not quite",
      body: showExpl ? leadIn + q.explanation : leadIn + "Check the correct answer in Review Mode after the test."
    };
  }

  /* ---------------------------------------------------------------
     Rendering: shell for one question
     ------------------------------------------------------------- */
  function renderQuestionShell(q, index, total) {
    const skillBadge = '<span class="badge badge--skill-' + q.skill + '">' + U().skillLabel(q.skill) + "</span>";
    const wrap = U().el(
      '<div class="question-card card card--lg">' +
        '<div class="question-card__instruction">' + skillBadge + " &nbsp;•&nbsp; " + U().escapeHtml(q.instruction) + "</div>" +
        '<div class="question-card__body"></div>' +
      "</div>"
    );
    return wrap;
  }

  function renderPassageAndAudio(q, body) {
    if (q.passage) {
      const p = U().el('<div class="question-card__passage"></div>');
      p.textContent = q.passage;
      body.appendChild(p);
    }
    if (q.audioScript) {
      const player = EMC.audio.buildPlayer(q.audioScript, {
        onPlay: () => { session.audioPlays[q.id] = (session.audioPlays[q.id] || 0) + 1; }
      });
      body.appendChild(player);
    }
  }

  function renderHintButton(q, body) {
    if (!q.hint) return;
    const row = U().el('<div class="u-row" style="margin-bottom:var(--sp-3)"></div>');
    const btn = U().el('<button type="button" class="btn btn-ghost btn-sm">💡 Show a hint</button>');
    const box = U().el('<div class="callout callout--info" style="display:none;margin-bottom:var(--sp-3);font-size:var(--fs-sm)"></div>');
    box.textContent = q.hint;
    btn.addEventListener("click", () => {
      box.style.display = box.style.display === "none" ? "block" : "none";
    });
    row.appendChild(btn);
    body.appendChild(row);
    body.appendChild(box);
  }

  function transcriptBlock(q, body, revealed) {
    if (!q.audioScript) return;
    const box = U().el('<div class="callout" style="margin-top:var(--sp-3);font-size:var(--fs-sm)"></div>');
    if (revealed) {
      box.innerHTML = "<strong>Transcript:</strong> " + U().escapeHtml(q.audioScript);
    } else {
      box.innerHTML = '<span class="u-muted">The transcript will appear here after you submit your answer.</span>';
    }
    body.appendChild(box);
  }

  /* ---------------------------------------------------------------
     Choice question (multiple-choice / fill-blank / listening-choice)
     ------------------------------------------------------------- */
  function renderChoice(q, body, onReady) {
    renderPassageAndAudio(q, body);
    renderHintButton(q, body);

    const prompt = U().el('<div class="question-card__prompt"></div>');
    prompt.innerHTML = U().nl2br(q.question);
    body.appendChild(prompt);

    const existing = session.answers[q.id];
    const locked = existing && existing.locked;
    let selected = existing ? existing.value : null;

    const list = U().el('<div class="choice-list" role="radiogroup"></div>');
    const letters = ["A", "B", "C", "D", "E"];
    q.options.forEach((opt, i) => {
      const btn = U().el('<button type="button" class="choice-btn" role="radio"></button>');
      btn.innerHTML = '<span class="choice-btn__letter">' + letters[i] + '</span><span></span>';
      btn.querySelector("span:last-child").textContent = opt;
      btn.setAttribute("aria-checked", String(opt === selected));
      if (opt === selected) btn.classList.add("is-selected");
      if (locked) {
        btn.disabled = true;
        if (opt === q.correctAnswer) btn.classList.add("is-correct");
        else if (opt === selected) btn.classList.add("is-wrong");
      }
      btn.addEventListener("click", () => {
        if (locked) return;
        selected = opt;
        U().qsa(".choice-btn", list).forEach(b => b.classList.remove("is-selected"));
        btn.classList.add("is-selected");
        onReady(selected);
      });
      list.appendChild(btn);
    });
    body.appendChild(list);

    if (q.audioScript) transcriptBlock(q, body, locked);
    if (locked) renderFeedbackPanel(q, existing, body);

    return { getValue: () => selected, isComplete: () => selected != null };
  }

  /* ---------------------------------------------------------------
     Match question
     ------------------------------------------------------------- */
  function renderMatch(q, body, onReady) {
    renderHintButton(q, body);
    const prompt = U().el('<div class="question-card__prompt"></div>');
    prompt.textContent = q.question;
    body.appendChild(prompt);

    const existing = session.answers[q.id];
    const locked = existing && existing.locked;
    const map = existing ? Object.assign({}, existing.value) : {}; // leftIndex -> rightRid

    const wrap = U().el('<div class="match-wrap"></div>');
    const leftCol = U().el('<div class="match-col"><h4>Terms</h4></div>');
    const rightCol = U().el('<div class="match-col"><h4>Meanings</h4></div>');
    wrap.appendChild(leftCol);
    wrap.appendChild(rightCol);
    body.appendChild(wrap);

    let activeLeft = null;
    const leftBtns = [];
    const rightBtns = [];

    function refresh() {
      leftBtns.forEach(({ btn, i }) => {
        btn.classList.toggle("is-active", activeLeft === i);
        const linked = map[i] != null;
        btn.classList.toggle("is-linked", linked && !locked);
        const tag = btn.querySelector(".match-item__tag");
        tag.textContent = linked ? "→ " + (rightBtns.find(r => r.rid === map[i]).num) : "";
        if (locked) {
          const correct = q._rightOrder ? map[i] === i : map[i] === i;
          btn.classList.toggle("is-correct", correct);
          btn.classList.toggle("is-wrong", !correct);
        }
      });
      rightBtns.forEach(({ btn, rid }) => {
        const linkedLeft = Object.keys(map).find(k => map[k] === rid);
        btn.classList.toggle("is-linked", linkedLeft != null && !locked);
        if (locked) {
          const li = Object.keys(map).find(k => map[k] === rid);
          const correct = li != null && Number(li) === rid;
          btn.classList.toggle("is-correct", li != null && correct);
        }
      });
    }

    q.pairs.forEach((p, i) => {
      const btn = U().el('<button type="button" class="match-item"></button>');
      btn.innerHTML = (i + 1) + ". " + U().escapeHtml(p.left) + '<span class="match-item__tag"></span>';
      btn.disabled = !!locked;
      btn.addEventListener("click", () => {
        activeLeft = i;
        refresh();
      });
      leftCol.appendChild(btn);
      leftBtns.push({ btn, i });
    });

    const rightOrder = q._rightOrder || q.pairs.map((p, i) => i);
    rightOrder.forEach((rid, pos) => {
      const p = q.pairs.find((pp, idx) => (pp._rid != null ? pp._rid : idx) === rid) || q.pairs[rid];
      const btn = U().el('<button type="button" class="match-item"></button>');
      const num = String.fromCharCode(97 + pos); // a, b, c...
      btn.innerHTML = num + ". " + U().escapeHtml(p.right);
      btn.disabled = !!locked;
      btn.addEventListener("click", () => {
        if (activeLeft == null) { EMC.util.toast("Choose a term on the left first."); return; }
        map[activeLeft] = rid;
        activeLeft = null;
        onReady(Object.assign({}, map));
        refresh();
      });
      rightCol.appendChild(btn);
      rightBtns.push({ btn, rid, num });
    });

    refresh();
    if (locked) renderFeedbackPanel(q, existing, body);

    return {
      getValue: () => Object.assign({}, map),
      isComplete: () => Object.keys(map).length === q.pairs.length
    };
  }

  /* ---------------------------------------------------------------
     Order question
     ------------------------------------------------------------- */
  function renderOrder(q, body, onReady) {
    if (q.audioScript) {
      const player = EMC.audio.buildPlayer(q.audioScript, {
        onPlay: () => { session.audioPlays[q.id] = (session.audioPlays[q.id] || 0) + 1; }
      });
      body.appendChild(player);
    }
    renderHintButton(q, body);

    const prompt = U().el('<div class="question-card__prompt"></div>');
    prompt.textContent = q.question;
    body.appendChild(prompt);

    const existing = session.answers[q.id];
    const locked = existing && existing.locked;
    let sequence = existing ? existing.value.slice() : [];
    const bank = q._bank || q.items.map((it, i) => ({ text: it, i }));

    const bankWrap = U().el('<div class="order-bank"></div>');
    const slotsWrap = U().el('<div class="order-slots"></div>');
    body.appendChild(bankWrap);
    body.appendChild(slotsWrap);

    function usedTexts() {
      const counts = {};
      sequence.forEach(t => { counts[t] = (counts[t] || 0) + 1; });
      return counts;
    }

    function renderBank() {
      bankWrap.innerHTML = "";
      // Show each bank chip once, minus however many are currently placed in the slots
      // (handles the rare case of two identical words appearing in the same sequence).
      const placedCount = {};
      bank.forEach(b => {
        const alreadyPlaced = placedCount[b.text] || 0;
        const totalPlacedOfText = sequence.filter(s => s === b.text).length;
        if (alreadyPlaced < totalPlacedOfText) { placedCount[b.text] = alreadyPlaced + 1; return; }
        placedCount[b.text] = alreadyPlaced;
        const chip = U().el('<button type="button" class="order-chip"></button>');
        chip.textContent = b.text;
        chip.disabled = !!locked;
        chip.addEventListener("click", () => {
          sequence.push(b.text);
          onReady(sequence.slice());
          renderAll();
        });
        bankWrap.appendChild(chip);
      });
    }

    function renderSlots() {
      slotsWrap.innerHTML = "";
      q.items.forEach((_, i) => {
        const slot = U().el('<div class="order-slot"></div>');
        const num = U().el('<span class="order-slot__num"></span>');
        num.textContent = i + 1;
        slot.appendChild(num);
        const text = document.createElement("span");
        if (sequence[i] != null) {
          text.textContent = sequence[i];
          slot.classList.add("is-filled");
        } else {
          text.textContent = "—";
          text.className = "u-muted";
        }
        slot.appendChild(text);
        if (locked) {
          const correct = sequence[i] === q.items[i];
          slot.style.borderColor = correct ? "var(--c-correct)" : "var(--c-wrong)";
          slot.style.background = correct ? "var(--c-correct-bg)" : "var(--c-wrong-bg)";
        } else if (sequence[i] != null) {
          const rm = U().el('<button type="button" class="order-slot__remove" aria-label="Remove">✕</button>');
          rm.addEventListener("click", () => {
            sequence.splice(i, 1);
            onReady(sequence.slice());
            renderAll();
          });
          slot.appendChild(rm);
        }
        slotsWrap.appendChild(slot);
      });
    }

    function renderAll() { renderBank(); renderSlots(); }
    renderAll();

    if (locked) renderFeedbackPanel(q, existing, body);

    return {
      getValue: () => sequence.slice(),
      isComplete: () => sequence.length === q.items.length
    };
  }

  function renderFeedbackPanel(q, answerRecord, body) {
    if (!answerRecord.revealed) return;
    const fb = answerRecord.feedback;
    const panel = U().el('<div class="feedback-panel"></div>');
    panel.classList.add(fb.correct ? "feedback-panel--correct" : "feedback-panel--wrong");
    panel.innerHTML =
      '<div class="feedback-panel__title">' + (fb.correct ? "✅ " : "❌ ") + U().escapeHtml(fb.title) + "</div>" +
      '<div class="feedback-panel__body">' + U().nl2br(fb.body) + "</div>";
    body.appendChild(panel);
  }

  function renderQuestionType(q, body, onReady) {
    if (q.questionType === "match") return renderMatch(q, body, onReady);
    if (q.questionType === "order") return renderOrder(q, body, onReady);
    return renderChoice(q, body, onReady);
  }

  /* ---------------------------------------------------------------
     Submit one answer (lock it in)
     ------------------------------------------------------------- */
  function submitAnswer(q, value) {
    const isCorrect = gradeAnswer(q, value);
    const settings = EMC.storage.settings();
    const record = {
      locked: true,
      revealed: !!settings.instantFeedback,
      value,
      isCorrect
    };
    if (record.revealed) record.feedback = buildFeedback(q, value, isCorrect);
    session.answers[q.id] = record;
    return record;
  }

  /* ---------------------------------------------------------------
     Scoring for the whole test
     ------------------------------------------------------------- */
  function scoreSession() {
    const qs = session.questions;
    let earned = 0, total = 0;
    const bySkill = {};
    EMC.data.SKILLS.forEach(s => { bySkill[s] = { correct: 0, total: 0 }; });

    const answerLog = qs.map(q => {
      const rec = session.answers[q.id];
      const answered = !!(rec && rec.locked);
      const isCorrect = answered ? gradeAnswer(q, rec.value) : false;
      total += q.points;
      if (isCorrect) earned += q.points;
      bySkill[q.skill].total += q.points;
      if (isCorrect) bySkill[q.skill].correct += q.points;
      return {
        id: q.id,
        skill: q.skill,
        questionType: q.questionType,
        question: q.question,
        instruction: q.instruction,
        passage: q.passage || null,
        audioScript: q.audioScript || null,
        options: q.options || null,
        pairs: q.pairs || null,
        items: q.items || null,
        correctAnswer: q.correctAnswer != null ? q.correctAnswer : (q.items || null),
        explanation: q.explanation,
        answered,
        value: answered ? rec.value : null,
        isCorrect
      };
    });

    const percent = total > 0 ? Math.round((earned / total) * 100) : 0;
    const skillPercents = {};
    Object.keys(bySkill).forEach(s => {
      skillPercents[s] = bySkill[s].total > 0 ? Math.round((bySkill[s].correct / bySkill[s].total) * 100) : null;
    });

    return {
      level: session.level,
      date: Date.now(),
      score: earned,
      total,
      percent,
      skillBreakdown: bySkill,
      skillPercents,
      durationMs: Date.now() - session.startTime,
      answers: answerLog
    };
  }

  EMC.quiz = {
    buildSession, getSession, clearSession, currentQuestion, isAnswered,
    renderQuestionShell, renderPassageAndAudio, renderQuestionType, submitAnswer,
    scoreSession, gradeAnswer, buildFeedback
  };
})();
