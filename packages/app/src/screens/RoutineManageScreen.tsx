import React from 'react';
import { StyleSheet, View } from 'react-native';

import { colors } from 'design-token';
import RoutineList from 'components/myPlan/Routine/RoutineList';
import LandingView from 'components/myPlan/Routine/LandingView';
import { FixedBottomCTA, Stack, Text } from 'ui';

const RoutineManageScreen = () => {
  const routineData = [{}];
  return (
    <FixedBottomCTA text='루틴 추가' onPress={() => {}}>
      <View style={styles.wrapper}>
        <Stack>
          <Text fontType='BOLD_24'>자주 사용하는{'\n'}루틴을 등록해 보세요 🙌</Text>
        </Stack>
        {routineData.length > 0 ? <RoutineList /> : <LandingView />}
      </View>
    </FixedBottomCTA>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: '10%',
  },
});

export default RoutineManageScreen;
