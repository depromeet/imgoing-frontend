import React from 'react';
import { GestureResponderEvent, Pressable, StyleSheet, View } from 'react-native';

import { colors } from 'design-token';
import { Text } from './Text';

interface ListContainerProps {
  text: string;
  subText?: string;
  onClick?: (e: GestureResponderEvent) => void;
  children?: JSX.Element;
}

export const ListContainer = (props: ListContainerProps) => {
  const { text, subText, onClick, children } = props;
  const wrapperPadding = subText ? 14 : 10;
  return (
    <Pressable style={[styles.wrapper, { paddingVertical: wrapperPadding }]} onPress={onClick}>
      <View style={styles.mainContainer}>
        <View style={styles.text}>
          <Text fontType='BOLD_16' color={colors.black}>
            {text}
          </Text>
        </View>
        {children && <View style={styles.children}>{children}</View>}
      </View>
      {subText && (
        <View style={styles.subtextContainer}>
          <Text fontType='REGULAR_12' color={colors.grayDark}>
            {subText}
          </Text>
        </View>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'column',
  },
  mainContainer: {
    flexDirection: 'row',
  },
  subtextContainer: {
    height: 14,
    justifyContent: 'center',
  },
  text: {
    flex: 8,
    marginVertical: 10,
  },
  children: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
