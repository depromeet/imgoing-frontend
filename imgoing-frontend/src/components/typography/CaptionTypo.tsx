import React from 'react';
import BaseTypo, { TypoProps } from './BaseTypo';

const typoHeight = {
  ko: '16px',
  en: '13px',
};

const CaptionTypo = (props: TypoProps) => {
  const { children, en, bold, color, ...restProps } = props;
  return (
    <BaseTypo
      fontSize="11px"
      typoHeight={typoHeight}
      en={en}
      bold={bold}
      color={color}
      {...restProps}>
      {children}
    </BaseTypo>
  );
};

export default CaptionTypo;
