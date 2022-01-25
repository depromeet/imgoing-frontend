import React, { useEffect, useRef, useState } from 'react';
import { View } from 'react-native';

import { Plan } from 'types';
import Guide from './Guide';
import TaskProcess from './TaskProcess';
import { HomeTopContentsType } from '../type';
import RemainingTime from './RemainingTime';
import { differenceInCalendarDays, differenceInSeconds } from 'date-fns';
import { TimeRemainingRefFunc } from './types';

interface Props {
  plan: Plan;
}

type ProcessState = {
  purpose: HomeTopContentsType;
  duration: 1 | 60;
  endTime: string;
};

const TopContents = ({ plan }: Props) => {
  const timeRemainingRef = useRef<TimeRemainingRefFunc>(null);
  const taskActiveProcessRef = useRef<TimeRemainingRefFunc>(null);

  let intervalId = useRef<NodeJS.Timer>();
  const [processTime, setProcessTime] = useState<ProcessState>({
    purpose: 'oncoming',
    duration: 60,
    endTime: plan.arrivalAt,
  });

  const updateProcess = () => {
    const cur = new Date();
    const newState: ProcessState = {
      purpose: 'oncoming',
      duration: 60,
      endTime: plan.startAt,
    };
    if (new Date(plan.startAt) < cur && cur < new Date(plan.departureAt)) {
      const intendedPlans = plan.tasks.find(
        (task) => new Date(task.startTime) <= new Date() && new Date() < new Date(task.endTime),
      );
      newState.purpose = 'process';
      newState.duration = 1;
      newState.endTime = intendedPlans?.endTime || plan.departureAt;
    } else if (cur < new Date(plan.arrivalAt)) {
      newState.purpose = 'toArrival';
      newState.endTime = plan.arrivalAt;
    }

    setProcessTime(newState);

    const remainingSeconds = differenceInSeconds(new Date(newState.endTime), new Date());
    const diffDays = differenceInCalendarDays(new Date(newState.endTime), new Date());
    if (diffDays >= 2) return;

    if (intervalId.current) {
      clearInterval(intervalId.current);
    }
    intervalId.current = setInterval(() => {
      // update component
      timeRemainingRef.current?.forceUpdate();
      taskActiveProcessRef.current?.forceUpdate();
    }, newState.duration * 1000);

    setTimeout(() => {
      intervalId.current && clearInterval(intervalId.current);
      updateProcess();
    }, remainingSeconds * 1000);
  };

  useEffect(updateProcess, []);

  return (
    <View>
      <RemainingTime process={processTime} ref={timeRemainingRef} />
      {processTime.purpose === 'process' ? (
        <TaskProcess tasks={plan.tasks} ref={taskActiveProcessRef} />
      ) : (
        <Guide type={processTime.purpose} />
      )}
    </View>
  );
};

export default TopContents;
