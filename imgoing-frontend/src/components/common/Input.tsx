import { useState } from 'react';
import React from 'react';
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputChangeEventData,
  TextInputProps,
} from 'react-native';
import styled, { css } from 'styled-components/native';

import { SubheadlineTypo } from 'components/typography';
import { colors } from 'constant/index';

export type InputChangeEventType<
  T = {
    name: string;
  },
> = NativeSyntheticEvent<TextInputChangeEventData> & T;

export interface InputProps extends Omit<TextInputProps, 'onChange'> {
  title?: string;
  name?: string;
  long?: boolean;
  onChange?: (e: InputChangeEventType) => void;
}

interface OwnProps {
  isFocus: boolean;
}

const StyledInput = styled(TextInput)<OwnProps & InputProps>`
  width: 100%;
  background: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme, isFocus }) => (isFocus ? theme.colors.blue : theme.colors.black)};
  border-radius: 4px;
  font-size: 16px;
  padding: 13px 16px 14px 16px;
  ${(props) => {
    if (props.long)
      return css`
        height: 150px;
      `;
    return css`
      height: 50px;
    `;
  }}
`;
const InputWrapper = styled.View``;

const Input = (props: InputProps) => {
  const { style, onChange, name, long, ...restProps } = props;
  const [isFocus, setFocus] = useState<boolean>(false);
  return (
    <InputWrapper style={style}>
      {props.title && (
        <SubheadlineTypo color='grayHeavy' style={{ paddingLeft: 2, marginBottom: 14 }}>
          {props.title}
        </SubheadlineTypo>
      )}
      <StyledInput
        long={long}
        isFocus={isFocus}
        name={name}
        onChange={(e) => onChange && onChange({ ...e, name: String(name) })}
        placeholderTextColor={colors.grayHeavy}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        {...restProps}
      />
    </InputWrapper>
  );
};

export default Input;
