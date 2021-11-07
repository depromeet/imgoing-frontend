import React, { useState, useEffect } from 'react';
import { ScrollView, View } from 'react-native';
import DraggableFlatList, { RenderItemParams } from 'react-native-draggable-flatlist';
import styled from 'styled-components/native';
import { icon_plus } from 'assets/svg';
import { InputChangeEventType } from 'components/common/Input';
import RectangleButton from 'components/common/RectangleButton';
import { SubheadlineTypo } from 'components/typography';
import BottomButtonLayout from 'layouts/BottomButtonLayout';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Plan } from 'types/index';
import { updatePlan } from 'modules/thunks/plan';
import EditInputList from 'components/PlanEdit/EditInputList';
import TaskItem from 'components/TaskItem';
import { resetStep, setStep, setTask } from 'modules/slices/stepOfAddingPlan';
import { setModal } from 'modules/slices/modal';
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
  const [id] = useState<number>(identify?.id || 0);

  const onChangeHandler = (e: InputChangeEventType) => {
    if (e.name !== 'destination') {
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

  const onSubmit = () => {
    const _data = {
      ...data,
      tasks: userInputs.tasks || [],
    };
    identify?.id && dispatch(updatePlan({ ..._data, id: id }));
    navigation.navigate('Main');
  };

  useEffect(() => {
    dispatch(resetStep());
    dispatch(
      setStep({
        type: null,
        userInput: { tasks: plan.tasks },
      }),
    );
    return () => {
      dispatch(resetStep());
    };
  }, []);

  useEffect(() => {
    const departure = {
      lat: userInputs.departure?.coordinate.lat || 0,
      lng: userInputs.departure?.coordinate.lng || 0,
      name: userInputs.departure?.name || '',
    };
    userInputs.departure?.name && setData({ ...data, departure: departure });
  }, [userInputs.departure]);

  useEffect(() => {
    const arrival = {
      lat: userInputs.arrival?.coordinate.lat || 0,
      lng: userInputs.arrival?.coordinate.lng || 0,
      name: userInputs.arrival?.name || '',
    };
    userInputs.arrival?.name && setData({ ...data, arrival: arrival });
  }, [userInputs.arrival]);

  useEffect(() => {
    userInputs.arrivalDateTime &&
      setData({ ...data, arrivalAt: String(userInputs.arrivalDateTime) });
  }, [userInputs.arrivalDateTime]);

  const renderItem = ({ item, drag, isActive }: RenderItemParams<TaskType>) => (
    <TaskItem
      id={item.id}
      key={item.id}
      time={item.time}
      name={item.name}
      notification={item.notification}
      isBookmarked={item.isBookmarked}
      onLongPress={drag}
      disabled={isActive}
    />
  );

  return (
    <BottomButtonLayout disabled={!data.name} text='적용하기' onPress={onSubmit}>
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
          {userInputs.tasks && (
            <DraggableFlatList
              data={userInputs.tasks}
              onDragEnd={({ data }) => dispatch(setTask(data))}
              keyExtractor={(item) => item.id.toString()}
              renderItem={renderItem}
            />
          )}
        </EditView>
      </ScrollView>
    </BottomButtonLayout>
  );
};

export default EditScreen;
