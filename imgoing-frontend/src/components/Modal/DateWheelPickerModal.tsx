import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import WheelPicker from 'components/common/WheelPicker';
import RoundButton from 'components/common/RoundButton';
import { removeModal } from 'modules/slices/modal';

const ModalView = styled.View`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: flex-end;
  /* align-items: center; */
`;

const PickerContainer = styled.View`
  display: flex;
  flex-direction: row;
  height: 180px;
  padding: 12px 28px 0 28px;
  background-color: white;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
`;

const Picker = styled.View`
  flex: 1;
  padding: 0 16px;
`;

const ButtonView = styled.View`
  background-color: white;
  padding: 12px 20px ${getBottomSpace()}px 20px;
`;

const DateWheelPickerModal = () => {
  const dispatch = useDispatch();

  return (
    <ModalView>
      <PickerContainer>
        <Picker>
          <WheelPicker
            dataSource={[
              '오늘',
              '내일',
              '10월 3일(일)',
              '10월 3일(일)',
              '10월 3일(일)',
              '10월 3일(일)',
            ]}
          />
        </Picker>
        <Picker>
          <WheelPicker
            dataSource={[
              '14시 30분',
              '15시 00분',
              '15시 30분',
              '16시 00분',
              '16시 30분',
              '17시 00분',
              '17시 30분',
            ]}
          />
        </Picker>
      </PickerContainer>
      <ButtonView>
        <RoundButton onPress={() => dispatch(removeModal())}>선택 완료</RoundButton>
      </ButtonView>
    </ModalView>
  );
};

export default DateWheelPickerModal;
