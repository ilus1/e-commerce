# Simple e-commerce page

## Description

This project is a simple e-commerce page that lists products from a fake API and allows the user to add and remove products from the cart.

## How to run

First you need to clone the repository with the command:


```
git clone <repositosio>
```

Then you need to access the project folder with the command:

```
cd <folder>
```

If you have docker installed, you can run the project with the command:

```
docker-compose up --build
```

If you don't have docker installed, you can run the project by installing the dependencies with the command:

```
yarn install
```

And then run the project with the command:

```
yarn start
```



## Functional requirements

- [x] Shimmer effect while data is being loaded
- [x] List the products from the store
- [x] Add products to the cart
- [x] Remove products from the cart
- [x] Change the quantity of each product in the cart
- [x] Show the total value of the cart
- [x] Show the total quantity of products in the cart

## Non-functional requirements

- [x] The project must use React
- [x] The project must use Redux
- [x] The project must use Typescript
- [x] The project must use Styled Components
- [x] The project must use React-Query
- [x] The project must use Jest
- [x] The project must use Framer-Motion
