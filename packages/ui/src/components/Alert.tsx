import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

import { colors } from 'design-token';
import { Text } from './Text';
import { icon_warning } from 'icons';

interface AlertProps {
  disabled?: boolean;
  text: string;
}

export const Alert = (props: AlertProps) => {
  const { disabled = false, text } = props;
  const icon = disabled ? icon_warning.disabled : icon_warning.default;

  return (
    <View
      style={{
        ...styles.wrapper,
        backgroundColor: disabled ? colors.grayMedium : colors.redLight,
      }}>
      <SvgXml xml={icon} fill={colors.black} />
      <Text
        style={{ paddingLeft: 14 }}
        fontType='REGULAR_14'
        color={disabled ? colors.grayDark : colors.red}>
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
