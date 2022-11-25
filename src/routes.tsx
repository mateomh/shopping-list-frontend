import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AppWrapper from "./components/AppWrapper";
import Error from "./pages/Error";
import Landing from "./pages/Landing";
import ProductsDisplay from "./pages/ProductsDisplay";
import StoresDisplay from "./pages/StoresDisplay";
import { productsLoader, storesLoader } from "./utils/data-loaders/data-loaders";

const AppRouter:React.FC =() => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppWrapper />,
      children: [{
        path: '/',
        element: <Landing />,
        errorElement: <Error />
      },
      {
        path: '/products',
        element: <ProductsDisplay />,
        loader: productsLoader,
        errorElement: <Error />
      },
      {
        path: '/stores',
        element: <StoresDisplay />,
        loader: storesLoader,
        errorElement: <Error />
      }]
    }
  ]);

  return(
    <RouterProvider router={router} />
  );
}

export default AppRouter;