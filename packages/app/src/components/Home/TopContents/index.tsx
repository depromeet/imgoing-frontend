import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { add } from 'date-fns';

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

  const updateProcess = () => {};

  useEffect(() => {
    const today = new Date();
    if (today < new Date(plan.startAt)) {
      setProcessTime({
        purpose: 'oncoming',
        duration: 60,
        endTime: plan.startAt,
      });
    } else if (today < new Date(plan.departureAt)) {
      setProcessTime({
        purpose: 'process',
        duration: 1,
        endTime: '',
      });
    } else if (today < new Date(plan.arrivalAt)) {
      setProcessTime({
        purpose: 'toArrival',
        duration: 60,
        endTime: plan.arrivalAt,
      });
    }
  }, []);

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
