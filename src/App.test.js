import { render, screen } from '@testing-library/react';
import App from './App';

test('renders without crashing', () => {
  render(<App />);
  const element = screen.getByText('Client Name');
  expect(element).toBeInTheDocument();
});
