import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import Page4 from '../components/Page4';

test('renders Page4 component', () => {
  const { getByText } = render(
    <BrowserRouter>
      <Page4 />
    </BrowserRouter>
  );

  const textElement = getByText('Physical exercise');
  expect(textElement).toBeInTheDocument();
});

test('clicking on buttons in Page4 does not throw errors', () => {
  const { getByText } = render(
    <BrowserRouter>
      <Page4 />
    </BrowserRouter>
  );

  const buttons = getByText('Hardly at all'); 
  fireEvent.click(buttons);
});
