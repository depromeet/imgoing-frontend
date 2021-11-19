import React, { useState } from 'react';
import {
  NativeSyntheticEvent,
  StyleSheet,
  TextInput,
  TextInputChangeEventData,
  TextInputProps,
  View,
} from 'react-native';

export type InputChangeEventType<
  T = {
    name: string;
  },
> = NativeSyntheticEvent<TextInputChangeEventData> & T;

interface InputProps {
  name?: string;
  placeholder?: string;
  onChange?: (e: InputChangeEventType) => void;
}

export const Input = (props: InputProps) => {
  const { name, onChange, placeholder } = props;
  const [isFocus, setFocus] = useState<boolean>(false);
  const style = { ...styles.input, borderColor: isFocus ? '#3485FF' : '#FBFBFB' };
  return (
    <TextInput
      style={style}
      onChange={(e) => onChange && onChange({ ...e, name: String(name) })}
      placeholder={placeholder}
      blurOnSubmit={true}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 45,
    fontSize: 14,
    borderWidth: 2,
    borderColor: '#FBFBFB',
    borderRadius: 8,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: '#FBFBFB',
    color: '#999EAA',
  },
});
