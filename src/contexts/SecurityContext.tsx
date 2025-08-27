import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { checkRateLimit, isAccountLocked, getLockTimeRemaining, resetRateLimit } from '@/utils/rateLimiting';
import { generateSecureToken } from '@/utils/securityUtils';
import { auditLog } from '@/utils/auditLogger';

interface SecurityContextType {
  securityAlerts: string[];
  addSecurityAlert: (alert: string) => void;
  isAccountLocked: (identifier: string) => boolean;
  checkLoginAttempts: (identifier: string) => boolean;
  getLockTimeRemaining: (identifier: string) => number;
  resetRateLimit: (identifier: string) => void;
  generateSecurityToken: () => string;
  securityLevel: 'low' | 'medium' | 'high';
}

const SecurityContext = createContext<SecurityContextType | undefined>(undefined);

interface SecurityProviderProps {
  children: ReactNode;
}

export const SecurityProvider: React.FC<SecurityProviderProps> = ({ children }) => {
  const [securityAlerts, setSecurityAlerts] = useState<string[]>([]);
  const [securityLevel, setSecurityLevel] = useState<'low' | 'medium' | 'high'>('medium');

  const addSecurityAlert = (alert: string) => {
    setSecurityAlerts(prev => [...prev, alert]);
    auditLog('SECURITY_ALERT', { alert, timestamp: new Date().toISOString() });
  };

  const checkLoginAttempts = (identifier: string): boolean => {
    const allowed = checkRateLimit(identifier);
    if (!allowed) {
      addSecurityAlert(`Account temporarily locked due to multiple login attempts: ${identifier}`);
    }
    return allowed;
  };

  const generateSecurityToken = (): string => {
    const token = generateSecureToken();
    auditLog('TOKEN_GENERATED', { tokenLength: token.length });
    return token;
  };

  // Periodic security checks
  useEffect(() => {
    const interval = setInterval(() => {
      // Perform periodic security checks
      const now = Date.now();
      const sessionExpiry = localStorage.getItem('session_expiry');
      
      if (sessionExpiry && parseInt(sessionExpiry) < now) {
        addSecurityAlert('Session expired due to inactivity');
        localStorage.removeItem('session_expiry');
        setSecurityLevel('low');
      }
    }, 60000); // Check every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <SecurityContext.Provider value={{
      securityAlerts,
      addSecurityAlert,
      isAccountLocked,
      checkLoginAttempts,
      getLockTimeRemaining,
      resetRateLimit,
      generateSecurityToken,
      securityLevel
    }}>
      {children}
    </SecurityContext.Provider>
  );
};

export const useSecurity = (): SecurityContextType => {
  const context = useContext(SecurityContext);
  if (!context) {
    throw new Error('useSecurity must be used within a SecurityProvider');
  }
  return context;
};
