import React from 'react';
import BaseTypo, { TypoProps } from './BaseTypo';

const typoHeight = {
  ko: '52px',
  en: '42px',
};


const LargeTitleTypo = (props: TypoProps) => {
  const { children, lang, weight, color } = props;
  return (
    <BaseTypo fontSize="36px" typoHeight={typoHeight} lang={lang} weight={weight} color={color}>
      {children}
    </BaseTypo>
  );
};

export default LargeTitleTypo;
