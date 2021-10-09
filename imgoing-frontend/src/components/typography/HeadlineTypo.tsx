import React from 'react';
import BaseTypo, { TypoProps } from './BaseTypo';

const typoHeight = {
  ko: '35px',
  en: '28px',
};

const HeadlineTypo = (props: TypoProps) => {
  const { children, en, bold, color } = props;
  return (
    <BaseTypo fontSize="24px" typoHeight={typoHeight} en={en} bold={bold} color={color}>
      {children}
    </BaseTypo>
  );
};

export default HeadlineTypo;
