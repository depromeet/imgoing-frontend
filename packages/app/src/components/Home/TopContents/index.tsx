import React, { useState } from 'react';
import { View } from 'react-native';
import { add, format } from 'date-fns';

import { Plan } from 'types';
import Guide from './Guide';
import TaskProcess from './TaskProcess';
import { HomeTopContentsType } from '../type';
import { isInProgress } from 'utils';
import RemainingTime from './RemainingTime';

interface Props {
  plan: Plan;
}

const TopContents = ({ plan }: Props) => {
  const depertureTime = add(new Date(plan.startAt), {
    minutes: plan.tasks.reduce((acc, cur) => acc + cur.time, 0),
  });
  const [purpose, setPurpose] = useState<HomeTopContentsType>(
    isInProgress(plan.startAt, plan.arrivalAt)
      ? new Date() > depertureTime
        ? 'toArrival'
        : 'process'
      : 'oncoming',
  );

  return (
    <View>
      <RemainingTime
        purpose={'oncoming'}
        startTime={format(new Date(), 'yyyy-MM-dd HH:mm:ss')}
        endTime={'2022-01-22 01:48:00'}
        updateDuration={1}
        updatePurpose={() => {}}
      />
      {purpose === 'process' ? <TaskProcess tasks={plan.tasks} /> : <Guide type={purpose} />}
    </View>
  );
};

export default TopContents;
