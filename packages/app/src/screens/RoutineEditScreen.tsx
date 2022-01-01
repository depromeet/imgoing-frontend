import { useNavigation } from '@react-navigation/native';
import TaskItem from 'components/myPlan/Routine/TaskItem';
import { colors } from 'design-token';
import { icon_add, task } from 'icons';
import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { Divider, FixedBottomCTA, Input, Stack, Text } from 'ui';

const RoutineEditScreen = () => {
  const taskData = [];
  return (
    //타이틀이 없거나 준비항목이 0일 경우 버튼 disabled 처리
    <FixedBottomCTA text='저장' onPress={() => {}}>
      <Stack>
        <Text fontType='BOLD_16' style={styles.title}>
          루틴 타이틀
        </Text>
        <Input placeholder='루틴명을 입력하세요' />
      </Stack>
      <Divider />
      <Stack>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ flex: 5 }}>
            <Text fontType='BOLD_16'>준비 항목 ({taskData.length})</Text>
          </View>
          {/* 히스토리 버튼 눌렀을 때 모달 창 */}
          <Pressable style={{ flex: 1 }} onPress={() => {}}>
            <Text fontType='BOLD_12' color={colors.grayDark}>
              히스토리
            </Text>
          </Pressable>
        </View>
        {taskData.map(() => (
          <TaskItem duration={30} title='브런치 먹기' edit />
        ))}
        {/* 새로운 준비 항목 눌렀을 때 추가하는 모달창 */}
        <Pressable style={styles.addTaskBtn} onPress={() => {}}>
          <SvgXml xml={icon_add} style={{ marginRight: 10 }} />
          <Text fontType='BOLD_14' color={colors.grayDark}>
            새로운 준비 항목
          </Text>
        </Pressable>
      </Stack>
    </FixedBottomCTA>
  );
};

const styles = StyleSheet.create({
  title: {
    paddingVertical: 16,
  },
  addTaskBtn: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: colors.grayLight,
    borderRadius: 8,
    paddingHorizontal: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    paddingVertical: 15,
  },
});

export default RoutineEditScreen;
