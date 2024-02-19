import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import Home from "./components/Home.jsx";
import Download from "./components/Download.jsx";
import Info from "./components/Info.jsx";
import Support from "./components/Support.jsx";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/downloads",
        index: true,
        element: <Download />,
      },
      {
        path: "/info",
        index: true,
        element: <Info />,
      },
      {
        path: "/support",
        index: true,
        element: <Support />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
