import React from 'react';
import { StyleSheet, View } from 'react-native';

import { colors } from 'design-token';

const RoutineManageScreen = () => {
  return <View style={styles.wrapper}></View>;
};

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flex: 1,
    backgroundColor: colors.white,
  },
});

export default RoutineManageScreen;
