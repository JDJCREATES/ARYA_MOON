/**
 * Input sanitization utilities to prevent XSS and injection attacks
 */

/**
 * Sanitize HTML string by escaping special characters
 * Prevents XSS attacks from user input
 * 
 * @param input - Raw HTML string
 * @returns Sanitized string safe for display
 */
export function sanitizeHtml(input: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '/': '&#x2F;',
  };
  
  return input.replace(/[&<>"'/]/g, (char) => map[char] || char);
}

/**
 * Sanitize user input for safe storage and display
 * Removes potentially dangerous characters
 * 
 * @param input - Raw user input
 * @returns Sanitized string
 */
export function sanitizeInput(input: string): string {
  // Remove null bytes
  let sanitized = input.replace(/\0/g, '');
  
  // Trim whitespace
  sanitized = sanitized.trim();
  
  // Remove control characters except newline, carriage return, and tab
  sanitized = sanitized.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '');
  
  return sanitized;
}

/**
 * Sanitize URL to prevent javascript: and data: URLs
 * 
 * @param url - URL string to sanitize
 * @returns Safe URL or empty string if unsafe
 */
export function sanitizeUrl(url: string): string {
  const sanitized = url.trim();
  
  // Block javascript: and data: URLs
  if (/^(javascript|data|vbscript):/i.test(sanitized)) {
    return '';
  }
  
  return sanitized;
}

/**
 * Sanitize email address
 * 
 * @param email - Email address to sanitize
 * @returns Sanitized email
 */
export function sanitizeEmail(email: string): string {
  return email.toLowerCase().trim();
}

/**
 * Escape SQL wildcards for LIKE queries
 * 
 * @param input - Search query
 * @returns Escaped string
 */
export function escapeSqlWildcards(input: string): string {
  return input.replace(/[%_]/g, '\\$&');
}

/**
 * Remove all HTML tags from string
 * 
 * @param input - String with HTML
 * @returns Plain text
 */
export function stripHtmlTags(input: string): string {
  return input.replace(/<[^>]*>/g, '');
}
