import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/native';

import { TaskType } from 'types/index';
import { removeModal } from 'modules/slices/modal';
import RoundBottomModalLayout from 'layouts/RoundBottomModalLayout';
import WheelPicker from 'components/common/WheelPicker';
import Input from 'components/common/Input';
import { setStep } from 'modules/slices/stepOfAddingPlan';

const PickerContainer = styled.View`
  display: flex;
  height: 180px;
  flex-direction: row;
`;

const Picker = styled.View`
  flex: 1;
  padding: 0 16px;
`;

const getDurationArr = () => {
  const arr: string[] = [];
  for (let i = 1; i <= 24; i++) {
    arr.push(`${i * 5}분`);
  }
  return arr;
};

const Step1 = ({ setInputText }: { setInputText: (text: string) => void }) => {
  return <Input style={{ marginBottom: 10 }} onChangeText={setInputText} />;
};

const Step2 = ({
  onValueChange,
}: {
  onValueChange: (value: string | number, index: number) => void;
}) => {
  return (
    <PickerContainer>
      <Picker>
        <WheelPicker
          dataSource={getDurationArr()}
          onValueChange={onValueChange}
          selectedIndex={1}
        />
      </Picker>
    </PickerContainer>
  );
};

type LevelType = 1 | 2;

const step: {
  [key in LevelType]: {
    title: string;
    buttonName: string;
  };
} = {
  1: {
    title: '준비 항목 추가',
    buttonName: '소요 시간 입력하기',
  },
  2: {
    title: '소요 시간 입력',
    buttonName: '등록하기',
  },
};

const AddTaskModal = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.stepOfAddingPlan.userInputs.tasks);
  const [level, setLevel] = useState<LevelType>(1);
  const [input, setInputText] = useState<string>('');
  const [duration, setDuration] = useState<string | number>(getDurationArr()[1]);

  const task = useRef<TaskType>({
    id: -1,
    name: '',
    duration: 0,
    isBookmarked: false,
    notification: false,
  });

  const onPress = () => {
    switch (level) {
      case 1:
        task.current = {
          ...task.current,
          name: input,
        };
        setLevel(2);
        break;
      case 2:
        task.current = {
          ...task.current,
          duration: +duration.toString().split('분')[0],
        };

        dispatch(
          setStep({
            type: null,
            userInput: { tasks: tasks ? [...tasks, task.current] : [task.current] },
          }),
        );
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
      {level === 1 ? <Step1 setInputText={setInputText} /> : <Step2 onValueChange={setDuration} />}
    </RoundBottomModalLayout>
  );
};

export default AddTaskModal;
