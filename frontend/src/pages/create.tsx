import { useState } from 'react';
import { Box, Button, Input, Text, VStack, HStack } from '@chakra-ui/react';
import { useRouter } from 'next/router';

const CreateBookPage = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishedYear, setPublishedYear] = useState<number | ''>('');
  const router = useRouter(); // Hook para navegação

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newBook = {
      title,
      author,
      publishedYear: Number(publishedYear),
    };

    try {
      const response = await fetch('http://localhost:2020/api/books', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newBook),
      });

      if (!response.ok) {
        throw new Error('Erro ao criar o livro');
      }

      alert('Livro criado com sucesso!');
      setTitle('');
      setAuthor('');
      setPublishedYear('');

      // Redireciona para a página de listagem após o sucesso
      router.push('/books');
    } catch (error) {
      if (error instanceof Error) {
        alert(`Erro ao criar o livro: ${error.message}`);
      } else {
        alert('Erro inesperado');
      }
    }
  };

  return (
    <Box maxW="md" mx="auto" mt={8} p={4} borderWidth={1} borderRadius="md" boxShadow="md">
      <form onSubmit={handleSubmit}>
        <VStack align="flex-start">
          <HStack w="full">
            <Box flex="1">
              <Text fontWeight="bold">Título</Text>
              <Input
                placeholder="Título do livro"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                width="100%"
              />
            </Box>
          </HStack>

          <HStack w="full">
            <Box flex="1">
              <Text fontWeight="bold">Autor</Text>
              <Input
                placeholder="Autor do livro"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                width="100%"
              />
            </Box>
          </HStack>

          <HStack w="full">
            <Box flex="1">
              <Text fontWeight="bold">Ano de Publicação</Text>
              <Input
                type="number"
                placeholder="Ano de publicação"
                value={publishedYear}
                onChange={(e) => setPublishedYear(e.target.value ? Number(e.target.value) : '')}
                width="100%"
              />
            </Box>
          </HStack>

          <Button type="submit" colorScheme="blue" w="full">
            Adicionar Livro
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default CreateBookPage;
