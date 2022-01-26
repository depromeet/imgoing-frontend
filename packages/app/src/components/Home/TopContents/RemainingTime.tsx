import { colors } from 'design-token';
import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { differenceInCalendarDays } from 'date-fns';

import { Text } from 'ui';
import { HomeTopContentsType, ProcessState, TimeRemainingRefType } from '../type';
import { timeText } from 'utils/date';

interface Props {
  process: ProcessState;
}

const purposeText: {
  [key in HomeTopContentsType]: string;
} = {
  oncoming: '약속 준비 시간',
  process: '다음 준비 항목',
  toArrival: '도착지',
};

const RemainingTime = forwardRef(({ process }: Props, ref: TimeRemainingRefType) => {
  const [remainingTimeText, setRemainingTimeText] = useState('');

  useImperativeHandle(ref, () => ({
    forceUpdate: (hour, minuites, seconds) => {
      let remainingTimeText = '';
      if (process.duration === 60) {
        remainingTimeText = timeText`${hour && `${hour}시간 `}${minuites && `${minuites}분`}`;
      } else if (process.duration === 1) {
        remainingTimeText = timeText`${minuites && `${hour * 60 + minuites}분 `}${
          seconds && `${seconds}초`
        }`;
      }
      setRemainingTimeText(remainingTimeText);
    },
  }));

  useEffect(() => {
    const diffDays = differenceInCalendarDays(new Date(process.endTime), new Date());
    if (diffDays > 3) {
      setRemainingTimeText(`${diffDays}일`);
    } else if (diffDays === 2) {
      setRemainingTimeText('이틀');
    }
  }, []);

  return (
    <View style={styles.component}>
      <View style={styles.purposeText}>
        <Text fontType={'BOLD_14'} color={colors.grayDark}>
          {purposeText[process.purpose]}
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
  );
});

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
  textDecoration: {
    position: 'absolute',
    height: 16,
    backgroundColor: colors.blueLight,
    bottom: 0,
    left: 0,
    right: 0,
  },
  remaingTimeText: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
});

export default React.memo(RemainingTime);
