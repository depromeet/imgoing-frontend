import React from 'react';
import { SafeAreaView, View, StyleSheet, RefreshControl } from 'react-native';

import { help, notification } from 'icons';
import { SvgIcon } from 'ui';
import { colors } from 'design-token';
import { ScrollView } from 'react-native-gesture-handler';
import TopContents from 'components/Home/TopContents';

const MainScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <SvgIcon xml={notification} />
        <View style={{ width: 16 }} />
        <SvgIcon xml={help} />
      </View>
      <ScrollView
        style={styles.mainContainer}
        contentContainerStyle={{ paddingBottom: 120 }}
        refreshControl={<RefreshControl refreshing={false} />}>
        <TopContents
          remaining={{
            purpose: 'toArrival',
            timeRemaining: '2021-12-31 10:00:00',
          }}
        />
        <View style={styles.gap} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 20,
    height: 48,
  },
  mainContainer: {
    height: '100%',
    backgroundColor: colors.white,
  },
  gap: {
    backgroundColor: colors.grayBackground,
    height: 12,
  },
});

export default MainScreen;
