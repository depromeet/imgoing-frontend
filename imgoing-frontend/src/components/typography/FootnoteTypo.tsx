import React from 'react';
import BaseTypo, { TypoProps } from './BaseTypo';

const typoHeight = {
  ko: '17px',
  en: '14px',
};

const FootnoteTypo = (props: TypoProps) => {
  const { children, lang, weight, color } = props;
  return (
    <BaseTypo fontSize="12px" typoHeight={typoHeight} lang={lang} weight={weight} color={color}>
      {children}
    </BaseTypo>
  );
};

export default FootnoteTypo;
