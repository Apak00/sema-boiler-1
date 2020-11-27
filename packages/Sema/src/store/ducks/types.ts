import type { PayloadAction, PayloadMetaAction, TypeConstant } from 'typesafe-actions';
import { Action } from 'redux';
import type { IUserState } from '@store/ducks/auth/types';
import type { ILoaderState } from '@store/ducks/loader/types';
import { IMessagesState } from '@store/ducks/messages/types';
import { RouterState } from 'connected-react-router';

export interface IApplicationState {
  router?: RouterState | undefined;
  auth: IUserState;
  loader: ILoaderState;
  messages: IMessagesState;
}

export interface IMetaAction extends PayloadMetaAction<TypeConstant, unknown, unknown> {
  type: TypeConstant;
  meta: unknown;
  payload: unknown;
}

export interface IReducerAction<TPayload> extends Action<TypeConstant>, PayloadAction<TypeConstant, TPayload> {}
