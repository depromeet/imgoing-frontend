import React from 'react';
import { StyleSheet, View } from 'react-native';

import { colors } from 'design-token';
import { Button, Input, Text } from 'ui';

const AddTaskModal = () => {
  const addTaskData: any[] = [{}, {}, {}, {}, {}, {}];
  return (
    <View>
      <View style={{ marginBottom: 47 }}>
        <Input placeholder='항목 이름을 입력해주세요' onChange={() => {}} />
      </View>
      <Button onPress={() => {}}>
        <Text fontType='BOLD_16' color={colors.white}>
          소요시간 입력
        </Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({});

export default AddTaskModal;
