import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import SignIn from "../Pages/Authentication/SignIn/SignIn";
import SignUp from "../Pages/Authentication/SignUp/SignUp";
import DashboardLayout from "../Layouts/DashboardLayout/DashboardLayout";
import DashBoard from "../Pages/DashBoardPages/DashBoard";
import UserProfile from "../Pages/DashBoardPages/UserProfile";
import Home from "../Pages/Home/Home";
import FindJobs from "../Pages/OthersPages/FindJobs";

export const router = createBrowserRouter([
  // main layout
  {
    path: "/",
    element: <MainLayout/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/find-jobs',
        element: <FindJobs/>,
        loader: () => fetch('/db.json')
      },
      
    ]
  },

  // dashboard layout
  {
    path: "/dashboard",
    element: <DashboardLayout/>,
    children: [
      {
        path: '/dashboard',
        element: <DashBoard/>
      },
      {
        path: '/dashboard/user-profile',
        element: <UserProfile/>
      },
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