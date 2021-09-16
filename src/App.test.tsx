import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders main heading', () => {
  render(<App />);
  const heading = screen.getByText(/Custom React Hook with Intersection Observer/i);
  expect(heading).toBeInTheDocument();
});
