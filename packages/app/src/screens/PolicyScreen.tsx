import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

import { Stack, Text } from 'ui';
import { colors } from 'design-token';
import { lock } from 'icons';

const PolicyScreen = () => {
  return (
    <View style={styles.wrapper}>
      <Stack>
        <Text style={styles.mainText} fontType='REGULAR_16'>
          [필수] 카카오 연동계정 정보 동의
        </Text>
        <Text fontType='REGULAR_12' color={colors.grayDark}>
          연동된 프로필정보는 암고잉 서비스의 맞춤형 콘텐츠 제공 및 알림에
        </Text>
        <Text fontType='REGULAR_12' color={colors.grayDark}>
          활용되며, 회원탈퇴 또는 동의철회 시 즉시 파기됩니다.
        </Text>
        <View style={styles.infoBox}>
          <SvgXml xml={lock} />
          <Text style={styles.textInBox} fontType='REGULAR_14' color={colors.grayDark}>
            동의일자 : 2021.11.11
          </Text>
        </View>
      </Stack>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flex: 1,
    backgroundColor: colors.white,
    paddingVertical: 20,
  },
  mainText: {
    marginBottom: 16,
  },
  infoBox: {
    marginTop: 20,
    backgroundColor: colors.grayMedium,
    paddingVertical: 12,
    paddingLeft: 16,
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInBox: {
    paddingLeft: 12,
  },
});

export default PolicyScreen;
