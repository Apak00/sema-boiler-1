import { AxiosRequestConfig, AxiosError } from 'axios';
import { IRequestInterceptorProps } from '@api/interceptors/types';
import { getAuthUser } from '@utils/index';
import { IUserRaw } from '@store/ducks/auth/types';

const requestInterceptor: IRequestInterceptorProps = {
  onFulfilled: (configs: AxiosRequestConfig) => {
    const currUser: IUserRaw | null = getAuthUser();
    const token:string | null = currUser?.token || null;

    const newConfigs: AxiosRequestConfig = {
      ...configs,
      headers: {
        ...configs.headers,
        ...(token ? { Authorization: `Bearer ${token}` } : null),
      },
    };

    return newConfigs;
  },
  onRejected: (error: AxiosError) => {
    return Promise.reject(error);
  },
};

export default requestInterceptor;
