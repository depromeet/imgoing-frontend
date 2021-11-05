import React, { useEffect } from 'react';
import { Modal } from 'react-native';
import styled from 'styled-components/native';
import { useDispatch, useSelector } from 'react-redux';

import { ModalType, removeModal } from 'modules/slices/modal';
import MenuModal from './MenuModal';
import DeleteModal from './DeleteModal';
import DateWheelPickerModal from './DateWheelPickerModal';
import AddTaskModal from './AddTaskModal';
import SetLocationModal from './SetLocationModal';
import LoadBookmarkModal from './LoadBookmarkModal';
import WebViewModal from './WebViewModal';
import TaskMenuModal from './TaskMenuModal';

type Modals = {
  [key in ModalType]: React.ReactNode;
};

const ModalView = styled.View`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
`;

const Background = styled.View`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  justify-content: flex-start;
  background-color: rgba(0, 0, 0, 0.4);
`;

const ModalContainer = () => {
  const modal = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(modal);
  }, [modal]);

  const modals: Modals = {
    delete: <DeleteModal />,
    menu: <MenuModal />,
    datePicker: <DateWheelPickerModal />,
    addTask: <AddTaskModal />,
    setLocation: <SetLocationModal />,
    loadBookmark: <LoadBookmarkModal />,
    webview: <WebViewModal />,
    taskMenu: <TaskMenuModal />,
  };

  return (
    <>
      {modal && (
        <>
          <Modal
            animationType={'slide'}
            transparent
            statusBarTranslucent
            onRequestClose={() => dispatch(removeModal())}>
            <ModalView>
              <Background onTouchEnd={() => dispatch(removeModal())} />
              {modals[modal.modalType]}
            </ModalView>
          </Modal>
        </>
      )}
    </>
  );
};

export default ModalContainer;
