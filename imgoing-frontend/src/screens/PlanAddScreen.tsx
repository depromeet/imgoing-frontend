import React, { useRef, useState, useEffect } from 'react';
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
  const step = useSelector((state) => state.stepOfAddingPlan.step);
  const { departure, arrival, arrivalDateTime } = useSelector(
    (state) => state.stepOfAddingPlan.userInputs,
  );

  const [disabled, setDisabled] = useState<boolean>(true);

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
    if (step === PLAN_STEP_TITLES.SET_TITLE && type === 'title') {
      setDisabled(!text);
    }
  };

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
      case PLAN_STEP_TITLES.SET_ITEM:
        contents.items = inputText.current.items;
        break;
      case PLAN_STEP_TITLES.SET_DETAILS:
        contents.details = inputText.current.details;
        break;
    }
    dispatch(setStep({ type: 'next', userInput: contents }));
  };

  useEffect(() => {
    if (step === PLAN_STEP_TITLES.SET_TITLE) {
      setDisabled(!inputText.current.title);
    } else if (
      (step === PLAN_STEP_TITLES.SET_DEPARTURE && !(departure && departure.name)) ||
      (step === PLAN_STEP_TITLES.SET_ARRIVAL && !(arrival && arrival.name)) ||
      (step === PLAN_STEP_TITLES.SET_ARRIVALTIME && !arrivalDateTime)
    ) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [step, departure, arrival, arrivalDateTime, inputText.current.title]);

  return (
    <Wrapper>
      <BottomButtonLayout text='다음' onPress={onPress} disabled={disabled}>
        {step && <ProgressBar step={step} />}
        <UserInput setInputText={setInputText} />
      </BottomButtonLayout>
    </Wrapper>
  );
};

export default PlanAddScreen;
