import React from 'react';
import './RewardList.scss';
import { StepState } from '../../constants/enums';
import Step from '../Step';
import { TQuestion } from '../../types';

interface RewardListProps {
  questions: TQuestion[],
  currentQuestionIndex: number
}

function getStateNames(index: number, currentIndex: number): StepState | null {
  if (currentIndex === index) {
    return StepState.CURRENT;
  }
  if (currentIndex > index) {
    return StepState.FINISHED;
  }

  return null;
}

function RewardList({ questions, currentQuestionIndex }: RewardListProps) {
  return (
    <ul className="reward-list">
      {questions?.map(({ question, price }, index) => (
        <li key={question}>
          <Step state={getStateNames(index, currentQuestionIndex)}>
            $
            {price}
          </Step>
        </li>
      ))}
    </ul>
  );
}

export default RewardList;
