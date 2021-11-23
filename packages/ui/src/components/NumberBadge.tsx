import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'ui';

import { colors } from 'design-token';

interface NumberBadgeProps {
  type: NumberBadgeType;
  count: number;
}

type NumberBadgeType = 'alert' | 'normal' | 'reverse';

const colorScheme = {
  alert: {
    background: colors.red,
    text: colors.white,
  },
  normal: {
    background: colors.grayDark,
    text: colors.white,
  },
  reverse: {
    background: colors.grayMedium,
    text: colors.grayDark,
  },
};

export const NumberBadge = (props: NumberBadgeProps) => {
  const { type = 'normal', count } = props;
  const color = colorScheme[type];
  return (
    <View style={[styles.container, { backgroundColor: color.background }]}>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
});
