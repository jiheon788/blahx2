import { Button } from '@chakra-ui/react';

interface IGoogleLoginButtonProps {
  onClick: () => void;
}

const GoogleLoginButton = ({ onClick }: IGoogleLoginButtonProps) => {
  return (
    <Button
      size="lg"
      mx="6"
      maxW="md"
      borderRadius="full"
      bgColor="#4285f4"
      color="white"
      colorScheme="blue"
      leftIcon={
        <img
          src="/google.svg"
          alt="google logo"
          style={{ background: 'white', padding: '.3rem', borderRadius: '100px' }}
        />
      }
      onClick={onClick}
    >
      Google 계정으로 시작하기
    </Button>
  );
};

export default GoogleLoginButton;
