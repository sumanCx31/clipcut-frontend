import { createBrowserRouter, RouterProvider } from "react-router";
import AuthLayout from "../layouts/authLayout";

import { Toaster } from "sonner";
import { AuthProvider } from "../context/auth.context";
import LoginPage from "../loginpage";
import RegisterPage from "../registerpage";
import NotFoundPage from "../not-found-page";



const routerConfig = createBrowserRouter([
  {
    path: "/",
    Component: AuthLayout,
    children: [
      { index: true, Component: LoginPage },
      { path: "register", Component: RegisterPage },
    ],
  },

  {
    path: "*",
    Component: NotFoundPage,
  },
]);

const RouterConfig = () => {
  return (
    <>
      <AuthProvider>
        <RouterProvider router={routerConfig} />
      </AuthProvider>
    </>
  );
};
export default RouterConfig;
