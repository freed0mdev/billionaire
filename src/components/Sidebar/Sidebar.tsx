import React, { MouseEventHandler } from 'react';
import classNames from 'classnames';
import { useAppSelector } from '../../customHooks/useStore';
import './Sidebar.scss';
import Step from '../Step';
import { StepState } from '../../constants/enums';
import CloseMenuButton from '../CloseMenu';

interface SidebarProps {
  currentQuestionIndex: number,
  isOpen: boolean,
  onClose: MouseEventHandler<HTMLButtonElement>
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

function Sidebar({ currentQuestionIndex, isOpen, onClose }: SidebarProps) {
  const { questions } = useAppSelector((state) => state.questions);

  const sidebarClass = classNames('sidebar', {
    active: isOpen,
    inactive: !isOpen,
  });

  return (
    <aside className={sidebarClass}>
      <header className="sidebar__header">{isOpen && <CloseMenuButton onClick={onClose} />}</header>
      <ul className="sidebar__reward-list">
        {questions.map(({ question, price }, index) => (
          <li key={question}>
            <Step state={getStateNames(index, currentQuestionIndex)}>
              $
              {price}
            </Step>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
