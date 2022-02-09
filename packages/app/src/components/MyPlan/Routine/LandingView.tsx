import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

import { character } from 'icons';
import { Text } from 'ui';
import { colors } from 'design-token';

const LandingView = () => {
  return (
    <View style={styles.wrapper}>
      <SvgXml xml={character} />
      <Text style={styles.text} fontType='REGULAR_14' color={colors.grayDark}>
        등록된 루틴이 없네요!{'\n'}간단하게 루틴을 추가해 보세요
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 105,
  },
  text: {
    paddingTop: 30,
    textAlign: 'center',
  },
});

export default LandingView;
