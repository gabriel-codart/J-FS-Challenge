# Books API

API que permite Criar, Ver, Atualizar e Deletar livros no sistema.
A princípio a persistência é apenas em tempo de execução, mas, é possível em atualizações conectar a aplicação a um Banco SQL ou NoSQL.

## Pré-requisitos

- Node.js v14 ou superior
- npm

## Instalação

1. Instale as dependências:

    ```bash
    npm install

2. Inicie o servidor:

    ```bash
    npm run dev

O servidor será iniciado em http://localhost:2020 e a documentação Swagger estará disponível em http://localhost:2020/docs.

## Estrutura do Projeto

```plaintext
src
├── controllers
│   └── item.ts  # Controladores para manipulação de lógica de negócios
├── models
│   └── item.ts  # Modelos de dados
├── routes
│   └── item.ts  # Definição das rotas
└── index.ts     # Configuração principal do Fastify
```

## Documentação

Este template inclui a configuração do Swagger para documentação automática da API. Acesse a documentação em http://localhost:2020/docs.

## Contribuição

Sinta-se à vontade para fazer um fork do projeto e enviar pull requests. Sugestões e melhorias são sempre bem-vindas!

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.
