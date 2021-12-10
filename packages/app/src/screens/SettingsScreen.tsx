import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

import { Stack, ListContainer, Divider, SwitchButton } from 'ui';
import { colors } from 'design-token';
import { icon_arrowRight } from 'icons';
import { SvgXml } from 'react-native-svg';
import Profile from 'components/settings/Profile';

const SettingScreen = () => {
  const [arrivalNoti, setArrivalNoti] = useState(true);
  const [weatherNoti, setWeatherNoti] = useState(true);
  return (
    <View style={styles.wrapper}>
      <ScrollView>
        <Profile />
        <Stack title='개인 정보'>
          <ListContainer text='카카오 연동 계정 관리'>
            <SvgXml xml={icon_arrowRight} />
          </ListContainer>
          <ListContainer text='약관, 개인 정보 관리'>
            <SvgXml xml={icon_arrowRight} />
          </ListContainer>
        </Stack>
        <Divider />
        <Stack title='알림 설정'>
          <ListContainer
            text='도착 후 확인 알림'
            subText='일정에 등록한 도착시간에 확인 알림을 보냅니다.'>
            <SwitchButton
              value={arrivalNoti}
              onChange={() => {
                setArrivalNoti(!arrivalNoti);
              }}
            />
          </ListContainer>
          <ListContainer
            text='도착지 날씨 알림'
            subText='준비 시작 전 도착지의 날씨 알림을 보냅니다.'>
            <SwitchButton
              value={weatherNoti}
              onChange={() => {
                setWeatherNoti(!weatherNoti);
              }}
            />
          </ListContainer>
        </Stack>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.white,
  },
});

export default SettingScreen;
