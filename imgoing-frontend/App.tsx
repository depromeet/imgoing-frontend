import React from 'react';
import GlobalProvider from './src/contexts/GlobalProvider';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  return (
    <GlobalProvider>
      <AppNavigator />
    </GlobalProvider>
  );
}
