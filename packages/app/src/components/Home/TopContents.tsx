import React from 'react';
import { StyleSheet, View } from 'react-native';

import { colors } from 'design-token';
import { Task } from 'types';
import { HomeTopContentsType } from './type';
import Guide from './Guide';
import TaskProcess from './TaskProcess';
import TimeRemaining from './TimeRemaining';

interface Props {
  remaining: {
    purpose: HomeTopContentsType;
    timeRemaining: string;
  };
  process?: {
    tasks: Task[];
  };
}

const TopContents = ({ remaining, process }: Props) => {
  return (
    <View>
      <View style={styles.component}>
        <TimeRemaining style={styles.timeRemaining} {...remaining} />
      </View>
      {remaining.purpose === 'oncoming' ? (
        <Guide type={'oncoming'} />
      ) : process && remaining.purpose === 'process' ? (
        <TaskProcess {...process} />
      ) : remaining.purpose === 'toArrival' ? (
        <Guide type={'toArrival'} />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  component: {
    backgroundColor: colors.white,
    paddingHorizontal: 20,
  },
  timeRemaining: {
    backgroundColor: colors.white,
    paddingHorizontal: 12,
    paddingTop: 20,
  },
  guide: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 13,
    borderWidth: 2,
    borderColor: colors.grayMedium,
  },
  guideText: {
    marginLeft: 12,
  },
});

export default TopContents;
