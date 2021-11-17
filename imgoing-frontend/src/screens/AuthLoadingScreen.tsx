import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';

import { NavigatorParams } from 'types/Route';
import { getBookmarkList } from 'modules/thunks/bookmark';
import { ResToPlan } from 'modules/thunks/plan';
import { request } from 'utils/request';
import { initPlan } from 'modules/slices/plan';

const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: white;
  justify-content: center;
`;

const AuthLoadingScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<NavigatorParams>();
  const [accessToken, setAccessToken] = useState<string | null>();

  const getUserToken = async () => {
    const token = await AsyncStorage.getItem('accessToken');
    setAccessToken(token);
  };

  useEffect(() => {
    getUserToken();
    SplashScreen.hideAsync();
  }, []);

  useEffect(() => {
    if (accessToken === undefined) return;
    if (accessToken === null) {
      navigation.navigate('Login');
      return;
    }

    (async () => {
      try {
        dispatch(getBookmarkList());
        const { data } = await request('plan');
        dispatch(initPlan(data.data.map(ResToPlan)));
        navigation.navigate('Main');
      } catch (error) {
        navigation.navigate('Login');
      }
    })();
  }, [accessToken]);

  return <Wrapper />;
};

export default AuthLoadingScreen;
