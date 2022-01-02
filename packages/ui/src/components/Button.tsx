import React from 'react';
import { GestureResponderEvent, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from 'design-token';
import { Text } from './Text';

interface ButtonProps {
  children: React.ReactNode;
  onPress: (event: GestureResponderEvent) => void;
  disabled?: boolean;
  backgroundColor?: string;
}

export const Button = (props: ButtonProps) => {
  const { children, onPress, disabled, backgroundColor = colors.blue } = props;

  return (
    <TouchableOpacity
      style={[{ ...styles.wrapper, backgroundColor }]}
      activeOpacity={disabled ? 1 : 0.8}
      onPress={disabled ? undefined : onPress}>
      <Text color={colors.white} fontType='BOLD_16'>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
});
