import React from 'react';
import { StyleSheet, View } from 'react-native';

import { colors } from 'design-token';
import { Text, TextBadge, TextBadgeProps } from 'ui';
import { GuideType } from '../type';

interface Props {
  type: GuideType;
}

const guideText: { [key in GuideType]: { badge: TextBadgeProps; text: string } } = {
  oncoming: {
    badge: {
      text: 'ě´ëŹ ííŠ',
      backgroundColor: 'blueLight',
    },
    text: 'đ ě´ëŹë¤ę° ě§ę°ëŹę° ëë¤ęľŹě!',
  },
  toArrival: {
    badge: {
      text: 'ę°ě´ë',
      backgroundColor: 'redLight',
      textColor: 'red',
    },
    text: 'ě ëě°Šíě¨ë¤ëŠ´? ěëľ íěđ',
  },
};

const Guide = ({ type }: Props) => {
  return (
    <View style={styles.guide}>
      <TextBadge {...guideText[type].badge} />
      <View style={styles.guideText}>
        <Text fontType={'REGULAR_14'}>{guideText[type].text}</Text>
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
    margin: 20,
  },
  guideText: {
    marginLeft: 12,
  },
});

export default Guide;
