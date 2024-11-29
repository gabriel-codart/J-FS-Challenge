import { FastifyRequest, FastifyReply } from 'fastify';
import { Book, createBook } from '../models/book';

// Repositório de Livros
let books: Book[] = [];

// Busca todos os Livros
export const getBooks = async (request: FastifyRequest, reply: FastifyReply) => {
  reply.send({ books });
};

// Busca Livro pelo ID
export const getBookById = async (request: FastifyRequest, reply: FastifyReply) => {
  const { id } = request.params as { id: string };
  const book = books.find(book => book.id === id);

  if (!book) {
    reply.status(404).send({ message: 'Book not found' });
    return;
  }

  reply.send({ book });
};

// Cria Livro
export const createBookHandler = async (request: FastifyRequest, reply: FastifyReply) => {
  const { title, author, publishedYear } = request.body as {
    title: string;
    author: string;
    publishedYear: number;
  };

  const newBook = createBook(title, author, publishedYear);
  books.push(newBook);

  reply.status(201).send({ message: `Book ${title} CREATED`, book: newBook });
};

// Atualiza Livro
export const updateBook = async (request: FastifyRequest, reply: FastifyReply) => {
  const { id } = request.params as { id: string };
  const { title, author, publishedYear } = request.body as {
    title: string;
    author: string;
    publishedYear: number;
  };

  const bookIndex = books.findIndex(book => book.id === id);
  if (bookIndex === -1) {
    reply.status(404).send({ message: 'Book not found' });
    return;
  }

  books[bookIndex] = { id, title, author, publishedYear };

  reply.send({ message: `Book ${id} UPDATED`, book: books[bookIndex] });
};

// Deleta Livro
export const deleteBook = async (request: FastifyRequest, reply: FastifyReply) => {
  const { id } = request.params as { id: string };

  const bookIndex = books.findIndex(book => book.id === id);
  if (bookIndex === -1) {
    reply.status(404).send({ message: 'Book not found' });
    return;
  }

  books.splice(bookIndex, 1);

  reply.send({ message: `Book ${id} DELETED` });
};
