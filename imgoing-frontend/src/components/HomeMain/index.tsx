import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

import TimeReminder from './TimeReminder';
import PlanList from './PlanList';
import AddPlanButton from './AddPlanButton';
import { NavigatorParams } from 'types/Route';

const Wrapper = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding-top: 10%;
`;

const HomeMain = () => {
  const navigation = useNavigation<NavigatorParams>();
  const [minimizeButton, setMinimizeButton] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setMinimizeButton(false);
    }, 3000);
  }, [minimizeButton]);

  return (
    <Wrapper>
      <TimeReminder />
      <PlanList />
      {/* 시간 지나면 바뀌도록 애니메이션 넣어야 함 */}
      {/* 현재는 full prop 넣으면 전체 표시하도록 하였음. */}
      <AddPlanButton full={minimizeButton} onPress={() => navigation.navigate('PlanAdd')}>
        일정 등록하기
      </AddPlanButton>
    </Wrapper>
  );
};

export default HomeMain;
