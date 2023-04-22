import GoogleLoginButton from '@/components/GoogleLoginButton';
import Layout from '@/components/Layout';
import { useAuth } from '@/contexts/AuthUser.context';
import { Box, Center, Flex, Heading } from '@chakra-ui/react';
import { NextPage } from 'next';

const IndexPage: NextPage = function () {
  const { signInWithGoogle, authUser } = useAuth();

  return (
    <Layout minH="100vh" backgroundColor="gray.50">
      <Box maxW="md" mx="auto" pt="10">
        <img src="/main_logo.svg" alt="main-logo" />
        <Flex justify="center">
          <Heading>#BlahBlah</Heading>
        </Flex>
      </Box>
      <Center>
        <GoogleLoginButton onClick={signInWithGoogle} />
      </Center>
    </Layout>
  );
};

export default IndexPage;
