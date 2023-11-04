import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './router.tsx';
import { TooltipProvider } from './components/ui/tooltip.tsx';

ReactDOM.createRoot(document.querySelector('#root')!).render(
  <React.StrictMode>
    <TooltipProvider>
      <RouterProvider router={router} />
    </TooltipProvider>
  </React.StrictMode>,
);
