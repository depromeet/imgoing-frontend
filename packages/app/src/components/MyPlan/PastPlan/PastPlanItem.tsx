import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

import { icon_markRead } from 'icons';
import { colors } from 'design-token';
import { Button, Text } from 'ui';

interface PastPlanItemProps {
  date: string;
  title: string;
  late: lateStatus;
}

type lateStatus = 'late' | 'notLate' | 'notChecked';

const PastPlanItem = ({ date, title, late }: PastPlanItemProps) => {
  const textColor = late === 'notChecked' ? colors.red : colors.black;
  const result = late === 'notChecked' ? '도착 확인 불가' : late === 'late' ? '늦음' : '안늦음';
  return (
    <View style={styles.wrapper}>
      <View style={[styles.row]}>
        <SvgXml xml={icon_markRead} fill={colors.grayDark}></SvgXml>
        <Text style={styles.date} fontType='BOLD_12' color={colors.grayDark}>
          {date}
        </Text>
      </View>
      <Text style={styles.title} fontType='REGULAR_14' color={colors.grayDark}>
        {title}
      </Text>
      <Text style={[styles.result, { color: textColor }]} fontType='REGULAR_12'>
        {result}
      </Text>
      {late === 'notChecked' && (
        <View style={[styles.row, styles.buttonGroup]}>
          <Pressable
            style={[styles.button, { backgroundColor: colors.grayMedium, width: 49 }]}
            onPress={() => {}}>
            <Text fontType='REGULAR_12'>늦음</Text>
          </Pressable>
          <View style={styles.gap} />
          <Pressable
            style={[styles.button, { backgroundColor: colors.blue, width: 63 }]}
            onPress={() => {}}>
            <Text fontType='REGULAR_12' color={colors.white}>
              안 늦음
            </Text>
          </Pressable>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  date: {
    paddingLeft: 14,
  },
  title: {
    paddingLeft: 28,
    paddingVertical: 10,
  },
  result: {
    paddingLeft: 28,
    paddingBottom: 20,
  },
  buttonGroup: {
    paddingLeft: 28,
  },
  button: {
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    height: 32,
  },
  gap: {
    width: 10,
  },
});

export default PastPlanItem;
