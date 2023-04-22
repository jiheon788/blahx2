import { ChakraProvider } from '@chakra-ui/react';
import '../styles/globals.css';
import type { AppProps /*, AppContext */ } from 'next/app';
import { AuthUserProvider } from '@/contexts/AuthUser.context';

const MyApp = function ({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <AuthUserProvider>
        <Component {...pageProps} />
      </AuthUserProvider>
    </ChakraProvider>
  );
};

export default MyApp;
