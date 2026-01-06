import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Global error handlers to capture silent failures
window.addEventListener('error', (event) => {
  console.error('Global Error Captured:', event.error || event.message);
});

window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled Promise Rejection:', event.reason);
});

const mountApp = () => {
  const rootElement = document.getElementById('root');
  if (!rootElement) {
    console.error("Critical Error: Could not find root element to mount to");
    return;
  }

  try {
    const root = createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } catch (err) {
    console.error("Rendering Error:", err);
  }
};

// Ensure DOM is ready if needed, though type="module" scripts usually run after DOM parsing
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountApp);
} else {
  mountApp();
}
