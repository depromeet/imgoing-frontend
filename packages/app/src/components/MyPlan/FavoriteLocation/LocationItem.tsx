import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'ui';
import BookmarkBadge from './BookmarkBadge';

function LocationItem() {
  return (
    <View style={styles.wrapper}>
      <BookmarkBadge />
      <Text fontType='BOLD_14' style={{ textAlign: 'center' }}>
        도림천
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    height: 50,
    width: '90%',
    paddingVertical: 16.5,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default LocationItem;
