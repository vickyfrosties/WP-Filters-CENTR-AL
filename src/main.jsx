import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './App.css';
import App from './App.jsx';

createRoot(document.getElementById('wp_filters_central')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
