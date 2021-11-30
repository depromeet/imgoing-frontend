import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { RootRouterParamList } from 'types/Route';
import { PlanInputScreen, LoginScreen, AuthLoadingScreen, WebviewScreen } from 'screens';
import MainNavigation from './MainNavigation';

const Root = createStackNavigator<RootRouterParamList>();

const Stacks = () => {
  return (
    <Root.Navigator initialRouteName='Main'>
      <Root.Screen name='AuthLoading' component={AuthLoadingScreen} />
      <Root.Screen name='Main' component={MainNavigation} options={{ headerShown: false }} />
      <Root.Screen name='PlanEdit' component={PlanInputScreen} />
      <Root.Screen name='Login' component={LoginScreen} />
      <Root.Screen name='Webview' component={WebviewScreen} />
    </Root.Navigator>
  );
};

export default () => {
  return (
    <NavigationContainer>
      <Stacks />
    </NavigationContainer>
  );
};
