/* =========================================================================
   Sound Garden Studio — Teacher Toolkit
   Deck builder, random word picker, sound spinner, 5-word warm-up,
   exit-ticket generator, printable word & sound cards.
   Depends on window.SGApp.
   ========================================================================= */
(function (global) {
  'use strict';
  var A = global.SGApp, SG = global.SG, AUDIO = global.Audio;
  var esc = A.esc, shuffle = A.shuffle, rand = A.rand, I = A.I, on = A.on, qs = A.qs, qsa = A.qsa;

  var tkStage = 1;

  function render(root) {
    root.innerHTML = '<div class="view">' +
      '<div class="crumb"><button class="back" data-home>' + I.back + 'Home</button></div>' +
      '<div class="section-head"><div><span class="eyebrow-mini">Teacher toolkit</span><h2>Classroom tools</h2><p>เครื่องมือช่วยสอนพร้อมใช้ เลือกพื้นที่การเรียนแล้วเปิดเครื่องมือที่ต้องการ</p></div>' +
        '<select class="sel" id="tkStage" aria-label="Choose area">' + SG.stages.map(function (s) { return '<option value="' + s.id + '"' + (s.id == tkStage ? ' selected' : '') + '>' + esc(s.title) + '</option>'; }).join('') + '</select></div>' +
      '<section class="tiles" style="grid-template-columns:repeat(3,1fr)">' +
        tile('cards', '#FFF7E6', 'Flashcard Deck Builder', 'สร้างสำรับการ์ดของครูเอง แล้วนำไปสอนหรือพิมพ์', 'deck') +
        tile('dice', '#FCE6E4', 'Random Word Picker', 'สุ่มคำสำหรับถามทั้งชั้น กดฟังได้', 'picker') +
        tile('shuffle', '#E1EFFA', 'Sound Spinner', 'วงล้อเสียง หมุนเลือกเสียงที่จะฝึก', 'spinner') +
        tile('ear', '#E4F1EA', '5-Word Warm-up', 'สุ่ม 5 คำอุ่นเครื่องต้นคาบ', 'warmup') +
        tile('guide', '#EDE6F5', 'Exit Ticket', 'สร้างใบเช็กท้ายคาบสำหรับพิมพ์', 'exit') +
        tile('print', '#DDF0ED', 'Printable Cards', 'พิมพ์การ์ดคำและการ์ดเสียงขนาด A4', 'print') +
      '</section>' +
      '<div id="tkPanel"></div><div class="print-only" id="tkPrint"></div></div>';
    on('[data-home]', 'click', function () { A.go('home'); });
    qs('#tkStage').addEventListener('change', function () { tkStage = Number(this.value); var p = qs('#tkPanel'); if (p) p.innerHTML = ''; });
    on('[data-tool]', 'click', function () { openTool(this.dataset.tool); });
  }
  function tile(icon, bg, name, desc, tool) {
    return '<button class="tile" style="background:' + bg + '" data-tool="' + tool + '"><span class="tile-ic">' + I[icon] + '</span><h3>' + esc(name) + '</h3><p>' + esc(desc) + '</p></button>';
  }
  function stage() { return SG.stageById(tkStage); }
  function panel() { return qs('#tkPanel'); }
  function scrollPanel() { var p = panel(); if (p) p.scrollIntoView({ behavior: 'smooth', block: 'start' }); }

  function openTool(t) {
    if (t === 'deck') deckBuilder();
    else if (t === 'picker') picker();
    else if (t === 'spinner') spinner();
    else if (t === 'warmup') warmup();
    else if (t === 'exit') exitTicket();
    else if (t === 'print') printables();
  }

  /* ------------------------- Deck Builder ----------------------------- */
  function deckBuilder() {
    var s = stage(), words = SG.allWords(s);
    function draw() {
      panel().innerHTML = '<div class="panel" style="margin-top:16px"><h3>Flashcard Deck Builder — ' + esc(s.title) + '</h3>' +
        '<p class="muted">แตะคำเพื่อเพิ่มเข้าสำรับ (สำรับใช้ร่วมกับ Flashcard Challenge)</p>' +
        '<div class="deck-builder" style="margin-top:14px"><div><div class="pick-grid">' +
        words.map(function (w) { return '<button class="pick' + (A.store.deck.indexOf(w) >= 0 ? ' on' : '') + '" data-add="' + esc(w) + '">' + esc(w) + '</button>'; }).join('') +
        '</div></div>' +
        '<aside class="panel" style="background:#fff"><strong style="font-family:var(--display)">Your deck (' + A.store.deck.length + ')</strong>' +
        '<div class="deck-list" style="margin-top:10px">' + (A.store.deck.length ? A.store.deck.map(function (w) { return '<span class="deck-word">' + esc(w) + '<button data-del="' + esc(w) + '" aria-label="remove ' + esc(w) + '">✕</button></span>'; }).join('') : '<span class="muted">ยังไม่มีคำในสำรับ</span>') + '</div>' +
        '<div style="display:grid;gap:8px;margin-top:12px">' +
          '<button class="btn btn--primary btn--block" data-teach ' + (A.store.deck.length ? '' : 'disabled') + '>' + I.cards + 'Teach this deck</button>' +
          '<button class="btn btn--soft btn--block no-print" data-print ' + (A.store.deck.length ? '' : 'disabled') + '>' + I.print + 'Print deck</button>' +
          '<button class="btn btn--ghost btn--block" data-clear ' + (A.store.deck.length ? '' : 'disabled') + '>' + I.trash + 'Clear</button>' +
        '</div></aside></div></div>';
      on('[data-add]', 'click', function () { var w = this.dataset.add; var i = A.store.deck.indexOf(w); if (i >= 0) A.store.deck.splice(i, 1); else A.store.deck.push(w); A.save(); AUDIO.speak(w); draw(); });
      on('[data-del]', 'click', function () { var i = A.store.deck.indexOf(this.dataset.del); if (i >= 0) A.store.deck.splice(i, 1); A.save(); draw(); });
      on('[data-clear]', 'click', function () { A.store.deck = []; A.save(); draw(); A.toast('Deck cleared'); });
      on('[data-teach]', 'click', function () { global.Present.openDeck ? global.Present.openDeck(A.store.deck, s) : global.Activities.openChallenge; teachDeck(s); });
      on('[data-print]', 'click', function () { qs('#tkPrint').innerHTML = printCards('Flashcard Deck', A.store.deck); window.print(); });
    }
    draw(); scrollPanel();
  }
  function teachDeck(s) {
    // reuse presentation-style: open a simple fullscreen of the deck via Present with a synthetic stage of deck words
    global.Present.open(s.id); // presentation uses the stage; deck is available in Flashcard Challenge
    A.toast('เปิด Presentation Mode — หรือใช้ Flashcard Challenge เพื่อสอนสำรับนี้');
  }

  /* --------------------------- Random Picker -------------------------- */
  function picker() {
    var s = stage(), words = SG.allWords(s), current = null;
    function draw() {
      panel().innerHTML = '<div class="panel" style="margin-top:16px;text-align:center"><h3>Random Word Picker — ' + esc(s.title) + '</h3>' +
        '<div class="picker-word" style="color:var(--ink)">' + (current ? esc(current) : '—') + '</div>' +
        '<div class="read-controls"><button class="btn btn--soft" data-say ' + (current ? '' : 'disabled') + '>' + I.play + 'Say it</button>' +
        '<button class="btn btn--primary btn--lg" data-pick>' + I.dice + 'Pick a word</button></div></div>';
      on('[data-pick]', 'click', function () { current = rand(words); draw(); AUDIO.speak(current); });
      on('[data-say]', 'click', function () { if (current) AUDIO.speak(current); });
    }
    draw(); scrollPanel();
  }

  /* ---------------------------- Sound Spinner ------------------------- */
  function spinner() {
    var s = stage(), items = s.sounds, n = items.length;
    var cols = ['#F4C24E', '#EE6F63', '#7FB9E6', '#6BB08C', '#A98BC9', '#4FB0A5'];
    var segAng = 360 / n;
    var grad = items.map(function (it, k) { return cols[k % cols.length] + ' ' + (k * segAng) + 'deg ' + ((k + 1) * segAng) + 'deg'; }).join(', ');
    var labels = items.map(function (it, k) {
      var a = k * segAng + segAng / 2;
      return '<div class="seg-label" style="top:50%;left:50%;transform:translate(-50%,-50%) rotate(' + a + 'deg) translateY(-38%) rotate(' + (-a) + 'deg)">' + esc(it.grapheme) + '</div>';
    }).join('');
    var rot = 0;
    panel().innerHTML = '<div class="panel" style="margin-top:16px;text-align:center"><h3>Sound Spinner — ' + esc(s.title) + '</h3>' +
      '<div class="spinner-wrap"><div class="spinner-pin"></div>' +
      '<div class="spinner" id="wheel" style="background:conic-gradient(' + grad + ')">' + labels + '</div>' +
      '<div id="spinResult" class="muted" style="min-height:24px;font-family:var(--display);font-weight:700"></div>' +
      '<button class="btn btn--primary btn--lg" id="spin">' + I.shuffle + 'Spin</button></div></div>';
    var wheel = qs('#wheel');
    qs('#spin').addEventListener('click', function () {
      var k = Math.floor(Math.random() * n);
      var target = 360 * 4 - (k * segAng + segAng / 2);
      rot = target; wheel.style.transform = 'rotate(' + rot + 'deg)';
      var it = items[k];
      setTimeout(function () { qs('#spinResult').innerHTML = it.grapheme + ' · ' + it.phoneme + ' (as in ' + it.example + ')'; AUDIO.speak(it.example); }, 3500);
    });
    scrollPanel();
  }

  /* ---------------------------- 5-Word Warm-up ------------------------ */
  function warmup() {
    var s = stage();
    function gen() { return shuffle(SG.allWords(s)).slice(0, 5); }
    var words = gen();
    function draw() {
      panel().innerHTML = '<div class="panel" style="margin-top:16px"><h3>5-Word Warm-up — ' + esc(s.title) + '</h3><p class="muted">ให้เด็กอ่านทีละคำ กดฟังเพื่อตรวจ</p>' +
        '<div class="word-wall" style="margin-top:14px">' + words.map(function (w) { return '<button class="word-chip big" data-word="' + esc(w) + '">' + esc(w) + '</button>'; }).join('') + '</div>' +
        '<div class="read-controls" style="justify-content:flex-start;margin-top:16px"><button class="btn btn--soft" data-all>' + I.play + 'Say all</button><button class="btn btn--primary" data-new>' + I.dice + 'New 5 words</button><button class="btn btn--ghost no-print" data-print>' + I.print + 'Print</button></div></div>';
      on('[data-word]', 'click', function () { AUDIO.speak(this.dataset.word); });
      on('[data-all]', 'click', function () { AUDIO.speakSequence(words); });
      on('[data-new]', 'click', function () { words = gen(); draw(); });
      on('[data-print]', 'click', function () { qs('#tkPrint').innerHTML = printCards('Warm-up Words', words); window.print(); });
    }
    draw(); scrollPanel();
  }

  /* ---------------------------- Exit Ticket --------------------------- */
  function exitTicket() {
    var s = stage();
    function gen() {
      var readWords = shuffle(SG.allWords(s)).slice(0, 3);
      var snd = rand(s.sounds);
      var right = rand(snd.words);
      var distract = shuffle(SG.allWords(s).filter(function (w) { return snd.words.indexOf(w) < 0; })).slice(0, 2);
      var choose = shuffle([right].concat(distract));
      var mw = rand(snd.words); var m = SG.match(snd); var mi = mw.toLowerCase().indexOf(m.toLowerCase());
      var blank = mw.slice(0, mi) + '____' + mw.slice(mi + m.length);
      return { readWords: readWords, snd: snd, choose: choose, right: right, blank: blank, mw: mw };
    }
    var t = gen();
    function draw() {
      panel().innerHTML = '<div class="panel" style="margin-top:16px"><div style="display:flex;justify-content:space-between;flex-wrap:wrap;gap:10px"><h3>Exit Ticket — ' + esc(s.title) + '</h3>' +
        '<div class="no-print"><button class="btn btn--soft btn--sm" data-new>' + I.dice + 'Regenerate</button> <button class="btn btn--primary btn--sm" data-print>' + I.print + 'Print</button></div></div>' +
        '<div id="ticket" style="margin-top:14px;border:1px solid var(--line);border-radius:14px;padding:18px">' +
          '<p style="font-family:var(--display);font-weight:700">Name: ____________________   Date: __________</p>' +
          '<p style="margin-top:12px"><strong>1. Read these words to your teacher:</strong></p>' +
          '<div class="word-wall" style="margin-top:8px">' + t.readWords.map(function (w) { return '<span class="word-chip big">' + esc(w) + '</span>'; }).join('') + '</div>' +
          '<p style="margin-top:16px"><strong>2. Circle the word with the ' + esc(t.snd.grapheme) + ' (' + esc(t.snd.phoneme) + ') sound:</strong></p>' +
          '<div class="word-wall" style="margin-top:8px">' + t.choose.map(function (w) { return '<span class="word-chip big">' + esc(w) + '</span>'; }).join('') + '</div>' +
          '<p style="margin-top:16px"><strong>3. Write the missing sound:</strong> <span style="font-family:var(--reading);font-size:28px">' + esc(t.blank) + '</span></p>' +
        '</div></div>';
      on('[data-new]', 'click', function () { t = gen(); draw(); });
      on('[data-print]', 'click', function () { qs('#tkPrint').innerHTML = '<div class="print-sheet">' + qs('#ticket').innerHTML + '<p class="print-credit">Cr. Bright EngMath</p></div>'; window.print(); });
    }
    draw(); scrollPanel();
  }

  /* --------------------------- Printable Cards ------------------------ */
  function printables() {
    var s = stage();
    panel().innerHTML = '<div class="panel" style="margin-top:16px"><h3>Printable Cards — ' + esc(s.title) + '</h3><p class="muted">เลือกชุดที่ต้องการพิมพ์ (A4 หมึกประหยัด อ่านชัดแบบขาวดำ)</p>' +
      '<div class="read-controls" style="justify-content:flex-start;margin-top:14px">' +
        '<button class="btn btn--soft" data-print="words">' + I.print + 'Word cards</button>' +
        '<button class="btn btn--soft" data-print="sounds">' + I.print + 'Sound cards</button>' +
        '<button class="btn btn--soft" data-print="list">' + I.print + 'Stage word list</button>' +
      '</div>' +
      '<div class="lib-grid" style="margin-top:16px">' + SG.allWords(s).map(function (w) { return '<div class="lib-card"><div class="lw">' + esc(w) + '</div></div>'; }).join('') + '</div></div>';
    on('[data-print]', 'click', function () {
      var kind = this.dataset.print;
      if (kind === 'words') qs('#tkPrint').innerHTML = printCards(s.title + ' — Word Cards', SG.allWords(s));
      else if (kind === 'sounds') qs('#tkPrint').innerHTML = printCards(s.title + ' — Sound Cards', s.sounds.map(function (x) { return x.grapheme; }));
      else qs('#tkPrint').innerHTML = printList(s);
      window.print();
    });
    scrollPanel();
  }

  function printCards(title, items) {
    return '<div class="print-sheet"><h2 style="text-align:center">' + esc(title) + '</h2><div class="print-grid">' +
      items.map(function (w) { return '<div class="print-card"><div class="pw">' + esc(w) + '</div></div>'; }).join('') +
      '</div><p class="print-credit">Bright EngMath · Cr. Bright EngMath</p></div>';
  }
  function printList(s) {
    return '<div class="print-sheet"><h2 style="text-align:center">' + esc(s.title) + ' — Stage Word List</h2>' +
      s.sounds.map(function (snd) { return '<p style="margin-top:8px"><strong style="font-family:var(--reading);font-size:20px">' + esc(snd.grapheme) + '</strong> (' + esc(snd.phoneme) + '): ' + snd.words.join(', ') + '</p>'; }).join('') +
      '<p style="margin-top:12px"><strong>Tricky words:</strong> ' + s.tricky.join(', ') + '</p>' +
      '<p class="print-credit">Bright EngMath · Cr. Bright EngMath</p></div>';
  }

  global.Toolkit = { render: render };
})(window);
