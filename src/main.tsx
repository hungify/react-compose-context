import './index.css';

// import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { CountProvider } from '~/context/Count';
import { ThemeProvider } from '~/context/Theme';
import AppContextCompose from '~/components/AppContextCompose';
import Provider from './store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <AppContextCompose components={[CountProvider, ThemeProvider]}>
    <Provider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </AppContextCompose>,
  // </React.StrictMode>,
);
