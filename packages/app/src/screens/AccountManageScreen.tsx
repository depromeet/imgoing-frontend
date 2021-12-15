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
      {/* <View style={styles.button_box}>
        <Button style={styles.button} disabled onPress={() => {}}>
          <Text fontType='BOLD_16' color={colors.grayDark}>
            회원 탈퇴
          </Text>
        </Button>
        <Button style={styles.button} disabled onPress={() => {}}>
          <Text fontType='BOLD_16' color={colors.grayDark}>
            로그아웃
          </Text>
        </Button>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.white,
    height: '100%',
  },
  button_box: {
    display: 'flex',
    flexDirection: 'row',
  },
  button: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AccountManageScreen;
