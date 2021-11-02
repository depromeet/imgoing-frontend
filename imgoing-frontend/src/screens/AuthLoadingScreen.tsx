import React, { useEffect } from 'react';
import { Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { NavigatorParams } from 'types/Route';

const AuthLoadingScreen = () => {
  const navigation = useNavigation<NavigatorParams>();

  const getUserToken = async () => {
    const token = await AsyncStorage.getItem('accessToken');
    navigation.navigate(token ? 'Main' : 'Login');
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
