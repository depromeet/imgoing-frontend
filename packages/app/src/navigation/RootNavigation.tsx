import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { RootRouterParamList } from 'types/Route';
import { PlanInputScreen, LoginScreen, AuthLoadingScreen, WebviewScreen } from 'screens';
import MainNavigation from './MainNavigation';
import PlanAddScreen from 'screens/PlanAddScreen';
import { SvgXml } from 'react-native-svg';
import { icon_arrowDown, icon_back } from 'icons';
import { colors } from 'design-token';
import PlanAddTaskScreen from 'screens/PlanAddTaskScreen';

const Root = createStackNavigator<RootRouterParamList>();

const Stacks = () => {
  return (
    <Root.Navigator initialRouteName='Main'>
      <Root.Screen name='AuthLoading' component={AuthLoadingScreen} />
      <Root.Screen name='Main' component={MainNavigation} options={{ headerShown: false }} />
      <Root.Screen
        name='PlanAdd'
        component={PlanAddScreen}
        options={({ navigation }) => ({
          title: '일정 등록',
          headerShown: true,
          headerTitleAlign: 'left',
          headerLeft: () => (
            <SvgXml
              xml={icon_back}
              style={{ marginLeft: 16 }}
              fill={colors.black}
              onPressOut={() => navigation.goBack()}
            />
          ),
          headerStyle: {
            shadowColor: 'transparent',
          },
        })}
      />
      <Root.Screen
        name='PlanAddTask'
        component={PlanAddTaskScreen}
        options={({ navigation }) => ({
          title: '일정 등록',
          headerShown: true,
          headerTitleAlign: 'left',
          headerLeft: () => (
            <SvgXml
              xml={icon_back}
              style={{ marginLeft: 16 }}
              fill={colors.black}
              onPressOut={() => navigation.goBack()}
            />
          ),
          headerStyle: {
            shadowColor: 'transparent',
          },
        })}
      />
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
