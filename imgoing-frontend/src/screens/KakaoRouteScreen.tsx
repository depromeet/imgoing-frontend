import { RouteProp } from '@react-navigation/native';
import React from 'react';
import WebView from 'react-native-webview';

const KakaoRouteScreen = ({ route }: { route: RouteProp }) => {
  const { dest_nm, dest_lat, dest_lng } = route.params;
  return (
    <>
      <WebView
        source={{ uri: `https://map.kakao.com/link/to/${dest_nm},${dest_lat},${dest_lng}` }}
      />
    </>
  );
};

export default KakaoRouteScreen;
