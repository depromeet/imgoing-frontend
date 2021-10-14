import React, { useEffect, useState } from 'react';
// import GlobalProvider from './src/contexts/GlobalProvider';
import { ThemeProvider } from 'styled-components/native';
import { ThemeProvider } from 'styled-components/native'
import { colors } from './src/constants';
import * as Font from 'expo-font';
import { Text } from 'react-native';
import Navigator from './src/navigation/Navigator';


export default function App() {
  const [state, setState] = useState(false);
  const loadFonts = async () => {
    await Font.loadAsync({
      NotoSansKR: require('./assets/fonts/NotoSansKR-Regular.ttf'),
      Roboto: require('./assets/fonts/Roboto-Regular.ttf')
    })
    setState(true);
  }
  useEffect(() => {
    loadFonts();
  }, [])
  if(!state) return null;
  return (
    <ThemeProvider theme={{ colors: colors }}>
      <Navigator />
    </ThemeProvider>
  );
}
