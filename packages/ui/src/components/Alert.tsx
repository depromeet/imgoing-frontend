import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from 'design-token';
import { Text } from './Text';

interface AlertProps {
  disabled?: boolean;
  text: string;
}

export const Alert = (props: AlertProps) => {
  const { disabled = false, text } = props;
  return (
    <View
      style={{
        ...styles.wrapper,
        backgroundColor: disabled ? colors.grayMedium : colors.redLight,
      }}>
      <Text fontType='REGULAR_14' color={disabled ? colors.grayDark : colors.red}>
        {text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: 48,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    paddingLeft: 16,
  },
});
