import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { SvgXml } from 'react-native-svg';

import {
  PlanInputScreen,
  LoginScreen,
  AuthLoadingScreen,
  WebviewScreen,
  AccountManageScreen,
  PolicyScreen,
  PastPlanScreen,
} from 'screens';
import { RootRouterParamList } from 'types/Route';
import { icon_back } from 'icons';
import { colors } from 'design-token';
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
      <Root.Screen
        name='AccountManage'
        component={AccountManageScreen}
        options={({ navigation }) => ({
          title: '카카오 연동 계정 관리',
          headerTitleAlign: 'left',
          headerLeft: () => (
            <SvgXml
              xml={icon_back}
              style={{ marginLeft: 16 }}
              fill={colors.black}
              onPressOut={() => navigation.goBack()}
            />
          ),
        })}
      />
      <Root.Screen
        name='Policy'
        component={PolicyScreen}
        options={({ navigation }) => ({
          title: '약관, 개인정보 관리',
          headerTitleAlign: 'left',
          headerLeft: () => (
            <SvgXml
              xml={icon_back}
              style={{ marginLeft: 16 }}
              fill={colors.black}
              onPressOut={() => navigation.goBack()}
            />
          ),
        })}
      />
      <Root.Screen
        name='PastPlan'
        component={PastPlanScreen}
        options={({ navigation }) => ({
          title: '지난 일정 보기',
          headerTitleAlign: 'left',
          headerLeft: () => (
            <SvgXml
              xml={icon_back}
              style={{ marginLeft: 16 }}
              fill={colors.black}
              onPressOut={() => navigation.goBack()}
            />
          ),
        })}
      />
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
