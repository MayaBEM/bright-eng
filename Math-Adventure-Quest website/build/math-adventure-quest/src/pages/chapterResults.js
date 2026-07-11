/* ==========================================================================
   PAGE: CHAPTER RESULTS
   ========================================================================== */
window.MAQ = window.MAQ || {};
window.MAQ.pages = window.MAQ.pages || {};

window.MAQ.pages.chapterResults = {
  render: function (container, params) {
    var progress = window.MAQ.progress;
    if (!progress.hasLearner()) { window.MAQ.router.navigate("/setup"); return; }
    var chapterId = parseInt(params.id, 10);
    var chapter = window.MAQ.chapters.find(function (c) { return c.id === chapterId; });
    if (!chapter) { window.MAQ.router.navigate("/map"); return; }

    var acc = progress.getChapterAccuracy(chapterId);
    var hasCrystal = progress.hasCrystal(chapterId);
    var stageRows = window.MAQ.stageNames.map(function (s) {
      var r = progress.getStageResult(chapterId, s.id);
      return '<div class="card" style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px; text-align:left;">' +
        "<div><strong>Stage " + s.id + " — " + s.name + "</strong></div>" +
        "<div>" + (r ? window.MAQ.ui.stars(window.MAQ.scoring.starsFromAccuracy(r.accuracy)) + " " + r.correctCount + "/" + r.totalQuestions : '<span class="pill pill-neutral">Not played</span>') + "</div></div>";
    }).join("");

    var allCrystals = progress.allCrystalsCollected();

    var content =
      '<div class="results-wrap">' +
      (hasCrystal ? '<div class="crystal-display crystal-glow badge-unlock">' + window.MAQ.icons.crystal(chapter.crystalColor, "") + "</div>" : '<div class="crystal-display">' + window.MAQ.icons.crystalLocked("") + "</div>") +
      "<h1>" + chapter.title + (hasCrystal ? " — Complete! 🎉" : " — In Progress") + "</h1>" +
      (hasCrystal ? "<p><strong>" + chapter.crystalName + "</strong> has been added to your collection.</p>" : "<p>Finish all 5 stages to collect the " + chapter.crystalName + ".</p>") +
      '<div class="stat-row">' +
      '<div class="stat-chip"><span class="stat-value">' + acc.correct + "/" + acc.total + '</span><span class="stat-label">Correct Answers</span></div>' +
      '<div class="stat-chip"><span class="stat-value">' + acc.accuracy + '%</span><span class="stat-label">Accuracy</span></div>' +
      '<div class="stat-chip"><span class="stat-value">' + acc.points + "/" + acc.maxPoints + '</span><span class="stat-label">Quest Points</span></div>' +
      "</div>" +
      "<h3>Stage Breakdown</h3>" + stageRows +
      '<div style="display:flex; gap:12px; justify-content:center; flex-wrap:wrap; margin-top:20px;">' +
      '<a class="btn btn-secondary" href="#/map">Back to Map</a>' +
      (allCrystals ? '<a class="btn btn-primary" href="#/complete">Enter the Celebration →</a>' : "") +
      "</div></div>";

    container.innerHTML = window.MAQ.components.shell(content, { showDashboard: true });
    window.MAQ.components.attachNavbarEvents();
    if (hasCrystal) window.MAQ.audio.crystal();
  }
};
