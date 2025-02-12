#### J-FS-Challenge
# Book Manager

**Book Manager** é um sistema completo para gerenciar livros. Ele permite adicionar, listar, pesquisar e deletar livros. O projeto é dividido em duas partes: o **frontend** (interface do usuário) e o **backend** (API que gerencia os dados dos livros).
Para realizar esse pequeno projeto experimental, eu me inspirei no <a href="https://leia-mais.netlify.app/" target="_blank">Leia+</a> (Projeto também de minha autoria), mas busquei cores mais sombrias e escuras. No backend, como já utilizo Fastify em outros projetos, eu reutilizei bastante código, o que agilizou bastante o trabalho. No frontend, como não sou muito habituado com Next.js, para construir essa aplicação eu utilizei alguns conhecimentos modulares de React (que têm certa semelhança) e utilizei algumas IAs para agilizar o preenchimento de algumas partes do código, bem como para identifação e resolução de erros, e é claro o clássico <a href="https://stackoverflow.com/" target="_blank">Stack Oveflow<a>.

## Funcionalidades

- **Adicionar Livro**: Permite adicionar livros com título, autor e ano de publicação.
- **Listar Livros**: Exibe a lista de livros com a possibilidade de filtrar por título ou autor.
- **Deletar Livro**: Permite excluir livros da lista.
- **Pesquisar Livros**: Filtra os livros pelo nome do título ou nome do autor.

## Tecnologias Usadas

- **Next.js**: Framework React para renderização do lado do servidor e construção de páginas.
- **React**: Biblioteca para construir a interface do usuário.
- **TypeScript**: Superset do JavaScript para adicionar tipagem estática ao código.
- **Chakra UI**: Framework de componentes React para construir interfaces com design acessível e fácil de usar.
- **Fetch API**: Usada para fazer requisições HTTP para o backend.

## Estrutura do Projeto

O projeto é dividido em duas pastas principais: `frontend` e `backend`. Cada uma contém um conjunto específico de arquivos que tratam da interface e da API, respectivamente.

### [Frontend](frontend/)
### [Backend](backend/)

## Contribuição

Se você deseja contribuir para este projeto, siga estas etapas:

1. Faça o fork do repositório.
2. Crie uma branch para a sua feature: git checkout -b minha-feature.
3. Faça as alterações e commit com mensagens claras: git commit -m 'Adicionando nova funcionalidade'.
4. Envie a branch para o repositório remoto: git push origin minha-feature.
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE para mais detalhes.
