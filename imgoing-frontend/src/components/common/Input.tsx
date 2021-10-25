import { useState } from 'react';
import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import styled from 'styled-components/native';

import { SubheadlineTypo } from 'components/typography';
import { colors } from 'constant/index';

interface InputProps extends TextInputProps {
  title?: string;
}

interface OwnProps {
  isFocus: boolean;
}

const StyledInput = styled(TextInput)<OwnProps & InputProps>`
  width: 100%;
  height: 50px;
  background: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme, isFocus }) => (isFocus ? theme.colors.blue : theme.colors.black)};
  border-radius: 4px;
  font-size: 16px;
  padding: 13px 16px 14px 16px;
`;
const InputWrapper = styled.View``;

const Input = (props: InputProps) => {
  const { style, ...restProps } = props;
  const [isFocus, setFocus] = useState<boolean>(false);
  return (
    <InputWrapper style={style}>
      {props.title && (
        <SubheadlineTypo color='grayHeavy' style={{ paddingLeft: 2, marginBottom: 14 }}>
          {props.title}
        </SubheadlineTypo>
      )}
      <StyledInput
        isFocus={isFocus}
        placeholderTextColor={colors.grayHeavy}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        {...restProps}
      />
    </InputWrapper>
  );
};

export default Input;
