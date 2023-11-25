import React, { MouseEventHandler } from 'react';
import { ReactComponent as Close } from 'src/assets/images/icons/close.svg';

interface CloseMenuButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>
}

function CloseMenuButton({ onClick }: CloseMenuButtonProps) {
  return (
    <button type="button" className="button-reset" onClick={onClick}>
      <Close />
      <span className="sr-only">Close</span>
    </button>
  );
}

export default CloseMenuButton;
