import User from '../models/User.js';
import { generateVerificationToken, generateTokenPair, verifyRefreshToken, findRefreshToken, deleteRefreshToken, deleteAllRefreshTokens, createTokenPayload, generateAccessToken } from './tokenService.js';
import { sendVerificationEmail, sendPasswordResetEmail } from './emailService.js';
import { MESSAGES } from '../utils/constants.js';

// Register new user
export const register = async (userData) => {
  const { email, password, firstName, lastName } = userData;

  // Check if user already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error(MESSAGES.EMAIL_ALREADY_EXISTS);
  }

  // Generate verification token
  const verificationToken = generateVerificationToken();

  // Create new user
  const user = new User({
    email,
    password,
    firstName,
    lastName,
    verificationToken
  });

  await user.save();

  // Send verification email
  await sendVerificationEmail(user.email, user.firstName, verificationToken);

  // Return user without sensitive data
  const userResponse = user.toJSON();
  return {
    user: userResponse,
    message: MESSAGES.REGISTER_SUCCESS
  };
};

// Login user
export const login = async (email, password) => {
  // Find user by email
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error(MESSAGES.INVALID_CREDENTIALS);
  }

  // Check if email is verified
  if (!user.isVerified) {
    throw new Error(MESSAGES.EMAIL_NOT_VERIFIED);
  }

  // Verify password
  const isPasswordValid = await user.comparePassword(password);
  if (!isPasswordValid) {
    throw new Error(MESSAGES.INVALID_CREDENTIALS);
  }

  // Generate token pair
  const { accessToken, refreshToken } = await generateTokenPair(user);

  return {
    user: user.toJSON(),
    accessToken,
    refreshToken,
    message: MESSAGES.LOGIN_SUCCESS
  };
};

// Logout user (delete refresh token)
export const logout = async (refreshToken) => {
  if (refreshToken) {
    await deleteRefreshToken(refreshToken);
  }
  return { message: MESSAGES.LOGOUT_SUCCESS };
};

// Refresh access token
export const refreshAccessToken = async (refreshToken) => {
  // Verify refresh token
  const decoded = verifyRefreshToken(refreshToken);

  // Check if refresh token exists in database
  const storedToken = await findRefreshToken(refreshToken);
  if (!storedToken) {
    throw new Error(MESSAGES.INVALID_TOKEN);
  }

  // Get user
  const user = await User.findById(decoded.userId);
  if (!user) {
    throw new Error(MESSAGES.USER_NOT_FOUND);
  }

  // Generate new access token
  const payload = createTokenPayload(user);
  const newAccessToken = generateAccessToken(payload);

  return {
    accessToken: newAccessToken,
    user: user.toJSON()
  };
};

// Verify email
export const verifyEmail = async (verificationToken) => {
  const user = await User.findOne({ verificationToken });
  if (!user) {
    throw new Error(MESSAGES.INVALID_TOKEN);
  }

  // Update user verification status
  user.isVerified = true;
  user.verificationToken = null;
  await user.save();

  return {
    user: user.toJSON(),
    message: MESSAGES.EMAIL_VERIFIED
  };
};

// Request password reset
export const requestPasswordReset = async (email) => {
  const user = await User.findOne({ email });
  if (!user) {
    // Don't reveal if email exists or not for security
    return { message: MESSAGES.PASSWORD_RESET_SENT };
  }

  // Generate reset token
  const resetToken = generatePasswordResetToken();
  const resetExpires = new Date(Date.now() + 3600000); // 1 hour

  // Update user with reset token
  user.resetPasswordToken = resetToken;
  user.resetPasswordExpires = resetExpires;
  await user.save();

  // Send password reset email
  await sendPasswordResetEmail(user.email, user.firstName, resetToken);

  return { message: MESSAGES.PASSWORD_RESET_SENT };
};

// Reset password
export const resetPassword = async (resetToken, newPassword) => {
  const user = await User.findOne({
    resetPasswordToken: resetToken,
    resetPasswordExpires: { $gt: Date.now() }
  });

  if (!user) {
    throw new Error(MESSAGES.INVALID_TOKEN);
  }

  // Update password
  user.password = newPassword;
  user.resetPasswordToken = null;
  user.resetPasswordExpires = null;
  await user.save();

  // Delete all refresh tokens for security
  await deleteAllRefreshTokens(user._id);

  return {
    user: user.toJSON(),
    message: MESSAGES.PASSWORD_RESET_SUCCESS
  };
};

// Get user profile
export const getUserProfile = async (userId) => {
  const user = await User.findById(userId);
  if (!user) {
    throw new Error(MESSAGES.USER_NOT_FOUND);
  }

  return user.toJSON();
};

// Update user profile
export const updateUserProfile = async (userId, updateData) => {
  const allowedUpdates = ['firstName', 'lastName', 'email'];
  const updates = {};

  // Filter allowed updates
  Object.keys(updateData).forEach(key => {
    if (allowedUpdates.includes(key) && updateData[key] !== undefined) {
      updates[key] = updateData[key];
    }
  });

  // If email is being updated, check for duplicates
  if (updates.email) {
    const existingUser = await User.findOne({ 
      email: updates.email, 
      _id: { $ne: userId } 
    });
    if (existingUser) {
      throw new Error(MESSAGES.EMAIL_ALREADY_EXISTS);
    }
    // Reset verification status if email changes
    updates.isVerified = false;
    updates.verificationToken = generateVerificationToken();
  }

  const user = await User.findByIdAndUpdate(
    userId,
    updates,
    { new: true, runValidators: true }
  );

  if (!user) {
    throw new Error(MESSAGES.USER_NOT_FOUND);
  }

  // Send verification email if email was changed
  if (updates.email && updates.verificationToken) {
    await sendVerificationEmail(user.email, user.firstName, updates.verificationToken);
  }

  return user.toJSON();
};
