import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components/native';
import moment from 'moment';

import { SubheadlineTypo, TitleTypo } from 'components/typography';
import { Plan } from 'types/index';

const TitleView = styled.View`
  padding: 50px 0 50px 0;
  align-items: center;
`;

const Gap = styled.View`
  height: 6px;
`;

const getNearPlan = (plans: Plan[]): Plan => {
  return plans
    .filter((plan) => moment(plan.arrival_at) >= moment())
    .reduce((prev, current) => {
      return prev.arrival_at < current.arrival_at ? prev : current;
    });
};

const getRemainingTime = (minutes: number): string => {
  // 하루보다 더 많은 시간이 남았을 경우
  if (minutes / 60 > 24) {
    return `${parseInt((minutes / 1440).toString())}일`;
  } else if (minutes / 60 < 1) {
    return `${minutes % 60}분`;
  } else {
    return `${parseInt((minutes / 60).toString())}시간 ${minutes % 60}분`;
  }
  // 24시간 이내로 남았을 경우
};

const TimeReminder = () => {
  const plans = useSelector((state) => state.plan);
  const nearPlan = getNearPlan(plans);
  const nearTime = moment(nearPlan.arrival_at).diff(moment(), 'minutes');
  const remainingTime = getRemainingTime(nearTime);

  return (
    <TitleView>
      <SubheadlineTypo bold color={'grayHeavy'}>
        준비 시작까지
      </SubheadlineTypo>
      <Gap />
      <TitleTypo bold color={'blue'}>
        🔥{remainingTime}
      </TitleTypo>
      <Gap />
      <TitleTypo bold color={'black'}>
        남았어요
      </TitleTypo>
    </TitleView>
  );
};

export default TimeReminder;
