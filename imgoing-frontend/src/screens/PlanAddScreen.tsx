import React, { useState } from 'react';
import styled from 'styled-components/native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import ProgressBar from 'components/PlanAdd/ProgressBar';
import BottomButtonLayout from 'layouts/BottomButtonLayout';
import UserInput from 'components/PlanAdd/UserInput';
import { AddPlanContentsType } from 'types/index';
import { PLAN_STEP_TITLES } from 'constant/plan';
import { setStep } from 'modules/slices/stepOfAddingPlan';

const Wrapper = styled.View`
  flex: 1;
  background-color: white;
`;

const PlanAddScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const contents = {} as { [key: string]: AddPlanContentsType };
  const [inputText, setInputText] = useState<string>('');
  const step = useSelector((state) => state.stepOfAddingPlan.step);

  const onPress = () => {
    if (step === PLAN_STEP_TITLES.SET_TASK) {
      contents.setTask = {
        tasks: [],
      };
      navigation.goBack();
      return;
    }

    switch (step) {
      case PLAN_STEP_TITLES.SET_TITLE:
        contents.setTitle = {
          title: inputText,
        };
        break;
      case PLAN_STEP_TITLES.SET_DEPARTURE:
        contents.setDeparture = {
          name: '집',
          address: '강북',
          coordinate: {
            lat: -1,
            lng: -1,
          },
        };
        break;
      case PLAN_STEP_TITLES.SET_ARRIVAL:
        contents.setArrival = {
          name: '식당',
          address: '강남',
          coordinate: {
            lat: 0,
            lng: 0,
          },
        };
        break;
      case PLAN_STEP_TITLES.SET_ARRIVALTIME:
        contents.setArrivalTime = {
          date: '2021-09-09 12:12:12',
        };
        break;
      case PLAN_STEP_TITLES.SET_ITEM:
        contents.setItem = {
          title: inputText,
        };
        break;
      case PLAN_STEP_TITLES.SET_DETAILS:
        contents.setDetails = {
          items: inputText,
        };
        break;
    }
    dispatch(setStep({ type: 'next', userInput: contents }));
  };

  return (
    <Wrapper>
      <BottomButtonLayout text='다음' onPress={onPress}>
        {step && <ProgressBar step={step} />}
        <UserInput setInputText={setInputText} />
      </BottomButtonLayout>
    </Wrapper>
  );
};

export default PlanAddScreen;
