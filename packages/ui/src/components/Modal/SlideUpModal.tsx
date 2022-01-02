import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';

import { Text } from '../Text';
import { SCREEN_WIDTH } from 'design-token';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import Modal from 'react-native-modal';
import { colors } from 'design-token';

interface Props extends ViewProps {
  setModalVisible: (visible: boolean) => void;
  isModalVisible: boolean;
  title?: string;
}

export const SlideUpModal = ({ children, setModalVisible, isModalVisible, title }: Props) => {
  return (
    <Modal
      style={styles.modal}
      isVisible={isModalVisible}
      animationIn={'slideInUp'}
      animationOut={'slideOutDown'}
      backdropOpacity={0.7}
      onBackdropPress={() => setModalVisible(false)}
      useNativeDriver>
      <View style={[styles.container, { ...(!title && { paddingTop: 11 }) }]}>
        {title && (
          <View style={styles.title}>
            <Text fontType={'BOLD_16'}>{title}</Text>
          </View>
        )}
        <View>{children}</View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    width: SCREEN_WIDTH,
    margin: 0,
    justifyContent: 'flex-end',
    maxHeight: '80%',
  },
  container: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingBottom: getStatusBarHeight(),
    paddingHorizontal: 20,
  },
  title: {
    paddingVertical: 18,
    marginLeft: 8,
    marginTop: 5,
    marginBottom: 6,
  },
});
