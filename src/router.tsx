import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import Layout from './layout';
import Home from './pages/home';
import Lyrics from './pages/lyrics';
import Queue from './pages/queue';
import Search from './pages/search';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<Layout />} path="/">
        <Route element={<Home />} index />
        <Route element={<Search />} path="search" />
        <Route element={<Lyrics />} path="lyrics" />
        <Route element={<Queue />} path="queue" />
      </Route>

      <Route element={<div>Not Found</div>} path="*" />
    </>,
  ),
);
