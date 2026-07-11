/* ==========================================================================
   PAGE: QUEST STAGE SELECTION (stage briefing before play)
   ========================================================================== */
window.MAQ = window.MAQ || {};
window.MAQ.pages = window.MAQ.pages || {};

window.MAQ.pages.stageSelect = {
  render: function (container, params) {
    var progress = window.MAQ.progress;
    if (!progress.hasLearner()) { window.MAQ.router.navigate("/setup"); return; }
    var chapterId = parseInt(params.id, 10);
    var stageId = parseInt(params.sid, 10);
    var chapter = window.MAQ.chapters.find(function (c) { return c.id === chapterId; });
    var stage = window.MAQ.stageNames.find(function (s) { return s.id === stageId; });
    if (!chapter || !stage) { window.MAQ.router.navigate("/map"); return; }

    var questions = window.MAQ.getStageQuestions(chapterId, stageId);
    var topics = Array.from(new Set(questions.map(function (q) { return q.topic; })));
    var result = progress.getStageResult(chapterId, stageId);

    var content =
      '<div class="center-screen">' +
      '<div class="card setup-card pop-in" style="max-width:520px;">' +
      '<div style="font-size:2.6rem;" aria-hidden="true">' + stage.icon + "</div>" +
      "<h2>" + chapter.title + " — Stage " + stageId + "</h2>" +
      "<h3 style=\"color:var(--text-secondary); font-weight:600;\">" + stage.name + "</h3>" +
      '<p>This stage has <strong>5 questions</strong> covering:</p>' +
      '<div class="topic-tag-row" style="justify-content:center;">' + topics.map(function (t) { return '<span class="pill ' + chapter.pillClass + '">' + t + "</span>"; }).join("") + "</div>" +
      (result ? '<p style="margin-top:12px;">Last attempt: ' + result.correctCount + "/" + result.totalQuestions + " correct (" + result.accuracy + "% accuracy, " + result.pointsEarned + " points)</p>" : "") +
      '<button class="btn btn-primary btn-lg btn-block" id="maq-begin-stage" style="margin-top:16px;">' + (result ? "Play Again" : "Begin Stage") + "</button>" +
      '<a href="#/chapter/' + chapterId + '" class="btn btn-ghost btn-block">← Back to Chapter</a>' +
      "</div></div>";

    container.innerHTML = window.MAQ.components.shell(content, {});
    window.MAQ.components.attachNavbarEvents();

    document.getElementById("maq-begin-stage").addEventListener("click", function () {
      window.MAQ.audio.click();
      window.MAQ.router.navigate("/chapter/" + chapterId + "/play/" + stageId);
    });
  }
};
