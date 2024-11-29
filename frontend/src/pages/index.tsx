import { Box, Heading, Text, Button, VStack } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const router = useRouter();

  return (
    <Box
      minH="100vh"
      bgGradient="linear(to-r, teal.300, blue.500)"
      color="white"
      display="flex"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      px="4"
    >
      <VStack>
        <Heading as="h1" size="2xl">
          Book Manager
        </Heading>
        <Text fontSize="lg" maxW="600px">
          Bem-vindo ao **Book Manager**! Gerencie seus livros favoritos com
          facilidade.
        </Text>
        <Button
          colorScheme="teal"
          size="lg"
          onClick={() => router.push("/books")}
        >
          Listar Livros
        </Button>
      </VStack>
    </Box>
  );
};

export default HomePage;
