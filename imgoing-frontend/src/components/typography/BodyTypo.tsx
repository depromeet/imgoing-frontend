import React from 'react';
import { Text } from 'react-native';
import BaseTypo, { TypoProps } from './BaseTypo';

const typoHeight = {
  ko: '29px',
  en: '23px',
};

const BodyTypo = (props: TypoProps) => {
  const { children, en, bold, color, ...restProps } = props;
  return (
    <BaseTypo
      fontSize='20px'
      typoHeight={typoHeight}
      en={en}
      bold={bold}
      color={color}
      {...restProps}>
      {children}
    </BaseTypo>
  );
};

export default BodyTypo;
