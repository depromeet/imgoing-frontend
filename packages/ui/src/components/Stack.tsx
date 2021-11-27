import React from 'react';
import { StyleSheet, View } from 'react-native';

import { colors } from 'design-token';
import { Text } from './Text';

interface StackProps {
  title?: string;
  children: JSX.Element[];
}

export const Stack = (props: StackProps) => {
  const { children, title } = props;
  return (
    <View style={styles.wrapper}>
      {title && (
        <View style={styles.titleBar}>
          <Text fontType='REGULAR_12' color={colors.grayDark}>
            {title}
          </Text>
        </View>
      )}
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: { paddingHorizontal: 20 },
  titleBar: {
    width: '100%',
    height: 32,
    justifyContent: 'center',
  },
});
