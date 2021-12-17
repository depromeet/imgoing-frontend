import React from 'react';
import { StyleSheet, View } from 'react-native';

import { colors } from 'design-token';
import { Text } from 'ui';
import { SvgXml } from 'react-native-svg';
import { icon_arrowRight } from 'icons';

interface Props {
  text: string;
  time: number;
}

const Task = ({ text, time }: Props) => {
  return (
    <View style={styles.container}>
      <SvgXml xml={icon_arrowRight} style={{ marginRight: 8 }} width={14} />
      <Text fontType={'REGULAR_12'}>{text}</Text>
      <View style={styles.circleContainer}>
        <View style={styles.circle} />
      </View>
      <Text fontType={'BOLD_12'} color={colors.grayDark}>
        {time}
      </Text>
      <Text fontType={'REGULAR_12'} color={colors.grayDark}>
        분
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  circleContainer: {
    width: 15,
    height: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: 3,
    height: 3,
    borderRadius: 100,
    backgroundColor: colors.grayDark,
  },
});

export default Task;
