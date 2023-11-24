import React from 'react';
import classNames from 'classnames';
import './AnswerOption.scss';
import { AnswerState } from '../../constants/enums';
import { ReactComponent as OptionRect } from '../../assets/images/option.svg';
import { ReactComponent as OptionRectDesktop } from '../../assets/images/option_large.svg';

interface StepProps {
  text: string;
  label: string;
  selected: boolean;
  correct: AnswerState | null;
  onClick: () => void;
}

function AnswerOption({
  text, label, selected, correct, onClick,
}: StepProps) {
  const optionClass = classNames('option', {
    'option--selected': selected,
    'option--correct': selected && correct === AnswerState.CORRECT,
    'option--wrong': selected && correct === AnswerState.INCORRECT,
  });

  return (
    <li>
      <button type="button" className="button-reset" onClick={onClick}>
        <span className={optionClass}>
          <OptionRect className="option__rect" />
          <OptionRectDesktop className="option__rect option__rect--desktop" />
          <div className="option__content">
            <span className="option__label">{label}</span>
            {text}
          </div>
        </span>
      </button>
    </li>
  );
}

export default AnswerOption;
