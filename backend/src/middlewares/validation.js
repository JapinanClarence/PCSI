import { body, validationResult } from 'express-validator';
import { MESSAGES, STATUS_CODES } from '../utils/constants.js';

// Handle validation errors
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(STATUS_CODES.BAD_REQUEST).json({
      success: false,
      message: 'Validation failed',
      errors: errors.array().map(error => ({
        field: error.path,
        message: error.msg,
        value: error.value
      }))
    });
  }
  next();
};

// Register validation rules
const validateRegister = [
  body('email')
    .isEmail()
    .withMessage(MESSAGES.INVALID_EMAIL)
    .toLowerCase(),
  body('password')
    .isLength({ min: 6 })
    .withMessage(MESSAGES.PASSWORD_TOO_SHORT)
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/)
    .withMessage('Password must contain at least one lowercase letter, one uppercase letter, and one number'),
  body('firstName')
    .trim()
    .isLength({ min: 1, max: 50 })
    .withMessage('First name must be between 1 and 50 characters'),
  body('lastName')
    .trim()
    .isLength({ min: 1, max: 50 })
    .withMessage('Last name must be between 1 and 50 characters'),
  handleValidationErrors
];

// Login validation rules
const validateLogin = [
  body('email')
    .isEmail()
    .withMessage(MESSAGES.INVALID_EMAIL)
    .toLowerCase(),
  body('password')
    .notEmpty()
    .withMessage('Password is required'),
  handleValidationErrors
];

// Password reset request validation
const validatePasswordResetRequest = [
  body('email')
    .isEmail()
    .withMessage(MESSAGES.INVALID_EMAIL)
    .toLowerCase(),
  handleValidationErrors
];

// Password reset validation
const validatePasswordReset = [
  body('password')
    .isLength({ min: 6 })
    .withMessage(MESSAGES.PASSWORD_TOO_SHORT)
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/)
    .withMessage('Password must contain at least one lowercase letter, one uppercase letter, and one number'),
  handleValidationErrors
];

// Profile update validation
const validateProfileUpdate = [
  body('email')
    .optional()
    .isEmail()
    .withMessage(MESSAGES.INVALID_EMAIL)
    .toLowerCase(),
  body('firstName')
    .optional()
    .trim()
    .isLength({ min: 1, max: 50 })
    .withMessage('First name must be between 1 and 50 characters'),
  body('lastName')
    .optional()
    .trim()
    .isLength({ min: 1, max: 50 })
    .withMessage('Last name must be between 1 and 50 characters'),
  handleValidationErrors
];

// Refresh token validation
const validateRefreshToken = [
  body('refreshToken')
    .notEmpty()
    .withMessage('Refresh token is required'),
  handleValidationErrors
];

export {
  validateRegister,
  validateLogin,
  validatePasswordResetRequest,
  validatePasswordReset,
  validateProfileUpdate,
  validateRefreshToken,
  handleValidationErrors
};
