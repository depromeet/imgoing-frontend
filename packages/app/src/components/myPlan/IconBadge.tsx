import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

import { NumberBadge, Text } from 'ui';
import { colors } from 'design-token';

interface IconBadgeProps {
  count: number;
  selected: boolean;
  month: number;
}

const getIcon = (count: number) => {
  let icon;
  if (count >= 5) {
    icon = '🌳';
  } else if (count >= 3) {
    icon = '🌿';
  } else if (count >= 1) icon = '☘';
  else icon = '🌱';
  return icon;
};

const IconBadge = (props: IconBadgeProps) => {
  const { count, selected, month } = props;
  const icon = getIcon(count);
  const backgroundColor = selected ? colors.blueLight : colors.grayMedium;
  return (
    <Pressable style={styles.icon_item} onPress={() => {}}>
      <View style={[styles.small_circle, { backgroundColor: backgroundColor }]}>
        <View style={styles.number_badge}>
          <NumberBadge count={count} type={selected ? 'active' : 'reverse'} />
        </View>
        <Text fontType='BOLD_20'>{icon}</Text>
      </View>
      <Text fontType='REGULAR_12' color={colors.grayDark}>
        {month}월
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  icon_item: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  small_circle: {
    width: 44,
    height: 44,
    borderRadius: 50,
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
});

export default IconBadge;
