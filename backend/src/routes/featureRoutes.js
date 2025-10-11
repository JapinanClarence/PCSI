import { Router } from "express";
import featureController from "../controllers/featureController";
import { verifyToken } from "../middlewares/authMiddleware";
import { validateFeature } from "../middlewares/validation";

const router = Router();

router.post('/', verifyToken, validateFeature, featureController.createFeature);
router.get('/', featureController.getFeatures);
router.get('/:id', featureController.getFeature);
router.put('/:id', verifyToken, validateFeature, featureController.updateFeature);
router.patch('/:id/status', verifyToken, featureController.toggleFeatureStatus);

export default router;