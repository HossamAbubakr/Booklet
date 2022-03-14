# Booklet, Full Stack Book Store

<p align="center">
  <img src="/logo.png">
  <img src="/overview.gif">
</p>

## Table of Contents

- [Summary](#Summary)

- [Technologies](#Technologies)

- [Backend](#Backend)

- [Migration](#Migration)

- [Frontend](#Frontend)

- [Structure](#Structure)

- [Usage and Installation](#usage-and-installation)

## Summary

Booklet is a Full-Stack Book Store made as a task.

Currently the functionality is limited as it was merely made as a showcase.

It demonstrates my understanding of Typescript, NodeJS, Express and React.

## Technologies

CircleCI was used for the CI/CD.   
NodeJS was used for the runtime.  
Express was used for the backend.  
React/TypeScript was used for the frontend.  
Typescript was used as the programming language.  
React Context API was used for the state management.   
Open Library Book Cover API was used for fetching the book covers.

## Backend

### API Endpoints

| Endpoint | Request | Parameters | Usage          |
| -------- | ------- | ---------- | -------------- |
| **/**    | **GET** | **N/A**    | **Root Route** |

#### Orders:

| Endpoint              | Request  | Parameters                      | Usage                 |
| --------------------- | -------- | ------------------------------- | --------------------- |
| **/orders**           | **GET**  | **N/A**                         | **List orders**       |
| **/orders/:id**       | **GET**  | **order id**                    | **Get order**         |
| **/orders**           | **POST** | **N/A**                         | **Create order**      |
| **/orders/:id/books** | **POST** | **order id, book_id, quantity** | **Add book to order** |

#### Books:

| Endpoint       | Request | Parameters        | Usage           |
| -------------- | ------- | ----------------- | --------------- |
| **/books**     | **GET** | **limit, offset** | **List orders** |
| **/books/:id** | **GET** | **book id**       | **Get order**   |

### Database Schema

#### Orders

| Field  | Type       | Special Attributes |
| ------ | ---------- | ------------------ |
| **id** | **Serial** | **Primay Key**     |

#### Books

| Field                | Type        | Special Attributes |
| -------------------- | ----------- | ------------------ |
| **id**               | **Serial**  | **Primay Key**     |
| **title**            | **Varchar** | **N/A**            |
| **authors**          | **Varchar** | **N/A**            |
| **average_rating**   | **Numeric** | **N/A**            |
| **publisher**        | **Varchar** | **N/A**            |
| **isbn**             | **Varchar** | **N/A**            |
| **publication_date** | **Varchar** | **N/A**            |

#### Orders_Books

| Field        | Type           | Special Attributes |
| ------------ | -------------- | ------------------ |
| **id**       | **Serial**     | **Primay Key**     |
| **quantity** | **Integer**    | **N/A**            |
| **order_id** | **Integer**    | **Foreign Key**    |
| **book_id**  | **BigInteger** | **Foreign Key**    |

## Migration

A complete database migration schema is available.  
Please use the following command to install db-migrate globally

```
npm install -g db-migrate
```

Start by making two databases one for production and one for testing.  
Using psql we can do the following

```
psql -U username
# Enter Password
CREATE DATABASE databaseName;
CREATE DATABASE testDatabaseName;
```

Create a .env file for the database connection using the the template in the file

```
dotEnv_Example
```

Found in the project root filder and replace the following fields with your information

```
POSTGRES_HOST
POSTGRES_DB
POSTGRES_USER
POSTGRES_PASSWORD
PORT
```

Then use the following command to migrate the tables automatically to your new database

```
db-migrate up
```

## Frontend

This project wouldn't have been possible without the awesome work by the openlibrary.org team and their wonderful Book Cover library.

## Structure

```
+---booklet-client
|   |   package-lock.json
|   |   package.json
|   |   tsconfig.json
|   |
|   +---public
|   |   |   favicon.ico
|   |   |   index.html
|   |   |   logo192.png
|   |   |   logo512.png
|   |   |   manifest.json
|   |   |   robots.txt
|   |   |
|   |   +---buttons
|   |   |       arrow-back-black.svg
|   |   |
|   |   \---images
|   |           cart.gif
|   |           cover.jpg
|   |           dashboard-logo.png
|   |           empty-cart.gif
|   |           github.png
|   |           linkedin.png
|   |           logo.png
|   |           successful.gif
|   |
|   \---src
|       |   index.css
|       |   index.tsx
|       |   react-app-env.d.ts
|       |
|       +---Components
|       |   |   App.css
|       |   |   App.tsx
|       |   |   Overview.css
|       |   |   Overview.tsx
|       |   |
|       |   +---Cart
|       |   |       CartItem.css
|       |   |       CartItem.tsx
|       |   |       CartList.css
|       |   |       CartList.tsx
|       |   |       Success.tsx
|       |   |
|       |   +---Common
|       |   |       Footer.css
|       |   |       Footer.tsx
|       |   |       Navbar.css
|       |   |       Navbar.tsx
|       |   |
|       |   \---Store
|       |           Book.css
|       |           Book.tsx
|       |           BookList.css
|       |           BookList.tsx
|       |           BookView.css
|       |           BookView.tsx
|       |
|       +---Contexts
|       |       CartContext.tsx
|       |
|       \---Utils
|               api.ts
|               types.ts
|
\---booklet-server
    |   .env-example
    |   database.json
    |   package-lock.json
    |   package.json
    |   tsconfig.json
    |
    +---bin
    |       deploy.sh
    |
    +---dist
    |   |   database.js
    |   |   server.js
    |   |
    |   +---handlers
    |   |       books.js
    |   |       orders.js
    |   |
    |   \---models
    |           books.js
    |           orders.js
    |
    +---migrations
    |   |   20220310051125-add-book-table.js
    |   |   20220310051209-add-order-table.js
    |   |   20220310051258-add-order-books-table.js
    |   |
    |   \---sqls
    |           20220310051125-add-book-table-down.sql
    |           20220310051125-add-book-table-up.sql
    |           20220310051209-add-order-table-down.sql
    |           20220310051209-add-order-table-up.sql
    |           20220310051258-add-order-books-table-down.sql
    |           20220310051258-add-order-books-table-up.sql
    |
    \---src
        |   database.ts
        |   server.ts
        |
        +---handlers
        |       books.ts
        |       orders.ts
        |
        \---models
                books.ts
                orders.ts
```

## Usage and Installation

You can get the project up and running in simple steps.
Provide the environment variables in the .env-example
Use the following commands to install the frontend and the backend

```
npm run backend:install
npm run frontend:install
```

Then run the following commands to start the project

```
npm run backend:start
npm run frontend:start
```
