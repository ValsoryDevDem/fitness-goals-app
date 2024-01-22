import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import Page2 from '../components/Page2';

test('renders Page2 component', () => {
  const { getByText } = render(
    <BrowserRouter>
      <Page2 />
    </BrowserRouter>
  );

  const imperialButton = getByText('IMPERIAL');
  const metricButton = getByText('METRIC');
  expect(imperialButton).toBeInTheDocument();
  expect(metricButton).toBeInTheDocument();
});

test('clicking on buttons in Page2 toggles active state', () => {
  const { getByText } = render(
    <BrowserRouter>
      <Page2 />
    </BrowserRouter>
  );

  const imperialButton = getByText('IMPERIAL');
  const metricButton = getByText('METRIC');

  fireEvent.click(imperialButton);
  expect(imperialButton).toHaveStyle('background: rgba(95, 203, 57, 0.2)');

  fireEvent.click(metricButton);
  expect(metricButton).toHaveStyle('background: rgba(95, 203, 57, 0.2)');
});
