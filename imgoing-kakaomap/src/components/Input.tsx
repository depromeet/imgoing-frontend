import React from 'react';
import styled from 'styled-components';

interface InputProps {
  isValueEmpty: boolean;
  placeholder: string;
  ref: React.RefObject<HTMLInputElement>;
  onKeyUp?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const StyledInput = styled.input<Pick<InputProps, 'isValueEmpty'>>`
  width: 100%;
  height: 50px;
  background: #ffffff;
  border: 2px solid ${(props) => (props.isValueEmpty ? '#313338' : '#0045b0')};
  box-sizing: border-box;
  border-radius: 4px;
  font-size: 16px;
  padding: 13px 16px 14px 16px;
  outline: none;

  &:focus {
    border: 2px solid #0045b0;
  }
`;

const Input = React.forwardRef((props: InputProps, ref: React.ForwardedRef<HTMLInputElement>) => {
  return <StyledInput {...props} ref={ref} />;
});

export default Input;
