import React from 'react';
import styled from 'styled-components/native';
import SubheadlineTypo from '../typography/SubheadlineTypo';
import TitleTypo from '../typography/TitleTypo';

const TitleView = styled.View`
  margin: 60px 0 80px 0;
  align-items: center;
`;

const Gap = styled.View`
  height: 6px;
`;

const TimeReminder = () => {
  return (
    <TitleView>
      <SubheadlineTypo lang={'ko'} weight={'B'} color={'grayHeavy'}>
        준비 시작까지
      </SubheadlineTypo>
      <Gap />
      <TitleTypo lang={'ko'} weight={'B'} color={'blue'}>
        🔥24시간 59분
      </TitleTypo>
      <Gap />
      <TitleTypo lang={'ko'} weight={'B'} color={'black'}>
        남았어요
      </TitleTypo>
    </TitleView>
  );
};

export default TimeReminder;
