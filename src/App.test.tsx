import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './pages/home';

test('renders learn react link', () => {
  render(<Home/>);
  const linkElement = screen.getByText(/Giphyeyy/i);
  expect(linkElement).toBeInTheDocument();
});
