import { useEffect, useState } from "react";
import { Box, Heading, Text, Spinner, Stack } from "@chakra-ui/react";

type Book = {
  id: string;
  title: string;
  author: string;
  publishedYear: number;
};

const BooksPage = () => {
  const [books, setBooks] = useState<Book[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("http://localhost:2020/api/books");
        const data = await response.json();
        setBooks(data.books);
      } catch (error) {
        console.error("Error fetching books:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  if (loading) {
    return (
      <Box textAlign="center" mt="20">
        <Spinner size="xl" />
        <Text mt="4">Loading books...</Text>
      </Box>
    );
  }

  if (!books || books.length === 0) {
    return (
      <Box textAlign="center" mt="20">
        <Text>No books found</Text>
      </Box>
    );
  }

  return (
    <Box p="4">
      <Heading mb="6">Books List</Heading>
      <Stack>
        {books.map((book) => (
          <Box key={book.id} p="4" borderWidth="1px" borderRadius="md">
            <Heading size="md">{book.title}</Heading>
            <Text>Author: {book.author}</Text>
            <Text>Published Year: {book.publishedYear}</Text>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default BooksPage;
