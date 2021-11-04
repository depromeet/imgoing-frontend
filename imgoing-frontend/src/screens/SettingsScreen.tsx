import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import RoundButton from 'components/common/RoundButton';
import React from 'react';
import styled from 'styled-components/native';
import { NavigatorParams } from 'types/Route';

const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const SettingScreen = () => {
  const navigation = useNavigation<NavigatorParams>();

  const onPress = async () => {
    await AsyncStorage.removeItem('accesstoken');
    navigation.navigate('Login');
  };

  return (
    <Wrapper>
      <RoundButton style={{ width: '70%', maxWidth: 300 }} onPress={onPress}>
        로그아웃
      </RoundButton>
    </Wrapper>
  );
};

export default SettingScreen;
