import React from 'react';
import { useDispatch } from 'react-redux';
import styled, { css } from 'styled-components/native';
import { setModal } from '../../modules/slices/modal';
import CalloutTypo from '../typography/CalloutTypo';

interface ModalButtonProps {
  first?: boolean;
}

const ModalView = styled.View`
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
  const dispatch = useDispatch();

  return (
    <ModalView>
      <ModalButton first onPress={() => console.log('pressed')}>
        <CalloutTypo color={'black'}>고정하기</CalloutTypo>
      </ModalButton>
      <ModalButton onPress={() => console.log('pressed')}>
        <CalloutTypo color={'black'}>편집하기</CalloutTypo>
      </ModalButton>
      <ModalButton
        onPress={() => {
          dispatch(setModal('delete'));
        }}>
        <CalloutTypo color={'black'}>삭제하기</CalloutTypo>
      </ModalButton>
    </ModalView>
  );
};

export default MenuModal;
