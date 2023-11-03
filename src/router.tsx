import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Layout from './layout';
import Home from './pages/home';
import Search from './pages/search';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="search" element={<Search />} />
      </Route>

      <Route path="*" element={<div>Not Found</div>} />
    </>,
  ),
);
