# Desafio MKS-Frontend

## Descrição do desafio

O desafio consiste em criar uma aplicação web que consuma a API disponibilizada, para listar produtos da loja MKS, com a possibilidade do usuário adicionar produtos ao seu carrinho e alterar a quantidade desejada.

## Como rodar o projeto

Para rodar o projeto, primeiro você precisa clonar o repositório com o comando:

```
git clone <repositosio>
```

Apos clonar o repositório, você precisa entrar na pasta do projeto com o comando:

```
cd mks-frontend-challenge
```

Neste ponto você pode escolher rodar a imagem docker com o comando:

```
docker-compose up --build
```

Ou se preferir, pode rodar o projeto localmente. Primeiramente instalando as dependencias:

```
yarn install
```

E depois rodando o projeto com o comando:

```
yarn start
```



## Requisitos Funcionais

- [x] Consumir API com a lista de produtos
- [x] Shimmer effect enquanto os dados são carregados
- [x] Listar os produtos da loja MKS
- [x] Adicionar produtos ao carrinho
- [x] Remover produtos do carrinho
- [x] Alterar a quantidade de cada produto no carrinho
- [x] Mostrar o valor total do carrinho


## Requisitos não funcionais

- [x] Utilizar React
- [x] Utilizar Typescript
- [x] Utilizar Styled Components
- [x] Utilizar React-Query
- [x] Utilizar Jest
- [x] Utilizar Framer-Motion

