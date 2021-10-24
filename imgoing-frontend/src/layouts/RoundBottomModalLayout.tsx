import React from 'react';
import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import RoundButton from 'components/common/RoundButton';
import { BodyTypo } from 'components/typography';

interface Props {
  children?: React.ReactNode;
  button?: {
    onPress: () => void;
    buttonName: string;
  };
  title?: string;
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

const ButtonWrapper = styled.View`
  margin-top: 12px;
`;

const RoundBottomModalLayout = (props: Props) => {
  const { children, button, title } = props;
  return (
    <ModalView>
      <ModalContainer>
        {title && <BodyTypo bold>{title}</BodyTypo>}
        {children}
        {button && (
          <ButtonWrapper>
            <RoundButton onPress={button.onPress}>{button.buttonName}</RoundButton>
          </ButtonWrapper>
        )}
      </ModalContainer>
    </ModalView>
  );
};

export default RoundBottomModalLayout;
