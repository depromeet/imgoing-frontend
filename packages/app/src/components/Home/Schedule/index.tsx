import React from 'react';
import { StyleSheet, View } from 'react-native';

import { colors } from 'design-token';
import { Text } from 'ui';
import { Plan as PlanType } from 'types';
import Plan from './Plan';

interface Props {
  title: 'upcoming' | 'inProgress';
  plans: PlanType[];
  active?: boolean;
}

const Schedule = ({ active = false, plans, title }: Props) => {
  return (
    <>
      <View style={styles.gap} />
      <View style={styles.section}>
        <Text fontType={'BOLD_14'}>{title === 'upcoming' ? '다가오는 일정' : '진행중인 일정'}</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.date}>
          <Text fontType={'REGULAR_14'} color={colors.grayDark}>
            11월 20일 토요일
          </Text>
        </View>
        {plans.map((plan) => (
          <Plan active={active} />
        ))}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
  date: {
    marginHorizontal: 20,
    borderBottomColor: colors.grayBackground,
    borderBottomWidth: 1,
    paddingVertical: 12,
  },
  title: {
    paddingLeft: 50,
  },
  gap: {
    backgroundColor: colors.grayBackground,
    height: 12,
  },
  section: {
    paddingVertical: 23,
    paddingHorizontal: 20,
  },
});

export default Schedule;
