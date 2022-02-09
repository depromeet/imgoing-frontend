import { SvgXml } from 'react-native-svg';
import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

import { colors } from 'design-token';
import { icon_add, icon_delete } from 'icons';
import { Text } from 'ui';
import { ItemType } from './type';

interface TaskItemProps {
  title: string;
  duration?: number;
  type?: ItemType;
}

const TaskItem = ({ title, duration, type = 'default' }: TaskItemProps) => {
  return (
    <View style={styles.wrapper}>
      <View style={type !== 'default' ? styles.edit : styles.title}>
        <Text fontType='BOLD_14'>{title}</Text>
      </View>
      <Text fontType='REGULAR_12' color={colors.grayDark}>
        {duration}분
      </Text>
      {type !== 'default' && (
        <Pressable onPress={() => {}} style={{ alignItems: 'flex-end', flex: 1 }}>
          <SvgXml xml={type === 'edit' ? icon_delete : icon_add} />
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: colors.grayLight,
    borderRadius: 8,
    paddingHorizontal: 18,
    alignItems: 'center',
    marginTop: 10,
    paddingVertical: 15,
  },
  title: {
    flex: 4,
  },
  edit: {
    paddingRight: 6,
  },
});

export default TaskItem;
