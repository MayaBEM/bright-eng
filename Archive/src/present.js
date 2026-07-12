/* =========================================================================
   Sound Garden Studio — Teacher Presentation / Projector Mode
   Distraction-free full-screen deck for classroom or online teaching.
   Depends on window.SGApp.
   ========================================================================= */
(function (global) {
  'use strict';
  var A = global.SGApp, SG = global.SG, AUDIO = global.Audio;
  var esc = A.esc, shuffle = A.shuffle, I = A.I, on = A.on, qs = A.qs;

  var host = null, keyHandler = null, timerInt = null;

  function buildDeck(stage) {
    var deck = [];
    stage.sounds.forEach(function (s) {
      deck.push({ type: 'grapheme', text: s.grapheme, sound: s, say: s.example, label: s.phoneme + (s.soundLabel ? ' · ' + s.soundLabel : '') });
      s.words.forEach(function (w) { deck.push({ type: 'word', text: w, sound: s, say: w }); });
    });
    return deck;
  }

  function open(stageId) {
    var stage = SG.stageById(stageId);
    var deck = buildDeck(stage);
    var i = 0, showSeg = false, showWord = true, spotlight = false, notes = false;
    var seconds = 0, timerOn = false, turns = 0;

    host = document.createElement('div');
    host.className = 'stage-present';
    host.setAttribute('role', 'dialog');
    host.setAttribute('aria-label', 'Presentation mode');
    document.body.appendChild(host);
    document.body.style.overflow = 'hidden';

    function fmt(s) { var m = Math.floor(s / 60), r = s % 60; return m + ':' + (r < 10 ? '0' : '') + r; }
    function card() {
      var c = deck[i];
      var content;
      if (c.type === 'grapheme') {
        content = '<div class="present-word" style="color:' + stage.color + '">' + esc(c.text) + '</div>' +
          (notes ? '' : '') +
          '<div class="present-seg" style="opacity:.65">' + esc(c.label) + '</div>';
      } else {
        var whole = showWord ? A.highlight(c.text, c.sound) : '<span style="opacity:.25">' + esc(c.text.replace(/./g, '•')) + '</span>';
        var seg = showSeg ? '<div class="present-seg">' + SG.segment(c.text).join('&nbsp;·&nbsp;') + '</div>' : '';
        content = '<div class="present-word">' + whole + '</div>' + seg;
      }
      return '<div style="' + (spotlight ? 'filter:none' : '') + '">' + content +
        (notes && c.sound ? '<div class="present-seg" style="font-size:22px;opacity:.7;margin-top:20px;max-width:70ch">' + esc(c.sound.note) + '</div>' : '') + '</div>';
    }
    function draw() {
      var c = deck[i];
      host.innerHTML =
        '<div class="present-bar">' +
          '<span class="p-title">' + esc(stage.title) + '</span>' +
          '<span class="present-meta" style="margin-left:12px">' + (i + 1) + ' / ' + deck.length + '</span>' +
          '<span class="spacer"></span>' +
          '<span class="present-meta">' + I.star + ' turns: <b id="turns">' + turns + '</b></span>' +
          '<button data-turn title="Student turn (+)">' + I.plus + 'Turn</button>' +
          '<button data-timer>' + (timerOn ? I.check : I.slow) + '<span id="clock">' + fmt(seconds) + '</span></button>' +
          '<button data-notes aria-pressed="' + notes + '">' + I.guide + (notes ? 'Hide notes' : 'Notes') + '</button>' +
          '<button data-shuffle>' + I.shuffle + 'Shuffle</button>' +
          '<button data-exit>' + I.x + 'Exit</button>' +
        '</div>' +
        '<div class="present-stage">' + card() + '</div>' +
        '<div class="present-nav">' +
          '<button class="nav-btn" data-prev aria-label="Previous">' + I.left + '</button>' +
          '<button class="nav-btn" data-say aria-label="Say it" style="background:' + stage.color + '">' + I.volume + '</button>' +
          (deck[i].type === 'word' ? '<button class="nav-btn" data-seg aria-label="Toggle segmented">' + I.blocks + '</button><button class="nav-btn" data-word aria-label="Reveal word">' + I.eye + '</button>' : '') +
          '<button class="nav-btn" data-next aria-label="Next">' + I.right + '</button>' +
        '</div>';
      on('[data-prev]', 'click', prev);
      on('[data-next]', 'click', next);
      on('[data-say]', 'click', say);
      on('[data-seg]', 'click', function () { showSeg = !showSeg; draw(); });
      on('[data-word]', 'click', function () { showWord = !showWord; draw(); });
      on('[data-shuffle]', 'click', function () { deck = shuffle(deck); i = 0; showSeg = false; showWord = true; draw(); });
      on('[data-notes]', 'click', function () { notes = !notes; draw(); });
      on('[data-exit]', 'click', close);
      on('[data-turn]', 'click', function () { turns++; qs('#turns').textContent = turns; });
      on('[data-timer]', 'click', toggleTimer);
    }
    function say() { AUDIO.speak(deck[i].say); }
    function next() { i = (i + 1) % deck.length; showSeg = false; showWord = true; draw(); say(); }
    function prev() { i = (i - 1 + deck.length) % deck.length; showSeg = false; showWord = true; draw(); say(); }
    function toggleTimer() {
      timerOn = !timerOn;
      if (timerOn) { timerInt = setInterval(function () { seconds++; var cl = qs('#clock'); if (cl) cl.textContent = fmt(seconds); }, 1000); }
      else { clearInterval(timerInt); }
      draw();
    }
    keyHandler = function (e) {
      if (e.key === 'ArrowRight') { e.preventDefault(); next(); }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); prev(); }
      else if (e.key === ' ') { e.preventDefault(); say(); }
      else if (e.key === 'ArrowUp') { showWord = !showWord; draw(); }
      else if (e.key === 'ArrowDown') { showSeg = !showSeg; draw(); }
      else if (e.key.toLowerCase() === 's') { deck = shuffle(deck); i = 0; draw(); }
      else if (e.key === '+' || e.key === '=') { turns++; var t = qs('#turns'); if (t) t.textContent = turns; }
      else if (e.key === 'Escape') { close(); }
    };
    document.addEventListener('keydown', keyHandler);
    // try to enter browser fullscreen for a true projector feel
    if (host.requestFullscreen) { host.requestFullscreen().catch(function () {}); }
    draw();
    setTimeout(say, 300);
  }

  function close() {
    if (keyHandler) document.removeEventListener('keydown', keyHandler);
    if (timerInt) clearInterval(timerInt);
    AUDIO.stop();
    if (document.fullscreenElement) { document.exitFullscreen && document.exitFullscreen().catch(function () {}); }
    if (host) host.remove();
    document.body.style.overflow = '';
    host = null;
  }

  global.Present = { open: open, close: close };
})(window);
