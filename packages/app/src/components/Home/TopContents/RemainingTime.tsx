import { colors } from 'design-token';
import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Text } from 'ui';
import { HomeTopContentsType } from '../type';
import { differenceInCalendarDays, differenceInSeconds } from 'date-fns';
import { mod } from 'utils';
import { timeText } from 'utils/date';

interface Props {
  process: {
    purpose: HomeTopContentsType;
    duration: 1 | 60;
    endTime: string;
  };
  updateProcess: () => void;
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

const RemainingTime = ({ process, updateProcess }: Props) => {
  let intervalId = useRef<NodeJS.Timer>();
  const diffDays = differenceInCalendarDays(new Date(process.endTime), new Date());
  const [remainingTimeText, setRemainingTimeText] = useState('');

  const getRemainingTimeText = (
    endTime: string,
    callback: (time: string | null) => void,
    duration: 1 | 60 = 1,
  ) => {
    const remainingTime = differenceInSeconds(new Date(endTime), new Date());
    const remianingMinuites = Math.floor(remainingTime / ONE_MINUTES_BY_SECONDS);
    let [hour, minuites, seconds] = [
      Math.floor(remianingMinuites / ONE_MINUTES_BY_SECONDS),
      remianingMinuites % ONE_MINUTES_BY_SECONDS,
      remainingTime % ONE_MINUTES_BY_SECONDS,
    ];

    const makeTimeText = () => {
      let remainingTimeText = '';
      if (duration === 60) {
        if (minuites - 1 === 0 && hour === 0) return;
        minuites - 1 < 0 && hour--;
        minuites = mod(minuites - 1, ONE_MINUTES_BY_SECONDS);
        remainingTimeText = timeText`${hour && `${hour}시간 `}${minuites && `${minuites}분`}`;
      } else if (duration === 1) {
        if (seconds - 1 === 0 && minuites === 0) return;
        seconds - 1 < 0 && minuites--;
        seconds = mod(seconds - 1, ONE_MINUTES_BY_SECONDS);
        remainingTimeText = timeText`${minuites && `${minuites}분 `}${seconds && `${seconds}초`}`;
      }
      callback(remainingTimeText);
    };

    makeTimeText();

    if (intervalId.current) {
      clearInterval(intervalId.current);
    }
    intervalId.current = setInterval(makeTimeText, duration * 1000);

    setTimeout(() => {
      intervalId.current && clearInterval(intervalId.current);
      callback(null);
    }, remainingTime * 1000);
  };

  const updateRemainingTime = (time: string | null) => {
    console.log('timupdateRemainingTime', time);
    if (!time) {
      updateProcess();
    } else {
      setRemainingTimeText(time);
    }
  };

  useEffect(() => {
    if (diffDays < 2) {
      getRemainingTimeText(process.endTime, updateRemainingTime, process.duration);
    }
  }, [process]);

  useEffect(() => {
    if (diffDays > 3) {
      setRemainingTimeText(`${diffDays}일`);
      return;
    }
    if (diffDays === 2) {
      setRemainingTimeText('이틀');
      return;
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
