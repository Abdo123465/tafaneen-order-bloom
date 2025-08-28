import { resendConfig } from '@/config/env';
import { SecurityService } from './security';

interface SendSMSParams {
  phone: string;
  message: string;
  type?: 'verification' | 'notification';
}

export class ResendService {
  private static baseUrl = 'https://api.resend.com';
  
  private static async makeRequest(endpoint: string, options: RequestInit) {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        ...options,
        headers: {
          'Authorization': `Bearer ${resendConfig.apiKey}`,
          'Content-Type': 'application/json',
          ...SecurityService.getSecureHeaders(),
          ...options.headers,
        },
      });

      if (!response.ok) {
        throw new Error(`Resend API error: ${response.status} ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      SecurityService.logSecurityEvent('Resend API Error', error);
      throw error;
    }
  }

  static async sendSMS({ phone, message, type = 'notification' }: SendSMSParams) {
    // Validate and normalize phone number
    const phoneValidation = SecurityService.validateEgyptianPhone(phone);
    if (!phoneValidation.valid) {
      throw new Error(phoneValidation.error);
    }

    // Rate limiting check
    if (!SecurityService.checkRateLimit(`sms:${phoneValidation.normalized}`, 3, 60000)) {
      throw new Error('Too many SMS requests. Please try again later.');
    }

    // Sanitize message
    const sanitizedMessage = SecurityService.sanitizeInput(message);
    if (sanitizedMessage.length > 160) {
      throw new Error('Message too long. Maximum 160 characters allowed.');
    }

    try {
      // Since Resend doesn't support SMS directly, we'll simulate it with email
      // In production, you would integrate with an SMS provider
      const response = await this.makeRequest('/emails', {
        method: 'POST',
        body: JSON.stringify({
          from: 'system@tafaneen.com',
          to: 'admin@tafaneen.com', // Replace with actual admin email
          subject: `SMS Simulation - ${type}`,
          text: `Phone: ${phoneValidation.normalized}\nMessage: ${sanitizedMessage}`,
        }),
      });

      SecurityService.logSecurityEvent('SMS Sent', {
        phone: phoneValidation.normalized,
        type,
        messageLength: sanitizedMessage.length
      });

      return response;
    } catch (error) {
      SecurityService.logSecurityEvent('SMS Send Failed', {
        phone: phoneValidation.normalized,
        error: error instanceof Error ? error.message : 'Unknown error'
      });
      throw error;
    }
  }

  static async sendEmail({ to, subject, text, html }: {
    to: string;
    subject: string;
    text: string;
    html?: string;
  }) {
    // Rate limiting
    if (!SecurityService.checkRateLimit(`email:${to}`, 5, 60000)) {
      throw new Error('Too many email requests. Please try again later.');
    }

    // Sanitize inputs
    const sanitizedSubject = SecurityService.sanitizeInput(subject);
    const sanitizedText = SecurityService.sanitizeInput(text);

    try {
      const response = await this.makeRequest('/emails', {
        method: 'POST',
        body: JSON.stringify({
          from: 'system@tafaneen.com',
          to,
          subject: sanitizedSubject,
          text: sanitizedText,
          html: html ? SecurityService.sanitizeInput(html) : undefined,
        }),
      });

      SecurityService.logSecurityEvent('Email Sent', {
        to,
        subject: sanitizedSubject
      });

      return response;
    } catch (error) {
      SecurityService.logSecurityEvent('Email Send Failed', {
        to,
        error: error instanceof Error ? error.message : 'Unknown error'
      });
      throw error;
    }
  }
}
