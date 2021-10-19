import React, { useEffect } from 'react';
import { Modal } from 'react-native';
import styled from 'styled-components/native';
import { useDispatch, useSelector } from 'react-redux';

import { ModalType, removeModal } from '@/modules/slices/modal';
import MenuModal from './MenuModal';
import DeleteModal from './DeleteModal';

type Modals = {
  [key in ModalType]: React.ReactNode;
};

const ContentsWrapper = styled.TouchableOpacity`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.4);
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
  };

  return (
    <>
      {modal && (
        <Modal animationType={'slide'} transparent={true}>
          <ContentsWrapper onPress={() => dispatch(removeModal())}>{modals[modal]}</ContentsWrapper>
        </Modal>
      )}
    </>
  );
};

export default ModalContainer;
