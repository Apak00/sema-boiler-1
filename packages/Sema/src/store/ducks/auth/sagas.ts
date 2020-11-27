import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import type { PayloadMetaAction, TypeConstant } from 'typesafe-actions';
import { guid } from '@adesso-modules/common/dist/helpers';
import { IUserLogin, IUserRaw } from '@store/ducks/auth/types';
import { AUTH_ACTION_TYPES } from '@store/ducks/auth/constants';
import {
  fetchLoginSuccess,
  fetchLoginFailure,
  fetchLogoutSuccess,
  fetchLogoutFailure,
} from '@store/ducks/auth/actions';
import { loginFetchResolver } from '@api/resolvers/auth';
import history from '@router/history';
import { PublicRoutes, SecureRoutes } from '@router/routes';
import { currentUserStorage } from '@utils/storage';
import { generateErrorMessage } from '@utils/generateErrorMessage';

/**
 * =================================================================================
 * === LOGIN SAGAS
 * =================================================================================
 */

/**
 * @desc Business logic of effect.
 */
function* handleLoginFetch(action: PayloadMetaAction<TypeConstant, IUserLogin, any>): Generator {
  try {
    if (action.payload) {
      const res: IUserRaw | any = yield call(loginFetchResolver, action.payload);
      yield put(fetchLoginSuccess(res));
      currentUserStorage.set(res);
      history.push(SecureRoutes.Dashboard.path);
    } else {
      yield put(fetchLoginSuccess({}));
    }
  } catch (err) {
    yield put(
      fetchLoginFailure({
        id: guid(),
        title: 'ERROR',
        description: generateErrorMessage(err),
        severity: 'error',
      }),
    );
  }
}

/**
 * @desc Watches every specified action and runs effect method and passes action args to it
 */
function* watchFetchLoginRequest(): Generator {
  yield takeEvery(AUTH_ACTION_TYPES.LOGIN_REQUESTED, handleLoginFetch);
}

/**
 * =================================================================================
 * === LOGOUT SAGAS
 * =================================================================================
 */
/**
 * @desc Business logic of effect.
 */
function* handleLogoutFetch(): Generator {
  try {
    yield put(fetchLogoutSuccess());
    history.push(PublicRoutes.Login.path);
    currentUserStorage.remove();
  } catch (err) {
    yield put(
      fetchLogoutFailure({
        id: guid(),
        title: 'ERROR',
        description: err instanceof Error ? err.stack! : 'An unknown error occured.',
        severity: 'error',
      }),
    );
  }
}

/**
 * @desc Watches every specified action and runs effect method and passes action args to it
 */
function* watchFetchLogoutRequest(): Generator {
  yield takeEvery(AUTH_ACTION_TYPES.LOGOUT_REQUESTED, handleLogoutFetch);
}

/**
 * =================================================================================
 * === ALL SAGAS
 * =================================================================================
 */

/**
 * @desc saga init, forks in effects, other sagas
 */
export default function* authSaga(): Generator {
  yield all([fork(watchFetchLoginRequest), fork(watchFetchLogoutRequest)]);
}
