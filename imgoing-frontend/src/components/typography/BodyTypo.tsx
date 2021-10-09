import React from 'react';
import { Text } from 'react-native';
import BaseTypo, { TypoProps } from './BaseTypo';

const typoHeight = {
  ko: '29px',
  en: '23px',
};


const BodyTypo = (props: TypoProps) => {
  const { children, lang, weight, color } = props;
  return (
    <BaseTypo fontSize="20px" typoHeight={typoHeight} lang={lang} weight={weight} color={color}>
      {children}
    </BaseTypo>
  );
};

export default BodyTypo;
