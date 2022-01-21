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
      {tasks.map((task, idx) => (
        <Task
          key={`${task.name}-${task.time}`}
          title={task.name}
          time={task.time}
          active={idx === 0}
        />
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
