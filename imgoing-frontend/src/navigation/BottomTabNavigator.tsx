import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabParamList } from '../types/BottomTabNavigator';
import { NavigationContainer } from '@react-navigation/native';

import SettingScreen from '../screens/SettingsScreen';
import MainScreen from '../screens/MainScreen';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

const Tabs = () => {
  return (
    <BottomTab.Navigator initialRouteName="Main">
      <BottomTab.Screen name="Main" component={MainScreen} />
      <BottomTab.Screen name="Settings" component={SettingScreen} />
    </BottomTab.Navigator>
  );
};

export default function BottomTabNavigator() {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}
