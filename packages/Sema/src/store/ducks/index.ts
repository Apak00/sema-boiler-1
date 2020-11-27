import { connectRouter, LocationChangeAction } from 'connected-react-router';
import { History } from 'history';
import { Action, CombinedState, combineReducers, Reducer } from 'redux';
import { all } from 'redux-saga/effects';
import { PayloadAction } from 'typesafe-actions';
import { authReducer } from '@store/ducks/auth/reducers';
import { loaderReducer } from '@store/ducks/loader/reducers';
import { messagesReducer } from '@store/ducks/messages/reducers';
import authSaga from '@store/ducks/auth/sagas';
import configs from '@configs/index';
import { IApplicationState } from '@store/ducks/types';
import { IMessagesRaw } from '@store/ducks/messages/types';
import { AnyAuthAction } from '@src/store/ducks/auth/actions';

export const createRootReducer: (
  history: History,
) => Reducer<
  CombinedState<IApplicationState>,
  LocationChangeAction<unknown> | AnyAuthAction | (Action<string> & PayloadAction<string, IMessagesRaw>)
> = (history: History) => {
  const reducers = {
    ...(configs.withConnectedRouter ? { router: connectRouter(history) } : null),
    auth: authReducer,
    loader: loaderReducer,
    messages: messagesReducer,
  };

  return combineReducers(reducers);
};

export function* rootSaga() {
  yield all([authSaga()]);
}
