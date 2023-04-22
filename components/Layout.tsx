import { Box } from '@chakra-ui/react';
import Head from 'next/head';

interface ILayoutProps {
  title?: string;
  children: React.ReactNode;
}

const Layout = ({ title = 'blahblah', children }: ILayoutProps) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      {children}
    </div>
  );
};

export default Layout;
