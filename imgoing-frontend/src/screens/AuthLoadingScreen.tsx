import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
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
  }, []);

  useEffect(() => {
    if (accessToken === undefined) return;
    if (accessToken === null) {
      navigation.navigate('Login');
    } else {
      dispatch(getBookmarkList());
      (async () => {
        const { data } = await request('plan');
        dispatch(initPlan(data.data.map(ResToPlan)));
        navigation.navigate('Main');
      })();
    }
  }, [accessToken]);

  return <Wrapper />;
};

export default AuthLoadingScreen;
