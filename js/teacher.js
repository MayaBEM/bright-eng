/* =====================================================================
   EMC.teacher — Teacher Mode panel: settings, answer key, reports.
   ===================================================================== */
(function () {
  "use strict";
  window.EMC = window.EMC || {};
  const U = () => EMC.util;

  function toggleRow(label, hint, checked, onChange) {
    const row = U().el(
      '<div class="toggle-row">' +
        '<div><div class="toggle-row__label">' + label + "</div>" +
        (hint ? '<div class="toggle-row__hint">' + hint + "</div>" : "") + "</div>" +
        '<label class="switch"><input type="checkbox"><span class="switch__track"></span><span class="switch__thumb"></span></label>' +
      "</div>"
    );
    const input = row.querySelector("input");
    input.checked = !!checked;
    input.addEventListener("change", () => onChange(input.checked));
    return row;
  }

  function renderTeacher(container) {
    container.innerHTML = "";
    const s = EMC.storage.settings();

    const wrap = U().el(
      '<section class="section"><div class="container">' +
        '<h1>Teacher Mode</h1>' +
        '<p class="u-muted">Classroom-style settings — no account or internet connection needed. Changes are saved on this device.</p>' +
        '<div class="card card--lg" style="margin-bottom:var(--sp-5)"><h2>Test Behaviour</h2><div id="tg-behaviour"></div></div>' +
        '<div class="card card--lg" style="margin-bottom:var(--sp-5)"><h2>Listening &amp; Timing</h2><div id="tg-timing"></div></div>' +
        '<div class="card card--lg" style="margin-bottom:var(--sp-5)"><h2>Accessibility</h2><div id="tg-a11y"></div></div>' +
        '<div class="card card--lg" style="margin-bottom:var(--sp-5)"><h2>Results by Test</h2><div id="tg-results"></div></div>' +
        '<div class="card card--lg"><h2>Data &amp; Reports</h2><div id="tg-data" class="u-row"></div></div>' +
      "</div></section>"
    );
    container.appendChild(wrap);

    const behaviour = wrap.querySelector("#tg-behaviour");
    behaviour.appendChild(toggleRow("Instant feedback", "Show right/wrong feedback immediately after each question.", s.instantFeedback, v => EMC.storage.setSetting("instantFeedback", v)));
    behaviour.appendChild(toggleRow("Show explanations during test", "If off, full explanations only appear in Answer Review after the test.", s.showExplanationsDuringTest, v => EMC.storage.setSetting("showExplanationsDuringTest", v)));
    behaviour.appendChild(toggleRow("Randomize question order", "Shuffles the 25 questions each time a test starts.", s.randomizeQuestions, v => EMC.storage.setSetting("randomizeQuestions", v)));
    behaviour.appendChild(toggleRow("Randomize answer choices", "Shuffles multiple-choice options and match columns each time.", s.randomizeChoices, v => EMC.storage.setSetting("randomizeChoices", v)));

    const timing = wrap.querySelector("#tg-timing");
    timing.appendChild(toggleRow("Teacher timer", "Adds a countdown timer during tests (off by default).", s.timerEnabled, v => EMC.storage.setSetting("timerEnabled", v)));
    const minutesField = U().el(
      '<div class="field" style="margin:var(--sp-3) 0"><label for="tg-minutes">Minutes per test (all levels)</label>' +
      '<input type="number" id="tg-minutes" min="5" max="90" step="1"></div>'
    );
    minutesField.querySelector("input").value = s.timerMinutes.medium;
    minutesField.querySelector("input").addEventListener("change", e => {
      const mins = Math.max(5, Math.min(90, Number(e.target.value) || 20));
      EMC.storage.setSetting("timerMinutes", { easy: mins, medium: mins, challenging: mins });
    });
    timing.appendChild(minutesField);

    const replayField = U().el(
      '<div class="field"><label for="tg-replay">Listening replay limit (0 = unlimited)</label>' +
      '<input type="number" id="tg-replay" min="0" max="10" step="1"></div>'
    );
    replayField.querySelector("input").value = s.replayLimit;
    replayField.querySelector("input").addEventListener("change", e => {
      EMC.storage.setSetting("replayLimit", Math.max(0, Math.min(10, Number(e.target.value) || 0)));
    });
    timing.appendChild(replayField);

    const a11y = wrap.querySelector("#tg-a11y");
    a11y.appendChild(toggleRow("Reduced motion", "Turns off card and progress-bar animations for students sensitive to motion.", s.reducedMotion, v => EMC.a11y.setReducedMotion(v)));
    const sizeField = U().el(
      '<div class="field" style="margin-top:var(--sp-3)"><label for="tg-size">Text size</label>' +
      '<select id="tg-size"><option value="base">Standard</option><option value="lg">Large</option><option value="xl">Extra Large</option></select></div>'
    );
    sizeField.querySelector("select").value = s.textSize;
    sizeField.querySelector("select").addEventListener("change", e => EMC.a11y.setTextSize(e.target.value));
    a11y.appendChild(sizeField);

    const results = wrap.querySelector("#tg-results");
    ["easy", "medium", "challenging"].forEach(level => {
      const attempts = EMC.storage.attempts(level);
      const row = U().el('<div class="card" style="margin-bottom:var(--sp-3)"></div>');
      row.innerHTML = "<h3>" + U().levelTitle(level) + "</h3>" +
        (attempts.length
          ? "<p>" + attempts.length + " attempt(s). Best: " + EMC.storage.bestAttempt(level).percent + "%. Latest: " + EMC.storage.latestAttempt(level).percent + "%.</p>"
          : '<p class="u-muted">No attempts yet.</p>');
      const btnRow = U().el('<div class="u-row"></div>');
      if (attempts.length) {
        const printBtn = U().el('<button type="button" class="btn btn-secondary btn-sm">🖨 Print Result</button>');
        printBtn.addEventListener("click", () => { location.hash = "#/test/" + level + "/results"; setTimeout(() => window.print(), 200); });
        btnRow.appendChild(printBtn);
        const dlBtn = U().el('<button type="button" class="btn btn-ghost btn-sm">⬇ Download Summary</button>');
        dlBtn.addEventListener("click", () => downloadSummary(level));
        btnRow.appendChild(dlBtn);
      }
      const resetBtn = U().el('<button type="button" class="btn btn-ghost btn-sm">Reset This Level</button>');
      resetBtn.addEventListener("click", () => {
        if (confirm("Reset all progress for " + U().levelTitle(level) + "?")) {
          EMC.storage.resetLevel(level);
          U().toast(U().levelTitle(level) + " progress reset.");
          renderTeacher(container);
        }
      });
      btnRow.appendChild(resetBtn);
      row.appendChild(btnRow);
      results.appendChild(row);
    });

    const data = wrap.querySelector("#tg-data");
    const keyBtn = U().el('<button type="button" class="btn btn-secondary">📋 View Full Answer Key</button>');
    keyBtn.addEventListener("click", () => renderAnswerKey(container));
    data.appendChild(keyBtn);

    const resetAllBtn = U().el('<button type="button" class="btn btn-ghost">Reset All Progress</button>');
    resetAllBtn.addEventListener("click", () => {
      if (confirm("This permanently erases all saved scores for every test on this device. Continue?")) {
        EMC.storage.resetAll();
        U().toast("All progress has been reset.");
        renderTeacher(container);
      }
    });
    data.appendChild(resetAllBtn);
  }

  function downloadSummary(level) {
    const a = EMC.storage.latestAttempt(level);
    if (!a) return;
    const band = U().band(a.percent);
    let text = "English Memory Check — Result Summary\n";
    text += "Cr. Bright EngMath\n\n";
    text += U().levelTitle(level) + "\n";
    text += "Date: " + U().formatDate(a.date) + "\n";
    text += "Score: " + a.score + " / " + a.total + " (" + a.percent + "%)\n";
    text += "Performance band: " + band.label + "\n\n";
    text += "Skill Breakdown:\n";
    EMC.data.SKILLS.forEach(skill => {
      const pct = a.skillPercents[skill];
      text += "  " + U().skillLabel(skill) + ": " + (pct == null ? "n/a" : pct + "%") + "\n";
    });
    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "english-memory-check-" + level + "-summary.txt";
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  }

  function renderAnswerKey(container) {
    container.innerHTML = "";
    const wrap = U().el(
      '<section class="section"><div class="container">' +
        "<h1>Full Answer Key</h1>" +
        '<p class="u-muted">All 75 questions across the three test sets, with correct answers.</p>' +
        '<div class="u-row no-print" style="margin-bottom:var(--sp-4)">' +
          '<a class="btn btn-ghost" href="#/teacher">← Back to Teacher Mode</a>' +
          '<button type="button" class="btn btn-secondary" id="btn-print-key">🖨 Print Answer Key</button>' +
        "</div>" +
        '<div id="answer-key-body"></div>' +
      "</div></section>"
    );
    container.appendChild(wrap);
    wrap.querySelector("#btn-print-key").addEventListener("click", () => window.print());

    const body = wrap.querySelector("#answer-key-body");
    EMC.data.LEVELS.forEach(level => {
      const section = U().el('<div class="card card--lg" style="margin-bottom:var(--sp-5)"><h2>' + U().levelTitle(level) + "</h2></div>");
      EMC.data.getLevel(level).forEach((q, i) => {
        const item = U().el('<div class="review-item"></div>');
        let answerText;
        if (q.questionType === "match") answerText = q.pairs.map(p => p.left + " → " + p.right).join("; ");
        else if (q.questionType === "order") answerText = q.items.join(" → ");
        else answerText = q.correctAnswer;
        item.innerHTML =
          '<div class="review-item__q">' + (i + 1) + ". [" + U().skillLabel(q.skill) + "] " + U().escapeHtml(q.question.split("\n")[0]) + "</div>" +
          '<div class="review-item__a"><span class="lbl">Correct answer: </span>' + U().escapeHtml(answerText) + "</div>";
        section.appendChild(item);
      });
      body.appendChild(section);
    });
  }

  function renderTeacherGuide(container) {
    container.innerHTML = "";
    const c = EMC.content;
    const wrap = U().el(
      '<section class="section"><div class="container">' +
        "<h1>Teacher Guide</h1>" +
        '<p class="u-muted">' + c.teacherGuideIntro + "</p>" +
        '<div class="u-stack"></div>' +
        '<div class="u-center" style="margin-top:var(--sp-5)"><a class="btn btn-primary" href="#/teacher">Open Teacher Mode</a></div>' +
      "</div></section>"
    );
    const stack = wrap.querySelector(".u-stack");
    c.teacherGuideSteps.forEach((step, i) => {
      const card = U().el('<div class="card"></div>');
      card.innerHTML = "<h3>" + (i + 1) + ". " + step.title + "</h3><p>" + step.body + "</p>";
      stack.appendChild(card);
    });
    container.appendChild(wrap);
  }

  EMC.teacher = { renderTeacher, renderAnswerKey, renderTeacherGuide };
})();
