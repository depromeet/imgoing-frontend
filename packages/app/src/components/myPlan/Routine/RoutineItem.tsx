import React, { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

import { colors } from 'design-token';
import { icon_arrowDown, icon_arrowUp } from 'icons';
import { Text } from 'ui';
import TaskItem from './TaskItem';
import { useNavigation } from '@react-navigation/native';
import { RootRouterParams } from 'types/Route';

const RoutineItem = () => {
  const [toggleExpand, setToggleExpand] = useState(false);
  const taskData = [{}, {}, {}, {}];
  const navigation = useNavigation<RootRouterParams>();
  return (
    <View style={styles.border}>
      {toggleExpand ? (
        <>
          <Pressable
            style={styles.expandableBar}
            onPress={() => {
              setToggleExpand(!toggleExpand);
            }}>
            <View style={styles.text}>
              <Text fontType='BOLD_14'>출근 준비 루틴</Text>
            </View>
            <SvgXml xml={icon_arrowUp} width={24} />
          </Pressable>
          {taskData.map((task, i) => (
            <TaskItem key={i} title='브런치 먹기' duration={30} />
          ))}
          <Pressable
            style={styles.editButton}
            onPress={() => {
              navigation.navigate('RoutineEdit');
            }}>
            <Text
              fontType='BOLD_12'
              color={colors.grayDark}
              style={{ textDecorationLine: 'underline' }}>
              편집하기
            </Text>
          </Pressable>
        </>
      ) : (
        <Pressable
          style={styles.expandableBar}
          onPress={() => {
            setToggleExpand(!toggleExpand);
          }}>
          <View style={styles.text}>
            <Text fontType='BOLD_14'>출근 준비 루틴</Text>
          </View>
          <SvgXml xml={icon_arrowDown} width={24} />
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  border: {
    borderRadius: 8,
    borderColor: colors.grayMedium,
    borderWidth: 2,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 17,
  },
  expandableBar: {
    display: 'flex',
    flexDirection: 'row',
  },
  expand: {
    height: 100,
  },
  text: {
    flex: 6,
  },
  editButton: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
  },
});

export default RoutineItem;
