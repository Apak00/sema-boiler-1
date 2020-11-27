import { AxiosRequestConfig, AxiosResponse } from 'axios';

export interface IRequestInterceptorProps {
  onFulfilled?: ((value: AxiosRequestConfig) => AxiosRequestConfig | Promise<AxiosRequestConfig>) | undefined;
  onRejected?: (error: any) => any | undefined;
}

export interface IResponseInterceptor {
  onFulfilled?: ((value: AxiosResponse<any>) => AxiosResponse<any> | Promise<AxiosResponse<any>>) | undefined;
  onRejected?: (error: any) => any | undefined;
}
