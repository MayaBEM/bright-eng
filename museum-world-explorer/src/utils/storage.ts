// localStorage helpers — the app only ever remembers the student's latest
// score for each unit. No accounts, no history, no backend.

import type { UnitId } from '../data/questions';

export interface SavedScore {
  correct: number;
  total: number;
  percentage: number;
  savedAt: string; // ISO date string
}

const KEY_PREFIX = 'brightengmath-museum-world-explorer:unit';

function keyForUnit(unit: UnitId): string {
  return `${KEY_PREFIX}${unit}:latest-score`;
}

export function saveLatestScore(unit: UnitId, correct: number, total: number): void {
  try {
    const score: SavedScore = {
      correct,
      total,
      percentage: total > 0 ? Math.round((correct / total) * 100) : 0,
      savedAt: new Date().toISOString(),
    };
    window.localStorage.setItem(keyForUnit(unit), JSON.stringify(score));
  } catch {
    // localStorage may be unavailable (e.g. private browsing) — fail silently,
    // the quiz still works, it just won't remember the score.
  }
}

export function getLatestScore(unit: UnitId): SavedScore | null {
  try {
    const raw = window.localStorage.getItem(keyForUnit(unit));
    if (!raw) return null;
    return JSON.parse(raw) as SavedScore;
  } catch {
    return null;
  }
}

export function resetAllScores(): void {
  try {
    window.localStorage.removeItem(keyForUnit(1));
    window.localStorage.removeItem(keyForUnit(2));
  } catch {
    // ignore
  }
}
