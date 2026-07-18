// Scoring helpers for the 15-question unit quizzes.

export function getResultMessage(correct: number, total: number): string {
  // Scale the 13/10/7 thresholds (written for a 15-question quiz) to any total,
  // so the same logic works even if a unit's question count ever changes.
  const ratio = total > 0 ? correct / total : 0;

  if (ratio >= 13 / 15) return 'Excellent! You are ready for the test.';
  if (ratio >= 10 / 15) return 'Great job! Review a few more words.';
  if (ratio >= 7 / 15) return "Good try! Let's practise again.";
  return "Let's review the lesson again.";
}

export function getPercentage(correct: number, total: number): number {
  return total > 0 ? Math.round((correct / total) * 100) : 0;
}
