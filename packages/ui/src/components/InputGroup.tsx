import { colors } from 'design-token';
import { InputChangeEventType } from '.';
import { Text } from './Text';
import React, { useRef, useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

type InputGroup = {
  name?: string;
  visiableName?: string;
  placeholder?: string;
  onPress?: () => void;
};

interface InputGroupProps {
  name: string;
  items: InputGroup[];
  onChange?: (e: InputChangeEventType) => void;
}

export const InputGroup = (props: InputGroupProps) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [focusName, setFocusName] = useState<string>('');
  const refArray = useRef<Array<TextInput | null>>([]);
  const { name, items, onChange } = props;

  const onFocusHandler = (name: string, focus: boolean) => {
    setFocusName(name);
    setIsFocus(focus);
  };

  const renderItem = (item: InputGroup, index: number) => (
    <View style={styles.inputWrapper} key={index}>
      <Text fontType='BOLD_12' color={item.name === focusName ? colors.blue : colors.grayDark}>
        {item.visiableName}
      </Text>
      <TextInput
        ref={(element) => (refArray.current[index] = element)}
        onSubmitEditing={() => refArray.current[index + 1]?.focus()}
        style={styles.textInput}
        onTouchEnd={item.onPress}
        onChange={(e) => onChange && onChange({ ...e, name: String(item.name) })}
        onFocus={() => onFocusHandler(item.name || '', true)}
        onBlur={() => onFocusHandler('', false)}
        placeholder={item.placeholder}
      />
    </View>
  );

  return (
    <View style={{ width: '100%' }}>
      <Text fontType='BOLD_16' style={{ marginBottom: 12 }}>
        {name}
      </Text>
      <View
        style={{
          ...styles.inputListWrapper,
          borderColor: isFocus ? colors.blue : colors.grayLight,
        }}>
        {items.map(renderItem)}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputListWrapper: {
    backgroundColor: colors.grayLight,
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
