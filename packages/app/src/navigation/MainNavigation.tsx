import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MainRouterParamList } from 'types/Route';
import { HomeScreen, SettingsScreen, MyPlanScreen } from 'screens';
import { menu_bar } from 'icons';
import { colors } from 'design-token';
import { SvgXml } from 'react-native-svg';
import { Text } from 'ui';

const BottomTab = createBottomTabNavigator<MainRouterParamList>();

const MainNavigation = () => {
  return (
    <BottomTab.Navigator initialRouteName='Home'>
      <BottomTab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: ({ focused }) => (
            <Text fontType={'REGULAR_11'} color={focused ? colors.black : colors.grayDark}>
              홈
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <SvgXml
              xml={menu_bar.home}
              width={24}
              fill={focused ? colors.black : colors.grayDark}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name='MyPlan'
        component={MyPlanScreen}
        options={{
          headerTitleAlign: 'left',
          tabBarLabel: ({ focused }) => (
            <Text fontType={'REGULAR_11'} color={focused ? colors.black : colors.grayDark}>
              약속
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <SvgXml
              xml={menu_bar.promise}
              width={24}
              fill={focused ? colors.black : colors.grayDark}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name='Settings'
        component={SettingsScreen}
        options={{
          headerTitleAlign: 'left',
          tabBarLabel: ({ focused }) => (
            <Text fontType={'REGULAR_11'} color={focused ? colors.black : colors.grayDark}>
              설정
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <SvgXml
              xml={menu_bar.settings}
              width={24}
              fill={focused ? colors.black : colors.grayDark}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default MainNavigation;
