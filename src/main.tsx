import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './router.tsx';
import { Provider as ReduxProvider } from 'react-redux';
import { TooltipProvider } from './components/ui/tooltip.tsx';
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
