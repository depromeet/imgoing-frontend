import React from 'react';
import { StyleSheet, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { SvgXml } from 'react-native-svg';

import { colors } from 'design-token';

interface Props extends TouchableOpacityProps {
  xml: string;
  width?: number;
  fill?: string;
}

export const SvgIcon = ({ width = 24, xml, fill = colors.black, style, ...restProps }: Props) => {
  return (
    <TouchableOpacity {...restProps} style={[styles.container, style]}>
      <SvgXml xml={xml} width={width} fill={fill} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {},
});
