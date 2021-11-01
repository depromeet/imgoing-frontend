import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components/native';
import moment from 'moment';

import { SubheadlineTypo, TitleTypo } from 'components/typography';
import { Plan } from 'types/index';

const TitleView = styled.View`
  padding-bottom: 15%;
  padding-top: 10%;
  align-items: center;
`;

const Gap = styled.View`
  height: 6px;
`;

const getNearPlan = (plans: Plan[]): Plan | null => {
  const upcomingPlan = plans.filter((plan) => moment(plan.arrivalAt) >= moment());
  return upcomingPlan.length
    ? upcomingPlan.reduce((prev, current) => (prev.arrivalAt < current.arrivalAt ? prev : current))
    : null;
};

const getNearTime = (plan: Plan | null): number | null => {
  return plan ? moment(plan.arrivalAt).diff(moment(), 'minutes') : null;
};

const getRemainingTime = (minutes: number | null): string => {
  if (minutes) {
    if (minutes / 60 > 24) {
      return `${parseInt((minutes / 1440).toString())}일`;
    } else if (minutes / 60 < 1) {
      return `${minutes % 60}분`;
    }
    return `${parseInt((minutes / 60).toString())}시간 ${minutes % 60}분`;
  }
  return `0분`;
};

const TimeReminder = () => {
  const plans = useSelector((state) => state.plan);
  const nearPlan = getNearPlan(plans);
  const nearTime = getNearTime(nearPlan);
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
