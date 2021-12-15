import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

import { Text, TextBadge, Tooltip } from 'ui';
import { colors } from 'design-token';
import { expand_less, icon_arrowDown } from 'icons';
import IconBadge from './IconBadge';

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
            <Pressable style={{ paddingRight: 18 }} onPress={onPress}>
              <SvgXml xml={expand_less} />
            </Pressable>
            {/* 다른 월 선택시 바뀌도록 */}
            <View style={expandedStyles.circle}>
              <Text fontType='BOLD_32'>☘</Text>
            </View>
            <View style={expandedStyles.count}>
              <TextBadge text='이달 현황' backgroundColor='blueLight' />
              <Text style={expandedStyles.text} fontType='BOLD_14' color={colors.black}>
                2번 지각
              </Text>
            </View>
            <Text fontType='BOLD_18' color={colors.black}>
              나무에서 떨어진 원숭이
            </Text>
            {/* 컴포넌트 분리 필요, 각 아이템별로 클릭할 수 있도록 해야 함 */}
            <View style={expandedStyles.icon_list}>
              <IconBadge count={5} selected={false} month={7} />
              <IconBadge count={0} selected={false} month={8} />
              <IconBadge count={6} selected={false} month={9} />
              <IconBadge count={4} selected={false} month={10} />
              <IconBadge count={2} selected={true} month={11} />
            </View>
            <View style={expandedStyles.tooltip}>
              <Tooltip type='basic' content={'눌러서 상세내역을 보세요'} direction='up' />
            </View>
          </View>
        </View>
      ) : (
        <Pressable style={styles.border} onPress={onPress}>
          <TextBadge text='이달 현황' backgroundColor='blueLight' />
          <View style={styles.text}>
            <Text fontType='BOLD_14' color={colors.grayDark}>
              나무에서 떨어진 원숭이 ☘
            </Text>
          </View>
          <View style={styles.expandButton}>
            <SvgXml xml={icon_arrowDown} />
          </View>
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: colors.white,
    marginTop: 24,
  },
  border: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
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
  circle: {
    width: 72,
    height: 72,
    marginRight: 16,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.blueLight,
    marginTop: 12,
    marginBottom: 20,
  },
  small_circle: {
    width: 44,
    height: 44,
    borderRadius: 50,
    backgroundColor: colors.grayMedium,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
    marginBottom: 8,
  },
  number_badge: {
    position: 'absolute',
    left: 29,
    top: 0,
    width: 15,
    height: 15,
    backgroundColor: colors.white,
    borderRadius: 50,
    borderColor: colors.grayMedium,
  },
  icon_list: {
    flexDirection: 'row',
    paddingVertical: 24,
    alignItems: 'center',
  },
  icon_item: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  tooltip: {
    position: 'absolute',
    bottom: '-5%',
    left: '50%',
  },
});

export default PlanStatistics;
