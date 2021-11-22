import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainRouterParamList } from 'types/Route';

import { HomeScreen, SettingsScreen, MyPlanScreen } from 'screens';

const BottomTab = createBottomTabNavigator<MainRouterParamList>();

const MainNavigation = () => {
  return (
    <BottomTab.Navigator initialRouteName='Home'>
      <BottomTab.Screen name='Home' component={HomeScreen} />
      <BottomTab.Screen name='MyPlan' component={MyPlanScreen} />
      <BottomTab.Screen name='Settings' component={SettingsScreen} />
    </BottomTab.Navigator>
  );
};

export default MainNavigation;
