import React from 'react';
import BaseTypo, { TypoProps } from './BaseTypo';


const typoHeight = {
  ko: '16px',
  en: '13px',
};


const CaptionTypo = (props: TypoProps) => {
  const { children, lang, weight, color } = props;
  return (
    <BaseTypo fontSize="11px" typoHeight={typoHeight} lang={lang} weight={weight} color={color}>
      {children}
    </BaseTypo>
  );
};

export default CaptionTypo;
