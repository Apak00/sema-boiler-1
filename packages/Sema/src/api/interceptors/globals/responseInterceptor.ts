import { AxiosError, AxiosResponse } from 'axios';
import { IResponseInterceptor } from '@api/interceptors/types';
import { HTTP_STATUSES } from '@api/constants';
import { PublicRoutes } from '@router/routes';
import history from '@router/history';

const responseInterceptor: IResponseInterceptor = {
  onFulfilled: (response: AxiosResponse) => {
    return response.data;
  },
  onRejected: (error: AxiosError) => {
    if (error.code === HTTP_STATUSES.UNAUTHORIZED) {
      history.push(PublicRoutes.Login.path);
    }
    if (error.response?.data) {
      return Promise.reject(error.response?.data);
    }
    return Promise.reject(error);
  },
};

export default responseInterceptor;
