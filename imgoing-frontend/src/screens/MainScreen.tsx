import React, { useEffect } from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import CaptionTypo from '../components/typography/CaptionTypo';
import TitleTypo from '../components/typography/TitleTypo';

const MainScreen = () => {
  return (
    <Wrapper>
      <TitleTypo lang="en">Main</TitleTypo>
      <CaptionTypo lang="ko">이건한글</CaptionTypo>
    </Wrapper>
  );
};

export default MainScreen;

const Test = styled.Text`
  color: ${({theme})=>theme.colors.blue}
`
const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
