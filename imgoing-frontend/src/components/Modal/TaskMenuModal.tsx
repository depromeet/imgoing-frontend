import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { css } from 'styled-components/native';

import RoundBottomModalLayout from 'layouts/RoundBottomModalLayout';
import { CalloutTypo } from 'components/typography';
import { removeModal } from 'modules/slices/modal';
import { removeTask } from 'modules/slices/stepOfAddingPlan';

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

const TaskMenuModal = () => {
  const dispatch = useDispatch();
  const identify = useSelector((state) => state.identify);

  const addBookmark = () => {
    dispatch(removeModal());
  };

  const deleteTask = () => {
    dispatch(removeModal());
    if (identify?.type !== 'task' || !identify.id) {
      // TODO : 삭제에 실패하였습니다 - 토스트 메세지
      return;
    }
    dispatch(removeTask(identify.id));
  };

  return (
    <RoundBottomModalLayout>
      <ModalButton onPress={addBookmark}>
        <CalloutTypo color={'black'}>북마크로 등록하기</CalloutTypo>
      </ModalButton>
      <ModalButton onPress={deleteTask}>
        <CalloutTypo color={'black'}>삭제하기</CalloutTypo>
      </ModalButton>
    </RoundBottomModalLayout>
  );
};

export default TaskMenuModal;
