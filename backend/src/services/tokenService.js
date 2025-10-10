import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import RefreshToken from '../models/RefreshToken.js';
import { TOKEN_TYPES } from '../utils/constants.js';

// Generate access token
export const generateAccessToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {
    expiresIn: process.env.JWT_ACCESS_EXPIRY || '15m'
  });
};

// Generate refresh token
export const generateRefreshToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {
    expiresIn: process.env.JWT_REFRESH_EXPIRY || '7d'
  });
};

// Verify access token
export const verifyAccessToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_ACCESS_SECRET);
  } catch (error) {
    throw new Error('Invalid access token');
  }
};

// Verify refresh token
export const verifyRefreshToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_REFRESH_SECRET);
  } catch (error) {
    throw new Error('Invalid refresh token');
  }
};

// Save refresh token to database
export const saveRefreshToken = async (userId, token) => {
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
};

// Delete refresh token from database
export const deleteRefreshToken = async (token) => {
  try {
    return await RefreshToken.findOneAndDelete({ token });
  } catch (error) {
    throw new Error('Failed to delete refresh token');
  }
};

// Delete all refresh tokens for a user
export const deleteAllRefreshTokens = async (userId) => {
  try {
    return await RefreshToken.deleteMany({ user: userId });
  } catch (error) {
    throw new Error('Failed to delete refresh tokens');
  }
};

// Check if refresh token exists in database
export const findRefreshToken = async (token) => {
  try {
    return await RefreshToken.findOne({ token }).populate('user');
  } catch (error) {
    throw new Error('Failed to find refresh token');
  }
};

// Generate verification token (for email verification)
export const generateVerificationToken = () => {
  return crypto.randomBytes(32).toString('hex');
};

// Generate password reset token
export const generatePasswordResetToken = () => {
  return crypto.randomBytes(32).toString('hex');
};

// Create token payload
export const createTokenPayload = (user) => {
  return {
    userId: user._id,
    email: user.email,
    role: user.role
  };
};

// Generate token pair (access + refresh)
export const generateTokenPair = async (user) => {
  const payload = createTokenPayload(user);
  
  const accessToken = generateAccessToken(payload);
  const refreshToken = generateRefreshToken(payload);

  // Save refresh token to database
  await saveRefreshToken(user._id, refreshToken);

  return {
    accessToken,
    refreshToken
  };
};
