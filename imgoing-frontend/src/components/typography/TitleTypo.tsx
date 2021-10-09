import React from 'react';
import BaseTypo, { TypoProps } from './BaseTypo';

const typoHeight = {
  ko: '43px',
  en: '35px',
};

const TitleTypo = (props: TypoProps) => {
  const { children, en, bold, color } = props;
  return (
    <BaseTypo fontSize="30px" typoHeight={typoHeight} en={en} bold={bold} color={color}>
      {children}
    </BaseTypo>
  );
};

export default TitleTypo;
