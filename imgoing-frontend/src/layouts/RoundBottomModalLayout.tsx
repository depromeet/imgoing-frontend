import React from 'react';
import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

const ModalView = styled.View`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: flex-end;
`;

const ModalContainer = styled.View`
  display: flex;
  background-color: white;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  padding: 12px 20px ${getBottomSpace()}px 20px;
`;

const RoundBottomModalLayout = (props: { children?: React.ReactNode }) => {
  return (
    <ModalView>
      <ModalContainer>{props.children}</ModalContainer>
    </ModalView>
  );
};

export default RoundBottomModalLayout;
