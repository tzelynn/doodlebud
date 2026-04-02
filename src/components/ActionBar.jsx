import { copyToClipboard } from '../utils/clipboard.js';
import { downloadBoard } from '../utils/downloadBoard.js';
import { setSeedInURL } from '../engine/seedManager.js';

export default function ActionBar({ prompt, onToast }) {
  if (!prompt) return null;

  const handleCopyPrompt = async () => {
    const ok = await copyToClipboard(prompt.fullText);
    if (ok) onToast('Prompt copied!');
  };

  const handleDownload = async () => {
    onToast('Preparing download...');
    try {
      await downloadBoard('mood-board');
      onToast('Board downloaded!');
    } catch {
      onToast('Download failed — try again');
    }
  };

  const handleShare = async () => {
    setSeedInURL(prompt.seed);
    const url = window.location.href;
    const ok = await copyToClipboard(url);
    if (ok) onToast('Share link copied!');
  };

  return (
    <div className="action-bar">
      <button className="action-btn" onClick={handleCopyPrompt}>
        📋 Copy Prompt
      </button>
      <button className="action-btn" onClick={handleDownload}>
        📸 Download Board
      </button>
      <button className="action-btn" onClick={handleShare}>
        🔗 Share Link
      </button>
    </div>
  );
}
