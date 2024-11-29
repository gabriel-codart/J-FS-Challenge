import { Box, Heading, Text, Button } from '@chakra-ui/react';
import NextLink from 'next/link';

const NotFoundPage = () => {
  return (
    <Box
      textAlign="center"
      py={10}
      px={6}
      display="flex"
      bgGradient="linear(to-r, teal.300, blue.500)"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
    >
      <Heading
        display="inline-block"
        as="h1"
        size="2xl"
        bgGradient="linear(to-r, teal.400, teal.600)"
        backgroundClip="text"
      >
        404
      </Heading>
      <Text fontSize="xl" mt={3} mb={2}>
        Página não encontrada
      </Text>
      <Text color="gray.500" mb={6}>
        A página que você está tentando acessar não existe.
      </Text>

      <NextLink href="/" passHref>
        <Button
          colorScheme="teal"
          bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
          color="black"
          variant="solid"
        >
          Voltar para o Início
        </Button>
      </NextLink>
    </Box>
  );
};

export default NotFoundPage;
