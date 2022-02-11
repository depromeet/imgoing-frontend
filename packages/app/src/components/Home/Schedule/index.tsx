import React from 'react';
import { StyleSheet, View } from 'react-native';

import { colors } from 'design-token';
import { Text } from 'ui';
import { Plan as PlanType } from 'types';
import Plan from './Plan';
import { getDate, getDay, getMonth } from 'utils/date';

interface Props {
  title: 'upcoming' | 'inProgress';
  plans: PlanType[];
  active?: boolean;
}

const Schedule = ({ active = false, plans, title }: Props) => {
  const schedulesByDate = plans.reduce<{ date: string; plans: PlanType[] }[]>((acc, cur) => {
    const curDate = cur.arrivalAt.substring(0, 10);
    const dateIndex = acc.map((data) => data.date).findIndex((date) => date === curDate);

    return dateIndex === -1
      ? [...acc, { date: curDate, plans: [cur] }]
      : [...acc.slice(0, dateIndex), { ...acc[dateIndex], plans: [...acc[dateIndex].plans, cur] }];
  }, []);

  return (
    <>
      <View style={styles.gap} />
      <View style={styles.section}>
        <Text fontType={'BOLD_14'}>{title === 'upcoming' ? '다가오는 일정' : '진행중인 일정'}</Text>
      </View>
      {schedulesByDate.map((schedule) => (
        <View key={schedule.date} style={styles.container}>
          <View style={styles.date}>
            <Text fontType={'REGULAR_14'} color={colors.grayDark}>
              {getMonth(schedule.date)}월 {getDate(schedule.date)}일 {getDay(schedule.date)}요일
            </Text>
          </View>
          {schedule.plans.map((plan) => (
            <Plan key={plan.id} active={active} plan={plan} />
          ))}
        </View>
      ))}
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
