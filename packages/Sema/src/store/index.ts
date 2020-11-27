/* eslint-disable no-underscore-dangle */
import {
  Store,
  applyMiddleware,
  createStore,
  compose,
  AnyAction,
  Dispatch,
  Middleware,
  CombinedState,
} from 'redux';
import history from '@router/history';
import { createRootReducer, rootSaga } from '@store/ducks/index';
import { IApplicationState } from '@store/ducks/types';
import { sagaMiddleware, connectedRouterMiddleware } from '@store/middlewares';
import configs from '@configs/index';

declare global {
  interface Window {
    /**
     * allows redux devtools to be used
     *
     * @type {*}
     * @memberof Window
     */
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
  }
}

export function configureStore(initialState: IApplicationState): Store<IApplicationState> {
  const composeEnhancer: typeof compose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  let middlewares: Middleware<object, any, Dispatch<AnyAction>>[] = [sagaMiddleware];
  if (configs.withConnectedRouter) {
    middlewares = [connectedRouterMiddleware, ...middlewares];
  }

  const store: Store<CombinedState<IApplicationState>, any> & {
    dispatch: unknown;
  } = createStore(createRootReducer(history), initialState, composeEnhancer(applyMiddleware(...middlewares)));

  sagaMiddleware.run(rootSaga);

  // Hot reloading
  if (import.meta.hot) {
    store.replaceReducer(createRootReducer(history));
  }

  return store;
}

const initialState = (window as any).initialReduxState;
const store: Store<IApplicationState, AnyAction> = configureStore(initialState);
export default store;