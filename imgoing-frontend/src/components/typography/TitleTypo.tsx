import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

import { TypoProps } from '../../types/';
import { typoStyle } from '../../constants';

const typoHeight = {
  ko: '43px',
  en: '35px',
};

const Typo = styled.Text<Omit<TypoProps, 'children'>>`
  font-size: 30px;
  line-height: ${(props) => typoHeight[props.lang]};
  font-weight: ${(props) => typoStyle[props.lang][props.weight]};
  color: ${(props) => props.color ?? '#313338'};
`;

const TitleTypo = (props: TypoProps) => {
  const { children, lang, weight, color } = props;
  return (
    <Typo lang={lang} weight={weight} color={color}>
      {children}
    </Typo>
  );
};

export default TitleTypo;
