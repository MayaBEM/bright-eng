/* ==========================================================================
   AUDIO ENGINE
   All sound effects are synthesized with the Web Audio API — no external
   audio files are needed, so the product works fully offline. Respects
   the sound-on/off toggle stored in learner progress.
   ========================================================================== */
window.MAQ = window.MAQ || {};

(function () {
  let ctx = null;
  function getCtx() {
    if (!ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return null;
      ctx = new AC();
    }
    return ctx;
  }

  function tone(freq, duration, type, gainStart, delay) {
    if (!window.MAQ.progress || !window.MAQ.progress.get().soundOn) return;
    const audioCtx = getCtx();
    if (!audioCtx) return;
    try {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = type || "sine";
      osc.frequency.value = freq;
      const now = audioCtx.currentTime + (delay || 0);
      gain.gain.setValueAtTime(gainStart || 0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + duration);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(now);
      osc.stop(now + duration);
    } catch (e) { /* silently ignore audio errors */ }
  }

  window.MAQ.audio = {
    correct: function () {
      tone(523.25, 0.14, "sine", 0.16, 0);
      tone(659.25, 0.18, "sine", 0.16, 0.09);
      tone(783.99, 0.22, "sine", 0.14, 0.18);
    },
    incorrect: function () {
      tone(220, 0.22, "sine", 0.12, 0);
      tone(180, 0.28, "sine", 0.1, 0.08);
    },
    click: function () { tone(880, 0.06, "square", 0.05, 0); },
    unlock: function () {
      tone(392, 0.16, "triangle", 0.15, 0);
      tone(494, 0.16, "triangle", 0.15, 0.12);
      tone(587, 0.16, "triangle", 0.15, 0.24);
      tone(784, 0.28, "triangle", 0.16, 0.36);
    },
    crystal: function () {
      tone(660, 0.3, "sine", 0.14, 0);
      tone(880, 0.35, "sine", 0.12, 0.15);
    }
  };
})();
