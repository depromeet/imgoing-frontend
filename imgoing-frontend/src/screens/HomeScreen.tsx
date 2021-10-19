import React from 'react';
import { NavigationScreenProp } from 'react-navigation';
import styled from 'styled-components/native';

import HomeLanding from 'components/HomeLanding';
import HomeMain from 'components/HomeMain';
import PLANS from 'mocks/plan.mock';

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
  return <Wrapper>{PLANS ? <HomeMain navigation={props.navigation} /> : <HomeLanding />}</Wrapper>;
};

export default MainScreen;
