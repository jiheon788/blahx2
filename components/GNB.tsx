import { useAuth } from '@/contexts/AuthUser.context';
import { Box, Button, Flex, Spacer } from '@chakra-ui/react';

const GNB = () => {
  const { isLoading, authUser, signOut, signInWithGoogle } = useAuth();

  const isAuthInitaialized = isLoading || authUser === null;

  return (
    <Box borderBottom={1} borderStyle="solid" borderColor="gray.200" bg="white">
      <Flex minH="68px" py={{ base: 2 }} px={{ base: 4 }} align="center" maxW="md" mx="auto">
        <Spacer />
        <Box flex={1}>
          <img src="/logo.svg" style={{ height: '48px' }} alt="logo" />
        </Box>
        <Box justifyContent="flex-end">
          {isAuthInitaialized ? (
            <Button onClick={signInWithGoogle}>Login</Button>
          ) : (
            <Button onClick={signOut}>Logout</Button>
          )}
        </Box>
      </Flex>
    </Box>
  );
};

export default GNB;
