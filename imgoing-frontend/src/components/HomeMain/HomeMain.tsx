import React, { useEffect } from 'react';
import { NavigationScreenProp } from 'react-navigation';
import IconButton from './IconButton';
import PlanList from './PlanList';
import TimeReminder from './TimeReminder';

interface HomeMainProps {
  navigation: NavigationScreenProp<any, any>;
}

const HomeMain = (props: HomeMainProps) => {
  const { navigation } = props;

  useEffect(() => {}, []);
  return (
    <>
      <TimeReminder />
      <PlanList />
      {/* 시간 지나면 바뀌도록 애니메이션 넣어야 함 */}
      {/* 현재는 full prop 넣으면 전체 표시하도록 하였음. */}
      <IconButton onPress={() => navigation.navigate('PlanAdd')}>일정 등록하기</IconButton>
    </>
  );
};

export default HomeMain;
