import { render, screen } from '@testing-library/react';
import Child from '.';

test('renders the component', () => {
  render(<Child />);
  const linkElement = screen.getByText(/This is the child component/i);
  expect(linkElement).toBeInTheDocument();
});