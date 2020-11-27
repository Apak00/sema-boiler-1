import { Action } from 'redux';
import { TypeConstant, PayloadAction } from 'typesafe-actions';
import { ILoaderRaw, ILoaderState } from '@store/ducks/loader/types';

export const initialState: ILoaderState = {};

export const loaderReducer = (
  state: ILoaderState = initialState,
  action: Action<TypeConstant> & PayloadAction<TypeConstant, ILoaderRaw>,
): ILoaderState => {
  const { type } = action;

  const matches = /(.*)_(REQUESTED|SUCCESS|FAILURE)/.exec(type);
  if (!matches) {
    return state;
  }

  const [, requestName, requestState] = matches;

  return {
    ...state,
    [requestName]: requestState === 'REQUESTED',
  };
};
