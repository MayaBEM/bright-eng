/* ==========================================================================
   PAGE: PARENT / TEACHER SUMMARY (print-friendly, supportive language)
   ========================================================================== */
window.MAQ = window.MAQ || {};
window.MAQ.pages = window.MAQ.pages || {};

window.MAQ.pages.parentSummary = {
  render: function (container) {
    var progress = window.MAQ.progress;
    if (!progress.hasLearner()) { window.MAQ.router.navigate("/setup"); return; }
    var state = progress.get();
    var overall = progress.getOverallStats();
    var dateStr = new Date().toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });

    // Topic-level accuracy across every attempted question
    var allQuestions = [].concat(window.MAQ.getChapterQuestions(1), window.MAQ.getChapterQuestions(2), window.MAQ.getChapterQuestions(3));
    var topicStats = {};
    allQuestions.forEach(function (q) {
      var attempted = state.answeredQuestionIds[q.id];
      if (!attempted) return;
      var correct = !!state.answeredCorrectlyFirstTry[q.id];
      if (!topicStats[q.topic]) topicStats[q.topic] = { correct: 0, total: 0 };
      topicStats[q.topic].total++;
      if (correct) topicStats[q.topic].correct++;
    });

    var strengths = [];
    var needsPractice = [];
    Object.keys(topicStats).forEach(function (topic) {
      var s = topicStats[topic];
      var pct = s.total ? Math.round((s.correct / s.total) * 100) : 0;
      if (pct >= 80) strengths.push(topic);
      else if (pct < 60) needsPractice.push(topic);
    });

    var chapterRows = window.MAQ.chapters.map(function (c) {
      var acc = progress.getChapterAccuracy(c.id);
      return "<tr><td>" + c.title + "</td><td>" + acc.correct + "/" + acc.total + "</td><td>" + acc.accuracy + "%</td><td>" + acc.points + "/" + acc.maxPoints + "</td><td>" + (progress.hasCrystal(c.id) ? "✅ Collected" : "In progress") + "</td></tr>";
    }).join("");

    var incorrectList = overall.incorrectQuestionIds.length
      ? "<ul>" + overall.incorrectQuestionIds.map(function (id) {
          var q = allQuestions.find(function (q2) { return q2.id === id; });
          return q ? "<li>" + window.MAQ.ui.escapeHtml(q.topic) + ": " + window.MAQ.ui.escapeHtml(q.text) + "</li>" : "";
        }).join("") + "</ul>"
      : "<p>No outstanding questions to review right now.</p>";

    var content =
      '<div class="summary-wrap">' +
      '<div class="no-print" style="text-align:right;"><button class="btn btn-primary" id="maq-print-summary">🖨️ Print Summary</button></div>' +
      "<h1>Parent / Teacher Summary</h1>" +
      "<p><strong>Learner:</strong> " + window.MAQ.ui.escapeHtml(state.avatar + " " + state.learnerName) + " &nbsp;·&nbsp; <strong>Date:</strong> " + dateStr + "</p>" +
      '<div class="stat-row" style="justify-content:flex-start;">' +
      '<div class="stat-chip"><span class="stat-value">' + overall.accuracy + '%</span><span class="stat-label">Overall Accuracy</span></div>' +
      '<div class="stat-chip"><span class="stat-value">' + overall.points + "/" + overall.maxPoints + '</span><span class="stat-label">Quest Points</span></div>' +
      '<div class="stat-chip"><span class="stat-value">' + overall.hintsUsed + '</span><span class="stat-label">Hints Used</span></div>' +
      "</div>" +

      "<h3>Chapter-by-Chapter Results</h3>" +
      '<table style="width:100%; border-collapse:collapse;"><thead><tr style="text-align:left; border-bottom:2px solid var(--border-soft);">' +
      "<th>Chapter</th><th>Correct</th><th>Accuracy</th><th>Points</th><th>Crystal</th></tr></thead><tbody>" + chapterRows + "</tbody></table>" +

      "<h3>Strong Topics</h3>" +
      (strengths.length ? '<div class="topic-tag-row">' + strengths.map(function (t) { return '<span class="pill pill-mint">' + t + "</span>"; }).join("") + "</div><p>Ready for more challenging questions in these areas.</p>" : "<p>Keep practising — strong topics will appear here once more stages are completed.</p>") +

      "<h3>Topics Needing More Practice</h3>" +
      (needsPractice.length ? '<div class="topic-tag-row">' + needsPractice.map(function (t) { return '<span class="pill pill-sun">' + t + "</span>"; }).join("") + "</div><p>Developing confidence here — a little more focused practice will help.</p>" : "<p>No specific gaps identified yet — nice, steady progress across topics.</p>") +

      "<h3>Questions Answered Incorrectly (for follow-up practice)</h3>" + incorrectList +

      "<h3>Suggested Next Steps</h3>" +
      "<p>" + (needsPractice.length
        ? "Consider revisiting the Review page together for " + needsPractice.join(", ") + " before moving on to new material."
        : "Continue at the current pace — this learner is progressing well across all topics attempted so far.") + "</p>" +

      '<div class="no-print" style="text-align:center; margin-top:20px;"><a class="btn btn-ghost" href="#/dashboard">Back to Dashboard</a></div>' +
      "</div>";

    container.innerHTML = window.MAQ.components.shell(content, { showDashboard: true });
    window.MAQ.components.attachNavbarEvents();
    document.getElementById("maq-print-summary").addEventListener("click", function () { window.print(); });
  }
};
