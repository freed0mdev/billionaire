import React, { useCallback } from 'react';
import './Start.scss';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as HeroCreative } from '../../assets/images/hero_creative.svg';
import Button from '../../components/Button';
import HeroLayout from '../../components/HeroLayout';

function StartPage() {
  const navigate = useNavigate();

  const onStartClick = useCallback(() => {
    navigate('/game');
  }, [navigate]);

  return (
    <main className="start-page">
      <div className="container">
        <div className="start-page__content">
          <HeroLayout imageElement={<HeroCreative />}>
            <h1 className="h1">Who wants to be a millionaire?</h1>
            <Button onClick={onStartClick}>Start</Button>
          </HeroLayout>
        </div>
      </div>
    </main>
  );
}

export default StartPage;
