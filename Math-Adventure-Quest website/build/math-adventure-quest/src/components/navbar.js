/* ==========================================================================
   NAVBAR + FOOTER (shared shell)
   ========================================================================== */
window.MAQ = window.MAQ || {};

window.MAQ.components = window.MAQ.components || {};

window.MAQ.components.navbar = function (opts) {
  opts = opts || {};
  var soundOn = window.MAQ.progress.get().soundOn;
  return (
    '<a class="skip-link" href="#maq-main">Skip to main content</a>' +
    '<header class="navbar no-print">' +
    '<div class="navbar-inner">' +
    '<a class="brand" href="#/map" aria-label="Math Adventure Quest home">' +
    '<span class="brand-mark" aria-hidden="true">🧭</span> Math Adventure Quest</a>' +
    '<div class="nav-actions">' +
    (opts.showDashboard ? '<a class="btn btn-ghost btn-sm" href="#/dashboard">Progress</a>' : "") +
    '<a class="btn btn-ghost btn-sm" href="#/help">Help</a>' +
    '<button class="btn-icon" id="maq-sound-toggle" aria-pressed="' + soundOn + '" aria-label="' + (soundOn ? "Mute sound effects" : "Unmute sound effects") + '" title="' + (soundOn ? "Sound on" : "Sound off") + '">' +
    (soundOn ? "🔊" : "🔇") +
    "</button>" +
    "</div></div></header>"
  );
};

window.MAQ.components.attachNavbarEvents = function () {
  var btn = document.getElementById("maq-sound-toggle");
  if (btn) {
    btn.addEventListener("click", function () {
      var on = window.MAQ.progress.toggleSound();
      btn.textContent = on ? "🔊" : "🔇";
      btn.setAttribute("aria-pressed", on);
      btn.setAttribute("aria-label", on ? "Mute sound effects" : "Unmute sound effects");
      if (on) window.MAQ.audio.click();
    });
  }
};

window.MAQ.components.footer = function () {
  return (
    '<footer class="site-footer no-print">' +
    "<p>© Bright EngMath. All rights reserved.<br/>" +
    "Interactive learning content created for educational use.</p>" +
    '<p><a href="#/credits">Credits &amp; Copyright</a> · <a href="#/help">Help / How to Play</a></p>' +
    "</footer>"
  );
};

window.MAQ.components.shell = function (innerHtml, opts) {
  opts = opts || {};
  return (
    window.MAQ.components.navbar(opts) +
    '<main id="maq-main" class="screen page-transition" tabindex="-1">' + innerHtml + "</main>" +
    window.MAQ.components.footer()
  );
};
