import React from 'react';
import { StyleSheet, View } from 'react-native';

import { colors } from 'design-token';

export const Divider = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: 41,
    alignItems: 'center',
  },
  line: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    borderTopWidth: 1,
    borderTopColor: colors.grayMedium,
  },
});
