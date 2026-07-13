/* =====================================================================
   EMC.storage — versioned localStorage wrapper.
   Progress lives only in this browser/device. No backend, no account.
   ===================================================================== */
(function () {
  "use strict";
  window.EMC = window.EMC || {};

  const KEY = "emc-english-memory-check";
  const VERSION = 1;
  const FULL_KEY = KEY + "-v" + VERSION;

  const DEFAULT_SETTINGS = {
    instantFeedback: true,     // show feedback right after each answer
    timerEnabled: false,       // Teacher Mode timer
    timerMinutes: { easy: 15, medium: 20, challenging: 25 },
    replayLimit: 3,            // 0 = unlimited
    showExplanationsDuringTest: true,
    randomizeQuestions: false,
    randomizeChoices: false,
    reducedMotion: false,
    textSize: "base",          // base | lg | xl
    teacherUnlocked: false
  };

  function freshState() {
    return {
      version: VERSION,
      settings: Object.assign({}, DEFAULT_SETTINGS),
      progress: {
        easy: { attempts: [] },
        medium: { attempts: [] },
        challenging: { attempts: [] }
      }
    };
  }

  let state = null;

  function load() {
    try {
      const raw = localStorage.getItem(FULL_KEY);
      if (raw) state = JSON.parse(raw);
    } catch (e) { console.warn("EMC storage read failed:", e); }
    if (!state || typeof state !== "object") state = freshState();
    state.settings = Object.assign({}, DEFAULT_SETTINGS, state.settings || {});
    state.settings.timerMinutes = Object.assign({}, DEFAULT_SETTINGS.timerMinutes, state.settings.timerMinutes || {});
    if (!state.progress) state.progress = freshState().progress;
    ["easy", "medium", "challenging"].forEach(lv => {
      if (!state.progress[lv]) state.progress[lv] = { attempts: [] };
      if (!Array.isArray(state.progress[lv].attempts)) state.progress[lv].attempts = [];
    });
    return state;
  }

  function save() {
    try { localStorage.setItem(FULL_KEY, JSON.stringify(state)); }
    catch (e) {
      console.warn("EMC storage write failed:", e);
      EMC.util && EMC.util.toast("Could not save progress on this device.");
    }
  }

  EMC.storage = {
    KEY: FULL_KEY,
    DEFAULT_SETTINGS,
    get() { return state || load(); },
    load,
    save,
    update(fn) { const s = this.get(); fn(s); save(); return s; },
    settings() { return this.get().settings; },
    setSetting(k, v) { this.update(s => { s.settings[k] = v; }); },

    /** Record a completed test attempt. */
    addAttempt(level, attempt) {
      this.update(s => { s.progress[level].attempts.push(attempt); });
    },
    attempts(level) { return this.get().progress[level].attempts; },
    bestAttempt(level) {
      const a = this.attempts(level);
      if (!a.length) return null;
      return a.reduce((best, cur) => (cur.percent > best.percent ? cur : best), a[0]);
    },
    latestAttempt(level) {
      const a = this.attempts(level);
      return a.length ? a[a.length - 1] : null;
    },
    lastAttemptGlobal() {
      const levels = ["easy", "medium", "challenging"];
      let latest = null;
      levels.forEach(lv => {
        const a = this.latestAttempt(lv);
        if (a && (!latest || a.date > latest.date)) latest = Object.assign({ level: lv }, a);
      });
      return latest;
    },
    resetAll() { state = freshState(); save(); },
    resetLevel(level) { this.update(s => { s.progress[level].attempts = []; }); }
  };

  load();
})();
