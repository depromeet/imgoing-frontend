import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

import { kakao_small_logo } from 'icons';
import { Button, ListContainer, Stack, Text } from 'ui';
import { colors } from 'design-token';
import { getBottomSpace } from 'react-native-iphone-x-helper';

const AccountManageScreen = () => {
  return (
    <View style={styles.wrapper}>
      <Stack>
        <ListContainer text='이메일 주소' subText='sadfsdfsd@naver.com' />
        <ListContainer text='연결된 서비스' subText='카카오 계정 연결됨'>
          <SvgXml xml={kakao_small_logo} />
        </ListContainer>
      </Stack>
      <View style={styles.buttonBox}>
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
    flex: 1,
    display: 'flex',
    backgroundColor: colors.white,
    justifyContent: 'space-between',
  },
  buttonBox: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingBottom: getBottomSpace() + 20,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gap: {
    width: 8,
  },
});

export default AccountManageScreen;
