/* ==========================================================================
   PAGE: REVIEW INCORRECT ANSWERS
   Route "/review" reviews everything answered incorrectly so far.
   Route "/review/:chapterId/:stageId" scopes the review to one stage.
   ========================================================================== */
window.MAQ = window.MAQ || {};
window.MAQ.pages = window.MAQ.pages || {};

window.MAQ.pages.reviewIncorrect = {
  render: function (container, params) {
    var progress = window.MAQ.progress;
    if (!progress.hasLearner()) { window.MAQ.router.navigate("/setup"); return; }

    var allQuestions = [].concat(window.MAQ.getChapterQuestions(1), window.MAQ.getChapterQuestions(2), window.MAQ.getChapterQuestions(3));
    var incorrectIds;

    if (params && params.chapterId && params.stageId) {
      var result = progress.getStageResult(parseInt(params.chapterId, 10), parseInt(params.stageId, 10));
      incorrectIds = result ? result.incorrectQuestionIds : [];
    } else {
      incorrectIds = progress.getOverallStats().incorrectQuestionIds;
    }

    var incorrectQuestions = allQuestions.filter(function (q) { return incorrectIds.indexOf(q.id) !== -1; });

    var itemsHtml = incorrectQuestions.length
      ? incorrectQuestions.map(function (q) {
          var chapter = window.MAQ.chapters.find(function (c) { return c.id === q.chapterId; });
          return '<div class="card review-item">' +
            '<span class="pill ' + chapter.pillClass + '">' + chapter.title + " · " + q.topic + "</span>" +
            '<p class="review-q">' + window.MAQ.ui.renderMathText(q.text) + "</p>" +
            "<p><strong>Correct answer:</strong> " + window.MAQ.ui.renderMathText(getCorrectAnswerText(q)) + "</p>" +
            '<div class="solution-steps"><strong>Why:</strong><ol>' +
            q.solutionSteps.map(function (s) { return "<li>" + window.MAQ.ui.renderMathText(s) + "</li>"; }).join("") +
            "</ol></div></div>";
        }).join("")
      : '<div class="card" style="text-align:center;"><p>🎉 Nothing to review here — every question was answered correctly!</p></div>';

    function getCorrectAnswerText(q) {
      if (q.type === "mcq") return q.options.find(function (o) { return o.correct; }).text;
      if (q.type === "select") return q.selectOptions.filter(function (o) { return o.correct; }).map(function (o) { return o.text; }).join(", ");
      if (q.type === "order") return q.correctOrder.map(function (id) { return q.orderItems.find(function (i) { return i.id === id; }).text; }).join(" → ");
      if (q.type === "numeric") return q.answer;
      if (q.type === "tree") return q.treeCorrectValues.join(", ");
      return "";
    }

    var content =
      '<div class="prose-wrap">' +
      "<h1>Review Incorrect Answers</h1>" +
      "<p>Take a moment to read through the reasoning below — this is where the real learning happens.</p>" +
      itemsHtml +
      '<div style="text-align:center; margin-top:20px;"><a class="btn btn-primary" href="#/map">Back to the Map</a></div>' +
      "</div>";

    container.innerHTML = window.MAQ.components.shell(content, { showDashboard: true });
    window.MAQ.components.attachNavbarEvents();
  }
};
