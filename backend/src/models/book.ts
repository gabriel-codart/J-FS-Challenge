import { randomUUID } from 'crypto';

export interface Book {
    id: string; // Identificador único
    title: string; // Título do livro
    author: string; // Autor do livro
    publishedYear: number; // Ano de publicação
}

export const createBook = (title: string, author: string, publishedYear: number): Book => {
    return {
      id: randomUUID(), // Geração automática de UUID
      title,
      author,
      publishedYear,
    };
};