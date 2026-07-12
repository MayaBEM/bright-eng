/* =========================================================================
   Sound Garden Studio — Activities & Stage Challenge
   Seven genuinely different activity types + a mixed assessment.
   Depends on window.SGApp (from app.js).
   ========================================================================= */
(function (global) {
  'use strict';
  var A = global.SGApp, SG = global.SG, AUDIO = global.Audio;
  var esc = A.esc, shuffle = A.shuffle, rand = A.rand, I = A.I, on = A.on, qs = A.qs, qsa = A.qsa, highlight = A.highlight;

  function root() { return A.getRoot(); }
  function backToStage(stage) { A.go('stage', { stageId: stage.id }); }

  var ACTS = [
    { id: 'listen', icon: 'ear', bg: '#E1EFFA', name: 'Listen & Choose', desc: 'ฟังคำแล้วเลือกคำที่ได้ยิน ปุ่มใหญ่ กดฟังซ้ำได้' },
    { id: 'detective', icon: 'search', bg: '#FDF1D2', name: 'Sound Detective', desc: 'ดูคำแล้วหารูปสะกดเป้าหมายในคำจริง' },
    { id: 'build', icon: 'blocks', bg: '#E4F1EA', name: 'Build the Word', desc: 'เรียงตัวอักษร/รูปสะกดให้เป็นคำที่ได้ยิน (digraph นับเป็นหนึ่งชิ้น)' },
    { id: 'blend', icon: 'magic', bg: '#EDE6F5', name: 'Blend & Reveal', desc: 'เผยทีละเสียง เดาคำ แล้วเปิดเฉลย' },
    { id: 'odd', icon: 'odd', bg: '#FCE6E4', name: 'Odd One Out', desc: 'เลือกคำที่ไม่มีเสียงเป้าหมาย พร้อมคำอธิบาย' },
    { id: 'sort', icon: 'sort', bg: '#DDF0ED', name: 'Word Sort', desc: 'จัดคำเข้ากลุ่มเสียง เช่น oo สั้น/ยาว, th ก้อง/ไม่ก้อง' },
    { id: 'flash', icon: 'cards', bg: '#FFF7E6', name: 'Flashcard Challenge', desc: 'การ์ดใหญ่ทั้งชั้น กด got it / practise again' }
  ];

  function openMenu(stageId) {
    var stage = SG.stageById(stageId);
    root().innerHTML = '<div class="view">' +
      '<div class="crumb"><button class="back" data-stage>' + I.back + esc(stage.title) + '</button></div>' +
      '<div class="section-head"><div><span class="eyebrow-mini">Quick practice</span><h2>Choose an activity</h2><p>เจ็ดกิจกรรมฝึกคนละทักษะ ครูเลือกให้เหมาะกับจุดประสงค์ของคาบ</p></div></div>' +
      '<section class="tiles" style="grid-template-columns:repeat(3,1fr)">' + ACTS.map(function (a) {
        return '<button class="tile" style="background:' + a.bg + '" data-act="' + a.id + '"><span class="tile-ic">' + I[a.icon] + '</span><h3>' + esc(a.name) + '</h3><p>' + esc(a.desc) + '</p></button>';
      }).join('') + '</section></div>';
    on('[data-stage]', 'click', function () { backToStage(stage); });
    on('[data-act]', 'click', function () { start(stage, this.dataset.act); });
  }

  function start(stage, id) {
    AUDIO.stop();
    if (id === 'listen') return runMCQ(stage, 'Listen & Choose', 5, qListen);
    if (id === 'detective') return runMCQ(stage, 'Sound Detective', 5, qDetective);
    if (id === 'odd') return runMCQ(stage, 'Odd One Out', 5, qOdd);
    if (id === 'build') return runBuild(stage);
    if (id === 'blend') return runBlend(stage);
    if (id === 'sort') return runSort(stage);
    if (id === 'flash') return runFlash(stage);
  }

  /* --------------------------- shared shell --------------------------- */
  function shell(stage, title, idx, total, inner, backLabel) {
    return '<div class="view"><div class="crumb"><button class="back" data-menu>' + I.back + (backLabel || 'Activities') + '</button></div>' +
      '<div class="panel act-wrap">' +
        '<div class="act-top"><div><span class="prompt-label">' + esc(stage.title) + '</span><h2 style="margin-top:4px">' + esc(title) + '</h2></div><span class="count-pill">' + (idx + 1) + ' / ' + total + '</span></div>' +
        '<div class="act-progress"><i style="width:' + (idx / total * 100) + '%"></i></div>' + inner + '</div></div>';
  }
  function finish(stage, title, score, total, opts) {
    opts = opts || {};
    root().innerHTML = '<div class="view"><div class="panel result act-wrap">' +
      '<div class="score-orb" style="background:' + stage.color + '"><b>' + score + '/' + total + '</b></div>' +
      '<h2>' + esc(title) + ' complete</h2>' +
      '<p class="muted">' + (score >= total * 0.8 ? 'ยอดเยี่ยม! ทำได้ตามเป้าหมาย' : 'ทำได้ดี ลองฝึกซ้ำหรือเปลี่ยนกิจกรรมได้') + '</p>' +
      (opts.extra || '') +
      '<div class="result-actions"><button class="btn btn--soft" data-again>Play again</button><button class="btn btn--soft" data-menu>Other activity</button><button class="btn btn--primary" data-stage>Back to area</button></div>' +
      '</div></div>';
    on('[data-again]', 'click', opts.onAgain);
    on('[data-menu]', 'click', function () { openMenu(stage.id); });
    on('[data-stage]', 'click', function () { backToStage(stage); });
    if (score >= total * 0.8) A.celebrate();
  }

  /* ----------------------------- MCQ engine --------------------------- */
  function runMCQ(stage, title, total, maker) {
    var idx = 0, score = 0;
    function draw() {
      if (idx >= total) return finish(stage, title, score, total, { onAgain: function () { idx = 0; score = 0; draw(); } });
      var q = maker(stage);
      root().innerHTML = shell(stage, title, idx, total,
        A.renderQuestionPrompt(q) +
        '<div class="options' + (q.options.length === 2 ? ' two' : '') + '">' + q.options.map(function (o) { return '<button class="opt" data-ans="' + esc(o.value) + '">' + o.label + '</button>'; }).join('') + '</div>' +
        '<div id="fb"></div>');
      on('[data-menu]', 'click', function () { openMenu(stage.id); });
      A.wireQuestion(q, function (correct) {
        if (correct) score++;
        var fb = qs('#fb');
        var lbl = q.answerLabel || q.answer;
        fb.innerHTML = '<div class="feedback ' + (correct ? 'good' : 'bad') + '"><strong>' + (correct ? I.check + 'Correct!' : I.info + (q.explain ? 'Not quite' : 'Almost')) + '</strong>' +
          (correct ? 'คำตอบคือ “' + esc(lbl) + '”' : (q.explain || ('คำตอบที่ถูกคือ “' + esc(lbl) + '”'))) + '</div>' +
          '<div class="next-row"><button class="btn btn--primary" data-next>Next' + I.arrow + '</button></div>';
        if (!correct && (q.word || q.audio)) AUDIO.speak(q.word || q.audio);
        on('[data-next]', 'click', function () { idx++; draw(); });
      });
    }
    draw();
  }
  function qListen(stage) { var pool = SG.allWords(stage); var a = rand(pool); return { type: 'listen', audio: a, answer: a, options: A.opts3(a, pool) }; }
  function qDetective(stage) {
    var snd = rand(stage.sounds); var w = rand(snd.words);
    return { type: 'grapheme', word: w, answer: snd.key, answerLabel: snd.grapheme, options: A.graphemeOpts(snd, stage) };
  }
  function qOdd(stage) {
    var snd = rand(stage.sounds);
    var withSound = shuffle(snd.words).slice(0, 3);
    var others = SG.allWords(stage).filter(function (w) { return snd.words.indexOf(w) < 0; });
    if (others.length < 1) return qListen(stage);
    var odd = rand(others);
    var opts = shuffle(withSound.concat([odd]));
    return {
      type: 'odd', title: 'Which word does NOT have the ' + snd.grapheme + ' sound?',
      answer: odd, word: odd, options: opts.map(A.wordOpt),
      explain: '“' + odd + '” ไม่มีเสียง ' + snd.phoneme + ' (' + snd.grapheme + ') แต่คำอื่นมี'
    };
  }

  /* --------------------------- Build the Word ------------------------- */
  function runBuild(stage) {
    var total = 5, idx = 0, score = 0;
    function newRound() {
      var pool = SG.allWords(stage).filter(function (w) { var s = SG.segment(w); return s.length >= 2 && s.length <= 5; });
      var target = rand(pool);
      return { target: target, parts: SG.segment(target), bank: shuffle(SG.segment(target)), built: [] };
    }
    var r = newRound();
    function draw() {
      if (idx >= total) return finish(stage, 'Build the Word', score, total, { onAgain: function () { idx = 0; score = 0; r = newRound(); draw(); } });
      root().innerHTML = shell(stage, 'Build the Word', idx, total,
        '<div class="prompt"><span class="prompt-label">Listen and build</span><button class="audio-orb" data-audio>' + I.play + '</button><p class="muted">แตะรูปสะกดตามลำดับที่ได้ยิน (digraph = ชิ้นเดียว)</p></div>' +
        '<div class="tile-slots" id="slots">' + r.built.map(function (p, i) { return '<button class="ltile" data-built="' + i + '">' + esc(p) + '</button>'; }).join('') + '</div>' +
        '<div class="tile-bank" id="bank">' + r.bank.map(function (p, i) { return '<button class="ltile" data-bank="' + i + '">' + esc(p) + '</button>'; }).join('') + '</div>' +
        '<div class="next-row" style="justify-content:center;margin-top:16px"><button class="btn btn--soft" data-slow>' + I.slow + 'Slower</button><button class="btn btn--primary" data-check ' + (r.built.length !== r.parts.length ? 'disabled' : '') + '>Check</button></div>' +
        '<div id="fb"></div>');
      on('[data-menu]', 'click', function () { openMenu(stage.id); });
      on('[data-audio]', 'click', function () { AUDIO.speak(r.target); });
      on('[data-slow]', 'click', function () { AUDIO.speak(r.target, { slow: true }); });
      on('[data-bank]', 'click', function () { var i = Number(this.dataset.bank); r.built.push(r.bank[i]); r.bank.splice(i, 1); AUDIO.speak(r.built[r.built.length - 1]); draw(); });
      on('[data-built]', 'click', function () { var i = Number(this.dataset.built); r.bank.push(r.built[i]); r.built.splice(i, 1); draw(); });
      on('[data-check]', 'click', function () {
        var correct = r.built.join('') === r.target;
        if (correct) score++;
        qs('#fb').innerHTML = '<div class="feedback ' + (correct ? 'good' : 'bad') + '"><strong>' + (correct ? I.check + 'You built it!' : I.info + 'Almost') + '</strong>' + (correct ? 'คำที่ถูกคือ “' + esc(r.target) + '”' : 'คำที่ถูกคือ “' + esc(r.target) + '” — ลองเรียงใหม่') + '</div><div class="next-row"><button class="btn btn--primary" data-next>Next' + I.arrow + '</button></div>';
        AUDIO.speak(r.target);
        on('[data-next]', 'click', function () { idx++; r = newRound(); draw(); });
      });
      setTimeout(function () { AUDIO.speak(r.target); }, 250);
    }
    draw();
  }

  /* --------------------------- Blend & Reveal ------------------------- */
  function runBlend(stage) {
    var total = 5, idx = 0, score = 0;
    function newRound() { var pool = SG.allWords(stage).filter(function (w) { var s = SG.segment(w); return s.length >= 2 && s.length <= 4; }); var t = rand(pool); return { target: t, parts: SG.segment(t), reveal: 0, guessed: false }; }
    var r = newRound();
    function draw() {
      if (idx >= total) return finish(stage, 'Blend & Reveal', score, total, { onAgain: function () { idx = 0; score = 0; r = newRound(); draw(); } });
      root().innerHTML = shell(stage, 'Blend & Reveal', idx, total,
        '<div class="blend-lab"><p class="muted">เผยทีละเสียง ให้เด็กเดาคำก่อน แล้วกด “Reveal word”</p>' +
        '<div class="blend-track" id="track">' + r.parts.map(function (p, i) { return '<button class="gtile' + (i < r.reveal ? ' revealed' : ' hidden-tile') + '" data-part="' + i + '">' + esc(p) + '</button>'; }).join('') + '</div>' +
        '<div class="blend-actions">' +
        '<button class="btn btn--soft" data-reveal ' + (r.reveal >= r.parts.length ? 'disabled' : '') + '>' + I.eye + 'Reveal next sound</button>' +
        '<button class="btn btn--primary" data-word ' + (r.reveal < r.parts.length ? 'disabled' : '') + '>' + I.play + 'Reveal word</button>' +
        '</div><div id="fb"></div></div>');
      on('[data-menu]', 'click', function () { openMenu(stage.id); });
      on('[data-part]', 'click', function () { AUDIO.speak(r.parts[Number(this.dataset.part)]); });
      on('[data-reveal]', 'click', function () { if (r.reveal < r.parts.length) { r.reveal++; AUDIO.speak(r.parts[r.reveal - 1]); draw(); } });
      on('[data-word]', 'click', function () {
        qs('#track').classList.add('blended'); AUDIO.speak(r.target);
        qs('#fb').innerHTML = '<div class="feedback good"><strong>' + I.check + 'The word is “' + esc(r.target) + '”</strong>Did the class predict it? กด got it ถ้าเด็กเดาถูก</div>' +
          '<div class="next-row"><button class="btn btn--soft" data-miss>Practise again</button><button class="btn btn--primary" data-got>Got it' + I.arrow + '</button></div>';
        on('[data-got]', 'click', function () { score++; idx++; r = newRound(); draw(); });
        on('[data-miss]', 'click', function () { A.store.practiceAgain[r.target] = true; A.save(); idx++; r = newRound(); draw(); });
      });
    }
    draw();
  }

  /* ------------------------------ Word Sort --------------------------- */
  function runSort(stage) {
    var pair = pickSortPair(stage);
    var s1 = pair[0], s2 = pair[1];
    var words = shuffle(shuffle(s1.words).slice(0, 3).map(function (w) { return { w: w, k: s1.key }; })
      .concat(shuffle(s2.words).slice(0, 3).map(function (w) { return { w: w, k: s2.key }; })));
    var placed = {}; // word -> colKey
    var selected = null;
    function draw() {
      var tray = words.filter(function (o) { return !placed[o.w]; });
      root().innerHTML = '<div class="view"><div class="crumb"><button class="back" data-menu>' + I.back + 'Activities</button></div>' +
        '<div class="panel act-wrap"><div class="act-top"><div><span class="prompt-label">' + esc(stage.title) + '</span><h2 style="margin-top:4px">Word Sort</h2></div><span class="count-pill">' + Object.keys(placed).length + ' / ' + words.length + '</span></div>' +
        '<p class="muted">แตะคำเพื่อเลือก แล้วแตะคอลัมน์ที่ถูกต้อง (หรือใช้ลากวางก็ได้) — จัดคำตามเสียงที่ได้ยิน</p>' +
        '<div class="sort-tray" id="tray">' + tray.map(function (o) { return '<button class="sort-word' + (selected === o.w ? ' sel' : '') + '" draggable="true" data-word="' + esc(o.w) + '">' + esc(o.w) + '</button>'; }).join('') + '</div>' +
        '<div class="sort-cols two">' + [s1, s2].map(function (s) {
          return '<div class="sort-col" data-col="' + esc(s.key) + '"><h4 style="background:' + stage.tint + '">' + esc(s.grapheme) + ' · ' + esc(s.soundLabel || s.phoneme) + '</h4>' +
            words.filter(function (o) { return placed[o.w] === s.key; }).map(function (o) { return '<div class="sort-word placed" data-placed="' + esc(o.w) + '">' + esc(o.w) + '</div>'; }).join('') + '</div>';
        }).join('') + '</div>' +
        '<div class="next-row" style="justify-content:center;margin-top:16px"><button class="btn btn--primary" data-check ' + (tray.length ? 'disabled' : '') + '>Check answers</button></div>' +
        '<div id="fb"></div></div></div>';
      on('[data-menu]', 'click', function () { openMenu(stage.id); });
      on('[data-word]', 'click', function () { var w = this.dataset.word; AUDIO.speak(w); selected = selected === w ? null : w; draw(); });
      on('[data-placed]', 'click', function () { delete placed[this.dataset.placed]; draw(); });
      on('[data-col]', 'click', function () { if (selected) { placed[selected] = this.dataset.col; selected = null; draw(); } });
      // drag support
      qsa('[data-word]').forEach(function (el) { el.addEventListener('dragstart', function (e) { e.dataTransfer.setData('text', el.dataset.word); }); });
      qsa('[data-col]').forEach(function (col) {
        col.addEventListener('dragover', function (e) { e.preventDefault(); col.classList.add('over'); });
        col.addEventListener('dragleave', function () { col.classList.remove('over'); });
        col.addEventListener('drop', function (e) { e.preventDefault(); col.classList.remove('over'); var w = e.dataTransfer.getData('text'); if (w) { placed[w] = col.dataset.col; draw(); } });
      });
      on('[data-check]', 'click', function () {
        var right = 0; words.forEach(function (o) { if (placed[o.w] === o.k) right++; });
        var perfect = right === words.length;
        qs('#fb').innerHTML = '<div class="feedback ' + (perfect ? 'good' : 'bad') + '"><strong>' + (perfect ? I.check + 'All sorted correctly!' : I.info + right + ' / ' + words.length + ' correct') + '</strong>' +
          (perfect ? 'เยี่ยม! แยกเสียงได้แม่นยำ' : 'คำที่วางผิดถูกส่งกลับ ลองฟังแล้วจัดใหม่') + '</div>' +
          '<div class="next-row"><button class="btn btn--soft" data-menu2>Other activity</button><button class="btn btn--primary" data-retry>Try again</button></div>';
        if (perfect) A.celebrate(); else words.forEach(function (o) { if (placed[o.w] !== o.k) delete placed[o.w]; });
        on('[data-menu2]', 'click', function () { openMenu(stage.id); });
        on('[data-retry]', 'click', draw);
      });
    }
    draw();
  }
  function pickSortPair(stage) {
    if (stage.id === 5) return [SG.soundByKey(5, 'oo-short'), SG.soundByKey(5, 'oo-long')];
    if (stage.id === 6) return [SG.soundByKey(6, 'th-quiet'), SG.soundByKey(6, 'th-voiced')];
    var two = shuffle(stage.sounds).slice(0, 2);
    return two;
  }

  /* -------------------------- Flashcard Challenge --------------------- */
  function runFlash(stage) {
    var deck = A.store.deck && A.store.deck.length ? A.store.deck.slice() : SG.allWords(stage);
    deck = shuffle(deck).slice(0, 10);
    var idx = 0, got = 0, again = [];
    function draw() {
      if (idx >= deck.length) {
        root().innerHTML = '<div class="view"><div class="panel result act-wrap"><div class="score-orb" style="background:' + stage.color + '"><b>' + got + '/' + deck.length + '</b></div>' +
          '<h2>Flashcard session done</h2><p class="muted">' + (again.length ? again.length + ' คำที่ควรฝึกซ้ำ' : 'ทั้งชั้นอ่านได้ครบทุกคำ') + '</p>' +
          (again.length ? '<div class="word-wall" style="justify-content:center;margin-top:12px">' + again.map(function (w) { return '<span class="word-chip">' + esc(w) + '</span>'; }).join('') + '</div>' : '') +
          '<div class="result-actions"><button class="btn btn--soft" data-again>New deck</button><button class="btn btn--primary" data-stage>Back to area</button></div></div></div>';
        if (got === deck.length) A.celebrate();
        on('[data-again]', 'click', function () { runFlash(stage); });
        on('[data-stage]', 'click', function () { backToStage(stage); });
        return;
      }
      var w = deck[idx];
      root().innerHTML = '<div class="view"><div class="crumb"><button class="back" data-menu>' + I.back + 'Activities</button></div>' +
        '<div class="panel flash act-wrap"><div class="act-top"><div><span class="prompt-label">' + esc(stage.title) + '</span><h2 style="margin-top:4px">Flashcard Challenge</h2></div><span class="count-pill">' + (idx + 1) + ' / ' + deck.length + '</span></div>' +
        '<div class="flashcard" style="background:' + stage.tint + '"><div class="fw">' + esc(w) + '</div></div>' +
        '<div class="read-controls"><button class="btn btn--soft" data-say>' + I.play + 'Say it</button></div>' +
        '<div class="read-controls" style="margin-top:8px"><button class="btn btn--ghost" data-miss>' + I.x + 'Practise again</button><button class="btn btn--primary" data-got>' + I.check + 'Got it</button></div>' +
        '</div></div>';
      on('[data-menu]', 'click', function () { openMenu(stage.id); });
      on('[data-say]', 'click', function () { AUDIO.speak(w); });
      on('[data-got]', 'click', function () { got++; A.store.mastered[w] = true; A.store.stars++; A.save(); idx++; draw(); });
      on('[data-miss]', 'click', function () { again.push(w); A.store.practiceAgain[w] = true; A.save(); idx++; draw(); });
      setTimeout(function () { AUDIO.speak(w); }, 200);
    }
    draw();
  }

  /* ---------------------------- STAGE CHALLENGE ----------------------- */
  function openChallenge(stageId) {
    var stage = SG.stageById(stageId);
    root().innerHTML = '<div class="view"><div class="crumb"><button class="back" data-stage>' + I.back + esc(stage.title) + '</button></div>' +
      '<div class="grid-2"><section class="stage-hero" style="background:' + stage.color + ';color:#fff">' +
        '<span class="kicker" style="background:rgba(255,255,255,.22);color:#fff">Stage challenge</span>' +
        '<h1 style="color:#fff">' + esc(stage.title) + ' assessment</h1>' +
        '<p style="color:rgba(255,255,255,.9)">แบบประเมิน 12 ข้อ ครอบคลุมการฟัง จำแนกรูปสะกด อ่านคำ เติมเสียง และแยกเสียง</p>' +
        '<div class="stage-facts"><span class="fact" style="background:rgba(255,255,255,.22);color:#fff">12 questions</span><span class="fact" style="background:rgba(255,255,255,.22);color:#fff">no timer</span><span class="fact" style="background:rgba(255,255,255,.22);color:#fff">skills report</span></div>' +
      '</section>' +
      '<aside class="panel"><h3>Choose mode</h3>' +
        '<div style="display:grid;gap:8px;margin-top:12px">' +
          '<button class="btn btn--primary btn--block" data-mode="practice">' + I.check + 'Practice mode<br><small style="font-weight:400">เฉลยทันทีทุกข้อ</small></button>' +
          '<button class="btn btn--soft btn--block" data-mode="assess">' + I.chart + 'Assessment mode<br><small style="font-weight:400">เฉลยตอนจบ เหมาะกับการเก็บคะแนน</small></button>' +
        '</div>' +
        '<p class="muted" style="margin-top:12px;font-size:13px">ไม่มีการจับเวลา เพื่อไม่กดดันผู้เรียนเริ่มต้น</p></aside></div></div>';
    on('[data-stage]', 'click', function () { backToStage(stage); });
    on('[data-mode]', 'click', function () { runChallenge(stage, this.dataset.mode); });
  }

  function buildChallenge(stage) {
    var qs_ = [], pool = SG.allWords(stage);
    function listen() { var a = rand(pool); return { skill: 'Listening', type: 'listen', audio: a, answer: a, options: A.opts3(a, pool) }; }
    function grapheme() { var s = rand(stage.sounds); var w = rand(s.words); return { skill: 'Grapheme ID', type: 'grapheme', word: w, answer: s.key, answerLabel: s.grapheme, options: A.graphemeOpts(s, stage) }; }
    function missing() {
      var s = rand(stage.sounds); var w = rand(s.words); var m = SG.match(s);
      var i = w.toLowerCase().indexOf(m.toLowerCase());
      var display = w.slice(0, i) + '_'.repeat(m.length) + w.slice(i + m.length);
      return { skill: 'Word building', type: 'missing', display: display, word: w, answer: s.key, answerLabel: s.grapheme, options: A.graphemeOpts(s, stage) };
    }
    function odd() {
      var s = rand(stage.sounds); var withS = shuffle(s.words).slice(0, 3);
      var others = pool.filter(function (w) { return s.words.indexOf(w) < 0; }); if (!others.length) return listen();
      var o = rand(others); return { skill: 'Sound sorting', type: 'odd', title: 'Which word has NO ' + s.grapheme + ' sound?', answer: o, word: o, options: shuffle(withS.concat([o])).map(A.wordOpt) };
    }
    function reading() {
      var s = rand(stage.sounds); var right = rand(s.words);
      var others = pool.filter(function (w) { return s.words.indexOf(w) < 0; });
      if (others.length < 2) return listen();
      return { skill: 'Word reading', type: 'find', title: 'Which word has the ' + s.grapheme + ' sound?', answer: right, options: shuffle([right].concat(shuffle(others).slice(0, 2))).map(A.wordOpt) };
    }
    var makers = [listen, grapheme, reading, missing, odd];
    for (var i = 0; i < 12; i++) qs_.push(makers[i % makers.length](stage));
    return shuffle(qs_);
  }

  function runChallenge(stage, mode) {
    var questions = buildChallenge(stage);
    var idx = 0, score = 0, mistakes = [], bySkill = {};
    var immediate = mode === 'practice';
    function draw() {
      if (idx >= questions.length) return result();
      var q = questions[idx];
      root().innerHTML = '<div class="view"><div class="panel act-wrap">' +
        '<div class="act-top"><div><span class="prompt-label">' + esc(stage.title) + ' · ' + (immediate ? 'Practice' : 'Assessment') + '</span><h2 style="margin-top:4px">Stage challenge</h2></div><span class="count-pill">' + (idx + 1) + ' / 12</span></div>' +
        '<div class="act-progress"><i style="width:' + (idx / 12 * 100) + '%"></i></div>' +
        A.renderQuestionPrompt(q) +
        '<div class="options' + (q.options.length === 2 ? ' two' : '') + '">' + q.options.map(function (o) { return '<button class="opt" data-ans="' + esc(o.value) + '">' + o.label + '</button>'; }).join('') + '</div>' +
        '<div id="fb"></div></div></div>';
      if (q.audio) { on('[data-audio]', 'click', function () { AUDIO.speak(q.audio); }); setTimeout(function () { AUDIO.speak(q.audio); }, 250); }
      var locked = false;
      on('[data-ans]', 'click', function () {
        if (locked) return; locked = true;
        var val = this.dataset.ans, correct = val === q.answer, clicked = this;
        if (correct) score++; else mistakes.push(q);
        bySkill[q.skill] = bySkill[q.skill] || { c: 0, t: 0 }; bySkill[q.skill].t++; if (correct) bySkill[q.skill].c++;
        if (immediate) {
          qsa('.opt').forEach(function (b) { b.disabled = true; if (b.dataset.ans === q.answer) b.classList.add('correct'); else if (b === clicked) b.classList.add('wrong'); });
          var lbl = q.answerLabel || q.answer;
          qs('#fb').innerHTML = '<div class="feedback ' + (correct ? 'good' : 'bad') + '"><strong>' + (correct ? I.check + 'Correct!' : I.info + 'Answer: ' + esc(lbl)) + '</strong>' + (correct ? '' : (q.word ? 'ในคำ “' + esc(q.word) + '”' : '')) + '</div><div class="next-row"><button class="btn btn--primary" data-next>' + (idx === 11 ? 'See results' : 'Next') + I.arrow + '</button></div>';
          if (!correct) AUDIO.speak(q.word || q.audio || '');
          on('[data-next]', 'click', function () { idx++; draw(); });
        } else {
          idx++; setTimeout(draw, 120);
        }
      });
    }
    function result() {
      var rec = A.stageRec(stage.id); if (score > (rec.challengeBest || 0)) rec.challengeBest = score; if (score >= 10) rec.done = true; A.save();
      var extra = '<div class="skills">' + Object.keys(bySkill).map(function (k) { var s = bySkill[k]; var p = Math.round(s.c / s.t * 100); return '<div class="skill-row"><span>' + esc(k) + '</span><span class="muted">' + s.c + '/' + s.t + '</span><div class="skill-bar"><i style="width:' + p + '%"></i></div></div>'; }).join('') + '</div>';
      var review = mistakes.length ? '<h3 style="margin-top:6px">Practise these again</h3><div class="review-list">' + uniqQ(mistakes).map(function (q) { var w = q.word || q.audio || q.answer; return '<div class="review-item"><b>' + esc(w) + '</b><button class="btn btn--soft btn--sm" data-say="' + esc(w) + '">' + I.play + 'Hear</button></div>'; }).join('') + '</div>' : '<p class="muted">ไม่มีข้อผิด เยี่ยมมาก!</p>';
      root().innerHTML = '<div class="view"><div class="panel result act-wrap">' +
        '<div class="score-orb" style="background:' + stage.color + '"><b>' + score + '/12</b></div>' +
        '<h2>' + (score >= 10 ? 'Stage passed!' : 'Good effort') + '</h2>' +
        '<p class="muted">' + (score >= 10 ? 'ผ่านเกณฑ์แล้ว พร้อมไปพื้นที่ถัดไป' : 'ทบทวน Word Wall และกิจกรรมฝึกก่อนลองใหม่') + '</p>' +
        '<div style="max-width:460px;margin:20px auto 0;text-align:left"><h3>Skills breakdown</h3>' + extra + review + '</div>' +
        '<div class="result-actions">' +
          (mistakes.length ? '<button class="btn btn--soft" data-retry-wrong>Retry incorrect</button>' : '') +
          '<button class="btn btn--soft" data-again>Retry all</button>' +
          '<button class="btn btn--primary" data-stage>Back to area</button>' +
          (score >= 10 && stage.id < 7 ? '<button class="btn btn--accent" data-next-area>Next area' + I.arrow + '</button>' : '') +
        '</div></div></div>';
      if (score >= 10) A.celebrate();
      on('[data-say]', 'click', function () { AUDIO.speak(this.dataset.say); });
      on('[data-again]', 'click', function () { runChallenge(stage, mode); });
      on('[data-retry-wrong]', 'click', function () { questions = shuffle(uniqQ(mistakes)); idx = 0; score = 0; mistakes = []; bySkill = {}; draw(); });
      on('[data-stage]', 'click', function () { backToStage(stage); });
      on('[data-next-area]', 'click', function () { A.go('stage', { stageId: stage.id + 1 }); });
    }
    draw();
  }
  function uniqQ(arr) { var seen = {}, out = []; arr.forEach(function (q) { var k = (q.word || q.audio || q.answer) + q.type; if (!seen[k]) { seen[k] = 1; out.push(q); } }); return out; }

  global.Activities = { openMenu: openMenu, openChallenge: openChallenge };
})(window);
