// Select the resizers and elements
const sidebarResizer = document.querySelector('.sidebar-resizer');
const sidebar = document.querySelector('.sidebar');
const resizer = document.querySelector('.resizer');
const leftPane = document.querySelector('.pane-left');
const container = document.querySelector('.main-area');

// Variables for mouse position
let isResizingSidebar = false;
let isResizingPane = false;

// Sidebar Resizer
sidebarResizer.addEventListener('mousedown', (e) => {
  isResizingSidebar = true;
  document.body.style.userSelect = 'none'; // Prevent text selection

  const startX = e.clientX;
  const startWidth = sidebar.offsetWidth;

  const onMouseMove = (e) => {
    if (!isResizingSidebar) return;

    const dx = e.clientX - startX;
    const newWidth = startWidth + dx;

    // Constraints for sidebar width
    const minWidth = 100;
    const maxWidth = 600;

    if (newWidth > minWidth && newWidth < maxWidth) {
      sidebar.style.width = `${newWidth}px`;
    }
  };

  const onMouseUp = () => {
    isResizingSidebar = false;
    document.body.style.userSelect = ''; // Re-enable text selection
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('mouseup', onMouseUp);
  };

  window.addEventListener('mousemove', onMouseMove);
  window.addEventListener('mouseup', onMouseUp);
});

// Pane Resizer
resizer.addEventListener('mousedown', (e) => {
  isResizingPane = true;
  document.body.style.userSelect = 'none'; // Prevent text selection

  const startX = e.clientX;
  const startWidth = leftPane.offsetWidth;

  const onMouseMove = (e) => {
    if (!isResizingPane) return;

    const dx = e.clientX - startX;
    const newWidth = startWidth + dx;

    // Constraints for pane width
    const minWidth = 100;
    const maxWidth = container.offsetWidth - 100;

    if (newWidth > minWidth && newWidth < maxWidth) {
      leftPane.style.width = `${newWidth}px`;
    }
  };

  const onMouseUp = () => {
    isResizingPane = false;
    document.body.style.userSelect = ''; // Re-enable text selection
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('mouseup', onMouseUp);
  };

  window.addEventListener('mousemove', onMouseMove);
  window.addEventListener('mouseup', onMouseUp);
});
