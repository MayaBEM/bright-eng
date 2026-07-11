/* ==========================================================================
   PAGE: FINAL QUEST COMPLETION
   ========================================================================== */
window.MAQ = window.MAQ || {};
window.MAQ.pages = window.MAQ.pages || {};

window.MAQ.pages.finalCompletion = {
  render: function (container) {
    var progress = window.MAQ.progress;
    if (!progress.hasLearner()) { window.MAQ.router.navigate("/setup"); return; }
    if (!progress.allCrystalsCollected()) { window.MAQ.router.navigate("/map"); return; }

    var overall = progress.getOverallStats();
    var crystalsHtml = window.MAQ.chapters.map(function (c) {
      return '<div class="crystal-glow" style="display:inline-block; margin:0 12px;">' + window.MAQ.icons.crystal(c.crystalColor, "") + "</div>";
    }).join("");

    var content =
      '<div class="results-wrap celebration-pop">' +
      '<div class="hero-eyebrow">Bright EngMath</div>' +
      "<h1>🎉 Quest Complete! 🎉</h1>" +
      "<p>Congratulations, " + progress.get().avatar + " " + window.MAQ.ui.escapeHtml(progress.get().learnerName) + "! You have collected all three crystals and completed the Math Adventure Quest.</p>" +
      '<div class="crystal-display">' + crystalsHtml + "</div>" +
      '<div class="stat-row">' +
      '<div class="stat-chip"><span class="stat-value">' + overall.accuracy + '%</span><span class="stat-label">Overall Accuracy</span></div>' +
      '<div class="stat-chip"><span class="stat-value">' + overall.points + "/" + overall.maxPoints + '</span><span class="stat-label">Quest Points</span></div>' +
      "</div>" +
      '<div style="display:flex; gap:12px; justify-content:center; flex-wrap:wrap; margin-top:20px;">' +
      '<a class="btn btn-primary btn-lg" href="#/certificate">🏆 View My Certificate</a>' +
      '<a class="btn btn-secondary" href="#/parent">Parent / Teacher Summary</a>' +
      '<a class="btn btn-ghost" href="#/map">Back to the Map</a>' +
      "</div></div>";

    container.innerHTML = window.MAQ.components.shell(content, { showDashboard: true });
    window.MAQ.components.attachNavbarEvents();

    if (!progress.get().reducedMotion) {
      var c = document.createElement("div");
      c.className = "confetti-container";
      c.innerHTML = window.MAQ.icons.confetti(60);
      document.body.appendChild(c);
      setTimeout(function () { c.remove(); }, 2600);
    }
    window.MAQ.audio.unlock();
  }
};
