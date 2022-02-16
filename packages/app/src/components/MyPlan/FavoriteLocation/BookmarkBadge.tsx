import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Text } from 'ui';
import { colors } from 'design-token';
import { SvgXml } from 'react-native-svg';
import { star } from 'icons';

function BookmarkBadge() {
  return (
    <View style={styles.wrapper}>
      <Text fontType='BOLD_11'>★ 즐겨찾기</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 100,
    backgroundColor: colors.grayBackground,
    width: 69,
    height: 22,
    paddingVertical: 4,
    paddingHorizontal: 8,
    marginRight: 14,
  },
});

export default BookmarkBadge;
