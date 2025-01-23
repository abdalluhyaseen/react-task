import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./components/pagas/home";
import About from "./components/pagas/about";
import Contact from "./components/pagas/contact";
import ErrorPage from "./components/pagas/Erorr";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/b",
    element: <About />,
  },
  {
    path: "/c",
    element: <Contact />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
