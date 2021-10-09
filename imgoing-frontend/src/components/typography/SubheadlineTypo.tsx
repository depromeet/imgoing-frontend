import React from 'react';
import BaseTypo, { TypoProps } from './BaseTypo';

const typoHeight = {
  ko: '20px',
  en: '16px',
};


const SubheadlineTypo = (props: TypoProps) => {
  const { children, lang, weight, color } = props;
  return (
    <BaseTypo fontSize="14px" typoHeight={typoHeight} lang={lang} weight={weight} color={color}>
      {children}
    </BaseTypo>
  );
};

export default SubheadlineTypo;
