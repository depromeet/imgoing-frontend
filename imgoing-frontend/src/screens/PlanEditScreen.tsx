import React, { useState, useEffect } from 'react';
import { ScrollView, View } from 'react-native';
import styled from 'styled-components/native';

import { icon_plus } from 'assets/svg';
import { InputChangeEventType } from 'components/common/Input';
import RectangleButton from 'components/common/RectangleButton';
import { SubheadlineTypo } from 'components/typography';
import BottomButtonLayout from 'layouts/BottomButtonLayout';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Destination, Plan } from 'types/index';
import { updatePlan } from 'modules/slices/plan';
import EditInputList from 'components/PlanEdit/EditInputList';
import TaskItem from 'components/TaskItem';
import { resetStep } from 'modules/slices/stepOfAddingPlan';
import { setModal } from 'modules/slices/modal';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import LinkButton from 'components/common/LinkButton';

const EditView = styled.View`
  padding: 0 15px;
  padding-bottom: 100px;
  padding-top: 20px;
  background: white;
`;

const EditScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const plans = useSelector((state) => state.plan);
  const identify = useSelector((state) => state.identify);
  const plan = plans.filter((item) => item.id === identify?.id)[0];
  const { userInputs } = useSelector((state) => state.stepOfAddingPlan);
  const [data, setData] = useState<Plan>(plan);

  const onChangeHandler = (e: InputChangeEventType) => {
    if (e.name === 'destination') {
      {
        /* 아래 부분은 일단 임시로 두었습니다. */
      }
      const destination: Destination = {
        dest_name: e.nativeEvent.text,
        dest_lat: 37.5093176,
        dest_lng: 127.0576216,
      };
      setData({ ...data, destination: destination });
    } else {
      setData({ ...data, [e.name]: e.nativeEvent.text });
    }
  };

  const onToggle = (id: number, isToggle: boolean) => {
    setData({
      ...data,
      tasks: data.tasks.map((item) =>
        item.id === id ? { ...item, notification: isToggle } : item,
      ),
    });
  };

  useEffect(() => {
    dispatch(resetStep());
    return () => {
      dispatch(resetStep());
    };
  }, []);

  useEffect(() => {
    const destination = {
      dest_name: String(userInputs.arrival?.name),
      dest_lat: 0,
      dest_lng: 0,
    };
    userInputs.arrival?.name && setData({ ...data, destination: destination });
  }, [userInputs.arrival]);

  useEffect(() => {
    userInputs.arrivalDateTime &&
      setData({ ...data, arrival_at: String(userInputs.arrivalDateTime) });
  }, [userInputs.arrivalDateTime]);

  useEffect(() => {
    const tasks = userInputs.tasks;
    tasks && tasks.length > 0 && setData({ ...data, tasks: [...data.tasks, ...tasks] });
    dispatch(resetStep());
  }, [userInputs.tasks]);
  return (
    <BottomButtonLayout
      disabled={!data.name}
      text='적용하기'
      onPress={() => {
        navigation.navigate('Main');
        dispatch(updatePlan(data));
        dispatch(resetStep());
      }}>
      <ScrollView style={{ backgroundColor: 'white' }}>
        <EditView>
          <EditInputList data={data} onChange={onChangeHandler} />
          <SubheadlineTypo style={{ marginBottom: 14 }} color='grayHeavy'>
            어떤 준비가 필요할까요?
          </SubheadlineTypo>
          <RectangleButton
            onPress={() => dispatch(setModal({ modalType: 'addTask' }))}
            leftIcon={icon_plus}>
            등록해 주세요
          </RectangleButton>
          <View
            style={{
              display: 'flex',
              alignItems: 'center',
              paddingTop: 16,
            }}>
            <LinkButton onPress={() => dispatch(setModal({ modalType: 'loadBookmark' }))}>
              불러 오기
            </LinkButton>
          </View>
          {data.tasks.map((i, index) => (
            <TaskItem onToggle={onToggle} key={index} {...i} />
          ))}
        </EditView>
      </ScrollView>
    </BottomButtonLayout>
  );
};

export default EditScreen;
