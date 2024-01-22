import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import Page1 from '../components/Page1';

test('renders Page1 component', () => {
  const { getByText } = render(
    <BrowserRouter>
      <Page1 />
    </BrowserRouter>
  );

  const bannerElement = getByText('The Goal');
  expect(bannerElement).toBeInTheDocument();

  const textElement = getByText('What are your goals?');
  expect(textElement).toBeInTheDocument();
});
