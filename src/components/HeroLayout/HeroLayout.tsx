import React, { ReactNode } from 'react';
import './HeroLayout.scss';

interface HeroLayoutProps {
  children: ReactNode;
  imageElement: ReactNode;
}

function HeroLayout({ children, imageElement }: HeroLayoutProps) {
  return (
    <div className="hero">
      <div className="hero__image">
        {imageElement}
      </div>
      <div className="hero__content">
        {children}
      </div>
    </div>
  );
}

export default HeroLayout;
