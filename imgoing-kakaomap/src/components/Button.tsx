import React from 'react';
import styled, { css } from 'styled-components';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  blank?: boolean;
  disabled?: boolean;
}

const StyledButton = styled.button<Pick<ButtonProps, 'blank' | 'disabled'>>`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 50px;
  padding: 15px 36.5px 15px 36.5px;
  border-radius: 25px;
  border: 0px;
  color: #ffffff;
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

const Button = (props: ButtonProps) => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};

export default Button;
