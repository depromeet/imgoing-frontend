import React from 'react';
import styled from 'styled-components/native';

import ProgressBar from 'components/PlanAdd/ProgressBar';
import BottomButtonLayout from 'layouts/BottomButtonLayout';
import UserInput from 'components/PlanAdd/UserInput';

const Wrapper = styled.View`
  flex: 1;
  background-color: white;
`;

const PlanAddScreen = () => {
  return (
    <Wrapper>
      <BottomButtonLayout text='다음' onPress={() => {}}>
        <ProgressBar />
        <UserInput />
      </BottomButtonLayout>
    </Wrapper>
  );
};

export default PlanAddScreen;
