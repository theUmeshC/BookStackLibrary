import express from 'express';
import { getList, postBook } from '../Controller/libraryController.js';

export const router = express.Router();

router.get('/myList', getList);

router.post('/myList', postBook);