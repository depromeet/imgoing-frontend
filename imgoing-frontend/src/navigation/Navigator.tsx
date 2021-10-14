import * as React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { BottomTabParamList } from '../types/BottomTabNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { SvgXml } from 'react-native-svg';

import SettingScreen from '../screens/SettingsScreen';
import EditScreen from '../screens/EditScreen';
import MainScreen from '../screens/MainScreen';
import { icon_arrowLeft, icon_homeDot, icon_menu } from '../../assets/svg';
import { colors } from '../constants';
import PlanAddScreen from '../screens/PlanAddScreen';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();
const Stack = createStackNavigator();

const Stacks = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
      <Stack.Screen
        name="Edit"
        component={EditScreen}
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
        name="PlanAdd"
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
    </Stack.Navigator>
  );
};

const Tabs = () => {
  return (
    <BottomTab.Navigator initialRouteName="Home">
      <BottomTab.Screen
        name="Home"
        component={MainScreen}
        options={{
          headerShown: false,
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? colors.black : colors.grayHeavy }}>홈</Text>
          ),
          tabBarIcon: ({ focused }) => (
            <SvgXml xml={icon_homeDot} fill={focused ? colors.black : colors.grayHeavy} />
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
            <SvgXml xml={icon_menu} fill={focused ? colors.black : colors.grayHeavy} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default function BottomTabNavigator() {
  return (
    <NavigationContainer>
      <Stacks />
    </NavigationContainer>
  );
}
