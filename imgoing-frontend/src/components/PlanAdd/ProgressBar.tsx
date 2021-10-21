import React from 'react';
import { Dimensions } from 'react-native';
import { SvgXml } from 'react-native-svg';
import styled from 'styled-components/native';

import Goal from 'assets/svg/Goal';
import { CalloutTypo } from 'components/typography';
import Bar from './Bar';

const progressBarWidth = Dimensions.get('window').width * 0.55;

const Wrapper = styled.View`
  width: ${progressBarWidth + (34 - 5) * 2}px;
  height: 150px;
  align-items: center;
  align-self: center;
`;

const GoalIcon = styled.View`
  margin-top: 10px;
  align-self: flex-end;
`;

const ProgressBar = () => {
  return (
    <Wrapper>
      <CalloutTypo color={'blue'} bold style={{ marginTop: 10 }}>
        얼마 안 남았어요
      </CalloutTypo>
      <Bar />
      <GoalIcon>
        <SvgXml xml={Goal} />
      </GoalIcon>
    </Wrapper>
  );
};

export default ProgressBar;
