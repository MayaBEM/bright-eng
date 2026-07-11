/* ==========================================================================
   SCORING ENGINE
   Rules (per product spec):
   - Each question is worth 10 points.
   - Using a hint deducts 2 points from that question's score.
   - Minimum score for a completed (correctly answered) question is 4 points.
   - Incorrect attempts do not reduce additional points (score floor is 0,
     never negative, and a wrong answer simply earns 0 for that question).
   - Accuracy (%) and Quest Points are tracked and displayed SEPARATELY —
     accuracy reflects first-attempt correctness; points reflect the score
     actually banked (which respects the hint deduction rule above).
   ========================================================================== */
window.MAQ = window.MAQ || {};

window.MAQ.scoring = {
  BASE_POINTS: 10,
  HINT_PENALTY: 2,
  MIN_POINTS_IF_CORRECT: 4,

  /**
   * @param {boolean} isCorrect
   * @param {boolean} hintUsed
   * @returns {number} points earned for this single question
   */
  pointsForAnswer: function (isCorrect, hintUsed) {
    if (!isCorrect) return 0;
    var pts = this.BASE_POINTS - (hintUsed ? this.HINT_PENALTY : 0);
    return Math.max(this.MIN_POINTS_IF_CORRECT, pts);
  },

  /**
   * Aggregate a set of per-question results into stage/chapter level stats.
   * @param {{isCorrect:boolean, hintUsed:boolean}[]} results
   */
  summarize: function (results) {
    var correctCount = 0;
    var pointsEarned = 0;
    results.forEach(function (r) {
      if (r.isCorrect) correctCount++;
      pointsEarned += window.MAQ.scoring.pointsForAnswer(r.isCorrect, r.hintUsed);
    });
    var total = results.length;
    var pointsPossible = total * this.BASE_POINTS;
    var accuracy = total ? Math.round((correctCount / total) * 100) : 0;
    return {
      correctCount: correctCount,
      totalQuestions: total,
      pointsEarned: pointsEarned,
      pointsPossible: pointsPossible,
      accuracy: accuracy
    };
  },

  /** Star rating (0-3) from accuracy percentage, used on stage/chapter cards. */
  starsFromAccuracy: function (accuracy) {
    if (accuracy >= 90) return 3;
    if (accuracy >= 70) return 2;
    if (accuracy >= 40) return 1;
    return 0;
  }
};
