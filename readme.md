# Welcome to Book library App

This is a Repository of the BookLibrary App ✌

## Tech Stack For BackEnd and DataBase
- Node js
- Express js
- MySql
- GraphQl
- React

## Setup Instructions

### `Get different builds of App in different Branches`

#### `Main`: Rest Api branch 

#### `GraphQl` : GraphQl api.

## Run Locally

Clone the project

```bash
  git clone https://github.com/theUmeshC/BookStackLibrary/(with respective to branches).

```

Go to the project directory

```bash
  cd BookStackLibrary
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

## Features

- Add a Book
- Get Book List 
- Update Book
- Delete Book
- Search Book

## API End-Points for Rest API

```
http://Locallhost:8800/admin/bookList
http://Locallhost:8800/admin/addBookToList
http://Locallhost:8800/admin/editBook:bookId
http://Locallhost:8800/admin/postEditBook:bookId
http://Locallhost:8800/admin/fetchByTitle:bookTitle
```

## documentation for GraphQl API.

```
http://Locallhost:4000/graphql
```


## setting up mySql database

set up mySql schema and replace the schema name and password in the util folder database file

## GraphQL endpoint Postman snapshot

<img width="100%" alt="createbook" src="https://user-images.githubusercontent.com/108338019/215047519-268b11e5-42c9-4d55-88f8-c2e1a6ab9a65.png">
<img width="100%" alt="deletebyId" src="https://user-images.githubusercontent.com/108338019/215047828-7a085dc8-043d-4dbd-8631-2b0502bff455.png">
<img width="100%" alt="getbooklist" src="https://user-images.githubusercontent.com/108338019/215047898-f213ff52-cfe2-4594-90c7-23dde743f966.png">


## Rest api endpoint Postman snapshot

<img width="100%" alt="restApiAddBook" src="https://user-images.githubusercontent.com/108338019/215048877-c34c08d8-05ef-4111-9b08-43d0ca50af0c.png">
<img width="100%" alt="restApiGetBook" src="https://user-images.githubusercontent.com/108338019/215048894-59e566c9-f0b3-4379-bafd-24a268ae0f99.png">
