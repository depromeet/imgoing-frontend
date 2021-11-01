import React from 'react';
import { useDispatch } from 'react-redux';
import { Dimensions, View } from 'react-native';
import WebView from 'react-native-webview';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import AsyncStorage from '@react-native-async-storage/async-storage';

import ENV from 'environments';
import RoundBottomModalLayout from 'layouts/RoundBottomModalLayout';
import axios from 'axios';
import { request } from 'utils/request';
import { removeModal } from 'modules/slices/modal';

const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${ENV.kakaoClientId}&redirect_uri=${ENV.redirectUrl}`;

const WebViewModal = () => {
  const dispatch = useDispatch();

  const onMessage = async (e: any) => {
    const url: string = e.nativeEvent['url'];
    const [_, code]: string[] = url.split('code=');
    if (!code) {
      // TODO 에러 처리
      return;
    }
    dispatch(removeModal());

    const params: {
      [key: string]: string;
    } = {
      grant_type: 'authorization_code',
      client_id: ENV.kakaoClientId,
      redirect_uri: ENV.redirectUrl,
      code,
    };

    const {
      data: { access_token },
    } = await axios({
      method: 'post',
      url: 'https://kauth.kakao.com/oauth/token',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      data: Object.keys(params)
        .map((k) => encodeURI(k) + '=' + encodeURI(params[k]))
        .join('&'),
    });

    const {
      data: { data, status },
    } = await request({
      url: '/auth',
      method: 'post',
      data: {
        accessToken: access_token,
      },
    });

    if (status === 'OK') {
      await AsyncStorage.setItem('accessToken', data);
    } else {
      // TODO 에러 처리
    }
  };

  return (
    <RoundBottomModalLayout style={{ paddingLeft: 0, paddingRight: 0 }}>
      <View style={{ height: Dimensions.get('window').height - getStatusBarHeight() - 100 }}>
        <WebView
          source={{
            uri: kakaoAuthUrl,
          }}
          injectedJavaScript={`window.ReactNativeWebView.postMessage("...");`}
          onMessage={onMessage}
        />
      </View>
    </RoundBottomModalLayout>
  );
};

export default WebViewModal;
