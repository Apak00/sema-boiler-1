import { action } from 'typesafe-actions';
import { IUserRaw, IUserLogin } from '@store/ducks/auth/types';
import { AUTH_ACTION_TYPES } from '@store/ducks/auth/constants';
import { IMessagesRaw } from '@store/ducks/messages/types';

/**
 * =================================================================================
 * === LOGIN ACTIONS
 * =================================================================================
 */
export const fetchLoginRequest = (params: IUserLogin) => action(AUTH_ACTION_TYPES.LOGIN_REQUESTED, params);
export const fetchLoginSuccess = (data: IUserRaw) => action(AUTH_ACTION_TYPES.LOGIN_SUCCESS, data);
export const fetchLoginFailure = (error: IMessagesRaw) => action(AUTH_ACTION_TYPES.LOGIN_FAILURE, error);

/**
 * =================================================================================
 * === LOGOUT ACTIONS
 * =================================================================================
 */
export const fetchLogoutRequest = () => action(AUTH_ACTION_TYPES.LOGOUT_REQUESTED);
export const fetchLogoutSuccess = () => action(AUTH_ACTION_TYPES.LOGOUT_SUCCESS);
export const fetchLogoutFailure = (error: IMessagesRaw) => action(AUTH_ACTION_TYPES.LOGOUT_FAILURE, error);

export type AnyAuthAction =
  | ReturnType<typeof fetchLoginRequest>
  | ReturnType<typeof fetchLoginSuccess>
  | ReturnType<typeof fetchLoginFailure>
  | ReturnType<typeof fetchLogoutRequest>
  | ReturnType<typeof fetchLogoutSuccess>
  | ReturnType<typeof fetchLogoutFailure>;
