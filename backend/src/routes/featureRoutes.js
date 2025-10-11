import { Router } from "express";
import featureController from "../controllers/featureController.js";
import { verifyToken } from "../middlewares/authMiddleware.js";
import { validateFeature } from "../middlewares/validation.js";

const router = Router();

router.post('/', verifyToken, validateFeature, featureController.createFeature);
router.get('/', featureController.getFeatures);
router.get('/:id', featureController.getFeature);
router.put('/:id', verifyToken, validateFeature, featureController.updateFeature);
router.patch('/:id/status', verifyToken, featureController.toggleFeatureStatus);

export default router;