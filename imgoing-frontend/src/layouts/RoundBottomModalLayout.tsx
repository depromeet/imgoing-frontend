import React from 'react';
import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import RoundButton from 'components/common/RoundButton';

interface Props {
  children?: React.ReactNode;
  button?: {
    onPress: () => void;
    buttonName: string;
  };
}

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

const RoundBottomModalLayout = (props: Props) => {
  const { children, button } = props;
  return (
    <ModalView>
      <ModalContainer>
        {children}
        {button && <RoundButton onPress={button.onPress}>{button.buttonName}</RoundButton>}
      </ModalContainer>
    </ModalView>
  );
};

export default RoundBottomModalLayout;
