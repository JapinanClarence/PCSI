import express from 'express';
import AuthController from '../controllers/authController.js';
import { verifyToken } from '../middlewares/authMiddleware.js';
import {
  validateRegister,
  validateLogin,
  validatePasswordResetRequest,
  validatePasswordReset,
  validateRefreshToken
} from '../middlewares/validation.js';

const router = express.Router();

// Public routes (no authentication required)
router.post('/register', validateRegister, AuthController.register);
router.post('/login', validateLogin, AuthController.login);
router.post('/logout', validateRefreshToken, AuthController.logout);
router.post('/refresh', validateRefreshToken, AuthController.refreshToken);
router.get('/verify-email/:token', AuthController.verifyEmail);
router.post('/forgot-password', validatePasswordResetRequest, AuthController.requestPasswordReset);
router.post('/reset-password/:token', validatePasswordReset, AuthController.resetPassword);

// Protected routes (authentication required)
router.get('/me', verifyToken, AuthController.getMe);

export default router;
