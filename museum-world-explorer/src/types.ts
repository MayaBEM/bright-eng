import type { UnitId } from './data/questions';

export type Screen = 'home' | 'quiz' | 'result';

export interface QuizResult {
  unit: UnitId;
  answers: (number | null)[];
}
