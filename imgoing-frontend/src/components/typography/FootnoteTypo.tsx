import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

import { TypoProps } from '../../types';
import { typoStyle } from '../../constants';

const typoHeight = {
  ko: '17px',
  en: '14px',
};

const Typo = styled.Text<Omit<TypoProps, 'children'>>`
  font-size: 12px;
  line-height: ${(props) => typoHeight[props.lang]};
  font-weight: ${(props) => typoStyle[props.lang][props.weight]};
`;

const FootnoteTypo = (props: TypoProps) => {
  const { children, lang, weight } = props;
  return (
    <Typo lang={lang} weight={weight}>
      {children}
    </Typo>
  );
};

export default FootnoteTypo;
