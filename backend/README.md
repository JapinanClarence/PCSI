# PCSI Backend API

A robust Express.js backend API with JWT authentication, MongoDB integration, and comprehensive user management features.

## Features

- 🔐 **JWT Authentication** with access and refresh tokens
- 🔑 **API Key Authentication** for additional security
- 📧 **Email Verification** for user registration
- 🔒 **Password Reset** functionality
- 👥 **Role-based Access Control** (User/Admin)
- 🛡️ **Input Validation** and error handling
- 📊 **MongoDB Integration** with Mongoose
- 🚀 **RESTful API** design

## Project Structure

```
backend/
├── src/
│   ├── config/
│   │   └── database.js          # MongoDB connection
│   ├── models/
│   │   ├── User.js              # User model
│   │   └── RefreshToken.js      # Refresh token model
│   ├── controllers/
│   │   ├── authController.js    # Authentication endpoints
│   │   └── userController.js    # User management endpoints
│   ├── services/
│   │   ├── authService.js       # Authentication business logic
│   │   ├── emailService.js      # Email sending service
│   │   └── tokenService.js      # JWT token operations
│   ├── middlewares/
│   │   ├── authMiddleware.js    # Authentication middleware
│   │   ├── validation.js        # Input validation
│   │   └── errorHandler.js      # Error handling
│   ├── routes/
│   │   ├── authRoutes.js        # Authentication routes
│   │   └── userRoutes.js        # User routes
│   └── utils/
│       ├── constants.js         # Application constants
│       └── email.js             # Email templates
├── index.js                     # Application entry point
├── package.json                 # Dependencies
├── env.example                  # Environment variables template
└── README.md                    # This file
```

## Setup Instructions

### 1. Install Dependencies

```bash
cd backend
npm install
```

### 2. Environment Configuration

Copy the environment template and configure your variables:

```bash
cp env.example .env
```

Update the `.env` file with your actual values:

```env
# Server Configuration
PORT=5000

# Database Configuration
MONGO_URI=mongodb://localhost:27017/pcsi_db

# JWT Configuration
JWT_ACCESS_SECRET=your_super_secret_access_token_key_here
JWT_REFRESH_SECRET=your_super_secret_refresh_token_key_here
JWT_ACCESS_EXPIRY=15m
JWT_REFRESH_EXPIRY=7d

# Email Configuration
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password

# Client Configuration
CLIENT_URL=http://localhost:3000

# Environment
NODE_ENV=development
```

### 3. Database Setup

Make sure MongoDB is running on your system. The application will automatically connect to the database specified in your `MONGO_URI`.

### 4. Run the Application

```bash
# Development mode (with auto-restart)
npm run dev

# Production mode
npm start
```

The server will start on `http://localhost:5000` (or the port specified in your `.env` file).

## API Endpoints

### Authentication Routes (`/api/auth`)

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/register` | Register new user | No |
| POST | `/login` | Login user | No |
| POST | `/logout` | Logout user | No |
| POST | `/refresh` | Refresh access token | No |
| GET | `/verify-email/:token` | Verify email address | No |
| POST | `/forgot-password` | Request password reset | No |
| POST | `/reset-password/:token` | Reset password | No |
| GET | `/me` | Get current user info | Yes |

### User Routes (`/api/users`)

| Method | Endpoint | Description | Auth Required | Role Required |
|--------|----------|-------------|---------------|---------------|
| GET | `/profile` | Get user profile | Yes | User |
| PUT | `/profile` | Update user profile | Yes | User |
| GET | `/admin/users` | Get all users | Yes | Admin |
| GET | `/admin/users/:userId` | Get user by ID | Yes | Admin |
| PUT | `/admin/users/:userId/role` | Update user role | Yes | Admin |
| DELETE | `/admin/users/:userId` | Delete user | Yes | Admin |

### Utility Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/health` | Health check |
| GET | `/api` | API information and documentation |

## Authentication Flow

### 1. Registration
1. User provides email, password, firstName, lastName
2. System creates user account (unverified)
3. Verification email is sent automatically
4. User must verify email before login

### 2. Login
1. User provides email and password
2. System validates credentials and email verification status
3. Returns access token (15min) and refresh token (7 days)
4. Refresh token is stored in database

### 3. Token Usage
1. Client stores both tokens securely
2. Access token is sent with API requests in Authorization header
3. When access token expires, use refresh token to get new access token
4. Refresh tokens can be revoked (logout) for security

### 4. Password Reset
1. User requests password reset with email
2. System sends reset email with secure token
3. User clicks link and provides new password
4. All refresh tokens are invalidated for security

## Request/Response Examples

### Register User
```bash
POST /api/auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "SecurePass123",
  "firstName": "John",
  "lastName": "Doe"
}
```

### Login
```bash
POST /api/auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "SecurePass123"
}
```

### Authenticated Request
```bash
GET /api/users/profile
Authorization: Bearer <access_token>
X-API-Key: <your_api_key>
```

## API Key Authentication

All API endpoints (except `/api/health`) require an API key for additional security:

### Header Options
- `X-API-Key: your_api_key_here` (recommended)
- `API-Key: your_api_key_here` (alternative)

### Example Requests with API Key
```bash
# Register user
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -H "X-API-Key: your_api_key_here" \
  -d '{"email": "user@example.com", "password": "SecurePass123", "firstName": "John", "lastName": "Doe"}'

# Login user  
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -H "X-API-Key: your_api_key_here" \
  -d '{"email": "user@example.com", "password": "SecurePass123"}'
```

## Security Features

- **API Key Protection**: All endpoints protected with API key authentication
- **Password Hashing**: bcrypt with salt rounds
- **JWT Security**: Separate secrets for access and refresh tokens
- **Token Expiration**: Short-lived access tokens, long-lived refresh tokens
- **Email Verification**: Required before account activation
- **Input Validation**: Comprehensive validation for all inputs
- **Error Handling**: Secure error messages without sensitive data exposure
- **CORS Configuration**: Configurable cross-origin resource sharing

## Error Handling

The API returns consistent error responses:

```json
{
  "success": false,
  "message": "Error description",
  "errors": [
    {
      "field": "fieldName",
      "message": "Validation error message",
      "value": "invalidValue"
    }
  ]
}
```

## Development

### Scripts
- `npm start`: Start production server
- `npm run dev`: Start development server with auto-restart

### Environment Variables
All configuration is done through environment variables. See `env.example` for the complete list.

## Production Deployment

1. Set `NODE_ENV=production` in your environment
2. Use strong, unique secrets for JWT tokens
3. Configure proper CORS origins
4. Use a production MongoDB instance
5. Set up proper email service (SMTP)
6. Consider using a process manager like PM2

## License

This project is part of the PCSI application suite.
