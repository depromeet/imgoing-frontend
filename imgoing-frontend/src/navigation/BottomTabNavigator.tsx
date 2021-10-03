import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabParamList } from '../types/BottomTabNavigator';
import { Feather } from "@expo/vector-icons";

import SettingScreen from '../screens/SettingsScreen';
import MainScreen from '../screens/MainScreen';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();


export default function BottomTabNavigator() {

  return (
    <BottomTab.Navigator
      initialRouteName="Main"
    >
      <BottomTab.Screen
        name="Main"
        component={MainScreen}
        // options={{
        //   tabBarIcon: () => <TabBarIcon name="home" color={color/>,
        //   tabBarLabel: "홈",
        // }}
      />
      <BottomTab.Screen
        name="Settings"
        component={SettingScreen}
        // options={{
        //   tabBarIcon: ({ color }) => <TabBarIcon name="hash" color={color} />,
        //   tabBarLabel: "",
        // }}
      />
    </BottomTab.Navigator>
  );
}

function TabBarIcon(props: {
  name: React.ComponentProps<typeof Feather>["name"];
  color: string;
}) {
  return <Feather size={20} style={{ marginBottom: -3 }} {...props} />;
}
