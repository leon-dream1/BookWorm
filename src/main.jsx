import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainElement from "./components/MainElement/MainElement.jsx";
import Home from "./components/Home/Home/Home.jsx";
import BookDetails from "./components/BookDetails/BookDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainElement />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/book/:bookId",
        element: <BookDetails />,
        loader: () => fetch('booksData.json')
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
