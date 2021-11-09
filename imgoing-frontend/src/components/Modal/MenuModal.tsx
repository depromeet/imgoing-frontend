import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { css } from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

import { NavigatorParams } from 'types/Route';
import { CalloutTypo } from 'components/typography';
import { removeModal, setModal } from 'modules/slices/modal';
import { togglePlanPin } from 'modules/slices/plan';
import { showToastMessage } from 'utils/toast';
import RoundBottomModalLayout from 'layouts/RoundBottomModalLayout';

interface ModalButtonProps {
  first?: boolean;
}

const ModalView = styled.Pressable`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
`;

const ModalButton = styled.TouchableOpacity<Pick<ModalButtonProps, 'first'>>`
  width: 100%;
  height: 60px;
  background-color: ${(props) => props.theme.colors.white};
  justify-content: center;
  align-items: center;
`;

const MenuModal = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<NavigatorParams>();
  const identify = useSelector((state) => state.identify);
  const targetPlan = useSelector((state) =>
    state.plan.find((element) => {
      return element.id === identify?.id;
    }),
  );
  const pinStatus = targetPlan?.isPinned;
  const toastContent = pinStatus ? '고정이 해제되었습니다' : '일정이 고정되었습니다';
  const navigatePlanEdit = () => {
    dispatch(removeModal());
    navigation.navigate('PlanEdit');
  };
  return (
    <RoundBottomModalLayout>
      <ModalButton
        first
        onPress={() => {
          dispatch(removeModal());
          dispatch(togglePlanPin(Number(identify?.id)));
          showToastMessage(toastContent);
        }}>
        <CalloutTypo color={'black'}>고정하기</CalloutTypo>
      </ModalButton>
      <ModalButton onPress={navigatePlanEdit}>
        <CalloutTypo color={'black'}>편집하기</CalloutTypo>
      </ModalButton>
      <ModalButton
        onPress={() => {
          dispatch(removeModal());
          dispatch(setModal({ modalType: 'delete', fade: true }));
        }}>
        <CalloutTypo color={'black'}>삭제하기</CalloutTypo>
      </ModalButton>
    </RoundBottomModalLayout>
  );
};

export default MenuModal;
