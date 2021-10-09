import React from 'react';
import BaseTypo, { TypoProps } from './BaseTypo';

const typoHeight = {
  ko: '43px',
  en: '35px',
};


const TitleTypo = (props: TypoProps) => {
  const { children, lang, weight, color } = props;
  return (
    <BaseTypo fontSize="30px" typoHeight={typoHeight} lang={lang} weight={weight} color={color}>
      {children}
    </BaseTypo>
  );
};

export default TitleTypo;
