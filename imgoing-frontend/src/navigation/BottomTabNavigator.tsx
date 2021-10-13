import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabParamList } from '../types/BottomTabNavigator';
import { NavigationContainer } from '@react-navigation/native';
import SettingScreen from '../screens/SettingsScreen';
import MainScreen from '../screens/MainScreen';
import EditScreen from '../screens/EditScreen';
import { createStackNavigator } from '@react-navigation/stack'

const BottomTab = createBottomTabNavigator<BottomTabParamList>();
const Stack = createStackNavigator();

const Stacks = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }}/>
      <Stack.Screen 
        name="Edit" 
        component={EditScreen} 
        options={{
          title: "편집하기",
          headerShown: true,
          headerTitleAlign: "left",
          headerLeft: () => (
            <>{/*SVG 로드 설정 후 제작*/}</>
          ),
          headerStyle: {
            shadowColor: 'transparent'
          }
        }} 
      />
    </Stack.Navigator>
  )
}

const Tabs = () => {
  return (
    <BottomTab.Navigator initialRouteName="Main">
      <BottomTab.Screen name="Main" component={MainScreen} options={{ headerShown: false }} />
      <BottomTab.Screen
        name="Settings"
        component={SettingScreen}
        options={{ headerShown: false }}
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
