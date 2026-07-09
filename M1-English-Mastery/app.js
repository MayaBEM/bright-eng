/* =====================================================================
   M.1 English Entrance Exam Mastery — Application logic
   Vanilla JS single-page app. No frameworks, no external APIs.
   Progress persists in localStorage. Works offline after first load.
   ===================================================================== */
(function () {
  "use strict";

  const DATA = window.QUIZ_DATA;
  const META = DATA.meta;
  const SECM = DATA.sectionMeta;
  const STORE_KEY = "m1_mastery_v1";
  const LETTERS = ["A", "B", "C", "D"];
  const app = document.getElementById("app");
  const modalRoot = document.getElementById("modalRoot");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------------- Persistence ---------------- */
  function blankState() {
    const sets = {};
    for (let i = 1; i <= 7; i++) sets[i] = { status: "notstarted", bestScore: null, lastScore: null, attempts: 0, timeSpent: 0, lastResult: null, inProgress: null };
    return { student: { name: "" }, points: 0, badges: [], streak: { count: 0, lastDate: null }, totalStudyTime: 0, sets };
  }
  function loadState() {
    try {
      const raw = localStorage.getItem(STORE_KEY);
      if (!raw) return blankState();
      const s = JSON.parse(raw);
      const base = blankState();
      return Object.assign(base, s, { sets: Object.assign(base.sets, s.sets || {}) });
    } catch (e) { return blankState(); }
  }
  function saveState() { try { localStorage.setItem(STORE_KEY, JSON.stringify(state)); } catch (e) {} }
  let state = loadState();

  /* ---------------- Helpers ---------------- */
  const h = (tag, attrs, children) => {
    const e = document.createElement(tag);
    if (attrs) for (const k in attrs) {
      if (k === "class") e.className = attrs[k];
      else if (k === "html") e.innerHTML = attrs[k];
      else if (k.startsWith("on") && typeof attrs[k] === "function") e.addEventListener(k.slice(2), attrs[k]);
      else if (k === "dataset") for (const d in attrs[k]) e.dataset[d] = attrs[k][d];
      else if (attrs[k] !== null && attrs[k] !== undefined && attrs[k] !== false) e.setAttribute(k, attrs[k]);
    }
    if (children != null) (Array.isArray(children) ? children : [children]).forEach(c => {
      if (c == null || c === false) return;
      e.appendChild(typeof c === "string" || typeof c === "number" ? document.createTextNode(String(c)) : c);
    });
    return e;
  };
  const icon = (id, cls) => `<svg class="icon ${cls || ""}" aria-hidden="true"><use href="#icon-${id}"></use></svg>`;
  const esc = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const setQuestions = id => DATA.sets[id] || [];
  const findPassage = (id, pid) => (DATA.passages[id] || []).find(p => p.id === pid);
  const setMeta = id => META.sets.find(s => s.id === id);
  const fmtTime = sec => { sec = Math.max(0, Math.round(sec)); const m = Math.floor(sec / 60), s = sec % 60; return m + ":" + String(s).padStart(2, "0"); };
  const fmtDur = sec => { sec = Math.round(sec); if (sec < 60) return sec + "s"; const m = Math.floor(sec / 60); return m < 60 ? m + " min" : Math.floor(m / 60) + "h " + (m % 60) + "m"; };
  const todayStr = () => new Date().toISOString().slice(0, 10);

  /* ---------------- Router ---------------- */
  function navigate(hash) { if (location.hash === hash) render(); else location.hash = hash; }
  window.addEventListener("hashchange", render);

  document.querySelectorAll("[data-nav]").forEach(b => b.addEventListener("click", () => {
    const t = b.dataset.nav;
    if (t === "landing") navigate("#/");
    else if (t === "dashboard") navigate("#/dashboard");
    else if (t === "sets") navigate("#/dashboard");
    else if (t === "tips") navigate("#/tips");
    closeMobileNav();
  }));
  const hamburger = document.getElementById("hamburger");
  hamburger.addEventListener("click", () => {
    const nav = document.querySelector(".main-nav");
    const open = nav.classList.toggle("open");
    hamburger.setAttribute("aria-expanded", open);
  });
  function closeMobileNav() { const n = document.querySelector(".main-nav"); if (n) n.classList.remove("open"); hamburger.setAttribute("aria-expanded", false); }

  function setActiveNav(view) {
    document.querySelectorAll(".nav-link").forEach(l => l.classList.remove("active"));
    const map = { dashboard: 0, sets: 1, tips: 2 };
    const links = document.querySelectorAll(".nav-link");
    if (view === "dashboard" && links[0]) links[0].classList.add("active");
    if (view === "tips" && links[2]) links[2].classList.add("active");
  }

  /* ---------------- Session (active quiz) ---------------- */
  let session = null;
  let timerHandle = null;

  /* ==================================================================
     RENDER DISPATCH
     ================================================================== */
  function render() {
    const hash = location.hash || "#/";
    const parts = hash.replace(/^#\//, "").split("/");
    const view = parts[0] || "";
    stopTimer();
    window.scrollTo(0, 0);
    app.innerHTML = "";
    if (view === "" ) { setActiveNav(""); renderLanding(); }
    else if (view === "dashboard") { setActiveNav("dashboard"); renderDashboard(); }
    else if (view === "intro") { setActiveNav("dashboard"); renderIntro(+parts[1]); }
    else if (view === "quiz") { setActiveNav(""); renderQuiz(+parts[1]); }
    else if (view === "results") { setActiveNav("dashboard"); renderResults(+parts[1]); }
    else if (view === "review") { setActiveNav("dashboard"); renderReview(+parts[1]); }
    else if (view === "tips") { setActiveNav("tips"); renderTips(); }
    else { setActiveNav(""); renderLanding(); }
  }

  /* ==================================================================
     LANDING PAGE
     ================================================================== */
  function overallStats() {
    let completed = 0, totalScorePct = 0, best = 0, attemptsScores = [];
    META.sets.forEach(m => {
      const st = state.sets[m.id];
      if (st.status === "completed") { completed++; }
      if (st.bestScore != null) { best = Math.max(best, st.bestScore); }
      if (st.lastScore != null) attemptsScores.push(st.lastScore);
    });
    const completion = Math.round((completed / 7) * 100);
    const avg = attemptsScores.length ? Math.round(attemptsScores.reduce((a, b) => a + b, 0) / attemptsScores.length) : 0;
    return { completed, completion, best, avg };
  }

  function renderLanding() {
    const os = overallStats();
    const frag = document.createDocumentFragment();

    // HERO
    const hero = h("section", { class: "hero" });
    hero.innerHTML = `
      <div class="hero-inner">
        <div>
          <span class="pill" style="background:var(--yellow-soft);color:#b45309">${icon("star")} Premium Entrance-Exam Practice</span>
          <h1 style="margin-top:14px">Master the <span class="grad">M.1 English</span> Entrance Exam</h1>
          <p class="subtitle">Advanced Practice for Competitive School Admission</p>
          <p class="lede">Seven interactive practice tests — <strong>175 original questions</strong> with clear Thai explanations (คำอธิบายภาษาไทย) — built for Thai Grade&nbsp;6 students aiming for Regular, Gifted, MEP, EP, and International programmes.</p>
          <div class="hero-cta">
            <button class="btn lg" id="startBtn">${icon("target")} Start Practising</button>
            <button class="btn lg ghost" id="exploreBtn">Explore Test Sets</button>
          </div>
          <div class="hero-badges">
            <div class="hb"><strong>7</strong><span>Full Test Sets</span></div>
            <div class="hb"><strong>175</strong><span>Original Questions</span></div>
            <div class="hb"><strong>100%</strong><span>Thai Explanations</span></div>
            <div class="hb"><strong>2</strong><span>Practice &amp; Exam Modes</span></div>
          </div>
        </div>
        <div class="hero-art">${heroSVG()}</div>
      </div>`;
    frag.appendChild(hero);

    // PROGRESS PREVIEW
    const pp = h("div", { class: "progress-preview" });
    pp.innerHTML = `
      <div class="card raise">
        <div class="ring" style="--p:${os.completion}"><div class="ring-inner"><b>${os.completion}%</b><span>DONE</span></div></div>
        <div class="mini-stats">
          <div class="ms"><b>${os.completed}/7</b><span>Sets Completed</span></div>
          <div class="ms"><b>${os.best}%</b><span>Best Score</span></div>
          <div class="ms"><b>${os.avg}%</b><span>Average Score</span></div>
          <div class="ms"><b>${state.points}</b><span>Points Earned</span></div>
        </div>
        <button class="btn sky" id="ppContinue">${os.completed > 0 ? "Go to Dashboard" : "Begin Set 1"}</button>
      </div>`;
    frag.appendChild(pp);

    // FEATURES
    const features = [
      { i: "grammar", c: "var(--royal)", t: "Exam-Focused Grammar", d: "Tenses, passives, conditionals, relative clauses and more — pitched at real entrance-exam level, never too easy." },
      { i: "vocab", c: "var(--lavender)", t: "Vocabulary in Context", d: "Collocations, phrasal verbs and academic words drawn from technology, environment, science and daily life." },
      { i: "chat", c: "var(--orange)", t: "Natural Conversation", d: "Functional English for interviews, group work and polite communication, with realistic distractors." },
      { i: "reading", c: "var(--coral)", t: "Reading & Inference", d: "Original passages with main-idea, detail and inference questions — the skills top schools test most." },
      { i: "lightbulb", c: "var(--sky)", t: "Teaches, Not Just Tests", d: "Every question gives a Thai explanation, why each wrong option fails, and a test-taking tip." },
      { i: "trophy", c: "var(--yellow)", t: "Motivating Progress", d: "Points, badges, streaks and skill-mastery bars keep students practising with purpose." },
    ];
    const fsec = h("section", { class: "wrap" });
    fsec.appendChild(sectionHead("Why students improve fast", "Everything is designed to build real exam confidence — clear feedback, gradual challenge, and content in both English and Thai.", "What you get"));
    const fgrid = h("div", { class: "grid g3" });
    features.forEach(f => {
      const card = h("div", { class: "card feature" });
      card.innerHTML = `<div class="fi" style="background:${f.c}">${icon(f.i)}</div><h3>${f.t}</h3><p>${f.d}</p>`;
      fgrid.appendChild(card);
    });
    fsec.appendChild(fgrid);
    frag.appendChild(fsec);

    // MODES
    const msec = h("section", { class: "wrap" });
    msec.appendChild(sectionHead("Two ways to practise", "Learn step by step, then test yourself under real conditions.", "Practice & Exam Modes"));
    const modes = h("div", { class: "modes" });
    modes.innerHTML = `
      <div class="mode-card practice">
        <h3>${icon("lightbulb")} Practice Mode</h3>
        <p class="muted">Learn as you go — feedback appears immediately.</p>
        <ul>
          <li>Immediate feedback after every answer</li>
          <li>Thai explanations shown instantly</li>
          <li>One "try again" chance per question</li>
          <li>No strict timer — learn at your pace</li>
          <li>Progress saved automatically</li>
        </ul>
      </div>
      <div class="mode-card exam">
        <h3>${icon("clock")} Exam Mode</h3>
        <p class="muted">Simulate the real test — answers revealed at the end.</p>
        <ul>
          <li>No feedback until you submit</li>
          <li>Optional 30-minute countdown timer</li>
          <li>Answer questions in any order</li>
          <li>Flag questions for review</li>
          <li>Warning before submitting blanks</li>
        </ul>
      </div>`;
    msec.appendChild(modes);
    frag.appendChild(msec);

    // ROADMAP
    const rsec = h("section", { class: "wrap" });
    rsec.appendChild(sectionHead("Your 7-set journey", "Difficulty rises gradually from a strong foundation to a full mastery examination.", "The Roadmap"));
    const rm = h("div", { class: "roadmap" });
    META.sets.forEach(m => {
      const step = h("div", { class: "rm-step" });
      step.innerHTML = `<div class="n" style="background:${m.color}">${m.id}</div><b>${m.name}</b><span>${m.difficulty}</span>`;
      step.style.cursor = "pointer";
      step.addEventListener("click", () => navigate("#/intro/" + m.id));
      rm.appendChild(step);
    });
    rsec.appendChild(rm);
    frag.appendChild(rsec);

    // AUDIENCE
    const asec = h("section", { class: "wrap" });
    asec.appendChild(sectionHead("Who this is for", "", "Perfect for"));
    const aud = h("div", { class: "audience" });
    ["Grade 6 students preparing for M.1", "Applicants to well-known Thai schools", "Regular · Gifted · MEP · EP · International", "Teachers & tutors (classroom-ready)", "Parents supporting home practice"].forEach(t => {
      aud.appendChild(h("div", { class: "aud-chip", html: icon("check") + " " + esc(t) }));
    });
    asec.appendChild(aud);
    frag.appendChild(asec);

    // TEACHER BAND
    const tsec = h("section", { class: "wrap" });
    const tb = h("div", { class: "teacher-band" });
    tb.innerHTML = `
      <div>
        <span class="pill" style="background:rgba(255,255,255,.18);color:#fff">${icon("teacher")} For Teachers &amp; Tutors</span>
        <h2 style="margin-top:12px">A ready-to-teach classroom resource</h2>
        <p>Launch <strong>Teacher Presentation Mode</strong> on any set for full-screen questions, hide/reveal answer choices, one-click Thai explanations, and random student discussion prompts — perfect for projectors, Zoom or Google Meet.</p>
        <button class="btn amber" id="teacherDemo">${icon("teacher")} Try Teacher Mode</button>
      </div>
      <div class="tb-list">
        <div>${icon("check")} Large full-screen text (30px+)</div>
        <div>${icon("check")} Reveal answers & Thai explanations on cue</div>
        <div>${icon("check")} Timer on/off for exam simulation</div>
        <div>${icon("check")} Screen-share friendly design</div>
      </div>`;
    tsec.appendChild(tb);
    frag.appendChild(tsec);

    // TESTIMONIALS (clearly labelled placeholders)
    const tstSec = h("section", { class: "wrap" });
    tstSec.appendChild(sectionHead("Loved by learners", "The quotes below are design placeholders — replace them with your own real reviews.", "Testimonials"));
    const tstGrid = h("div", { class: "grid g3" });
    [["A", "Student review placeholder"], ["B", "Parent review placeholder"], ["C", "Teacher review placeholder"]].forEach(([l, tag]) => {
      const c = h("div", { class: "card tst" });
      c.innerHTML = `<div class="stars">${icon("star")}${icon("star")}${icon("star")}${icon("star")}${icon("star")}</div>
        <span class="ph-tag">${tag}</span>
        <p>"Add a genuine testimonial here after your students and customers have used the product."</p>
        <div class="who"><span class="av">${l}</span><div><b>Your Reviewer</b><br><small class="muted">Role / School</small></div></div>`;
      tstGrid.appendChild(c);
    });
    tstSec.appendChild(tstGrid);
    frag.appendChild(tstSec);

    // FAQ
    const faqSec = h("section", { class: "wrap" });
    faqSec.appendChild(sectionHead("Frequently asked questions", "", "FAQ"));
    const faq = h("div", { class: "faq", style: "max-width:760px;margin:0 auto" });
    const faqs = [
      ["Is this suitable for the real M.1 entrance exam?", "Yes. The 175 questions are written from scratch to match the skills competitive Thai schools test — grammar, vocabulary in context, functional conversation, cloze/error identification, and reading with inference. Difficulty rises across the seven sets."],
      ["Do I need an internet connection?", "You only need the internet to load the site the first time. After that, everything — questions, scoring and your saved progress — works offline in your browser."],
      ["Are the explanations in Thai?", "Yes. Every question includes a Thai explanation (คำอธิบายภาษาไทย), a reason why each wrong option is incorrect, and a Thai test-taking tip. Questions, choices and passages stay in English."],
      ["Is my progress saved?", "Progress, scores and badges are saved automatically in your browser using local storage. No login or account is required."],
      ["Can teachers use this in class?", "Absolutely. Every set has a Teacher Presentation Mode designed for projectors and video calls, with large text and reveal-on-cue answers and explanations."],
      ["Can I use this commercially?", "Yes. All content is original and created for M.1 entrance-exam preparation. The product is not affiliated with any specific school or examination board."],
    ];
    faqs.forEach(([q, a]) => {
      const d = h("details");
      d.innerHTML = `<summary>${esc(q)}</summary><p>${esc(a)}</p>`;
      faq.appendChild(d);
    });
    faqSec.appendChild(faq);
    frag.appendChild(faqSec);

    // FINAL CTA
    const cta = h("section", { class: "wrap center" });
    cta.innerHTML = `<div class="card raise" style="background:linear-gradient(120deg,var(--royal),#2f56c9);color:#fff;padding:36px">
      <h2 style="color:#fff">Ready to become entrance-exam ready?</h2>
      <p style="color:#dbe6ff;max-width:52ch;margin:0 auto 18px">Start with Set 1 today. Practise a little every day and watch your skills — and your confidence — grow.</p>
      <button class="btn amber lg" id="ctaStart">${icon("target")} Start Practising Now</button>
    </div>`;
    frag.appendChild(cta);

    // FOOTER
    frag.appendChild(footer());

    app.appendChild(frag);

    // wire buttons
    document.getElementById("startBtn").onclick = () => navigate("#/dashboard");
    document.getElementById("exploreBtn").onclick = () => navigate("#/dashboard");
    document.getElementById("ppContinue").onclick = () => navigate(os.completed > 0 ? "#/dashboard" : "#/intro/1");
    document.getElementById("ctaStart").onclick = () => navigate("#/dashboard");
    document.getElementById("teacherDemo").onclick = () => openTeacher(1);
  }

  function sectionHead(title, sub, eyebrow) {
    const s = h("div", { class: "section-head" });
    s.innerHTML = (eyebrow ? `<div class="eyebrow">${esc(eyebrow)}</div>` : "") + `<h2>${esc(title)}</h2>` + (sub ? `<p>${esc(sub)}</p>` : "");
    return s;
  }
  function footer() {
    const f = h("footer", { class: "site-footer" });
    f.innerHTML = `
      <div class="footer-inner">
        <div>
          <h4>M.1 English Entrance Exam Mastery</h4>
          <p style="color:#9fb0d6;font-size:14px">Seven interactive English practice tests with Thai explanations, built for competitive M.1 admission.</p>
          <div class="credit-box">${icon("star")} ${esc(META.credit)}</div>
        </div>
        <div>
          <h4>Explore</h4>
          <a data-f="dashboard">Student Dashboard</a>
          <a data-f="sets">Test Sets</a>
          <a data-f="tips">Study Tips</a>
        </div>
        <div>
          <h4>Modes</h4>
          <a data-f="dashboard">Practice Mode</a>
          <a data-f="dashboard">Exam Mode</a>
          <a data-f="teacher">Teacher Presentation Mode</a>
        </div>
      </div>
      <div class="footer-note">Original educational practice content created for M.1 entrance examination preparation. This product is not affiliated with or endorsed by any specific school or examination board. &copy; ${new Date().getFullYear()} Bright EngMath.</div>`;
    f.querySelectorAll("[data-f]").forEach(a => a.addEventListener("click", () => {
      const t = a.dataset.f;
      if (t === "tips") navigate("#/tips");
      else if (t === "teacher") openTeacher(1);
      else navigate("#/dashboard");
    }));
    return f;
  }

  /* ==================================================================
     DASHBOARD
     ================================================================== */
  function aggregateSkills() {
    const agg = {}; Object.keys(SECM).forEach(k => agg[k] = { correct: 0, total: 0 });
    META.sets.forEach(m => {
      const r = state.sets[m.id].lastResult;
      if (r && r.sectionScores) for (const k in r.sectionScores) {
        agg[k].correct += r.sectionScores[k].correct; agg[k].total += r.sectionScores[k].total;
      }
    });
    return agg;
  }

  function renderDashboard() {
    const os = overallStats();
    const frag = document.createDocumentFragment();
    const wrap = h("div", { class: "wrap" });

    // Welcome + reset
    const welcome = h("div", { class: "welcome" });
    welcome.innerHTML = `<div>
        <h1>Welcome back${state.student.name ? ", " + esc(state.student.name) : ""}! ${icon("star")}</h1>
        <p class="muted" style="margin:0">Keep up your practice — every question makes you stronger. ทำต่อไปเรื่อย ๆ นะ!</p>
      </div>`;
    const actions = h("div", { style: "display:flex;gap:10px;flex-wrap:wrap" });
    const streakChip = h("div", { class: "pill", style: "background:var(--yellow-soft);color:#b45309;align-self:center", html: icon("trophy") + " " + state.streak.count + "-day streak" });
    const nameBtn = h("button", { class: "btn ghost sm", html: (state.student.name ? "Edit name" : "Add your name"), onclick: promptName });
    const resetBtn = h("button", { class: "btn ghost sm", html: "Reset progress", onclick: confirmReset });
    actions.append(streakChip, nameBtn, resetBtn);
    welcome.appendChild(actions);
    wrap.appendChild(welcome);

    // Stats
    const skills = aggregateSkills();
    let strongest = null, weakest = null;
    Object.keys(skills).forEach(k => {
      if (skills[k].total === 0) return;
      const pct = skills[k].correct / skills[k].total;
      if (!strongest || pct > strongest.pct) strongest = { k, pct };
      if (!weakest || pct < weakest.pct) weakest = { k, pct };
    });
    const statGrid = h("div", { class: "stat-grid", style: "margin-top:18px" });
    statGrid.innerHTML = `
      <div class="stat"><b>${os.completion}%</b><span>Completion</span></div>
      <div class="stat"><b>${state.points}</b><span>Points</span></div>
      <div class="stat good"><b>${os.best}%</b><span>Best Score</span></div>
      <div class="stat"><b>${os.avg}%</b><span>Average</span></div>
      <div class="stat"><b>${fmtDur(state.totalStudyTime)}</b><span>Study Time</span></div>
      <div class="stat warn"><b>${os.completed}/7</b><span>Completed</span></div>`;
    wrap.appendChild(statGrid);

    // Skill columns
    const skillCols = h("div", { class: "skill-cols" });
    const mastery = h("div", { class: "card" });
    mastery.appendChild(h("h3", null, "Skill Mastery"));
    const list = h("div", { class: "skill-list" });
    Object.keys(SECM).forEach(k => {
      const s = skills[k]; const pct = s.total ? Math.round((s.correct / s.total) * 100) : 0;
      const row = h("div", { class: "skill-row" });
      row.innerHTML = `<div class="nm"><span style="color:${SECM[k].color}">${icon(SECM[k].icon)}</span> ${SECM[k].short}</div>
        <div class="bar"><i style="width:${s.total ? pct : 0}%;background:linear-gradient(90deg,${SECM[k].color},var(--royal))"></i></div>
        <div class="pc">${s.total ? pct + "%" : "—"}</div>`;
      list.appendChild(row);
    });
    mastery.appendChild(list);
    skillCols.appendChild(mastery);

    const insight = h("div", { class: "card" });
    insight.appendChild(h("h3", null, "Your Focus"));
    insight.innerHTML += `
      <div style="display:grid;gap:12px;margin-top:6px">
        <div class="next-step" style="background:linear-gradient(120deg,var(--mint-soft),#fff);border-color:#a7f3d0">
          <div class="ni" style="background:#10b981">${icon("star")}</div>
          <div><b>Strongest skill</b><br>${strongest ? SECM[strongest.k].label + " · " + Math.round(strongest.pct * 100) + "%" : "Complete a set to see your strengths."}</div>
        </div>
        <div class="next-step" style="background:linear-gradient(120deg,var(--yellow-soft),#fff);border-color:#fde68a">
          <div class="ni" style="background:var(--orange)">${icon("target")}</div>
          <div><b>Needs more practice</b><br>${weakest ? SECM[weakest.k].label + " · " + Math.round(weakest.pct * 100) + "%" : "Complete a set to get personalised advice."}</div>
        </div>
      </div>`;
    skillCols.appendChild(insight);
    wrap.appendChild(h("div", { style: "margin-top:22px" }, [skillCols]));

    // Badges
    wrap.appendChild(h("h2", { style: "margin-top:26px" }, ["Achievements ", h("span", { class: "muted", style: "font-size:15px;font-weight:600" }, "(" + state.badges.length + "/" + BADGES.length + ")")]));
    const rail = h("div", { class: "badges-rail" });
    BADGES.forEach(b => {
      const earned = state.badges.includes(b.id);
      const card = h("div", { class: "badge" + (earned ? " earned" : "") });
      card.innerHTML = `<div class="bi">${icon(b.icon)}</div><b>${esc(b.name)}</b><span>${earned ? "Earned" : esc(b.hint)}</span>`;
      rail.appendChild(card);
    });
    wrap.appendChild(rail);

    // Set cards
    wrap.appendChild(h("h2", { style: "margin-top:26px" }, ["Test Sets"]));
    const grid = h("div", { class: "set-grid" });
    META.sets.forEach(m => grid.appendChild(setCard(m)));
    wrap.appendChild(grid);

    frag.appendChild(wrap);
    frag.appendChild(footer());
    app.appendChild(frag);
  }

  function setCard(m) {
    const st = state.sets[m.id];
    const card = h("div", { class: "card set-card raise" });
    const statusLabel = { notstarted: "Not Started", inprogress: "In Progress", completed: "Completed" }[st.status];
    const skillsHtml = m.skills.map(s => `<span>${esc(s)}</span>`).join("");
    card.innerHTML = `
      <div class="sc-top" style="background:linear-gradient(135deg,${m.color},${shade(m.color, -18)})">
        <div class="num">${m.id}</div>
        <div class="sc-diff">Set ${m.id} · ${esc(m.difficulty)}</div>
        <h3>${esc(m.name)}</h3>
        <div class="sc-tag">${esc(m.tagline)}</div>
      </div>
      <div class="sc-body">
        <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
          <span class="status-tag status-${st.status}">${st.status === "completed" ? icon("check") : ""} ${statusLabel}</span>
          ${st.bestScore != null ? `<span class="sc-score">Best: ${st.bestScore}%</span>` : ""}
          <span class="muted" style="font-size:12.5px;margin-left:auto">25 Q · ${META.recommendedMinutes} min</span>
        </div>
        <div class="sc-skills">${skillsHtml}</div>
        <div class="sc-actions"></div>
      </div>`;
    const acts = card.querySelector(".sc-actions");
    if (st.status === "inprogress" && st.inProgress) {
      acts.appendChild(h("button", { class: "btn sky", html: "Continue", onclick: () => resumeQuiz(m.id) }));
    } else {
      acts.appendChild(h("button", { class: "btn", html: st.status === "completed" ? "Retry" : "Start", onclick: () => navigate("#/intro/" + m.id) }));
    }
    if (st.status === "completed") {
      acts.appendChild(h("button", { class: "btn ghost", html: "Review", onclick: () => navigate("#/review/" + m.id) }));
    }
    acts.appendChild(h("button", { class: "btn ghost", html: icon("teacher") + " Teacher", onclick: () => openTeacher(m.id) }));
    return card;
  }

  /* ==================================================================
     TEST INTRO
     ================================================================== */
  function renderIntro(id) {
    const m = setMeta(id); if (!m) return navigate("#/dashboard");
    const st = state.sets[id];
    const wrap = h("div", { class: "wrap intro-wrap" });
    const hero = h("div", { class: "intro-hero", style: `background:linear-gradient(135deg,${m.color},${shade(m.color, -20)})` });
    hero.innerHTML = `<span class="pill" style="background:rgba(255,255,255,.2);color:#fff">Set ${id} of 7</span>
      <h1 style="margin-top:10px">${esc(m.name)}</h1>
      <p style="color:rgba(255,255,255,.92);font-size:17px;margin:0">${esc(m.tagline)}</p>`;
    wrap.appendChild(hero);

    const meta = h("div", { class: "intro-meta" });
    meta.innerHTML = `
      <div class="im"><b>${esc(m.difficulty)}</b><span>Difficulty</span></div>
      <div class="im"><b>25</b><span>Questions</span></div>
      <div class="im"><b>${META.recommendedMinutes} min</b><span>Recommended</span></div>
      <div class="im"><b>${st.bestScore != null ? st.bestScore + "%" : "—"}</b><span>Your Best</span></div>`;
    wrap.appendChild(meta);

    const skillsCard = h("div", { class: "card" });
    skillsCard.innerHTML = `<h3>Skills included</h3><div class="sc-skills" style="gap:8px">${m.skills.map(s => `<span style="font-size:13px;padding:5px 12px">${esc(s)}</span>`).join("")}</div>
      <div style="margin-top:14px;display:flex;gap:10px;flex-wrap:wrap">
        ${["Grammar 8", "Vocabulary 5", "Conversation 4", "Cloze/Error 3", "Reading 5"].map(x => `<span class="diff-tag">${x}</span>`).join("")}
      </div>`;
    wrap.appendChild(skillsCard);

    const instr = h("div", { class: "card", style: "margin-top:16px" });
    instr.innerHTML = `<h3>Instructions</h3>
      <ul class="instructions">
        <li>Read each question carefully and choose the <strong>one best answer</strong> (A–D).</li>
        <li>In <strong>Practice Mode</strong>, you get instant feedback and a Thai explanation after every answer.</li>
        <li>In <strong>Exam Mode</strong>, answers are hidden until you submit — just like the real test.</li>
        <li>Use the <strong>question navigator</strong> to move around, and <strong>flag</strong> tricky questions to revisit.</li>
        <li>For reading questions, the passage stays visible beside the question.</li>
        <li>Your progress is saved automatically — you can stop and continue later.</li>
      </ul>`;
    wrap.appendChild(instr);

    // Timer toggle for exam mode
    const timerRow = h("div", { class: "timer-toggle" });
    timerRow.innerHTML = `${icon("clock")} <span>Exam Mode timer (${META.recommendedMinutes} min)</span>
      <label class="switch"><input type="checkbox" id="timerToggle" checked><span class="sl"></span></label>
      <span class="muted" style="font-size:13px">Teachers can switch this off.</span>`;
    wrap.appendChild(timerRow);

    const choose = h("div", { class: "mode-choose" });
    const practiceBtn = h("button", { class: "btn mint lg", html: icon("lightbulb") + " Practice Mode" });
    const examBtn = h("button", { class: "btn sky lg", html: icon("clock") + " Exam Mode" });
    practiceBtn.onclick = () => startQuiz(id, "practice", false);
    examBtn.onclick = () => startQuiz(id, "exam", document.getElementById("timerToggle").checked);
    choose.append(practiceBtn, examBtn);
    wrap.appendChild(choose);

    if (st.status === "inprogress" && st.inProgress) {
      const resume = h("div", { class: "card", style: "margin-top:14px;text-align:center;background:var(--yellow-soft);border-color:#fde68a" });
      resume.innerHTML = `<p style="margin:0 0 10px"><strong>You have an unfinished attempt.</strong> Continue where you left off?</p>`;
      resume.appendChild(h("button", { class: "btn amber", html: "Resume attempt", onclick: () => resumeQuiz(id) }));
      wrap.appendChild(resume);
    }

    const back = h("div", { class: "center", style: "margin-top:18px" }, [h("button", { class: "btn ghost", html: "← Back to Dashboard", onclick: () => navigate("#/dashboard") })]);
    wrap.appendChild(back);

    app.appendChild(wrap);
    app.appendChild(footer());
  }

  /* ==================================================================
     QUIZ ENGINE
     ================================================================== */
  function startQuiz(id, mode, timerOn) {
    const qs = setQuestions(id);
    session = {
      setId: id, mode, timerOn: mode === "exam" && timerOn,
      index: 0, answers: new Array(qs.length).fill(null),
      flags: new Array(qs.length).fill(false),
      attempts: new Array(qs.length).fill(0), // practice retry tracking
      locked: new Array(qs.length).fill(false), // practice: feedback shown
      startTime: Date.now(),
      remaining: META.recommendedMinutes * 60,
      submitted: false
    };
    state.sets[id].status = "inprogress";
    persistInProgress();
    navigate("#/quiz/" + id);
  }
  function resumeQuiz(id) {
    const ip = state.sets[id].inProgress;
    const qs = setQuestions(id);
    if (!ip) return startQuiz(id, "practice", false);
    session = {
      setId: id, mode: ip.mode, timerOn: ip.timerOn,
      index: ip.index || 0, answers: ip.answers || new Array(qs.length).fill(null),
      flags: ip.flags || new Array(qs.length).fill(false),
      attempts: ip.attempts || new Array(qs.length).fill(0),
      locked: ip.locked || new Array(qs.length).fill(false),
      startTime: Date.now() - (ip.elapsed || 0) * 1000,
      remaining: ip.remaining != null ? ip.remaining : META.recommendedMinutes * 60,
      submitted: false
    };
    navigate("#/quiz/" + id);
  }
  function persistInProgress() {
    if (!session) return;
    const elapsed = (Date.now() - session.startTime) / 1000;
    state.sets[session.setId].inProgress = {
      mode: session.mode, timerOn: session.timerOn, index: session.index,
      answers: session.answers, flags: session.flags, attempts: session.attempts,
      locked: session.locked, remaining: session.remaining, elapsed
    };
    saveState();
  }

  function renderQuiz(id) {
    if (!session || session.setId !== id) {
      const ip = state.sets[id] && state.sets[id].inProgress;
      if (ip) return resumeQuiz(id);
      return navigate("#/intro/" + id);
    }
    // renderQuiz is called directly on every answer/nav — always start from a clean container
    stopTimer();
    app.innerHTML = "";
    const m = setMeta(id);
    const qs = setQuestions(id);
    const q = qs[session.index];
    const answered = session.answers.filter(a => a !== null).length;

    const shell = h("div", { class: "wrap" });
    const inner = h("div", { class: "quiz-shell" });

    // top bar
    const top = h("div", { class: "quiz-top" });
    top.innerHTML = `<span class="qt-title">Set ${id}: ${esc(m.name)}</span>
      <span class="mode-chip ${session.mode}">${session.mode === "practice" ? "Practice Mode" : "Exam Mode"}</span>
      <span class="spacer"></span>`;
    if (session.mode === "exam" && session.timerOn) {
      top.appendChild(h("span", { class: "timer-chip", id: "timerChip", html: icon("clock") + " <span id='timerText'>" + fmtTime(session.remaining) + "</span>" }));
    }
    top.appendChild(h("button", { class: "btn ghost sm", html: "Exit", onclick: () => confirmExit(id) }));
    inner.appendChild(top);

    // progress
    const pct = Math.round((answered / qs.length) * 100);
    const prog = h("div");
    prog.innerHTML = `<div class="progress-bar"><i style="width:${pct}%"></i></div>
      <div class="progress-label"><span>Question ${session.index + 1} of ${qs.length}</span><span>${answered}/${qs.length} answered</span></div>`;
    inner.appendChild(prog);

    // body (with passage if reading)
    const passage = q.passageId ? findPassage(id, q.passageId) : null;
    const body = h("div", { class: "quiz-body" + (passage ? " with-passage" : "") });
    if (passage) body.appendChild(passageCard(passage));
    body.appendChild(questionCard(id, q, qs));
    inner.appendChild(body);

    // navigator
    inner.appendChild(navigator(id, qs));

    shell.appendChild(inner);
    app.appendChild(shell);

    if (session.mode === "exam" && session.timerOn) startTimer();

    // keyboard
    document.onkeydown = quizKeyHandler;
  }

  function passageCard(p) {
    const card = h("div", { class: "passage-card collapsible" });
    card.innerHTML = `
      <button class="passage-toggle" aria-expanded="false">${icon("reading")} Read the passage <span>Tap to expand</span></button>
      <span class="passage-badge">Reading Passage</span>
      <h3>${icon("reading")} ${esc(p.title)}</h3>
      <div class="ptext">${esc(p.text)}</div>`;
    const toggle = card.querySelector(".passage-toggle");
    toggle.addEventListener("click", () => {
      const open = card.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open);
      toggle.querySelector("span").textContent = open ? "Tap to collapse" : "Tap to expand";
    });
    return card;
  }

  function questionCard(id, q, qs) {
    const sec = SECM[q.section];
    const card = h("div", { class: "q-card" });
    const idx = session.index;
    const selected = session.answers[idx];
    const locked = session.mode === "practice" && session.locked[idx];

    const tags = h("div", { class: "q-tags" });
    tags.innerHTML = `<span class="sec-tag" style="background:${sec.color}">${icon(sec.icon)} ${sec.label}</span>
      <span class="diff-tag">${esc(q.difficulty)}</span>
      <span class="q-number">Q ${idx + 1} / ${qs.length}</span>`;
    card.appendChild(tags);

    const qtext = h("div", { class: "q-text" });
    qtext.innerHTML = formatQuestion(q.question);
    card.appendChild(qtext);

    // options
    const opts = h("div", { class: "options", role: "radiogroup", "aria-label": "Answer choices" });
    q.options.forEach((optText, i) => {
      const b = h("button", { class: "opt", role: "radio", "aria-checked": selected === i ? "true" : "false" });
      let cls = "opt";
      if (locked) {
        if (i === q.correctAnswer) cls += " correct";
        else if (i === selected) cls += " wrong";
      } else if (selected === i) cls += " selected";
      b.className = cls;
      b.innerHTML = `<span class="key">${LETTERS[i]}</span><span class="otext">${esc(optText)}</span>`;
      if (locked) b.disabled = true;
      b.addEventListener("click", () => selectAnswer(id, i));
      opts.appendChild(b);
    });
    card.appendChild(opts);

    // practice feedback
    if (locked) card.appendChild(feedbackPanel(q, session.answers[idx]));

    // nav buttons
    const nav = h("div", { class: "q-nav-btns" });
    const prev = h("button", { class: "btn ghost", html: "← Previous", onclick: () => goTo(id, idx - 1) });
    if (idx === 0) prev.disabled = true;
    nav.appendChild(prev);

    const flag = h("button", { class: "flag-btn" + (session.flags[idx] ? " on" : ""), html: icon("flag") + (session.flags[idx] ? " Flagged" : " Flag"), onclick: () => toggleFlag(id) });
    nav.appendChild(flag);

    nav.appendChild(h("span", { class: "spacer" }));

    // practice: try again button when wrong and not exhausted
    if (session.mode === "practice" && locked && session.answers[idx] !== q.correctAnswer && session.attempts[idx] < 2) {
      nav.appendChild(h("button", { class: "btn amber", html: "Try Again", onclick: () => tryAgain(id) }));
    }

    if (idx < qs.length - 1) {
      nav.appendChild(h("button", { class: "btn", html: "Next →", onclick: () => goTo(id, idx + 1) }));
    } else {
      nav.appendChild(h("button", { class: "btn mint", html: icon("check") + " Submit Test", onclick: () => attemptSubmit(id) }));
    }
    card.appendChild(nav);
    return card;
  }

  function formatQuestion(text) {
    // highlight blanks and (A)(B)(C)(D) markers
    let t = esc(text);
    t = t.replace(/_{2,}/g, '<span class="blank">______</span>');
    t = t.replace(/\((A|B|C|D)\)/g, '<strong style="color:var(--royal)">($1)</strong>');
    return t;
  }

  function feedbackPanel(q, selected) {
    const correct = selected === q.correctAnswer;
    const panel = h("div", { class: "feedback " + (correct ? "ok" : "no") });
    const praise = correct ? pick(["Excellent!", "Correct!", "Great reasoning!", "Well done!"]) : pick(["Not quite.", "Almost there.", "Keep trying!"]);
    let html = `<div class="fb-head">${correct ? icon("check") : icon("target")} ${praise}</div>`;
    if (!correct) html += `<div class="fb-line">Your answer: <strong>${LETTERS[selected]}. ${esc(q.options[selected])}</strong></div>`;
    html += `<div class="fb-line">Correct answer: <strong>${LETTERS[q.correctAnswer]}. ${esc(q.options[q.correctAnswer])}</strong></div>`;
    html += `<div class="fb-block"><span class="fb-label">คำอธิบาย:</span> <span class="th">${esc(q.explanationThai)}</span></div>`;
    if (!correct && q.wrongAnswerExplanationsThai && q.wrongAnswerExplanationsThai[selected]) {
      html += `<div class="fb-block"><span class="fb-label">ทำไม ${LETTERS[selected]} ไม่ถูก:</span> <span class="th">${esc(q.wrongAnswerExplanationsThai[selected])}</span></div>`;
    }
    if (q.tipThai) html += `<div class="tip"><b>${icon("lightbulb")} เคล็ดลับ:</b> <span class="th">${esc(q.tipThai)}</span></div>`;
    html += `<span class="fb-skill">${icon("target")} Skill: ${esc(q.skill)}</span>`;
    panel.innerHTML = html;
    return panel;
  }

  function selectAnswer(id, i) {
    const idx = session.index;
    if (session.mode === "practice") {
      if (session.locked[idx]) return;
      session.answers[idx] = i;
      session.attempts[idx] = (session.attempts[idx] || 0) + 1;
      const q = setQuestions(id)[idx];
      // lock unless wrong on first attempt (allow one retry)
      if (i === q.correctAnswer || session.attempts[idx] >= 2) {
        session.locked[idx] = true;
      } else {
        session.locked[idx] = true; // show feedback, but Try Again button available
      }
      persistInProgress();
      renderQuiz(id);
    } else {
      // exam: toggle selection, no feedback
      session.answers[idx] = (session.answers[idx] === i ? null : i);
      persistInProgress();
      renderQuiz(id);
    }
  }
  function tryAgain(id) {
    const idx = session.index;
    session.locked[idx] = false;
    session.answers[idx] = null;
    persistInProgress();
    renderQuiz(id);
  }
  function goTo(id, i) {
    const qs = setQuestions(id);
    if (i < 0 || i >= qs.length) return;
    session.index = i; persistInProgress(); renderQuiz(id);
    app.focus();
  }
  function toggleFlag(id) { session.flags[session.index] = !session.flags[session.index]; persistInProgress(); renderQuiz(id); }

  function navigator(id, qs) {
    const wrap = h("div", { class: "navigator card" });
    wrap.appendChild(h("h4", null, "Question Navigator"));
    const grid = h("div", { class: "nav-grid" });
    qs.forEach((q, i) => {
      let cls = "nav-dot";
      if (i === session.index) cls += " current";
      if (session.answers[i] !== null) {
        if (session.mode === "practice" && session.locked[i]) {
          cls += (session.answers[i] === q.correctAnswer) ? " correct" : " wrong";
        } else cls += " answered";
      }
      if (session.flags[i]) cls += " flagged";
      grid.appendChild(h("button", { class: cls, html: String(i + 1), "aria-label": "Go to question " + (i + 1), onclick: () => goTo(id, i) }));
    });
    wrap.appendChild(grid);
    const legend = h("div", { style: "display:flex;gap:16px;flex-wrap:wrap;margin-top:12px;font-size:12.5px;color:var(--ink-faint);font-weight:700" });
    legend.innerHTML = `<span><span style="display:inline-block;width:12px;height:12px;border-radius:4px;background:var(--royal);vertical-align:-1px"></span> Answered</span>
      <span><span style="display:inline-block;width:12px;height:12px;border-radius:4px;background:var(--yellow);vertical-align:-1px"></span> Flagged</span>
      <span><span style="display:inline-block;width:12px;height:12px;border-radius:4px;border:2px solid var(--royal);vertical-align:-1px"></span> Current</span>`;
    wrap.appendChild(legend);
    return wrap;
  }

  function quizKeyHandler(e) {
    if (!session || location.hash.indexOf("#/quiz") !== 0) return;
    if (modalRoot.children.length) return;
    const idx = session.index, qs = setQuestions(session.setId), q = qs[idx];
    if (["1", "2", "3", "4"].includes(e.key)) {
      const i = +e.key - 1;
      if (i < q.options.length && !(session.mode === "practice" && session.locked[idx])) selectAnswer(session.setId, i);
    } else if (["a", "b", "c", "d"].includes(e.key.toLowerCase())) {
      const i = "abcd".indexOf(e.key.toLowerCase());
      if (!(session.mode === "practice" && session.locked[idx])) selectAnswer(session.setId, i);
    } else if (e.key === "ArrowRight") { if (idx < qs.length - 1) goTo(session.setId, idx + 1); }
    else if (e.key === "ArrowLeft") { if (idx > 0) goTo(session.setId, idx - 1); }
    else if (e.key.toLowerCase() === "f") { toggleFlag(session.setId); }
  }

  /* ---------------- Timer ---------------- */
  function startTimer() {
    stopTimer();
    timerHandle = setInterval(() => {
      session.remaining--;
      const el = document.getElementById("timerText");
      const chip = document.getElementById("timerChip");
      if (el) el.textContent = fmtTime(session.remaining);
      if (chip) chip.classList.toggle("low", session.remaining <= 60);
      if (session.remaining % 10 === 0) persistInProgress();
      if (session.remaining <= 0) { stopTimer(); toast("Time is up! Submitting your test.", "clock"); finalizeAndShow(session.setId); }
    }, 1000);
  }
  function stopTimer() { if (timerHandle) { clearInterval(timerHandle); timerHandle = null; } }

  /* ---------------- Submit ---------------- */
  function attemptSubmit(id) {
    const qs = setQuestions(id);
    const unanswered = session.answers.filter(a => a === null).length;
    const flagged = session.flags.filter(Boolean).length;
    if (unanswered > 0 || flagged > 0) {
      openModal({
        icon: "flag", title: "Submit your test?",
        body: `<p>${unanswered > 0 ? `<strong>${unanswered}</strong> question${unanswered > 1 ? "s are" : " is"} still unanswered.` : "All questions answered."}${flagged > 0 ? ` You have <strong>${flagged}</strong> flagged question${flagged > 1 ? "s" : ""} to review.` : ""}</p><p class="muted">You can go back and finish, or submit now.</p>`,
        actions: [
          { label: "Keep working", class: "ghost", onClick: closeModal },
          { label: "Submit now", class: "mint", onClick: () => { closeModal(); finalizeAndShow(id); } }
        ]
      });
    } else finalizeAndShow(id);
  }

  function computeResult(id) {
    const qs = setQuestions(id);
    let correct = 0, incorrect = 0, unanswered = 0;
    const sectionScores = {}; Object.keys(SECM).forEach(k => sectionScores[k] = { correct: 0, total: 0 });
    qs.forEach((q, i) => {
      sectionScores[q.section].total++;
      const a = session.answers[i];
      if (a === null) unanswered++;
      else if (a === q.correctAnswer) { correct++; sectionScores[q.section].correct++; }
      else incorrect++;
    });
    const scorePct = Math.round((correct / qs.length) * 100);
    const timeUsed = session.timerOn ? (META.recommendedMinutes * 60 - session.remaining) : (Date.now() - session.startTime) / 1000;
    return {
      correct, incorrect, unanswered, total: qs.length, scorePct,
      sectionScores, timeUsed, mode: session.mode,
      answers: session.answers.slice(), flags: session.flags.slice(), dateISO: new Date().toISOString()
    };
  }

  function finalizeAndShow(id) {
    stopTimer();
    const res = computeResult(id);
    const st = state.sets[id];
    st.status = "completed";
    st.lastResult = res;
    st.lastScore = res.scorePct;
    st.bestScore = st.bestScore == null ? res.scorePct : Math.max(st.bestScore, res.scorePct);
    st.attempts = (st.attempts || 0) + 1;
    st.timeSpent = (st.timeSpent || 0) + res.timeUsed;
    st.inProgress = null;
    state.totalStudyTime += res.timeUsed;
    state.points += res.correct * 10 + (res.scorePct === 100 ? 100 : res.scorePct >= 90 ? 40 : 0);
    updateStreak();
    evaluateBadges(id, res);
    saveState();
    session = null;
    document.onkeydown = null;
    navigate("#/results/" + id);
    if (res.scorePct >= 80 && !reducedMotion) setTimeout(fireConfetti, 300);
  }

  function updateStreak() {
    const today = todayStr();
    const last = state.streak.lastDate;
    if (last === today) return;
    if (last) {
      const diff = (new Date(today) - new Date(last)) / 86400000;
      state.streak.count = diff === 1 ? state.streak.count + 1 : 1;
    } else state.streak.count = 1;
    state.streak.lastDate = today;
  }

  /* ==================================================================
     RESULTS
     ================================================================== */
  const BANDS = [
    { min: 90, name: "Entrance Exam Champion", color: "#059669", msg: "Outstanding! You are performing at the very top level. คุณพร้อมสอบเข้าจริงแล้ว!", icon: "trophy" },
    { min: 80, name: "Excellent Progress", color: "#0ea5e9", msg: "Excellent work! You have a strong command of these skills. เก่งมาก!", icon: "star" },
    { min: 70, name: "Strong Performance", color: "#8b5cf6", msg: "Well done! You are on a solid path. อีกนิดเดียวก็ยอดเยี่ยมแล้ว!", icon: "check" },
    { min: 60, name: "Good Start — Keep Practising", color: "#f59e0b", msg: "Good start! Review the explanations and try again. ทำได้ดี ลองทบทวนแล้วสู้ต่อ!", icon: "target" },
    { min: 0, name: "Build Your Skills Step by Step", color: "#f43f5e", msg: "Every expert started here. ค่อย ๆ ฝึกทีละขั้น แล้วจะเก่งขึ้นแน่นอน!", icon: "lightbulb" }
  ];
  function bandFor(pct) { return BANDS.find(b => pct >= b.min); }

  function renderResults(id) {
    const m = setMeta(id);
    const res = state.sets[id].lastResult;
    if (!res) return navigate("#/intro/" + id);
    const band = bandFor(res.scorePct);
    const wrap = h("div", { class: "wrap", style: "max-width:860px" });

    const hero = h("div", { class: "result-hero", style: `background:linear-gradient(135deg,${band.color},${shade(band.color, -22)})` });
    hero.innerHTML = `
      <div class="big-ring" style="--p:${res.scorePct}"><div class="bri"><b>${res.scorePct}%</b><span>SCORE</span></div></div>
      <div class="band-name">${icon(band.icon)} ${esc(band.name)}</div>
      <p style="color:rgba(255,255,255,.95);font-size:18px;max-width:46ch;margin:8px auto 0" class="th">${esc(band.msg)}</p>
      <p style="color:rgba(255,255,255,.8);margin-top:6px">Set ${id}: ${esc(m.name)} · ${res.mode === "exam" ? "Exam Mode" : "Practice Mode"}</p>`;
    wrap.appendChild(hero);

    const stats = h("div", { class: "result-stats" });
    stats.innerHTML = `
      <div class="rs correct"><b>${res.correct}</b><span>Correct</span></div>
      <div class="rs incorrect"><b>${res.incorrect}</b><span>Incorrect</span></div>
      <div class="rs skipped"><b>${res.unanswered}</b><span>Unanswered</span></div>
      <div class="rs time"><b>${fmtDur(res.timeUsed)}</b><span>Time Used</span></div>`;
    wrap.appendChild(stats);

    // Skill analysis
    const analysis = h("div", { class: "card analysis", style: "margin-top:18px" });
    analysis.appendChild(h("h3", null, "Skill-by-Skill Analysis"));
    const list = h("div", { class: "skill-list" });
    Object.keys(SECM).forEach(k => {
      const s = res.sectionScores[k]; const pct = s.total ? Math.round((s.correct / s.total) * 100) : 0;
      const row = h("div", { class: "skill-row" });
      row.innerHTML = `<div class="nm"><span style="color:${SECM[k].color}">${icon(SECM[k].icon)}</span> ${SECM[k].short}</div>
        <div class="bar"><i style="width:${pct}%;background:linear-gradient(90deg,${SECM[k].color},var(--royal))"></i></div>
        <div class="pc">${s.correct}/${s.total}</div>`;
      list.appendChild(row);
    });
    analysis.appendChild(list);
    wrap.appendChild(analysis);

    // recommended next step
    let weakest = null;
    Object.keys(res.sectionScores).forEach(k => { const s = res.sectionScores[k]; if (!s.total) return; const p = s.correct / s.total; if (!weakest || p < weakest.p) weakest = { k, p }; });
    const nextId = id < 7 ? id + 1 : null;
    const ns = h("div", { class: "next-step", style: "margin-top:18px" });
    let nsText = "";
    if (res.scorePct < 70) nsText = `Review this set's explanations${weakest ? " — especially <strong>" + SECM[weakest.k].label + "</strong>" : ""}, then retry to raise your score.`;
    else if (nextId) nsText = `Great job! You're ready to move on to <strong>Set ${nextId}: ${esc(setMeta(nextId).name)}</strong>.`;
    else nsText = `You've finished the final set! Revisit any set to keep your skills sharp.`;
    ns.innerHTML = `<div class="ni">${icon("target")}</div><div><b>Recommended next step</b><br>${nsText}</div>`;
    wrap.appendChild(ns);

    const acts = h("div", { class: "result-actions" });
    acts.appendChild(h("button", { class: "btn", html: "Review Answers", onclick: () => navigate("#/review/" + id) }));
    acts.appendChild(h("button", { class: "btn sky", html: "Retry Set", onclick: () => navigate("#/intro/" + id) }));
    if (nextId) acts.appendChild(h("button", { class: "btn mint", html: "Next Set →", onclick: () => navigate("#/intro/" + nextId) }));
    acts.appendChild(h("button", { class: "btn ghost", html: "Return to Dashboard", onclick: () => navigate("#/dashboard") }));
    wrap.appendChild(acts);

    app.appendChild(wrap);
    app.appendChild(footer());
  }

  /* ==================================================================
     REVIEW
     ================================================================== */
  function renderReview(id) {
    const m = setMeta(id);
    const res = state.sets[id].lastResult;
    if (!res) return navigate("#/intro/" + id);
    const qs = setQuestions(id);
    const wrap = h("div", { class: "wrap", style: "max-width:860px" });

    const head = h("div", { style: "display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;margin-bottom:8px" });
    head.innerHTML = `<div><h1 style="margin:0">Answer Review</h1><p class="muted" style="margin:0">Set ${id}: ${esc(m.name)} · Score ${res.scorePct}%</p></div>`;
    head.appendChild(h("button", { class: "btn ghost sm", html: "← Back to Results", onclick: () => navigate("#/results/" + id) }));
    wrap.appendChild(head);

    const filters = [
      { k: "all", label: "All" }, { k: "incorrect", label: "Incorrect" }, { k: "correct", label: "Correct" },
      { k: "grammar", label: "Grammar" }, { k: "vocabulary", label: "Vocabulary" }, { k: "conversation", label: "Conversation" },
      { k: "reading", label: "Reading" }, { k: "cloze", label: "Cloze / Error" }
    ];
    let active = "all";
    const filterBar = h("div", { class: "filters" });
    const listWrap = h("div");

    function drawList() {
      listWrap.innerHTML = "";
      let shown = 0;
      qs.forEach((q, i) => {
        const a = res.answers[i];
        const isCorrect = a === q.correctAnswer;
        if (active === "incorrect" && (isCorrect || a === null)) return;
        if (active === "correct" && !isCorrect) return;
        if (["grammar", "vocabulary", "conversation", "reading", "cloze"].includes(active) && q.section !== active) return;
        shown++;
        listWrap.appendChild(reviewItem(id, q, i, a, isCorrect));
      });
      if (shown === 0) listWrap.appendChild(h("div", { class: "card center muted", html: "No questions match this filter." }));
    }
    filters.forEach(f => {
      const b = h("button", { class: "filter-btn" + (f.k === "all" ? " active" : ""), html: esc(f.label) });
      b.addEventListener("click", () => { active = f.k; filterBar.querySelectorAll(".filter-btn").forEach(x => x.classList.remove("active")); b.classList.add("active"); drawList(); });
      filterBar.appendChild(b);
    });
    wrap.appendChild(filterBar);
    wrap.appendChild(listWrap);
    drawList();

    const acts = h("div", { class: "result-actions", style: "justify-content:flex-start" });
    acts.appendChild(h("button", { class: "btn sky", html: "Retry Set", onclick: () => navigate("#/intro/" + id) }));
    acts.appendChild(h("button", { class: "btn ghost", html: "Dashboard", onclick: () => navigate("#/dashboard") }));
    wrap.appendChild(acts);

    app.appendChild(wrap);
    app.appendChild(footer());
  }

  function reviewItem(id, q, i, a, isCorrect) {
    const sec = SECM[q.section];
    const item = h("div", { class: "review-item " + (a === null ? "incorrect" : isCorrect ? "correct" : "incorrect") });
    const passage = q.passageId ? findPassage(id, q.passageId) : null;
    let html = `<div class="ri-head">
      <span class="ri-num">Q${i + 1}</span>
      <span class="sec-tag" style="background:${sec.color};font-size:11.5px">${icon(sec.icon)} ${sec.short}</span>
      <span class="ri-skill">${esc(q.skill)}</span>
      <span style="margin-left:auto" class="status-tag ${isCorrect ? "status-completed" : "status-inprogress"}">${isCorrect ? icon("check") + " Correct" : (a === null ? "Unanswered" : "Incorrect")}</span>
    </div>`;
    if (passage) html += `<div class="ri-passage"><strong>${esc(passage.title)}:</strong> ${esc(passage.text)}</div>`;
    html += `<div class="ri-q">${formatQuestion(q.question)}</div><div class="ri-opts">`;
    q.options.forEach((o, oi) => {
      let cls = "ri-opt";
      if (oi === q.correctAnswer) cls += " correct";
      else if (oi === a) cls += " chosen-wrong";
      html += `<div class="${cls}"><span class="k">${LETTERS[oi]}</span> ${esc(o)}${oi === q.correctAnswer ? " " + icon("check") : ""}${oi === a && oi !== q.correctAnswer ? " ← your answer" : ""}</div>`;
    });
    html += `</div>`;
    html += `<div class="ri-exp"><span class="lab">คำอธิบาย:</span> ${esc(q.explanationThai)}`;
    if (!isCorrect && a !== null && q.wrongAnswerExplanationsThai && q.wrongAnswerExplanationsThai[a]) {
      html += `<br><br><span class="lab">ทำไม ${LETTERS[a]} ไม่ถูก:</span> ${esc(q.wrongAnswerExplanationsThai[a])}`;
    }
    if (q.tipThai) html += `<br><br><span class="lab">${icon("lightbulb")} เคล็ดลับ:</span> ${esc(q.tipThai)}`;
    html += `</div>`;
    if (!isCorrect) html += `<span class="review-topic">${icon("target")} Review this topic: ${esc(q.skill)}</span>`;
    item.innerHTML = html;
    return item;
  }

  /* ==================================================================
     STUDY TIPS
     ================================================================== */
  const TIPS = [
    { icon: "clock", t: "Manage Your Time", en: "Spend about 1 minute per question. If one is hard, flag it and move on — come back at the end.", th: "แบ่งเวลาประมาณข้อละ 1 นาที ถ้าข้อไหนยาก ให้ปักธงไว้แล้วข้ามไปก่อน ค่อยกลับมาทำตอนท้าย" },
    { icon: "target", t: "Eliminate Distractors", en: "Cross out clearly wrong options first. Choosing between two is far easier than four.", th: "ตัดตัวเลือกที่ผิดชัดเจนออกก่อน การเลือกจาก 2 ตัวเลือกง่ายกว่าการเลือกจาก 4 มาก" },
    { icon: "grammar", t: "Spot Tense Clues", en: "Look for time signals: 'yesterday' (past), 'already' (present perfect), 'by the time' (perfect).", th: "มองหาคำบอกเวลา เช่น yesterday (อดีต), already (present perfect), by the time (perfect tense)" },
    { icon: "vocab", t: "Infer Vocabulary in Context", en: "Don't panic at new words. Use the surrounding sentence to guess the meaning.", th: "อย่าตกใจกับคำศัพท์ใหม่ ให้ใช้ประโยคข้าง ๆ ช่วยเดาความหมายของคำนั้น" },
    { icon: "reading", t: "Find the Main Idea", en: "The main idea is usually in the first or last sentence of a paragraph. Ask: what is this mostly about?", th: "ใจความสำคัญมักอยู่ประโยคแรกหรือประโยคสุดท้ายของย่อหน้า ลองถามตัวเองว่า ย่อหน้านี้พูดถึงเรื่องอะไรเป็นหลัก" },
    { icon: "lightbulb", t: "Answer Inference Questions", en: "Inference means 'read between the lines'. The answer is suggested, not stated word-for-word.", th: "การอนุมาน (inference) คือการอ่านสิ่งที่ผู้เขียนสื่อโดยไม่ได้บอกตรง ๆ คำตอบจะถูกบอกเป็นนัย ไม่ใช่คัดลอกจากข้อความตรง ๆ" },
    { icon: "chat", t: "Handle Unfamiliar Words", en: "Break the word into parts (prefix, root, suffix) and use the topic to guide your guess.", th: "แยกคำออกเป็นส่วน ๆ (คำนำหน้า ราก คำลงท้าย) และใช้บริบทของเรื่องช่วยเดาความหมาย" },
    { icon: "check", t: "Check Subject–Verb Agreement", en: "Find the true subject first. 'Each', 'everyone' and 'neither' take a singular verb.", th: "หาประธานที่แท้จริงก่อน คำว่า each, everyone, neither ใช้กับกริยาเอกพจน์เสมอ" },
    { icon: "flag", t: "Review Flagged Questions", en: "Always leave 2–3 minutes to revisit flagged questions before you submit.", th: "เผื่อเวลาไว้ 2–3 นาทีก่อนส่งข้อสอบ เพื่อกลับไปตรวจข้อที่ปักธงไว้เสมอ" }
  ];
  function renderTips() {
    const wrap = h("div", { class: "wrap" });
    wrap.appendChild(sectionHead("Smart Test-Taking Strategies", "Nine quick strategies (English + Thai) to boost your score on exam day.", "Study Tips · เคล็ดลับการทำข้อสอบ"));
    const grid = h("div", { class: "tips-grid" });
    const colors = ["#3b82f6", "#8b5cf6", "#f59e0b", "#ec4899", "#14b8a6", "#0ea5e9", "#f97316", "#10b981", "#6366f1"];
    TIPS.forEach((t, i) => {
      const c = h("div", { class: "tip-card", style: `border-top-color:${colors[i % colors.length]}` });
      c.innerHTML = `<div class="ti" style="background:${colors[i % colors.length]}">${icon(t.icon)}</div>
        <h3>${esc(t.t)}</h3><p class="en">${esc(t.en)}</p><div class="th">${esc(t.th)}</div>`;
      grid.appendChild(c);
    });
    wrap.appendChild(grid);
    const back = h("div", { class: "center", style: "margin-top:22px" }, [h("button", { class: "btn", html: "Go to Dashboard", onclick: () => navigate("#/dashboard") })]);
    wrap.appendChild(back);
    app.appendChild(wrap);
    app.appendChild(footer());
  }

  /* ==================================================================
     TEACHER PRESENTATION MODE
     ================================================================== */
  const DISCUSSION_PROMPTS = [
    "Ask a student to explain their answer in their own words.",
    "Which two options are the closest? Why is one better?",
    "What clue in the sentence points to the answer?",
    "Can anyone use the correct word in a new sentence?",
    "Turn to a partner and agree on the best answer.",
    "What common mistake might a test-taker make here?",
    "Rephrase the question in simpler English.",
    "What grammar rule is being tested?"
  ];
  function openTeacher(id) {
    const qs = setQuestions(id);
    const m = setMeta(id);
    let idx = 0, showOptions = true, showAnswer = false, showExp = false;
    const stage = h("div", { class: "teach-stage" });
    modalRoot.appendChild(stage);
    document.body.style.overflow = "hidden";

    function draw() {
      const q = qs[idx];
      const sec = SECM[q.section];
      const passage = q.passageId ? findPassage(id, q.passageId) : null;
      stage.innerHTML = "";
      const bar = h("div", { class: "teach-bar" });
      bar.innerHTML = `<span class="tb-title">${icon("teacher")} Set ${id}: ${esc(m.name)}</span><span class="spacer"></span>`;
      const btns = [
        { t: showOptions ? "Hide Choices" : "Show Choices", f: () => { showOptions = !showOptions; draw(); } },
        { t: showAnswer ? "Hide Answer" : "Reveal Answer", f: () => { showAnswer = !showAnswer; if (showAnswer) showOptions = true; draw(); } },
        { t: showExp ? "Hide Explanation" : "Reveal Explanation (TH)", f: () => { showExp = !showExp; draw(); } },
        { t: "Discussion Prompt", f: () => { alertPrompt(); } }
      ];
      btns.forEach(b => bar.appendChild(h("button", { html: b.t, onclick: b.f })));
      bar.appendChild(h("button", { class: "close", html: "✕ Exit", onclick: closeTeacher }));
      stage.appendChild(bar);

      const content = h("div", { class: "teach-content" });
      const box = h("div", { class: "teach-inner" });
      let html = `<div class="teach-sec">${sec.label} · ${esc(q.difficulty)}</div>`;
      if (passage) html += `<div class="teach-passage"><strong>${esc(passage.title)}</strong><br>${esc(passage.text)}</div>`;
      html += `<div class="teach-q">${formatQuestion(q.question)}</div>`;
      box.innerHTML = html;
      if (showOptions) {
        const grid = h("div", { class: "teach-opts" });
        q.options.forEach((o, i) => {
          const cls = "teach-opt" + (showAnswer && i === q.correctAnswer ? " reveal-correct" : "");
          grid.appendChild(h("div", { class: cls, html: `<span class="tk">${LETTERS[i]}</span><span>${esc(o)}</span>${showAnswer && i === q.correctAnswer ? " " + icon("check") : ""}` }));
        });
        box.appendChild(grid);
      }
      if (showExp) {
        box.appendChild(h("div", { class: "teach-exp", html: `<strong>คำอธิบาย:</strong> ${esc(q.explanationThai)}${q.tipThai ? "<br><br><strong>เคล็ดลับ:</strong> " + esc(q.tipThai) : ""}` }));
      }
      content.appendChild(box);
      stage.appendChild(content);

      const foot = h("div", { class: "teach-bar" });
      const prev = h("button", { html: "← Previous", onclick: () => { if (idx > 0) { idx--; showAnswer = false; showExp = false; showOptions = true; draw(); } } });
      const next = h("button", { html: "Next →", onclick: () => { if (idx < qs.length - 1) { idx++; showAnswer = false; showExp = false; showOptions = true; draw(); } } });
      foot.append(prev, h("span", { class: "teach-progress", html: `Question ${idx + 1} / ${qs.length}` }), h("span", { class: "spacer" }), next);
      stage.appendChild(foot);
    }
    function alertPrompt() {
      const p = pick(DISCUSSION_PROMPTS);
      const existing = stage.querySelector(".teach-prompt-float");
      if (existing) existing.remove();
      const float = h("div", { class: "teach-prompt teach-prompt-float", html: icon("chat") + " " + esc(p) });
      stage.querySelector(".teach-inner").appendChild(float);
    }
    function closeTeacher() { stage.remove(); document.body.style.overflow = ""; document.onkeydown = null; if (session) document.onkeydown = quizKeyHandler; }
    document.onkeydown = e => {
      if (e.key === "Escape") closeTeacher();
      else if (e.key === "ArrowRight") { if (idx < qs.length - 1) { idx++; showAnswer = false; showExp = false; showOptions = true; draw(); } }
      else if (e.key === "ArrowLeft") { if (idx > 0) { idx--; showAnswer = false; showExp = false; showOptions = true; draw(); } }
      else if (e.key.toLowerCase() === "a") { showAnswer = !showAnswer; if (showAnswer) showOptions = true; draw(); }
    };
    draw();
  }

  /* ==================================================================
     BADGES / GAMIFICATION
     ================================================================== */
  const BADGES = [
    { id: "grammar-guardian", name: "Grammar Guardian", icon: "grammar", hint: "All grammar right" },
    { id: "vocab-explorer", name: "Vocabulary Explorer", icon: "vocab", hint: "All vocab right" },
    { id: "reading-detective", name: "Reading Detective", icon: "reading", hint: "All reading right" },
    { id: "conversation-star", name: "Conversation Star", icon: "chat", hint: "All conversation right" },
    { id: "accuracy-ace", name: "Accuracy Ace", icon: "target", hint: "Score 90%+" },
    { id: "streak-5", name: "5-Day Streak", icon: "clock", hint: "Practise 5 days" },
    { id: "full-marks", name: "Full-Marks Champion", icon: "trophy", hint: "Score 100%" },
    { id: "exam-ready", name: "Exam Ready", icon: "star", hint: "Finish all 7 sets" }
  ];
  function earn(id) {
    if (!state.badges.includes(id)) {
      state.badges.push(id);
      const b = BADGES.find(x => x.id === id);
      toast("Badge earned: " + b.name + "!", "trophy");
    }
  }
  function evaluateBadges(id, res) {
    const s = res.sectionScores;
    if (s.grammar.total && s.grammar.correct === s.grammar.total) earn("grammar-guardian");
    if (s.vocabulary.total && s.vocabulary.correct === s.vocabulary.total) earn("vocab-explorer");
    if (s.reading.total && s.reading.correct === s.reading.total) earn("reading-detective");
    if (s.conversation.total && s.conversation.correct === s.conversation.total) earn("conversation-star");
    if (res.scorePct >= 90) earn("accuracy-ace");
    if (res.scorePct === 100) earn("full-marks");
    if (state.streak.count >= 5) earn("streak-5");
    if (META.sets.every(m => state.sets[m.id].status === "completed")) earn("exam-ready");
  }

  /* ==================================================================
     MODALS / TOASTS / CONFETTI / MISC
     ================================================================== */
  function openModal({ icon: ic, title, body, actions }) {
    const overlay = h("div", { class: "modal-overlay", role: "dialog", "aria-modal": "true" });
    const modal = h("div", { class: "modal" });
    modal.innerHTML = (ic ? `<div class="warn-icon">${icon(ic)}</div>` : "") + `<h3>${esc(title)}</h3><div>${body}</div>`;
    const act = h("div", { class: "m-actions" });
    (actions || []).forEach(a => act.appendChild(h("button", { class: "btn " + (a.class || ""), html: a.label, onclick: a.onClick })));
    modal.appendChild(act);
    overlay.appendChild(modal);
    overlay.addEventListener("click", e => { if (e.target === overlay) closeModal(); });
    modalRoot.appendChild(overlay);
  }
  function closeModal() { modalRoot.innerHTML = ""; }

  function confirmExit(id) {
    openModal({
      icon: "flag", title: "Leave this test?",
      body: `<p>Your progress is saved automatically. You can resume this attempt later from the dashboard.</p>`,
      actions: [
        { label: "Keep working", class: "ghost", onClick: closeModal },
        { label: "Save & Exit", class: "sky", onClick: () => { closeModal(); persistInProgress(); stopTimer(); document.onkeydown = null; session = null; navigate("#/dashboard"); } }
      ]
    });
  }
  function confirmReset() {
    openModal({
      icon: "flag", title: "Reset all progress?",
      body: `<p>This will permanently erase all scores, badges, streaks and saved attempts. This cannot be undone.</p>`,
      actions: [
        { label: "Cancel", class: "ghost", onClick: closeModal },
        { label: "Yes, reset everything", class: "amber", onClick: () => { closeModal(); state = blankState(); saveState(); navigate("#/dashboard"); toast("Progress has been reset.", "check"); } }
      ]
    });
  }
  function promptName() {
    openModal({
      icon: "star", title: "What's your name?",
      body: `<p class="muted">We'll use it to welcome you.</p><input id="nameInput" type="text" value="${esc(state.student.name)}" placeholder="Type your name" style="width:100%;padding:12px 14px;border:2px solid var(--line-strong);border-radius:12px;font-size:16px;font-family:inherit" maxlength="24" />`,
      actions: [
        { label: "Cancel", class: "ghost", onClick: closeModal },
        { label: "Save", class: "sky", onClick: () => { const v = document.getElementById("nameInput").value.trim(); state.student.name = v; saveState(); closeModal(); render(); } }
      ]
    });
    setTimeout(() => { const i = document.getElementById("nameInput"); if (i) i.focus(); }, 30);
  }

  function toast(msg, ic) {
    const layer = document.getElementById("toastLayer");
    const t = h("div", { class: "toast", html: `<span class="ti">${icon(ic || "check")}</span><span>${esc(msg)}</span>` });
    layer.appendChild(t);
    setTimeout(() => { t.style.opacity = "0"; t.style.transform = "translateX(120%)"; setTimeout(() => t.remove(), 300); }, 3200);
  }

  function fireConfetti() {
    const canvas = document.getElementById("confettiCanvas");
    canvas.style.display = "block";
    const ctx = canvas.getContext("2d");
    canvas.width = innerWidth; canvas.height = innerHeight;
    const colors = ["#f7b500", "#0ea5e9", "#34d399", "#fb7185", "#a78bfa", "#1e3a8a"];
    const parts = Array.from({ length: 140 }, () => ({
      x: Math.random() * canvas.width, y: -20 - Math.random() * canvas.height * 0.3,
      r: 4 + Math.random() * 6, c: colors[(Math.random() * colors.length) | 0],
      vy: 2 + Math.random() * 3.5, vx: -1.5 + Math.random() * 3, rot: Math.random() * 6, vr: -0.2 + Math.random() * 0.4
    }));
    let frame = 0;
    (function anim() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      parts.forEach(p => {
        p.y += p.vy; p.x += p.vx; p.rot += p.vr;
        ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.rot);
        ctx.fillStyle = p.c; ctx.fillRect(-p.r / 2, -p.r / 2, p.r, p.r * 1.6); ctx.restore();
      });
      frame++;
      if (frame < 160) requestAnimationFrame(anim);
      else { ctx.clearRect(0, 0, canvas.width, canvas.height); canvas.style.display = "none"; }
    })();
  }

  function pick(arr) { return arr[(Math.random() * arr.length) | 0]; }
  function shade(hex, pct) {
    const n = parseInt(hex.slice(1), 16);
    let r = (n >> 16) + Math.round(2.55 * pct), g = ((n >> 8) & 255) + Math.round(2.55 * pct), b = (n & 255) + Math.round(2.55 * pct);
    r = Math.max(0, Math.min(255, r)); g = Math.max(0, Math.min(255, g)); b = Math.max(0, Math.min(255, b));
    return "#" + (0x1000000 + r * 0x10000 + g * 0x100 + b).toString(16).slice(1);
  }

  function heroSVG() {
    return `<svg viewBox="0 0 420 380" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A confident student ready for the exam">
      <defs>
        <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#e0f2fe"/><stop offset="1" stop-color="#ede9fe"/></linearGradient>
        <linearGradient id="g2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0ea5e9"/><stop offset="1" stop-color="#1e3a8a"/></linearGradient>
      </defs>
      <rect x="20" y="30" width="380" height="320" rx="28" fill="url(#g1)"/>
      <circle cx="330" cy="80" r="30" fill="#f7b500" opacity="0.9"/>
      <g opacity="0.85">
        <path d="M70 300 q0 -20 20 -20 h90 q20 0 20 20 v10 h-130z" fill="#1e3a8a"/>
        <rect x="95" y="150" width="80" height="110" rx="10" fill="#fff" stroke="#cdd9ef" stroke-width="3"/>
        <line x1="110" y1="175" x2="160" y2="175" stroke="#0ea5e9" stroke-width="5" stroke-linecap="round"/>
        <line x1="110" y1="195" x2="160" y2="195" stroke="#a78bfa" stroke-width="5" stroke-linecap="round"/>
        <line x1="110" y1="215" x2="145" y2="215" stroke="#34d399" stroke-width="5" stroke-linecap="round"/>
      </g>
      <circle cx="235" cy="150" r="34" fill="#fcd9b6"/>
      <path d="M201 150 a34 34 0 0 1 68 0z" fill="#1f2a44"/>
      <rect x="205" y="184" width="60" height="70" rx="20" fill="url(#g2)"/>
      <circle cx="223" cy="150" r="4" fill="#1f2a44"/><circle cx="247" cy="150" r="4" fill="#1f2a44"/>
      <path d="M225 162 q10 8 20 0" stroke="#1f2a44" stroke-width="3" fill="none" stroke-linecap="round"/>
      <g>
        <path d="M300 210 l6 13 14 2 -10 10 3 14 -13 -7 -13 7 3 -14 -10 -10 14 -2z" fill="#f7b500"/>
        <path d="M120 70 l4 9 10 1 -7 7 2 10 -9 -5 -9 5 2 -10 -7 -7 10 -1z" fill="#fb7185"/>
        <path d="M355 250 l4 9 10 1 -7 7 2 10 -9 -5 -9 5 2 -10 -7 -7 10 -1z" fill="#34d399"/>
      </g>
      <rect x="150" y="285" width="140" height="16" rx="8" fill="#34d399" opacity="0.5"/>
    </svg>`;
  }

  /* ==================================================================
     BOOT
     ================================================================== */
  // basic data sanity in console for developers
  try {
    let total = 0; for (let i = 1; i <= 7; i++) total += setQuestions(i).length;
    console.log("[M.1 Mastery] Loaded " + total + " questions across " + Object.keys(DATA.sets).length + " sets.");
  } catch (e) { console.error(e); }
  render();
})();
