import React from 'react';

import RoundBottomModalLayout from 'layouts/RoundBottomModalLayout';
import { Dimensions, View } from 'react-native';
import WebView from 'react-native-webview';
import ENV from 'environments';
import { useDispatch } from 'react-redux';
import { setWebViewMessage } from 'modules/slices/webviewMessage';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${ENV.kakaoClientId}&redirect_uri=${ENV.redirectUrl}`;

const WebViewModal = () => {
  const dispatch = useDispatch();

  const onMessage = (e: any) => {
    if (!e.nativeEvent.data) return;
    dispatch(setWebViewMessage(e.nativeEvent.data));
  };

  return (
    <RoundBottomModalLayout style={{ paddingLeft: 0, paddingRight: 0 }}>
      <View style={{ height: Dimensions.get('window').height - getStatusBarHeight() - 100 }}>
        <WebView
          source={{
            uri: kakaoAuthUrl,
          }}
          onMessage={onMessage}
        />
      </View>
    </RoundBottomModalLayout>
  );
};

export default WebViewModal;
