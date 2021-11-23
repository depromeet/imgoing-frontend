import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { RootRouterParamList } from 'types/Route';
import { PlanInputScreen, LoginScreen, AuthLoadingScreen, WebviewScreen } from 'screens';
import { MainNavigation } from 'navigation';

const Root = createStackNavigator<RootRouterParamList>();

const Stacks = () => {
  return (
    <Root.Navigator initialRouteName='AuthLoading'>
      <Root.Screen name='AuthLoading' component={AuthLoadingScreen} />
      <Root.Screen name='Main' component={MainNavigation} />
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
