import React from 'react';
import BaseTypo, { TypoProps } from './BaseTypo';

const typoHeight = {
  ko: '52px',
  en: '42px',
};

const LargeTitleTypo = (props: TypoProps) => {
  const { children, en, bold, color, ...restProps } = props;
  return (
    <BaseTypo
      fontSize="36px"
      typoHeight={typoHeight}
      en={en}
      bold={bold}
      color={color}
      {...restProps}>
      {children}
    </BaseTypo>
  );
};

export default LargeTitleTypo;
