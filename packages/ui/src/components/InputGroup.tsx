import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { InputChangeEventType } from '.';

type InputGroup = {
  name?: string;
  placeholder?: string;
};

interface InputGroupProps {
  name: string;
  items: InputGroup[];
  onChange?: (e: InputChangeEventType) => void;
}

export const InputGroup = (props: InputGroupProps) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [focusName, setFocusName] = useState<string>('');
  const { name, items, onChange } = props;

  const onFocusHandler = (name: string, focus: boolean) => {
    setFocusName(name);
    setIsFocus(focus);
  };

  const renderItem = (item: InputGroup, index: number) => (
    <View style={styles.inputWrapper} key={index}>
      <Text style={{ color: item.name === focusName ? '#3485FF' : '#999EAA' }}>{item.name}</Text>
      <TextInput
        style={styles.textInput}
        onChange={(e) => onChange && onChange({ ...e, name: String(item.name) })}
        onFocus={() => onFocusHandler(item.name || '', true)}
        onBlur={() => onFocusHandler('', false)}
        placeholder={item.placeholder}></TextInput>
    </View>
  );

  return (
    <View style={{ height: 40, width: '100%' }}>
      <Text style={styles.groupName}>{name}</Text>
      {/* Typography 추가되면 Title로 변경 필요 */}
      <View style={{ ...styles.inputListWrapper, borderColor: isFocus ? '#3485FF' : '#FBFBFB' }}>
        {items.map(renderItem)}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupName: {
    color: '#333A44',
    paddingLeft: 16,
    paddingRight: 16,
  },
  inputListWrapper: {
    backgroundColor: '#FBFBFB',
    width: '100%',
    borderWidth: 2,
    borderRadius: 16,
    paddingTop: 20,
    paddingLeft: 16,
    paddingRight: 16,
  },
  inputWrapper: {
    height: 66,
    width: '100%',
  },
  textInput: {
    width: '100%',
    height: 24,
    marginTop: 8,
  },
});
