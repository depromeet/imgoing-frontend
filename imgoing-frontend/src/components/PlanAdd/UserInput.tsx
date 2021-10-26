import React from 'react';
import { ScrollView, View } from 'react-native';
import styled from 'styled-components/native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { icon_openRight, icon_plus } from 'assets/svg';
import { AddingPlanSteps, inputTextType } from 'types/index';
import { PLAN_STEP_TITLES } from 'constant/plan';
import Input from 'components/common/Input';
import RectangleButton from 'components/common/RectangleButton';
import TaskItem from 'components/TaskItem';
import { SubheadlineTypo } from 'components/typography';
import LinkButton from 'components/common/LinkButton';
import { setModal } from 'modules/slices/modal';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import store from 'modules/store';

interface UserInputProps {
  setInputText: ({ type, text }: { type: keyof inputTextType; text: string }) => void;
}

const Wrapper = styled.View`
  flex: 1;
  padding: 16px;
`;

const EditInput = styled(Input)`
  margin-bottom: 40px;
`;

const Step1 = ({ setInputText }: UserInputProps) => {
  return (
    <EditInput
      title='스케줄 이름을 입력해 주세요'
      placeholder='스케줄 이름 입력하기'
      onChangeText={(text) => setInputText({ type: 'title', text })}
      defaultValue={store.getState().stepOfAddingPlan.userInputs.title || ''}
    />
  );
};

const Step2 = () => {
  const departure = useSelector((state) => state.stepOfAddingPlan.userInputs.departure?.name);
  const dispatch = useDispatch();

  return (
    <RectangleButton
      onPressOut={() =>
        dispatch(
          setModal({
            modalType: 'setLocation',
            props: { type: 'setLocation/departure' },
          }),
        )
      }
      rightIcon={icon_openRight}>
      {departure || '출발지 설정하기'}
    </RectangleButton>
  );
};

const Step3 = () => {
  const arrival = useSelector((state) => state.stepOfAddingPlan.userInputs.arrival?.name);
  const dispatch = useDispatch();

  return (
    <RectangleButton
      onPressOut={() =>
        dispatch(
          setModal({
            modalType: 'setLocation',
            props: { type: 'setLocation/arrival' },
          }),
        )
      }
      rightIcon={icon_openRight}>
      {arrival || '목적지 설정하기'}
    </RectangleButton>
  );
};

const Step4 = () => {
  const time = useSelector((state) => state.stepOfAddingPlan.userInputs.arrivalDateTime);
  const dispatch = useDispatch();

  return (
    <EditInput
      onTouchEnd={() => {
        dispatch(setModal({ modalType: 'datePicker' }));
      }}
      title='도착 시간을 입력해 주세요'
      placeholder='날짜 / 시간 입력하기'
      value={time?.slice(0, time.length - 3) || ''}
    />
  );
};

const Step5 = ({ setInputText }: UserInputProps) => {
  return (
    <EditInput
      title='외출 시 필요한 물품이 있나요'
      placeholder='필요한 물품 입력하기'
      onChangeText={(text) => setInputText({ type: 'items', text })}
      defaultValue={store.getState().stepOfAddingPlan.userInputs.items || ''}
    />
  );
};

const Step6 = ({ setInputText }: UserInputProps) => {
  return (
    <EditInput
      title='일정에 대한 상세 내용을 알려주세요'
      placeholder='상세 내용 입력하기'
      onChangeText={(text) => setInputText({ type: 'details', text })}
      defaultValue={store.getState().stepOfAddingPlan.userInputs.details || ''}
    />
  );
};

const Step7 = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.stepOfAddingPlan.userInputs.tasks);

  return (
    <>
      <SubheadlineTypo color='grayHeavy' style={{ paddingLeft: 2, marginBottom: 14 }}>
        어떤 준비가 필요할까요?
      </SubheadlineTypo>
      <RectangleButton
        leftIcon={icon_plus}
        onPressOut={() => {
          dispatch(setModal({ modalType: 'addTask' }));
        }}>
        등록해 주세요
      </RectangleButton>
      <ScrollView>
        {tasks &&
          tasks.map((task, idx) => (
            <TaskItem
              id={task.id}
              key={idx}
              duration={task.duration}
              name={task.name}
              notification={task.notification}
              isBookmarked={task.isBookmarked}
            />
          ))}
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            paddingBottom: 90 + getStatusBarHeight(),
            paddingTop: 20,
          }}>
          <LinkButton onPress={() => dispatch(setModal({ modalType: 'loadBookmark' }))}>
            불러 오기
          </LinkButton>
        </View>
      </ScrollView>
    </>
  );
};

const UserInput = (props: UserInputProps) => {
  const { setInputText } = props;
  const step = useSelector((state) => state.stepOfAddingPlan.step);
  const navigation = useNavigation();

  const currentStep = (step: keyof AddingPlanSteps | null) => {
    switch (step) {
      case PLAN_STEP_TITLES.SET_TITLE:
        return <Step1 setInputText={setInputText} />;
      case PLAN_STEP_TITLES.SET_DEPARTURE:
        return <Step2 />;
      case PLAN_STEP_TITLES.SET_ARRIVAL:
        return <Step3 />;
      case PLAN_STEP_TITLES.SET_ARRIVALTIME:
        return <Step4 />;
      case PLAN_STEP_TITLES.SET_ITEM:
        return <Step5 setInputText={setInputText} />;
      case PLAN_STEP_TITLES.SET_DETAILS:
        return <Step6 setInputText={setInputText} />;
      case PLAN_STEP_TITLES.SET_TASK:
        return <Step7 />;
      default:
        navigation.goBack();
        break;
    }
  };

  return <Wrapper>{currentStep(step)}</Wrapper>;
};

export default UserInput;
