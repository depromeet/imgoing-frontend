import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import Picker from 'react-native-wheel-scrollview-picker';

import { colors } from 'design-token';
import { Text } from './Text';

interface WheelPickerProps {
  dataSource: string[];
  onValueChange?: (value: string | number, index: number) => void;
  style?: StyleProp<ViewStyle>;
  wrapperHeight?: number;
  itemHeight?: number;
  selectedIndex?: number;
}
const WheelPicker = (props: WheelPickerProps) => {
  const {
    dataSource,
    onValueChange,
    style,
    wrapperHeight = 180,
    itemHeight = 60,
    selectedIndex = 1,
  } = props;
  return (
    <Picker
      style={style}
      dataSource={dataSource}
      selectedIndex={selectedIndex}
      onValueChange={onValueChange}
      wrapperColor={'#ffffff'}
      renderItem={(data, _index, isSelected) =>
        isSelected ? (
          <Text fontType='BOLD_16' color={colors.black}>
            {data}
          </Text>
        ) : (
          <Text fontType='BOLD_16' color={colors.grayDark}>
            {data}
          </Text>
        )
      }
      wrapperHeight={wrapperHeight}
      itemHeight={itemHeight}
    />
  );
};

export default WheelPicker;
