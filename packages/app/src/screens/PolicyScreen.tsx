import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Stack, Text } from 'ui';
import { colors } from 'design-token';
import { SvgXml } from 'react-native-svg';
import { lock } from 'icons';

const PolicyScreen = () => {
  return (
    <View style={styles.wrapper}>
      <Stack>
        <Text style={styles.main_text} fontType='REGULAR_16'>
          [필수] 카카오 연동계정 정보 동의
        </Text>
        <Text fontType='REGULAR_12' color={colors.grayDark}>
          연동된 프로필정보는 암고잉 서비스의 맞춤형 콘텐츠 제공 및 알림에
        </Text>
        <Text fontType='REGULAR_12' color={colors.grayDark}>
          활용되며, 회원탈퇴 또는 동의철회 시 즉시 파기됩니다.
        </Text>
        <View style={styles.info_box}>
          <SvgXml xml={lock} />
          <Text style={styles.text_in_box} fontType='REGULAR_14' color={colors.grayDark}>
            동의일자 : 2021.11.11
          </Text>
        </View>
      </Stack>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.white,
    height: '100%',
  },
  main_text: { marginBottom: 16 },

  info_box: {
    marginTop: 20,
    backgroundColor: colors.grayMedium,
    paddingVertical: 12,
    paddingLeft: 16,
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text_in_box: {
    paddingLeft: 12,
  },
});

export default PolicyScreen;
