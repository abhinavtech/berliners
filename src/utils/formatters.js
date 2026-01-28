/**
 * Extracts emoji from the beginning of a name string
 * @param {string} name - Name string potentially starting with emoji
 * @returns {Object} Object with emoji and rest of the name
 */
export function extractEmojiAndName(name) {
  const emojiMatch = name.match(/^(\p{Emoji_Presentation}|\p{Emoji}\uFE0F|\p{Emoji_Modifier_Base}|\p{Emoji_Component}|\p{Extended_Pictographic})+/u);
  if (emojiMatch) {
    const emoji = emojiMatch[0];
    const rest = name.replace(emoji, '').trim();
    return { emoji, rest };
  }
  return { emoji: '', rest: name };
}

/**
 * Formats a date string for display (short format)
 * @param {string} dateStr - Date string in YYYY-MM-DD format
 * @returns {string} Formatted date string
 */
export function formatDateShort(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
}

/**
 * Formats a date string for display (long format)
 * @param {string} dateStr - Date string in YYYY-MM-DD format
 * @returns {string} Formatted date string
 */
export function formatDateLong(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
}

/**
 * Generates a shareable link for the application
 * @param {string} path - The path to append (e.g., '/group/123')
 * @returns {string} Full shareable URL
 */
export function generateShareableLink(path) {
  const baseUrl = window.location.origin + window.location.pathname;
  return `${baseUrl}#${path}`;
}
