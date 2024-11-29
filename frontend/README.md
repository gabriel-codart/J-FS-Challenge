# Book Manager - Frontend

Este é o frontend do projeto **Book Manager**, uma aplicação web para gerenciar livros. O sistema permite adicionar, listar e deletar livros. Ele foi desenvolvido utilizando **Next.js**, **React**, **TypeScript**, e **Chakra UI**.

## Instalação

Para rodar este projeto localmente, siga os passos abaixo:

1. Instale as dependências:

    ```bash
    npm install
    ```

2. Inicie a aplicação:

    ```bash
    npm run dev
    ```

A aplicação de iniciará em http://localhost:3000.

## Estrutura do Projeto

```plaintext
src/
├── components/           # Componentes reutilizáveis da interface
│   └── navbar.tsx        # Componente de navegação
├── pages/                # Páginas do Next.js
│   ├── _app.tsx          # Componente raiz da aplicação
│   ├── index.tsx         # Página inicial
│   ├── books.tsx         # Página de listagem de livros
│   ├── create.tsx        # Página de criação de livros
│   └── 404.tsx           # Página não encontrada
└── package.json          # Dependências e scripts do projeto
```
