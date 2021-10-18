import { ThemeProvider } from 'styled-components/native';
import { colors, ColorScheme } from '../constants';

interface Props {
  children: React.ReactNode;
}

const GlobalProvider = ({ children }: Props) => {
  return <ThemeProvider theme={{ colors: colors }}>{children}</ThemeProvider>;
};

export default GlobalProvider;
