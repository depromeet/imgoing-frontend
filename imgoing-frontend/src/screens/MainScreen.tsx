import React from 'react';
import styled from 'styled-components/native';
import HomeLanding from '../components/HomeLanding/HomeLanding';
import HomeMain from '../components/HomeMain/HomeMain';
import PLANS from '../mock/plan.mock';

const MainScreen = () => {
  return <Wrapper>{PLANS ? <HomeMain /> : <HomeLanding />}</Wrapper>;
};

export default MainScreen;

const Wrapper = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
`;
