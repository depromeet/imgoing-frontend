import axios, { AxiosRequestConfig } from 'axios';
import ENV from 'environments';

const request = axios.create({
  baseURL: `${ENV.apiUrl}`,
  headers: {
    'x-access-token': ENV.accessToken,
  },
  timeout: 3000,
});

const planRequest = (config?: AxiosRequestConfig) =>
  request({
    ...config,
    url: `/plans${config && config.url ? config.url : ''}`,
  });

export { planRequest };
