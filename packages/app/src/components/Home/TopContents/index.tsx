import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { add, differenceInCalendarDays, differenceInSeconds } from 'date-fns';

import { colors } from 'design-token';
import { Text } from 'ui';
import { Plan } from 'types';
import Guide from './Guide';
import TaskProcess from './TaskProcess';
import { HomeTopContentsType } from '../type';
import { isInProgress } from 'utils';
import useInterval from 'hooks/useInterval';

interface Props {
  plan: Plan;
}

const ONE_MINUTES_BY_SECONDS = 60;
const ONE_HOUR_BY_SECONDS = ONE_MINUTES_BY_SECONDS * 60;

const purposeText: {
  [key in HomeTopContentsType]: string;
} = {
  oncoming: '약속 준비 시간',
  process: '다음 준비 항목',
  toArrival: '도착지',
};

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

  const diffDays = differenceInCalendarDays(new Date(plan.startAt), new Date());
  const remainingTimeToText = () => {
    if (diffDays > 3) return `${diffDays}일`;
    if (diffDays == 2) return '이틀';

    const remainingTime = differenceInSeconds(new Date(plan.startAt), new Date());
    const remianingMinuites = remainingTime % ONE_HOUR_BY_SECONDS;
    const remianingSeconds = remianingMinuites % ONE_MINUTES_BY_SECONDS;

    return `${Math.floor(remainingTime / ONE_HOUR_BY_SECONDS)}시간 ${Math.floor(
      remianingMinuites / ONE_MINUTES_BY_SECONDS,
    )}분 ${remianingSeconds}초`;
  };
  const [remainingTimeText, setRemainingTimeText] = useState(remainingTimeToText());

  useInterval(
    () => {
      setRemainingTimeText(remainingTimeToText());
    },
    diffDays < 2 && purpose === 'oncoming'
      ? 1000 * ONE_MINUTES_BY_SECONDS
      : purpose === 'process'
      ? 1000
      : null,
  );

  return (
    <View>
      <View style={styles.component}>
        <View style={styles.purposeText}>
          <Text fontType={'BOLD_14'} color={colors.grayDark}>
            {purposeText[purpose]}
          </Text>
          <Text fontType={'REGULAR_14'} color={colors.grayDark}>
            {' '}
            까지
          </Text>
        </View>
        <View style={styles.remaingTimeText}>
          <View>
            <View style={styles.textDecoration} />
            <Text fontType={'BOLD_32'}>{remainingTimeText}</Text>
          </View>
          <Text fontType={'REGULAR_24'} color={colors.grayDark}>
            {' '}
            남음
          </Text>
        </View>
      </View>
      {purpose === 'process' ? <TaskProcess tasks={plan.tasks} /> : <Guide type={purpose} />}
    </View>
  );
};

const styles = StyleSheet.create({
  component: {
    backgroundColor: colors.white,
    paddingHorizontal: 20,
  },
  purposeText: {
    flexDirection: 'row',
    paddingTop: 4,
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
  remaingTimeText: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  textDecoration: {
    position: 'absolute',
    height: 16,
    backgroundColor: colors.blueLight,
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default TopContents;
