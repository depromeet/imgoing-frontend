import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface TextBadgeProps {
  text: string;
  backgroundColor?: string;
  textColor?: string;
}

export const TextBadge = (props: TextBadgeProps) => {
  const { text, backgroundColor = '#E2EEFF', textColor = '#3485FF' } = props;
  return (
    <View style={{ ...styles.wrapper, backgroundColor }}>
      {/** Typography 추가되면 Text를 Caption으로 변경 필요 */}
      <Text style={{ fontSize: 11, fontWeight: 'bold', color: textColor }}>{text}</Text>
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
