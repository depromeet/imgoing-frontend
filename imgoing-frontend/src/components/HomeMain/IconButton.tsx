import React from 'react';
import { Image } from 'react-native';
import styled, { css } from 'styled-components/native';
import SubheadlineTypo from '@/components/typography/SubheadlineTypo';

interface ButtonProps {
  children: React.ReactNode;
  onPress: () => void;
  full?: boolean;
}

const Gap = styled.View`
  width: 4px;
`;

const StyledButton = styled.TouchableOpacity<Pick<ButtonProps, 'full'>>`
  position: absolute;
  top: 95%;
  flex-direction: row;
  text-align: center;
  border-radius: 100px;
  margin-bottom: 15px;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.colors.blue};
  ${(props) => {
    if (!props.full)
      return css`
        width: 56px;
        height: 56px;
        padding: 16px;
        left: 80%;
      `;
    return css`
      width: 145px;
      height: 50px;
      padding: 15px 20px 15px 20px;
      left: 60%;
    `;
  }}
`;

const IconButton = (props: ButtonProps) => {
  return (
    <StyledButton {...props}>
      <Image source={require('../@assets/images/plus.png')} />
      {props.full && (
        <>
          <Gap />
          <SubheadlineTypo bold color={'white'}>
            {props.children}
          </SubheadlineTypo>
        </>
      )}
    </StyledButton>
  );
};

export default IconButton;
