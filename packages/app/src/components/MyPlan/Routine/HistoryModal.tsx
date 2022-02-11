import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { colors } from 'design-token';
import { Button, Text } from 'ui';
import TaskItem from './TaskItem';

const HistoryModal = () => {
  const historyData: any[] = Array.from({ length: 5 });
  return (
    <View>
      <ScrollView style={{ paddingBottom: 15 }}>
        {historyData.map((item, i) => (
          <TaskItem title='물 마시기' duration={5} type={'add'} key={i} />
        ))}
      </ScrollView>
      <Button onPress={() => {}}>
        <Text fontType='BOLD_16' color={colors.white}>
          등록
        </Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({});

export default HistoryModal;
