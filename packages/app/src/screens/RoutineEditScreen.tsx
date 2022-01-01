import TaskItem from 'components/myPlan/Routine/TaskItem';
import { colors } from 'design-token';
import { icon_add, task } from 'icons';
import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { Divider, FixedBottomCTA, Input, Stack, Text } from 'ui';

const RoutineEditScreen = () => {
  const taskData = [{}, {}];
  return (
    <FixedBottomCTA text='저장' onPress={() => {}}>
      <Stack>
        <Text fontType='BOLD_16' style={styles.title}>
          루틴 타이틀
        </Text>
        <Input placeholder='기존 루틴명' />
      </Stack>
      <Divider />
      <Stack>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ flex: 5 }}>
            <Text fontType='BOLD_16'>준비 항목 (4)</Text>
          </View>
          <Pressable style={{ flex: 1 }} onPress={() => {}}>
            <Text fontType='BOLD_12' color={colors.grayDark}>
              히스토리
            </Text>
          </Pressable>
        </View>
        {taskData.map(() => (
          <TaskItem duration={30} title='브런치 먹기' edit />
        ))}
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
