import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const AppRouter:React.FC =() => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <h1>This is the root route</h1>,
      errorElement: <h1>This is the wrong route</h1>
    },
    {
      path: '/secondroute',
      element: <h1>This is the second route</h1>
    }
  ]);
  return(
    <RouterProvider router={router} />
  );
}

export default AppRouter;