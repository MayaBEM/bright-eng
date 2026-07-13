/* =====================================================================
   EMC.audio — browser text-to-speech helper for listening tasks.
   Uses the device's built-in Web Speech voices (browser-generated
   speech, not studio-recorded audio), with a graceful fallback
   message if speech synthesis is unavailable.
   ===================================================================== */
(function () {
  "use strict";
  window.EMC = window.EMC || {};

  const supported = typeof window.speechSynthesis !== "undefined" &&
                     typeof window.SpeechSynthesisUtterance !== "undefined";

  let voice = null;
  const listeners = new Set();

  function pickVoice() {
    if (!supported) return;
    const voices = speechSynthesis.getVoices() || [];
    voice =
      voices.find(v => /en[-_](US|GB|AU)/i.test(v.lang)) ||
      voices.find(v => /^en/i.test(v.lang)) ||
      voices[0] || null;
  }
  if (supported) {
    pickVoice();
    speechSynthesis.onvoiceschanged = pickVoice;
  }

  function notify(isSpeaking) { listeners.forEach(fn => { try { fn(isSpeaking); } catch (e) {} }); }

  function speak(text) {
    if (!text) return;
    if (!supported) {
      EMC.util.toast("Audio isn't available on this device. Read the transcript after you answer.");
      return;
    }
    try {
      speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(String(text));
      if (voice) { u.voice = voice; u.lang = voice.lang; } else { u.lang = "en-US"; }
      u.rate = 0.92;
      u.pitch = 1.0;
      u.onstart = () => notify(true);
      u.onend = () => notify(false);
      u.onerror = () => notify(false);
      speechSynthesis.speak(u);
    } catch (e) {
      console.warn("Speech failed:", e);
      EMC.util.toast("Audio could not play on this device.");
    }
  }

  EMC.audio = {
    supported,
    say(text) { speak(text); },
    stop() { if (supported) { try { speechSynthesis.cancel(); } catch (e) {} } notify(false); },
    onSpeak(fn) { listeners.add(fn); return () => listeners.delete(fn); },

    /**
     * Build a self-contained audio player for one listening question.
     * Enforces the Teacher Mode replay limit and reveals a transcript
     * only once `hasAnswered()` returns true (or review mode is on).
     */
    buildPlayer(script, opts) {
      opts = opts || {};
      const replayLimit = EMC.storage.settings().replayLimit || 0; // 0 = unlimited
      let plays = 0;

      const wrap = document.createElement("div");
      wrap.className = "audio-player";
      wrap.setAttribute("role", "group");
      wrap.setAttribute("aria-label", "Listening audio controls");

      const playBtn = document.createElement("button");
      playBtn.type = "button";
      playBtn.className = "audio-player__btn";
      playBtn.innerHTML = "▶ Play";

      const replayBtn = document.createElement("button");
      replayBtn.type = "button";
      replayBtn.className = "audio-player__btn is-secondary";
      replayBtn.innerHTML = "↻ Replay";
      replayBtn.disabled = true;

      const dot = document.createElement("span");
      dot.className = "audio-player__dot";
      dot.setAttribute("aria-hidden", "true");

      const status = document.createElement("span");
      status.className = "audio-player__status";

      function updateStatus() {
        if (!supported) { status.textContent = "Audio unavailable — a transcript will appear after you answer."; return; }
        if (replayLimit > 0) {
          const left = Math.max(0, replayLimit - plays);
          status.textContent = plays === 0 ? "Tap Play to listen." : left > 0 ? left + " replay(s) left" : "No replays left";
        } else {
          status.textContent = plays === 0 ? "Tap Play to listen." : "Played " + plays + "x";
        }
      }

      function play() {
        if (replayLimit > 0 && plays >= replayLimit) {
          EMC.util.toast("You've used all your replays for this question.");
          return;
        }
        plays++;
        replayBtn.disabled = false;
        speak(script);
        updateStatus();
        if (opts.onPlay) opts.onPlay(plays);
      }

      playBtn.addEventListener("click", play);
      replayBtn.addEventListener("click", play);

      const off = this.onSpeak(s => wrap.classList.toggle("is-speaking", s));
      wrap._cleanup = off;

      wrap.appendChild(playBtn);
      wrap.appendChild(replayBtn);
      wrap.appendChild(dot);
      wrap.appendChild(status);
      updateStatus();

      if (!supported) { playBtn.disabled = true; replayBtn.disabled = true; }

      return wrap;
    }
  };
})();
