import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

import { Text } from 'ui';
import { colors } from 'design-token';
import { logo } from 'icons';

const Profile = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.avatar}>
        <SvgXml xml={logo} width={48} />
      </View>
      <View style={styles.profileCard}>
        <Text fontType='BOLD_18' color={colors.black} style={{ paddingBottom: 4 }}>
          암고잉
        </Text>
        <Text fontType='REGULAR_14' color={colors.grayDark}>
          imgoing@kakao.com
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 24,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  avatar: {
    width: 72,
    height: 72,
    marginRight: 16,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.blueLight,
  },
});

export default Profile;
