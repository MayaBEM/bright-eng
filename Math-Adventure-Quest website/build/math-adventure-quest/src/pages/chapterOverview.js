/* ==========================================================================
   PAGE: CHAPTER OVERVIEW
   ========================================================================== */
window.MAQ = window.MAQ || {};
window.MAQ.pages = window.MAQ.pages || {};

window.MAQ.pages.chapterOverview = {
  render: function (container, params) {
    var progress = window.MAQ.progress;
    if (!progress.hasLearner()) { window.MAQ.router.navigate("/setup"); return; }
    var chapterId = parseInt(params.id, 10);
    var chapter = window.MAQ.chapters.find(function (c) { return c.id === chapterId; });
    if (!chapter) { window.MAQ.router.navigate("/map"); return; }

    if (!progress.isChapterUnlocked(chapterId)) {
      container.innerHTML = window.MAQ.components.shell(
        '<div class="results-wrap"><h2>🔒 This land is locked</h2><p>Collect the previous crystal to unlock ' + chapter.title + ', or switch to Free Practice mode from the Adventure Map.</p><a class="btn btn-primary" href="#/map">Back to the Map</a></div>', {}
      );
      window.MAQ.components.attachNavbarEvents();
      return;
    }

    var stageCards = window.MAQ.stageNames.map(function (stage) {
      var result = progress.getStageResult(chapterId, stage.id);
      var stars = result ? window.MAQ.scoring.starsFromAccuracy(result.accuracy) : 0;
      return (
        '<div class="card stage-card card-interactive" data-stage="' + stage.id + '">' +
        '<div class="stage-num">Stage ' + stage.id + "</div>" +
        '<div style="font-size:1.8rem;" aria-hidden="true">' + stage.icon + "</div>" +
        "<h4>" + stage.name + "</h4>" +
        (result
          ? window.MAQ.ui.stars(stars) + '<p style="font-size:var(--fs-200); color:var(--text-secondary);">' + result.correctCount + "/" + result.totalQuestions + " correct</p>"
          : '<p style="font-size:var(--fs-200); color:var(--text-secondary);">Not started</p>') +
        '<button class="btn btn-sm ' + (result ? "btn-secondary" : "btn-primary") + '" data-go-stage="' + stage.id + '">' + (result ? "Play Again" : "Begin") + "</button>" +
        "</div>"
      );
    }).join("");

    var pct = progress.getChapterProgressPercent(chapterId);
    var chAcc = progress.getChapterAccuracy(chapterId);

    var content =
      '<div class="map-wrap">' +
      '<a href="#/map" class="btn btn-ghost btn-sm">← Back to Map</a>' +
      '<div style="display:flex; align-items:center; gap:16px; margin:12px 0;">' +
      '<div style="font-size:3rem;" aria-hidden="true">' + chapter.icon + "</div>" +
      "<div><h1 style=\"margin-bottom:4px;\">" + chapter.title + "</h1><p style=\"margin:0;\">" + chapter.tagline + "</p></div>" +
      "</div>" +
      '<div class="card" style="margin-bottom:24px;">' +
      "<h3>What you'll practise</h3>" +
      "<ul>" + chapter.topics.map(function (t) { return "<li>" + t + "</li>"; }).join("") + "</ul>" +
      window.MAQ.ui.progressBar(pct) +
      '<p style="font-size:var(--fs-200); color:var(--text-secondary); margin-top:8px;">' + pct + "% of stages complete · " + chAcc.correct + "/" + chAcc.total + " questions correct so far · " + chAcc.points + "/" + chAcc.maxPoints + " quest points</p>" +
      "</div>" +
      '<h3>Quest Stages</h3>' +
      '<div class="stage-grid">' + stageCards + "</div>" +
      "</div>";

    container.innerHTML = window.MAQ.components.shell(content, { showDashboard: true });
    window.MAQ.components.attachNavbarEvents();

    Array.prototype.forEach.call(document.querySelectorAll("[data-go-stage]"), function (btn) {
      btn.addEventListener("click", function () {
        window.MAQ.router.navigate("/chapter/" + chapterId + "/stage/" + btn.getAttribute("data-go-stage"));
      });
    });
  }
};
