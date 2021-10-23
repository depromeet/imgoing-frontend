import React, { useRef, useEffect } from 'react';
import styled from 'styled-components/native';
import { useDispatch } from 'react-redux';

import ProgressBar from 'components/PlanAdd/ProgressBar';
import BottomButtonLayout from 'layouts/BottomButtonLayout';
import UserInput from 'components/PlanAdd/UserInput';
import { resetStep, setStep } from 'modules/slices/stepOfAddingPlan';
import { NavigationScreenProp } from 'react-navigation';

interface PlanAddScreenProps {
  navigation: NavigationScreenProp<any, any>;
}

const Wrapper = styled.View`
  flex: 1;
  background-color: white;
`;

const PlanAddScreen = (props: PlanAddScreenProps) => {
  const contents = useRef<object>({});
  const dispatch = useDispatch();

  const setContents = (newContent: object) => {
    contents.current = newContent;
  };

  const onPress = () => {
    dispatch(setStep({ type: 'next', userInput: contents.current }));
  };

  useEffect(() => {
    dispatch(resetStep());
  }, []);

  return (
    <Wrapper>
      <BottomButtonLayout text='다음' onPress={onPress}>
        <ProgressBar />
        <UserInput navigation={props.navigation} setContents={setContents} />
      </BottomButtonLayout>
    </Wrapper>
  );
};

export default PlanAddScreen;
