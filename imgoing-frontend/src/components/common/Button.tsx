import React from 'react';
import styled from 'styled-components/native';

import CaptionTypo from '../typography/CaptionTypo';

interface ButtonProps {
  children: React.ReactNode;
}

const Wrapper = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-right: 36.5px;
  padding-left: 36.5px;
  background-color: #0045b0;
  border-radius: 25px;
`;

const Button = (props: ButtonProps) => {
  const { children } = props;
  return <Wrapper>{children}</Wrapper>;
};

export default Button;
