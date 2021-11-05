import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/native';

import RoundBottomModalLayout from 'layouts/RoundBottomModalLayout';
import { CalloutTypo } from 'components/typography';
import store from 'modules/store';
import { removeModal } from 'modules/slices/modal';
import { removeTask, setBookmark } from 'modules/slices/stepOfAddingPlan';
import { createBookmark } from 'modules/thunks/bookmark';
import { showToastMessage } from 'utils/toast';

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

const ModalButton = styled.TouchableOpacity`
  width: 100%;
  height: 60px;
  background: ${(props) => props.theme.colors.white};
  justify-content: center;
  align-items: center;
`;

const TaskMenuModal = () => {
  const dispatch = useDispatch();
  const identify = useSelector((state) => state.identify);
  const tasks = store.getState().stepOfAddingPlan.userInputs.tasks || null;
  if (identify?.type !== 'task' || !tasks) {
    dispatch(removeModal());
    showToastMessage('없는 준비 항목이에요');
    return;
  }

  const task = tasks.find((task) => task.id === identify.id);
  if (!task) {
    dispatch(removeModal());
    showToastMessage('없는 준비 항목이에요');
    return;
  }

  const onPressSetBookmark = () => {
    dispatch(removeModal());
    dispatch(createBookmark(task));
    dispatch(setBookmark({ id: task.id, isBookmarked: true }));
    showToastMessage('북마크로 등록되었습니다');
  };

  const onPressDeleteTask = () => {
    dispatch(removeModal());
    dispatch(removeTask(identify.id));
    showToastMessage('항목이 삭제되었습니다');
  };

  return (
    <RoundBottomModalLayout>
      {!task.isBookmarked && (
        <ModalButton onPress={onPressSetBookmark}>
          <CalloutTypo color={'black'}>북마크로 등록하기</CalloutTypo>
        </ModalButton>
      )}
      <ModalButton onPress={onPressDeleteTask}>
        <CalloutTypo color={'black'}>삭제하기</CalloutTypo>
      </ModalButton>
    </RoundBottomModalLayout>
  );
};

export default TaskMenuModal;
