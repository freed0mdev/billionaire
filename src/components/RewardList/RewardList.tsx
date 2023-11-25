import React from 'react';
import 'src/components/RewardList/RewardList.scss';
import { useAppSelector } from 'src/customHooks/useStore';
import { TQuestion } from 'src/types';
import { StepState } from 'src/constants/enums';
import Step from 'src/components/Step';

interface RewardListProps {
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

function RewardList({ currentQuestionIndex }: RewardListProps) {
  const { questions } = useAppSelector((state) => state.questions);

  return (
    <ul className="reward-list">
      {questions?.map(({ question, price }: TQuestion, index: number) => (
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
