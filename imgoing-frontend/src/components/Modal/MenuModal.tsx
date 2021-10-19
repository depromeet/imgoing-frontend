import React from 'react';
import styled, { css } from 'styled-components/native';

import CalloutTypo from '@/components/typography/CalloutTypo';

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

const MenuModal = () => {
  return (
    <ModalView onPress={() => console.log('pressed')}>
      <ModalButton first onPress={() => console.log('pressed')}>
        <CalloutTypo color={'black'}>고정하기</CalloutTypo>
      </ModalButton>
      <ModalButton onPress={() => console.log('pressed')}>
        <CalloutTypo color={'black'}>편집하기</CalloutTypo>
      </ModalButton>
      <ModalButton
        onPress={() => {
          console.log('pressed');
        }}>
        <CalloutTypo color={'black'}>삭제하기</CalloutTypo>
      </ModalButton>
    </ModalView>
  );
};

export default MenuModal;
