import axios, { AxiosRequestConfig } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ENV from 'environments';

const request = axios.create({
  baseURL: `${ENV.apiUrl}`,
  timeout: 3000,
});

request.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('accessToken');
    if (token) {
      config.headers['x-access-token'] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

const planRequest = (config?: AxiosRequestConfig) =>
  request({
    ...config,
    url: `/plans${config && config.url ? config.url : ''}`,
  });

export { request, planRequest };
