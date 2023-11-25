import React from 'react';
import { ReactComponent as MenuSVG } from 'src/assets/images/icons/menu.svg';

interface OpenMenuProps {
  onClick: () => void
}

function OpenMenuButton({ onClick } : OpenMenuProps) {
  return (
    <button type="button" className="button-reset" onClick={onClick}>
      <MenuSVG />
      <span className="sr-only">Open Menu</span>
    </button>
  );
}

export default OpenMenuButton;
