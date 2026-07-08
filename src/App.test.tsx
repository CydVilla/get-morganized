import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './components/Footer';

// Note: the full <App /> mounts react-router-dom v7, which ships ESM that
// Create React App's Jest config does not transform. We smoke-test a
// router-free leaf component instead to verify rendering works.
test('renders the company name in the footer', () => {
  render(<Footer />);
  const heading = screen.getByRole('heading', { level: 3, name: /Get Morganized LLC/i });
  expect(heading).toBeInTheDocument();
});

test('renders the contact phone number', () => {
  render(<Footer />);
  const phone = screen.getByText(/914-786-2282/);
  expect(phone).toBeInTheDocument();
});
