import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { removeModal } from 'modules/slices/modal';
import RoundBottomModalLayout from 'layouts/RoundBottomModalLayout';
import { setStep } from 'modules/slices/stepOfAddingPlan';
import store from 'modules/store';
import BookmarkItem from 'components/BookmarkItem';

const LoadBookmarkModal = () => {
  const dispatch = useDispatch();
  const tasks = store.getState().stepOfAddingPlan.userInputs.tasks || [];
  const bookmarks = useSelector((state) => state.bookmark);
  const [selectedItems, setSelectedItem] = useState<number[]>([]);

  const onPress = () => {
    dispatch(
      setStep({
        type: null,
        userInput: {
          tasks: [
            ...tasks,
            ...bookmarks.filter((item) => !!selectedItems.find((id) => id === item.id)),
          ],
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
        {bookmarks.map((bookmark) => (
          <BookmarkItem
            key={bookmark.id}
            id={bookmark.id}
            taskId={bookmark.taskId}
            time={bookmark.time}
            name={bookmark.name}
            notification={bookmark.notification}
            setSelectedItem={setSelectedItem}
            selectedItems={selectedItems}
          />
        ))}
      </ScrollView>
    </RoundBottomModalLayout>
  );
};

export default LoadBookmarkModal;
