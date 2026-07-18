import type { UnitId } from '../data/questions';
import { UNIT_TITLES } from '../data/questions';
import { getLatestScore } from '../utils/storage';
import Button from '../components/Button';
import IconBadge from '../components/IconBadge';
import './HomeScreen.css';

interface HomeScreenProps {
  onStartUnit: (unit: UnitId) => void;
  onResetScores: () => void;
}

const UNIT_META: Record<UnitId, { emoji: string; tone: 'sky' | 'turquoise'; blurb: string }> = {
  1: {
    emoji: '🏛️',
    tone: 'sky',
    blurb: 'Knights, museum objects, and the mystery of the missing rhyme.',
  },
  2: {
    emoji: '🌄',
    tone: 'turquoise',
    blurb: 'Mountains, rivers, villages, and a treasure map at the restaurant.',
  },
};

export default function HomeScreen({ onStartUnit, onResetScores }: HomeScreenProps) {
  return (
    <div className="home-screen">
      <header className="home-header">
        <p className="home-eyebrow">Bright EngMath</p>
        <h1 className="home-title">English Revision Quiz</h1>
        <p className="home-subtitle">Review two units before your test.</p>
      </header>

      <div className="unit-card-grid">
        {([1, 2] as UnitId[]).map((unit) => {
          const meta = UNIT_META[unit];
          const saved = getLatestScore(unit);
          return (
            <div className="unit-card" key={unit}>
              <IconBadge emoji={meta.emoji} tone={meta.tone} size="lg" label={UNIT_TITLES[unit]} />
              <h2 className="unit-card-title">
                Unit {unit}: {UNIT_TITLES[unit]}
              </h2>
              <p className="unit-card-blurb">{meta.blurb}</p>
              {saved && (
                <p className="unit-card-score">
                  Latest score: <strong>{saved.correct}/{saved.total}</strong> ({saved.percentage}%)
                </p>
              )}
              <Button variant={unit === 1 ? 'primary' : 'secondary'} size="lg" onClick={() => onStartUnit(unit)}>
                Start Unit {unit}: {UNIT_TITLES[unit]}
              </Button>
            </div>
          );
        })}
      </div>

      <div className="home-footer">
        <Button variant="ghost" size="md" onClick={onResetScores}>
          Reset Score
        </Button>
      </div>
    </div>
  );
}
