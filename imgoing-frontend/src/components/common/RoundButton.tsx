import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styled, { css } from 'styled-components';

import SubheadlineTypo from '@/components/typography/SubheadlineTypo';

interface ButtonProps {
  children: React.ReactNode;
  onPress: () => void;
  blank?: boolean;
  disabled?: boolean;
}

const StyledButton = styled(TouchableOpacity)<Pick<ButtonProps, 'blank' | 'disabled'>>`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 50px;
  padding: 15px 36.5px 15px 36.5px;
  border-radius: 25px;
  ${(props) => {
    if (props.disabled)
      return css`
        background: #e8ebed;
      `;
    if (props.blank)
      return css`
        background: #ffffff;
        border: 2px solid #e8ebed;
      `;
    return css`
      background: #0045b0;
    `;
  }}
`;

const RoundButton = (props: ButtonProps) => {
  return (
    <StyledButton {...props} activeOpacity={0.6}>
      <SubheadlineTypo bold color={props.blank ? 'black' : 'white'}>
        {props.children}
      </SubheadlineTypo>
    </StyledButton>
  );
};

export default RoundButton;
