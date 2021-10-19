import { BASE_URL } from '@env';

const ENV = {
  apiUrl: __DEV__ ? 'localhost' : BASE_URL,
};

export default ENV;
