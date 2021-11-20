import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

interface ListContainerProps {
  text: string;
  subText?: string;
  onClick?: () => void;
  children?: JSX.Element;
}

export const ListContainer = (props: ListContainerProps) => {
  const { text, subText, onClick, children } = props;
  const wrapperPadding = subText ? 14 : 10;
  return (
    <Pressable style={[styles.wrapper, { paddingVertical: wrapperPadding }]} onPress={onClick}>
      <View style={styles.mainContainer}>
        <Text style={styles.text}>{text}</Text>
        {children && <View style={styles.children}>{children}</View>}
      </View>
      {subText && (
        <View style={styles.subtextContainer}>
          <Text style={styles.subtext}>{subText}</Text>
        </View>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    width: '95%',
    paddingHorizontal: 20,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'column',
  },
  mainContainer: {
    flexDirection: 'row',
  },
  children: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subtextContainer: {
    height: 14,
    justifyContent: 'center',
  },
  text: {
    flex: 5,
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 19.2,
    color: '#333A44',
    width: 244,
    marginVertical: 10,
  },
  subtext: {
    color: '#999EAA',
    fontSize: 12,
    lineHeight: 14.4,
    fontWeight: '400',
  },
});
