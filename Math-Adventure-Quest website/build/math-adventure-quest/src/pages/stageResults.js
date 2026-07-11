/* ==========================================================================
   PAGE: STAGE RESULTS
   ========================================================================== */
window.MAQ = window.MAQ || {};
window.MAQ.pages = window.MAQ.pages || {};

window.MAQ.pages.stageResults = {
  render: function (container, params) {
    var progress = window.MAQ.progress;
    if (!progress.hasLearner()) { window.MAQ.router.navigate("/setup"); return; }
    var chapterId = parseInt(params.chapterId, 10);
    var stageId = parseInt(params.stageId, 10);
    var chapter = window.MAQ.chapters.find(function (c) { return c.id === chapterId; });
    var stage = window.MAQ.stageNames.find(function (s) { return s.id === stageId; });
    var result = progress.getStageResult(chapterId, stageId);
    if (!chapter || !stage || !result) { window.MAQ.router.navigate("/chapter/" + chapterId); return; }

    var stars = window.MAQ.scoring.starsFromAccuracy(result.accuracy);
    var chapterJustFinished = stageId === 5 && progress.hasCrystal(chapterId);
    var isPerfect = result.accuracy === 100;

    var content =
      '<div class="results-wrap">' +
      '<div class="idle-character" aria-hidden="true">' + window.MAQ.icons.mascot(result.accuracy >= 60 ? "happy" : "sad") + "</div>" +
      "<h1>" + (isPerfect ? "Flawless Victory!" : "Stage Complete!") + "</h1>" +
      "<p>" + chapter.title + " — " + stage.name + "</p>" +
      window.MAQ.ui.stars(stars) +
      '<div class="stat-row">' +
      '<div class="stat-chip"><span class="stat-value">' + result.correctCount + "/" + result.totalQuestions + '</span><span class="stat-label">Accuracy</span></div>' +
      '<div class="stat-chip"><span class="stat-value">' + result.accuracy + '%</span><span class="stat-label">Score</span></div>' +
      '<div class="stat-chip"><span class="stat-value">' + result.pointsEarned + "/" + result.pointsPossible + '</span><span class="stat-label">Quest Points</span></div>' +
      "</div>" +
      (result.hintsUsed > 0 ? "<p style=\"color:var(--text-secondary);\">💡 Hints used: " + result.hintsUsed + "</p>" : "") +
      (chapterJustFinished ? '<div class="crystal-display crystal-glow">' + window.MAQ.icons.crystal(chapter.crystalColor, "") + "</div><p><strong>" + chapter.crystalName + " collected!</strong></p>" : "") +
      '<div style="display:flex; gap:12px; justify-content:center; flex-wrap:wrap; margin-top:20px;">' +
      (result.incorrectQuestionIds.length ? '<a class="btn btn-secondary" href="#/review/' + chapterId + '/' + stageId + '">Review Incorrect Answers</a>' : "") +
      '<button class="btn btn-secondary" id="maq-retry-btn">Play Again</button>' +
      (chapterJustFinished
        ? '<a class="btn btn-primary" href="#/chapter/' + chapterId + '/summary">View Chapter Results →</a>'
        : (stageId < 5
          ? '<a class="btn btn-primary" href="#/chapter/' + chapterId + '/stage/' + (stageId + 1) + '">Next Stage →</a>'
          : '<a class="btn btn-primary" href="#/chapter/' + chapterId + '">Back to Chapter</a>')) +
      "</div></div>";

    container.innerHTML = window.MAQ.components.shell(content, { showDashboard: true });
    window.MAQ.components.attachNavbarEvents();

    if (isPerfect && !progress.get().reducedMotion) spawnConfetti();
    if (chapterJustFinished) window.MAQ.audio.crystal();

    document.getElementById("maq-retry-btn").addEventListener("click", function () {
      window.MAQ.router.navigate("/chapter/" + chapterId + "/play/" + stageId);
    });

    function spawnConfetti() {
      var c = document.createElement("div");
      c.className = "confetti-container";
      c.innerHTML = window.MAQ.icons.confetti(40);
      document.body.appendChild(c);
      setTimeout(function () { c.remove(); }, 2400);
    }
  }
};
