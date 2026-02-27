import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Counter from "./Counter.jsx";
import Gallery from "./Gallery.jsx";
import Todolist from "./Todolist.jsx";
import Home from "./Home.jsx";
import Products from "./Products.jsx";
import ProductDetails from "./ProductDetails.jsx";
import Recipes from "./Recipes.jsx";
import RecipeDetails from "./RecipeDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/counter",
        element: <Counter />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/todolist",
        element: <Todolist />,
      },
      {
        path: "/products",
        element: <Products></Products>,
      },
      {
        path: "/products/:id",
        element: <ProductDetails></ProductDetails>,
      },
      {
        path: "/recipes",
        element: <Recipes></Recipes>,
        children: [
          {
            path: "/recipes/:id",
            element: <RecipeDetails></RecipeDetails>,
          },
        ],
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);
