import { initAPI } from '@api/httpClient';
import { IUserLogin } from '@store/ducks/auth/types';
import { REQUEST_METHODS } from '@api/constants';
import { LOGIN } from '@api/endpoints/auth/constants';

export const loginFetch = (params: IUserLogin) => {
  return initAPI(LOGIN, REQUEST_METHODS.POST, params);
};
