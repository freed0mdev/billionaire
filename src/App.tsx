import React from 'react';
import 'src/App.scss';
import { HashRouter, Route, Routes } from 'react-router-dom';
import StartPage from 'src/pages/Start';
import GamePage from 'src/pages/Game';
import FinalPage from 'src/pages/Final';

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
