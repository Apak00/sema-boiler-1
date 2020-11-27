import { action } from 'typesafe-actions';
import { fetchLoginFailure, fetchLoginRequest, fetchLoginSuccess, fetchLogoutFailure, fetchLogoutRequest, fetchLogoutSuccess } from '@store/ducks/auth/actions';
import { AUTH_ACTION_TYPES } from '@store/ducks/auth/constants';
import { userData, loginParams, errorData } from '@store/ducks/auth/__mockData__/userData';

describe('auth actions', () => {
  
  it('should create an action to fetch loggedin user', () => {
    const expectedAction = action(AUTH_ACTION_TYPES.LOGIN_REQUESTED, { ...loginParams });

    expect(fetchLoginRequest(loginParams)).toEqual(expectedAction);
  });

  it('should create a success action for login', () => {
    const expectedAction = action(AUTH_ACTION_TYPES.LOGIN_SUCCESS, userData);

    expect(fetchLoginSuccess(userData)).toEqual(expectedAction);
  });

  it('should create a failure action for login', () => {
    const expectedAction = action(AUTH_ACTION_TYPES.LOGIN_FAILURE, errorData);

    expect(fetchLoginFailure(errorData)).toEqual(expectedAction);
  });

  it('should create an action to logout user', () => {
    const expectedAction = action(AUTH_ACTION_TYPES.LOGOUT_REQUESTED);

    expect(fetchLogoutRequest()).toEqual(expectedAction);
  });

  it('should create an success action for logout', () => {
    const expectedAction = action(AUTH_ACTION_TYPES.LOGOUT_SUCCESS);

    expect(fetchLogoutSuccess()).toEqual(expectedAction);
  });

  it('should create a failure action for logout', () => {
    const expectedAction = action(AUTH_ACTION_TYPES.LOGOUT_FAILURE, errorData);

    expect(fetchLogoutFailure(errorData)).toEqual(expectedAction);
  });
});
