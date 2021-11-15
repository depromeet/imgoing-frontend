import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components/native';

import WheelPicker from 'components/common/WheelPicker';
import { removeModal } from 'modules/slices/modal';
import RoundBottomModalLayout from 'layouts/RoundBottomModalLayout';
import { setStep } from 'modules/slices/stepOfAddingPlan';
import { Platform } from 'react-native';

const PickerContainer = styled.View`
  display: flex;
  height: 180px;
  flex-direction: row;
`;

const Picker = styled.View`
  flex: 1;
  padding: 0 16px;
`;

const day = ['일', '월', '화', '수', '목', '금', '토'];

const getLocaleDate = (date: Date): [string, string, string] => {
  const localeDateString = date.toLocaleDateString();
  let [todayYear, todayMonth, todayDate] = ['', '', ''];

  if (Platform.OS === 'android') [todayMonth, todayDate, todayYear] = localeDateString.split('/');
  else [todayYear, todayMonth, todayDate] = localeDateString.replace(/\s/g, '').split('.');

  return [todayYear, todayMonth, todayDate];
};

const getDateFromToday = (year = 0, month = 0, date = 0): string[] => {
  const [todayYear, todayMonth, todayDate] = getLocaleDate(new Date());

  if (year === 0 && month === 0 && date === 0) return [todayYear, todayMonth, todayDate];

  const newDate = new Date(+todayYear + year, +todayMonth - 1 + month, +todayDate + date);
  return [...getLocaleDate(newDate), day[newDate.getDay()]];
};

const getDateList = (): string[] => {
  const list = ['오늘', '내일'];
  for (let i = 0; i < 60; i++) {
    const dateItem = getDateFromToday(0, 0, i + 2);
    list.push(`${dateItem[1]}월 ${dateItem[2]}일 (${dateItem[3]})`);
  }
  return list;
};

const getTimeList = (duration = 30): string[] => {
  const list = [];
  for (let i = 0; i < 24; i++) {
    for (let j = 0; j < 60 / duration; j++) {
      list.push(`${i}시 ${(j * duration).toString().padEnd(2, '0')}분`);
    }
  }
  return list;
};

const getArrivalDateTime = (timeString: string, date: string[]) => {
  const [hour, , miniutes, _]: string[] = timeString
    .replace(/\s/g, '')
    .split(/(시|분)/g)
    .map((i) => i.toString());

  return `20${date[0]}-${date[1].padStart(2, '0')}-${date[2].padStart(2, '0')} ${hour.padStart(
    2,
    '0',
  )}:${miniutes.padStart(2, '0')}:00`;
};

const DateWheelPickerModal = () => {
  const dispatch = useDispatch();
  const selectedDateIndex = useRef<number>(1);
  const selectedTime = useRef<string>(getTimeList()[24]);

  const onDateIndexChange = (value: string | number, index: number) => {
    selectedDateIndex.current = index;
  };

  const onTimeChange = (value: string | number) => {
    selectedTime.current = value as string;
  };

  const onPress = () => {
    const arrivalDateTime = getArrivalDateTime(
      selectedTime.current,
      getDateFromToday(0, 0, selectedDateIndex.current),
    );

    dispatch(
      setStep({
        type: null,
        userInput: {
          arrivalDateTime: arrivalDateTime,
        },
      }),
    );
    dispatch(removeModal());
  };

  return (
    <RoundBottomModalLayout button={{ onPress, buttonName: '선택 완료' }}>
      <PickerContainer>
        <Picker>
          <WheelPicker dataSource={getDateList()} onValueChange={onDateIndexChange} />
        </Picker>
        <Picker>
          <WheelPicker dataSource={getTimeList()} onValueChange={onTimeChange} selectedIndex={24} />
        </Picker>
      </PickerContainer>
    </RoundBottomModalLayout>
  );
};

export default DateWheelPickerModal;
