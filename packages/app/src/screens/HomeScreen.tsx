import React from 'react';
import { SafeAreaView, View, StyleSheet, RefreshControl } from 'react-native';

import { help, notification } from 'icons';
import { Button, Text, SvgIcon } from 'ui';
import { colors } from 'design-token';
import TimeRemaining from 'components/Home/TimeRemaining';
import { ScrollView } from 'react-native-gesture-handler';
import Guide from 'components/Home/Guide';

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
        refreshControl={<RefreshControl refreshing={false} />}>
        <View style={styles.component}>
          <TimeRemaining
            style={styles.timeRemaining}
            purpose={'출발 시간'}
            timeRemaining={'2021-12-31 10:00:00'}
          />
        </View>
        <View style={[styles.component, styles.guide]}>
          <Guide
            text={'😂 이러다가 지각러가 된다구요!'}
            badge={{
              text: '이달 현황',
            }}
          />
        </View>
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
  component: {
    backgroundColor: colors.white,
    paddingHorizontal: 20,
  },
  timeRemaining: {
    backgroundColor: colors.white,
    paddingHorizontal: 12,
    paddingTop: 20,
  },
  guide: {
    paddingVertical: 20,
  },
  gap: {
    backgroundColor: colors.grayBackground,
    height: 12,
  },
});

export default MainScreen;
