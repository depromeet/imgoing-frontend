import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { SvgXml } from 'react-native-svg';
import { getStatusBarHeight } from 'react-native-status-bar-height';

import { icon_arrowLeft, icon_close } from 'assets/svg';
import { NavigatorParamList } from 'types/Route';
import { colors } from 'constant/index';
import { firstStep, planStepInfo } from 'constant/plan';
import { setStep } from 'modules/slices/stepOfAddingPlan';
import PlanEditScreen from 'screens/PlanEditScreen';
import PlanAddScreen from 'screens/PlanAddScreen';
import LoginScreen from 'screens/LoginScreen';
import AuthLoadingScreen from 'screens/AuthLoadingScreen';
import MainBottomTab from 'navigation/MainBottomTab';
import ModalContainer from 'components/Modal';

const Stack = createStackNavigator<NavigatorParamList>();

const Stacks = () => {
  const dispatch = useDispatch();
  const step = useSelector((state) => state.stepOfAddingPlan.step);

  return (
    <Stack.Navigator initialRouteName='AuthLoading'>
      <Stack.Screen
        name='AuthLoading'
        component={AuthLoadingScreen}
        options={{ headerShown: true }}
      />
      <Stack.Screen name='Main' component={MainBottomTab} options={{ headerShown: false }} />
      <Stack.Screen
        name='PlanEdit'
        component={PlanEditScreen}
        options={({ navigation }) => ({
          title: '편집하기',
          headerShown: true,
          headerTitleAlign: 'left',
          headerLeft: () => (
            <SvgXml
              xml={icon_arrowLeft}
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
      <Stack.Screen
        name='PlanAdd'
        component={PlanAddScreen}
        options={({ navigation }) => ({
          title: step ? planStepInfo[step].title : 'title',
          headerShown: true,
          headerTitleAlign: 'left',
          headerRight: () => {
            return (
              <SvgXml
                xml={icon_close}
                style={{ marginRight: 16 }}
                fill={colors.black}
                onPressOut={() => navigation.goBack()}
              />
            );
          },
          headerLeft: () => {
            return (
              <SvgXml
                xml={icon_arrowLeft}
                style={{ marginLeft: 16 }}
                fill={colors.black}
                onPressOut={() => {
                  step === (firstStep as string)
                    ? navigation.goBack()
                    : dispatch(setStep({ type: 'prev', userInput: {} }));
                }}
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
      <ModalContainer />
      <Stacks />
    </NavigationContainer>
  );
};
