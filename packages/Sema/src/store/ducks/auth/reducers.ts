import { IUserState } from '@store/ducks/auth/types';
import { AUTH_ACTION_TYPES } from '@store/ducks/auth/constants';
import { AnyAuthAction } from '@src/store/ducks/auth/actions';

export const initialState: IUserState = {
  user: {},
};

export const authReducer = (state: IUserState = initialState, action: AnyAuthAction): IUserState => {
  if (action.type.indexOf('REQUESTED') > -1 || action.type.indexOf('FAILURE') > -1) {
    return {
      ...state,
    };
  }

  switch (action.type) {
    case AUTH_ACTION_TYPES.LOGIN_REQUESTED:
      return {
        ...state,
      };
    case AUTH_ACTION_TYPES.LOGIN_SUCCESS:
      return {
        ...state,
        // user: action.payload,
      };
    case AUTH_ACTION_TYPES.LOGIN_FAILURE:
      return {
        ...state,
      };
    case AUTH_ACTION_TYPES.LOGOUT_REQUESTED:
      return {
        ...state,
      };
    case AUTH_ACTION_TYPES.LOGOUT_SUCCESS:
      return {
        ...state,
        // user: {},
      };
    case AUTH_ACTION_TYPES.LOGOUT_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
};
