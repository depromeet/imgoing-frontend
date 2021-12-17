import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Text } from './Text';
import { colors } from 'design-token';

interface NumberBadgeProps {
  type: NumberBadgeType;
  count: number;
}

type NumberBadgeType = 'alert' | 'normal' | 'reverse' | 'active';

const colorScheme = {
  alert: {
    background: colors.red,
    borderColor: colors.red,
    text: colors.white,
  },
  normal: {
    background: colors.grayDark,
    borderColor: colors.grayDark,
    text: colors.white,
  },
  reverse: {
    background: colors.white,
    borderColor: colors.grayMedium,
    text: colors.grayDark,
  },
  active: {
    background: colors.white,
    borderColor: colors.grayMedium,
    text: colors.black,
  },
};

export const NumberBadge = (props: NumberBadgeProps) => {
  const { type = 'normal', count } = props;
  const color = colorScheme[type];
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: color.background, borderColor: color.borderColor },
      ]}>
      <Text fontType='BOLD_10' color={color.text}>
        {count}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 15,
    height: 15,
    borderRadius: 15,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
