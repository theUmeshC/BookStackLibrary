import express from 'express';

import { getList, postBook } from '../Controllers/libraryController.js';

export const router = express.Router();

// router to get book list from database
router.get('/bookList', getList);

// router to add book to database
router.post('/addBookToList', postBook);
