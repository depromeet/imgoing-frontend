import React from 'react';
import { StyleSheet, TouchableOpacityProps } from 'react-native';
import { SvgXml } from 'react-native-svg';
import styled from 'styled-components/native';

import { colors } from 'constant/index';
import { SubheadlineTypo } from 'components/typography';

interface RectangleButtonProps extends TouchableOpacityProps {
  children: React.ReactNode;
  leftIcon?: string;
  rightIcon?: string;
}

const StyledButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.blueLight};
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const styles = StyleSheet.create({
  leftstyle: {
    padding: 13,
    justifyContent: 'center',
  },
  rightstyle: {
    padding: 13,
    justifyContent: 'space-between',
  },
});

const RectangleButton = (props: RectangleButtonProps) => {
  const { children, leftIcon, rightIcon, ...restProps } = props;
  return (
    <StyledButton {...restProps} style={leftIcon ? styles.leftstyle : styles.rightstyle}>
      {leftIcon && <SvgXml style={{ marginRight: 8 }} xml={leftIcon} fill={colors.blue} />}
      <SubheadlineTypo bold color='blue'>
        {children}
      </SubheadlineTypo>
      {rightIcon && <SvgXml xml={rightIcon} fill={colors.blue} />}
    </StyledButton>
  );
};

export default RectangleButton;
