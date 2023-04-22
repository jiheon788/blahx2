import '../styles/globals.css';
import type { AppProps /*, AppContext */ } from 'next/app';

const MyApp = function ({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
};

export default MyApp;
