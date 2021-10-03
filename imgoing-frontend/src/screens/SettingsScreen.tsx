import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

const SettingScreen = () => {
  return (
    <Wrapper>
      <Text>Settings</Text>
    </Wrapper>
  );
};

export default SettingScreen;

const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
