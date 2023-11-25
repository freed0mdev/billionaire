import React, { MouseEventHandler, ReactNode } from 'react';
import classNames from 'classnames';
import 'src/components/UI/Sidebar/Sidebar.scss';
import CloseMenuButton from 'src/components/UI/CloseMenu';

interface SidebarProps {
  isOpen: boolean,
  onClose: MouseEventHandler<HTMLButtonElement>,
  content: ReactNode | ReactNode[],
}

function Sidebar({ isOpen, onClose, content }: SidebarProps) {
  const sidebarClass = classNames('sidebar', {
    active: isOpen,
    inactive: !isOpen,
  });

  return (
    <aside className={sidebarClass}>
      <header className="sidebar__header">{isOpen && <CloseMenuButton onClick={onClose} />}</header>
      <div className="sidebar__content">
        {content}
      </div>
    </aside>
  );
}

export default Sidebar;
