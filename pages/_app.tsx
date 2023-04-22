import { ChakraProvider } from '@chakra-ui/react';
import '../styles/globals.css';
import type { AppProps /*, AppContext */ } from 'next/app';

const MyApp = function ({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default MyApp;
