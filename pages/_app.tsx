import { AppProps } from 'next/app';
import { FC } from 'react';
import { UIProvider } from '@components/ui/context';
import '@assets/main.css';

const Noop: FC = ({ children }) => <>{children}</>;

function MainApp({
  Component,
  pageProps,
}: AppProps & { Component: { Layout: FC } }) {
  const Layout = Component.Layout ?? Noop;
  return (
    <UIProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UIProvider>
  );
}

export default MainApp;
