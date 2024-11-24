import { createBrowserRouter, Navigate } from "react-router-dom";
import { ROUTE_PATH } from "./consts/const";
import Homepage from "./pages/HomePage";



export const router = createBrowserRouter([
    {
        path: ROUTE_PATH.home,
        element: <Homepage />
    },
    {
        path: '*',
        element: <Navigate to={ROUTE_PATH.notFound} />,
      },
      {
        path: ROUTE_PATH.notFound,
        element: <div>not found</div>,
      },
])