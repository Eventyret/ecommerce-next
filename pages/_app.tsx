import { AppProps } from 'next/app';

function MainApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MainApp;
