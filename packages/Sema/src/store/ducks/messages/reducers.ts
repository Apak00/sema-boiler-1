import { Action } from 'redux';
import { TypeConstant, PayloadAction } from 'typesafe-actions';
import { IMessagesRaw, IMessagesState } from '@store/ducks/messages/types';

export const initialState: IMessagesState = {};

export const messagesReducer = (
  state: IMessagesState = initialState,
  action: Action<TypeConstant> & PayloadAction<TypeConstant, IMessagesRaw>,
): IMessagesState => {
  const { type, payload } = action;
  const matches = /(.*)_(REQUESTED|FAILURE)/.exec(type);
  if (!matches) {
    return state;
  }

  const [, requestName, requestState] = matches;
  return {
    ...state,
    [requestName]: requestState === 'FAILURE' ? payload : '',
  };
};
