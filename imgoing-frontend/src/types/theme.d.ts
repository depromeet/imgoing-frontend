import 'styled-components';
import { ColorScheme } from '@/constants';

type StyledTheme = {
  colors: ColorScheme;
};

declare module 'styled-components' {
  export interface DefaultTheme extends StyledTheme {}
}
