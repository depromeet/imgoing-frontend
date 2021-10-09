import React from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import ScheduleItem from './ScheduleItem';

// 임시 데이터 생성
const dummyScheduleData = [{}, {}, {}];

const ScheduleItemList = () => {
  return (
    <FlatListView
      data={dummyScheduleData}
      renderItem={(item) => <ScheduleItem data={item} />}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

const FlatListView = styled.FlatList`
  width: 90%;
`;

export default ScheduleItemList;
