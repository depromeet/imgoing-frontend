import { FC } from 'react';
import styled from 'styled-components/native';
import { ColorScheme, typoStyle } from '../../../constants';

type TypoHeight = {
  en: string;
  ko: string;
};

export type TypoWeight = 'R' | 'B';
export type TypoLanguage = keyof TypoHeight;

export interface OwnProps {
  typoHeight: TypoHeight;
  fontSize: string;
}

export interface TypoProps {
  children: React.ReactNode;
  en?: boolean;
  bold?: boolean;
  color?: keyof ColorScheme;
}

type Props = OwnProps & TypoProps;
const BaseTypo = styled.Text<Props>`
  font-family: 'Roboto';
  font-size: ${(props) => props.fontSize};
  line-height: ${({ typoHeight, en }) => (en ? typoHeight.en : typoHeight.ko)};
  font-weight: ${(props) => {
    if (props.en) {
      if (props.bold) return typoStyle.en.B;
      return typoStyle.en.R;
    }
    if (props.bold) return typoStyle.ko.B;
    return typoStyle.ko.R;
  }};
  color: ${({ theme, color }) => (color ? theme.colors[color] : theme.colors.black)};
`;

export default BaseTypo;
