import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface SectionListProps {
  title: string;
  children: JSX.Element[];
}

export const SectionList = (props: SectionListProps) => {
  const { children, title } = props;
  return (
    <View style={styles.wrapper}>
      <View style={styles.titleBar}>
        <Text style={styles.title}>{title}</Text>
      </View>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  titleBar: {
    width: '100%',
    height: 32,
    justifyContent: 'center',
    paddingLeft: 20,
  },
  title: {
    color: '#999EAA',
    fontSize: 12,
    lineHeight: 14.4,
    fontWeight: '400',
  },
});
