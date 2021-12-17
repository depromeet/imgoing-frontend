import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import { colors } from 'design-token';
import { Alert, Stack, Text } from 'ui';
import PastPlanItem from 'components/MyPlan/PastPlan/PastPlanItem';

const PastPlanScreen = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.alert}>
        <Alert text='지난 일정에 대해 지각 체크를 해보세요' />
      </View>
      <Stack>
        <Text fontType='BOLD_14' style={{ paddingBottom: 20 }}>
          지난 일정
        </Text>
        <ScrollView>
          <PastPlanItem date={'11월 16일 금요일'} title={'퇴근하고 삼겹살 먹기'} late={true} />
          <PastPlanItem date={'11월 16일 금요일'} title={'퇴근하고 삼겹살 먹기'} late={null} />
          <PastPlanItem date={'11월 16일 금요일'} title={'퇴근하고 삼겹살 먹기'} late={false} />
        </ScrollView>
      </Stack>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flex: 1,
    backgroundColor: colors.white,
  },
  alert: {
    paddingHorizontal: 20,
    paddingTop: 28,
    paddingBottom: 22,
  },
});

export default PastPlanScreen;
