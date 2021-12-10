import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

import { Text, TextBadge } from 'ui';
import { colors } from 'design-token';
import { SvgXml } from 'react-native-svg';
import { expand_less, icon_arrowDown } from 'icons';

interface PlanStatisticsProps {
  toggleExpand: boolean;
  onPress: () => void;
}

const PlanStatistics = (props: PlanStatisticsProps) => {
  const { toggleExpand, onPress } = props;
  return (
    <View style={styles.wrapper}>
      {toggleExpand ? (
        <View style={expandedStyles.wrapper}>
          <View style={expandedStyles.border}>
            <Pressable onPress={onPress}>
              <SvgXml xml={expand_less} />
            </Pressable>
            <View></View>
            <View style={expandedStyles.count}>
              <TextBadge text='이달 현황' backgroundColor='blueLight' />
              <Text style={expandedStyles.text} fontType='BOLD_14' color={colors.black}>
                2번 지각
              </Text>
            </View>
            <Text fontType='BOLD_18' color={colors.black}>
              종종 지각하는 지각 꿈나무
            </Text>
            <View style={expandedStyles.icon_list}></View>
          </View>
        </View>
      ) : (
        <View style={styles.border}>
          <TextBadge text='이달 현황' backgroundColor='blueLight' />
          <View style={styles.text}>
            <Text fontType='BOLD_14' color={colors.grayDark}>
              종종 지각하는 지각 꿈나무 🌱
            </Text>
          </View>
          <Pressable style={styles.expandButton} onPress={onPress}>
            <SvgXml xml={icon_arrowDown} />
          </Pressable>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  border: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    paddingLeft: 12,
    paddingVertical: 13,
    borderWidth: 2,
    borderColor: colors.grayMedium,
    borderRadius: 8,
  },
  text: {
    flex: 6,
    paddingLeft: 12,
  },
  expandButton: {
    flex: 1,
  },
});

const expandedStyles = StyleSheet.create({
  wrapper: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  border: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    paddingLeft: 12,
    paddingVertical: 13,
    borderWidth: 2,
    borderColor: colors.grayMedium,
    borderRadius: 8,
  },
  count: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  text: {
    flex: 6,
    paddingLeft: 8,
  },
  icon_list: {},
});

export default PlanStatistics;
