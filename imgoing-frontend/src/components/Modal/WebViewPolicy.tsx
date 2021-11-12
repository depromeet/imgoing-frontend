import React from 'react';
import { Dimensions, View } from 'react-native';
import WebView from 'react-native-webview';
import { getStatusBarHeight } from 'react-native-status-bar-height';

import RoundBottomModalLayout from 'layouts/RoundBottomModalLayout';

const url = `https://depromeet.github.io/imgoing-frontend/privacy_policy.html`;

const WebViewPolicy = () => {
  return (
    <RoundBottomModalLayout style={{ paddingLeft: 0, paddingRight: 0 }}>
      <View style={{ height: Dimensions.get('window').height - getStatusBarHeight() - 100 }}>
        <WebView
          source={{
            uri: url,
          }}
        />
      </View>
    </RoundBottomModalLayout>
  );
};

export default WebViewPolicy;
