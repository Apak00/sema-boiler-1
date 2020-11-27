import { AxiosError, AxiosResponse } from 'axios';
import { IUserLogin, IUserRaw } from '@store/ducks/auth/types';
import { loginFetch } from '@api/endpoints/auth';

export const loginFetchResolver = ({ username, password }: IUserLogin) => {
  return loginFetch({ username, password })
    //TODO: APAK => I can do some mapping with response before saga'
    .then((res: AxiosResponse<IUserRaw>) => res)
    .catch((err: AxiosError) => {
      throw err;
    });
};
