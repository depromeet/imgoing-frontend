import { FC } from "react";
import styled from 'styled-components/native';
import { ColorScheme, typoStyle } from "../../../constants";



type TypoHeight = {
    en: string,
    ko: string
}


export type TypoWeight = 'R' | 'B';
export type TypoLanguage = keyof TypoHeight;


export interface OwnProps {
    typoHeight: TypoHeight;
    fontSize: string
}

export interface TypoProps {
    children: React.ReactNode;
    lang?: TypoLanguage;
    weight?: TypoWeight;
    color?: keyof ColorScheme;
}

type Props = OwnProps & TypoProps
const BaseTypo = styled.Text<Props>`
    font-family: 'Roboto,NotoSansKR';
    font-size: ${(props)=>props.fontSize};
    /* line-height: ${({typoHeight, lang}) => lang && typoHeight[lang]}; */
    font-weight: ${(props) => typoStyle.en.B};
    color: ${({theme, color}) => color ? theme.colors[color] : theme.colors.black};
`;




export default BaseTypo;