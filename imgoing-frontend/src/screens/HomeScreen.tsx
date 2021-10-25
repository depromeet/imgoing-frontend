import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationScreenProp } from 'react-navigation';
import styled from 'styled-components/native';

import HomeLanding from 'components/HomeLanding';
import HomeMain from 'components/HomeMain';

interface MainProps {
  navigation: NavigationScreenProp<any, any>;
}

const Wrapper = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
`;

const MainScreen = (props: MainProps) => {
  const plan = useSelector((state) => state.plan);
  return <Wrapper>{plan.length > 0 ? <HomeMain /> : <HomeLanding />}</Wrapper>;
};

export default MainScreen;
