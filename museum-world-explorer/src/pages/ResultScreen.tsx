import type { Question } from '../data/questions';
import { UNIT_TITLES } from '../data/questions';
import type { QuizResult } from '../types';
import { getPercentage, getResultMessage } from '../utils/scoring';
import Button from '../components/Button';
import './ResultScreen.css';

interface ResultScreenProps {
  result: QuizResult;
  questions: Question[];
  onTryAgain: () => void;
  onBackHome: () => void;
}

const CHOICE_LETTERS = ['A', 'B', 'C'] as const;

export default function ResultScreen({ result, questions, onTryAgain, onBackHome }: ResultScreenProps) {
  const total = questions.length;
  const correctCount = questions.reduce(
    (sum, q, i) => sum + (result.answers[i] === q.correctIndex ? 1 : 0),
    0,
  );
  const percentage = getPercentage(correctCount, total);
  const message = getResultMessage(correctCount, total);
  const isGreatScore = percentage >= 75;

  return (
    <div className="result-screen">
      <div className={`result-summary${isGreatScore ? ' result-summary-celebrate' : ''}`}>
        <p className="result-unit-label">
          Unit {result.unit}: {UNIT_TITLES[result.unit]}
        </p>
        <p className="result-score">
          {correctCount}/{total}
        </p>
        <p className="result-percentage">{percentage}%</p>
        <p className="result-message">{message}</p>
      </div>

      <div className="result-actions">
        <Button variant="primary" size="lg" onClick={onTryAgain}>
          Try Again
        </Button>
        <Button variant="ghost" size="lg" onClick={onBackHome}>
          Back Home
        </Button>
      </div>

      <div className="result-review">
        <h2 className="result-review-title">Review your answers</h2>

        {questions.map((q, i) => {
          const studentAnswer = result.answers[i];
          const isCorrect = studentAnswer === q.correctIndex;

          return (
            <div key={q.id} className={`review-item${isCorrect ? ' review-item-correct' : ' review-item-incorrect'}`}>
              <div className="review-item-head">
                <span className="review-item-icon" aria-hidden="true">
                  {isCorrect ? '✅' : '❌'}
                </span>
                <p className="review-item-question">
                  {i + 1}. {q.question}
                </p>
              </div>

              <p className="review-item-line">
                <span className="review-item-label">Your answer:</span>{' '}
                {studentAnswer === null
                  ? 'No answer'
                  : `${CHOICE_LETTERS[studentAnswer]}. ${q.choices[studentAnswer]}`}
              </p>

              {!isCorrect && (
                <>
                  <p className="review-item-line">
                    <span className="review-item-label">Correct answer:</span>{' '}
                    {CHOICE_LETTERS[q.correctIndex]}. {q.choices[q.correctIndex]}
                  </p>
                  <p className="review-item-explanation">{q.explanation}</p>
                </>
              )}
            </div>
          );
        })}
      </div>

      <div className="result-actions">
        <Button variant="primary" size="lg" onClick={onTryAgain}>
          Try Again
        </Button>
        <Button variant="ghost" size="lg" onClick={onBackHome}>
          Back Home
        </Button>
      </div>
    </div>
  );
}
