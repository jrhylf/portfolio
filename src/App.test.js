import { render, screen } from '@testing-library/react';
import App from './App';

test('renders welcome page', () => {
  render(<App />);
  const wordElement = screen.getByText(/Hi, I am Rhyl/i);
  expect(wordElement).toBeInTheDocument();
});
