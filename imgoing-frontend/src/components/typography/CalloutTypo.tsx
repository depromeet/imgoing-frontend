import React from 'react';
import BaseTypo, { TypoProps } from './BaseTypo';

const typoHeight = {
  ko: '23px',
  en: '19px',
};


const CalloutTypo = (props: TypoProps) => {
  const { children, lang, weight, color } = props;
  return (
    <BaseTypo fontSize="16px" typoHeight={typoHeight} lang={lang} weight={weight} color={color}>
      {children}
    </BaseTypo>
  );
};

export default CalloutTypo;
