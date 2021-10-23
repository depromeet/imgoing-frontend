import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { css } from 'styled-components/native';

import { CalloutTypo } from 'components/typography';
import { removeModal, setModal } from 'modules/slices/modal';
import { useNavigation } from '@react-navigation/native';
import { togglePlanPin } from 'modules/slices/plan';

interface ModalButtonProps {
  first?: boolean;
}

const ModalView = styled.View`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
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
  const navigation = useNavigation();
  const navigatePlanEdit = () => {
    navigation.navigate('PlanEdit');
    dispatch(removeModal());
  };
  const modal = useSelector((state) => state.modal);

  return (
    <ModalView>
      <ModalButton
        first
        onPress={() => {
          dispatch(removeModal());
          dispatch(togglePlanPin(Number(modal?.id)));
        }}>
        <CalloutTypo color={'black'}>고정하기</CalloutTypo>
      </ModalButton>
      <ModalButton onPress={navigatePlanEdit}>
        <CalloutTypo color={'black'}>편집하기</CalloutTypo>
      </ModalButton>
      <ModalButton
        onPress={() => {
          dispatch(setModal({ modalType: 'delete', id: modal?.id }));
        }}>
        <CalloutTypo color={'black'}>삭제하기</CalloutTypo>
      </ModalButton>
    </ModalView>
  );
};

export default MenuModal;
