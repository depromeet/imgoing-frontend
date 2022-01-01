import React from 'react';
import { StyleSheet, View } from 'react-native';

import { colors } from 'design-token';
import { Text } from 'ui';
import { getHours, getMeridiem, getMinutes } from 'utils/date';

interface Props {
  active: boolean;
  title: string;
  time: string;
}

const Header = ({ active, title, time }: Props) => {
  return (
    <View style={styles.planHeader}>
      <View style={[styles.directionRow, styles.title]}>
        <View style={{ width: 50, alignItems: 'center' }}>
          <View
            style={[
              styles.activeCircle,
              { backgroundColor: active ? colors.red : colors.grayDark },
            ]}
          />
        </View>
        <Text paragraph>{title}</Text>
      </View>
      <View style={styles.datetime}>
        <Text fontType={'REGULAR_12'} color={colors.grayDark}>
          {`${getHours(time)}:${getMinutes(time)} / ${getMeridiem(time)}`}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  directionRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    paddingRight: 40,
  },
  planHeader: {
    paddingBottom: 12,
  },
  activeCircle: {
    borderRadius: 100,
    width: 10,
    height: 10,
  },
  datetime: {
    paddingLeft: 50,
    paddingTop: 4,
  },
});

export default Header;
