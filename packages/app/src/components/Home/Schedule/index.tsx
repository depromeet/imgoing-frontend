import React from 'react';
import { StyleSheet, View } from 'react-native';

import { colors } from 'design-token';
import { Text } from 'ui';
import Plan from './Plan';

interface Props {
  plans: any[];
  active?: boolean;
}

const Schedule = ({ active = false, plans }: Props) => {
  return (
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
});

export default Schedule;
