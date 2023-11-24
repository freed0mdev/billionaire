import React from 'react';
import './App.scss';
import { HashRouter, Route, Routes } from 'react-router-dom';
import StartPage from './pages/Start';
import GamePage from './pages/Game';
import FinalPage from './pages/Final';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/final" element={<FinalPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
