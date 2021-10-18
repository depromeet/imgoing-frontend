import React from 'react';
import { SvgXml } from 'react-native-svg';
import styled from 'styled-components/native';
import { NavigationScreenProp } from 'react-navigation';
import imgoingLogo from '../../assets/svg/imgoingLogo';
import kakaoLogin from '../../assets/svg/kakaoLogin';
import CaptionTypo from '../components/typography/CaptionTypo';
import SubheadlineTypo from '../components/typography/SubheadlineTypo';

interface LoginProps {
  navigation: NavigationScreenProp<any, any>;
}

const Wrapper = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.white};
`;

const TextView = styled.View`
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 20px;
`;

const Gap = styled.View`
  height: 308px;
`;

const KaKaoLoginButton = styled.TouchableOpacity`
  width: 100%;
`;

const LoginScreen = (props: LoginProps) => {
  const { navigation } = props;
  return (
    <Wrapper>
      <SvgXml xml={imgoingLogo} width="100%" height="46px" />
      <TextView>
        <SubheadlineTypo color={'black'}>나만의 준비 루틴을 설정하고,</SubheadlineTypo>
        <SubheadlineTypo color={'black'}>약속시간까지 늦지 않게!</SubheadlineTypo>
      </TextView>
      <Gap />
      <KaKaoLoginButton
        activeOpacity={0.7}
        onPress={() => {
          navigation.navigate('Main');
        }}>
        <SvgXml xml={kakaoLogin} width="100%" height="50px" />
      </KaKaoLoginButton>
      <TextView>
        <CaptionTypo color={'grayHeavy'}>계정 생성 시 암고잉의 개인정보 수집 방침 및</CaptionTypo>
        <CaptionTypo color={'grayHeavy'}>이용약관에 동의하게 됩니다.</CaptionTypo>
      </TextView>
    </Wrapper>
  );
};

export default LoginScreen;
