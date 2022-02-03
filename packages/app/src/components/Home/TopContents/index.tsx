import React, { useEffect, useRef, useState } from 'react';
import { View } from 'react-native';
import { differenceInCalendarDays, differenceInSeconds } from 'date-fns';

import { mod } from 'utils';
import { toSeoulDate } from 'utils/date';
import { Plan } from 'types';
import { ProcessState, TimeRemainingRefFunc } from '../type';
import Guide from './Guide';
import TaskProcess from './TaskProcess';
import RemainingTime from './RemainingTime';
import { calcRemainingTime, ONE_MINUTES_BY_SECONDS } from './utils';

interface Props {
  plan: Plan;
}

const TopContents = ({ plan }: Props) => {
  const timeRemainingRef = useRef<TimeRemainingRefFunc>(null);
  const taskActiveProcessRef = useRef<TimeRemainingRefFunc>(null);

  const intervalId = useRef<NodeJS.Timer>();
  const timerId = useRef<NodeJS.Timer>();
  const [processTime, setProcessTime] = useState<ProcessState>({
    purpose: 'oncoming',
    duration: 60,
    endTime: plan.arrivalAt,
  });

  const getNewProcessState = () => {
    const cur = toSeoulDate(new Date());
    const newState: ProcessState = {
      purpose: 'oncoming',
      duration: 60,
      endTime: plan.startAt,
    };
    if (toSeoulDate(plan.startAt) < cur && cur < toSeoulDate(plan.departureAt)) {
      const intendedPlans = plan.tasks.find(
        (task) =>
          toSeoulDate(task.startTime) <= toSeoulDate(new Date()) &&
          toSeoulDate(new Date()) < toSeoulDate(task.endTime),
      );
      newState.purpose = 'process';
      newState.duration = 1;
      newState.endTime = intendedPlans?.endTime || plan.departureAt;
    } else if (toSeoulDate(plan.departureAt) < cur && cur < toSeoulDate(plan.arrivalAt)) {
      newState.purpose = 'toArrival';
      newState.endTime = plan.arrivalAt;
    }
    return newState;
  };

  const updateProcess = () => {
    const newState = getNewProcessState();
    setProcessTime(newState);

    const diffDays = differenceInCalendarDays(
      toSeoulDate(newState.endTime),
      toSeoulDate(new Date()),
    );
    if (diffDays >= 2) return;

    const remainingSeconds = differenceInSeconds(
      toSeoulDate(newState.endTime),
      toSeoulDate(new Date()),
    );

    let [hour, minuites, seconds] = calcRemainingTime(remainingSeconds);
    timeRemainingRef.current?.forceUpdate(hour, minuites, seconds);
    taskActiveProcessRef.current?.forceUpdate(hour, minuites, seconds);

    if (intervalId.current) clearInterval(intervalId.current);
    intervalId.current = setInterval(() => {
      if (seconds - newState.duration < 0) {
        if (minuites - 1 < 0) hour--;
        minuites = mod(minuites - 1, ONE_MINUTES_BY_SECONDS);
      }
      seconds = mod(seconds - newState.duration, ONE_MINUTES_BY_SECONDS);
      timeRemainingRef.current?.forceUpdate(hour, minuites, seconds);
      taskActiveProcessRef.current?.forceUpdate(hour, minuites, seconds);
    }, newState.duration * 1000);

    if (timerId.current) clearTimeout(timerId.current);
    timerId.current = setTimeout(() => {
      intervalId.current && clearInterval(intervalId.current);
      updateProcess();
    }, remainingSeconds * 1000);

    return () => {
      if (intervalId.current) clearInterval(intervalId.current);
      if (timerId.current) clearTimeout(timerId.current);
    };
  };

  useEffect(updateProcess, [plan]);

  return (
    <View>
      <RemainingTime process={processTime} ref={timeRemainingRef} />
      {processTime.purpose === 'process' ? (
        <TaskProcess process={processTime} tasks={plan.tasks} ref={taskActiveProcessRef} />
      ) : (
        <Guide type={processTime.purpose} />
      )}
    </View>
  );
};

export default TopContents;
