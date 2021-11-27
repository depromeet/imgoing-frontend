import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

import { Text } from 'ui';
import { colors } from 'design-token';
import { profile_default_img } from 'icons';

const Profile = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.avatar}>
        <SvgXml xml={profile_default_img} width='100%' fill={colors.blue} />
      </View>
      <View style={styles.profileCard}>
        <Text fontType='BOLD_18' color={colors.black}>
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
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: { flex: 1, paddingHorizontal: 16 },
  profileCard: { flex: 4 },
});

export default Profile;
