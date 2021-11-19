import React from 'react';
import { GestureResponderEvent, StyleSheet, Text, TouchableOpacity } from 'react-native';

interface ButtonProps {
  children: React.ReactNode;
  onPress: (event: GestureResponderEvent) => void;
  disabled?: boolean;
}

export const Button = (props: ButtonProps) => {
  const { children, onPress, disabled } = props;
  const backgroundColor = disabled ? '#EFEFEF' : '#3485FF';

  return (
    <TouchableOpacity
      style={{ ...styles.wrapper, backgroundColor }}
      activeOpacity={disabled ? 1 : 0.8}
      onPress={disabled ? onPress : undefined}>
      {/** Typography 추가되면 Text를 Subtitle3로 변경 */}
      <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>{children}</Text>
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
