/* ==========================================================================
   PAGE: OVERALL PROGRESS DASHBOARD
   ========================================================================== */
window.MAQ = window.MAQ || {};
window.MAQ.pages = window.MAQ.pages || {};

window.MAQ.pages.progressDashboard = {
  render: function (container) {
    var progress = window.MAQ.progress;
    if (!progress.hasLearner()) { window.MAQ.router.navigate("/setup"); return; }
    var state = progress.get();
    var overall = progress.getOverallStats();
    var badges = progress.getBadges();

    var chapterCards = window.MAQ.chapters.map(function (c) {
      var pct = progress.getChapterProgressPercent(c.id);
      var acc = progress.getChapterAccuracy(c.id);
      return '<div class="card">' +
        '<div style="display:flex; justify-content:space-between; align-items:center;">' +
        "<h4>" + c.icon + " " + c.title + "</h4>" +
        (progress.hasCrystal(c.id) ? window.MAQ.icons.crystal(c.crystalColor, "") : window.MAQ.icons.crystalLocked("")) +
        "</div>" +
        window.MAQ.ui.progressBar(pct) +
        '<p style="font-size:var(--fs-200); color:var(--text-secondary); margin-top:8px;">' + pct + "% of stages · " + acc.correct + "/" + acc.total + " correct · " + acc.points + " pts</p>" +
        "</div>";
    }).join("");

    var badgeGrid = badges.map(function (b) {
      return '<div class="card" style="text-align:center; opacity:' + (b.unlocked ? 1 : 0.4) + ';">' +
        '<div style="font-size:2rem;">' + b.icon + "</div>" +
        "<strong>" + b.name + "</strong>" +
        '<p style="font-size:var(--fs-100); color:var(--text-secondary);">' + b.description + "</p></div>";
    }).join("");

    var content =
      '<div class="dash-wrap">' +
      "<h1>Progress Dashboard</h1>" +
      "<p>" + state.avatar + " " + window.MAQ.ui.escapeHtml(state.learnerName) + "'s quest so far</p>" +
      '<div class="stat-row" style="justify-content:flex-start;">' +
      '<div class="stat-chip"><span class="stat-value">' + overall.accuracy + '%</span><span class="stat-label">Overall Accuracy</span></div>' +
      '<div class="stat-chip"><span class="stat-value">' + overall.points + "/" + overall.maxPoints + '</span><span class="stat-label">Quest Points</span></div>' +
      '<div class="stat-chip"><span class="stat-value">' + overall.correct + "/" + overall.total + '</span><span class="stat-label">Correct Answers</span></div>' +
      '<div class="stat-chip"><span class="stat-value">' + overall.crystalsCollected + "/3</span><span class=\"stat-label\">Crystals</span></div>" +
      "</div>" +
      "<h3>Chapters</h3>" +
      '<div class="dash-grid">' + chapterCards + "</div>" +
      "<h3 style=\"margin-top:32px;\">Badges</h3>" +
      '<div class="dash-grid">' + badgeGrid + "</div>" +
      (overall.incorrectQuestionIds.length ? '<div style="text-align:center; margin-top:24px;"><a class="btn btn-secondary" href="#/review">Review ' + overall.incorrectQuestionIds.length + " Question(s) Needing Practice</a></div>" : "") +
      '<div style="text-align:center; margin-top:32px;">' +
      '<a class="btn btn-secondary" href="#/parent">Parent / Teacher Summary</a> ' +
      '<button class="btn btn-danger" id="maq-reset-btn">Reset Progress</button>' +
      "</div></div>";

    container.innerHTML = window.MAQ.components.shell(content, { showDashboard: true });
    window.MAQ.components.attachNavbarEvents();

    document.getElementById("maq-reset-btn").addEventListener("click", function () {
      window.MAQ.ui.confirmModal({
        title: "Reset all progress?",
        body: "This will erase every stage result, crystal, and badge for this learner. This cannot be undone.",
        confirmText: "Yes, Reset Everything",
        cancelText: "Cancel",
        danger: true,
        onConfirm: function () {
          progress.reset();
          window.MAQ.router.navigate("/");
        }
      });
    });
  }
};
