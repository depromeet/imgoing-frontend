import React, { useEffect } from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

const MainScreen = () => {
  return (
    <Wrapper>
      <Text>MAin</Text>
    </Wrapper>
  );
};

export default MainScreen;

const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
