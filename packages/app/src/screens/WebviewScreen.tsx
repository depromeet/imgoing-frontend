import IconBadge from 'components/myPlan/IconBadge';
import { colors } from 'design-token';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import WebView from 'react-native-webview';
import { Input, Stack, TextBadge } from 'ui';

const WebviewScreen = () => {
  const isSearch = true;

  return (
    <>
      <WebView
        style={{ width: '100%', height: '100%', display: isSearch ? 'none' : 'flex' }}
        source={{ uri: 'https://eunseong.loca.lt/' }}
      />
      <View style={styles.searchWrapper}>
        <View style={styles.searchForm}>
          <Input placeholder='출발지를 입력해 주세요' />
        </View>
        <Stack title='즐겨찾는 장소'>
          <TextBadge text='강남역' />
          <TextBadge text='롯데월드' />
          <TextBadge text='명동백화점' />
        </Stack>
        <Stack title='최근 검색'>mock up</Stack>
      </View>
    </>
  );
};

export default WebviewScreen;

const styles = StyleSheet.create({
  searchWrapper: {
    backgroundColor: colors.white,
  },
  searchForm: {
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
});
