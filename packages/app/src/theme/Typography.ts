import { GUIDELINE_BASE_WIDTH } from 'constant';
import { SCREEN_WIDTH } from 'theme/Metrics';

export const FONT = {
  R: 'AppleSDGothicNeoR00',
  B: 'AppleSDGothicNeoB00',
};

export const scaleFont = (size: number) => SCREEN_WIDTH * (size / GUIDELINE_BASE_WIDTH);

export type TypoType =
  | 'BOLD_10'
  | 'BOLD_11'
  | 'BOLD_12'
  | 'BOLD_14'
  | 'BOLD_16'
  | 'BOLD_18'
  | 'BOLD_20'
  | 'BOLD_24'
  | 'BOLD_28'
  | 'BOLD_32'
  | 'BOLD_36'
  | 'BOLD_40'
  | 'REGULAR_10'
  | 'REGULAR_11'
  | 'REGULAR_12'
  | 'REGULAR_14'
  | 'REGULAR_16'
  | 'REGULAR_18'
  | 'REGULAR_20'
  | 'REGULAR_24'
  | 'REGULAR_28'
  | 'REGULAR_32'
  | 'REGULAR_36'
  | 'REGULAR_40';

export const Typo: {
  [key in TypoType]: {
    size: number;
    weight: keyof typeof FONT;
  };
} = {
  BOLD_10: {
    size: 10,
    weight: 'B',
  },
  BOLD_11: {
    size: 11,
    weight: 'B',
  },
  BOLD_12: {
    size: 12,
    weight: 'B',
  },
  BOLD_14: {
    size: 14,
    weight: 'B',
  },
  BOLD_16: {
    size: 16,
    weight: 'B',
  },
  BOLD_18: {
    size: 18,
    weight: 'B',
  },
  BOLD_20: {
    size: 20,
    weight: 'B',
  },
  BOLD_24: {
    size: 24,
    weight: 'B',
  },
  BOLD_28: {
    size: 28,
    weight: 'B',
  },
  BOLD_32: {
    size: 32,
    weight: 'B',
  },
  BOLD_36: {
    size: 36,
    weight: 'B',
  },
  BOLD_40: {
    size: 40,
    weight: 'B',
  },
  REGULAR_10: {
    size: 10,
    weight: 'R',
  },
  REGULAR_11: {
    size: 11,
    weight: 'R',
  },
  REGULAR_12: {
    size: 12,
    weight: 'R',
  },
  REGULAR_14: {
    size: 14,
    weight: 'R',
  },
  REGULAR_16: {
    size: 16,
    weight: 'R',
  },
  REGULAR_18: {
    size: 18,
    weight: 'R',
  },
  REGULAR_20: {
    size: 20,
    weight: 'R',
  },
  REGULAR_24: {
    size: 24,
    weight: 'R',
  },
  REGULAR_28: {
    size: 28,
    weight: 'R',
  },
  REGULAR_32: {
    size: 32,
    weight: 'R',
  },
  REGULAR_36: {
    size: 36,
    weight: 'R',
  },
  REGULAR_40: {
    size: 40,
    weight: 'R',
  },
};
