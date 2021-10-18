import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigatorParamList } from '../types/Route';
import { NavigationContainer } from '@react-navigation/native';
import { SvgXml } from 'react-native-svg';

import PlanEditScreen from '../screens/PlanEditScreen';
import { icon_arrowLeft } from '../../assets/svg';
import { colors } from '../constants';
import PlanAddScreen from '../screens/PlanAddScreen';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import MainBottomTab from './MainBottomTab';
import LoginScreen from '../screens/LoginScreen';

const Stack = createStackNavigator<NavigatorParamList>();

const Stacks = () => {
  return (
    <Stack.Navigator initialRouteName='AuthLoadingScreen'>
      <Stack.Screen
        name='AuthLoadingScreen'
        component={AuthLoadingScreen}
        options={{ headerShown: true }}
      />
      <Stack.Screen name='Main' component={MainBottomTab} options={{ headerShown: false }} />
      <Stack.Screen
        name='PlanEdit'
        component={PlanEditScreen}
        options={{
          title: '편집하기',
          headerShown: true,
          headerTitleAlign: 'left',
          headerLeft: () => <>{/*SVG 로드 설정 후 제작*/}</>,
          headerStyle: {
            shadowColor: 'transparent',
          },
        }}
      />
      <Stack.Screen
        name='PlanAdd'
        component={PlanAddScreen}
        options={{
          title: '',
          headerShown: true,
          headerTitleAlign: 'left',
          headerBackImage: () => <SvgXml xml={icon_arrowLeft} fill={colors.black} />,
          headerBackTitle: 'back',
          headerStyle: {
            shadowColor: 'transparent',
          },
        }}
      />
      <Stack.Screen
        name='Login'
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default () => {
  return (
    <NavigationContainer>
      <Stacks />
    </NavigationContainer>
  );
};
