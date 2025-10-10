import { register, login, logout, refreshAccessToken, verifyEmail, requestPasswordReset, resetPassword, getUserProfile } from '../services/authService.js';
import { asyncHandler } from '../middlewares/errorHandler.js';
import { STATUS_CODES } from '../utils/constants.js';

class AuthController {
  // Register new user
  static register = asyncHandler(async (req, res) => {
    const { email, password, firstName, lastName } = req.body;

    const result = await register({
      email,
      password,
      firstName,
      lastName
    });

    res.status(STATUS_CODES.CREATED).json({
      success: true,
      message: result.message,
      data: {
        user: result.user
      }
    });
  });

  // Login user
  static login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const result = await login(email, password);

    res.status(STATUS_CODES.OK).json({
      success: true,
      message: result.message,
      data: {
        user: result.user,
        accessToken: result.accessToken,
        refreshToken: result.refreshToken
      }
    });
  });

  // Logout user
  static logout = asyncHandler(async (req, res) => {
    const { refreshToken } = req.body;

    const result = await logout(refreshToken);

    res.status(STATUS_CODES.OK).json({
      success: true,
      message: result.message
    });
  });

  // Refresh access token
  static refreshToken = asyncHandler(async (req, res) => {
    const { refreshToken } = req.body;

    const result = await refreshAccessToken(refreshToken);

    res.status(STATUS_CODES.OK).json({
      success: true,
      data: {
        accessToken: result.accessToken,
        user: result.user
      }
    });
  });

  // Verify email
  static verifyEmail = asyncHandler(async (req, res) => {
    const { token } = req.params;

    const result = await verifyEmail(token);

    res.status(STATUS_CODES.OK).json({
      success: true,
      message: result.message,
      data: {
        user: result.user
      }
    });
  });

  // Request password reset
  static requestPasswordReset = asyncHandler(async (req, res) => {
    const { email } = req.body;

    const result = await requestPasswordReset(email);

    res.status(STATUS_CODES.OK).json({
      success: true,
      message: result.message
    });
  });

  // Reset password
  static resetPassword = asyncHandler(async (req, res) => {
    const { token } = req.params;
    const { password } = req.body;

    const result = await resetPassword(token, password);

    res.status(STATUS_CODES.OK).json({
      success: true,
      message: result.message,
      data: {
        user: result.user
      }
    });
  });

  // Get current user info (for token verification)
  static getMe = asyncHandler(async (req, res) => {
    res.status(STATUS_CODES.OK).json({
      success: true,
      data: {
        user: req.user
      }
    });
  });
}

export default AuthController;
