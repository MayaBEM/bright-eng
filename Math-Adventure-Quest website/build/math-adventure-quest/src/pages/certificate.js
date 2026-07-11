/* ==========================================================================
   PAGE: ACHIEVEMENT CERTIFICATE (print / save-as-PDF friendly)
   ========================================================================== */
window.MAQ = window.MAQ || {};
window.MAQ.pages = window.MAQ.pages || {};

window.MAQ.pages.certificate = {
  render: function (container) {
    var progress = window.MAQ.progress;
    if (!progress.hasLearner()) { window.MAQ.router.navigate("/setup"); return; }
    var state = progress.get();
    var overall = progress.getOverallStats();
    var allDone = progress.allCrystalsCollected();
    var dateStr = new Date().toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });

    var crystalsHtml = window.MAQ.chapters.map(function (c) {
      var has = progress.hasCrystal(c.id);
      return has ? window.MAQ.icons.crystal(c.crystalColor, "") : window.MAQ.icons.crystalLocked("");
    }).join("");

    var content =
      '<div class="prose-wrap no-print" style="text-align:center;">' +
      (allDone ? "<p>Ready to print or save as a PDF using your browser's print dialog.</p>" : '<p style="color:var(--color-danger);">Complete all three chapters to unlock the full certificate — showing progress so far.</p>') +
      '<button class="btn btn-primary" id="maq-print-btn">🖨️ Print / Save as PDF</button>' +
      "</div>" +
      '<div class="certificate">' +
      '<p style="letter-spacing:0.15em; text-transform:uppercase; color:var(--color-orange-deep); font-weight:800;">Bright EngMath</p>' +
      "<h1 style=\"margin-bottom:0;\">Certificate of Achievement</h1>" +
      "<p style=\"font-size:var(--fs-400);\">Math Adventure Quest " + (allDone ? "Completed" : "— Progress Certificate") + "</p>" +
      "<p>This certifies that</p>" +
      '<div class="cert-name">' + window.MAQ.ui.escapeHtml(state.avatar + " " + state.learnerName) + "</div>" +
      "<p>has " + (allDone ? "successfully completed" : "made great progress through") + " the Math Adventure Quest, mastering Factors, HCF &amp; LCM, and Fractions.</p>" +
      '<div class="cert-crowns" aria-hidden="true">' + crystalsHtml + "</div>" +
      "<p><strong>Overall Accuracy:</strong> " + overall.accuracy + "% &nbsp;·&nbsp; <strong>Quest Points:</strong> " + overall.points + "/" + overall.maxPoints + "</p>" +
      '<div class="cert-sign">' +
      "<div>Date<br/><strong>" + dateStr + "</strong></div>" +
      "<div>Issued by<br/><strong>Bright EngMath</strong></div>" +
      "</div>" +
      '<p style="font-size:var(--fs-100); color:var(--text-secondary); margin-top:20px;">This certificate recognises independent practice achievement and is not an accredited academic qualification.</p>' +
      "</div>" +
      '<div class="prose-wrap no-print" style="text-align:center;"><a class="btn btn-ghost" href="#/map">Back to the Map</a></div>';

    container.innerHTML = window.MAQ.components.shell(content, {});
    window.MAQ.components.attachNavbarEvents();

    document.getElementById("maq-print-btn").addEventListener("click", function () { window.print(); });
  }
};
