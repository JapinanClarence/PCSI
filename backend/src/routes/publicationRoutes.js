import express from 'express';
import publicationController from '../controllers/publicationController.js';
import { verifyToken} from '../middlewares/authMiddleware.js';
import { validatePublication } from '../middlewares/validation.js';

const router = express.Router();

router.post('/', verifyToken, validatePublication, publicationController.createPublication);
router.get('/',  publicationController.getPublications);
router.get('/:id',  publicationController.getPublication);
router.put('/:id', verifyToken, validatePublication, publicationController.updatePublication);
router.patch('/:id/status', verifyToken, publicationController.togglePublicationStatus);

export default router;