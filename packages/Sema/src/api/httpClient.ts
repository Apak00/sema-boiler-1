import axios, { AxiosInstance, AxiosRequestConfig, Method } from 'axios';
import { REQUEST_METHODS } from '@api/constants';
import { IRequestInterceptorProps, IResponseInterceptor } from '@api/interceptors/types';
import { requestInterceptor, responseInterceptor } from '@api/interceptors';
import configurations from '@configs/index';

interface IHttpClient extends AxiosInstance {}

const initHttpClient = (
  configs: AxiosRequestConfig = {},
  reqInterceptor?: IRequestInterceptorProps,
  resInterceptor?: IResponseInterceptor,
) => {
  const HttpClient: IHttpClient = axios.create(configs);

  if (requestInterceptor) {
    HttpClient.interceptors.request.use(reqInterceptor?.onFulfilled, reqInterceptor?.onRejected);
  }
  if (responseInterceptor) {
    HttpClient.interceptors.response.use(resInterceptor?.onFulfilled, resInterceptor?.onRejected);
  }

  return HttpClient;
};

const httpClient: AxiosInstance = initHttpClient(
  {
    baseURL: configurations.baseUrl || '',
  },
  requestInterceptor,
  responseInterceptor,
);

export default httpClient;

export const initAPI = (
  url: string,
  method?: string,
  data?: any,
  additionalConfigs?: AxiosRequestConfig,
  axiosInstance?: AxiosInstance,
) => {
  const requestMethod: string = method || REQUEST_METHODS.GET;

  const httpClientInstance: AxiosInstance = axiosInstance || httpClient;

  return httpClientInstance(url, {
    method: requestMethod as Method,
    data,
    ...additionalConfigs,
  });
};
