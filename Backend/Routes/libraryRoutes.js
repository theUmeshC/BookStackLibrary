import express from "express";

import {
  editBook,
  fetchBookByTitle,
  getList,
  postBook,
  postEditBook,
} from "../Controllers/libraryController.js";

//setting up the express router
export const router = express.Router();

// router to get book list from database
router.get("/bookList", getList);

// router to add book to database
router.post("/addBookToList", postBook);

// router to get book from database table wrt to id
router.get("/editBook:bookId", editBook);

// router to updating book after editing to database table wrt to id
router.post("/postEditBook:bookId", postEditBook);

// router to fetch book from db table wrt to title
router.get("/fetchByTitle:bookTitle", fetchBookByTitle);
