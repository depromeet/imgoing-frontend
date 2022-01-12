import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { colors } from 'design-token';
import { Button, Input, InputChangeEventType, SlideUpModal, Text } from 'ui';
import WheelPicker from 'ui/src/components/WheelPicker';

interface AddTaskModalProps {
  // setTaskData?;
}
const AddTaskModal = ({}: AddTaskModalProps) => {
  const [taskItem, setTaskItem] = useState({ name: '', time: '' });
  const onChangeHandler = (e: InputChangeEventType) => {
    setTaskItem({ ...taskItem, name: e.nativeEvent.text });
  };

  return (
    <View>
      <View style={{ marginBottom: 47 }}>
        <Input placeholder='항목 이름을 입력해주세요' onChange={onChangeHandler} />
      </View>

      <Button
        onPress={() => {
          // setDurationModalVisible(!isDurationModalVisible);
        }}>
        <Text fontType='BOLD_16' color={colors.white}>
          소요시간 입력
        </Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({});

export default AddTaskModal;
