import { useState } from 'react';
import type { UnitId, Question } from '../data/questions';
import { UNIT_TITLES, CATEGORY_LABELS } from '../data/questions';
import ProgressBar from '../components/ProgressBar';
import Button from '../components/Button';
import IconBadge from '../components/IconBadge';
import './QuizScreen.css';

interface QuizScreenProps {
  unit: UnitId;
  questions: Question[];
  onFinish: (answers: (number | null)[]) => void;
  onBackHome: () => void;
}

const CATEGORY_ICON: Record<Question['category'], string> = {
  vocabulary: '📚',
  story: '📖',
  expression: '💬',
  phonics: '🔤',
};

const CHOICE_LETTERS = ['A', 'B', 'C'] as const;

export default function QuizScreen({ unit, questions, onFinish, onBackHome }: QuizScreenProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(() => questions.map(() => null));

  const question = questions[currentIndex];
  const isLast = currentIndex === questions.length - 1;
  const selected = answers[currentIndex];

  function selectChoice(choiceIndex: number) {
    setAnswers((prev) => {
      const next = [...prev];
      next[currentIndex] = choiceIndex;
      return next;
    });
  }

  function goNext() {
    if (selected === null) return;
    if (isLast) {
      onFinish(answers);
    } else {
      setCurrentIndex((i) => i + 1);
    }
  }

  return (
    <div className="quiz-screen">
      <div className="quiz-topbar">
        <button type="button" className="quiz-back-link" onClick={onBackHome}>
          ← Back Home
        </button>
        <span className="quiz-unit-label">
          Unit {unit}: {UNIT_TITLES[unit]}
        </span>
      </div>

      <ProgressBar current={currentIndex + 1} total={questions.length} />

      <div className="quiz-card" key={question.id}>
        <div className="quiz-question-head">
          <IconBadge emoji={CATEGORY_ICON[question.category]} tone="yellow" label={CATEGORY_LABELS[question.category]} />
          <span className="quiz-category-tag">{CATEGORY_LABELS[question.category]}</span>
        </div>

        <h2 className="quiz-question-number">Question {currentIndex + 1}</h2>
        <p className="quiz-question-text">{question.question}</p>

        <div className="quiz-choices">
          {question.choices.map((choice, index) => (
            <button
              key={choice}
              type="button"
              className={`quiz-choice${selected === index ? ' quiz-choice-selected' : ''}`}
              onClick={() => selectChoice(index)}
              aria-pressed={selected === index}
            >
              <span className="quiz-choice-letter">{CHOICE_LETTERS[index]}</span>
              <span className="quiz-choice-text">{choice}</span>
            </button>
          ))}
        </div>

        <div className="quiz-actions">
          <Button
            variant={isLast ? 'accent' : 'primary'}
            size="lg"
            onClick={goNext}
            disabled={selected === null}
          >
            {isLast ? 'Submit Quiz' : 'Next'}
          </Button>
        </div>
      </div>
    </div>
  );
}
