import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components/native';

import { removeModal } from 'modules/slices/modal';
import RoundBottomModalLayout from 'layouts/RoundBottomModalLayout';
import WheelPicker from 'components/common/WheelPicker';
import Input from 'components/common/Input';

const PickerContainer = styled.View`
  display: flex;
  height: 180px;
  flex-direction: row;
`;

const Picker = styled.View`
  flex: 1;
  padding: 0 16px;
`;

const Step1 = () => {
  return <Input style={{ marginBottom: 10 }} />;
};

const Step2 = () => {
  return (
    <PickerContainer>
      <Picker>
        <WheelPicker
          dataSource={[
            '오늘',
            '내일',
            '10월 3일(일)',
            '10월 3일(일)',
            '10월 3일(일)',
            '10월 3일(일)',
          ]}
        />
      </Picker>
    </PickerContainer>
  );
};

type LevelType = 1 | 2;

const step: {
  [key in LevelType]: {
    title: string;
    component: React.ReactNode;
    buttonName: string;
  };
} = {
  1: {
    title: '준비 항목 추가',
    component: <Step1 />,
    buttonName: '소요 시간 입력하기',
  },
  2: {
    title: '소요 시간 입력',
    component: <Step2 />,
    buttonName: '등록하기',
  },
};

const AddTaskModal = () => {
  const dispatch = useDispatch();
  const [level, setLevel] = useState<LevelType>(1);

  const onPress = () => {
    switch (level) {
      case 1:
        setLevel(2);
        break;
      case 2:
        dispatch(removeModal());
        break;
    }
  };

  return (
    <RoundBottomModalLayout
      title={step[level].title}
      button={{
        onPress,
        buttonName: step[level].buttonName,
      }}>
      {step[level].component}
    </RoundBottomModalLayout>
  );
};

export default AddTaskModal;
