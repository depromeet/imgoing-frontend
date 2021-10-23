import React from 'react';
import { NavigationScreenProp } from 'react-navigation';

import TimeReminder from './TimeReminder';
import PlanList from './PlanList';
import AddPlanButton from './AddPlanButton';

interface HomeMainProps {
  navigation: NavigationScreenProp<any, any>;
}

const HomeMain = (props: HomeMainProps) => {
  const { navigation } = props;

  return (
    <>
      <TimeReminder />
      <PlanList />
      {/* 시간 지나면 바뀌도록 애니메이션 넣어야 함 */}
      {/* 현재는 full prop 넣으면 전체 표시하도록 하였음. */}
      <AddPlanButton onPress={() => navigation.navigate('PlanAdd')}>일정 등록하기</AddPlanButton>
    </>
  );
};

export default HomeMain;
