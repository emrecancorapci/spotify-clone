import "./global.css";

import { StrictMode as ReactStrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router/dom";

import { TooltipProvider } from "./components/ui/tooltip.tsx";
import { router } from "./router.tsx";

const root = document.getElementById("root");

if (!root) {
  throw new Error("Root element not found");
}

createRoot(root).render(
  <ReactStrictMode>
    <TooltipProvider>
      <RouterProvider router={router} />
    </TooltipProvider>
  </ReactStrictMode>,
);
