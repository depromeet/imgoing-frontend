import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MainRouterParamList } from 'types/Route';
import { HomeScreen, SettingsScreen, MyPlanScreen } from 'screens';

const BottomTab = createBottomTabNavigator<MainRouterParamList>();

const MainNavigation = () => {
  return (
    <BottomTab.Navigator initialRouteName='Home'>
      <BottomTab.Screen
        name='Home'
        component={HomeScreen}
        options={{ title: '홈', headerShown: false }}
      />
      <BottomTab.Screen
        name='MyPlan'
        component={MyPlanScreen}
        options={{ title: '약속', headerShown: false }}
      />
      <BottomTab.Screen
        name='Settings'
        component={SettingsScreen}
        options={{ title: '설정', headerShown: false }}
      />
    </BottomTab.Navigator>
  );
};

export default MainNavigation;
