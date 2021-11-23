import { colors } from 'design-token';
import React, { useState } from 'react';
import { Animated, Easing, GestureResponderEvent, Pressable, StyleSheet, View } from 'react-native';

interface SwitchButtonProps {
  value: boolean;
  onChange: (e: GestureResponderEvent) => void;
}

export const SwitchButton = (props: SwitchButtonProps) => {
  const { value, onChange } = props;
  const [aniValue, setAniValue] = useState(new Animated.Value(0));
  const color = value ? colors.blue : colors.grayMedium;

  const moveSwitchToggle = aniValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 20],
  });

  Animated.timing(aniValue, {
    toValue: value ? 1 : 0,
    duration: 200,
    easing: Easing.linear,
    useNativeDriver: true,
  }).start();

  return (
    <View style={styles.wrapper}>
      <Pressable onPress={onChange}>
        <View style={[styles.toggleContainer, { backgroundColor: color }]}>
          <Animated.View
            style={[styles.toggleWheel, { transform: [{ translateX: moveSwitchToggle }] }]}
          />
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  toggleContainer: {
    width: 36,
    height: 14,
    borderRadius: 100,
    justifyContent: 'center',
  },
  toggleWheel: {
    width: 20,
    height: 20,
    backgroundColor: colors.white,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2.5,
    elevation: 1.5,
  },
});
