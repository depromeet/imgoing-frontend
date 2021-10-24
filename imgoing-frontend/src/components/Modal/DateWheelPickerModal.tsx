import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components/native';

import WheelPicker from 'components/common/WheelPicker';
import { removeModal } from 'modules/slices/modal';
import RoundBottomModalLayout from 'layouts/RoundBottomModalLayout';

const PickerContainer = styled.View`
  display: flex;
  height: 180px;
  flex-direction: row;
`;

const Picker = styled.View`
  flex: 1;
  padding: 0 16px;
`;

const DateWheelPickerModal = () => {
  const dispatch = useDispatch();

  return (
    <RoundBottomModalLayout
      button={{ onPress: () => dispatch(removeModal()), buttonName: '선택 완료' }}>
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
    </RoundBottomModalLayout>
  );
};

export default DateWheelPickerModal;
