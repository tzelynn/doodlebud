import { useState, useCallback, useEffect } from 'react';
import { generatePrompt, randomSeed } from '../engine/promptGenerator.js';
import { getSeedFromURL, setSeedInURL } from '../engine/seedManager.js';

export function usePrompt() {
  const [locks, setLocks] = useState({});
  const [prompt, setPrompt] = useState(null);
  const [currentSeed, setCurrentSeed] = useState('');

  const generate = useCallback((seed, locksOverride) => {
    const useLocks = locksOverride ?? locks;
    const newPrompt = generatePrompt(seed, useLocks);
    setPrompt(newPrompt);
    setCurrentSeed(seed);
    setSeedInURL(seed);
    return newPrompt;
  }, [locks]);

  const reroll = useCallback(() => {
    const seed = randomSeed();
    return generate(seed);
  }, [generate]);

  const toggleLock = useCallback((part) => {
    setLocks((prev) => {
      if (prev[part]) {
        const next = { ...prev };
        delete next[part];
        return next;
      }
      if (prompt) {
        return { ...prev, [part]: prompt[part] };
      }
      return prev;
    });
  }, [prompt]);

  // Initialize from URL seed or generate fresh
  useEffect(() => {
    const urlSeed = getSeedFromURL();
    generate(urlSeed || randomSeed());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { prompt, locks, currentSeed, generate, reroll, toggleLock };
}
