import { useState } from 'react';
import type { UnitId } from './data/questions';
import { getQuestionsForUnit } from './data/questions';
import type { Screen, QuizResult } from './types';
import { saveLatestScore, resetAllScores } from './utils/storage';
import HomeScreen from './pages/HomeScreen';
import QuizScreen from './pages/QuizScreen';
import ResultScreen from './pages/ResultScreen';
import './App.css';

function App() {
  const [screen, setScreen] = useState<Screen>('home');
  const [activeUnit, setActiveUnit] = useState<UnitId | null>(null);
  const [result, setResult] = useState<QuizResult | null>(null);
  // Bumped whenever scores change (finish or reset) so HomeScreen re-reads localStorage.
  const [scoreVersion, setScoreVersion] = useState(0);

  function handleStartUnit(unit: UnitId) {
    setActiveUnit(unit);
    setResult(null);
    setScreen('quiz');
  }

  function handleFinishQuiz(answers: (number | null)[]) {
    if (activeUnit === null) return;
    const questions = getQuestionsForUnit(activeUnit);
    const correct = questions.reduce(
      (sum, q, i) => sum + (answers[i] === q.correctIndex ? 1 : 0),
      0,
    );
    saveLatestScore(activeUnit, correct, questions.length);
    setResult({ unit: activeUnit, answers });
    setScoreVersion((v) => v + 1);
    setScreen('result');
  }

  function handleTryAgain() {
    if (activeUnit === null) return;
    setResult(null);
    setScreen('quiz');
  }

  function handleBackHome() {
    setActiveUnit(null);
    setResult(null);
    setScreen('home');
  }

  function handleResetScores() {
    resetAllScores();
    setScoreVersion((v) => v + 1);
  }

  return (
    <div className="app-shell">
      {screen === 'home' && (
        <HomeScreen key={scoreVersion} onStartUnit={handleStartUnit} onResetScores={handleResetScores} />
      )}

      {screen === 'quiz' && activeUnit !== null && (
        <QuizScreen
          key={activeUnit}
          unit={activeUnit}
          questions={getQuestionsForUnit(activeUnit)}
          onFinish={handleFinishQuiz}
          onBackHome={handleBackHome}
        />
      )}

      {screen === 'result' && result !== null && (
        <ResultScreen
          result={result}
          questions={getQuestionsForUnit(result.unit)}
          onTryAgain={handleTryAgain}
          onBackHome={handleBackHome}
        />
      )}
    </div>
  );
}

export default App;
