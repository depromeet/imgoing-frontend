import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { SvgXml } from 'react-native-svg';
import { getStatusBarHeight } from 'react-native-status-bar-height';

import { icon_arrowLeft, icon_close } from 'assets/svg';
import { NavigatorParamList } from 'types/Route';
import { colors } from 'constant/index';
import PlanEditScreen from 'screens/PlanEditScreen';
import PlanAddScreen from 'screens/PlanAddScreen';
import LoginScreen from 'screens/LoginScreen';
import AuthLoadingScreen from 'screens/AuthLoadingScreen';
import MainBottomTab from 'navigation/MainBottomTab';
import { resetStep } from 'modules/slices/stepOfAddingPlan';

const Stack = createStackNavigator<NavigatorParamList>();

const Stacks = () => {
  const dispatch = useDispatch();
  const onHeaderRightPress = (navigation: any) => {
    return (
      <SvgXml
        xml={icon_close}
        style={{ marginRight: 16 }}
        fill={colors.black}
        onPressOut={() => navigation.goBack()}
      />
    );
  };

  useEffect(() => {
    dispatch(resetStep());
  }, [onHeaderRightPress]);

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
        options={({ navigation }) => ({
          title: '스케줄 등록',
          headerShown: true,
          headerTitleAlign: 'left',
          headerRight: () => onHeaderRightPress(navigation),
          headerLeft: () => {
            return (
              <SvgXml
                xml={icon_arrowLeft}
                style={{ marginLeft: 16 }}
                fill={colors.black}
                onPressOut={() => console.log('back')}
              />
            );
          },
          headerStyle: {
            height: getStatusBarHeight() + 54,
            shadowColor: 'transparent',
          },
        })}
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
