import React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

import { colors } from 'constant/index';
import { BodyTypo } from 'components/typography';

const progressBarWidth = Dimensions.get('window').width * 0.55;

const BarWrapper = styled.View`
  width: ${progressBarWidth}px;
  height: 10px;
  justify-content: center;
  border-radius: 100px;
  background-color: ${colors.grayLight};
  margin-top: 45px;
`;

const Point = styled.View<{ percent: number }>`
  width: 38px;
  height: 38px;
  border-radius: 100px;
  border: 2px solid #0045b0;
  left: ${({ percent }) => progressBarWidth * percent - 19}px;
  background-color: ${colors.white};
  justify-content: center;
  align-items: center;
`;

const Done = styled.View<{ percent: number }>`
  width: ${({ percent }) => progressBarWidth * percent}px;
  height: 10px;
  border-radius: 100px;
  background-color: ${colors.blue};
  position: absolute;
`;

const BarDone = styled.View`
  align-self: flex-end;
  height: 10px;
  width: 10px;
  border-radius: 100px;
  background-color: ${colors.grayMedium};
  position: absolute;
`;

const Bar = () => {
  const percent = 0.87;
  return (
    <BarWrapper>
      <Done percent={percent} />
      <BarDone />
      <Point percent={percent}>
        <BodyTypo>🚀</BodyTypo>
      </Point>
    </BarWrapper>
  );
};

export default Bar;
