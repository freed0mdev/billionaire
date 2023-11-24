import React from 'react';
import { ReactComponent as MenuSVG } from '../../assets/images/icons/menu.svg';

interface OpenMenuProps {
  onClick: () => void
}

function OpenMenu({ onClick } : OpenMenuProps) {
  return (
    <button type="button" className="button-reset game-menu-trigger" onClick={onClick}>
      <MenuSVG />
      <span className="sr-only">Open Menu</span>
    </button>
  );
}

export default OpenMenu;
