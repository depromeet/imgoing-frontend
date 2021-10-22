import React, { useEffect } from 'react';
import { Modal } from 'react-native';
import styled from 'styled-components/native';
import { useDispatch, useSelector } from 'react-redux';

import { ModalType } from 'modules/slices/modal';
import MenuModal from './MenuModal';
import DeleteModal from './DeleteModal';

type Modals = {
  [key in ModalType]: React.ReactNode;
};

const ContentsWrapper = styled.View`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.4);
`;

const ModalContainer = () => {
  const modal = useSelector((state) => state.modal);
  useEffect(() => {
    console.log(modal);
  }, [modal]);

  const modals: Modals = {
    delete: <DeleteModal />,
    menu: <MenuModal />,
  };

  return (
    <>
      {/* ContentsWrapper를 바깥으로 빼도록 리팩토링 필요 */}
      {modal && (
        <Modal animationType={'slide'} transparent={true}>
          <ContentsWrapper>{modals[modal.modalType]}</ContentsWrapper>
        </Modal>
      )}
    </>
  );
};

export default ModalContainer;
