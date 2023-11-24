import React from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import './Final.scss';
import { ReactComponent as HeroCreative } from '../../assets/images/hero_creative.svg';

function FinalPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const onResetClick = () => {
    navigate('/game');
  };

  if (typeof location.state?.score === 'undefined') {
    return <Navigate to="/" replace />;
  }

  return (
    <main className="final-page">
      <div className="container">
        <div className="final-page__hero-container">
          <div className="final-page__hero-image">
            <HeroCreative className="final-page__hero-creative" />
          </div>
          <div className="final-page__hero-cta">
            <div>
              <h3 className="h2 opacity-50 final-page__subtitle">Total score:</h3>
              <h1 className="h1">
                $
                {location.state.score}
                {' '}
                earned
              </h1>
            </div>
            <button type="button" className="button" onClick={onResetClick}>Try Again</button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default FinalPage;
