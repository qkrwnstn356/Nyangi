
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app/App.tsx';
import NoticePage from './app/NoticePage.tsx';
import ContactPage from './app/ContactPage.tsx';
import DownloadPage from './app/DownloadPage.tsx';
import './styles/index.css';

const pathname = window.location.pathname.replace(/\/+$/, '') || '/';

const page = (() => {
  if (pathname === '/notice') {
    return <NoticePage />;
  }
  if (pathname === '/contact') {
    return <ContactPage />;
  }
  if (pathname === '/download') {
    return <DownloadPage />;
  }
  return <App />;
})();

createRoot(document.getElementById('root')!).render(page);
  