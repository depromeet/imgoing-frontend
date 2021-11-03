import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { useDispatch } from 'react-redux';

import { removeModal } from 'modules/slices/modal';
import RoundBottomModalLayout from 'layouts/RoundBottomModalLayout';
import { tasks } from 'mocks/plan.mock';
import { setStep } from 'modules/slices/stepOfAddingPlan';
import store from 'modules/store';
import BookmarkItem from 'components/BookmarkItem';

const LoadBookmarkModal = () => {
  const dispatch = useDispatch();
  const tasksState = store.getState().stepOfAddingPlan.userInputs.tasks;
  const [selectedItems, setSelectedItem] = useState<number[]>(
    tasksState?.filter((task) => task.isBookmarked).map((task) => task.id) || [],
  );

  const onPress = () => {
    dispatch(
      setStep({
        type: null,
        userInput: {
          tasks: tasksState
            ? [
                ...tasksState.filter((task) => !task.isBookmarked),
                ...selectedItems.map((id) => tasks[id]),
              ]
            : [...selectedItems.map((id) => tasks[id])],
        },
      }),
    );
    dispatch(removeModal());
  };

  return (
    <RoundBottomModalLayout
      title={'불러오기'}
      button={{
        onPress,
        buttonName: '선택 완료',
      }}>
      <ScrollView style={{ height: 350 }}>
        {tasks
          .filter((task) => task.isBookmarked)
          .map((task) => (
            <BookmarkItem
              key={task.id}
              id={task.id}
              time={task.time}
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

export default LoadBookmarkModal;
