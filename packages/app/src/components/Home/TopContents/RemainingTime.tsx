import { colors } from 'design-token';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Text } from 'ui';
import { HomeTopContentsType } from '../type';
import { differenceInCalendarDays, differenceInSeconds } from 'date-fns';
import { mod } from 'utils';

interface Props {
  purpose: HomeTopContentsType;
  startTime: string;
  endTime: string;
  updateDuration: 1 | 60;
  updatePurpose: () => void;
}

const ONE_MINUTES_BY_SECONDS = 60;
const ONE_HOUR_BY_SECONDS = ONE_MINUTES_BY_SECONDS * 60;

const purposeText: {
  [key in HomeTopContentsType]: {
    name: string;
    convertTimeToText: (remainingTime: number) => string;
  };
} = {
  oncoming: {
    name: '약속 준비 시간',
    convertTimeToText: (time) => {
      return '';
    },
  },
  process: {
    name: '다음 준비 항목',
    convertTimeToText: (time) => {
      return '';
    },
  },
  toArrival: {
    name: '도착지',
    convertTimeToText: (time) => {
      return '';
    },
  },
};

const RemainingTime = ({ purpose, startTime, endTime, updateDuration, updatePurpose }: Props) => {
  let intervalId: NodeJS.Timer;
  const diffDays = differenceInCalendarDays(new Date(startTime), new Date());
  const [remainingTimeText, setRemainingTimeText] = useState('');

  const getRemainingTimeText = (
    startTime: string,
    endTime: string,
    callback: (time: string | null) => void,
    updateDuration: 1 | 60 = 1,
  ) => {
    const remainingTime = differenceInSeconds(new Date(endTime), new Date(startTime));
    const remianingMinuites = Math.floor(remainingTime / ONE_MINUTES_BY_SECONDS);
    let [hour, minuites, seconds] = [
      Math.floor(remianingMinuites / ONE_MINUTES_BY_SECONDS),
      remianingMinuites % ONE_MINUTES_BY_SECONDS,
      remainingTime % ONE_MINUTES_BY_SECONDS,
    ];

    if (intervalId) {
      clearInterval(intervalId);
    }
    intervalId = setInterval(() => {
      let remainingTimeText = '';
      if (updateDuration === 60) {
        if (minuites - 1 === 0 && hour === 0) return;
        minuites - 1 < 0 && hour--;
        minuites = mod(minuites - 1, ONE_MINUTES_BY_SECONDS);
        remainingTimeText = hour ? `${hour}시간 ${minuites}분` : `${minuites}분`;
      } else if (updateDuration === 1) {
        if (seconds - 1 === 0 && minuites === 0) return;
        seconds - 1 < 0 && minuites--;
        seconds = mod(seconds - 1, ONE_MINUTES_BY_SECONDS);
        remainingTimeText = minuites ? `${minuites}분 ${seconds}초` : `${seconds}초`;
      }

      callback(remainingTimeText);
    }, updateDuration * 1000);

    setTimeout(() => {
      clearInterval(intervalId);
      callback(null);
    }, remainingTime * 1000);
  };

  const updateRemainingTime = (time: string | null) => {
    if (!time) {
      const cur = new Date();
      // purpose 설정 혹은 getRemainingTimeText 함수 다시 호출
      return;
    }

    setRemainingTimeText(time);
  };

  // const remainingTimeToText = () => {
  //   if (diffDays > 3) return `${diffDays}일`;
  //   if (diffDays == 2) return '이틀';

  //   const remainingTime = differenceInSeconds(new Date(startAt), new Date());
  //   const remianingMinuites = remainingTime % ONE_HOUR_BY_SECONDS;
  //   const remianingSeconds = remianingMinuites % ONE_MINUTES_BY_SECONDS;

  //   return purpose === 'process'
  //     ? `${Math.floor(remainingTime / ONE_MINUTES_BY_SECONDS)}분 ${remianingSeconds}초`
  //     : `${Math.floor(remainingTime / ONE_HOUR_BY_SECONDS)}시간 ${Math.floor(
  //         remianingMinuites / ONE_MINUTES_BY_SECONDS,
  //       )}분`;
  // };

  // useInterval(
  //   () => {
  //     setRemainingTimeText(remainingTimeToText());
  //   },
  //   diffDays < 2 && purpose === 'oncoming'
  //     ? 1000 * ONE_MINUTES_BY_SECONDS
  //     : purpose === 'process'
  //     ? 1000
  //     : null,
  // );

  useEffect(() => {
    diffDays < 2 && getRemainingTimeText(startTime, endTime, updateRemainingTime, updateDuration);
  }, [purpose]);

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
          {purposeText[purpose].name}
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
