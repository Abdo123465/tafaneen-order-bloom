// Environment variables configuration with validation
interface EnvConfig {
  supabase: {
    url: string;
    anonKey: string;
  };
  resend: {
    apiKey: string;
  };
  app: {
    name: string;
    url: string;
    debug: boolean;
  };
  security: {
    enableLogging: boolean;
    maxFileSize: number;
    allowedFileTypes: string[];
  };
}

class EnvironmentValidator {
  private static validateRequired(value: string | undefined, name: string): string {
    if (!value || value.trim() === '') {
      throw new Error(`Environment variable ${name} is required but not provided`);
    }
    return value.trim();
  }

  private static validateUrl(value: string, name: string): string {
    try {
      new URL(value);
      return value;
    } catch {
      throw new Error(`Environment variable ${name} must be a valid URL`);
    }
  }

  private static validateBoolean(value: string | undefined, defaultValue: boolean = false): boolean {
    if (!value) return defaultValue;
    return value.toLowerCase() === 'true';
  }

  private static validateNumber(value: string | undefined, defaultValue: number): number {
    if (!value) return defaultValue;
    const num = parseInt(value, 10);
    if (isNaN(num)) return defaultValue;
    return num;
  }

  public static validate(): EnvConfig {
    try {
      const config: EnvConfig = {
        supabase: {
          url: this.validateUrl(
            this.validateRequired(import.meta.env.VITE_SUPABASE_URL, 'VITE_SUPABASE_URL'),
            'VITE_SUPABASE_URL'
          ),
          anonKey: this.validateRequired(import.meta.env.VITE_SUPABASE_ANON_KEY, 'VITE_SUPABASE_ANON_KEY'),
        },
        resend: {
          apiKey: this.validateRequired(import.meta.env.VITE_RESEND_API_KEY, 'VITE_RESEND_API_KEY'),
        },
        app: {
          name: import.meta.env.VITE_APP_NAME || 'tafaneen-order-bloom',
          url: import.meta.env.VITE_APP_URL || 'http://localhost:5173',
          debug: this.validateBoolean(import.meta.env.VITE_DEBUG, false),
        },
        security: {
          enableLogging: this.validateBoolean(import.meta.env.VITE_ENABLE_LOGGING, false),
          maxFileSize: this.validateNumber(import.meta.env.VITE_MAX_FILE_SIZE, 5242880), // 5MB
          allowedFileTypes: import.meta.env.VITE_ALLOWED_FILE_TYPES?.split(',') || [
            'image/jpeg',
            'image/jpg',
            'image/png',
            'image/webp'
          ],
        },
      };

      return config;
    } catch (error) {
      console.error('Environment validation failed:', error);
      throw error;
    }
  }
}

// Export validated environment configuration
export const env = EnvironmentValidator.validate();

// Type-safe environment access
export const {
  supabase: supabaseConfig,
  resend: resendConfig,
  app: appConfig,
  security: securityConfig,
} = env;
