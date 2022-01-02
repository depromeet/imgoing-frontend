import React from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import { Button } from '.';
import { colors } from 'design-token';

interface Props {
  children: React.ReactNode;
  onPress: () => void;
  text: string;
  disabled?: boolean;
  backgroundColor?: string;
}

export const FixedBottomCTA = (props: Props) => {
  const { children, text, onPress, disabled, backgroundColor = colors.white } = props;
  return (
    <View style={{ flex: 1, backgroundColor }}>
      <KeyboardAwareScrollView contentContainerStyle={{ paddingBottom: 124 }}>
        {children}
      </KeyboardAwareScrollView>
      <LinearGradient
        colors={['rgba(255, 255, 255, 0.25)', '#FFFFFF', '#FFFFFF']}
        style={styles.bottomView}>
        <View style={styles.buttonView}>
          <Button onPress={onPress} disabled={disabled}>
            {text}
          </Button>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomView: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    justifyContent: 'flex-end',
  },
  buttonView: {
    paddingHorizontal: 20,
    paddingBottom: getBottomSpace() + 20,
    paddingTop: 52,
  },
});
