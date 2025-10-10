import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import connectDB from './src/config/database.js';
import { errorHandler, notFound } from './src/middlewares/errorHandler.js';
import { validateApiKey } from './src/middlewares/apiKeyMiddleware.js';
import { testEmailConfiguration } from './src/services/emailService.js';

// Import routes
import authRoutes from './src/routes/authRoutes.js';
import userRoutes from './src/routes/userRoutes.js';

dotenv.config();

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:3000',
  credentials: true
}));

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Test email configuration on startup
testEmailConfiguration();

// Health check endpoint (no API key required)
app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'PCSI Backend API is running',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// Apply API key middleware to all other API routes
app.use('/api', validateApiKey);

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

// Handle 404 for undefined routes
app.use(notFound);

// Global error handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`PCSI Backend Server running on port ${PORT}`);
  console.log(`Email service: ${process.env.EMAIL_HOST ? 'Configured' : 'Not configured'}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received. Shutting down gracefully...');
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('SIGINT received. Shutting down gracefully...');
  process.exit(0);
});
