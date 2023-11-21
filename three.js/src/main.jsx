import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./components/Home.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FastFood from "./components/FastFood.jsx";
import Shoes from "./components/Shoes.jsx";
import Car from "./components/Car.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/fastfood",
    element: <FastFood />,
  },
  {
    path: "/shoes",
    element: <Shoes />,
  },

  {
    path: "/car",
    element: <Car />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
