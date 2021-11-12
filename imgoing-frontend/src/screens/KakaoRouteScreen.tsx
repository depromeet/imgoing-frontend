import React from 'react';
import { RouteProp } from '@react-navigation/native';
import WebView from 'react-native-webview';

import { NavigatorParamList } from 'types/Route';

const kakaoMapUrl = 'https://map.kakao.com/link/map/';

type KakaoRouteScreenRouteProp = RouteProp<NavigatorParamList, 'KakaoRoute'>;

type Props = {
  route: KakaoRouteScreenRouteProp;
};

const KakaoRouteScreen = ({ route }: Props) => {
  const { dest_nm, dest_lat, dest_lng } = route.params;
  return (
    <>
      <WebView source={{ uri: `${kakaoMapUrl}${dest_nm},${dest_lat},${dest_lng}` }} />
    </>
  );
};

export default KakaoRouteScreen;
