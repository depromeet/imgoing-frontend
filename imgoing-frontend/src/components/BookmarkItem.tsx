import React, { useState, useEffect } from 'react';
import { TouchableHighlightProps } from 'react-native';
import { SvgXml } from 'react-native-svg';
import styled from 'styled-components/native';

import { CaptionTypo, SubheadlineTypo } from 'components/typography';
import { BookmarkType } from 'types/index';
import { colors } from 'constant/index';
import { icon_plus } from 'assets/svg';
import store from 'modules/store';

interface BookmarkItemProps extends BookmarkType {
  id: number;
  setSelectedItem: (list: number[]) => void;
  selectedItems: number[];
}

const TaskView = styled.View`
  height: 50px;
  border: 2px solid ${({ theme }) => theme.colors.grayLight};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 4px;
  padding: 0 12px 0 16px;
`;

const Title = styled(SubheadlineTypo)`
  flex: 1;
  padding: 0 16px 0 10px;
`;

const Tag = styled.View`
  padding: 2px 7px;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center; ;
`;

const Bar = styled.View`
  width: 2px;
  height: 16px;
  background-color: ${({ theme }) => theme.colors.grayDark};
  border-radius: 100px;
  margin: 0 12px 0 12px;
`;

const TouchableHighlight = styled.TouchableHighlight.attrs<TouchableHighlightProps>((props) => {
  return {
    underlayColor: props.theme.colors.white,
    activeOpacity: 0.7,
  };
})``;

const BookmarkItem = (props: BookmarkItemProps) => {
  const { name, duration, id, selectedItems, setSelectedItem } = props;
  const tasksState = store.getState().stepOfAddingPlan.userInputs.tasks;
  const [selected, toggleSelected] = useState<boolean>(
    tasksState ? !!tasksState.filter((task) => task.id === id).length : false,
  );

  const onPress = () => {
    setSelectedItem(selected ? selectedItems.filter((key) => id !== key) : [...selectedItems, id]);
    toggleSelected(!selected);
  };

  return (
    <>
      <TouchableHighlight onPress={onPress} style={{ marginTop: 16 }}>
        <TaskView style={selected && { borderColor: colors.blue }}>
          <Tag style={{ backgroundColor: colors.grayHeavy }}>
            <CaptionTypo color={'white'} bold>
              {'루틴'}
            </CaptionTypo>
          </Tag>
          <Bar></Bar>
          <SubheadlineTypo>{duration}분</SubheadlineTypo>
          <Title numberOfLines={1} color='grayHeavy'>
            {name}
          </Title>
          <Tag
            onTouchEndCapture={() => console.log('삭제!')}
            style={{ borderColor: colors.grayMedium, borderWidth: 2, marginRight: 10 }}>
            <CaptionTypo color={'black'} bold>
              {'삭제'}
            </CaptionTypo>
          </Tag>
          <SvgXml xml={icon_plus} fill={colors.blue} />
        </TaskView>
      </TouchableHighlight>
    </>
  );
};

export default BookmarkItem;
