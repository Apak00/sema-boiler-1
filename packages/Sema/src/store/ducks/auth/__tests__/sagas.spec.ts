import { expectSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';
import { fetchLoginRequest, fetchLoginSuccess } from '@store/ducks/auth/actions';
import authSaga from '@store/ducks/auth/sagas';
import { userData, loginParams } from '@store/ducks/auth/__mockData__/userData';
import { loginFetchResolver } from '@api/resolvers/auth';

describe('auth saga', () => {
  it('should handle successfully fetching user', () => {
    return (
      expectSaga(authSaga)
        .provide([[matchers.call.fn(loginFetchResolver), userData]])
        // Assert that the 'put' will eventually happen
        .put(fetchLoginSuccess(userData))
        // Dispatch any actions that the saga will 'take'
        .dispatch(fetchLoginRequest(loginParams))
        // Start the test, return a Promise
        .run()
    );
  });
});
