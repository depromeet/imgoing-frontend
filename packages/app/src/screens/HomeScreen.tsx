import React from 'react';
import { View, StyleSheet, RefreshControl } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { help, notification } from 'icons';
import { SvgIcon, Text } from 'ui';
import { colors } from 'design-token';
import { ScrollView } from 'react-native-gesture-handler';
import TopContents from 'components/Home/TopContents';
import Schedule from 'components/Home/Schedule';
import { useGetPlansQuery } from 'modules/services/plan';

const isInProgress = (start: string, end: string) => {
  const currentDate = new Date();
  return new Date(start) < currentDate && currentDate < new Date(end);
};

const HomeScreen = () => {
  const { data } = useGetPlansQuery();

  const planInProgress =
    data && isInProgress(data[0].startAt, data[0].arrivalAt) ? data[0] : undefined;
  const upcomingPlans = planInProgress ? data?.slice(1) : data;

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
        {planInProgress && <Schedule active plans={[planInProgress]} title='inProgress' />}
        {upcomingPlans && upcomingPlans.length && (
          <Schedule plans={upcomingPlans} title='upcoming' />
        )}
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
});

export default HomeScreen;
