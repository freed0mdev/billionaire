import React from 'react';
import './App.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import StartPage from './pages/Start';
import GamePage from './pages/Game';
import FinalPage from './pages/Final';

const router = createBrowserRouter([
  {
    path: '/',
    element: <StartPage />,
  },
  {
    path: '/game',
    element: <GamePage />,
  },
  {
    path: '/final',
    element: <FinalPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
