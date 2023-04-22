import GoogleLoginButton from '@/components/GoogleLoginButton';
import Layout from '@/components/Layout';
import { useAuth } from '@/contexts/AuthUser.context';
import FirebaseClient from '@/models/FirebaseClient';
import { Box, Center, Flex, Heading } from '@chakra-ui/react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { NextPage } from 'next';

const IndexPage: NextPage = function () {
  const { signInWithGoogle, authUser } = useAuth();
  console.info(authUser);

  return (
    <Layout>
      <Box maxW="md" mx="auto">
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
