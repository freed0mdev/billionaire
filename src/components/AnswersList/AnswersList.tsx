import React from 'react';
import { AnswerState } from 'src/constants/enums';
import { getAnswerOptionLabel } from 'src/components/AnswersList/utils';
import AnswerOption from 'src/components/AnswerOption';
import 'src/components/AnswersList/AnswersList.scss';

interface AnswersListProps {
  answersArray: string[],
  selectedIndex: number | null,
  selectedAnswerState: AnswerState | null,
  onSelectAnswer: (answer: string) => () => void,
}

function AnswersList({
  answersArray, onSelectAnswer, selectedIndex, selectedAnswerState,
}: AnswersListProps) {
  const renderAnswerOption = (answer: string, index: number) => {
    const label = getAnswerOptionLabel(index);

    return (
      <AnswerOption
        key={`_key${answer}`}
        correct={selectedAnswerState}
        selected={selectedIndex === index}
        label={label}
        text={answer}
        onSelect={onSelectAnswer(answer)}
      />
    );
  };

  return (
    <form>
      <ul className="answers">
        {answersArray?.map(renderAnswerOption)}
      </ul>
    </form>
  );
}

export default AnswersList;
