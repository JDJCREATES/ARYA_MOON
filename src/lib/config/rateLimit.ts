/**
 * Rate limiting configuration for API endpoints
 * 
 * This provides configuration for implementing rate limiting
 * to prevent abuse and DDoS attacks
 */

export interface RateLimitConfig {
  /**
   * Maximum number of requests allowed in the time window
   */
  maxRequests: number;
  
  /**
   * Time window in milliseconds
   */
  windowMs: number;
  
  /**
   * Error message to return when limit is exceeded
   */
  message?: string;
}

/**
 * Rate limit configurations for different endpoint types
 */
export const rateLimits = {
  /**
   * Authentication endpoints (login, signup)
   * More restrictive to prevent brute force attacks
   */
  auth: {
    maxRequests: 5,
    windowMs: 15 * 60 * 1000, // 15 minutes
    message: 'Too many authentication attempts, please try again later',
  } as RateLimitConfig,
  
  /**
   * API endpoints (general)
   */
  api: {
    maxRequests: 100,
    windowMs: 15 * 60 * 1000, // 15 minutes
    message: 'Too many requests, please try again later',
  } as RateLimitConfig,
  
  /**
   * File upload endpoints
   * More restrictive due to resource intensity
   */
  upload: {
    maxRequests: 10,
    windowMs: 60 * 60 * 1000, // 1 hour
    message: 'Upload limit exceeded, please try again later',
  } as RateLimitConfig,
  
  /**
   * Payment endpoints
   * Very restrictive for security
   */
  payment: {
    maxRequests: 3,
    windowMs: 60 * 60 * 1000, // 1 hour
    message: 'Too many payment attempts, please contact support',
  } as RateLimitConfig,
};

/**
 * Simple in-memory rate limiter
 * For production, use Redis or similar
 */
class RateLimiter {
  private requests: Map<string, number[]> = new Map();
  
  /**
   * Check if request is allowed
   * @param key - Unique identifier (IP address or user ID)
   * @param config - Rate limit configuration
   * @returns Whether request is allowed
   */
  isAllowed(key: string, config: RateLimitConfig): boolean {
    const now = Date.now();
    const requests = this.requests.get(key) || [];
    
    // Remove expired requests
    const validRequests = requests.filter(
      (timestamp) => now - timestamp < config.windowMs
    );
    
    // Check if limit exceeded
    if (validRequests.length >= config.maxRequests) {
      return false;
    }
    
    // Add new request
    validRequests.push(now);
    this.requests.set(key, validRequests);
    
    return true;
  }
  
  /**
   * Clean up old entries periodically
   */
  cleanup(): void {
    const now = Date.now();
    const maxWindowMs = Math.max(...Object.values(rateLimits).map(c => c.windowMs));
    
    for (const [key, requests] of this.requests.entries()) {
      const validRequests = requests.filter(
        (timestamp) => now - timestamp < maxWindowMs
      );
      
      if (validRequests.length === 0) {
        this.requests.delete(key);
      } else {
        this.requests.set(key, validRequests);
      }
    }
  }
}

export const rateLimiter = new RateLimiter();

// Cleanup old entries every hour
if (typeof window === 'undefined') {
  setInterval(() => rateLimiter.cleanup(), 60 * 60 * 1000);
}
