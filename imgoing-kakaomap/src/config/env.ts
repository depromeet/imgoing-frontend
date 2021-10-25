import loadEnvironment from './loadEnviroment';

const env = {
  API_URL: loadEnvironment('API_URL'),
  KAKAO_MAPS_API_KEY: loadEnvironment('KAKAO_MAPS_API_KEY'),
};

export default env;
