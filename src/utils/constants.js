/**
 * Application constants
 */

// Group categories
export const GROUP_CATEGORIES = ['Work', 'Housing', 'Social', 'Regional'];

// Social subcategories
export const SOCIAL_SUBCATEGORIES = ['Activities', 'General'];

// Event categories
export const EVENT_CATEGORIES = ['Social', 'Work', 'Activities'];

// Allowed URL protocols for external links (security)
export const ALLOWED_PROTOCOLS = ['https:', 'http:'];

// Allowed domains for WhatsApp links
export const ALLOWED_DOMAINS = [
  'chat.whatsapp.com',
  'wa.me',
  'whatsapp.com',
  'indianembassyberlin.gov.in'
];

/**
 * Validates if a URL is safe to redirect to
 * @param {string} url - URL to validate
 * @returns {boolean} Whether the URL is safe
 */
export function isValidExternalUrl(url) {
  try {
    const parsed = new URL(url);

    // Check protocol
    if (!ALLOWED_PROTOCOLS.includes(parsed.protocol)) {
      return false;
    }

    // Check domain against allowed list
    const hostname = parsed.hostname.toLowerCase();
    return ALLOWED_DOMAINS.some(domain =>
      hostname === domain || hostname.endsWith('.' + domain)
    );
  } catch {
    return false;
  }
}
