import React from 'react';
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { Task as TaskType } from 'types';
import Task from './Task';

interface Props {
  tasks: TaskType[];
}

const TaskProcess = ({ tasks }: Props) => {
  return (
    <ScrollView horizontal contentContainerStyle={styles.container}>
      {tasks.map((_, idx) => (
        <Task title={'물 마시기💧'} time={60} active={idx === 0} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 14,
  },
});

export default TaskProcess;
