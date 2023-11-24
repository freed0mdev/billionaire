import './Game.scss';
import React, { useCallback, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import AnswersList from '../../components/AnswersList';
import OpenMenuButton from '../../components/OpenMenu';
import Question from '../../components/Question';
import Sidebar from '../../components/Sidebar';
import { AnswerResultParams, TQuestion } from '../../types';
import { AnswerState } from '../../constants/enums';
import { fetchQuestions } from '../../redux/questionsSlice';
import { useAppDispatch, useAppSelector } from '../../customHooks/useStore';

const INITIAL_STATE = {
  currentQuestionIndex: 0,
  score: 0,
};

function getShouldRedirect(questions: TQuestion[], currentQuestionIndex: number) {
  return questions.length && (currentQuestionIndex === questions.length);
}

function GamePage() {
  const dispatch = useAppDispatch();
  const { questions } = useAppSelector((state) => state.questions);
  const [gameState, setGameState] = useState(INITIAL_STATE);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [selectedAnswerState, setSelectedAnswerState] = useState<AnswerState | null>(null);
  const { currentQuestionIndex } = gameState;
  const { question, answers } = questions[currentQuestionIndex] || {};

  useEffect(() => {
    dispatch(fetchQuestions());
  }, [fetchQuestions]);

  const handleCloseSidebar = useCallback(() => {
    setSidebarOpen(false);
  }, [setSidebarOpen]);

  const handleOpenMenu = useCallback(() => {
    setSidebarOpen(true);
  }, [setSidebarOpen]);

  const handleCheckAnswer = useCallback((correctIncluded: boolean) => {
    setSelectedAnswerState(correctIncluded ? AnswerState.CORRECT : AnswerState.INCORRECT);
  }, [setSelectedAnswerState]);

  const handleAnswerResult = useCallback(({
    isCorrect,
    currentQuestion,
    index,
  }: AnswerResultParams) => {
    setGameState((prevState) => ({
      ...prevState,
      score: isCorrect ? currentQuestion.price : prevState.score,
      currentQuestionIndex: isCorrect ? index + 1 : questions.length,
    }));
    setSelectedAnswerState(null);
    setSelectedAnswer(null);
  }, [setSelectedAnswerState, setSelectedAnswer, setGameState, questions]);

  const handleAnswerSelect = useCallback((answer: string) => () => {
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = currentQuestion.correctAnswers.includes(answer);

    setSelectedAnswer(currentQuestion.answers.indexOf(answer));

    const showResultId = setTimeout(() => {
      handleCheckAnswer(isCorrect);
    }, 2000);
    const showNextQuestionId = setTimeout(() => {
      handleAnswerResult({ isCorrect, currentQuestion, index: currentQuestionIndex });
    }, 3000);

    return () => {
      clearTimeout(showResultId);
      clearTimeout(showNextQuestionId);
    };
  }, [questions, currentQuestionIndex, handleCheckAnswer, handleAnswerResult]);

  if (!questions || !questions.length) {
    return <div>No questions available</div>;
  }

  if (getShouldRedirect(questions, currentQuestionIndex)) {
    return <Navigate to="/final" state={{ score: gameState.score }} />;
  }

  return (
    <div className="game-page">
      <div className="container">
        <div className="game-page__wrapper">
          <header className="game-page__header">
            <OpenMenuButton onClick={handleOpenMenu} />
          </header>
          <main className="game-page__main">
            <Question label={question} />
            {answers && (
            <AnswersList
              answersArray={answers}
              onSelectAnswer={handleAnswerSelect}
              selectedIndex={selectedAnswer}
              selectedAnswerState={selectedAnswerState}
            />
            )}
          </main>
          <Sidebar
            isOpen={isSidebarOpen}
            onClose={handleCloseSidebar}
            currentQuestionIndex={gameState.currentQuestionIndex}
          />
        </div>
      </div>
    </div>
  );
}

export default GamePage;
