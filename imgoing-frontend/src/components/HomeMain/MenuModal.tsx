import React from 'react';
import { Modal } from 'react-native';
import styled, { css } from 'styled-components/native';
import CalloutTypo from '../typography/CalloutTypo';

interface ModalProps {
  isModalVisible: boolean;
  setIsModalVisible: (value: boolean) => void;
  isDeleteModalVisible: boolean;
  setIsDeleteModalVisible: (value: boolean) => void;
}

interface ModalButtonProps {
  first?: boolean;
}

const ModalView = styled.TouchableOpacity`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  background: rgba(0, 0, 0, 0.4);
`;

const ModalButton = styled.TouchableOpacity<Pick<ModalButtonProps, 'first'>>`
  width: 100%;
  height: 60px;
  background: ${(props) => props.theme.colors.white};
  justify-content: center;
  align-items: center;
  ${(props) => {
    if (props.first)
      return css`
        border-top-left-radius: 16px;
        border-top-right-radius: 16px;
      `;
  }}
`;

const MenuModal = (props: ModalProps) => {
  const { isModalVisible, setIsModalVisible, isDeleteModalVisible, setIsDeleteModalVisible } =
    props;

  return (
    <Modal animationType={'slide'} transparent={true} visible={isModalVisible}>
      <ModalView onPress={() => setIsModalVisible(!isModalVisible)}>
        <ModalButton first onPress={() => setIsModalVisible(!isModalVisible)}>
          <CalloutTypo color={'black'}>고정하기</CalloutTypo>
        </ModalButton>
        <ModalButton onPress={() => setIsModalVisible(!isModalVisible)}>
          <CalloutTypo color={'black'}>편집하기</CalloutTypo>
        </ModalButton>
        <ModalButton
          onPress={() => {
            setIsModalVisible(!isModalVisible);
            setIsDeleteModalVisible(!isDeleteModalVisible);
          }}>
          <CalloutTypo color={'black'}>삭제하기</CalloutTypo>
        </ModalButton>
      </ModalView>
    </Modal>
  );
};

export default MenuModal;
