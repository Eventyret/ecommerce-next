import { AppProps } from 'next/app';

function MainApp({ Component, pageProps }: AppProps) {
  return (
    <div className='app-component'>
      <Component {...pageProps} />
    </div>
  );
}

export default MainApp;
