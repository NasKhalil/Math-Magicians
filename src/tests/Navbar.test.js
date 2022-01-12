import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import MainHeader from '../components/MainHeader';

it('renders correctly', () => {
  const nav = renderer
    .create(
      <BrowserRouter>
        <MainHeader />
      </BrowserRouter>,
    )
    .toJSON();
  expect(nav).toMatchSnapshot();
});
