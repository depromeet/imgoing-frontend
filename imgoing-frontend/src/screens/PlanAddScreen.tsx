import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import ProgressBar from 'components/PlanAdd/ProgressBar';
import BottomButtonLayout from 'layouts/BottomButtonLayout';
import UserInput from 'components/PlanAdd/UserInput';
import { AddingPlanUserInputsType, inputTextType } from 'types/index';
import { PLAN_STEP_TITLES } from 'constant/plan';
import { resetStep, setStep } from 'modules/slices/stepOfAddingPlan';
import { addPlan } from 'modules/thunks/plan';
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
          id: -1,
          name: data.title || '',
          arrivalAt: data.arrivalDateTime || '',
          arrival: {
            name: data.arrival!.name,
            lat: data.arrival?.coordinate.lat || 0,
            lng: data.arrival?.coordinate.lng || 0,
          },
          departure: {
            name: data.departure!.name,
            lat: data.departure?.coordinate.lat || 0,
            lng: data.departure?.coordinate.lng || 0,
          },
          memo: data.details || '',
          items: data.items || '',
          tasks: data.tasks || [],
          isPinned: false,
        }),
      );
      dispatch(resetStep());
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
