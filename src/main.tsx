import './index.css';

// import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { CountProvider } from '~context/Count';
import { ThemeProvider } from '~context/Theme';
import AppContextCompose from '~components/AppContextCompose';

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <AppContextCompose components={[CountProvider, ThemeProvider]}>
    <App />
  </AppContextCompose>,
  // </React.StrictMode>,
);
