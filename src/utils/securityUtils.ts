/**
 * Central security utilities for the application
 */
export const SECURITY_CONFIG = {
  MAX_LOGIN_ATTEMPTS: 5,
  LOCKOUT_DURATION: 15 * 60 * 1000, // 15 minutes
  SESSION_TIMEOUT: 30 * 60 * 1000, // 30 minutes
  TOKEN_EXPIRY: 24 * 60 * 60 * 1000, // 24 hours
  OTP_EXPIRY: 5 * 60 * 1000, // 5 minutes
};

export const generateSecureToken = (length = 32): string => {
  const array = new Uint8Array(length);
  crypto.getRandomValues(array);
  return Array.from(array, dec => dec.toString(16).padStart(2, '0')).join('');
};

export const generateOTP = (): string => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

export const hashData = async (data: string): Promise<string> => {
  const encoder = new TextEncoder();
  const dataBuffer = encoder.encode(data);
  const hashBuffer = await crypto.subtle.digest('SHA-256', dataBuffer);
  return Array.from(new Uint8Array(hashBuffer))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
};

export const validateToken = (token: string, expectedExpiry: number): boolean => {
  try {
    const [payload, signature, expiry] = token.split('.');
    const now = Date.now();
    return parseInt(expiry) > now;
  } catch {
    return false;
  }
};
