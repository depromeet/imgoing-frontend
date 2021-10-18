import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components/native';
import * as Font from 'expo-font';
import { Provider } from 'react-redux';

import Navigator from './src/navigation/Navigator';
import { colors } from './src/constants';
import { store } from './src/modules/store';
import ModalContainer from './src/components/Modal';

export default function App() {
  const [state, setState] = useState(false);
  const loadFonts = async () => {
    await Font.loadAsync({
      NotoSansKR: require('./assets/fonts/NotoSansKR-Regular.ttf'),
      Roboto: require('./assets/fonts/Roboto-Regular.ttf'),
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
