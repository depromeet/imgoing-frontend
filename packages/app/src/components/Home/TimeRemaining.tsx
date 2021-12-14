import { colors } from 'design-token';
import React from 'react';
import { StyleSheet, View, ViewProps, ViewStyle } from 'react-native';
import { Text, TextBadgeProps } from 'ui';

interface Props extends ViewProps {
  purpose?: string;
  timeRemaining: string;
}

const TimeRemaining = ({ style, purpose = '출발 시간', timeRemaining }: Props) => {
  return (
    <View style={style}>
      <View style={styles.purposeText}>
        <Text fontType={'BOLD_14'} color={colors.grayDark}>
          {purpose}
        </Text>
        <Text fontType={'REGULAR_14'} color={colors.grayDark}>
          {' '}
          까지
        </Text>
      </View>
      <View style={styles.remaingTimeText}>
        <View>
          <View style={styles.textDecoration} />
          <Text fontType={'BOLD_32'}>23시간 59분</Text>
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
    paddingBottom: 20,
  },
  purposeText: {
    flexDirection: 'row',
    paddingTop: 4,
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

export default TimeRemaining;
