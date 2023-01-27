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

<img width="657" alt="createbook" src="https://user-images.githubusercontent.com/108338019/215047519-268b11e5-42c9-4d55-88f8-c2e1a6ab9a65.png">
<img width="654" alt="deletebyId" src="https://user-images.githubusercontent.com/108338019/215047828-7a085dc8-043d-4dbd-8631-2b0502bff455.png">
<img width="656" alt="editbyid" src="https://user-images.githubusercontent.com/108338019/215047843-afee6880-e2b3-4944-a8b1-82830697b3a6.png">
<img width="652" alt="getbookbyId" src="https://user-images.githubusercontent.com/108338019/215047861-f602abd4-05f3-4543-bf30-0d25b7de60d7.png">
<img width="641" alt="getbookbytitle" src="https://user-images.githubusercontent.com/108338019/215047876-2b0d2fd9-7f67-47e6-ab2e-641e0280a981.png">
<img width="646" alt="getbooklist" src="https://user-images.githubusercontent.com/108338019/215047898-f213ff52-cfe2-4594-90c7-23dde743f966.png">
