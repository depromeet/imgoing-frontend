import React, { useEffect } from 'react';
import IconButton from './IconButton';
import PlanList from './PlanList';
import TimeReminder from './TimeReminder';

const HomeMain = () => {
  useEffect(() => {}, []);
  return (
    <>
      <TimeReminder />
      <PlanList />
      {/* 시간 지나면 바뀌도록 애니메이션 넣어야 함 */}
      {/* 현재는 full prop 넣으면 전체 표시하도록 하였음. */}
      <IconButton onClick={() => {}}>일정 등록하기</IconButton>
    </>
  );
};

export default HomeMain;
