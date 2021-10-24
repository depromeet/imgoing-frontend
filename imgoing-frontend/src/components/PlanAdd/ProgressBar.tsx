import React, { useState, useEffect } from 'react';
import { Dimensions } from 'react-native';
import { SvgXml } from 'react-native-svg';
import styled from 'styled-components/native';

import { AddingPlanStepsType } from 'types/index';
import Goal from 'assets/svg/Goal';
import { planStepInfo } from 'constant/plan';
import store from 'modules/store';
import Bar from './Bar';
import { CalloutTypo } from 'components/typography';

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
  const [step, setStepState] = useState<keyof AddingPlanStepsType | null>(
    store.getState().stepOfAddingPlan.step,
  );

  useEffect(() => {
    store.subscribe(() => {
      setStepState(store.getState().stepOfAddingPlan.step);
    });
  }, []);

  return (
    <Wrapper>
      <CalloutTypo color={'blue'} bold style={{ marginTop: 10 }}>
        {step && planStepInfo[step].progressbar.sentence}
      </CalloutTypo>
      <Bar percentage={step ? planStepInfo[step].progressbar.percentage : 0} />
      <GoalIcon>
        <SvgXml xml={Goal} />
      </GoalIcon>
    </Wrapper>
  );
};

export default ProgressBar;
