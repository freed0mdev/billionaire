import React, { useCallback } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import './Final.scss';
import { ReactComponent as HeroCreative } from '../../assets/images/hero_creative.svg';
import Button from '../../components/Button';
import HeroLayout from '../../components/HeroLayout';

function FinalPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const onResetClick = useCallback(() => {
    navigate('/game');
  }, [navigate]);

  if (typeof location.state?.score === 'undefined') {
    return <Navigate to="/" replace />;
  }

  return (
    <main className="final-page">
      <div className="container">
        <div className="final-page__content">
          <HeroLayout imageElement={<HeroCreative />}>
            <div className="final-page__hero-content">
              <h3 className="h2 opacity-50">Total score:</h3>
              <h1 className="h1">
                $
                {location.state.score}
                {' '}
                earned
              </h1>
            </div>
            <Button onClick={onResetClick}>Try Again</Button>
          </HeroLayout>
        </div>
      </div>
    </main>
  );
}

export default FinalPage;
