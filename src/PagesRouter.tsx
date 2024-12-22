import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Products from "./pages/Products";
import Trivia from "./pages/Trivia";
import CreateIngredient from "./pages/CreateIngredient";
import CreateSalad from "./pages/CreateSalad"

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Welcome!, please see PagesRouter for possible routes!</div>,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/trivia",
    element: <Trivia />,
  },
  {
    path: "/create-ingredient",
    element: <CreateIngredient />,
  },
  {
    path: "Create-Salad",
    element: <CreateSalad />,
  },
]);

const PagesRouter = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default PagesRouter;
