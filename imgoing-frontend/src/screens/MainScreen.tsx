import React from 'react';
import styled from 'styled-components/native';
import HomeLanding from '../components/HomeLanding';

const MainScreen = () => {
  return (
    <Wrapper>
      <HomeLanding />
    </Wrapper>
  );
};

export default MainScreen;

const Wrapper = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.white};
`;
