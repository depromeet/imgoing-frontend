import 'styled-components';
import { ColorScheme } from 'constant/index';

type StyledTheme = {
  colors: ColorScheme;
};

declare module 'styled-components' {
  export interface DefaultTheme extends StyledTheme {}
}
