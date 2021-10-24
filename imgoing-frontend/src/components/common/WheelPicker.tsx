import React from 'react';
import { CalloutTypo } from 'components/typography';
import { StyleProp, ViewStyle } from 'react-native';
import Picker from 'react-native-wheel-scrollview-picker';

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
          <CalloutTypo bold color='black'>
            {data}
          </CalloutTypo>
        ) : (
          <CalloutTypo color='grayHeavy'>{data}</CalloutTypo>
        )
      }
      wrapperHeight={wrapperHeight}
      itemHeight={itemHeight}
    />
  );
};

export default WheelPicker;
