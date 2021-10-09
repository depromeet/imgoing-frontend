import React from 'react';
import styled from 'styled-components/native';
import SubheadlineTypo from '../typography/SubheadlineTypo';
import TitleTypo from '../typography/TitleTypo';

const TimeReminder = () => {
  return (
    <TitleView>
      <SubheadlineTypo lang={'ko'} weight={'B'} color={'grayHeavy'}>
        준비 시작까지
      </SubheadlineTypo>
      <Gap />
      {/* 데이터 받아서 계산하여 표시 필요 */}
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

const TitleView = styled.View`
  padding: 50px 0 50px 0;
  align-items: center;
`;

const Gap = styled.View`
  height: 6px;
`;

export default TimeReminder;
