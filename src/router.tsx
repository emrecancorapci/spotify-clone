import { createBrowserRouter } from "react-router";

import Layout from "./layout";
import Feed from "./pages/feed";
import Home from "./pages/home/home";
import Lyrics from "./pages/lyrics";
import Queue from "./pages/queue";
import Search from "./pages/search";
import UserPage from "./pages/user/trknell/user-page";

export const router = createBrowserRouter(
  [{
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "lyrics",
        element: <Lyrics />,
      },
      {
        path: "queue",
        element: <Queue />,
      },
      {
        path: "feed",
        element: <Feed />,
      },
      {
        path: "user",
        children: [
          {
            path: "trknell",
            element: <UserPage />,
          },
        ],
      },
      {
        path: "*",
        element: <div>Not Found</div>,
      },
    ],
  }]
);
