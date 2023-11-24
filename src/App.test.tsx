import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Who wants to be a millionaire', () => {
  render(<App />);
  const linkElement = screen.getByText(/Who wants to be a millionaire?/i);
  expect(linkElement).toBeInTheDocument();
});
