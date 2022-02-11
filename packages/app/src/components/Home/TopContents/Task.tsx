import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { LayoutAnimation, StyleSheet, View, ViewProps } from 'react-native';

import { colors } from 'design-token';
import { Text } from 'ui';
import { TimeRemainingRefType } from '../type';

interface Props extends ViewProps {
  title: string;
  time: number;
}

const Task = ({ title, time, ...props }: Props) => {
  return (
    <View
      {...props}
      style={[styles.container]}
      onLayout={() => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      }}>
      <View style={styles.title}>
        <Text fontType={'BOLD_16'} color={colors.grayDark}>
          {title}
        </Text>
      </View>
      <View style={[styles.flexRow, styles.time]}>
        <View style={styles.flexRow}>
          <Text fontType={'BOLD_14'} color={colors.grayDark}>
            {time}
          </Text>
          <Text fontType={'REGULAR_14'} color={colors.grayDark}>
            분 일정
          </Text>
        </View>
        <View style={styles.flexRow}>
          <Text fontType={'BOLD_14'} color={colors.black}>
            {`${Math.floor(time / 60)
              .toString()
              .padStart(2, '0')}:${Math.floor(time % 60)
              .toString()
              .padStart(2, '0')}:00`}
          </Text>
        </View>
      </View>
    </View>
  );
};

export const ActiveTask = forwardRef(
  ({ title, time, ...props }: Props, ref: TimeRemainingRefType) => {
    const [timerTime, setTimerTime] = useState('');

    useImperativeHandle(ref, () => ({
      forceUpdate: (hour, minuites, seconds) => {
        setTimerTime(
          `${hour.toString().padStart(2, '0')}:${minuites.toString().padStart(2, '0')}:${seconds
            .toString()
            .padStart(2, '0')}`,
        );
      },
    }));

    return (
      <View
        {...props}
        style={[styles.container, styles.active]}
        onLayout={() => {
          LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        }}>
        <View style={styles.title}>
          <Text fontType={'BOLD_16'} color={colors.white}>
            {title}
          </Text>
        </View>
        <View style={[styles.flexRow, styles.time]}>
          <View style={styles.flexRow}>
            <Text fontType={'BOLD_14'} color={colors.white}>
              {time}
            </Text>
            <Text fontType={'REGULAR_14'} color={colors.white}>
              분 일정
            </Text>
          </View>
          <View style={styles.flexRow}>
            <Text>💣 </Text>
            <Text fontType={'BOLD_14'} color={colors.white}>
              {timerTime}
            </Text>
          </View>
        </View>
      </View>
    );
  },
);

const styles = StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    width: 188,
    borderRadius: 8,
    borderColor: colors.grayMedium,
    borderWidth: 2,
    backgroundColor: colors.white,
    paddingTop: 16,
    paddingBottom: 14,
    marginHorizontal: 6,
  },
  active: {
    backgroundColor: colors.blue,
    borderWidth: 0,
  },
  title: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginBottom: 18,
  },
  time: {
    justifyContent: 'space-between',
    marginHorizontal: 14,
  },
});

export default Task;
