import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import styled from 'styled-components/native';
import ENV from '../../environments';

const LoginScreen = () => {
  useEffect(() => {
    console.log('test');
    console.log(ENV.apiUrl);
  }, []);
  return (
    <Wrapper>
      <Text>LoginScreen</Text>
    </Wrapper>
  );
};

export default LoginScreen;

const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
