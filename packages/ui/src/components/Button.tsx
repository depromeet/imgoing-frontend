import React from 'react';
import { GestureResponderEvent, StyleSheet, TouchableOpacity, View } from 'react-native';

import { colors } from 'design-token';
import { Text } from './Text';

interface ButtonProps {
  children: React.ReactNode;
  onPress: (event: GestureResponderEvent) => void;
  disabled?: boolean;
  backgroundColor?: string;
  textColor?: string;
  leftIcon?: React.ReactNode;
}

export const Button = (props: ButtonProps) => {
  const {
    children,
    onPress,
    disabled,
    leftIcon,
    backgroundColor = colors.blue,
    textColor = colors.white,
  } = props;
  const _backgroundColor = disabled ? colors.grayMedium : backgroundColor;

  return (
    <TouchableOpacity
      style={{ ...styles.wrapper, backgroundColor: _backgroundColor }}
      activeOpacity={0.8}
      disabled={disabled}
      onPress={onPress}>
      {leftIcon && <View style={styles.leftIconView}>{leftIcon}</View>}
      <Text color={textColor} fontType='BOLD_16'>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: 52,
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftIconView: {
    marginRight: 10,
  },
});
