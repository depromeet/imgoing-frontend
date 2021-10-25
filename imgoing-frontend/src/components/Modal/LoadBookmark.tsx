import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { useDispatch } from 'react-redux';
import styled from 'styled-components/native';

import { removeModal } from 'modules/slices/modal';
import RoundBottomModalLayout from 'layouts/RoundBottomModalLayout';
import Task from 'components/Task';
import { tasks } from 'mocks/plan.mock';

const DateWheelPickerModal = () => {
  const dispatch = useDispatch();

  return (
    <RoundBottomModalLayout
      title={'불러오기'}
      button={{ onPress: () => dispatch(removeModal()), buttonName: '선택 완료' }}>
      <ScrollView style={{ height: 350 }}>
        {tasks
          .filter((task) => task.isBookmarked)
          .map((task, idx) => (
            <Task
              // key가 task의 id값이 들어가야 하는데 일단 mock데이터는 건들지 않고 index로 진행
              key={idx}
              minutes={task.duration}
              title={task.name}
              defaultNotification={task.notification}
              isBookmarked={task.isBookmarked}
            />
          ))}
      </ScrollView>
    </RoundBottomModalLayout>
  );
};

export default DateWheelPickerModal;
