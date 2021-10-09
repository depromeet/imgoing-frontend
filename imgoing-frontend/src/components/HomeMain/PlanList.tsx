import React from 'react';
import styled from 'styled-components/native';
import PlanItem from './PlanItem';

// 임시 데이터 생성
const dummyScheduleData = [{}, {}, {}];

const PlanList = () => {
  return (
    <FlatListView
      data={dummyScheduleData}
      renderItem={(item) => <PlanItem data={item} />}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

const FlatListView = styled.FlatList`
  width: 90%;
`;

export default PlanList;
