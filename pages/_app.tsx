import { AppProps } from 'next/app';
import { Layout } from '@components/common';

function MainApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MainApp;
