import { AppProps } from 'next/app';
import { Layout } from '@components/common';
import { FC } from 'react';

function MainApp({ Component, pageProps }: AppProps & { Component: { Layout: FC } }) {
  const Layout = Component.Layout;
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MainApp;
