import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import RefreshToken from '../models/RefreshToken.js';
import { TOKEN_TYPES } from '../utils/constants.js';

const tokenService = {
  // Generate access token
  generateAccessToken: (payload) => {
    return jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {
      expiresIn: process.env.JWT_ACCESS_EXPIRY || '15m'
    });
  },

  // Generate refresh token
  generateRefreshToken: (payload) => {
    return jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {
      expiresIn: process.env.JWT_REFRESH_EXPIRY || '7d'
    });
  },

  // Verify access token
  verifyAccessToken: (token) => {
    try {
      return jwt.verify(token, process.env.JWT_ACCESS_SECRET);
    } catch (error) {
      throw new Error('Invalid access token');
    }
  },

  // Verify refresh token
  verifyRefreshToken: (token) => {
    try {
      return jwt.verify(token, process.env.JWT_REFRESH_SECRET);
    } catch (error) {
      throw new Error('Invalid refresh token');
    }
  },

  // Save refresh token to database
  saveRefreshToken: async (userId, token) => {
    try {
      // Decode token to get expiration date
      const decoded = jwt.decode(token);
      const expiresAt = new Date(decoded.exp * 1000);

      // Remove any existing refresh tokens for this user
      await RefreshToken.deleteMany({ user: userId });

      // Save new refresh token
      const refreshToken = new RefreshToken({
        token,
        user: userId,
        expiresAt
      });

      return await refreshToken.save();
    } catch (error) {
      throw new Error('Failed to save refresh token');
    }
  },

  // Delete refresh token from database
  deleteRefreshToken: async (token) => {
    try {
      return await RefreshToken.findOneAndDelete({ token });
    } catch (error) {
      throw new Error('Failed to delete refresh token');
    }
  },

  // Delete all refresh tokens for a user
  deleteAllRefreshTokens: async (userId) => {
    try {
      return await RefreshToken.deleteMany({ user: userId });
    } catch (error) {
      throw new Error('Failed to delete refresh tokens');
    }
  },

  // Check if refresh token exists in database
  findRefreshToken: async (token) => {
    try {
      return await RefreshToken.findOne({ token }).populate('user');
    } catch (error) {
      throw new Error('Failed to find refresh token');
    }
  },

  // Generate verification token (for email verification)
  generateVerificationToken: () => {
    return crypto.randomBytes(32).toString('hex');
  },

  // Generate password reset token
  generatePasswordResetToken: () => {
    return crypto.randomBytes(32).toString('hex');
  },

  // Create token payload
  createTokenPayload: (user) => {
    return {
      userId: user._id,
      email: user.email,
      role: user.role
    };
  },

  // Generate token pair (access + refresh)
  generateTokenPair: async (user) => {
    const payload = tokenService.createTokenPayload(user);
    
    const accessToken = tokenService.generateAccessToken(payload);
    const refreshToken = tokenService.generateRefreshToken(payload);

    // Save refresh token to database
    await tokenService.saveRefreshToken(user._id, refreshToken);

    return {
      accessToken,
      refreshToken
    };
  }
};

export default tokenService;