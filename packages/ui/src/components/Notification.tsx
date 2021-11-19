import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface NotificationProps {
  type: NotificationType;
  count: number;
}

type NotificationType = 'alert' | 'normal' | 'reverse';

const colorScheme = {
  alert: {
    background: '#F53E50',
    text: '#ffffff',
  },
  normal: {
    background: '#999EAA',
    text: '#ffffff',
  },
  reverse: {
    background: '#EFEFEF',
    text: '#999EAA',
  },
};

export const Notification = (props: NotificationProps) => {
  const { type = 'normal', count } = props;
  const color = colorScheme[type];
  return (
    <View style={[styles.container, { backgroundColor: color.background }]}>
      <Text style={[styles.text, { color: color.text }]}>{count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 15,
    height: 15,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 10,
    lineHeight: 12,
    fontWeight: '700',
    textAlign: 'center',
  },
});
