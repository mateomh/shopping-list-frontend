import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Error from "./pages/Error";
import Landing from "./pages/Landing";
import ProductsDisplay from "./pages/ProductsDisplay";
import StoresDisplay from "./pages/StoresDisplay";
import { productsLoader, storesLoader } from "./utils/data-loaders/data-loaders";

const AppRouter:React.FC =() => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Landing />,
      errorElement: <Error />
    },
    {
      path: '/products',
      element: <ProductsDisplay />,
      loader: productsLoader
    },
    {
      path: '/stores',
      element: <StoresDisplay />,
      loader: storesLoader
    },
  ]);
  return(
    <RouterProvider router={router} />
  );
}

export default AppRouter;