import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components/native';
import * as Font from 'expo-font';
import { Provider } from 'react-redux';

import ModalContainer from 'components/Modal';
import Navigator from 'navigation/Navigator';
import { colors } from 'constants/';
import { store } from 'modules/store';

export default function App() {
  const [state, setState] = useState(false);
  const loadFonts = async () => {
    await Font.loadAsync({
      NotoSansKR: require('assets/fonts/NotoSansKR-Regular.ttf'),
      Roboto: require('assets/fonts/Roboto-Regular.ttf'),
    });
    setState(true);
  };

  useEffect(() => {
    loadFonts();
  }, []);

  if (!state) return null;

  return (
    <ThemeProvider theme={{ colors: colors }}>
      <Provider store={store}>
        <ModalContainer />
        <Navigator />
      </Provider>
    </ThemeProvider>
  );
}
