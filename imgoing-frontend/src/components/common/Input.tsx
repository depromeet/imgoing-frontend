import React from 'react';
import { TextInput } from 'react-native';
import styled from 'styled-components';

interface InputProps {
  isValueEmpty: boolean;
  placeholder: string;
  onKeyUp?: (e: React.KeyboardEvent<TextInput>) => void;
}

const StyledInput = styled(TextInput)<Pick<InputProps, 'isValueEmpty'>>`
  width: 100%;
  height: 50px;
  background: #ffffff;
  border: 2px solid ${(props) => (props.isValueEmpty ? '#313338' : '#0045b0')};
  border-radius: 4px;
  font-size: 16px;
  padding: 13px 16px 14px 16px;
`;

const Input = (props: InputProps) => {
  return <StyledInput {...props} />;
};

export default Input;
