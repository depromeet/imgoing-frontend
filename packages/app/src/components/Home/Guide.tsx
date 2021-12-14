import React from 'react';
import { StyleSheet, View } from 'react-native';

import { colors } from 'design-token';
import { Text, TextBadge, TextBadgeProps } from 'ui';
import { GuideType } from './type';

interface Props {
  type: GuideType;
}

const guideText: { [key in GuideType]: { badge: TextBadgeProps; text: string } } = {
  oncoming: {
    badge: {
      text: '이달 현황',
      backgroundColor: 'blueLight',
    },
    text: '😂 이러다가 지각러가 된다구요!',
  },
  toArrival: {
    badge: {
      text: '가이드',
      backgroundColor: 'redLight',
      textColor: 'red',
    },
    text: '잘 도착하셨다면? 응답 필수😉',
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
