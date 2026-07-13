/* =====================================================================
   EMC.player — test intro, question player, final review, submit flow.
   ===================================================================== */
(function () {
  "use strict";
  window.EMC = window.EMC || {};
  const U = () => EMC.util;

  const SECTION_COUNTS = { vocabulary: 5, grammar: 6, reading: 5, listening: 5, conversation: 4 };

  function renderIntro(container, level) {
    container.innerHTML = "";
    const s = EMC.views.levelStatus(level);
    const wrap = U().el(
      '<section class="section"><div class="container">' +
        '<div class="card card--lg">' +
          '<span class="badge badge--' + level + '">' + U().levelLabel(level) + "</span>" +
          "<h1 style=\"margin-top:var(--sp-3)\">" + U().levelTitle(level) + "</h1>" +
          '<p class="u-row" style="color:var(--c-ink-soft)">' +
            "<span>📝 25 questions</span><span>•</span><span>⏱ ~" + U().estimatedMinutes(level) + " minutes</span><span>•</span><span>🔁 " + s.attempts + " attempt(s) so far</span>" +
          "</p>" +
          "<h3 style=\"margin-top:var(--sp-4)\">This test covers</h3>" +
          '<div class="u-row"></div>' +
          "<h3 style=\"margin-top:var(--sp-4)\">Before you begin</h3>" +
          '<ul>' +
            "<li>Read every question (and any passage or audio) carefully before choosing.</li>" +
            "<li>You can move between questions with Previous and Next before you submit.</li>" +
            "<li>There is no countdown timer unless your teacher has turned one on.</li>" +
            "<li>You'll see your score and explanations right after you submit the whole test.</li>" +
          "</ul>" +
          '<div class="u-row" style="margin-top:var(--sp-4)">' +
            '<a class="btn btn-primary" id="btn-begin" href="#/test/' + level + '/play">Begin Test</a>' +
            '<a class="btn btn-ghost" href="#/dashboard">Back to Dashboard</a>' +
          "</div>" +
        "</div>" +
      "</div></section>"
    );
    const badgeRow = wrap.querySelector(".u-row");
    Object.keys(SECTION_COUNTS).forEach(skill => {
      const b = U().el('<span class="badge badge--skill-' + skill + '"></span>');
      b.textContent = U().skillLabel(skill) + " (" + SECTION_COUNTS[skill] + ")";
      badgeRow.appendChild(b);
    });
    container.appendChild(wrap);
  }

  /* ---------------------------------------------------------------
     Player screen
     ------------------------------------------------------------- */
  function renderPlay(container, level) {
    let sess = EMC.quiz.getSession();
    if (!sess || sess.level !== level) sess = EMC.quiz.buildSession(level);
    container.innerHTML = "";

    const shell = U().el(
      '<section class="section section--tight"><div class="container">' +
        '<div class="quiz-header">' +
          '<div class="quiz-header__row">' +
            '<span class="badge badge--' + level + '">' + U().levelLabel(level) + "</span>" +
            '<span id="quiz-qnum" class="u-muted"></span>' +
            '<span id="quiz-timer" class="quiz-timer"></span>' +
          "</div>" +
          '<div class="progress-track"><div id="quiz-progress-fill" class="progress-fill"></div></div>' +
          '<div class="progress-label"><span id="quiz-progress-text"></span><span id="quiz-answered-text"></span></div>' +
        "</div>" +
        '<div id="quiz-slot"></div>' +
        '<div class="quiz-nav no-print">' +
          '<button type="button" class="btn btn-ghost" id="btn-prev">← Previous</button>' +
          '<button type="button" class="btn btn-primary" id="btn-submit-answer">Submit Answer</button>' +
          '<button type="button" class="btn btn-secondary" id="btn-next" style="display:none">Next →</button>' +
        "</div>" +
      "</div></section>"
    );
    container.appendChild(shell);

    const slot = shell.querySelector("#quiz-slot");
    const btnPrev = shell.querySelector("#btn-prev");
    const btnNext = shell.querySelector("#btn-next");
    const btnSubmit = shell.querySelector("#btn-submit-answer");

    let controller = null; // { getValue, isComplete }

    function paintHeader() {
      const total = sess.questions.length;
      const answered = Object.values(sess.answers).filter(a => a.locked).length;
      shell.querySelector("#quiz-qnum").textContent = "Question " + (sess.index + 1) + " of " + total;
      shell.querySelector("#quiz-progress-fill").style.width = Math.round(((sess.index + 1) / total) * 100) + "%";
      shell.querySelector("#quiz-progress-text").textContent = Math.round(((sess.index + 1) / total) * 100) + "% through the test";
      shell.querySelector("#quiz-answered-text").textContent = answered + " / " + total + " answered";
    }

    function paintTimer() {
      const t = shell.querySelector("#quiz-timer");
      if (!sess.timerDeadline) { t.textContent = ""; return; }
      const msLeft = sess.timerDeadline - Date.now();
      if (msLeft <= 0) {
        t.textContent = "Time's up!";
        if (sess.timerInterval) clearInterval(sess.timerInterval);
        U().toast("Time's up! Moving to Final Review.");
        location.hash = "#/test/" + level + "/review";
        return;
      }
      const m = Math.floor(msLeft / 60000);
      const s2 = Math.floor((msLeft % 60000) / 1000);
      t.textContent = "⏱ " + m + ":" + String(s2).padStart(2, "0");
    }
    if (sess.timerDeadline) {
      if (sess.timerInterval) clearInterval(sess.timerInterval);
      sess.timerInterval = setInterval(paintTimer, 1000);
      paintTimer();
    }

    function paintQuestion() {
      slot.innerHTML = "";
      const q = EMC.quiz.currentQuestion();
      const cardWrap = EMC.quiz.renderQuestionShell(q, sess.index, sess.questions.length);
      const body = cardWrap.querySelector(".question-card__body");
      controller = EMC.quiz.renderQuestionType(q, body, () => updateButtons());
      slot.appendChild(cardWrap);
      paintHeader();
      updateButtons();
      cardWrap.scrollIntoView({ behavior: EMC.a11y.motionOK() ? "smooth" : "auto", block: "start" });
    }

    function updateButtons() {
      const q = EMC.quiz.currentQuestion();
      const answered = EMC.quiz.isAnswered(q.id);
      btnPrev.disabled = sess.index === 0;
      const isLast = sess.index === sess.questions.length - 1;

      if (answered) {
        btnSubmit.style.display = "none";
        btnNext.style.display = "inline-flex";
        btnNext.textContent = isLast ? "Go to Final Review →" : "Next →";
      } else {
        btnSubmit.style.display = "inline-flex";
        btnNext.style.display = "none";
        btnSubmit.disabled = !(controller && controller.isComplete());
      }
    }

    btnSubmit.addEventListener("click", () => {
      if (!controller || !controller.isComplete()) return;
      const q = EMC.quiz.currentQuestion();
      EMC.quiz.submitAnswer(q, controller.getValue());
      paintQuestion();
    });

    btnNext.addEventListener("click", () => {
      const isLast = sess.index === sess.questions.length - 1;
      if (isLast) { location.hash = "#/test/" + level + "/review"; return; }
      sess.index++;
      paintQuestion();
    });

    btnPrev.addEventListener("click", () => {
      if (sess.index === 0) return;
      sess.index--;
      paintQuestion();
    });

    paintQuestion();
  }

  /* ---------------------------------------------------------------
     Final review grid before submission
     ------------------------------------------------------------- */
  function renderFinalReview(container, level) {
    let sess = EMC.quiz.getSession();
    if (!sess || sess.level !== level) { location.hash = "#/test/" + level; return; }
    container.innerHTML = "";

    const answered = sess.questions.filter(q => EMC.quiz.isAnswered(q.id)).length;
    const wrap = U().el(
      '<section class="section"><div class="container">' +
        "<h1>Final Review</h1>" +
        '<p class="u-muted">' + answered + " of " + sess.questions.length + ' answered. Tap any number to review or change that question before you submit the test.</p>' +
        '<div class="card card--lg"><div id="qgrid" class="qgrid"></div></div>' +
        '<div class="u-row" style="margin-top:var(--sp-5);justify-content:center">' +
          '<a class="btn btn-ghost" href="#/test/' + level + '/play">← Back to Questions</a>' +
          '<button type="button" class="btn btn-primary" id="btn-submit-test">Submit Test</button>' +
        "</div>" +
      "</div></section>"
    );
    container.appendChild(wrap);

    const grid = wrap.querySelector("#qgrid");
    sess.questions.forEach((q, i) => {
      const btn = U().el('<button type="button" class="qgrid__item"></button>');
      btn.textContent = i + 1;
      if (EMC.quiz.isAnswered(q.id)) btn.classList.add("is-answered");
      btn.addEventListener("click", () => {
        sess.index = i;
        location.hash = "#/test/" + level + "/play";
      });
      grid.appendChild(btn);
    });

    wrap.querySelector("#btn-submit-test").addEventListener("click", () => {
      const unanswered = sess.questions.length - answered;
      if (unanswered > 0 && !confirm(unanswered + " question(s) are unanswered and will be marked incorrect. Submit anyway?")) return;
      const result = EMC.quiz.scoreSession();
      EMC.storage.addAttempt(level, result);
      EMC.quiz.clearSession();
      location.hash = "#/test/" + level + "/results";
    });
  }

  function renderResultsRoute(container, level) {
    const attempt = EMC.storage.latestAttempt(level);
    if (!attempt) { location.hash = "#/test/" + level; return; }
    EMC.results.renderResults(container, level, attempt);
  }

  function renderAnswersRoute(container, level) {
    const attempt = EMC.storage.latestAttempt(level);
    if (!attempt) { location.hash = "#/test/" + level; return; }
    EMC.results.renderAnswerReview(container, level, attempt);
  }

  EMC.player = { renderIntro, renderPlay, renderFinalReview, renderResultsRoute, renderAnswersRoute };
})();
