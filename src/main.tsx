import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './layout.tsx';
import './global.css';

ReactDOM.createRoot(document.querySelector('#root')!).render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>,
);
