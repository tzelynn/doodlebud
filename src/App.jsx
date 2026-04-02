import { useState, useCallback, useEffect } from 'react';
import Header from './components/Header.jsx';
import PromptCard from './components/PromptCard.jsx';
import ImageGrid from './components/ImageGrid.jsx';
import PalettePanel from './components/PalettePanel.jsx';
import ActionBar from './components/ActionBar.jsx';
import HistoryDrawer from './components/HistoryDrawer.jsx';
import DailyBud from './components/DailyBud.jsx';
import FloatingParticles from './components/FloatingParticles.jsx';
import Toast from './components/Toast.jsx';
import { usePrompt } from './hooks/usePrompt.js';
import { useMoodBoard } from './hooks/useMoodBoard.js';
import { useHistory } from './hooks/useHistory.js';
import { getDailyBudSeed } from './engine/seedManager.js';

export default function App() {
  const { prompt, locks, generate, reroll, toggleLock } = usePrompt();
  const { activePalettes, images, loadingImages, shufflePalette, shuffleImages } = useMoodBoard(prompt);
  const { history, addToHistory } = useHistory();
  const [isDailyMode, setIsDailyMode] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastVisible, setToastVisible] = useState(false);

  // Add to history whenever prompt changes
  useEffect(() => {
    if (prompt) addToHistory(prompt);
  }, [prompt, addToHistory]);

  const showToast = useCallback((msg) => {
    setToastMessage(msg);
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 2000);
  }, []);

  const handleDailyBud = useCallback(() => {
    const dailySeed = getDailyBudSeed();
    generate(dailySeed);
    setIsDailyMode(true);
  }, [generate]);

  const handleReroll = useCallback(() => {
    setIsDailyMode(false);
    reroll();
  }, [reroll]);

  const handleHistorySelect = useCallback((seed) => {
    setIsDailyMode(false);
    generate(seed);
  }, [generate]);

  return (
    <>
      <FloatingParticles />
      <Header onDailyBud={handleDailyBud} isDailyMode={isDailyMode} />

      <main className="main">
        <DailyBud onActivate={handleDailyBud} isActive={isDailyMode} />

        <div id="mood-board">
          <PromptCard
            prompt={prompt}
            locks={locks}
            onToggleLock={toggleLock}
            onReroll={handleReroll}
          />

          <div className="washi-divider" aria-hidden="true" />

          <div className="content-grid">
            <ImageGrid
              images={images}
              loading={loadingImages}
              onShuffle={shuffleImages}
            />
            <PalettePanel
              palettes={activePalettes}
              onShuffle={shufflePalette}
              onToast={showToast}
            />
          </div>
        </div>

        <ActionBar prompt={prompt} onToast={showToast} />

        <HistoryDrawer history={history} onSelect={handleHistorySelect} />
      </main>

      <Toast message={toastMessage} visible={toastVisible} />
    </>
  );
}
