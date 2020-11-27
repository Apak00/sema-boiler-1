import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { MemoryRouter } from 'react-router-dom';

const PrivateRoute = jest.requireActual('@components/routes/PrivateRoute').default;

let currUser: any;

jest.mock('@utils/index', () => ({
  getAuthUser: () => currUser,
}));

describe('Render behaviour', () => {
  const DummyComponent = jest.fn(() => <div id="bar" />);
  let container: any = null;

  beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it('Should render Component when user exists', () => {
    currUser = { token: 'foo' };

    act(() => {
      render(
        <MemoryRouter>
          <PrivateRoute component={DummyComponent} path="/" />
        </MemoryRouter>,
        container,
      );
    });

    expect(container.querySelector('#bar')).toBeTruthy();
  });

  it('Should not render Component when user does not exist', () => {
    currUser = null;

    act(() => {
      render(
        <MemoryRouter>
          <PrivateRoute component={DummyComponent} path="/" />
        </MemoryRouter>,
        container,
      );
    });

    expect(container.querySelector('#bar')).toBeFalsy();
  });
});
