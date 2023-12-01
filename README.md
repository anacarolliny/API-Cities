# API-Cities

Descrição Técnica da API
Visão Geral
Esta API foi desenvolvida para fornecer um conjunto de funcionalidades relacionadas a três domínios principais: Cidades, Pessoas e Autenticação de Usuários (Logins). A API é construída usando Node.js e TypeScript, fazendo uso de diversas tecnologias modernas como Knex, Postgres, SQLite, Jest, JWT (JSON Web Tokens), criptografia e Supertest.

Funcionalidades Principais
1. Cadastro e Autenticação de Usuários
Endpoint: /entrar
Este endpoint permite que os usuários realizem o login no sistema. Não requer autenticação para fornecer uma entrada inicial.
Após a autenticação bem-sucedida, a API gera um token de acesso que será usado para autenticar as solicitações subsequentes.
2. Gerenciamento de Cidades
Endpoint: /cidades
Consulta de informações sobre cidades.
Adição de novas cidades ao sistema.
Atualização de dados de cidades existentes.
3. Gerenciamento de Pessoas
Endpoint: /pessoas
Consulta de informações sobre pessoas.
Adição de novas pessoas ao sistema.
Atualização de dados de pessoas existentes.
4. Cadastro de Usuários (sem autenticação)
Endpoint: /cadastrar
Permite o cadastro de novos usuários no sistema, sem a necessidade de autenticação. Essa funcionalidade visa fornecer uma forma de registro no sistema.
Tecnologias Utilizadas
Node.js e TypeScript: A aplicação é construída em Node.js, utilizando TypeScript para trazer vantagens de tipagem estática e facilitar a manutenção do código.

Knex: Utilizado como query builder para interação com bancos de dados, proporcionando uma camada de abstração e facilidade no gerenciamento do banco de dados.

Postgres e SQLite: Banco de dados relacional Postgres é utilizado em ambientes de produção, enquanto SQLite é utilizado para desenvolvimento e testes.

Jest: Framework de teste para garantir a qualidade e robustez do código.

JWT (JSON Web Tokens): Utilizado para a geração de tokens de acesso após o login, garantindo a segurança das comunicações entre cliente e servidor.

Criptografia: Implementada para proteger informações sensíveis, como senhas armazenadas no banco de dados.

Supertest: Utilizado para testes de integração, garantindo que os endpoints da API funcionem corretamente em conjunto.

Como Iniciar o Projeto
Instale as dependências: npm install
Configure as variáveis de ambiente necessárias para a conexão com o banco de dados e outras configurações.
Execute as migrações do banco de dados: npx knex migrate:latest
Inicie o servidor: npm start
A API estará disponível em http://localhost:3333.

Testes
Para executar os testes automatizados, utilize o comando: npm test.
