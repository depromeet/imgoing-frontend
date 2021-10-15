import React, { useEffect } from 'react';
import { Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styled from 'styled-components/native';
import { NavigationScreenProp } from 'react-navigation';

interface AuthLoadingProps {
  navigation: NavigationScreenProp<any, any>;
}

const AuthLoadingScreen = (props: AuthLoadingProps) => {
  const getUserToken = async () => {
    const token = await AsyncStorage.getItem('userToken');
    // props.navigation.navigate(token ? 'App' : 'Auth');
    props.navigation.navigate('Main');
  };

  useEffect(() => {
    getUserToken();
  }, []);

  return (
    <Wrapper>
      <Text>AuthLoading</Text>
    </Wrapper>
  );
};

export default AuthLoadingScreen;

const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
