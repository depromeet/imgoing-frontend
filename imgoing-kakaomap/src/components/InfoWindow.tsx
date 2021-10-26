import React from 'react';
import styled from 'styled-components';

import { Place } from '@/types';

declare global {
  interface Window {
    ReactNativeWebView: any;
  }
}

const InfoWrapper = styled.div`
  width: 236px;
  background-color: #ffffff;
  border: 1px solid #dbdbdb;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 12px 14px;
`;

const Name = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 19px;
  color: #313338;
  white-space: normal;
  margin-bottom: 2px;
`;

const Address = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 17px;
  color: #8b8b8b;
  white-space: normal;
`;

const InfoWindow = ({ marker }: { marker: Place }) => {
  return (
    <InfoWrapper>
      <Name>{marker.name}</Name>
      <Address>{marker.address}</Address>
    </InfoWrapper>
  );
};

export default InfoWindow;
