/**
 * Security audit logging utility
 */
interface AuditLogEntry {
  id: string;
  timestamp: string;
  eventType: string;
  userId?: string;
  details: Record<string, any>;
  ipAddress?: string;
  userAgent?: string;
  severity: 'info' | 'warning' | 'error' | 'critical';
}

class AuditLogger {
  private logs: AuditLogEntry[] = [];
  private maxLogEntries = 1000;

  private generateLogId(): string {
    return `log_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private getCurrentUser(): string | undefined {
    try {
      const user = localStorage.getItem('tafaneen_user');
      return user ? JSON.parse(user).id : undefined;
    } catch {
      return undefined;
    }
  }

  private getClientInfo(): { ipAddress?: string; userAgent?: string } {
    return {
      userAgent: navigator.userAgent,
      // Note: Getting real IP requires server-side implementation
      ipAddress: 'client-side' // Placeholder
    };
  }

  public log(
    eventType: string,
    details: Record<string, any>,
    severity: AuditLogEntry['severity'] = 'info'
  ): void {
    const entry: AuditLogEntry = {
      id: this.generateLogId(),
      timestamp: new Date().toISOString(),
      eventType,
      userId: this.getCurrentUser(),
      details,
      severity,
      ...this.getClientInfo()
    };

    this.logs.push(entry);

    // Maintain log size limit
    if (this.logs.length > this.maxLogEntries) {
      this.logs = this.logs.slice(-this.maxLogEntries);
    }

    // In a real implementation, send logs to a secure server
    console.log('Audit Log:', entry);
  }

  public getLogs(filters?: {
    eventType?: string;
    userId?: string;
    severity?: AuditLogEntry['severity'];
    startDate?: Date;
    endDate?: Date;
  }): AuditLogEntry[] {
    let filteredLogs = [...this.logs];

    if (filters) {
      if (filters.eventType) {
        filteredLogs = filteredLogs.filter(log => log.eventType === filters.eventType);
      }
      if (filters.userId) {
        filteredLogs = filteredLogs.filter(log => log.userId === filters.userId);
      }
      if (filters.severity) {
        filteredLogs = filteredLogs.filter(log => log.severity === filters.severity);
      }
      if (filters.startDate) {
        filteredLogs = filteredLogs.filter(log => new Date(log.timestamp) >= filters.startDate!);
      }
      if (filters.endDate) {
        filteredLogs = filteredLogs.filter(log => new Date(log.timestamp) <= filters.endDate!);
      }
    }

    return filteredLogs.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
  }

  public exportLogs(format: 'json' | 'csv' = 'json'): string {
    if (format === 'json') {
      return JSON.stringify(this.logs, null, 2);
    }

    // Simple CSV export
    const headers = ['ID', 'Timestamp', 'Event Type', 'User ID', 'Severity', 'Details'];
    const rows = this.logs.map(log => [
      log.id,
      log.timestamp,
      log.eventType,
      log.userId || '',
      log.severity,
      JSON.stringify(log.details)
    ]);

    return [headers, ...rows].map(row => row.join(',')).join('\n');
  }

  public clearLogs(): void {
    this.logs = [];
  }
}

export const auditLogger = new AuditLogger();

// Convenience functions
export const auditLog = (eventType: string, details: Record<string, any> = {}) => {
  auditLogger.log(eventType, details);
};

export const auditWarning = (eventType: string, details: Record<string, any> = {}) => {
  auditLogger.log(eventType, details, 'warning');
};

export const auditError = (eventType: string, details: Record<string, any> = {}) => {
  auditLogger.log(eventType, details, 'error');
};

export const auditCritical = (eventType: string, details: Record<string, any> = {}) => {
  auditLogger.log(eventType, details, 'critical');
};
