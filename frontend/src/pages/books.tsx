import { useEffect, useState } from "react";
import { Box, Heading, Text, Spinner, Stack, Button, Input } from "@chakra-ui/react";

type Book = {
  id: string;
  title: string;
  author: string;
  publishedYear: number;
};

const BooksPage = () => {
  const [books, setBooks] = useState<Book[] | null>(null);
  const [filteredBooks, setFilteredBooks] = useState<Book[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("http://localhost:2020/api/books");
        const data = await response.json();
        setBooks(data.books);
        setFilteredBooks(data.books); // Inicialmente mostra todos os livros
      } catch (error) {
        console.error("Error fetching books:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  // Função para filtrar os livros com base na pesquisa
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (!query) {
      setFilteredBooks(books); // Se não houver pesquisa, mostra todos os livros
    } else {
      const filtered = books?.filter(
        (book) =>
          book.title.toLowerCase().includes(query.toLowerCase()) ||
          book.author.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredBooks(filtered || []); // Atualiza a lista filtrada
    }
  };

  const handleDelete = async (id: string) => {
    const isConfirmed = window.confirm("Tem certeza que deseja deletar este livro?");
    if (!isConfirmed) {
      return;
    }

    try {
      const response = await fetch(`http://localhost:2020/api/books/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Erro ao deletar o livro");
      }

      setBooks(books?.filter((book) => book.id !== id) || []);
      setFilteredBooks(filteredBooks?.filter((book) => book.id !== id) || []);
      alert("Livro deletado com sucesso!");
    } catch (error) {
      if (error instanceof Error) {
        alert(`Erro ao deletar o livro: ${error.message}`);
      } else {
        alert("Erro inesperado");
      }
    }
  };

  if (loading) {
    return (
      <Box textAlign="center" mt="20">
        <Spinner size="xl" />
        <Text mt="4">Loading books...</Text>
      </Box>
    );
  }

  return (
    <Box p="4">
      <Input
        placeholder="Pesquisar por título ou autor"
        value={searchQuery}
        onChange={(e) => handleSearch(e.target.value)}
        mb={6}
      />

      <Stack>
        {filteredBooks?.map((book) => (
          <Box key={book.id} p="4" borderWidth="1px" borderRadius="md">
            <Heading size="md">{book.title}</Heading>
            <Text>Author: {book.author}</Text>
            <Text>Published Year: {book.publishedYear}</Text>
            <Button
              bg={"red.500"}
              mt={4}
              onClick={() => handleDelete(book.id)}
            >
              Deletar
            </Button>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default BooksPage;
