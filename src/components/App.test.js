import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the text', () => {
  render(<App />);
  const linkElement = screen.getByText(/You clicked 0 times/i);
  expect(linkElement).toBeInTheDocument();
});
