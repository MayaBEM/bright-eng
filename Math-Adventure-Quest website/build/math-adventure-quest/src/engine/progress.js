/* ==========================================================================
   PROGRESS ENGINE — localStorage-backed learner progress.
   Survives page refresh. One learner profile per browser at a time.
   ========================================================================== */
window.MAQ = window.MAQ || {};

(function () {
  var STORAGE_KEY = "maq_progress_v1";

  var BADGES = [
    { id: "forest-crystal", name: "Forest Crystal Keeper", icon: "🟢", description: "Collected the Forest Crystal in the Factor Forest." },
    { id: "kingdom-crystal", name: "Kingdom Crystal Keeper", icon: "🔵", description: "Collected the Kingdom Crystal in the HCF & LCM Kingdom." },
    { id: "island-crystal", name: "Island Crystal Keeper", icon: "🟣", description: "Collected the Island Crystal on Fraction Island." },
    { id: "quest-complete", name: "Math Adventure Champion", icon: "👑", description: "Collected all three crystals and completed the whole quest." },
    { id: "sharp-shooter", name: "Sharp Shooter", icon: "🎯", description: "Finished a stage with 100% accuracy and no hints used." },
    { id: "no-hints-chapter", name: "Independent Explorer", icon: "🧭", description: "Completed a full chapter without using a single hint." }
  ];
  window.MAQ.BADGES = BADGES;

  function defaultProgress() {
    return {
      learnerName: "",
      avatar: "🦊",
      mode: "sequential",
      stageResults: {},
      crystals: {},
      hintsUsedByQuestion: {},
      answeredCorrectlyFirstTry: {},
      answeredQuestionIds: {},
      badgeIds: [],
      soundOn: true,
      reducedMotion: false,
      createdAt: Date.now()
    };
  }

  function load() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return defaultProgress();
      var parsed = JSON.parse(raw);
      return Object.assign(defaultProgress(), parsed);
    } catch (e) {
      return defaultProgress();
    }
  }

  var state = load();

  function persist() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (e) { /* storage unavailable */ }
  }

  function stageKey(chapterId, stageId) { return "c" + chapterId + "-s" + stageId; }

  window.MAQ.progress = {
    get: function () { return state; },

    hasLearner: function () { return !!state.learnerName; },

    setLearner: function (name, avatar) {
      state.learnerName = name;
      state.avatar = avatar || state.avatar;
      persist();
    },

    setMode: function (mode) { state.mode = mode; persist(); },

    toggleSound: function () { state.soundOn = !state.soundOn; persist(); return state.soundOn; },
    setSound: function (on) { state.soundOn = on; persist(); },

    toggleReducedMotion: function () {
      state.reducedMotion = !state.reducedMotion;
      persist();
      document.body.classList.toggle("reduced-motion", state.reducedMotion);
      return state.reducedMotion;
    },
    setReducedMotion: function (on) {
      state.reducedMotion = on;
      persist();
      document.body.classList.toggle("reduced-motion", on);
    },

    recordHintUsed: function (questionId) {
      state.hintsUsedByQuestion[questionId] = (state.hintsUsedByQuestion[questionId] || 0) + 1;
      persist();
    },
    hintWasUsed: function (questionId) { return !!state.hintsUsedByQuestion[questionId]; },

    recordFirstAttempt: function (questionId, isCorrect) {
      if (state.answeredQuestionIds[questionId]) return; // only the first attempt counts
      state.answeredQuestionIds[questionId] = true;
      state.answeredCorrectlyFirstTry[questionId] = isCorrect;
      persist();
    },

    /**
     * Save the outcome of a completed stage (5 questions).
     * @param {number} chapterId
     * @param {number} stageId
     * @param {{isCorrect:boolean, hintUsed:boolean, questionId:string}[]} results
     */
    completeStage: function (chapterId, stageId, results) {
      var summary = window.MAQ.scoring.summarize(results);
      var incorrectIds = results.filter(function (r) { return !r.isCorrect; }).map(function (r) { return r.questionId; });
      var hintsUsed = results.filter(function (r) { return r.hintUsed; }).length;
      var key = stageKey(chapterId, stageId);
      state.stageResults[key] = {
        chapterId: chapterId,
        stageId: stageId,
        correctCount: summary.correctCount,
        totalQuestions: summary.totalQuestions,
        pointsEarned: summary.pointsEarned,
        pointsPossible: summary.pointsPossible,
        accuracy: summary.accuracy,
        incorrectQuestionIds: incorrectIds,
        hintsUsed: hintsUsed,
        completedAt: Date.now()
      };

      if (summary.accuracy === 100 && hintsUsed === 0 && !state.badgeIds.includes("sharp-shooter")) {
        state.badgeIds.push("sharp-shooter");
      }

      persist();

      // Auto-collect crystal when all 5 stages of the chapter are complete
      var allDone = true;
      for (var s = 1; s <= 5; s++) {
        if (!state.stageResults[stageKey(chapterId, s)]) { allDone = false; break; }
      }
      if (allDone) this.collectCrystal(chapterId);

      return state.stageResults[key];
    },

    getStageResult: function (chapterId, stageId) {
      return state.stageResults[stageKey(chapterId, stageId)] || null;
    },

    isStageComplete: function (chapterId, stageId) {
      return !!state.stageResults[stageKey(chapterId, stageId)];
    },

    collectCrystal: function (chapterId) {
      var key = "c" + chapterId;
      if (!state.crystals[key]) {
        state.crystals[key] = true;
        var badgeMap = { 1: "forest-crystal", 2: "kingdom-crystal", 3: "island-crystal" };
        if (badgeMap[chapterId] && !state.badgeIds.includes(badgeMap[chapterId])) {
          state.badgeIds.push(badgeMap[chapterId]);
        }
        // no-hints-chapter badge
        var chapterHints = 0;
        for (var s = 1; s <= 5; s++) {
          var res = state.stageResults[stageKey(chapterId, s)];
          if (res) chapterHints += res.hintsUsed;
        }
        if (chapterHints === 0 && !state.badgeIds.includes("no-hints-chapter")) {
          state.badgeIds.push("no-hints-chapter");
        }
        if (state.crystals["c1"] && state.crystals["c2"] && state.crystals["c3"] && !state.badgeIds.includes("quest-complete")) {
          state.badgeIds.push("quest-complete");
        }
        persist();
      }
    },

    hasCrystal: function (chapterId) { return !!state.crystals["c" + chapterId]; },
    allCrystalsCollected: function () { return this.hasCrystal(1) && this.hasCrystal(2) && this.hasCrystal(3); },

    isChapterUnlocked: function (chapterId) {
      if (state.mode === "free") return true;
      if (chapterId === 1) return true;
      return this.hasCrystal(chapterId - 1);
    },

    getChapterProgressPercent: function (chapterId) {
      var done = 0;
      for (var s = 1; s <= 5; s++) if (this.isStageComplete(chapterId, s)) done++;
      return Math.round((done / 5) * 100);
    },

    getChapterAccuracy: function (chapterId) {
      var totalCorrect = 0, totalQ = 0, pts = 0, maxPts = 0;
      for (var s = 1; s <= 5; s++) {
        var res = state.stageResults[stageKey(chapterId, s)];
        if (res) {
          totalCorrect += res.correctCount;
          totalQ += res.totalQuestions;
          pts += res.pointsEarned;
          maxPts += res.pointsPossible;
        }
      }
      return {
        accuracy: totalQ ? Math.round((totalCorrect / totalQ) * 100) : 0,
        correct: totalCorrect, total: totalQ, points: pts, maxPoints: maxPts
      };
    },

    getOverallStats: function () {
      var totalCorrect = 0, totalQ = 0, pts = 0, maxPts = 0, hints = 0;
      var incorrectIds = [];
      [1, 2, 3].forEach(function (ch) {
        for (var s = 1; s <= 5; s++) {
          var res = state.stageResults[stageKey(ch, s)];
          if (res) {
            totalCorrect += res.correctCount;
            totalQ += res.totalQuestions;
            pts += res.pointsEarned;
            maxPts += res.pointsPossible;
            hints += res.hintsUsed;
            incorrectIds = incorrectIds.concat(res.incorrectQuestionIds);
          }
        }
      });
      return {
        accuracy: totalQ ? Math.round((totalCorrect / totalQ) * 100) : 0,
        correct: totalCorrect, total: totalQ,
        points: pts, maxPoints: maxPts,
        hintsUsed: hints,
        incorrectQuestionIds: incorrectIds,
        crystalsCollected: [1, 2, 3].filter(function (c) { return state.crystals["c" + c]; }).length
      };
    },

    getBadges: function () {
      return BADGES.map(function (b) { return Object.assign({}, b, { unlocked: state.badgeIds.indexOf(b.id) !== -1 }); });
    },

    reset: function () {
      state = defaultProgress();
      persist();
    }
  };

  // Apply reduced-motion class on load if previously set
  if (state.reducedMotion) {
    document.addEventListener("DOMContentLoaded", function () {
      document.body.classList.add("reduced-motion");
    });
  }
  // Also respect OS-level setting on first run (before any explicit choice)
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches && !localStorage.getItem(STORAGE_KEY)) {
    state.reducedMotion = true;
  }
})();
