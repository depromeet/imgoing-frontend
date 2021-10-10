import React from 'react';
import BaseTypo, { TypoProps } from './BaseTypo';

const typoHeight = {
  ko: '23px',
  en: '19px',
};

const CalloutTypo = (props: TypoProps) => {
  const { children, en, bold, color } = props;
  return (
    <BaseTypo fontSize="16px" typoHeight={typoHeight} en={en} bold={bold} color={color}>
      {children}
    </BaseTypo>
  );
};

export default CalloutTypo;
