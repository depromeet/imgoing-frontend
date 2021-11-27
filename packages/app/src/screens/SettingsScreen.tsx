import { colors } from 'design-token';
import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

import { Text } from 'ui';

const SettingScreen = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <Text>SettingScreen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.white,
  },
});

export default SettingScreen;
