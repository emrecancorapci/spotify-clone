import './global.css';

import { StrictMode as ReactStrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import AudioPlayer from './components/audio-player.tsx';
import { TooltipProvider } from './components/ui/tooltip.tsx';
import { router } from './router.tsx';

createRoot(document.querySelector('#root')!).render(
  <ReactStrictMode>
    <TooltipProvider>
      <RouterProvider router={router} />
      <AudioPlayer />
    </TooltipProvider>
  </ReactStrictMode>,
);
