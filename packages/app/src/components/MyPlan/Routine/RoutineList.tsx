import React from 'react';
import { ScrollView } from 'react-native';

import { Stack } from 'ui';
import RoutineItem from './RoutineItem';

const RoutineList = () => {
  const routineData = [{}, {}];
  return (
    <ScrollView>
      <Stack>
        {routineData.map(() => (
          <RoutineItem />
        ))}
      </Stack>
    </ScrollView>
  );
};

export default RoutineList;
