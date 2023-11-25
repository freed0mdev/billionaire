import React, { ReactNode } from 'react';
import 'src/components/UI/Button/Button.scss';

interface ButtonProps {
  children: ReactNode,
  onClick: () => void
}

function Button({ onClick, children }: ButtonProps) {
  return <button type="button" className="button" onClick={onClick}>{children}</button>;
}

export default Button;
