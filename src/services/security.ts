import { securityConfig } from '@/config/env';

export class SecurityService {
  // Sanitize input strings
  static sanitizeInput(input: string): string {
    return input
      .replace(/[<>]/g, '') // Remove HTML tags
      .replace(/javascript:/gi, '') // Remove javascript: protocol
      .replace(/on\w+\s*=/gi, '') // Remove event handlers
      .trim();
  }

  // Validate file uploads
  static validateFile(file: File): { valid: boolean; error?: string } {
    // Check file size
    if (file.size > securityConfig.maxFileSize) {
      return {
        valid: false,
        error: `File size exceeds maximum allowed size of ${securityConfig.maxFileSize / 1024 / 1024}MB`
      };
    }

    // Check file type
    if (!securityConfig.allowedFileTypes.includes(file.type)) {
      return {
        valid: false,
        error: `File type ${file.type} is not allowed. Allowed types: ${securityConfig.allowedFileTypes.join(', ')}`
      };
    }

    // Check file name
    if (!/^[a-zA-Z0-9._-]+$/.test(file.name)) {
      return {
        valid: false,
        error: 'File name contains invalid characters'
      };
    }

    return { valid: true };
  }

  // Rate limiting helper
  private static requestCounts = new Map<string, { count: number; resetTime: number }>();

  static checkRateLimit(identifier: string, maxRequests: number = 10, windowMs: number = 60000): boolean {
    const now = Date.now();
    const windowStart = now - windowMs;

    const existing = this.requestCounts.get(identifier);
    
    if (!existing || existing.resetTime < windowStart) {
      this.requestCounts.set(identifier, { count: 1, resetTime: now + windowMs });
      return true;
    }

    if (existing.count >= maxRequests) {
      return false;
    }

    existing.count++;
    return true;
  }

  // Validate Egyptian phone numbers
  static validateEgyptianPhone(phone: string): { valid: boolean; error?: string; normalized?: string } {
    const sanitized = this.sanitizeInput(phone).replace(/\s+/g, '');
    
    // Remove country code if present
    const normalized = sanitized.replace(/^\+20/, '').replace(/^20/, '').replace(/^0/, '');
    
    // Egyptian mobile patterns
    const mobilePattern = /^(10|11|12|15)\d{8}$/;
    // Egyptian landline patterns (area codes + local number)
    const landlinePattern = /^[2-9]\d{7,9}$/;

    if (mobilePattern.test(normalized)) {
      return {
        valid: true,
        normalized: `+20${normalized}`
      };
    }

    if (landlinePattern.test(normalized)) {
      return {
        valid: true,
        normalized: `+20${normalized}`
      };
    }

    return {
      valid: false,
      error: 'Please enter a valid Egyptian phone number'
    };
  }

  // Secure headers helper
  static getSecureHeaders(): Record<string, string> {
    return {
      'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' https:;",
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'X-XSS-Protection': '1; mode=block',
      'Referrer-Policy': 'strict-origin-when-cross-origin'
    };
  }

  // Log security events (only if enabled)
  static logSecurityEvent(event: string, details?: any): void {
    if (securityConfig.enableLogging) {
      console.warn(`[SECURITY] ${event}`, details);
    }
  }
}
