import React, { useRef } from 'react';
import styled from 'styled-components/native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import ProgressBar from 'components/PlanAdd/ProgressBar';
import BottomButtonLayout from 'layouts/BottomButtonLayout';
import UserInput from 'components/PlanAdd/UserInput';
import { AddingPlanUserInputsType, inputTextType } from 'types/index';
import { PLAN_STEP_TITLES } from 'constant/plan';
import { setStep } from 'modules/slices/stepOfAddingPlan';
import { addPlan } from 'modules/slices/plan';
import store from 'modules/store';

const Wrapper = styled.View`
  flex: 1;
  background-color: white;
`;

const PlanAddScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  let contents = {} as AddingPlanUserInputsType;
  const inputText = useRef<inputTextType>({
    title: '',
    items: '',
    details: '',
  });
  const setInputText = ({ type, text }: { type: keyof inputTextType; text: string }) => {
    inputText.current = {
      ...inputText.current,
      [type]: text,
    };
  };

  const step = useSelector((state) => state.stepOfAddingPlan.step);

  const onPress = () => {
    if (step === PLAN_STEP_TITLES.SET_TASK) {
      const data = store.getState().stepOfAddingPlan.userInputs;
      dispatch(
        addPlan({
          id: 100,
          name: data.title || '',
          arrival_at: data.arrivalDateTime || '',
          destination: {
            dest_name: data.departure!.name,
            dest_lat: data.departure?.coordinate.lat || 0,
            dest_lng: data.departure?.coordinate.lng || 0,
          },
          memo: data.details || '',
          items: data.items || '',
          tasks: data.tasks || [],
          isPinned: false,
        }),
      );
      navigation.goBack();
      return;
    }

    switch (step) {
      case PLAN_STEP_TITLES.SET_TITLE:
        contents.title = inputText.current.title;
        break;
      case PLAN_STEP_TITLES.SET_ARRIVALTIME:
        contents.arrivalDateTime = '2021-09-09 12:12:12';
        break;
      case PLAN_STEP_TITLES.SET_ITEM:
        contents.items = inputText.current.items;
        break;
      case PLAN_STEP_TITLES.SET_DETAILS:
        contents.details = inputText.current.details;
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
