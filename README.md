# Welcome to your Lovable project

## Project info

**URL**: [Project URL will be provided via environment variables]

## Security Features

This project implements comprehensive security measures:

### Environment Variables
- All sensitive data is stored in environment variables
- No API keys or secrets are exposed in the codebase
- Environment validation ensures required variables are present

### Security Features
- Input sanitization for all user inputs
- File upload validation with type and size restrictions
- Rate limiting for API requests
- Egyptian phone number validation
- Secure headers implementation
- XSS and injection attack prevention

## Setup Instructions

### 1. Environment Configuration

1. Copy `.env.example` to `.env`:
```bash
cp .env.example .env
