import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Landing from "./pages/Landing";
import ProductsDisplay from "./pages/ProductsDisplay";

const AppRouter:React.FC =() => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Landing />,
      errorElement: <h1>This is the wrong route</h1>
    },
    {
      path: '/products',
      element: <ProductsDisplay />
    }
  ]);
  return(
    <RouterProvider router={router} />
  );
}

export default AppRouter;