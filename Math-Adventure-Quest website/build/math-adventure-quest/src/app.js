/* ==========================================================================
   APP BOOTSTRAP — registers every route and starts the router.
   ========================================================================== */
(function () {
  // Apply saved reduced-motion preference immediately (before first paint of content)
  if (window.MAQ.progress.get().reducedMotion) {
    document.body.classList.add("reduced-motion");
  }

  var R = window.MAQ.router;
  var P = window.MAQ.pages;

  R.register("/", function (root) { P.landing.render(root); });
  R.register("/setup", function (root) { P.nameSetup.render(root); });
  R.register("/map", function (root) { P.adventureMap.render(root); });
  R.register("/chapter/:id", function (root, params) { P.chapterOverview.render(root, params); });
  R.register("/chapter/:id/stage/:sid", function (root, params) { P.stageSelect.render(root, params); });
  R.register("/chapter/:chapterId/play/:stageId", function (root, params) { P.questionScreen.render(root, params); });
  R.register("/chapter/:chapterId/results/:stageId", function (root, params) { P.stageResults.render(root, params); });
  R.register("/chapter/:id/summary", function (root, params) { P.chapterResults.render(root, params); });
  R.register("/review", function (root) { P.reviewIncorrect.render(root, {}); });
  R.register("/review/:chapterId/:stageId", function (root, params) { P.reviewIncorrect.render(root, params); });
  R.register("/dashboard", function (root) { P.progressDashboard.render(root); });
  R.register("/complete", function (root) { P.finalCompletion.render(root); });
  R.register("/certificate", function (root) { P.certificate.render(root); });
  R.register("/parent", function (root) { P.parentSummary.render(root); });
  R.register("/help", function (root) { P.help.render(root); });
  R.register("/credits", function (root) { P.credits.render(root); });

  R.start();
})();
