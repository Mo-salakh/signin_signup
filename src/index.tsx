import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { SignProvider } from './useContext';
// import { MantineProvider } from '@mantine/core';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <SignProvider>
        <App />
    </SignProvider>
  </React.StrictMode>
);
