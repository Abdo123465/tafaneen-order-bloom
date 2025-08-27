import { useEffect, useState } from 'react';
import { useSecurity } from '@/contexts/SecurityContext';

interface SecurityEvent {
  id: string;
  type: string;
  message: string;
  timestamp: Date;
  severity: 'low' | 'medium' | 'high' | 'critical';
}

export const useSecurityMonitoring = () => {
  const { securityAlerts, addSecurityAlert } = useSecurity();
  const [securityEvents, setSecurityEvents] = useState<SecurityEvent[]>([]);
  const [isMonitoring, setIsMonitoring] = useState(true);

  const addSecurityEvent = (event: Omit<SecurityEvent, 'id' | 'timestamp'>) => {
    const newEvent: SecurityEvent = {
      ...event,
      id: `event_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      timestamp: new Date()
    };
    
    setSecurityEvents(prev => [...prev, newEvent]);
    
    if (event.severity === 'high' || event.severity === 'critical') {
      addSecurityEvent(`High severity security event: ${event.message}`);
    }
  };

  // Monitor for suspicious activities
  useEffect(() => {
    if (!isMonitoring) return;

    const monitorNetworkActivity = () => {
      // Monitor for unusual network patterns
      const requestCount = parseInt(localStorage.getItem('request_count') || '0');
      const lastRequestTime = parseInt(localStorage.getItem('last_request_time') || '0');
      const now = Date.now();
      
      if (requestCount > 100 && (now - lastRequestTime) < 60000) {
        addSecurityEvent({
          type: 'HIGH_REQUEST_RATE',
          message: 'Unusually high request rate detected',
          severity: 'high'
        });
      }
      
      localStorage.setItem('request_count', '0');
      localStorage.setItem('last_request_time', now.toString());
    };

    const monitorFailedLogins = () => {
      const failedLogins = parseInt(localStorage.getItem('failed_logins') || '0');
      if (failedLogins > 5) {
        addSecurityEvent({
          type: 'MULTIPLE_FAILED_LOGINS',
          message: 'Multiple failed login attempts detected',
          severity: 'high'
        });
        localStorage.setItem('failed_logins', '0');
      }
    };

    const interval = setInterval(() => {
      monitorNetworkActivity();
      monitorFailedLogins();
    }, 30000); // Check every 30 seconds

    return () => clearInterval(interval);
  }, [isMonitoring]);

  // Monitor for browser security features
  useEffect(() => {
    const checkBrowserSecurity = () => {
      if (!navigator.cookieEnabled) {
        addSecurityEvent({
          type: 'COOKIES_DISABLED',
          message: 'Cookies are disabled in browser',
          severity: 'medium'
        });
      }
      
      if (!window.isSecureContext) {
        addSecurityEvent({
          type: 'INSECURE_CONTEXT',
          message: 'Application running in insecure context',
          severity: 'high'
        });
      }
    };

    checkBrowserSecurity();
  }, []);

  return {
    securityEvents,
    addSecurityEvent,
    isMonitoring,
    setIsMonitoring,
    clearSecurityEvents: () => setSecurityEvents([])
  };
};
