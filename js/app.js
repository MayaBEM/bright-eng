/* =====================================================================
   EMC.app — shell (header/footer) + hash router + boot.
   ===================================================================== */
(function () {
  "use strict";
  window.EMC = window.EMC || {};
  const U = () => EMC.util;

  const NAV_LINKS = [
    { href: "#/dashboard", label: "Dashboard" },
    { href: "#/instructions", label: "Instructions" },
    { href: "#/teacher", label: "Teacher Mode" },
    { href: "#/teacher-guide", label: "Teacher Guide" },
    { href: "#/about", label: "About" }
  ];

  function renderShell() {
    const shell = U().el(
      '<div class="app-shell">' +
        '<a class="skip-link" href="#main">Skip to content</a>' +
        '<header class="site-header">' +
          '<div class="site-header__inner">' +
            '<a class="brand" href="#/">' +
              '<span class="brand__mark" aria-hidden="true">EM</span>' +
              '<span class="brand__text"><span class="brand__title">English Memory Check</span><span class="brand__sub">Cr. Bright EngMath</span></span>' +
            "</a>" +
            '<button type="button" class="nav-toggle" id="nav-toggle" aria-label="Open menu" aria-expanded="false">☰</button>' +
            '<nav class="site-nav" id="site-nav" aria-label="Main"></nav>' +
          "</div>" +
        "</header>" +
        '<main class="app-main" id="main"></main>' +
        '<footer class="site-footer">' +
          '<div class="site-footer__inner">' +
            '<div class="site-footer__col"><h4>English Memory Check</h4><p class="u-muted" style="font-size:var(--fs-xs)">A review and test-preparation resource for Primary 4–5 English learners.</p></div>' +
            '<div class="site-footer__col"><h4>Student</h4><a href="#/dashboard">Dashboard</a><a href="#/instructions">Instructions</a></div>' +
            '<div class="site-footer__col"><h4>Teacher</h4><a href="#/teacher">Teacher Mode</a><a href="#/teacher-guide">Teacher Guide</a></div>' +
            '<div class="site-footer__col"><h4>Resource</h4><a href="#/about">About This Resource</a><a href="#/terms">Terms of Use</a></div>' +
            '<div class="site-footer__credit">© Bright EngMath. Original content — Cr. Bright EngMath.</div>' +
          "</div>" +
        "</footer>" +
      "</div>"
    );
    document.body.innerHTML = "";
    document.body.appendChild(shell);

    const nav = shell.querySelector("#site-nav");
    NAV_LINKS.forEach(l => {
      const a = document.createElement("a");
      a.href = l.href;
      a.textContent = l.label;
      nav.appendChild(a);
    });

    const toggle = shell.querySelector("#nav-toggle");
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    nav.addEventListener("click", e => {
      if (e.target.tagName === "A") { nav.classList.remove("is-open"); toggle.setAttribute("aria-expanded", "false"); }
    });

    return shell.querySelector("#main");
  }

  function highlightNav(path) {
    U().qsa(".site-nav a").forEach(a => {
      const href = a.getAttribute("href").slice(1);
      a.classList.toggle("is-active", path === href || (href !== "#/" && path.indexOf(href) === 0));
    });
  }

  /* ---------------------------------------------------------------
     Router
     ------------------------------------------------------------- */
  let mainEl = null;

  const ROUTES = [
    { re: /^#\/?$/, render: () => EMC.views.renderLanding(mainEl) },
    { re: /^#\/dashboard$/, render: () => EMC.views.renderDashboard(mainEl) },
    { re: /^#\/instructions$/, render: () => EMC.views.renderInstructionsPage(mainEl) },
    { re: /^#\/about$/, render: () => EMC.views.renderAbout(mainEl) },
    { re: /^#\/terms$/, render: () => EMC.views.renderTerms(mainEl) },
    { re: /^#\/teacher$/, render: () => EMC.teacher.renderTeacher(mainEl) },
    { re: /^#\/teacher\/answer-key$/, render: () => EMC.teacher.renderAnswerKey(mainEl) },
    { re: /^#\/teacher-guide$/, render: () => EMC.teacher.renderTeacherGuide(mainEl) },
    { re: /^#\/test\/(easy|medium|challenging)$/, render: m => EMC.player.renderIntro(mainEl, m[1]) },
    { re: /^#\/test\/(easy|medium|challenging)\/play$/, render: m => EMC.player.renderPlay(mainEl, m[1]) },
    { re: /^#\/test\/(easy|medium|challenging)\/review$/, render: m => EMC.player.renderFinalReview(mainEl, m[1]) },
    { re: /^#\/test\/(easy|medium|challenging)\/results$/, render: m => EMC.player.renderResultsRoute(mainEl, m[1]) },
    { re: /^#\/test\/(easy|medium|challenging)\/answers$/, render: m => EMC.player.renderAnswersRoute(mainEl, m[1]) }
  ];

  function route() {
    const hash = location.hash || "#/";
    // leaving the play screen mid-quiz should stop any running timer/speech
    EMC.audio && EMC.audio.stop();

    for (const r of ROUTES) {
      const m = hash.match(r.re);
      if (m) {
        try { r.render(m); }
        catch (e) {
          console.error("Render error:", e);
          mainEl.innerHTML = '<div class="section container"><div class="card"><h2>Something needs attention</h2><p>This page could not load. <a href="#/dashboard">Return to Dashboard</a>.</p></div></div>';
        }
        highlightNav(hash);
        window.scrollTo(0, 0);
        return;
      }
    }
    mainEl.innerHTML = '<div class="section container"><div class="card"><h2>Page not found</h2><p><a href="#/">Return home</a>.</p></div></div>';
  }

  function boot() {
    mainEl = renderShell();
    EMC.a11y.apply();
    window.addEventListener("hashchange", route);
    route();
  }

  document.addEventListener("DOMContentLoaded", boot);
})();
