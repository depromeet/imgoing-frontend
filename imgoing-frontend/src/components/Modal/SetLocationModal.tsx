import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/native';

import { removeModal } from 'modules/slices/modal';
import RoundBottomModalLayout from 'layouts/RoundBottomModalLayout';
import WheelPicker from 'components/common/WheelPicker';
import Input from 'components/common/Input';
import { Keyboard, View } from 'react-native';
import WebView from 'react-native-webview';
import { setStep } from 'modules/slices/stepOfAddingPlan';
import { setLocationType } from 'types/index';

const PickerContainer = styled.View`
  display: flex;
  height: 180px;
  flex-direction: row;
`;

const Picker = styled.View`
  flex: 1;
  padding: 0 16px;
`;

const Step1 = () => {
  return <Input style={{ marginBottom: 10 }} />;
};

const Step2 = () => {
  return (
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
    </PickerContainer>
  );
};

type LevelType = 1 | 2;

const step: {
  [key in LevelType]: {
    title: string;
    component: React.ReactNode;
    buttonName: string;
  };
} = {
  1: {
    title: '준비 항목 추가',
    component: <Step1 />,
    buttonName: '소요 시간 입력하기',
  },
  2: {
    title: '소요 시간 입력',
    component: <Step2 />,
    buttonName: '등록하기',
  },
};

const SetLocationModal = () => {
  const dispatch = useDispatch();
  const place = useRef<setLocationType>();
  const props = useSelector((state) => state.modal?.props);

  // 웹뷰 -> 앱
  const onMessage = (e: any) => {
    if (!e.nativeEvent.data) return;

    const data: setLocationType = JSON.parse(e.nativeEvent.data);
    place.current = data;

    dispatch(
      setStep({
        type: null,
        userInput: {
          [props?.type === 'setLocation/departure' ? 'departure' : 'arrival']: place.current,
        },
      }),
    );

    Keyboard.dismiss();
    dispatch(removeModal());
  };

  return (
    <RoundBottomModalLayout title={'장소 입력하기'} style={{ paddingLeft: 0, paddingRight: 0 }}>
      <View style={{ height: 650 }}>
        <WebView source={{ uri: 'https://eunseong.loca.lt' }} onMessage={onMessage} />
      </View>
    </RoundBottomModalLayout>
  );
};

export default SetLocationModal;
