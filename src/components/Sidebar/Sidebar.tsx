import React, { MouseEventHandler } from 'react';
import classNames from 'classnames';
import { useAppSelector } from '../../customHooks/useStore';
import './Sidebar.scss';
import CloseMenuButton from '../CloseMenu';
import RewardList from '../RewardList';

interface SidebarProps {
  currentQuestionIndex: number,
  isOpen: boolean,
  onClose: MouseEventHandler<HTMLButtonElement>
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
      <div className="sidebar__content">
        <RewardList questions={questions} currentQuestionIndex={currentQuestionIndex} />
      </div>
    </aside>
  );
}

export default Sidebar;
