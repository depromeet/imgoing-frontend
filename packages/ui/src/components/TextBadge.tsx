import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Text } from './Text';
import { ColorNames, colors } from 'design-token';

interface TextBadgeProps {
  text: string;
  backgroundColor?: ColorNames;
  textColor?: ColorNames;
}

export const TextBadge = (props: TextBadgeProps) => {
  const { text, backgroundColor = 'grayMedium', textColor = 'blue' } = props;
  return (
    <View style={{ ...styles.wrapper, backgroundColor: colors[backgroundColor] }}>
      {/** Typography 추가되면 Text를 Caption으로 변경 필요 */}
      <Text fontType='BOLD_11' color={colors[textColor]}>
        {text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingLeft: 6,
    paddingRight: 6,
    height: 22,
    display: 'flex',
    justifyContent: 'center',
    borderRadius: 4,
  },
});
