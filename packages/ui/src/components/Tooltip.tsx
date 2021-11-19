import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface TooltipProps {
  type: TooltipType;
  content: string;
  direction: 'up' | 'down';
}

type TooltipType = 'primary' | 'basic';

const colorScheme = {
  primary: '#3485FF',
  basic: '#333A44',
};

export const Tooltip = (props: TooltipProps) => {
  const { type = 'primary', content, direction = 'down' } = props;
  const color = colorScheme[type];
  return (
    <View style={styles.wrapper}>
      {direction === 'up' && (
        <View style={[styles.triangle, { borderBottomColor: color, borderBottomWidth: 10 }]} />
      )}
      <View style={[styles.main, { backgroundColor: color }]}>
        <Text style={styles.text}>{content}</Text>
      </View>
      {direction === 'down' && (
        <View style={[styles.triangle, { borderTopColor: color, borderTopWidth: 10 }]} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  main: {
    width: 145,
    height: 30,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  triangle: {
    width: 12,
    height: 10,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderLeftWidth: 6,
    borderRightWidth: 6,
  },
  text: {
    fontSize: 12,
    lineHeight: 14.4,
    fontWeight: '400',
    textAlign: 'center',
    color: '#ffffff',
  },
});
