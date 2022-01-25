import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { LayoutAnimation, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { Task as TaskType } from 'types';
import Task from './Task';
import { TimeRemainingRefType } from './types';

interface Props {
  tasks: TaskType[];
}

const TaskProcess = forwardRef(({ tasks }: Props, ref: TimeRemainingRefType) => {
  const [clicked, setClicked] = useState<string[]>([]);

  useImperativeHandle(ref, () => ({
    forceUpdate: () => {
      console.log('TaskProcess');
    },
  }));

  return (
    <ScrollView horizontal contentContainerStyle={styles.container}>
      {tasks
        .filter((task) => new Date() < new Date(task.endTime))
        .map((task, idx) => (
          <Task
            key={`${task.name}-${task.time}`}
            title={task.name}
            time={task.time}
            active={idx === 0}
            onTouchEnd={() => {
              LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
              setClicked([...clicked, `${task.name}-${task.time}`]);
            }}
          />
        ))}
    </ScrollView>
  );
});

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 14,
  },
});

export default TaskProcess;
