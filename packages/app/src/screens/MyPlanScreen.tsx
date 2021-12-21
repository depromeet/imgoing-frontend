import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

import PlanStatistics from 'components/myPlan/PlanStatistics';
import { colors } from 'design-token';
import { icon_arrowRight } from 'icons';
import { ListContainer, Stack, Text } from 'ui';
import { useNavigation } from '@react-navigation/native';

const MyPlanScreen = () => {
  const [toggleExpand, setToggleExpand] = useState<boolean>(false);
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.wrapper} contentContainerStyle={styles.contentContainer}>
      <Stack>
        <Text fontType='BOLD_24'>어머나..🤢</Text>
        <Text fontType='BOLD_24'>이달은 2번 지각했어요</Text>
      </Stack>
      <PlanStatistics
        toggleExpand={toggleExpand}
        onPress={() => {
          setToggleExpand(!toggleExpand);
        }}
      />
      <View style={styles.gap} />
      <Stack title='일정 관리'>
        <ListContainer
          text='루틴 관리'
          onClick={() => {
            navigation.navigate('RoutineManage');
          }}>
          <SvgXml xml={icon_arrowRight} />
        </ListContainer>
        <ListContainer text='지난 일정 보기'>
          <SvgXml xml={icon_arrowRight} />
        </ListContainer>
      </Stack>
      <Stack title='장소 관리'>
        <ListContainer text='즐겨찾는 장소'>
          <SvgXml xml={icon_arrowRight} />
        </ListContainer>
      </Stack>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.white,
    height: '100%',
    width: '100%',
  },
  gap: {
    paddingVertical: 20,
  },
  contentContainer: {
    paddingVertical: 20,
  },
});

export default MyPlanScreen;
