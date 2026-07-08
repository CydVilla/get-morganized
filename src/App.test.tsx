import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the hero headline', () => {
  render(<App />);
  const headline = screen.getByRole('heading', { level: 1, name: /Transform Your Career/i });
  expect(headline).toBeInTheDocument();
});

test('renders the company name in the footer', () => {
  render(<App />);
  const footerBrand = screen.getByRole('heading', { level: 3, name: /Get Morganized LLC/i });
  expect(footerBrand).toBeInTheDocument();
});
