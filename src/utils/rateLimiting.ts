/**
 * Client-side rate limiting implementation
 */
interface RateLimitEntry {
  attempts: number;
  lastAttempt: number;
  lockedUntil?: number;
}

const rateLimitStore = new Map<string, RateLimitEntry>();

export const checkRateLimit = (identifier: string): boolean => {
  const now = Date.now();
  const entry = rateLimitStore.get(identifier) || { attempts: 0, lastAttempt: now };
  
  // Check if account is locked
  if (entry.lockedUntil && entry.lockedUntil > now) {
    return false;
  }
  
  // Reset counter after cooldown period
  if (now - entry.lastAttempt > 60 * 1000) {
    entry.attempts = 0;
  }
  
  // Increment attempts
  entry.attempts++;
  entry.lastAttempt = now;
  
  // Apply lock if max attempts exceeded
  if (entry.attempts > SECURITY_CONFIG.MAX_LOGIN_ATTEMPTS) {
    entry.lockedUntil = now + SECURITY_CONFIG.LOCKOUT_DURATION;
  }
  
  rateLimitStore.set(identifier, entry);
  return entry.attempts <= SECURITY_CONFIG.MAX_LOGIN_ATTEMPTS;
};

export const getRemainingAttempts = (identifier: string): number => {
  const entry = rateLimitStore.get(identifier);
  if (!entry) return SECURITY_CONFIG.MAX_LOGIN_ATTEMPTS;
  
  const now = Date.now();
  if (entry.lockedUntil && entry.lockedUntil > now) {
    return 0;
  }
  
  return Math.max(0, SECURITY_CONFIG.MAX_LOGIN_ATTEMPTS - entry.attempts);
};

export const resetRateLimit = (identifier: string): void => {
  rateLimitStore.delete(identifier);
};

export const isAccountLocked = (identifier: string): boolean => {
  const entry = rateLimitStore.get(identifier);
  if (!entry || !entry.lockedUntil) return false;
  
  return entry.lockedUntil > Date.now();
};

export const getLockTimeRemaining = (identifier: string): number => {
  const entry = rateLimitStore.get(identifier);
  if (!entry || !entry.lockedUntil) return 0;
  
  const remaining = entry.lockedUntil - Date.now();
  return Math.max(0, remaining);
};
