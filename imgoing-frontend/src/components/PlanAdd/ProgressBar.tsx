import React, { useState, useEffect } from 'react';
import { Dimensions } from 'react-native';
import { SvgXml } from 'react-native-svg';
import styled from 'styled-components/native';

import { AddingPlanSteps } from 'types/index';
import Goal from 'assets/svg/Goal';
import { planStepInfo } from 'constant/plan';
import store from 'modules/store';
import { BodyTypo, CalloutTypo } from 'components/typography';
import { colors } from 'constant/index';

const progressBarWidth = Dimensions.get('window').width * 0.55;
const [SentenceHeight, SentenceMargin, PointHeight, BarHeight, GoalWidth] = [25, 8, 38, 10, 68];
const [BarTop] = [BarHeight + SentenceHeight + SentenceMargin + (PointHeight - BarHeight) / 2];

const Wrapper = styled.View`
  width: 100%;
  height: 160px;
  align-items: center;
  align-self: center;
`;

const BarWrapper = styled.View`
  position: absolute;
  width: ${progressBarWidth + GoalWidth - BarHeight}px;
  height: 120px;
  justify-content: center;
  margin-top: 30px;
`;

const Bar = styled.View`
  position: absolute;
  top: ${BarTop}px;
  left: ${(GoalWidth - BarHeight) / 2}px;
  width: ${progressBarWidth}px;
  height: ${BarHeight}px;
  border-radius: 100px;
  background-color: ${colors.grayLight};
`;

const Done = styled.View<{ percentage: number }>`
  position: absolute;
  width: ${({ percentage }) => progressBarWidth * percentage}px;
  height: ${BarHeight}px;
  border-radius: 100px;
  background-color: ${colors.blue};
`;

const DonePoint = styled.View`
  position: absolute;
  right: 0;
  height: ${BarHeight}px;
  width: ${BarHeight}px;
  border-radius: 100px;
  background-color: ${colors.grayMedium};
`;

const ProgressPoint = styled.View<{ percentage: number }>`
  position: absolute;
  top: 0px;
  left: ${({ percentage }) =>
    progressBarWidth * percentage - PointHeight / 2 + (GoalWidth + BarHeight) / 2}px;
`;

const Sentence = styled(CalloutTypo)`
  position: relative;
  width: 400px;
  left: ${-200 + PointHeight / 2}px;
  height: ${SentenceHeight}px;
  margin-bottom: ${SentenceMargin}px;
`;

const Point = styled.View`
  width: ${PointHeight}px;
  height: ${PointHeight}px;
  border-radius: 100px;
  border: 2px solid #0045b0;
  background-color: ${colors.white};
  justify-content: center;
  align-items: center;
`;

const GoalIcon = styled.View`
  position: absolute;
  margin-top: 10px;
  bottom: 0;
  right: 0;
`;

const ProgressBar = ({ step }: { step: keyof AddingPlanSteps }) => {
  const { percentage, sentence } = planStepInfo[step].progressbar;

  return (
    <Wrapper>
      <BarWrapper>
        <Bar>
          <Done percentage={percentage} />
          <DonePoint />
        </Bar>
        <ProgressPoint percentage={percentage}>
          <Sentence color={'blue'} bold style={{ marginTop: 10, textAlign: 'center' }}>
            {sentence}
          </Sentence>
          <Point>
            <BodyTypo>🚀</BodyTypo>
          </Point>
        </ProgressPoint>
        <GoalIcon>
          <SvgXml xml={Goal} />
        </GoalIcon>
      </BarWrapper>
    </Wrapper>
  );
};

export default ProgressBar;
