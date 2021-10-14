import * as React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabParamList } from '../types/BottomTabNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { SvgXml } from 'react-native-svg';

import SettingScreen from '../screens/SettingsScreen';
import MainScreen from '../screens/MainScreen';
import { icon_home, icon_homeDot, icon_menu, icon_menuDot } from '../../assets/svg';
import { colors } from '../constants';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

const Tabs = () => {
  return (
    <BottomTab.Navigator initialRouteName="Main">
      <BottomTab.Screen
        name="Main"
        component={MainScreen}
        options={{
          headerShown: false,
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? colors.black : colors.grayHeavy }}>홈</Text>
          ),
          tabBarIcon: ({ focused }) => (
            <SvgXml xml={icon_home} fill={focused ? colors.black : colors.grayHeavy} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={SettingScreen}
        options={{
          headerShown: false,
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? colors.black : colors.grayHeavy }}>설정</Text>
          ),
          tabBarIcon: ({ focused }) => (
            <SvgXml xml={icon_menuDot} fill={focused ? colors.black : colors.grayHeavy} />
          ),
        }}
      />
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
