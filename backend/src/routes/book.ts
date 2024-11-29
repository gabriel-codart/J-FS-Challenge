import { FastifyInstance } from 'fastify';

import {
  getBooks,
  getBookById,
  createBookHandler,
  updateBook,
  deleteBook,
} from '../controllers/book';

export default async function booksRoutes(server: FastifyInstance) {
  server.get('/books', {
    schema: {
      description: 'Get all Books',
      tags: ['Books'],
    },
  }, getBooks);

  server.get('/books/:id', {
    schema: {
      description: 'Get Book by ID',
      tags: ['Books'],
      params: {
        type: 'object',
        properties: {
          id: { type: 'string' },
        },
        required: ['id'],
      },
    },
  }, getBookById);

  server.post('/books', {
    schema: {
      description: 'Create Book',
      tags: ['Books'],
      body: {
        type: 'object',
        properties: {
          title: { type: 'string' },
          author: { type: 'string' },
          publishedYear: { type: 'number' },
        },
        required: ['title', 'author', 'publishedYear'],
      },
    },
  }, createBookHandler);

  server.put('/books/:id', {
    schema: {
      description: 'Update Book',
      tags: ['Books'],
      params: {
        type: 'object',
        properties: {
          id: { type: 'string' },
        },
        required: ['id'],
      },
      body: {
        type: 'object',
        properties: {
          title: { type: 'string' },
          author: { type: 'string' },
          publishedYear: { type: 'number' },
        },
        required: ['title', 'author', 'publishedYear'],
      },
    },
  }, updateBook);

  server.delete('/books/:id', {
    schema: {
      description: 'Delete Book',
      tags: ['Books'],
      params: {
        type: 'object',
        properties: {
          id: { type: 'string' },
        },
        required: ['id'],
      },
    },
  }, deleteBook);
}
