/* =====================================================================
   EMC.a11y — reduced motion + text size, applied to <html>.
   ===================================================================== */
(function () {
  "use strict";
  window.EMC = window.EMC || {};

  function apply() {
    const settings = EMC.storage.settings();
    const root = document.documentElement;
    root.classList.toggle("reduced-motion", !!settings.reducedMotion);
    root.classList.remove("text-lg", "text-xl");
    if (settings.textSize === "lg") root.classList.add("text-lg");
    if (settings.textSize === "xl") root.classList.add("text-xl");
  }

  function motionOK() {
    return !EMC.storage.settings().reducedMotion;
  }

  function setReducedMotion(on) {
    EMC.storage.setSetting("reducedMotion", !!on);
    apply();
  }

  function setTextSize(size) {
    EMC.storage.setSetting("textSize", size);
    apply();
  }

  EMC.a11y = { apply, motionOK, setReducedMotion, setTextSize };
})();
