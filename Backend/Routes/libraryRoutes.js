import express from 'express';
import { getList, postBook } from '../Controllers/libraryController.js';

export const router = express.Router();

router.get('/myList', getList);

router.post('/myList', postBook);