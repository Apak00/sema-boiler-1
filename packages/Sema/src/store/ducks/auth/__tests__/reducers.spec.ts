import {
  fetchLoginFailure,
  fetchLoginRequest,
  fetchLoginSuccess,
  fetchLogoutFailure,
  fetchLogoutRequest,
  fetchLogoutSuccess,
} from '@store/ducks/auth/actions';
import { authReducer, initialState } from '@store/ducks/auth/reducers';
import { errorData, loginParams, userData } from '@store/ducks/auth/__mockData__/userData';

describe('auth reducer', () => {
  it('should return initial state', () => {
    expect(authReducer(initialState, { type: 'no type', payload: {} } as any)).toEqual(initialState);
  });

  it('should handle fetching loggedin user', () => {
    expect(authReducer(initialState, fetchLoginRequest(loginParams))).toEqual({
      ...initialState,
    });
  });

  it('should handle user data successfully fetch user', () => {
    expect(authReducer(initialState, fetchLoginSuccess(userData))).toEqual({
      ...initialState,
    });
  });

  it('should handle login failure', () => {
    expect(authReducer(initialState, fetchLoginFailure(errorData))).toEqual({
      ...initialState,
    });
  });

  it('should handle logout request', () => {
    expect(authReducer(initialState, fetchLogoutRequest())).toEqual({
      ...initialState,
    });
  });

  it('should handle logout success', () => {
    expect(authReducer(initialState, fetchLogoutSuccess())).toEqual({
      ...initialState,
    });
  });

  it('should handle logout failure', () => {
    expect(authReducer(initialState, fetchLogoutFailure(errorData))).toEqual({
      ...initialState,
    });
  });
});
