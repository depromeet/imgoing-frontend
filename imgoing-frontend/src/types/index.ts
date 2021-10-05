export type TypoWeight = 'R' | 'B';
export type TypoLanguage = 'ko' | 'en';

export interface TypoProps {
  children: React.ReactNode;
  lang: TypoLanguage;
  weight: TypoWeight;
  color?: string;
}
