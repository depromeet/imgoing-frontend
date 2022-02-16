import React from 'react';
import { StyleSheet, View } from 'react-native';

import { FixedBottomCTA, Stack } from 'ui';
import { colors } from 'design-token';
import { ScrollView } from 'react-native-gesture-handler';
import LocationItem from 'components/MyPlan/FavoriteLocation/LocationItem';

function FavoriteLocationScreen() {
  const locationData = Array.from({ length: 4 });
  return (
    <FixedBottomCTA
      onPress={() => {
        console.log('pressed');
      }}
      text={'등록'}>
      <ScrollView style={styles.wrapper}>
        <Stack>
          {locationData.map((location, i) => (
            <LocationItem key={i} />
          ))}
        </Stack>
      </ScrollView>
    </FixedBottomCTA>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.white,
  },
});

export default FavoriteLocationScreen;
