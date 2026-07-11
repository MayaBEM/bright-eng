/* ==========================================================================
   PAGE: ADVENTURE MAP
   ========================================================================== */
window.MAQ = window.MAQ || {};
window.MAQ.pages = window.MAQ.pages || {};

window.MAQ.pages.adventureMap = {
  render: function (container) {
    var progress = window.MAQ.progress;
    if (!progress.hasLearner()) { window.MAQ.router.navigate("/setup"); return; }
    var state = progress.get();

    var landCards = window.MAQ.chapters.map(function (c) {
      var unlocked = progress.isChapterUnlocked(c.id);
      var pct = progress.getChapterProgressPercent(c.id);
      var hasCrystal = progress.hasCrystal(c.id);
      return (
        '<div class="card land-card ' + (unlocked ? "card-interactive" : "") + '" data-chapter="' + c.id + '" style="border-left:6px solid var(' + c.accentVar + ');">' +
        '<div class="land-emoji ' + (unlocked ? "float-shape" : "") + '" aria-hidden="true">' + c.icon + "</div>" +
        '<div style="flex:1;">' +
        "<h3>" + c.title + (unlocked ? "" : ' <span class="pill pill-neutral">🔒 Locked</span>') + "</h3>" +
        "<p>" + c.tagline + "</p>" +
        '<div class="land-meta">' +
        '<span class="pill ' + c.pillClass + '">' + pct + "% complete</span>" +
        '<span class="pill pill-neutral">5 quest stages</span>' +
        (hasCrystal ? '<span class="pill pill-sun">' + window.MAQ.icons.crystal(c.crystalColor, "") + " Crystal collected</span>" : "") +
        "</div>" +
        window.MAQ.ui.progressBar(pct) +
        "</div>" +
        "</div>"
      );
    }).join('<div style="text-align:center; font-size:1.5rem;" aria-hidden="true">↓</div>');

    var allDone = progress.allCrystalsCollected();

    var content =
      '<div class="map-wrap">' +
      '<div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px;">' +
      "<div><h1>Adventure Map</h1><p>Welcome back, " + window.MAQ.ui.escapeHtml(state.avatar + " " + state.learnerName) + "! Choose a land to continue your quest.</p></div>" +
      '<button class="btn btn-secondary" id="maq-mode-toggle">Mode: ' + (state.mode === "free" ? "Free Practice" : "Sequential Quest") + "</button>" +
      "</div>" +
      (allDone ? '<div class="card" style="background:var(--color-success-soft); border-color:var(--color-success); text-align:center; margin-bottom:24px;"><h3>🎉 All three crystals collected!</h3><p>Your quest is complete.</p><a class="btn btn-primary" href="#/complete">See the Celebration</a></div>' : "") +
      '<div class="land-path">' + landCards + "</div>" +
      "</div>";

    container.innerHTML = window.MAQ.components.shell(content, { showDashboard: true });
    window.MAQ.components.attachNavbarEvents();

    Array.prototype.forEach.call(document.querySelectorAll(".land-card"), function (card) {
      var chapterId = card.getAttribute("data-chapter");
      card.addEventListener("click", function () {
        var unlocked = progress.isChapterUnlocked(parseInt(chapterId));
        if (!unlocked) {
          window.MAQ.ui.announce("This land is still locked. Collect the previous crystal first, or switch to Free Practice mode.");
          return;
        }
        window.MAQ.router.navigate("/chapter/" + chapterId);
      });
    });

    document.getElementById("maq-mode-toggle").addEventListener("click", function () {
      var newMode = state.mode === "free" ? "sequential" : "free";
      progress.setMode(newMode);
      window.MAQ.audio.click();
      window.MAQ.router.rerender();
    });
  }
};
