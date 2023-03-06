import { createBrowserRouter } from "react-router-dom";

//* Layouts
import { AuthLayout, MainLayout } from "../Layouts";

//* Auth pages
import { Login } from "../pages/auth";

//* Another Pages
import { Home, NotFound } from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [{ path: "/", element: <Home /> }],
  },
  {
    element: <AuthLayout />,
    children: [{ path: "login", element: <Login /> }],
  },
]);
