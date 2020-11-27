import React from 'react';
import { render, screen } from '@testing-library/react';
import { Appbar } from '@components/containers/layouts/SecureLayout/Appbar';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import history from '@router/history';
import { Router } from 'react-router-dom';

describe('Render behaviour', () => {
  it('Should render Component', async () => {
    const initialState = {};
    render(
      <Provider store={createStore((f: any) => f, initialState)}>
        <Router history={history}>
          <Appbar />
        </Router>
      </Provider>,
    );

    expect(screen.getByTestId('Appbar')).toBeTruthy();
  });
});
