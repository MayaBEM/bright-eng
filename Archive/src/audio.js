/* =========================================================================
   Sound Garden Studio — Audio engine
   -------------------------------------------------------------------------
   Wraps the browser SpeechSynthesis API honestly:
   - Cancels any current speech before playing a new item (no overlap).
   - Prefers a British English voice, falls back to any English voice.
   - Detects when NO English voice is available and reports it once.
   - Separates whole-word playback from an "isolated sound" cue, and is
     honest that browser TTS cannot perfectly produce isolated phonemes.
   - Supports normal and slow rates.
   No microphone scoring or fake pronunciation assessment is included.
   ========================================================================= */
(function (global) {
  'use strict';

  var supported = 'speechSynthesis' in global;
  var enabled = true;
  var voice = null;
  var voiceQuality = 'unknown'; // 'gb' | 'en' | 'none' | 'unknown'
  var listeners = [];

  function pickVoice() {
    if (!supported) { voiceQuality = 'none'; return; }
    var voices = global.speechSynthesis.getVoices() || [];
    if (!voices.length) return; // not loaded yet
    var gb = voices.filter(function (v) { return /en[-_]GB/i.test(v.lang); });
    var en = voices.filter(function (v) { return /^en/i.test(v.lang); });
    var preferGb = gb.find(function (v) { return /(Daniel|Kate|Serena|Sonia|Libby|Google UK)/i.test(v.name); });
    if (preferGb) { voice = preferGb; voiceQuality = 'gb'; }
    else if (gb.length) { voice = gb[0]; voiceQuality = 'gb'; }
    else if (en.length) { voice = en[0]; voiceQuality = 'en'; }
    else { voice = null; voiceQuality = 'none'; }
    listeners.forEach(function (fn) { try { fn(voiceQuality); } catch (e) {} });
  }

  if (supported) {
    pickVoice();
    if (typeof global.speechSynthesis.addEventListener === 'function') {
      global.speechSynthesis.addEventListener('voiceschanged', pickVoice);
    } else {
      global.speechSynthesis.onvoiceschanged = pickVoice;
    }
    // Some browsers populate voices slightly late.
    setTimeout(pickVoice, 400);
    setTimeout(pickVoice, 1200);
  } else {
    voiceQuality = 'none';
  }

  function stop() {
    if (supported) { try { global.speechSynthesis.cancel(); } catch (e) {} }
  }

  /* Speak arbitrary text (whole words, sentences). */
  function speak(text, opts) {
    opts = opts || {};
    if (!enabled) { emit('disabled'); return false; }
    if (!supported || voiceQuality === 'none') { emit('novoice'); return false; }
    stop(); // never overlap
    var u = new global.SpeechSynthesisUtterance(String(text));
    if (voice) u.voice = voice;
    u.lang = voice ? voice.lang : 'en-GB';
    u.rate = opts.slow ? 0.55 : (opts.rate || 0.85);
    u.pitch = opts.pitch || 1;
    if (opts.onend) u.onend = opts.onend;
    try { global.speechSynthesis.speak(u); return true; } catch (e) { return false; }
  }

  /* Speak a list of words with a small gap, one after another (no overlap). */
  function speakSequence(words, opts) {
    opts = opts || {};
    if (!enabled) { emit('disabled'); return; }
    if (!supported || voiceQuality === 'none') { emit('novoice'); return; }
    stop();
    var i = 0;
    function next() {
      if (i >= words.length) { if (opts.onend) opts.onend(); return; }
      var w = words[i++];
      speak(w, { slow: opts.slow, rate: opts.rate, onend: function () { setTimeout(next, opts.gap || 260); } });
    }
    next();
  }

  /* "Isolated sound" cue. Browser TTS cannot render a clean phoneme, so we
     speak the example word and let the caller show honest guidance text. */
  function speakSound(sound, opts) {
    return speak(sound.example, opts);
  }

  function emit(kind) {
    listeners.forEach(function (fn) { try { fn(voiceQuality, kind); } catch (e) {} });
  }

  global.Audio = {
    get supported() { return supported; },
    get enabled() { return enabled; },
    set enabled(v) { enabled = !!v; if (!enabled) stop(); },
    get quality() { return voiceQuality; },
    get voiceName() { return voice ? voice.name : null; },
    stop: stop,
    speak: speak,
    speakSequence: speakSequence,
    speakSound: speakSound,
    onStatus: function (fn) { listeners.push(fn); return fn; },
    refresh: pickVoice
  };
})(window);
