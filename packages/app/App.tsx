import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import { useFonts } from 'expo-font';

import store from 'modules/store';
import RootNavigation from 'navigation/RootNavigation';
import { colors } from 'design-token';

export default function App() {
  const [loaded] = useFonts({
    AppleSDGothicNeoB00: require('./src/assets/fonts/AppleSDGothicNeoB00.ttf'),
    AppleSDGothicNeoR00: require('./src/assets/fonts/AppleSDGothicNeoR00.ttf'),
  });

  if (!loaded) {
    // TODO 예외처리: 다른 대체 폰트로 사용
    return null;
  }

  return (
    <ThemeProvider theme={{ colors: colors }}>
      <Provider store={store}>
        <StatusBar style='auto' />
        <RootNavigation />
      </Provider>
    </ThemeProvider>
  );
}
