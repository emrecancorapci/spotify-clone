import './global.css';

import { StrictMode as ReactStrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import AudioPlayer from './components/audio-player.tsx';
import { TooltipProvider } from './components/ui/tooltip.tsx';
import { router } from './router.tsx';
import { store } from './store.ts';

createRoot(document.querySelector('#root')!).render(
  <ReactStrictMode>
    <ReduxProvider store={store}>
      <TooltipProvider>
        <RouterProvider router={router} />
        <AudioPlayer />
      </TooltipProvider>
    </ReduxProvider>
  </ReactStrictMode>,
);
