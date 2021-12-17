import React from 'react';
import { StyleSheet, View } from 'react-native';

import { colors } from 'design-token';
import { Text } from 'ui';

interface Props {
  active?: boolean;
  title: string;
  time: number;
}

const Task = ({ active = false, title, time }: Props) => {
  return (
    <View style={[styles.container, { ...(active && styles.active) }]}>
      <View style={styles.title}>
        <Text fontType={'BOLD_16'} color={active ? colors.white : colors.grayDark}>
          {title}
        </Text>
      </View>
      <View style={[styles.flexRow, styles.time]}>
        <View style={styles.flexRow}>
          <Text fontType={'BOLD_14'} color={active ? colors.white : colors.grayDark}>
            {Math.floor(time / 60)}
          </Text>
          <Text fontType={'REGULAR_14'} color={active ? colors.white : colors.grayDark}>
            분 일정
          </Text>
        </View>
        <View style={styles.flexRow}>
          {active && <Text>💣 </Text>}
          <Text fontType={'BOLD_14'} color={active ? colors.white : colors.black}>
            00:00:47
          </Text>
        </View>
      </View>
    </View>
  );
};

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
