import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';

import { icon_plus } from 'assets/svg';
import { InputChangeEventType } from 'components/common/Input';
import RectangleButton from 'components/common/RectangleButton';
import { SubheadlineTypo } from 'components/typography';
import BottomButtonLayout from 'layouts/BottomButtonLayout';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Location, Plan } from 'types/index';
import { updatePlan } from 'modules/slices/plan';
import EditInputList from 'components/PlanEdit/EditInputList';
import TaskItem from 'components/TaskItem';

const EditView = styled.View`
  padding: 0 15px;
  padding-bottom: 90px;
  padding-top: 20px;
  background: white;
`;

const EditScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const plans = useSelector((state) => state.plan);
  const identify = useSelector((state) => state.identify);
  const plan = plans.filter((item) => item.id === identify?.id)[0];
  const [data, setData] = useState<Plan>(plan);

  const onChangeHandler = (e: InputChangeEventType) => {
    if (e.name === 'destination') {
      {
        /* 아래 부분은 일단 임시로 두었습니다. */
      }
      const destination: Location = {
        name: e.nativeEvent.text,
        lat: 37.5093176,
        lng: 127.0576216,
      };
      setData({ ...data, arrival: destination });
    } else {
      setData({ ...data, [e.name]: e.nativeEvent.text });
    }
  };

  return (
    <BottomButtonLayout
      text='적용하기'
      onPress={() => {
        navigation.navigate('Main');
        dispatch(updatePlan(data));
      }}>
      <ScrollView style={{ backgroundColor: 'white' }}>
        <EditView>
          <EditInputList data={data} onChange={onChangeHandler} />
          <SubheadlineTypo style={{ marginBottom: 14 }} color='grayHeavy'>
            어떤 준비가 필요할까요?
          </SubheadlineTypo>
          <RectangleButton leftIcon={icon_plus}>등록해 주세요</RectangleButton>
          {data.tasks.map((i, index) => (
            <TaskItem style={{ marginTop: 12 }} key={index} {...i} />
          ))}
        </EditView>
      </ScrollView>
    </BottomButtonLayout>
  );
};

export default EditScreen;
