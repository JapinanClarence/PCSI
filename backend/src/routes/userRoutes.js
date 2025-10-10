import express from 'express';
import UserController from '../controllers/userController.js';
import { verifyToken, requireAdmin, requireVerified } from '../middlewares/authMiddleware.js';
import { validateProfileUpdate } from '../middlewares/validation.js';

const router = express.Router();

// All user routes require authentication
router.use(verifyToken);

// User profile routes (authenticated users)
router.get('/profile', UserController.getProfile);
router.put('/profile', validateProfileUpdate, UserController.updateProfile);

// Admin routes (admin users only)
router.get('/admin/users', requireAdmin, UserController.getAllUsers);
router.get('/admin/users/:userId', requireAdmin, UserController.getUserById);
router.put('/admin/users/:userId/role', requireAdmin, UserController.updateUserRole);
router.delete('/admin/users/:userId', requireAdmin, UserController.deleteUser);

export default router;
