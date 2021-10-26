import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { useDispatch } from 'react-redux';

import { removeModal } from 'modules/slices/modal';
import RoundBottomModalLayout from 'layouts/RoundBottomModalLayout';
import { tasks } from 'mocks/plan.mock';
import { setStep } from 'modules/slices/stepOfAddingPlan';
import store from 'modules/store';
import BookmarkItem from 'components/BookmarkItem';

const DateWheelPickerModal = () => {
  const dispatch = useDispatch();
  const [selectedItems, setSelectedItem] = useState<number[]>([]);
  const tasksState = store.getState().stepOfAddingPlan.userInputs.tasks;

  return (
    <RoundBottomModalLayout
      title={'불러오기'}
      button={{
        onPress: () => {
          dispatch(
            setStep({
              type: null,
              userInput: {
                tasks: tasksState
                  ? [...tasksState, ...selectedItems.map((id) => tasks[id])]
                  : [...selectedItems.map((id) => tasks[id])],
              },
            }),
          );
          dispatch(removeModal());
        },
        buttonName: '선택 완료',
      }}>
      <ScrollView style={{ height: 350 }}>
        {tasks
          .filter((task) => task.isBookmarked)
          .map((task, idx) => (
            <BookmarkItem
              // TODO: key가 task의 id값이 들어가야 하는데 일단 mock데이터는 건들지 않고 index로 진행
              key={idx}
              id={idx}
              duration={task.duration}
              name={task.name}
              notification={task.notification}
              setSelectedItem={setSelectedItem}
              selectedItems={selectedItems}
            />
          ))}
      </ScrollView>
    </RoundBottomModalLayout>
  );
};

export default DateWheelPickerModal;
