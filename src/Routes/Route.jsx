import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import SignIn from "../Pages/Authentication/SignIn/SignIn";
import SignUp from "../Pages/Authentication/SignUp/SignUp";
import DashboardLayout from "../Layouts/DashboardLayout/DashboardLayout";
import DashBoard from "../Pages/DashBoardPages/DashBoard";

export const router = createBrowserRouter([
  // main layout
  {
    path: "/",
    element: <MainLayout/>,
  },

  // dashboard layout
  {
    path: "/dashboard",
    element: <DashboardLayout/>,
    children: [
      {
        path: '/dashboard',
        element: <DashBoard/>
      }
    ]
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