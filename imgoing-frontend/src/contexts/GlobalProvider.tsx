import { ThemeProvider } from 'styled-components/native';
import { colors, ColorScheme } from '../constants';

interface Props {
  children: React.ReactNode;
}

type StyledTheme = {
  colors: ColorScheme;
};

const GlobalProvider = ({ children }: Props) => {
  return <ThemeProvider theme={{ colors: colors }}>{children}</ThemeProvider>;
};

export default GlobalProvider;
