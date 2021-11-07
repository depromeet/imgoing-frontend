import { useState } from 'react';
import React from 'react';
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputChangeEventData,
  TextInputProps,
} from 'react-native';
import styled, { css } from 'styled-components/native';

import { CaptionTypo, SubheadlineTypo } from 'components/typography';
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
  height: ${(props) => (props.long ? 150 : 50)}px;
`;

const InputWrapper = styled.View``;

const WordCountView = styled.View`
  align-items: flex-end;
  padding: 5px;
`;

const Input = (props: InputProps) => {
  const { style, onChange, name, long, value, ...restProps } = props;
  const [isFocus, setFocus] = useState<boolean>(false);
  const [wordCount, setWordCount] = useState<number>(value?.length || 0);

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
        onChange={(e) => {
          setWordCount(e.nativeEvent.text.length);
          onChange && onChange({ ...e, name: String(name) });
        }}
        placeholderTextColor={colors.grayHeavy}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={long && { textAlignVertical: 'top' }}
        value={value}
        {...restProps}
      />
      {long && (
        <WordCountView>
          <CaptionTypo color={wordCount < 100 ? 'black' : 'red'}>
            {wordCount}/{props.maxLength}
          </CaptionTypo>
        </WordCountView>
      )}
    </InputWrapper>
  );
};

export default Input;
