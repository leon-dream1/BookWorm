import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainElement from "./components/MainElement/MainElement.jsx";
import Home from "./components/Home/Home/Home.jsx";
import BookDetails from "./components/BookDetails/BookDetails.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ListedBooks from "./components/ListedBooks/ListedBooks.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";
import PagesToRead from "./components/PagesToRead/PagesToRead.jsx";
import CartBooks from "./components/CartBooks/CartBooks/CartBooks.jsx";

export const cartContext = createContext();

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainElement />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/book/:bookId",
        element: <BookDetails />,
        loader: () => fetch("/booksData.json"),
      },
      {
        path: "/listedBooks",
        element: <ListedBooks />,
        loader: () => fetch("/booksData.json"),
      },
      {
        path: "/pagesToRead",
        element: <PagesToRead />,
        loader: () => fetch("/booksData.json"),
      },
      {
        path: "/cart",
        element: <CartBooks />,
        loader: () => fetch("/booksData.json"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
    <ToastContainer />
  </React.StrictMode>
);
