import { PixelRatio, Platform } from 'react-native';

import { GUIDELINE_BASE_WIDTH } from 'constant/index';
import { SCREEN_WIDTH } from 'theme/Metrics';
import { toSeoulDate } from './date';

export const normalize = (size: number): number => {
  const newSize = size * (SCREEN_WIDTH / GUIDELINE_BASE_WIDTH);

  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
};

export const isInProgress = (start: string, end: string) => {
  const currentDate = toSeoulDate(new Date());
  return toSeoulDate(start) < currentDate && currentDate < toSeoulDate(end);
};
export const mod = (n: number, m: number) => ((n % m) + m) % m;
