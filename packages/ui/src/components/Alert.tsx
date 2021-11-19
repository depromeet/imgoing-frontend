import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface AlertProps {
  disabled?: boolean;
  text: string;
}

export const Alert = (props: AlertProps) => {
  const { disabled = false, text } = props;
  return (
    <View style={{ ...styles.wrapper, backgroundColor: disabled ? '#EFEFEF' : '#FFF9FA' }}>
      <Text style={{ color: disabled ? '#999EAA' : '#F53E50' }}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: 48,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    paddingLeft: 16,
  },
});
