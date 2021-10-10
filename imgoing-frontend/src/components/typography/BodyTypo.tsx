import React from 'react';
import { Text } from 'react-native';
import BaseTypo, { TypoProps } from './BaseTypo';

const typoHeight = {
  ko: '29px',
  en: '23px',
};

const BodyTypo = (props: TypoProps) => {
  const { children, en, bold, color } = props;
  return (
    <BaseTypo fontSize="20px" typoHeight={typoHeight} en={en} bold={bold} color={color}>
      {children}
    </BaseTypo>
  );
};

export default BodyTypo;
