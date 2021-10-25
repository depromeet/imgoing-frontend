import React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

import { colors } from 'constant/index';
import { BodyTypo, CalloutTypo } from 'components/typography';

const progressBarWidth = Dimensions.get('window').width * 0.55;

const BarWrapper = styled.View`
  position: absolute;
  width: ${progressBarWidth}px;
  height: 10px;
  justify-content: center;
  border-radius: 100px;
  background-color: ${colors.grayLight};
  margin-top: 30px;
`;

const Done = styled.View<{ percentage: number }>`
  width: ${({ percentage }) => progressBarWidth * percentage}px;
  height: 10px;
  border-radius: 100px;
  background-color: ${colors.blue};
  position: absolute;
`;

const ProgressPoint = styled.View<{ percentage: number }>`
  display: flex;
  left: ${({ percentage }) => progressBarWidth * percentage - 19}px;
  flex-direction: column;
`;

const Sentence = styled(CalloutTypo)`
  height: 30px;
`;

const Point = styled.View`
  width: 38px;
  height: 38px;
  border-radius: 100px;
  border: 2px solid #0045b0;
  background-color: ${colors.white};
  justify-content: center;
  align-items: center;
`;

const BarDone = styled.View`
  align-self: flex-end;
  height: 10px;
  width: 10px;
  border-radius: 100px;
  background-color: ${colors.grayMedium};
  position: absolute;
`;

const Bar = (props: { percentage: number; sentence: string }) => {
  const { percentage, sentence } = props;

  return (
    <BarWrapper>
      <Done percentage={percentage} />
      <BarDone />
      <ProgressPoint percentage={percentage}>
        <Sentence color={'blue'} bold style={{ marginTop: 10 }}>
          {sentence}
        </Sentence>
        <Point>
          <BodyTypo>🚀</BodyTypo>
        </Point>
      </ProgressPoint>
    </BarWrapper>
  );
};

export default Bar;
