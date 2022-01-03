import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Svg, { SvgXml } from 'react-native-svg';

import { MainRouterParamList } from 'types/Route';
import { HomeScreen, SettingsScreen, MyPlanScreen } from 'screens';
import { Text } from 'ui';
import { colors } from 'design-token';
import { icon_home, icon_setting, icon_toys } from 'icons';

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
            <Text fontType='REGULAR_11' color={focused ? colors.black : colors.grayDark}>
              홈
            </Text>
          ),
          tabBarIcon: ({ focused }) =>
            focused ? <SvgXml xml={icon_home.active} /> : <SvgXml xml={icon_home.inactive} />,
        }}
      />
      <BottomTab.Screen
        name='MyPlan'
        component={MyPlanScreen}
        options={{
          title: '약속',
          headerTitleAlign: 'left',
          tabBarLabel: ({ focused }) => (
            <Text fontType='REGULAR_11' color={focused ? colors.black : colors.grayDark}>
              약속
            </Text>
          ),
          tabBarIcon: ({ focused }) =>
            focused ? <SvgXml xml={icon_toys.active} /> : <SvgXml xml={icon_toys.inactive} />,
        }}
      />
      <BottomTab.Screen
        name='Settings'
        component={SettingsScreen}
        options={{
          title: '설정',
          headerTitleAlign: 'left',
          tabBarLabel: ({ focused }) => (
            <Text fontType='REGULAR_11' color={focused ? colors.black : colors.grayDark}>
              설정
            </Text>
          ),
          tabBarIcon: ({ focused }) =>
            focused ? <SvgXml xml={icon_setting.active} /> : <SvgXml xml={icon_setting.inactive} />,
        }}
      />
    </BottomTab.Navigator>
  );
};

export default MainNavigation;
