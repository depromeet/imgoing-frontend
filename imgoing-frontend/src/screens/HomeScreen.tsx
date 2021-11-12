import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/native';
import * as SplashScreen from 'expo-splash-screen';
import HomeLanding from 'components/HomeLanding';
import HomeMain from 'components/HomeMain';
import { getPlanList } from 'modules/thunks/plan';

const Wrapper = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
`;

const MainScreen = () => {
  const dispatch = useDispatch();
  const plan = useSelector((state) => state.plan);
  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);
  return <Wrapper>{plan.length > 0 ? <HomeMain /> : <HomeLanding />}</Wrapper>;
};

export default MainScreen;
