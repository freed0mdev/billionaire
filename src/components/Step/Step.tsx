import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { StepState } from 'src/constants/enums';
import { ReactComponent as StepRectSVG } from 'src/assets/images/step.svg';
import { ReactComponent as StepRectDesktopSVG } from 'src/assets/images/step_large.svg';
import 'src/components/Step/Step.scss';

interface StepProps {
  children: ReactNode;
  state: StepState | null;
}

function Step({ children, state }: StepProps) {
  const getStepClass = classNames('step', {
    'step--current': state === StepState.CURRENT,
    'step--finished': state === StepState.FINISHED,
  });

  return (
    <span className={getStepClass}>
      <StepRectSVG className="step__rect" />
      <StepRectDesktopSVG className="step__rect step__rect--desktop" />
      {children && <div className="step__content">{children}</div>}
    </span>
  );
}

export default Step;
