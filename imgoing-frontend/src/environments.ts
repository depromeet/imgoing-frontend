import { DEV_BASE_URL, PROD_BASE_URL, KAKAO_AUTH_REST_API_ID } from '@env';

const ENV = {
  apiUrl: __DEV__ ? DEV_BASE_URL : PROD_BASE_URL,
  kakaoClientId: KAKAO_AUTH_REST_API_ID,
  redirectUrl: `${__DEV__ ? DEV_BASE_URL : PROD_BASE_URL}/auth`,
};

export default ENV;
