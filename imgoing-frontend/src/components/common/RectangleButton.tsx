import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { SvgXml } from 'react-native-svg';
import styled from 'styled-components/native';

import { colors } from 'constant/index';
import { SubheadlineTypo } from 'components/typography';

interface RectangleButtonProps extends TouchableOpacityProps {
  children: React.ReactNode;
  leftIcon?: string;
}

const StyledButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.blueLight};
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const RectangleButton = (props: RectangleButtonProps) => {
  const { children, leftIcon, ...restProps } = props;
  return (
    <StyledButton {...restProps}>
      {leftIcon && <SvgXml style={{ marginRight: 8 }} xml={leftIcon} fill={colors.blue}></SvgXml>}
      <SubheadlineTypo bold color='blue'>
        {children}
      </SubheadlineTypo>
    </StyledButton>
  );
};

export default RectangleButton;
