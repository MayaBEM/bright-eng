/* =========================================================================
   Sound Garden Studio — Application
   Bright EngMath · Interactive Phonics Teaching Studio
   Vanilla JS. Data in data.js, audio in audio.js, styles in styles.css.
   ========================================================================= */
(function (global) {
  'use strict';
  var SG = global.SG, AUDIO = global.Audio;

  /* ----------------------------- helpers ------------------------------ */
  function esc(v) { return String(v == null ? '' : v).replace(/[&<>"']/g, function (c) { return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]; }); }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function rand(a) { return a[Math.floor(Math.random() * a.length)]; }
  function uniq(a) { return a.filter(function (v, i) { return a.indexOf(v) === i; }); }
  function qs(s, r) { return (r || document).querySelector(s); }
  function qsa(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function on(sel, ev, fn, r) { qsa(sel, r).forEach(function (n) { n.addEventListener(ev, fn); }); }
  function titleCase(s) { return s.charAt(0).toUpperCase() + s.slice(1); }

  function highlight(word, sound) {
    var needle = SG.match(sound);
    var i = word.toLowerCase().indexOf(needle.toLowerCase());
    if (i < 0) return esc(word);
    return esc(word.slice(0, i)) + '<mark>' + esc(word.slice(i, i + needle.length)) + '</mark>' + esc(word.slice(i + needle.length));
  }
  function positionLabel(sound, word) {
    var needle = SG.match(sound);
    var i = word.toLowerCase().indexOf(needle.toLowerCase());
    if (i === 0) return 'beginning';
    if (i + needle.length >= word.length) return 'ending';
    return 'middle';
  }

  /* ------------------------------ icons ------------------------------- */
  var I = {
    volume: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5 6 9H3v6h3l5 4V5Z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M18 6a8.5 8.5 0 0 1 0 12"/></svg>',
    mute: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5 6 9H3v6h3l5 4V5Z"/><path d="m17 9 4 4m0-4-4 4"/></svg>',
    play: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5 6 9H3v6h3l5 4V5Z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/></svg>',
    slow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="13" r="8"/><path d="M12 9v4l2 2M9 2h6"/></svg>',
    fs: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>',
    left: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>',
    right: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>',
    back: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>',
    ear: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 10a6 6 0 0 1 12 0c0 4-3 4-3 7a3 3 0 0 1-6 0"/><path d="M9 10a3 3 0 0 1 6 0c0 2-2 2-2 4"/></svg>',
    search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg>',
    blocks: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><rect x="3" y="4" width="8" height="7" rx="2"/><rect x="13" y="4" width="8" height="7" rx="2"/><rect x="8" y="13" width="8" height="7" rx="2"/></svg>',
    magic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m4 20 10-10M14 6l2-2 4 4-2 2M5 3l1 2 2 1-2 1-1 2-1-2-2-1 2-1zM18 14l.7 1.5L20 16l-1.3.5L18 18l-.7-1.5L16 16l1.3-.5z"/></svg>',
    sort: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6h10M4 12h7M4 18h4M17 4v16m0 0 3-3m-3 3-3-3"/></svg>',
    cards: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><rect x="3" y="6" width="13" height="16" rx="2"/><path d="M8 6V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2h-2"/></svg>',
    odd: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="7" cy="7" r="3"/><circle cx="17" cy="7" r="3"/><circle cx="7" cy="17" r="3"/><path d="M14 14l6 6m0-6-6 6"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 4 4L19 6"/></svg>',
    x: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M6 6l12 12M18 6 6 18"/></svg>',
    library: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4v16M8 4v16M12 5l4-1 4 15-4 1zM8 4h4v16H8z"/></svg>',
    tools: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 6a3.5 3.5 0 0 0 4.7 4.3L21 13l-3 3-2.7-2.3A3.5 3.5 0 0 0 11 9L6 4 4 6l5 5"/><path d="m14 14 4 4"/></svg>',
    guide: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5a2 2 0 0 1 2-2h8v18H6a2 2 0 0 1-2-2zM14 3h4a2 2 0 0 1 2 2v14a2 2 0 0 0-2-2h-4"/></svg>',
    chart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></svg>',
    present: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M12 16v4m-4 0h8"/></svg>',
    print: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9V3h12v6M6 18H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-2M6 14h12v7H6z"/></svg>',
    shuffle: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 3h5v5M4 20 21 3M21 16v5h-5M15 15l6 6M4 4l5 5"/></svg>',
    star: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="m12 2 3 6.5 7 .6-5.3 4.6L18.4 21 12 17.3 5.6 21l1.7-7.3L2 9.1l7-.6z"/></svg>',
    info: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/></svg>',
    eye: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/></svg>',
    dice: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8" cy="8" r="1.4" fill="currentColor"/><circle cx="16" cy="16" r="1.4" fill="currentColor"/><circle cx="16" cy="8" r="1.4" fill="currentColor"/><circle cx="8" cy="16" r="1.4" fill="currentColor"/></svg>',
    plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>',
    trash: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13"/></svg>'
  };

  /* ------------------------------ artwork ----------------------------- */
  function brandMark() {
    return '<svg class="brand-mark" viewBox="0 0 48 48" fill="none" aria-hidden="true">' +
      '<rect x="2" y="2" width="44" height="44" rx="14" fill="#22314C"/>' +
      '<path d="M11 30c6-6 12-6 18 0" stroke="#F4C24E" stroke-width="3.4" stroke-linecap="round"/>' +
      '<path d="M15 15h14M15 21h10" stroke="#fff" stroke-width="3.4" stroke-linecap="round"/>' +
      '<circle cx="33" cy="30" r="4" fill="#EE6F63"/></svg>';
  }
  function stageBadge(icon, color) {
    var inner = {
      seed: '<path d="M26 12c-8 2-13 8-13 16 8 0 15-5 15-14 0-1 0-1-2-2Z" fill="#fff"/><path d="M26 42v-14" stroke="#fff" stroke-width="3" stroke-linecap="round"/>',
      leaf: '<path d="M14 34C14 20 24 14 36 14c0 14-10 20-22 20Z" fill="#fff"/><path d="M18 30 30 20" stroke="'+color+'" stroke-width="2.4" stroke-linecap="round"/>',
      signpost: '<path d="M24 12v26" stroke="#fff" stroke-width="3.4" stroke-linecap="round"/><path d="M14 17h16l4 4-4 4H14z" fill="#fff"/>',
      tools: '<path d="M18 14a5 5 0 0 0 6.5 6.5L30 26l-4 4-5.5-5.5A5 5 0 0 0 14 18Z" stroke="#fff" stroke-width="3" stroke-linejoin="round" fill="none"/>',
      flask: '<path d="M20 12h8M22 12v8l-7 12a3 3 0 0 0 3 4h12a3 3 0 0 0 3-4l-7-12v-8" stroke="#fff" stroke-width="3" stroke-linejoin="round" fill="none"/>',
      house: '<path d="M12 24 24 13l12 11v14a2 2 0 0 1-2 2H14a2 2 0 0 1-2-2z" fill="#fff"/><rect x="21" y="30" width="6" height="8" fill="'+color+'"/>',
      compass: '<circle cx="24" cy="24" r="12" stroke="#fff" stroke-width="3" fill="none"/><path d="m28 20-6 2-2 6 6-2z" fill="#fff"/>'
    };
    return '<svg class="stage-badge" viewBox="0 0 48 48" aria-hidden="true"><rect width="48" height="48" rx="15" fill="'+color+'"/>' + (inner[icon] || inner.seed) + '</svg>';
  }
  function heroArt() {
    return '<svg viewBox="0 0 520 440" fill="none" preserveAspectRatio="xMidYMid slice" aria-hidden="true">' +
      '<path d="M60 350C150 260 220 250 300 285C378 320 430 250 486 130" stroke="#F4C24E" stroke-width="12" stroke-linecap="round" fill="none"/>' +
      circleLetter(96, 322, 46, '#EE6F63', 's') +
      circleLetter(210, 268, 46, '#7FB9E6', 'a') +
      circleLetter(320, 292, 46, '#6BB08C', 't') +
      '<g transform="translate(372 70)"><rect width="118" height="150" rx="18" fill="#fff" fill-opacity=".08" stroke="#fff" stroke-opacity=".22" stroke-width="2"/>' +
      '<path d="M22 34h74M22 60h56M22 86h68" stroke="#fff" stroke-width="7" stroke-linecap="round" stroke-opacity=".8"/>' +
      '<circle cx="34" cy="120" r="14" fill="#F4C24E"/></g>' +
      leaf(66, 120, '#6BB08C') + leaf(120, 96, '#7FB9E6') +
      '</svg>';
  }
  function circleLetter(cx, cy, r, fill, ch) {
    return '<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" fill="'+fill+'"/>' +
      '<circle cx="'+cx+'" cy="'+cy+'" r="'+(r-16)+'" fill="#22314C" stroke="#fff" stroke-width="3"/>' +
      '<text x="'+cx+'" y="'+(cy+11)+'" text-anchor="middle" fill="#fff" font-family="Baloo 2, Arial" font-size="32" font-weight="700">'+ch+'</text>';
  }
  function leaf(x, y, c) { return '<path d="M'+x+' '+y+'c-8 3-11 10-9 18 8-1 14-6 14-14 0-3-2-4-5-4Z" fill="'+c+'" fill-opacity=".7"/>'; }

  /* ------------------------------ store ------------------------------- */
  var KEY = 'sgs.progress.v1';
  var store = loadStore();
  function blankStore() { return { stages: {}, mastered: {}, practiceAgain: {}, heard: {}, deck: [], recent: null, stars: 0 }; }
  function loadStore() {
    try {
      var raw = localStorage.getItem(KEY);
      if (!raw) return blankStore();
      var o = JSON.parse(raw);
      if (!o || typeof o !== 'object') return blankStore();
      var b = blankStore();
      b.stages = (o.stages && typeof o.stages === 'object') ? o.stages : {};
      b.mastered = (o.mastered && typeof o.mastered === 'object') ? o.mastered : {};
      b.practiceAgain = (o.practiceAgain && typeof o.practiceAgain === 'object') ? o.practiceAgain : {};
      b.heard = (o.heard && typeof o.heard === 'object') ? o.heard : {};
      b.deck = Array.isArray(o.deck) ? o.deck : [];
      b.recent = o.recent || null;
      b.stars = typeof o.stars === 'number' ? o.stars : 0;
      return b;
    } catch (e) { return blankStore(); }
  }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(store)); } catch (e) {} }
  function stageRec(id) { if (!store.stages[id]) store.stages[id] = { steps: {}, challengeBest: 0, done: false }; if (!store.stages[id].steps) store.stages[id].steps = {}; return store.stages[id]; }
  function markHeard(key) { store.heard[key] = true; save(); }
  function markStep(stageId, soundKey, step) { var r = stageRec(stageId); r.steps[soundKey + ':' + step] = true; save(); }
  function stepDone(stageId, soundKey, step) { return !!(store.stages[stageId] && store.stages[stageId].steps[soundKey + ':' + step]); }
  function soundProgress(stageId, soundKey) { var n = 0; ['A','B','C','D','E'].forEach(function (s) { if (stepDone(stageId, soundKey, s)) n++; }); return n; }
  function stageProgressPct(stage) {
    var total = stage.sounds.length * 5, done = 0;
    stage.sounds.forEach(function (s) { done += soundProgress(stage.id, s.key); });
    return Math.round((done / total) * 100);
  }
  function stageComplete(stage) { return stageProgressPct(stage) === 100; }
  function overall() {
    var pct = 0; SG.stages.forEach(function (s) { pct += stageProgressPct(s); });
    return Math.round(pct / SG.stages.length);
  }

  /* --------------------------- ui utilities --------------------------- */
  var root, toastEl;
  function toast(msg) {
    toastEl.textContent = msg; toastEl.classList.add('show');
    clearTimeout(toast._t); toast._t = setTimeout(function () { toastEl.classList.remove('show'); }, 2100);
  }
  function dialog(opts) {
    var ov = document.createElement('div'); ov.className = 'overlay';
    ov.innerHTML = '<div class="dialog" role="dialog" aria-modal="true" aria-label="' + esc(opts.title) + '">' +
      '<h3>' + esc(opts.title) + '</h3><p>' + opts.body + '</p>' +
      '<div class="dialog-actions">' +
      '<button class="btn btn--ghost" data-cancel>' + esc(opts.cancel || 'ยกเลิก') + '</button>' +
      '<button class="btn ' + (opts.danger ? 'btn--coral' : 'btn--primary') + '" data-ok>' + esc(opts.ok || 'ตกลง') + '</button>' +
      '</div></div>';
    document.body.appendChild(ov);
    function close() { ov.remove(); }
    ov.addEventListener('click', function (e) { if (e.target === ov) close(); });
    qs('[data-cancel]', ov).addEventListener('click', close);
    qs('[data-ok]', ov).addEventListener('click', function () { close(); if (opts.onOk) opts.onOk(); });
    qs('[data-ok]', ov).focus();
  }
  function celebrate() {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    var c = document.createElement('div'); c.className = 'spark';
    var cols = ['#F4C24E', '#EE6F63', '#7FB9E6', '#6BB08C', '#A98BC9'];
    var html = '';
    for (var i = 0; i < 26; i++) html += '<i style="left:' + (Math.random() * 100) + '%;background:' + rand(cols) + ';animation-delay:' + (Math.random() * .5) + 's"></i>';
    c.innerHTML = html; document.body.appendChild(c);
    setTimeout(function () { c.remove(); }, 2600);
  }
  function audioBtn(label, extra) {
    return '<button class="btn ' + (extra || 'btn--primary') + '" data-speak>' + I.play + (label ? '<span>' + esc(label) + '</span>' : '') + '</button>';
  }
  function honestSoundNote() {
    return '<div class="note-callout">' + I.info + '<span>เสียงอ่านใช้ระบบ Text-to-Speech ของเบราว์เซอร์ ซึ่งอ่าน<strong>คำเต็ม</strong>ได้ดี แต่ยังออก<strong>เสียงเดี่ยว</strong> (phoneme) ไม่สมบูรณ์ ครูจึงควรออกเสียงนำให้นักเรียนฟังด้วยตนเองประกอบ</span></div>';
  }

  /* ------------------------------ router ------------------------------ */
  var state = { view: 'home', stageId: 1, soundKey: null, step: 'A', tab: null };
  function setActiveNav() {
    qsa('.top-nav button').forEach(function (b) { b.classList.toggle('active', b.dataset.nav === state.view || (state.view === 'stage' && b.dataset.nav === 'journey') || (state.view === 'lesson' && b.dataset.nav === 'journey')); });
  }
  function go(view, opts) {
    opts = opts || {};
    state.view = view;
    if (opts.stageId != null) state.stageId = opts.stageId;
    if (opts.soundKey !== undefined) state.soundKey = opts.soundKey;
    if (opts.step) state.step = opts.step;
    AUDIO.stop();
    render();
    window.scrollTo({ top: 0, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  }
  function render() {
    setActiveNav();
    var v = state.view;
    if (v === 'home') return renderHome();
    if (v === 'journey') return renderJourney();
    if (v === 'stage') return renderStage();
    if (v === 'lesson') return renderLesson();
    if (v === 'library') return renderLibrary();
    if (v === 'toolkit') return renderToolkit();
    if (v === 'guide') return renderGuide();
    if (v === 'progress') return renderProgress();
    renderHome();
  }

  /* ------------------------------- HOME ------------------------------- */
  function renderHome() {
    var op = overall();
    var recent = store.recent && SG.stageById(store.recent.stageId);
    var nextStage = SG.stages.find(function (s) { return !stageComplete(s); }) || SG.stages[SG.stages.length - 1];
    root.innerHTML =
      '<div class="view">' +
      '<section class="hero">' +
        '<div class="hero-copy">' +
          '<span class="eyebrow">Interactive Phonics Teaching Studio</span>' +
          '<h1>Read, blend and <em>grow</em> in the Sound Garden</h1>' +
          '<p>A complete phonics programme for beginner readers — seven learning areas, guided sound lessons, whole-class games, a projector teaching mode and printable resources. Built for real classrooms.</p>' +
          '<div class="hero-actions">' +
            '<button class="btn btn--accent btn--lg" data-continue>' + I.arrow + 'Continue learning</button>' +
            '<button class="btn btn--soft btn--lg" data-teach>' + I.present + 'Start teaching</button>' +
          '</div>' +
          '<div class="hero-chips">' +
            '<div><b>7</b><span>learning areas</span></div>' +
            '<div><b>42</b><span>sound lessons</span></div>' +
            '<div><b>7</b><span>activity types</span></div>' +
          '</div>' +
        '</div>' +
        '<div class="hero-art">' + heroArt() + '</div>' +
      '</section>' +

      '<section class="resume">' +
        '<div class="ring" style="--p:' + (op * 3.6) + '"><b>' + op + '%</b></div>' +
        '<div class="resume-copy">' +
          '<strong>' + (op > 0 ? 'Welcome back — ' + op + '% of the garden explored' : 'Your Sound Garden is ready to grow') + '</strong>' +
          '<p>' + (recent ? 'Recently opened: ' + esc(recent.area) : 'Start with Sound Seeds, then travel through all seven areas.') + ' ความคืบหน้าถูกบันทึกบนอุปกรณ์นี้</p>' +
          '<div class="bar"><i style="width:' + op + '%"></i></div>' +
        '</div>' +
        '<button class="btn btn--primary btn--lg" data-continue>' + (op > 0 ? 'Resume' : 'Begin') + '</button>' +
      '</section>' +

      '<div class="section-head"><div><span class="eyebrow-mini">The journey</span><h2>Seven learning areas</h2><p>เนื้อหาเรียงจากง่ายไปยาก แต่ละพื้นที่มีบทเรียนเสียง กิจกรรมฝึก และแบบประเมินท้ายด่าน</p></div>' +
        '<button class="btn btn--ghost" data-nav-journey>View all' + I.arrow + '</button></div>' +
      '<section class="journey">' + SG.stages.map(stageCardHTML).join('') + '</section>' +

      '<div class="section-head"><div><span class="eyebrow-mini">Teacher tools</span><h2>Everything you need in class</h2><p>เครื่องมือช่วยสอนที่หยิบไปใช้ได้ทันที</p></div></div>' +
      '<section class="tiles">' +
        toolTile('present', '#22314C', '#fff', 'Presentation Mode', 'จอใหญ่สำหรับสอนหน้าชั้นหรือออนไลน์ ตัวอักษรและคำขนาดใหญ่ ควบคุมด้วยคีย์บอร์ด', 'data-teach') +
        toolTile('library', '#FDF1D2', '#22314C', 'Word Library', 'คลังคำค้นหาได้ กรองตามด่าน เสียง และตำแหน่ง พร้อมโหมดจอใหญ่และพิมพ์', 'data-nav-library') +
        toolTile('tools', '#E4F1EA', '#22314C', 'Teacher Toolkit', 'สร้างสำรับการ์ด สุ่มคำ วงล้อเสียง วอร์มอัพ และ exit ticket', 'data-nav-toolkit') +
      '</section>' +
      '</div>';

    on('[data-continue]', 'click', function () {
      if (store.recent) go('lesson', { stageId: store.recent.stageId, soundKey: store.recent.soundKey, step: 'A' });
      else go('stage', { stageId: nextStage.id });
    });
    on('[data-teach]', 'click', function () { openPresentation(nextStage.id); });
    on('[data-nav-journey]', 'click', function () { go('journey'); });
    on('[data-nav-library]', 'click', function () { go('library'); });
    on('[data-nav-toolkit]', 'click', function () { go('toolkit'); });
    wireStageCards();
  }
  function toolTile(icon, bg, fg, title, desc, attr) {
    return '<button class="tile" style="background:' + bg + '" ' + attr + '>' +
      '<span class="tile-ic" style="color:' + fg + '">' + I[icon] + '</span>' +
      '<h3>' + esc(title) + '</h3><p>' + esc(desc) + '</p></button>';
  }
  function stageCardHTML(stage) {
    var pct = stageProgressPct(stage);
    var done = pct === 100, started = pct > 0;
    var status = done ? '<span class="status done">ผ่านแล้ว</span>' : started ? '<span class="status progress">' + pct + '%</span>' : '<span class="status">พร้อมเรียน</span>';
    return '<button class="stage" style="background:' + stage.tint + '" data-stage="' + stage.id + '">' +
      '<div class="stage-top">' + stageBadge(stage.icon, stage.color) + '<span class="stage-no">Area ' + stage.id + '</span></div>' +
      '<h3>' + esc(stage.title) + '</h3><div class="area-th">' + esc(stage.thTitle) + '</div>' +
      '<div class="stage-sounds">' + stage.sounds.map(function (s) { return '<span class="chip">' + esc(s.grapheme) + '</span>'; }).join('') + '</div>' +
      '<div class="stage-foot">' + status + '<span class="go">' + I.arrow + '</span></div>' +
      '</button>';
  }
  function wireStageCards() { on('[data-stage]', 'click', function () { go('stage', { stageId: Number(this.dataset.stage) }); }); }

  /* ----------------------------- JOURNEY ------------------------------ */
  function renderJourney() {
    root.innerHTML = '<div class="view">' +
      '<div class="crumb"><button class="back" data-home>' + I.back + 'Home</button></div>' +
      '<div class="section-head"><div><span class="eyebrow-mini">Learning journey</span><h2>Travel through the Sound Garden</h2><p>เลือกพื้นที่การเรียนเพื่อเปิดบทเรียน กิจกรรม และแบบประเมิน</p></div></div>' +
      '<section class="journey">' + SG.stages.map(stageCardHTML).join('') + '</section></div>';
    on('[data-home]', 'click', function () { go('home'); });
    wireStageCards();
  }

  /* ------------------------- STAGE OVERVIEW --------------------------- */
  function renderStage() {
    var stage = SG.stageById(state.stageId);
    var pct = stageProgressPct(stage);
    var words = SG.allWords(stage);
    root.innerHTML = '<div class="view">' +
      '<div class="crumb"><button class="back" data-home>' + I.back + 'Home</button><span class="muted">/</span><button class="back" data-journey>Learning journey</button></div>' +
      '<section class="stage-hero" style="background:' + stage.tint + '">' +
        '<span class="kicker">Area ' + stage.id + ' of 7 · ' + esc(stage.thTitle) + '</span>' +
        '<h1>' + esc(stage.title) + '</h1>' +
        '<p>' + esc(stage.objectiveEn) + '</p>' +
        '<div class="stage-facts">' +
          '<span class="fact">' + stage.sounds.length + ' sounds</span>' +
          '<span class="fact">~' + stage.duration + ' min lesson</span>' +
          '<span class="fact">' + words.length + ' practice words</span>' +
          '<span class="fact">' + pct + '% complete</span>' +
        '</div>' +
      '</section>' +

      '<div class="grid-2" style="margin-top:16px">' +
        '<div class="panel">' +
          '<h2>Sounds in this area</h2><p class="muted">แตะการ์ดเพื่อเข้าบทเรียนของเสียงนั้น เรียงตามลำดับการสอนที่แนะนำ</p>' +
          '<div class="sound-grid" style="margin-top:14px">' + stage.sounds.map(function (s, i) {
            var prog = soundProgress(stage.id, s.key);
            return '<button class="sound-card" data-open-sound="' + esc(s.key) + '">' +
              '<span class="grapheme" style="background:' + stage.tint + '">' + esc(s.grapheme) + '</span>' +
              '<span class="ph">' + esc(s.phoneme) + (s.soundLabel ? ' · ' + esc(s.soundLabel) : '') + '</span>' +
              '<span class="note">' + esc(s.note) + '</span>' +
              '<span class="listen-tag">' + (prog === 5 ? I.check + 'mastered' : prog + '/5 steps') + '</span>' +
              '</button>';
          }).join('') + '</div>' +
        '</div>' +
        '<aside class="panel">' +
          '<h3>Teach this area</h3>' +
          '<div style="display:grid;gap:8px;margin-top:12px">' +
            '<button class="btn btn--primary btn--block" data-start-lesson>' + I.arrow + 'Start lesson</button>' +
            '<button class="btn btn--soft btn--block" data-practice>' + I.blocks + 'Quick practice</button>' +
            '<button class="btn btn--soft btn--block" data-challenge>' + I.star + 'Stage challenge</button>' +
            '<button class="btn btn--soft btn--block" data-present>' + I.present + 'Presentation mode</button>' +
          '</div>' +
          '<details class="collapse" style="margin-top:14px"><summary>Teacher notes (ครู)</summary>' +
            '<p class="muted" style="margin-top:6px"><strong>เป้าหมาย:</strong> ' + esc(stage.objective) + '</p>' +
            '<p class="muted" style="margin-top:8px"><strong>เคล็ดลับ:</strong> ' + esc(stage.teacherTip) + '</p>' +
            '<p class="muted" style="margin-top:8px"><strong>ลำดับการสอน:</strong> ' + stage.order.join(' → ') + '</p>' +
          '</details>' +
          '<button class="btn btn--ghost btn--block no-print" data-print style="margin-top:10px">' + I.print + 'Print word list</button>' +
        '</aside>' +
      '</div>' +

      '<div class="panel" style="margin-top:16px">' +
        '<div style="display:flex;justify-content:space-between;align-items:center;gap:10px;flex-wrap:wrap"><h3>Word list preview</h3><span class="muted">ทั้งหมด ' + words.length + ' คำ</span></div>' +
        '<div class="word-wall" style="margin-top:12px">' + words.map(function (w) { return '<button class="word-chip' + (store.mastered[w] ? ' master' : '') + '" data-word="' + esc(w) + '">' + esc(w) + '</button>'; }).join('') + '</div>' +
        '<p class="muted" style="margin-top:12px"><strong>Tricky words (คำที่อ่านตามเสียงตรง ๆ ไม่ได้):</strong> ' + stage.tricky.map(esc).join(', ') + ' — สอนแบบจดจำ ไม่ใช่สะกดเสียง</p>' +
      '</div>' +
      printSheet(stage) +
      '</div>';

    on('[data-home]', 'click', function () { go('home'); });
    on('[data-journey]', 'click', function () { go('journey'); });
    on('[data-open-sound]', 'click', function () { go('lesson', { stageId: stage.id, soundKey: this.dataset.openSound, step: 'A' }); });
    on('[data-start-lesson]', 'click', function () { go('lesson', { stageId: stage.id, soundKey: stage.sounds[0].key, step: 'A' }); });
    on('[data-practice]', 'click', function () { openActivities(stage.id); });
    on('[data-challenge]', 'click', function () { openChallenge(stage.id); });
    on('[data-present]', 'click', function () { openPresentation(stage.id); });
    on('[data-print]', 'click', function () { window.print(); });
    on('[data-word]', 'click', function () { AUDIO.speak(this.dataset.word); });
  }
  function printSheet(stage) {
    var words = SG.allWords(stage);
    return '<div class="print-only print-sheet"><h2 style="text-align:center">' + esc(stage.title) + ' — Word List</h2>' +
      '<div class="print-grid">' + words.map(function (w) { return '<div class="print-card"><div class="pw">' + esc(w) + '</div></div>'; }).join('') + '</div>' +
      '<p class="print-credit">Bright EngMath · Interactive Phonics Teaching Studio · Cr. Bright EngMath</p></div>';
  }

  /* ------------------------------ LESSON ------------------------------ */
  var STEPS = [['A', 'Hear', 'ฟังเสียง'], ['B', 'Spot', 'หาเสียง'], ['C', 'Blend', 'ผสมคำ'], ['D', 'Read', 'อ่านด้วยกัน'], ['E', 'Check', 'เช็กความเข้าใจ']];
  function currentSound() { var st = SG.stageById(state.stageId); return st.sounds.find(function (s) { return s.key === state.soundKey; }) || st.sounds[0]; }
  function renderLesson() {
    var stage = SG.stageById(state.stageId);
    if (!state.soundKey) state.soundKey = stage.sounds[0].key;
    var sound = currentSound();
    store.recent = { stageId: stage.id, soundKey: sound.key }; save();
    root.innerHTML = '<div class="view">' +
      '<div class="crumb"><button class="back" data-stage>' + I.back + esc(stage.title) + '</button></div>' +
      '<section class="stage-hero" style="background:' + stage.tint + '">' +
        '<span class="kicker">Area ' + stage.id + ' · Sound lesson</span>' +
        '<h1>The <mark style="background:transparent;color:' + stage.color + '">' + esc(sound.grapheme) + '</mark> sound</h1>' +
        '<p>' + esc(sound.note) + '</p>' +
      '</section>' +
      '<div class="tabs" role="tablist" aria-label="Sounds">' + stage.sounds.map(function (s) {
        return '<button class="tab' + (s.key === sound.key ? ' active' : '') + '" data-sound="' + esc(s.key) + '">' + esc(s.grapheme) + (s.soundLabel ? ' · ' + esc(s.soundLabel) : '') + '</button>';
      }).join('') + '</div>' +
      '<div class="stepper">' + STEPS.map(function (s) {
        var done = stepDone(stage.id, sound.key, s[0]);
        return '<button class="step' + (s[0] === state.step ? ' active' : '') + (done ? ' done' : '') + '" data-step="' + s[0] + '"><span class="step-n">' + (done ? '✓' : s[0]) + '</span><span><b>' + s[1] + '</b><small>' + s[2] + '</small></span></button>';
      }).join('') + '</div>' +
      '<div id="stepBody"></div>' +
      '<div class="next-row" style="max-width:none;justify-content:space-between;margin-top:18px">' +
        '<button class="btn btn--ghost" data-prev-step>' + I.left + 'Back</button>' +
        '<button class="btn btn--primary" data-next-step>Next step' + I.arrow + '</button>' +
      '</div>' +
      '</div>';
    on('[data-stage]', 'click', function () { go('stage', { stageId: stage.id }); });
    on('[data-sound]', 'click', function () { state.soundKey = this.dataset.sound; state.step = 'A'; renderLesson(); });
    on('[data-step]', 'click', function () { state.step = this.dataset.step; renderLesson(); });
    on('[data-prev-step]', 'click', function () { var i = STEPS.findIndex(function (s) { return s[0] === state.step; }); if (i > 0) { state.step = STEPS[i - 1][0]; renderLesson(); } else go('stage', { stageId: stage.id }); });
    on('[data-next-step]', 'click', function () { var i = STEPS.findIndex(function (s) { return s[0] === state.step; }); if (i < STEPS.length - 1) { state.step = STEPS[i + 1][0]; renderLesson(); } else { toast('บทเรียนเสียงนี้ครบแล้ว 🎉'); nextSoundOrStage(stage, sound); } });
    renderStep(sound, stage);
  }
  function nextSoundOrStage(stage, sound) {
    var idx = stage.sounds.indexOf(sound);
    if (idx < stage.sounds.length - 1) go('lesson', { stageId: stage.id, soundKey: stage.sounds[idx + 1].key, step: 'A' });
    else go('stage', { stageId: stage.id });
  }
  function renderStep(sound, stage) {
    var body = qs('#stepBody');
    markStep(stage.id, sound.key, state.step);
    if (state.step === 'A') stepHear(body, sound, stage);
    else if (state.step === 'B') stepSpot(body, sound, stage);
    else if (state.step === 'C') stepBlend(body, sound, stage);
    else if (state.step === 'D') stepRead(body, sound, stage);
    else stepCheck(body, sound, stage);
    // update stepper tick
    var sb = qs('.step[data-step="' + state.step + '"] .step-n'); if (sb) sb.textContent = '✓';
    qs('.step[data-step="' + state.step + '"]').classList.add('done');
  }

  /* Step A — Hear */
  function stepHear(body, sound, stage) {
    markHeard(sound.key);
    body.innerHTML = '<div class="grid-2">' +
      '<div class="panel" style="text-align:center">' +
        '<span class="prompt-label">Step A · Hear the sound</span>' +
        '<div class="grapheme" style="width:150px;height:150px;font-size:80px;margin:16px auto;background:' + stage.tint + '">' + esc(sound.grapheme) + '</div>' +
        '<div style="font-family:var(--display);font-size:22px">' + esc(sound.phoneme) + (sound.soundLabel ? ' · ' + esc(sound.soundLabel) : '') + '</div>' +
        '<p class="muted" style="margin-top:6px">Example word: <strong>' + esc(sound.example) + '</strong></p>' +
        '<div class="display-actions" style="justify-content:center;margin-top:16px">' +
          '<button class="btn btn--primary btn--lg" data-hear>' + I.play + 'Hear "' + esc(sound.example) + '"</button>' +
          '<button class="btn btn--soft" data-hear-slow>' + I.slow + 'Slower</button>' +
        '</div>' +
        (sound.mouth ? '<div class="mouth-tip"><b>Mouth position:</b> ' + esc(sound.mouth) + '</div>' : '') +
        honestSoundNote() +
      '</div>' +
      '<aside class="panel">' +
        '<h3>Teacher cue</h3>' +
        '<p class="muted" style="margin-top:6px">' + esc(sound.note) + '</p>' +
        '<div class="script" style="margin-top:14px"><span>"Listen to the sound."</span><button data-say="Listen to the sound.">' + I.play + '</button></div>' +
        '<div class="script"><span>"Say it with me."</span><button data-say="Say it with me.">' + I.play + '</button></div>' +
        '<div class="script"><span>"' + esc(sound.example) + '"</span><button data-say="' + esc(sound.example) + '">' + I.play + '</button></div>' +
        '<p class="muted" style="margin-top:12px;font-size:13px">ให้เด็กออกเสียงตาม 2–3 ครั้ง แล้วชี้ที่รูปสะกดขณะออกเสียง</p>' +
      '</aside></div>';
    on('[data-hear]', 'click', function () { AUDIO.speakSound(sound); });
    on('[data-hear-slow]', 'click', function () { AUDIO.speakSound(sound, { slow: true }); });
    on('[data-say]', 'click', function () { AUDIO.speak(this.dataset.say, { rate: .82 }); });
    setTimeout(function () { AUDIO.speakSound(sound); }, 250);
  }

  /* Step B — Spot */
  function stepSpot(body, sound, stage) {
    var words = sound.words.slice(0, 6);
    body.innerHTML = '<div class="panel">' +
      '<span class="prompt-label">Step B · Spot the sound</span>' +
      '<h2 style="margin-top:6px">Find <mark style="background:transparent;color:' + stage.color + '">' + esc(sound.grapheme) + '</mark> in these words</h2>' +
      '<p class="muted">แตะคำเพื่อฟัง สังเกตตำแหน่งของรูปสะกด (ต้น / กลาง / ท้ายคำ)</p>' +
      '<div class="lib-grid" style="margin-top:16px">' + words.map(function (w) {
        return '<button class="lib-card" data-word="' + esc(w) + '"><div class="lw">' + highlight(w, sound) + '</div><div class="meta">' + positionLabel(sound, w) + '</div></button>';
      }).join('') + '</div>' +
      '<div class="display-actions" style="margin-top:16px"><button class="btn btn--soft" data-hear-all>' + I.play + 'Hear all words</button></div>' +
      '</div>';
    on('[data-word]', 'click', function () { AUDIO.speak(this.dataset.word); });
    on('[data-hear-all]', 'click', function () { AUDIO.speakSequence(words); });
  }

  /* Step C — Blend */
  function stepBlend(body, sound, stage) {
    var pool = sound.words.filter(function (w) { return SG.segment(w).length >= 2 && SG.segment(w).length <= 4; });
    var target = pool.length ? pool[0] : sound.words[0];
    var reveal = 0;
    function draw() {
      var parts = SG.segment(target);
      body.innerHTML = '<div class="panel blend-lab">' +
        '<span class="prompt-label">Step C · Blend the word</span>' +
        '<h2 style="margin-top:6px">Sound it out, then blend</h2>' +
        '<p class="muted">เผยทีละเสียง แตะแต่ละช่องเพื่อฟัง แล้วกด “Blend” เพื่อรวมเป็นคำ</p>' +
        '<div class="blend-track" id="track">' + parts.map(function (p, i) {
          return '<button class="gtile' + (i < reveal ? ' revealed' : ' hidden-tile') + '" data-part="' + i + '">' + esc(p) + '</button>';
        }).join('') + '</div>' +
        '<div class="blend-actions">' +
          '<button class="btn btn--soft" data-reveal ' + (reveal >= parts.length ? 'disabled' : '') + '>' + I.eye + 'Reveal next sound</button>' +
          '<button class="btn btn--primary" data-blend ' + (reveal < parts.length ? 'disabled' : '') + '>' + I.play + 'Blend the word</button>' +
          '<button class="btn btn--soft" data-blend-slow ' + (reveal < parts.length ? 'disabled' : '') + '>' + I.slow + 'Slower</button>' +
          '<button class="btn btn--ghost" data-reset>Reset</button>' +
        '</div>' +
        '<div style="margin-top:14px;display:flex;gap:8px;justify-content:center;flex-wrap:wrap">' + pool.slice(0, 5).map(function (w) { return '<button class="chip" data-target="' + esc(w) + '"' + (w === target ? ' style="background:' + stage.tint + '"' : '') + '>' + esc(w) + '</button>'; }).join('') + '</div>' +
        '</div>';
      on('[data-part]', 'click', function () { AUDIO.speak(parts[Number(this.dataset.part)]); });
      on('[data-reveal]', 'click', function () { if (reveal < parts.length) { reveal++; draw(); AUDIO.speak(parts[reveal - 1]); } });
      on('[data-blend]', 'click', function () { qs('#track').classList.add('blended'); AUDIO.speak(target); });
      on('[data-blend-slow]', 'click', function () { qs('#track').classList.add('blended'); AUDIO.speak(target, { slow: true }); });
      on('[data-reset]', 'click', function () { reveal = 0; draw(); });
      on('[data-target]', 'click', function () { target = this.dataset.target; reveal = 0; draw(); });
    }
    draw();
  }

  /* Step D — Read together */
  function stepRead(body, sound, stage) {
    var words = shuffle(sound.words);
    var idx = 0, big = false;
    function draw() {
      var w = words[idx];
      body.innerHTML = '<div class="panel read-stage">' +
        '<span class="prompt-label">Step D · Read together</span>' +
        '<div class="read-count">Word ' + (idx + 1) + ' of ' + words.length + '</div>' +
        '<div class="read-word" style="' + (big ? 'font-size:min(20vw,180px)' : '') + '">' + highlight(w, sound) + '</div>' +
        '<div class="read-controls">' +
          '<button class="btn btn--soft" data-prev>' + I.left + 'Prev</button>' +
          '<button class="btn btn--primary" data-say>' + I.play + 'Say it</button>' +
          '<button class="btn btn--soft" data-next>Next' + I.right + '</button>' +
        '</div>' +
        '<div class="read-controls">' +
          '<button class="btn btn--ghost btn--sm" data-shuffle>' + I.shuffle + 'Shuffle</button>' +
          '<button class="btn btn--ghost btn--sm" data-big>' + I.fs + (big ? 'Normal size' : 'Enlarge') + '</button>' +
          '<button class="btn ' + (store.mastered[w] ? 'btn--soft' : 'btn--ghost') + ' btn--sm" data-master>' + I.check + (store.mastered[w] ? 'Confident ✓' : 'Mark confident') + '</button>' +
          '<button class="btn btn--ghost btn--sm" data-again>' + I.info + 'Practise again</button>' +
        '</div></div>';
      on('[data-prev]', 'click', function () { idx = (idx - 1 + words.length) % words.length; draw(); AUDIO.speak(words[idx]); });
      on('[data-next]', 'click', function () { idx = (idx + 1) % words.length; draw(); AUDIO.speak(words[idx]); });
      on('[data-say]', 'click', function () { AUDIO.speak(w); });
      on('[data-shuffle]', 'click', function () { words = shuffle(words); idx = 0; draw(); });
      on('[data-big]', 'click', function () { big = !big; draw(); });
      on('[data-master]', 'click', function () { store.mastered[w] = !store.mastered[w]; if (store.mastered[w]) { delete store.practiceAgain[w]; store.stars++; } save(); draw(); toast(store.mastered[w] ? 'Marked confident' : 'Removed'); });
      on('[data-again]', 'click', function () { store.practiceAgain[w] = true; save(); toast('Added to “practise again”'); });
    }
    draw();
  }

  /* Step E — Quick check */
  function stepCheck(body, sound, stage) {
    var pool = SG.allWords(stage);
    var qs_ = buildQuickCheck(sound, stage, pool);
    var idx = 0, score = 0, answered = false;
    function draw() {
      if (idx >= qs_.length) {
        body.innerHTML = '<div class="panel result"><div class="score-orb" style="background:' + stage.color + '"><b>' + score + '/' + qs_.length + '</b></div>' +
          '<h2>Nice checking!</h2><p class="muted">' + (score === qs_.length ? 'เยี่ยมมาก อ่านและฟังเสียงนี้ได้แม่นยำ' : 'ทำได้ดี ลองฟัง Word Wall ซ้ำแล้วทำใหม่ได้') + '</p>' +
          '<div class="result-actions"><button class="btn btn--soft" data-retry>Try again</button><button class="btn btn--primary" data-next-sound>Next sound' + I.arrow + '</button></div></div>';
        if (score === qs_.length) celebrate();
        on('[data-retry]', 'click', function () { idx = 0; score = 0; answered = false; qs_ = buildQuickCheck(sound, stage, pool); draw(); });
        on('[data-next-sound]', 'click', function () { nextSoundOrStage(stage, sound); });
        return;
      }
      var q = qs_[idx];
      body.innerHTML = '<div class="panel act-wrap">' +
        '<div class="act-top"><div><span class="prompt-label">Step E · Quick check</span><h2 style="margin-top:4px">' + esc(q.title) + '</h2></div><span class="count-pill">' + (idx + 1) + ' / ' + qs_.length + '</span></div>' +
        '<div class="act-progress"><i style="width:' + (idx / qs_.length * 100) + '%"></i></div>' +
        renderQuestionPrompt(q) +
        '<div class="options' + (q.options.length === 2 ? ' two' : '') + '">' + q.options.map(function (o) { return '<button class="opt" data-ans="' + esc(o.value) + '">' + o.label + '</button>'; }).join('') + '</div>' +
        '<div id="fb"></div></div>';
      wireQuestion(q, function (correct) {
        answered = true; if (correct) score++;
        showFeedback(q, correct, function () { idx++; answered = false; draw(); });
      });
    }
    draw();
  }
  function buildQuickCheck(sound, stage, pool) {
    var qs_ = [];
    // 1 listen
    var a1 = rand(sound.words);
    qs_.push({ type: 'listen', title: 'Listen and choose', audio: a1, answer: a1, options: opts3(a1, pool) });
    // 2 spot grapheme
    var w2 = rand(sound.words);
    qs_.push({ type: 'grapheme', title: 'Which sound is in the word?', word: w2, answer: sound.key, options: graphemeOpts(sound, stage) });
    // 3 read (choose word for shown grapheme? do odd) — choose the word that HAS the sound
    var right = rand(sound.words);
    var others = SG.allWords(stage).filter(function (w) { return sound.words.indexOf(w) < 0; });
    if (others.length >= 2) {
      var wrongs = shuffle(others).slice(0, 2);
      qs_.push({ type: 'find', title: 'Which word has the ' + sound.grapheme + ' sound?', answer: right, options: shuffle([right].concat(wrongs)).map(wordOpt) });
    } else {
      var a3 = rand(sound.words);
      qs_.push({ type: 'listen', title: 'Listen and choose', audio: a3, answer: a3, options: opts3(a3, pool) });
    }
    return qs_;
  }
  function opts3(answer, pool) { var w = shuffle(pool.filter(function (x) { return x !== answer; })).slice(0, 2); return shuffle([answer].concat(w)).map(wordOpt); }
  function wordOpt(w) { return { value: w, label: esc(w) }; }
  function graphemeOpts(sound, stage) {
    var others = shuffle(stage.sounds.filter(function (s) { return s.key !== sound.key; })).slice(0, 2);
    return shuffle([sound].concat(others)).map(function (s) { return { value: s.key, label: esc(s.grapheme) + '<small>' + esc(s.phoneme) + '</small>' }; });
  }
  function renderQuestionPrompt(q) {
    if (q.type === 'listen' || q.type === 'build') return '<div class="prompt"><span class="prompt-label">Listen carefully</span><button class="audio-orb" data-audio>' + I.play + '</button><p class="muted">กดฟังได้หลายครั้ง แล้วเลือกคำตอบ</p></div>';
    if (q.type === 'grapheme') return '<div class="prompt"><span class="prompt-label">Read the word</span><div class="prompt-main">' + esc(q.word) + '</div></div>';
    if (q.type === 'find') return '<div class="prompt"><span class="prompt-label">Choose the word</span><div class="prompt-main" style="font-size:28px">' + esc(q.title) + '</div></div>';
    if (q.type === 'missing') return '<div class="prompt"><span class="prompt-label">Fill the missing sound</span><div class="prompt-main">' + esc(q.display) + '</div></div>';
    return '<div class="prompt"><div class="prompt-main">' + esc(q.title) + '</div></div>';
  }
  function wireQuestion(q, done) {
    if (q.audio) { on('[data-audio]', 'click', function () { AUDIO.speak(q.audio); }); setTimeout(function () { AUDIO.speak(q.audio); }, 250); }
    var locked = false;
    on('[data-ans]', 'click', function () {
      if (locked) return; locked = true;
      var val = this.dataset.ans, correct = val === q.answer, clicked = this;
      qsa('.opt').forEach(function (b) { b.disabled = true; if (b.dataset.ans === q.answer) b.classList.add('correct'); else if (b === clicked) b.classList.add('wrong'); });
      done(correct);
    });
  }
  function showFeedback(q, correct, next) {
    var fb = qs('#fb'); if (!fb) return;
    var ansLabel = q.answerLabel || q.answer;
    fb.innerHTML = '<div class="feedback ' + (correct ? 'good' : 'bad') + '"><strong>' + (correct ? I.check + 'Well done!' : I.info + 'Almost — listen again') + '</strong>' +
      (correct ? 'คำตอบคือ “' + esc(ansLabel) + '”' : 'คำตอบที่ถูกคือ “' + esc(ansLabel) + '” ลองฟังและอ่านตามอีกครั้ง') + '</div>' +
      '<div class="next-row"><button class="btn btn--primary" data-next>Next' + I.arrow + '</button></div>';
    if (!correct && q.word) AUDIO.speak(q.word); else if (!correct && q.audio) AUDIO.speak(q.audio);
    on('[data-next]', 'click', next);
  }

  /* ----------------------------- ACTIVITIES --------------------------- */
  // Exposed on window for activities.js
  global.SGApp = {
    esc: esc, shuffle: shuffle, rand: rand, uniq: uniq, qs: qs, qsa: qsa, on: on,
    I: I, highlight: highlight, positionLabel: positionLabel, AUDIO: AUDIO, SG: SG,
    toast: toast, dialog: dialog, celebrate: celebrate, store: store, save: save,
    opts3: opts3, wordOpt: wordOpt, graphemeOpts: graphemeOpts, renderQuestionPrompt: renderQuestionPrompt,
    wireQuestion: wireQuestion, showFeedback: showFeedback, honestSoundNote: honestSoundNote,
    getRoot: function () { return root; }, go: go, stageBadge: stageBadge, printSheet: printSheet,
    markStep: markStep, stageRec: stageRec, save2: save
  };
  function openActivities(stageId) { global.Activities.openMenu(stageId); }
  function openChallenge(stageId) { global.Activities.openChallenge(stageId); }
  function openPresentation(stageId) { global.Present.open(stageId); }

  /* ------------------------------ LIBRARY ----------------------------- */
  var libState = { q: '', stage: 'all', sound: 'all', pos: 'all', big: false };
  function renderLibrary() {
    root.innerHTML = '<div class="view">' +
      '<div class="crumb"><button class="back" data-home>' + I.back + 'Home</button></div>' +
      '<div class="section-head"><div><span class="eyebrow-mini">Word Library</span><h2>Every word, searchable</h2><p>ค้นหาและกรองคำตามด่าน เสียง และตำแหน่ง แตะเพื่อฟัง หรือเปิดโหมดจอใหญ่</p></div></div>' +
      '<div class="lib-controls">' +
        '<div class="field">' + I.search + '<input id="libq" placeholder="Search words…" value="' + esc(libState.q) + '" aria-label="Search words"></div>' +
        '<select class="sel" id="libstage" aria-label="Filter by area"><option value="all">All areas</option>' + SG.stages.map(function (s) { return '<option value="' + s.id + '"' + (libState.stage == s.id ? ' selected' : '') + '>' + esc(s.title) + '</option>'; }).join('') + '</select>' +
        '<select class="sel" id="libsound" aria-label="Filter by sound">' + soundFilterOptions() + '</select>' +
        '<select class="sel" id="libpos" aria-label="Filter by position"><option value="all">Any position</option><option value="beginning"' + (libState.pos === 'beginning' ? ' selected' : '') + '>Beginning</option><option value="middle"' + (libState.pos === 'middle' ? ' selected' : '') + '>Middle</option><option value="ending"' + (libState.pos === 'ending' ? ' selected' : '') + '>Ending</option></select>' +
        '<button class="btn btn--soft btn--sm" id="libbig">' + I.fs + (libState.big ? 'Normal' : 'Large mode') + '</button>' +
        '<button class="btn btn--soft btn--sm" id="libshuffle">' + I.shuffle + 'Shuffle</button>' +
        '<button class="btn btn--soft btn--sm" id="libauto">' + I.play + 'Autoplay</button>' +
        '<button class="btn btn--ghost btn--sm no-print" id="libprint">' + I.print + 'Print</button>' +
      '</div>' +
      '<div id="libResults"></div>' +
      '<div class="print-only" id="libPrint"></div>' +
      '</div>';
    on('[data-home]', 'click', function () { go('home'); });
    qs('#libq').addEventListener('input', function () { libState.q = this.value; drawLib(); });
    qs('#libstage').addEventListener('change', function () { libState.stage = this.value; libState.sound = 'all'; renderLibrary(); });
    qs('#libsound').addEventListener('change', function () { libState.sound = this.value; drawLib(); });
    qs('#libpos').addEventListener('change', function () { libState.pos = this.value; drawLib(); });
    qs('#libbig').addEventListener('click', function () { libState.big = !libState.big; renderLibrary(); });
    qs('#libshuffle').addEventListener('click', function () { libState._shuffle = true; drawLib(); });
    qs('#libauto').addEventListener('click', function () { var ws = currentLibWords().map(function (r) { return r.word; }).slice(0, 12); AUDIO.speakSequence(ws); toast('Autoplay ' + ws.length + ' words'); });
    qs('#libprint').addEventListener('click', function () { window.print(); });
    drawLib();
  }
  function soundFilterOptions() {
    var opts = '<option value="all">All sounds</option>';
    SG.stages.forEach(function (s) {
      if (libState.stage !== 'all' && libState.stage != s.id) return;
      s.sounds.forEach(function (snd) { opts += '<option value="' + s.id + ':' + snd.key + '"' + (libState.sound === s.id + ':' + snd.key ? ' selected' : '') + '>' + esc(snd.grapheme) + ' (' + esc(snd.phoneme) + ')</option>'; });
    });
    return opts;
  }
  function currentLibWords() {
    var rows = [];
    SG.stages.forEach(function (s) {
      if (libState.stage !== 'all' && libState.stage != s.id) return;
      s.sounds.forEach(function (snd) {
        if (libState.sound !== 'all' && libState.sound !== s.id + ':' + snd.key) return;
        snd.words.forEach(function (w) {
          if (libState.q && w.toLowerCase().indexOf(libState.q.toLowerCase()) < 0) return;
          if (libState.pos !== 'all' && positionLabel(snd, w) !== libState.pos) return;
          rows.push({ word: w, sound: snd, stage: s });
        });
      });
    });
    var seen = {}; rows = rows.filter(function (r) { var k = r.word + '|' + r.sound.key; if (seen[k]) return false; seen[k] = 1; return true; });
    if (libState._shuffle) { rows = shuffle(rows); libState._shuffle = false; }
    return rows;
  }
  function drawLib() {
    var rows = currentLibWords();
    var host = qs('#libResults');
    host.innerHTML = '<p class="muted" style="margin-bottom:10px">' + rows.length + ' words</p>' +
      '<div class="lib-grid">' + rows.map(function (r) {
        return '<button class="lib-card' + (store.mastered[r.word] ? ' master' : '') + '" data-word="' + esc(r.word) + '" data-key="' + esc(r.sound.key) + '" data-stage="' + r.stage.id + '">' +
          '<div class="lw" style="' + (libState.big ? 'font-size:38px' : '') + '">' + highlight(r.word, r.sound) + '</div>' +
          '<div class="meta">' + esc(r.sound.grapheme) + ' · ' + positionLabel(r.sound, r.word) + '</div>' +
          '<div class="seg">' + SG.segment(r.word).join('·') + '</div>' +
          '</button>';
      }).join('') + '</div>';
    qs('#libPrint').innerHTML = '<h2 style="text-align:center">Sound Garden — Word Cards</h2><div class="print-grid">' + rows.map(function (r) { return '<div class="print-card"><div class="pw">' + esc(r.word) + '</div></div>'; }).join('') + '</div><p class="print-credit">Cr. Bright EngMath</p>';
    on('[data-word]', 'click', function () {
      var self = this;
      AUDIO.speak(this.dataset.word);
      // long-press-like: shift-click toggles mastered
    });
    on('[data-word]', 'dblclick', function () { var w = this.dataset.word; store.mastered[w] = !store.mastered[w]; save(); drawLib(); toast(store.mastered[w] ? 'Mastered ' + w : 'Unmarked ' + w); });
  }

  /* ------------------------------ TOOLKIT ----------------------------- */
  function renderToolkit() { global.Toolkit.render(root); }

  /* ------------------------------- GUIDE ------------------------------ */
  function renderGuide() {
    root.innerHTML = '<div class="view">' +
      '<div class="crumb"><button class="back" data-home>' + I.back + 'Home</button></div>' +
      '<div class="section-head"><div><span class="eyebrow-mini">Teacher guide</span><h2>How to teach with Sound Garden Studio</h2><p>คำแนะนำภาษาไทยและประโยคภาษาอังกฤษสำหรับใช้ในห้องเรียน</p></div></div>' +
      '<div class="guide-grid">' +
        '<section class="guide"><h3>ขั้นตอนการสอน 1 เสียง</h3>' +
          '<p class="muted">แต่ละบทเรียนเสียงมี 5 ขั้น: <strong>Hear</strong> (ฟังเสียง) → <strong>Spot</strong> (หาเสียงในคำ) → <strong>Blend</strong> (ผสมเสียง) → <strong>Read</strong> (อ่านคำ) → <strong>Check</strong> (เช็กความเข้าใจ) ใช้เรียงตามลำดับเพื่อสร้างความมั่นใจ</p></section>' +
        '<section class="guide"><h3>เสียงเดี่ยว vs คำเต็ม</h3>' +
          '<p class="muted">ปุ่มเสียงในแอปใช้ TTS ของเบราว์เซอร์ อ่าน<strong>คำเต็ม</strong>ได้ดี แต่<strong>เสียงเดี่ยว</strong>ยังไม่สมบูรณ์ ครูควรออกเสียงนำเอง เช่น พูด /s/ สั้น ๆ ไม่เติม “เออะ”</p></section>' +
        '<section class="guide"><h3>Classroom language (English)</h3>' +
          '<div class="sort-tray" style="justify-content:flex-start">' + SG.scripts.map(function (s) { return '<div class="script" style="flex:1 1 260px"><span>"' + esc(s) + '"</span><button data-say="' + esc(s) + '">' + I.play + '</button></div>'; }).join('') + '</div></section>' +
        '<section class="guide"><h3>ข้อควรจำเรื่องการออกเสียง</h3>' +
          '<p class="muted">• oo มีสองเสียง: สั้น /ʊ/ (book) และยาว /uː/ (moon)<br>• th มีสองเสียง: ไม่ก้อง /θ/ (thin) และก้อง /ð/ (this) — ให้เด็กแตะคอ ถ้าสั่นคือก้อง<br>• อ่าน digraph (ch, sh, th, ck, ng, qu) เป็น<strong>หนึ่งเสียง</strong><br>• Tricky words เช่น the, was, one สอนแบบจำ ไม่สะกดเสียง</p></section>' +
      '</div>' +
      '<div class="panel" style="margin-top:16px"><h3>Suggested 25–30 minute lesson flow</h3>' +
        '<div class="skills" style="max-width:none;margin-top:12px">' +
          flowRow('5 min', 'Warm-up', 'ทบทวนเสียงเดิมด้วย Presentation Mode หรือ Sound Spinner') +
          flowRow('8 min', 'New sound', 'สอนเสียงใหม่ผ่าน Hear → Spot → Blend') +
          flowRow('7 min', 'Read & play', 'อ่าน Word Wall แล้วเล่นกิจกรรมหนึ่งโหมด') +
          flowRow('5 min', 'Check', 'ทำ Quick Check หรือ Stage Challenge สั้น ๆ') +
          flowRow('2 min', 'Wrap-up', 'สร้าง Exit Ticket จาก Teacher Toolkit') +
        '</div></div>' +
      '</div>';
    on('[data-home]', 'click', function () { go('home'); });
    on('[data-say]', 'click', function () { AUDIO.speak(this.dataset.say, { rate: .82 }); });
  }
  function flowRow(time, title, desc) { return '<div class="review-item"><div><b style="font-size:16px">' + esc(title) + '</b><div class="muted" style="font-size:13px">' + esc(desc) + '</div></div><span class="fact" style="background:var(--ivory)">' + esc(time) + '</span></div>'; }

  /* ------------------------------ PROGRESS ---------------------------- */
  function renderProgress() {
    var op = overall();
    var practise = Object.keys(store.practiceAgain);
    var mastered = Object.keys(store.mastered);
    root.innerHTML = '<div class="view">' +
      '<div class="crumb"><button class="back" data-home>' + I.back + 'Home</button></div>' +
      '<div class="section-head"><div><span class="eyebrow-mini">Progress</span><h2>Your class progress</h2><p>บันทึกไว้บนอุปกรณ์นี้ ไม่ต้องล็อกอิน และไม่เก็บข้อมูลนักเรียน</p></div>' +
        '<button class="btn btn--ghost" data-reset>' + I.trash + 'Reset progress</button></div>' +
      '<div class="grid-2">' +
        '<div class="panel"><h3>Stage completion</h3><div class="skills" style="max-width:none;margin-top:12px">' +
          SG.stages.map(function (s) { var p = stageProgressPct(s); return '<div class="skill-row"><span>' + esc(s.title) + '</span><span class="muted">' + p + '%' + (store.stages[s.id] && store.stages[s.id].challengeBest ? ' · best ' + store.stages[s.id].challengeBest + '/12' : '') + '</span><div class="skill-bar"><i style="width:' + p + '%;background:' + s.color + '"></i></div></div>'; }).join('') +
        '</div></div>' +
        '<aside class="panel"><h3>Totals</h3>' +
          '<div class="stage-facts" style="margin-top:12px">' +
            '<span class="fact">' + op + '% overall</span>' +
            '<span class="fact"><span style="color:var(--butter-ink)">' + I.star + '</span> ' + store.stars + ' stars</span>' +
            '<span class="fact">' + mastered.length + ' words mastered</span>' +
          '</div>' +
          '<h3 style="margin-top:18px">Words to practise again</h3>' +
          (practise.length ? '<div class="word-wall" style="margin-top:10px">' + practise.map(function (w) { return '<button class="word-chip" data-word="' + esc(w) + '">' + esc(w) + '</button>'; }).join('') + '</div>' : '<p class="muted" style="margin-top:8px">ยังไม่มีคำที่ทำเครื่องหมายไว้</p>') +
        '</aside>' +
      '</div></div>';
    on('[data-home]', 'click', function () { go('home'); });
    on('[data-word]', 'click', function () { AUDIO.speak(this.dataset.word); });
    on('[data-reset]', 'click', function () {
      dialog({ title: 'Reset all progress?', body: 'ความคืบหน้า ดาว คำที่จำได้ และสำรับการ์ดทั้งหมดจะถูกลบออกจากอุปกรณ์นี้ การกระทำนี้ย้อนกลับไม่ได้', ok: 'Reset', cancel: 'Cancel', danger: true, onOk: function () { store = blankStore(); global.SGApp.store = store; try { localStorage.removeItem(KEY); } catch (e) {} toast('Progress reset'); go('home'); } });
    });
  }

  /* ------------------------------ TOP BAR ----------------------------- */
  function buildShell() {
    var top = qs('#topActions');
    var soundOn = AUDIO.enabled;
    // sound status handling
    AUDIO.onStatus(function (quality, kind) {
      if (kind === 'novoice') toast('ไม่พบเสียงภาษาอังกฤษบนอุปกรณ์นี้ — ครูออกเสียงนำได้');
    });
  }

  /* ------------------------------- INIT ------------------------------- */
  function init() {
    root = qs('#root');
    toastEl = qs('#toast');
    // brand + nav
    qs('#brand').innerHTML = brandMark() + '<div class="brand-copy"><strong>Sound Garden</strong><span>Studio · Bright EngMath</span></div>';
    qs('#brand').addEventListener('click', function () { go('home'); });
    on('.top-nav button', 'click', function () {
      var v = this.dataset.nav;
      if (v === 'home') go('home'); else if (v === 'journey') go('journey'); else if (v === 'library') go('library'); else if (v === 'toolkit') go('toolkit'); else if (v === 'guide') go('guide'); else if (v === 'progress') go('progress');
    });
    // sound toggle
    var soundBtn = qs('#soundToggle');
    function paintSound() { soundBtn.innerHTML = AUDIO.enabled ? I.volume : I.mute; soundBtn.setAttribute('aria-pressed', AUDIO.enabled ? 'false' : 'true'); soundBtn.setAttribute('aria-label', AUDIO.enabled ? 'ปิดเสียง' : 'เปิดเสียง'); }
    soundBtn.addEventListener('click', function () { AUDIO.enabled = !AUDIO.enabled; paintSound(); toast(AUDIO.enabled ? 'เปิดเสียงแล้ว' : 'ปิดเสียงแล้ว'); });
    paintSound();
    // fullscreen
    var fsBtn = qs('#fsToggle'); fsBtn.innerHTML = I.fs;
    fsBtn.addEventListener('click', function () { if (!document.fullscreenElement) { if (document.documentElement.requestFullscreen) document.documentElement.requestFullscreen(); } else if (document.exitFullscreen) document.exitFullscreen(); });
    // print
    var pBtn = qs('#printTop'); if (pBtn) pBtn.addEventListener('click', function () { window.print(); });
    AUDIO.onStatus(function (q, kind) { if (kind === 'novoice') toast('ไม่พบเสียงภาษาอังกฤษ — ครูช่วยออกเสียงนำ'); });
    render();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})(window);
