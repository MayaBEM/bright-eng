/* ==========================================================================
   PAGE: LANDING / WELCOME
   ========================================================================== */
window.MAQ = window.MAQ || {};
window.MAQ.pages = window.MAQ.pages || {};

window.MAQ.pages.landing = {
  render: function (container) {
    var chapters = window.MAQ.chapters;
    var previewCards = chapters.map(function (c) {
      return (
        '<div class="chapter-card card-interactive" data-chapter="' + c.id + '">' +
        '<div class="chapter-icon" aria-hidden="true">' + c.icon + "</div>" +
        "<h3>" + c.title + "</h3>" +
        '<p style="color:var(--text-secondary); font-size:var(--fs-200);">' + c.tagline + "</p>" +
        '<span class="pill ' + c.pillClass + '">25 quest questions</span>' +
        "</div>"
      );
    }).join("");

    var html =
      '<section class="hero">' +
      window.MAQ.icons.blob("var(--color-sky)", "top:10%;left:6%;") +
      window.MAQ.icons.blob("var(--color-mint)", "top:55%;left:82%;") +
      window.MAQ.icons.blob("var(--color-lavender)", "top:5%;left:78%;") +
      '<div class="hero-inner">' +
      '<span class="hero-eyebrow">Bright EngMath presents</span>' +
      "<h1>Math Adventure Quest</h1>" +
      '<p class="hero-sub">A quest-based mathematics practice adventure for Grades 5–6. Explore three lands, master Factors, HCF &amp; LCM, and Fractions, and collect every crystal along the way.</p>' +
      '<button class="btn btn-primary btn-lg" id="maq-start-btn">Start the Adventure 🧭</button>' +
      "</div>" +
      "</section>" +

      '<section class="landing-section">' +
      "<h2 style=\"text-align:center;\">Three Lands. One Quest.</h2>" +
      '<p style="text-align:center; color:var(--text-secondary); max-width:640px; margin:0 auto;">Every land is a full chapter of 25 original questions, split into five short quest stages.</p>' +
      '<div class="chapter-preview-grid">' + previewCards + "</div>" +
      "</section>" +

      '<section class="landing-section">' +
      "<h2 style=\"text-align:center;\">What Makes This an Adventure</h2>" +
      '<div class="feature-grid">' +
      '<div class="feature-item"><div class="feature-icon">🗺️</div><strong>Story-driven quest map</strong><p style="font-size:var(--fs-200); color:var(--text-secondary);">Every chapter is a land to explore, not a worksheet to fear.</p></div>' +
      '<div class="feature-item"><div class="feature-icon">💡</div><strong>Real teaching, not just marking</strong><p style="font-size:var(--fs-200); color:var(--text-secondary);">Wrong answers get a full explanation and a worked solution — never just "wrong."</p></div>' +
      '<div class="feature-item"><div class="feature-icon">💎</div><strong>Crystals, badges &amp; a certificate</strong><p style="font-size:var(--fs-200); color:var(--text-secondary);">Visible progress that keeps learners coming back to finish the quest.</p></div>' +
      '<div class="feature-item"><div class="feature-icon">📱</div><strong>Works on any device</strong><p style="font-size:var(--fs-200); color:var(--text-secondary);">Phone, tablet, laptop or desktop — progress is saved automatically.</p></div>' +
      "</div></section>" +

      '<section class="landing-section" style="text-align:center;">' +
      '<button class="btn btn-primary btn-lg" id="maq-start-btn-2">Start the Adventure 🧭</button>' +
      "</section>" +
      window.MAQ.components.footer();

    container.innerHTML = html;

    function goStart() {
      window.MAQ.audio.click();
      if (window.MAQ.progress.hasLearner()) window.MAQ.router.navigate("/map");
      else window.MAQ.router.navigate("/setup");
    }
    document.getElementById("maq-start-btn").addEventListener("click", goStart);
    document.getElementById("maq-start-btn-2").addEventListener("click", goStart);
    Array.prototype.forEach.call(document.querySelectorAll(".chapter-card"), function (card) {
      card.addEventListener("click", function () {
        if (window.MAQ.progress.hasLearner()) window.MAQ.router.navigate("/chapter/" + card.getAttribute("data-chapter"));
        else window.MAQ.router.navigate("/setup");
      });
      card.setAttribute("tabindex", "0");
      card.setAttribute("role", "button");
      card.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); card.click(); } });
    });
  }
};
