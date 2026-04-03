import { useState, useCallback, useEffect, useRef } from 'react';
import { extractMoods } from '../engine/moodMapper.js';
import palettes from '../engine/paletteLibrary.js';
import { fetchInspirationImages } from '../engine/unsplashClient.js';
import { shuffle, mulberry32, seedFromString } from '../utils/seededRandom.js';

/**
 * Find palettes matching the given mood tags.
 */
function findMatchingPalettes(moodTags) {
  if (!moodTags.length) return palettes.slice(0, 4);

  const scored = palettes.map((p) => {
    const score = p.moods.reduce((s, m) => s + (moodTags.includes(m) ? 1 : 0), 0);
    return { palette: p, score };
  });

  scored.sort((a, b) => b.score - a.score);
  return scored.filter((s) => s.score > 0).map((s) => s.palette);
}

export function useMoodBoard(prompt) {
  const [activePalettes, setActivePalettes] = useState([]);
  const [images, setImages] = useState([]);
  const [loadingImages, setLoadingImages] = useState(false);
  const [matchedPalettes, setMatchedPalettes] = useState([]);
  const [paletteIndex, setPaletteIndex] = useState(0);
  const abortRef = useRef(null);

  // When prompt changes, update palettes and images
  useEffect(() => {
    if (!prompt) return;

    const moods = extractMoods(prompt);
    const matched = findMatchingPalettes(moods);
    const rng = mulberry32(seedFromString(prompt.seed));
    const shuffled = shuffle(matched.length > 0 ? matched : palettes.slice(0, 10), rng);

    setMatchedPalettes(shuffled);
    setPaletteIndex(0);
    setActivePalettes(shuffled.slice(0, 2));

    // Fetch images
    if (abortRef.current) abortRef.current.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    setLoadingImages(true);
    const cleanSetting = prompt.setting.replace(/^(in |at |on |under |during |inside |by )/, '');
    const subjectQuery = prompt.subject;
    const settingQuery = cleanSetting;
    const colors = shuffled[0]?.colors || [];

    Promise.all([
      fetchInspirationImages(subjectQuery, 3, colors),
      fetchInspirationImages(settingQuery, 3, colors),
    ]).then(([subjectImgs, sceneImgs]) => {
      if (!controller.signal.aborted) {
        setImages([...subjectImgs, ...sceneImgs]);
        setLoadingImages(false);
      }
    });

    return () => controller.abort();
  }, [prompt]);

  const shufflePalette = useCallback(() => {
    if (matchedPalettes.length <= 2) return;
    const nextIndex = (paletteIndex + 2) % matchedPalettes.length;
    setPaletteIndex(nextIndex);
    setActivePalettes(matchedPalettes.slice(nextIndex, nextIndex + 2));
  }, [matchedPalettes, paletteIndex]);

  const shuffleImages = useCallback(() => {
    if (!prompt) return;

    if (abortRef.current) abortRef.current.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    setLoadingImages(true);
    const cleanSetting = prompt.setting.replace(/^(in |at |on |under |during |inside |by )/, '');
    const subjectQuery = prompt.subject;
    const settingQuery = cleanSetting;
    const colors = activePalettes[0]?.colors || [];
    const jitter = Math.random().toString(36).slice(2, 5);

    Promise.all([
      fetchInspirationImages(subjectQuery + ' ' + jitter, 3, colors),
      fetchInspirationImages(settingQuery + ' ' + jitter, 3, colors),
    ]).then(([subjectImgs, sceneImgs]) => {
      if (!controller.signal.aborted) {
        setImages([...subjectImgs, ...sceneImgs]);
        setLoadingImages(false);
      }
    });
  }, [prompt, activePalettes]);

  return { activePalettes, images, loadingImages, shufflePalette, shuffleImages };
}
