import GoogleLoginButton from '@/components/GoogleLoginButton';
import Layout from '@/components/Layout';
import { Box, Center, Flex, Heading } from '@chakra-ui/react';
import { NextPage } from 'next';

const IndexPage: NextPage = function () {
  return (
    <Layout>
      <Box maxW="md" mx="auto">
        <img src="/main_logo.svg" alt="main-logo" />
        <Flex justify="center">
          <Heading>#BlahBlah</Heading>
        </Flex>
      </Box>
      <Center>
        <GoogleLoginButton />
      </Center>
    </Layout>
  );
};

export default IndexPage;
