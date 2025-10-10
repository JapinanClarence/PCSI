import express from 'express';
import publicationController from '../controllers/publicationController.js';
import { verifyToken } from '../middlewares/authMiddleware.js';
import { validatePublication } from '../middlewares/validation.js';

const router = express.Router();

router.post('/', verifyToken, validatePublication, publicationController.createPublication);

export default router;