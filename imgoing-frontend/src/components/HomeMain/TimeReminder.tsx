import React from 'react';
import styled from 'styled-components/native';

import { SubheadlineTypo, TitleTypo } from 'components/typography';

const TitleView = styled.View`
  padding: 50px 0 50px 0;
  align-items: center;
`;

const Gap = styled.View`
  height: 6px;
`;

const TimeReminder = () => {
  return (
    <TitleView>
      <SubheadlineTypo bold color={'grayHeavy'}>
        준비 시작까지
      </SubheadlineTypo>
      <Gap />
      {/* 데이터 받아서 계산하여 표시 필요 */}
      <TitleTypo bold color={'blue'}>
        🔥24시간 59분
      </TitleTypo>
      <Gap />
      <TitleTypo bold color={'black'}>
        남았어요
      </TitleTypo>
    </TitleView>
  );
};

export default TimeReminder;
