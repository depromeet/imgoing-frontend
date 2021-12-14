import { colors } from 'design-token';
import React from 'react';
import { StyleSheet, View, ViewProps, ViewStyle } from 'react-native';
import { Text, TextBadge, TextBadgeProps } from 'ui';

interface Props extends ViewProps {
  text: string;
  badge: TextBadgeProps;
}

const Guide = ({ style, text, badge }: Props) => {
  return (
    <View style={style}>
      <View style={styles.guide}>
        <TextBadge {...badge} />
        <View style={styles.guideText}>
          <Text fontType={'REGULAR_14'}>{text}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  guide: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 13,
    borderWidth: 2,
    borderColor: colors.grayMedium,
  },
  guideText: {
    marginLeft: 12,
  },
});

export default Guide;
