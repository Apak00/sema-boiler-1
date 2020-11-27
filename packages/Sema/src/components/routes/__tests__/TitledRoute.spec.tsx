import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { MemoryRouter, Route } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import TitledRoute from '@components/routes/TitledRoute';

jest.mock('../PrivateRoute', () => ({
  __esModule: true,
  default: Route,
}));
jest.mock('react-helmet-async', () => ({
  Helmet: (props: any) => <div {...props} />,
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

  it('Should render title in react helmet when title exists', () => {
    act(() => {
      render(
        <MemoryRouter>
          <TitledRoute component={DummyComponent} path="/" title="baz" />
        </MemoryRouter>,
        container,
      );
    });

    expect(container.querySelector('title').textContent).toContain('baz');
  });

  it('Should render baseTitle in react helmet when title does not exist', () => {
    act(() => {
      render(
        <MemoryRouter>
          <TitledRoute component={DummyComponent} path="/" />
        </MemoryRouter>,
        container,
      );
    });

    expect(container.querySelector('title')).toBeTruthy();
  });
});
