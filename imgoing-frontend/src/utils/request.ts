import axios, { AxiosRequestConfig } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ENV from 'environments';

const endpoints = {
  plan: '/plans',
  task: '/tasks',
  plantask: '/plantasks',
  routine: '/routines',
  auth: '/auth',
};
type pathType = keyof typeof endpoints;

const baseRequest = axios.create({
  baseURL: `${ENV.apiUrl}`,
  timeout: 3000,
});

baseRequest.interceptors.request.use(
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

const request = (endpoint: pathType, config?: AxiosRequestConfig) =>
  baseRequest({
    ...config,
    url: `${endpoints[endpoint]}${config && config.url ? config.url : ''}`,
  });

export { baseRequest, request };
