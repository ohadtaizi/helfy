import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Products from "./pages/Products";
import Trivia from "./pages/Trivia";
import CreateIngredient from "./pages/CreateIngredient";
import CreateSalad from "./pages/CreateSalad";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "trivia",
        element: <Trivia />,
      },
      {
        path: "create-ingredient",
        element: <CreateIngredient />,
      },
      {
        path: "create-salad",
        element: <CreateSalad />,
      },
    ],
  },
]);

const PagesRouter = () => {
  return <RouterProvider router={router} />;
};

export default PagesRouter;
