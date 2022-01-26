import React, { forwardRef, useEffect, useState } from 'react';
import { LayoutAnimation, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { Task as TaskType } from 'types';
import { ProcessState, TimeRemainingRefType } from '../type';
import Task, { ActiveTask } from './Task';

interface Props {
  tasks: TaskType[];
  process: ProcessState;
}

const TaskProcess = forwardRef(({ process, tasks }: Props, ref: TimeRemainingRefType) => {
  const [planedTask, setPlanedTask] = useState<TaskType[]>(
    tasks.filter((task) => new Date() < new Date(task.endTime)),
  );

  useEffect(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setPlanedTask(tasks.filter((task) => new Date() < new Date(task.endTime)));
  }, [process]);

  return (
    <ScrollView horizontal contentContainerStyle={styles.container}>
      {planedTask.map((task, idx) =>
        idx === 0 ? (
          <ActiveTask
            ref={ref}
            key={`${task.name}-${task.time}`}
            title={task.name}
            time={task.time}
          />
        ) : (
          <Task key={`${task.name}-${task.time}`} title={task.name} time={task.time} />
        ),
      )}
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
