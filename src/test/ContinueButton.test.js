import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import ContinueButton from '../components/ContinueButton';

test('renders ContinueButton component', () => {
  const { getByText } = render(<ContinueButton to="/test">Click me</ContinueButton>);
  const button = getByText('Click me');
  expect(button).toBeInTheDocument();
  expect(button).toHaveAttribute('href', '/test');
});
