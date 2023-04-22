import { Box, BoxProps } from '@chakra-ui/react';
import Head from 'next/head';
import GNB from './GNB';

interface ILayoutProps {
  title?: string;
  children: React.ReactNode;
}

const Layout: React.FC<Props & BoxProps> = ({ title = 'blahblah', children, ...boxProps }: ILayoutProps) => {
  return (
    <Box {...boxProps}>
      <Head>
        <title>{title}</title>
      </Head>
      <GNB />
      {children}
    </Box>
  );
};

export default Layout;
