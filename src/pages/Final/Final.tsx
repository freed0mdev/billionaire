import React, { useCallback } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import 'src/pages/Final/Final.scss';
import { ReactComponent as HeroCreative } from 'src/assets/images/hero_creative.svg';
import Button from 'src/components/UI/Button';
import HeroLayout from 'src/components/HeroLayout';

function FinalPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const isNoScore = typeof location.state?.score === 'undefined';

  const onResetClick = useCallback(() => {
    navigate('/game');
  }, [navigate]);

  if (isNoScore) {
    return <Navigate to="/" replace />;
  }

  const getHeroContent = () => {
    const text = `$${location.state.score} earned`;
    return (
      <div className="final-page__hero-content">
        <h3 className="h2 opacity-50">Total score:</h3>
        <h1 className="h1">
          {text}
        </h1>
      </div>
    );
  };

  return (
    <main className="final-page">
      <div className="container">
        <div className="final-page__content">
          <HeroLayout imageElement={<HeroCreative />}>
            {getHeroContent()}
            <Button onClick={onResetClick}>Try Again</Button>
          </HeroLayout>
        </div>
      </div>
    </main>
  );
}

export default FinalPage;
