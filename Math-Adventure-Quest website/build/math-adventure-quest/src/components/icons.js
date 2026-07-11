/* ==========================================================================
   ORIGINAL INLINE SVG ILLUSTRATIONS
   All visuals are hand-built SVG/emoji — no external image files, fonts,
   or third-party artwork, so the product is fully self-contained.
   ========================================================================== */
window.MAQ = window.MAQ || {};

window.MAQ.icons = {
  crystal: function (color, sizeClass) {
    return '<svg class="crystal-icon ' + (sizeClass || "") + '" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Crystal">' +
      '<polygon points="32,4 50,22 42,58 22,58 14,22" fill="' + color + '" opacity="0.9"/>' +
      '<polygon points="32,4 50,22 32,30 14,22" fill="' + color + '" opacity="1"/>' +
      '<polygon points="32,30 50,22 42,58 32,58" fill="#ffffff" opacity="0.25"/>' +
      "</svg>";
  },
  crystalLocked: function (sizeClass) {
    return '<svg class="crystal-icon ' + (sizeClass || "") + '" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Locked crystal">' +
      '<polygon points="32,4 50,22 42,58 22,58 14,22" fill="#C9C2AC" opacity="0.7"/>' +
      '<polygon points="32,4 50,22 32,30 14,22" fill="#C9C2AC"/>' +
      "</svg>";
  },
  mascot: function (mood) {
    // A friendly rounded-geometric explorer character (idle-bob animated by CSS class)
    var mouth = mood === "sad" ? '<path d="M24 40 Q32 34 40 40" stroke="#24304A" stroke-width="2.5" fill="none" stroke-linecap="round"/>' :
      '<path d="M24 36 Q32 44 40 36" stroke="#24304A" stroke-width="2.5" fill="none" stroke-linecap="round"/>';
    return '<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Quest guide character" width="80" height="80">' +
      '<circle cx="40" cy="40" r="34" fill="#FFC94A"/>' +
      '<circle cx="40" cy="40" r="34" fill="none" stroke="#F5A623" stroke-width="3"/>' +
      '<circle cx="27" cy="34" r="5" fill="#24304A"/>' +
      '<circle cx="53" cy="34" r="5" fill="#24304A"/>' +
      mouth +
      '<rect x="30" y="10" width="20" height="10" rx="5" fill="#6EC6E8"/>' +
      "</svg>";
  },
  compass: function () {
    return '<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" width="40" height="40" role="img" aria-label="Compass">' +
      '<circle cx="20" cy="20" r="18" fill="#fff" stroke="#F5A623" stroke-width="3"/>' +
      '<polygon points="20,7 24,20 20,33 16,20" fill="#E2604F"/>' +
      '<circle cx="20" cy="20" r="3" fill="#24304A"/>' +
      "</svg>";
  },
  blob: function (color, id) {
    return '<svg class="float-shape hero-shape" style="' + (id || "") + '" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" width="140" height="140" aria-hidden="true">' +
      '<path fill="' + color + '" opacity="0.55" d="M40,-52.7C52.6,-45.7,63.5,-32.9,68.6,-17.6C73.7,-2.3,73,15.5,65.2,29.7C57.4,43.9,42.5,54.4,26.4,60.6C10.3,66.8,-7,68.6,-23.1,63.7C-39.2,58.8,-54.1,47.2,-62.1,32.1C-70.1,17,-71.2,-1.7,-65.8,-18C-60.4,-34.3,-48.5,-48.2,-34.1,-55.1C-19.7,-62,-2.9,-61.9,12.7,-58.5C28.3,-55.1,40,-52.7,40,-52.7Z" transform="translate(100 100)"/>' +
      "</svg>";
  },
  starburstParticles: function (n) {
    var out = "";
    var colors = ["#FFC94A", "#7ED9B8", "#6EC6E8", "#B7A6E8", "#FF9A5A"];
    for (var i = 0; i < n; i++) {
      var angle = (360 / n) * i;
      out += '<span class="star-burst-el" style="position:absolute;left:50%;top:50%;transform:rotate(' + angle + 'deg) translate(0,-40px);color:' + colors[i % colors.length] + ';font-size:1.4rem;" aria-hidden="true">✦</span>';
    }
    return out;
  },
  confetti: function (n) {
    var out = "";
    var colors = ["#FFC94A", "#FF9A5A", "#6EC6E8", "#7ED9B8", "#B7A6E8"];
    for (var i = 0; i < n; i++) {
      var left = Math.random() * 100;
      var delay = Math.random() * 0.6;
      var color = colors[i % colors.length];
      out += '<span class="confetti-piece" style="left:' + left + '%;background:' + color + ';width:8px;height:14px;animation-delay:' + delay + 's;" aria-hidden="true"></span>';
    }
    return out;
  }
};
