import React from 'react';
import styled from 'styled-components/native';
import { ViewProps } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import RoundButton from 'components/common/RoundButton';
import { BodyTypo } from 'components/typography';

interface Props extends ViewProps {
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

const ModalContainer = styled.Pressable`
  display: flex;
  background-color: white;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  padding-top: 12px;
  padding-bottom: ${getBottomSpace()}px;
`;

const ContentsWrapper = styled.View`
  padding: 0 20px;
`;

const ButtonWrapper = styled.View`
  margin: 12px 0 20px 0;
`;

const RoundBottomModalLayout = (props: Props) => {
  const { children, button, title, style, ...restProps } = props;
  return (
    <ModalView>
      <ModalContainer>
        {title && (
          <BodyTypo
            bold
            style={{ marginBottom: 16, marginTop: 8, marginLeft: 20, marginRight: 20 }}>
            {title}
          </BodyTypo>
        )}
        <ContentsWrapper style={style}>
          {children}
          {button && (
            <ButtonWrapper>
              <RoundButton onPress={button.onPress}>{button.buttonName}</RoundButton>
            </ButtonWrapper>
          )}
        </ContentsWrapper>
      </ModalContainer>
    </ModalView>
  );
};

export default RoundBottomModalLayout;
