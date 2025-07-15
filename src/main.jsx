import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './i18n';

const recaptchaSiteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

// Promesa global para saber cuándo está listo reCaptcha
export const recaptchaReady = new Promise((resolve, reject) => {
  if (!recaptchaSiteKey) {
    reject('No se ha definido VITE_RECAPTCHA_SITE_KEY');
    return;
  }
  // Si ya existe el script, no lo vuelvas a añadir
  if (!document.querySelector('script[src^="https://www.google.com/recaptcha/api.js"]')) {
    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=${recaptchaSiteKey}`;
    script.async = true;
    script.defer = true;
    script.onload = () => resolve();
    script.onerror = () => reject('Error cargando el script de reCaptcha');
    document.head.appendChild(script);
  } else {
    resolve();
  }
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
