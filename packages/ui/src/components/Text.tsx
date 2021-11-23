import React from 'react';
import { StyleSheet, Text as RNText, TextProps as RNTextProps, View } from 'react-native';

import { colors, FONT, Typo, TypoType, scaleFont } from 'design-token';

interface TextProps extends RNTextProps {
  fontType?: TypoType;
  paragraph?: boolean;
  color?: string;
}

const textStyles = (typo: TypoType = 'REGULAR_16', paragraph = false) => ({
  fontFamily: FONT[Typo[typo].weight],
  fontSize: scaleFont(Typo[typo].size),
  ...(paragraph && { lineHeight: scaleFont(Typo[typo].size) * 1.5 }),
});

export const Text = ({ children, style, color, fontType, paragraph, ...restProps }: TextProps) => {
  return (
    <View>
      <RNText
        style={[textStyles(fontType, paragraph), styles.base, style, { ...(color && { color }) }]}
        {...restProps}>
        {children}
      </RNText>
    </View>
  );
};

const styles = StyleSheet.create({
  base: {
    color: colors.black,
  },
});
