const resizer = document.querySelector('.resizer');
const leftPane = document.querySelector('.pane-left');
const container = document.querySelector('.main-area');

let isResizing = false;

resizer.addEventListener('mousedown', (e) => {
  isResizing = true;

  // Disable text selection while resizing
  document.body.style.userSelect = 'none';

  const startX = e.clientX; // Initial mouse position
  const startWidth = leftPane.offsetWidth; // Initial width of the left pane

  const onMouseMove = (e) => {
    if (!isResizing) return;

    const dx = e.clientX - startX; // Change in mouse position
    const newWidth = startWidth + dx; // New width for the left pane

    // Apply constraints for minimum and maximum widths
    const minWidth = 100; // Minimum width in px
    const maxWidth = container.offsetWidth - 100; // Maximum width in px

    if (newWidth > minWidth && newWidth < maxWidth) {
      leftPane.style.width = `${newWidth}px`;
    }
  };

  const onMouseUp = () => {
    isResizing = false;

    // Re-enable text selection
    document.body.style.userSelect = '';

    // Cleanup event listeners
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('mouseup', onMouseUp);
  };

  // Attach mousemove and mouseup listeners
  window.addEventListener('mousemove', onMouseMove);
  window.addEventListener('mouseup', onMouseUp);
});
