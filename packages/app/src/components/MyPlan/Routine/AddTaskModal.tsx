import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { colors } from 'design-token';
import { Button, Input, InputChangeEventType, Text } from 'ui';
import WheelPicker from 'ui/src/components/WheelPicker';

const AddTaskModal = () => {
  type StepType = 'name' | 'duration';
  const [taskItem, setTaskItem] = useState({ name: '', time: '' });
  const [step, setStep] = useState<StepType>('name');
  const [data, setData] = useState({
    name: '',
    duration: '',
  });
  const onChangeHandler = (e: InputChangeEventType) => {
    setTaskItem({ ...taskItem, name: e.nativeEvent.text });
  };

  return (
    <View>
      {step === 'name' ? (
        <>
          <View style={styles.title}>
            <Text fontType={'BOLD_16'}>새로운 준비 항목</Text>
          </View>
          <View style={{ marginBottom: 47 }}>
            <Input placeholder='항목 이름을 입력해주세요' onChange={onChangeHandler} />
          </View>
          <Button
            onPress={() => {
              setData({ ...data, name: 'value' });
              setStep('duration');
            }}>
            <Text fontType='BOLD_16' color={colors.white}>
              소요시간 입력
            </Text>
          </Button>
        </>
      ) : (
        <>
          <View style={styles.pickerContainer}>
            <WheelPicker
              style={{ flex: 1 }}
              selectedIndex={0}
              dataSource={[
                '5분',
                '10분',
                '15분',
                '20분',
                '25분',
                '30분',
                '35분',
                '40분',
                '50분',
                '55분',
              ]}
              onValueChange={(value, index) => index}
            />
          </View>
          <Button
            onPress={() => {
              setData({ ...data, duration: 'value' });
            }}>
            <Text fontType='BOLD_16' color={colors.white}>
              등록
            </Text>
          </Button>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    paddingVertical: 18,
    marginLeft: 8,
    marginTop: 5,
    marginBottom: 6,
  },
  pickerContainer: {
    display: 'flex',
    height: 180,
    paddingHorizontal: 44,
  },
});

export default AddTaskModal;
