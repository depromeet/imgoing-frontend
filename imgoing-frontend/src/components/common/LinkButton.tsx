import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import styled from 'styled-components/native';

import { SubheadlineTypo } from 'components/typography';

interface ButtonProps extends TouchableOpacityProps {
  children: React.ReactNode;
}

const StyledButton = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const LinkButton = (props: ButtonProps) => {
  return (
    <StyledButton {...props} activeOpacity={0.6}>
      <SubheadlineTypo bold color={'black'} style={{ textDecorationLine: 'underline' }}>
        {props.children}
      </SubheadlineTypo>
    </StyledButton>
  );
};

export default LinkButton;
