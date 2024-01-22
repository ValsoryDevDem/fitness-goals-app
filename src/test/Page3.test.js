import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import Page3 from '../components/Page3';
import { pic5, pic6, pic7, pic8, pic9, pic10 } from "../data/data";

test('renders Page3 component', () => {
  const { getByText } = render(
    <BrowserRouter>
      <Page3 />
    </BrowserRouter>
  );

  const textElement = getByText('Destructive behaviors');
  expect(textElement).toBeInTheDocument();
});

test('clicking on buttons in Page3 does not throw errors', () => {
  const { getByText } = render(
    <BrowserRouter>
      <Page3 />
    </BrowserRouter>
  );

  const buttons = getByText(`${pic5}`); 
  fireEvent.click(buttons);
});
