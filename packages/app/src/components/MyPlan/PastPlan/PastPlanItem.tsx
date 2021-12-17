import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

import { icon_markRead } from 'icons';
import { colors } from 'design-token';
import { Button, Text } from 'ui';

interface PastPlanItemProps {
  date: string;
  title: string;
  late: boolean | null;
}

const PastPlanItem = ({ date, title, late }: PastPlanItemProps) => {
  const textColor = late === null ? colors.red : colors.black;
  const result = late === null ? '확인 불가' : late ? '늦음' : '안늦음';
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
      {late === null && (
        <View style={[styles.row, styles.buttonGroup]}>
          <View style={styles.button}>
            <Button onPress={() => {}}>늦음</Button>
          </View>
          <View style={styles.gap} />
          <View style={styles.button}>
            <Button onPress={() => {}}>안늦음</Button>
          </View>
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
    justifyContent: 'center',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gap: {
    width: 10,
  },
});

export default PastPlanItem;
