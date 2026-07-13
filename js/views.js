/* =====================================================================
   EMC.views — Landing, Dashboard, About, Terms.
   ===================================================================== */
(function () {
  "use strict";
  window.EMC = window.EMC || {};
  const U = () => EMC.util;

  function renderLanding(container) {
    container.innerHTML = "";
    const c = EMC.content;

    const hero = U().el(
      '<section class="section hero">' +
        '<span class="hero__decor hero__decor--1" aria-hidden="true"></span>' +
        '<span class="hero__decor hero__decor--2" aria-hidden="true"></span>' +
        '<span class="hero__decor hero__decor--3" aria-hidden="true"></span>' +
        '<span class="hero__star hero__star--1" aria-hidden="true">✨</span>' +
        '<span class="hero__star hero__star--2" aria-hidden="true">⭐</span>' +
        '<span class="hero__star hero__star--3" aria-hidden="true">✨</span>' +
        '<div class="container">' +
          '<span class="badge hero__eyebrow fade-up">A Bright EngMath review resource</span>' +
          '<h1 class="fade-up" style="animation-delay:0.05s">' + c.headline + "</h1>" +
          '<p class="hero__sub fade-up" style="animation-delay:0.1s">' + c.subtitle + "</p>" +
          '<div class="hero__cta fade-up" style="animation-delay:0.16s">' +
            '<a class="btn btn-primary" href="#/dashboard">Start Reviewing</a>' +
            '<a class="btn btn-secondary" href="#/about">Learn More</a>' +
          "</div>" +
        "</div>" +
      "</section>"
    );
    container.appendChild(hero);

    const featSection = U().el('<section class="section section--tight"><div class="container"></div></section>');
    const grid = U().el('<div class="card-grid"></div>');
    c.features.forEach((f, i) => {
      const card = U().el('<div class="card feature-card fade-up"></div>');
      card.style.animationDelay = (i * 0.06) + "s";
      card.innerHTML =
        '<div class="feature-card__icon" aria-hidden="true">' + f.icon + "</div>" +
        "<h3>" + f.title + "</h3>" +
        "<p>" + f.desc + "</p>";
      grid.appendChild(card);
    });
    featSection.querySelector(".container").appendChild(grid);
    container.appendChild(featSection);

    const purpose = U().el(
      '<section class="section section--tight"><div class="container">' +
        '<div class="card card--lg">' +
          "<h2>Why This Resource Exists</h2>" +
          "<p>" + c.intro + "</p>" +
          "<h3 style=\"margin-top:var(--sp-4)\">Learning Objectives</h3>" +
          '<ul>' + c.objectives.map(o => "<li>" + o + "</li>").join("") + "</ul>" +
        "</div>" +
      "</div></section>"
    );
    container.appendChild(purpose);

    const cta = U().el(
      '<section class="section"><div class="container u-center">' +
        "<h2>Ready to check what you remember?</h2>" +
        '<p class="u-muted">Three levels, 75 original questions, and clear explanations for every answer.</p>' +
        '<a class="btn btn-primary" href="#/dashboard">Go to My Dashboard</a>' +
      "</div></section>"
    );
    container.appendChild(cta);
  }

  function levelStatus(level) {
    const best = EMC.storage.bestAttempt(level);
    const latest = EMC.storage.latestAttempt(level);
    return { best, latest, attempts: EMC.storage.attempts(level).length };
  }

  function recommendedNext() {
    const order = ["easy", "medium", "challenging"];
    for (const lv of order) {
      const s = levelStatus(lv);
      if (!s.attempts) return lv;
      if (s.best.percent < 75) return lv;
    }
    return "challenging";
  }

  function renderDashboard(container) {
    container.innerHTML = "";
    const rec = recommendedNext();

    const header = U().el(
      '<div style="margin-bottom:var(--sp-6)">' +
        "<h1>My Dashboard</h1>" +
        '<p class="u-muted">Track your progress across all three test sets. Everything is saved on this device.</p>' +
      "</div>"
    );
    container.appendChild(header);

    const recCard = U().el(
      '<div class="card callout--info" style="border-radius:var(--radius-lg);margin-bottom:var(--sp-6);display:flex;justify-content:space-between;align-items:center;gap:var(--sp-3);flex-wrap:wrap">' +
        '<div><strong>Recommended next:</strong> ' + U().levelTitle(rec) + "</div>" +
        '<a class="btn btn-primary btn-sm" href="#/test/' + rec + '">Start This Test</a>' +
      "</div>"
    );
    container.appendChild(recCard);

    const grid = U().el('<div class="card-grid"></div>');
    ["easy", "medium", "challenging"].forEach((level, i) => {
      const s = levelStatus(level);
      const card = U().el('<div class="card test-card fade-up"></div>');
      card.style.animationDelay = (i * 0.08) + "s";
      const bandLabel = s.best ? U().band(s.best.percent).label : null;
      card.innerHTML =
        '<div class="test-card__head">' +
          '<div><span class="badge badge--' + level + '">' + U().levelLabel(level) + "</span>" +
          "<h3 style=\"margin-top:var(--sp-2)\">" + U().levelTitle(level) + "</h3></div>" +
          (s.best ? '<div class="test-card__score">' + s.best.percent + "%</div>" : "") +
        "</div>" +
        '<div class="test-card__meta"><span>25 questions</span><span>•</span><span>~' + U().estimatedMinutes(level) + " min</span></div>" +
        (s.attempts
          ? '<p class="u-muted">Attempts: ' + s.attempts + " • Best: " + s.best.percent + "% • Latest: " + s.latest.percent + "%" + (bandLabel ? " (" + bandLabel + ")" : "") + "</p>"
          : '<p class="u-muted">Not attempted yet.</p>') +
        '<div class="u-row">' +
          '<a class="btn btn-primary btn-sm" href="#/test/' + level + '">' + (s.attempts ? "Retake Test" : "Start Test") + "</a>" +
          (s.attempts ? '<a class="btn btn-ghost btn-sm" href="#/test/' + level + '/results">View Last Results</a>' : "") +
        "</div>";
      grid.appendChild(card);
    });
    container.appendChild(grid);

    // Overall skill comparison across all attempted tests
    const overall = U().el('<div class="card card--lg" style="margin-top:var(--sp-6)"><h2>Skill Comparison (All Tests)</h2></div>');
    const skillTotals = {};
    EMC.data.SKILLS.forEach(s => { skillTotals[s] = { correct: 0, total: 0 }; });
    let anyAttempt = false;
    ["easy", "medium", "challenging"].forEach(level => {
      const latest = EMC.storage.latestAttempt(level);
      if (!latest) return;
      anyAttempt = true;
      EMC.data.SKILLS.forEach(s => {
        skillTotals[s].correct += latest.skillBreakdown[s].correct;
        skillTotals[s].total += latest.skillBreakdown[s].total;
      });
    });
    if (!anyAttempt) {
      overall.appendChild(U().el('<p class="u-muted">Complete a test to see your skill comparison here.</p>'));
    } else {
      EMC.data.SKILLS.forEach(skill => {
        const t = skillTotals[skill];
        const pct = t.total > 0 ? Math.round((t.correct / t.total) * 100) : null;
        const row = U().el('<div class="skill-bar-row"></div>');
        row.innerHTML =
          '<span class="skill-bar-row__label">' + U().skillLabel(skill) + "</span>" +
          '<span class="skill-bar-row__track"><span class="skill-bar-row__fill" style="width:' + (pct == null ? 0 : pct) + '%"></span></span>' +
          '<span class="skill-bar-row__pct">' + (pct == null ? "—" : pct + "%") + "</span>";
        overall.appendChild(row);
      });
    }
    container.appendChild(overall);

    const resetRow = U().el(
      '<div class="u-row" style="margin-top:var(--sp-6);justify-content:center">' +
        '<button type="button" class="btn btn-ghost btn-sm" id="btn-reset-progress">Reset Progress</button>' +
      "</div>"
    );
    container.appendChild(resetRow);
    resetRow.querySelector("#btn-reset-progress").addEventListener("click", () => {
      if (confirm("This will permanently erase all saved scores and progress on this device. Are you sure?")) {
        EMC.storage.resetAll();
        U().toast("Progress has been reset.");
        renderDashboard(container);
      }
    });
  }

  function renderAbout(container) {
    container.innerHTML = "";
    const c = EMC.content;
    const wrap = U().el(
      '<section class="section"><div class="container">' +
        "<h1>About This Resource</h1>" +
        '<div class="card card--lg u-stack">' +
          "<p>" + c.aboutBody + "</p>" +
          "<h3>What's Included</h3>" +
          '<ul>' + c.aboutIncludes.map(i => "<li>" + i + "</li>").join("") + "</ul>" +
          "<h3>Original Content</h3>" +
          '<p>All questions, passages, listening scripts, and explanations are original Bright EngMath material. ' +
          'Nothing is copied from any textbook, publisher, or third-party source. This resource is not affiliated with, ' +
          "or a companion to, any specific textbook series.</p>" +
        "</div>" +
      "</div></section>"
    );
    container.appendChild(wrap);
  }

  function renderTerms(container) {
    container.innerHTML = "";
    const c = EMC.content;
    const wrap = U().el(
      '<section class="section"><div class="container">' +
        "<h1>Terms of Classroom Use</h1>" +
        '<div class="card card--lg">' +
          '<ul class="u-stack" style="padding-left:1.1em">' + c.termsBody.map(t => "<li>" + t + "</li>").join("") + "</ul>" +
        "</div>" +
      "</div></section>"
    );
    container.appendChild(wrap);
  }

  function renderInstructionsPage(container) {
    container.innerHTML = "";
    const c = EMC.content;
    const wrap = U().el(
      '<section class="section"><div class="container">' +
        "<h1>Instructions for Students</h1>" +
        '<div class="card card--lg">' +
          '<ol class="u-stack" style="padding-left:1.1em">' + c.studentInstructions.map(t => "<li>" + t + "</li>").join("") + "</ol>" +
        "</div>" +
        '<div class="u-center" style="margin-top:var(--sp-5)"><a class="btn btn-primary" href="#/dashboard">Go to My Dashboard</a></div>' +
      "</div></section>"
    );
    container.appendChild(wrap);
  }

  EMC.views = { renderLanding, renderDashboard, renderAbout, renderTerms, renderInstructionsPage, levelStatus };
})();
