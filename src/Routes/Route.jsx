import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import SignIn from "../Pages/Authentication/SignIn/SignIn";
import SignUp from "../Pages/Authentication/SignUp/SignUp";

export const router = createBrowserRouter([
  // main layout
  {
    path: "/",
    element: <MainLayout/>,
  },

  // authentication
  {
    path: '/signIn',
    element: <SignIn/>
  },
  {
    path: '/signUp',
    element: <SignUp/>
  }

]);