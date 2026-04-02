/**
 * Capture a DOM element as a PNG and trigger download.
 */
export async function downloadBoard(elementId = 'mood-board') {
  const element = document.getElementById(elementId);
  if (!element) return;

  // Dynamic import to keep initial bundle small
  const html2canvas = (await import('html2canvas')).default;

  const canvas = await html2canvas(element, {
    backgroundColor: '#FFF8F0',
    scale: 2,
    useCORS: true,
    logging: false,
  });

  const link = document.createElement('a');
  link.download = `doodlebud-${Date.now()}.png`;
  link.href = canvas.toDataURL('image/png');
  link.click();
}
