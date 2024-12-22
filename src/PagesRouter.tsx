import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Products from "./pages/Products";
import Trivia from "./pages/Trivia";

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
  }
]);

const PagesRouter = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default PagesRouter;
