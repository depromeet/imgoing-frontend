import type { AppProps } from 'next/app';
import { Global } from '@emotion/react';
import { globalStyles } from '../styles/globalStyles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={globalStyles}></Global>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
