import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import MainLayout from '../MainLayout';

jest.mock('@components/Loader', () => ({
  __esModule: true,
  default: (props: any) => <div id="Loader" {...props} />,
}));
jest.mock('@components/AlertDismissible', () => ({
  __esModule: true,
  default: (props: any) => <div id="AlertDismissible" {...props} />,
}));

describe('Render behaviour', () => {
  const DummyComponent = () => <div id="bar" />;
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

  it('Should render Component', () => {
    const initialState = {
      loader: { foo: true },
      messages: { bar: { id: 'baz', description: 'baz' } },
    };
    act(() => {
      render(
        <Provider store={createStore((f: any) => f, initialState)}>
          <MainLayout>
            <DummyComponent />
          </MainLayout>
        </Provider>,
        container,
      );
    });

    expect(container.querySelector('#bar')).toBeTruthy();
  });

  it('Should render Loader when Loading exists in store', () => {
    const initialState = { loader: { foo: true }, messages: {} };
    act(() => {
      render(
        <Provider store={createStore((f: any) => f, initialState)}>
          <MainLayout>
            <DummyComponent />
          </MainLayout>
        </Provider>,
        container,
      );
    });

    expect(container.querySelector('#Loader')).toBeTruthy();
  });

  it('Should not render Loader when Loading does not exist in store', () => {
    const initialState = { loader: {}, messages: {} };
    act(() => {
      render(
        <Provider store={createStore((f: any) => f, initialState)}>
          <MainLayout>
            <DummyComponent />
          </MainLayout>
        </Provider>,
        container,
      );
    });

    expect(container.querySelector('#Loader')).toBeFalsy();
  });

  it('Should render AlertDismissible when messages exists in store', () => {
    const initialState = { loader: {}, messages: { bar: { id: 'baz', description: 'baz' } } };
    act(() => {
      render(
        <Provider store={createStore((f: any) => f, initialState)}>
          <MainLayout>
            <DummyComponent />
          </MainLayout>
        </Provider>,
        container,
      );
    });

    expect(container.querySelector('#AlertDismissible')).toBeTruthy();
  });

  it('Should not render AlertDismissible when messages dont exists in store', () => {
    const initialState = { loader: {}, messages: {} };
    act(() => {
      render(
        <Provider store={createStore((f: any) => f, initialState)}>
          <MainLayout>
            <DummyComponent />
          </MainLayout>
        </Provider>,
        container,
      );
    });

    expect(container.querySelector('#AlertDismissible')).toBeFalsy();
  });
});
