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

const getDateFromToday = (year = 0, month = 0, date = 0): number[] => {
  const [todayYear, todayMonth, todayDate] = new Date()
    .toLocaleDateString()
    .replaceAll(' ', '')
    .split('.')
    .map((i) => +i);

  if (year === 0 && month === 0 && date === 0) return [todayYear, todayMonth, todayDate];

  return new Date(todayYear + year, todayMonth - 1 + month, todayDate + date)
    .toLocaleDateString()
    .replaceAll(' ', '')
    .split('.')
    .map((i) => +i);
};

const getDateList = () => {
  const list = ['오늘', '내일'];
  for (let i = 0; i < 60; i++) {
    const dateItem = getDateFromToday(0, 0, i + 2);
    list.push(`${dateItem[1]}월 ${dateItem[2]}일`);
  }
  return list;
};

const getTimeList = () => {
  const duration = 30;
  const list = [];

  for (let i = 0; i < 24; i++) {
    for (let j = 0; j < 60 / duration; j++) {
      list.push(`${i}시 ${(j * duration).toString().padEnd(2, '0')}분`);
    }
  }
  return list;
};

const DateWheelPickerModal = () => {
  const dispatch = useDispatch();

  return (
    <RoundBottomModalLayout
      button={{ onPress: () => dispatch(removeModal()), buttonName: '선택 완료' }}>
      <PickerContainer>
        <Picker>
          <WheelPicker dataSource={getDateList()} />
        </Picker>
        <Picker>
          <WheelPicker dataSource={getTimeList()} />
        </Picker>
      </PickerContainer>
    </RoundBottomModalLayout>
  );
};

export default DateWheelPickerModal;
