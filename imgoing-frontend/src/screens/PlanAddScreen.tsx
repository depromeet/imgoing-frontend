import React from 'react';
import styled from 'styled-components/native';
import { useDispatch, useSelector } from 'react-redux';

import ProgressBar from 'components/PlanAdd/ProgressBar';
import BottomButtonLayout from 'layouts/BottomButtonLayout';
import UserInput from 'components/PlanAdd/UserInput';
import { setStep } from 'modules/slices/stepOfAddingPlan';

const Wrapper = styled.View`
  flex: 1;
  background-color: white;
`;

const PlanAddScreen = () => {
  const stepOfAddingPlan = useSelector((state) => state.stepOfAddingPlan);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <BottomButtonLayout
        text='다음'
        onPress={() =>
          dispatch(setStep({ type: 'next', userInput: { setTitle: { title: 'title' } } }))
        }>
        <ProgressBar />
        <UserInput />
      </BottomButtonLayout>
    </Wrapper>
  );
};

export default PlanAddScreen;
