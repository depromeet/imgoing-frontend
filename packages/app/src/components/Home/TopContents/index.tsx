import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

import { Plan } from 'types';
import Guide from './Guide';
import TaskProcess from './TaskProcess';
import { HomeTopContentsType } from '../type';
import RemainingTime from './RemainingTime';

interface Props {
  plan: Plan;
}

const TopContents = ({ plan }: Props) => {
  const [processTime, setProcessTime] = useState<{
    purpose: HomeTopContentsType;
    duration: 1 | 60;
    endTime: string;
  }>({
    purpose: 'oncoming',
    duration: 1,
    endTime: plan.arrivalAt,
  });

  const updateProcess = () => {
    const cur = new Date();
    if (cur < new Date(plan.startAt)) {
      setProcessTime({
        purpose: 'oncoming',
        duration: 60,
        endTime: plan.startAt,
      });
    } else if (cur < new Date(plan.departureAt)) {
      const intendedPlans = plan.tasks.find(
        (task) => new Date(task.startTime) <= new Date() && new Date() < new Date(task.endTime),
      );
      setProcessTime({
        purpose: 'process',
        duration: 1,
        endTime: intendedPlans?.endTime || plan.departureAt,
      });
    } else if (cur < new Date(plan.arrivalAt)) {
      setProcessTime({
        purpose: 'toArrival',
        duration: 60,
        endTime: plan.arrivalAt,
      });
    }
  };

  useEffect(updateProcess, []);

  return (
    <View>
      <RemainingTime process={processTime} updateProcess={updateProcess} />
      {processTime.purpose === 'process' ? (
        <TaskProcess tasks={plan.tasks} />
      ) : (
        <Guide type={processTime.purpose} />
      )}
    </View>
  );
};

export default TopContents;
