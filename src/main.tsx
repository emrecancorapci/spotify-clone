import './global.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import { TooltipProvider } from './components/ui/tooltip.tsx';
import { router } from './router.tsx';
import { store } from './store.ts';

ReactDOM.createRoot(document.querySelector('#root')!).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <TooltipProvider>
        <RouterProvider router={router} />
      </TooltipProvider>
    </ReduxProvider>
  </React.StrictMode>,
);
