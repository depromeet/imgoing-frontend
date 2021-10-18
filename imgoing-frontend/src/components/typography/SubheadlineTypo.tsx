import React from 'react';
import BaseTypo, { TypoProps } from './BaseTypo';

const typoHeight = {
  ko: '20px',
  en: '16px',
};

const SubheadlineTypo = (props: TypoProps) => {
  const { children, en, bold, color, ...restProps } = props;
  return (
    <BaseTypo
      fontSize="14px"
      typoHeight={typoHeight}
      en={en}
      bold={bold}
      color={color}
      {...restProps}>
      {children}
    </BaseTypo>
  );
};

export default SubheadlineTypo;
