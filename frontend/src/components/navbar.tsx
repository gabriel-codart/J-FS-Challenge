import { Box, Flex, Link as ChakraLink } from '@chakra-ui/react';
import NextLink from 'next/link';

const NavBar = () => {
  return (
    <Flex as="nav" p={4} bg="gray.900" color="white" justify="space-between">
      <NextLink href="/">
        Início
      </NextLink>

      <NextLink href="/books">
        Listar
      </NextLink>

      <NextLink href="/create">
        Adicionar
      </NextLink>
    </Flex>
  );
};

export default NavBar;
