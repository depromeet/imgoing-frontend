import React from 'react';
import styled from 'styled-components/native';
import { ViewProps } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import RoundButton from 'components/common/RoundButton';
import { BodyTypo } from 'components/typography';
import { colors } from 'constant/index';

interface Props extends ViewProps {
  children?: React.ReactNode;
  button?: {
    onPress: () => void;
    buttonName: string;
    disabled?: boolean;
  };
  title?: string;
}

const ModalContainer = styled.View`
  display: flex;
  width: 100%;
  margin-top: auto;
  background-color: ${colors.white};
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  padding-bottom: ${getBottomSpace()}px;
`;

const Bar = styled.View`
  width: 70px;
  height: 5px;
  background-color: ${colors.grayDark};
  border-radius: 100px;
  align-self: center;
  margin: 12px 0;
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
    <ModalContainer>
      <Bar />
      {title && (
        <BodyTypo bold style={{ marginBottom: 16, marginTop: 8, marginLeft: 20, marginRight: 20 }}>
          {title}
        </BodyTypo>
      )}
      <ContentsWrapper style={style}>
        {children}
        {button && (
          <ButtonWrapper>
            <RoundButton onPress={button.onPress} disabled={button.disabled}>
              {button.buttonName}
            </RoundButton>
          </ButtonWrapper>
        )}
      </ContentsWrapper>
    </ModalContainer>
  );
};

export default RoundBottomModalLayout;
