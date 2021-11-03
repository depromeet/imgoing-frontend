import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

import { NavigatorParams } from 'types/Route';
import { getBookmarkList } from 'modules/thunks/bookmark';

const Wrapper = styled.View`
  flex: 1;
  align-items: center;
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
      // TODO : plan 조회
      dispatch(getBookmarkList());
      navigation.navigate('Main');
    }
  }, [accessToken]);

  return (
    <Wrapper>
      <Text>AuthLoading</Text>
    </Wrapper>
  );
};

export default AuthLoadingScreen;
