import React, { useEffect, useState } from 'react';
import { View, StyleSheet, RefreshControl } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { differenceInSeconds } from 'date-fns';

import { SvgIcon, Text } from 'ui';
import { colors } from 'design-token';
import { Plan } from 'types';
import { isInProgress } from 'utils';
import { toSeoulDate } from 'utils/date';
import { help, notification } from 'icons';
import TopContents from 'components/Home/TopContents';
import Schedule from 'components/Home/Schedule';
import { useGetPlansQuery } from 'modules/services/plan';

const HomeScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const { data = [], refetch, isSuccess, isFetching } = useGetPlansQuery();
  const [planInProgress, setPlanInProgress] = useState<Plan | null>(null);

  useEffect(() => {
    if (isSuccess && !isFetching) {
      setRefreshing(false);
    }
  }, [isFetching, isSuccess]);

  useEffect(() => {
    if (!data || !data.length) return;

    let timeoutId: NodeJS.Timeout;
    const curPlan = isInProgress(data[0].startAt, data[0].arrivalAt) ? data[0] : null;

    setPlanInProgress(curPlan);
    timeoutId = setTimeout(() => {
      setPlanInProgress(data[0]);
      timeoutId = setTimeout(() => {
        refetch();
      }, (differenceInSeconds(toSeoulDate(data[0].arrivalAt), toSeoulDate(new Date())) + 1) * 1000);
    }, differenceInSeconds(toSeoulDate(data[0].startAt), toSeoulDate(new Date())) * 1000);

    return () => {
      timeoutId && clearTimeout(timeoutId);
    };
  }, [data]);

  if (!data) return <Text>Loading...</Text>;
  if (!data.length) return <Text>no data...</Text>;

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
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => {
              setRefreshing(true);
              refetch();
            }}
          />
        }>
        <TopContents plan={data[0]} />
        {planInProgress && <Schedule active plans={[planInProgress]} title='inProgress' />}
        <Schedule plans={planInProgress ? data.slice(1) : data} title='upcoming' />
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
