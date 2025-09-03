// Security utilities for e-commerce application
// This file demonstrates security best practices for handling user data and payments

export class SecurityUtils {
  // Input sanitization to prevent XSS attacks
  static sanitizeInput(input: string): string {
    return input
      .replace(/[<>]/g, '') // Remove potential HTML tags
      .replace(/javascript:/gi, '') // Remove javascript: protocol
      .replace(/on\w+=/gi, '') // Remove event handlers
      .trim();
  }

  // Validate Canadian postal code format
  static validatePostalCode(postalCode: string): boolean {
    const canadianPostalCodeRegex = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
    return canadianPostalCodeRegex.test(postalCode);
  }

  // Validate email format
  static validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Validate phone number (basic international format)
  static validatePhone(phone: string): boolean {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  }

  // Basic credit card validation (Luhn algorithm)
  static validateCreditCard(cardNumber: string): boolean {
    const cleanNumber = cardNumber.replace(/\s/g, '');
    if (!/^\d{16}$/.test(cleanNumber)) return false;

    let sum = 0;
    let isEven = false;

    // Loop through values starting from the rightmost side
    for (let i = cleanNumber.length - 1; i >= 0; i--) {
      let digit = parseInt(cleanNumber.charAt(i));

      if (isEven) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }

      sum += digit;
      isEven = !isEven;
    }

    return sum % 10 === 0;
  }

  // Validate CVV
  static validateCVV(cvv: string): boolean {
    return /^\d{3,4}$/.test(cvv);
  }

  // Validate expiry date (MM/YY format)
  static validateExpiryDate(expiryDate: string): boolean {
    const [month, year] = expiryDate.split('/');
    if (!month || !year) return false;

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear() % 100;
    const currentMonth = currentDate.getMonth() + 1;

    const expMonth = parseInt(month);
    const expYear = parseInt(year);

    if (expMonth < 1 || expMonth > 12) return false;
    if (expYear < currentYear || (expYear === currentYear && expMonth < currentMonth)) return false;

    return true;
  }

  // Generate a secure random token (for CSRF protection)
  static generateCSRFToken(): string {
    const array = new Uint8Array(32);
    crypto.getRandomValues(array);
    return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
  }

  // Hash sensitive data (in production, use bcrypt or similar)
  static async hashData(data: string): Promise<string> {
    const encoder = new TextEncoder();
    const dataBuffer = encoder.encode(data);
    const hashBuffer = await crypto.subtle.digest('SHA-256', dataBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  }

  // Rate limiting helper (for API endpoints)
  static createRateLimiter(maxRequests: number, windowMs: number) {
    const requests = new Map<string, number[]>();

    return (identifier: string): boolean => {
      const now = Date.now();
      const windowStart = now - windowMs;

      if (!requests.has(identifier)) {
        requests.set(identifier, [now]);
        return true;
      }

      const userRequests = requests.get(identifier)!;
      const recentRequests = userRequests.filter(time => time > windowStart);

      if (recentRequests.length >= maxRequests) {
        return false; // Rate limit exceeded
      }

      recentRequests.push(now);
      requests.set(identifier, recentRequests);
      return true;
    };
  }

  // Content Security Policy headers
  static getCSPHeaders(): Record<string, string> {
    return {
      'Content-Security-Policy': [
        "default-src 'self'",
        "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
        "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
        "font-src 'self' https://fonts.gstatic.com",
        "img-src 'self' data: https:",
        "connect-src 'self'",
        "frame-src 'self' https://www.youtube.com",
        "object-src 'none'",
        "base-uri 'self'",
        "form-action 'self'"
      ].join('; '),
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'X-XSS-Protection': '1; mode=block',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      'Permissions-Policy': 'camera=(), microphone=(), geolocation=()'
    };
  }

  // Validate shipping address
  static validateAddress(address: {
    street: string;
    city: string;
    province: string;
    postalCode: string;
    country: string;
  }): { isValid: boolean; errors: string[] } {
    const errors: string[] = [];

    if (!address.street || address.street.length < 5) {
      errors.push('Street address must be at least 5 characters long');
    }

    if (!address.city || address.city.length < 2) {
      errors.push('City must be at least 2 characters long');
    }

    if (!address.province || address.province.length < 2) {
      errors.push('Province must be at least 2 characters long');
    }

    if (!this.validatePostalCode(address.postalCode)) {
      errors.push('Invalid postal code format');
    }

    if (!address.country || !['Canada', 'United States', 'United Kingdom'].includes(address.country)) {
      errors.push('Please select a valid country');
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  }

  // Payment amount validation
  static validatePaymentAmount(amount: number): boolean {
    return amount > 0 && amount <= 10000 && Number.isFinite(amount);
  }

  // Log security events (in production, send to security monitoring service)
  static logSecurityEvent(event: string, details: any): void {
    const timestamp = new Date().toISOString();
    const logEntry = {
      timestamp,
      event,
      details,
      userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : 'server',
      ip: 'client-ip-would-be-here' // In production, get from request headers
    };

    // In production, send to security monitoring service
    console.log('SECURITY EVENT:', logEntry);
    
    // Example: send to security monitoring service
    // await fetch('/api/security/log', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(logEntry)
    // });
  }
}

// Export individual functions for easier use
export const {
  sanitizeInput,
  validatePostalCode,
  validateEmail,
  validatePhone,
  validateCreditCard,
  validateCVV,
  validateExpiryDate,
  generateCSRFToken,
  hashData,
  createRateLimiter,
  getCSPHeaders,
  validateAddress,
  validatePaymentAmount,
  logSecurityEvent
} = SecurityUtils;


