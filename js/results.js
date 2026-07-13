/* =====================================================================
   EMC.results — score summary, skill breakdown, answer review, print.
   ===================================================================== */
(function () {
  "use strict";
  window.EMC = window.EMC || {};
  const U = () => EMC.util;

  function nextStepFor(level, percent) {
    const band = U().band(percent);
    if (band.key === "practice") return "Review this level's explanations, then retake " + U().levelTitle(level) + " once you feel ready.";
    if (band.key === "review") return "Look over the questions you missed, then try " + U().levelTitle(level) + " again in a few days.";
    if (level === "easy") return percent >= 75 ? "Great warm-up! Try Test Set 2: Medium next." : "Practice a little more, then move on to Test Set 2: Medium.";
    if (level === "medium") return percent >= 75 ? "Nicely done! You're ready for Test Set 3: Challenging." : "Review Test Set 2, then try Test Set 3: Challenging when ready.";
    return percent >= 75 ? "Excellent! You've completed all three levels with strong results." : "Review your answers, then retake Test Set 3: Challenging for extra practice.";
  }

  function renderResults(container, level, attempt) {
    const band = U().band(attempt.percent);
    container.innerHTML = "";

    const header = U().el(
      '<div class="u-center" style="margin-bottom:var(--sp-6)">' +
        '<span class="badge badge--' + level + '">' + U().levelLabel(level) + "</span>" +
        "<h1>" + U().levelTitle(level) + " — Results</h1>" +
        '<p class="u-muted">Completed ' + U().formatDate(attempt.date) + "</p>" +
      "</div>"
    );
    container.appendChild(header);

    const scoreCard = U().el('<div class="card card--lg score-reveal"></div>');
    scoreCard.innerHTML =
      '<div class="score-reveal__ring" style="--pct:' + attempt.percent + '">' +
        '<div class="score-reveal__ring-inner">' +
          '<div class="score-reveal__pct">' + attempt.percent + "%</div>" +
          '<div class="score-reveal__frac">' + attempt.score + " / " + attempt.total + "</div>" +
        "</div>" +
      "</div>" +
      '<h2 style="margin-top:var(--sp-4)">' + U().escapeHtml(band.label) + "</h2>" +
      '<p class="u-muted">' + bandDescription(band.key) + "</p>";
    container.appendChild(scoreCard);
    if ((band.key === "strong" || band.key === "good") && EMC.a11y.motionOK()) {
      launchConfetti(scoreCard);
    }

    const skillCard = U().el('<div class="card card--lg" style="margin-top:var(--sp-5)"><h2>Skill Breakdown</h2></div>');
    EMC.data.SKILLS.forEach(skill => {
      const pct = attempt.skillPercents[skill];
      const row = U().el('<div class="skill-bar-row"></div>');
      row.innerHTML =
        '<span class="skill-bar-row__label">' + U().skillLabel(skill) + "</span>" +
        '<span class="skill-bar-row__track"><span class="skill-bar-row__fill" style="width:' + (pct == null ? 0 : pct) + '%"></span></span>' +
        '<span class="skill-bar-row__pct">' + (pct == null ? "—" : pct + "%") + "</span>";
      skillCard.appendChild(row);
    });
    container.appendChild(skillCard);

    const strengths = EMC.data.SKILLS.filter(s => attempt.skillPercents[s] != null && attempt.skillPercents[s] >= 80);
    const toReview = EMC.data.SKILLS.filter(s => attempt.skillPercents[s] != null && attempt.skillPercents[s] < 60);

    const insightsCard = U().el('<div class="card card--lg" style="margin-top:var(--sp-5)"></div>');
    insightsCard.innerHTML =
      "<h2>What This Tells Us</h2>" +
      '<p><strong>Strengths:</strong> ' + (strengths.length ? strengths.map(U().skillLabel).join(", ") : "Keep practicing — strengths will show up as you review more.") + "</p>" +
      '<p><strong>Skills to review:</strong> ' + (toReview.length ? toReview.map(U().skillLabel).join(", ") : "No major gaps — nice and even performance!") + "</p>" +
      '<p><strong>Recommended next step:</strong> ' + nextStepFor(level, attempt.percent) + "</p>";
    container.appendChild(insightsCard);

    const actions = U().el('<div class="u-row" style="margin-top:var(--sp-6);justify-content:center" ></div>');
    actions.innerHTML =
      '<a class="btn btn-primary" href="#/test/' + level + '/answers">Review My Answers</a>' +
      '<a class="btn btn-secondary" href="#/dashboard">Back to Dashboard</a>' +
      '<button type="button" class="btn btn-ghost no-print" id="btn-print-results">🖨 Print Summary</button>';
    container.appendChild(actions);

    actions.querySelector("#btn-print-results").addEventListener("click", () => window.print());
  }

  /** A brief, tasteful confetti burst to celebrate a strong or good result. */
  function launchConfetti(hostEl) {
    const colors = ["var(--confetti-1)", "var(--confetti-2)", "var(--confetti-3)", "var(--confetti-4)", "var(--confetti-5)"];
    const layer = U().el('<div class="confetti-layer" aria-hidden="true"></div>');
    for (let i = 0; i < 18; i++) {
      const piece = document.createElement("span");
      piece.className = "confetti-piece";
      piece.style.left = (5 + Math.random() * 90) + "%";
      piece.style.background = colors[i % colors.length];
      piece.style.animationDelay = (Math.random() * 0.4) + "s";
      piece.style.transform = "rotate(" + Math.floor(Math.random() * 360) + "deg)";
      layer.appendChild(piece);
    }
    hostEl.appendChild(layer);
    setTimeout(() => layer.remove(), 2200);
  }

  function bandDescription(key) {
    return {
      strong: "This score shows excellent memory of what was learned earlier. Keep it up!",
      good: "This is a solid score. A little more review will make it even stronger.",
      review: "A good start — going over a few skills again will really help.",
      practice: "This is a great chance to review the material again before the next check-in."
    }[key] || "";
  }

  function renderAnswerReview(container, level, attempt) {
    container.innerHTML = "";
    const header = U().el(
      '<div style="margin-bottom:var(--sp-5)">' +
        "<h1>" + U().levelTitle(level) + " — Answer Review</h1>" +
        '<p class="u-muted">Every question, your answer, the correct answer, and why.</p>' +
      "</div>"
    );
    container.appendChild(header);

    attempt.answers.forEach((a, i) => {
      const item = U().el('<div class="review-item"></div>');
      item.classList.add(a.isCorrect ? "review-item--correct" : "review-item--wrong");
      let yourAnswerText = "(no answer)";
      let correctAnswerText = "";
      if (a.questionType === "match") {
        yourAnswerText = a.answered ? describeMatch(a, a.value) : "(no answer)";
        correctAnswerText = a.pairs.map(p => p.left + " → " + p.right).join("; ");
      } else if (a.questionType === "order") {
        yourAnswerText = a.answered ? a.value.join(" → ") : "(no answer)";
        correctAnswerText = a.items.join(" → ");
      } else {
        yourAnswerText = a.answered ? a.value : "(no answer)";
        correctAnswerText = a.correctAnswer;
      }

      item.innerHTML =
        '<div class="review-item__q">Q' + (i + 1) + ". " + U().escapeHtml(a.question.split("\n")[0]) + "</div>" +
        '<div class="review-item__a"><span class="lbl">Your answer: </span>' + U().escapeHtml(yourAnswerText) + "</div>" +
        '<div class="review-item__a"><span class="lbl">Correct answer: </span>' + U().escapeHtml(correctAnswerText) + "</div>" +
        '<div class="review-item__a" style="margin-top:6px">' + U().nl2br(a.explanation) + "</div>";
      container.appendChild(item);
    });

    const actions = U().el('<div class="u-row" style="margin-top:var(--sp-5);justify-content:center"></div>');
    actions.innerHTML =
      '<a class="btn btn-secondary" href="#/test/' + level + '/results">Back to Results</a>' +
      '<a class="btn btn-primary" href="#/dashboard">Back to Dashboard</a>';
    container.appendChild(actions);
  }

  function describeMatch(a, map) {
    return a.pairs.map((p, i) => {
      const rid = map[i];
      const chosenRight = rid == null ? "(none)" : (a.pairs.find((pp, idx) => (pp._rid != null ? pp._rid : idx) === rid) || {}).right;
      return p.left + " → " + chosenRight;
    }).join("; ");
  }

  EMC.results = { renderResults, renderAnswerReview };
})();
