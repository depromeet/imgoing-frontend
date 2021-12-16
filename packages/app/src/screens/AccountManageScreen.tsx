import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

import { kakao_small_logo } from 'icons';
import { Button, ListContainer, Stack, Text } from 'ui';
import { colors } from 'design-token';

const AccountManageScreen = () => {
  return (
    <View style={styles.wrapper}>
      <Stack>
        <ListContainer text='이메일 주소' subText='sadfsdfsd@naver.com' />
        <ListContainer text='연결된 서비스' subText='카카오 계정 연결됨'>
          <SvgXml xml={kakao_small_logo} />
        </ListContainer>
      </Stack>
      <View style={styles.button_box}>
        <View style={styles.button}>
          <Button backgroundColor={colors.grayMedium} onPress={() => {}}>
            <Text fontType='BOLD_16' color={colors.grayDark}>
              회원 탈퇴
            </Text>
          </Button>
        </View>
        <View style={styles.gap} />
        <View style={styles.button}>
          <Button backgroundColor={colors.grayMedium} onPress={() => {}}>
            <Text fontType='BOLD_16' color={colors.grayDark}>
              로그아웃
            </Text>
          </Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    backgroundColor: colors.white,
    height: '100%',
    width: '100%',
  },
  button_box: {
    position: 'absolute',
    bottom: '5%',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  button: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gap: {
    width: 8,
  },
});

export default AccountManageScreen;
