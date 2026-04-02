import { useState, useCallback } from 'react';

const HISTORY_KEY = 'doodlebud-history';
const MAX_HISTORY = 5;

function loadHistory() {
  try {
    const stored = sessionStorage.getItem(HISTORY_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

function saveHistory(history) {
  try {
    sessionStorage.setItem(HISTORY_KEY, JSON.stringify(history));
  } catch {
    // sessionStorage might be full or unavailable
  }
}

export function useHistory() {
  const [history, setHistory] = useState(loadHistory);

  const addToHistory = useCallback((prompt) => {
    setHistory((prev) => {
      // Don't add duplicates (by seed)
      if (prev.some((p) => p.seed === prompt.seed)) return prev;
      const next = [prompt, ...prev].slice(0, MAX_HISTORY);
      saveHistory(next);
      return next;
    });
  }, []);

  const clearHistory = useCallback(() => {
    setHistory([]);
    saveHistory([]);
  }, []);

  return { history, addToHistory, clearHistory };
}
