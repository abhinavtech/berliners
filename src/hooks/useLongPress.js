import { useState, useRef, useCallback } from 'react';

/**
 * Custom hook for handling long press interactions
 * Used for copy-to-clipboard functionality on groups and events
 * @param {number} duration - Long press duration in ms (default: 500)
 * @returns {Object} Long press handlers and state
 */
export function useLongPress(duration = 500) {
  const [copiedId, setCopiedId] = useState(null);
  const longPressTimer = useRef(null);
  const isLongPress = useRef(false);

  const copyToClipboard = useCallback(async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (err) {
      console.error('Failed to copy:', err);
      return false;
    }
  }, []);

  const handleLongPressStart = useCallback((id, linkGenerator) => {
    isLongPress.current = false;
    longPressTimer.current = setTimeout(async () => {
      isLongPress.current = true;
      const link = linkGenerator(id);

      const success = await copyToClipboard(link);
      if (success) {
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2000);
      }
    }, duration);
  }, [duration, copyToClipboard]);

  const handleLongPressEnd = useCallback(() => {
    if (longPressTimer.current) {
      clearTimeout(longPressTimer.current);
      longPressTimer.current = null;
    }
  }, []);

  const wasLongPress = useCallback(() => {
    const result = isLongPress.current;
    isLongPress.current = false;
    return result;
  }, []);

  const getLongPressHandlers = useCallback((id, linkGenerator) => ({
    onMouseDown: () => handleLongPressStart(id, linkGenerator),
    onMouseUp: handleLongPressEnd,
    onMouseLeave: handleLongPressEnd,
    onTouchStart: () => handleLongPressStart(id, linkGenerator),
    onTouchEnd: handleLongPressEnd,
  }), [handleLongPressStart, handleLongPressEnd]);

  return {
    copiedId,
    wasLongPress,
    getLongPressHandlers,
  };
}

export default useLongPress;
