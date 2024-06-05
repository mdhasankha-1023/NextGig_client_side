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
import FindCandidates from "../Pages/OthersPages/FindCandidates";
import PostJob from "../Pages/DashBoardPages/PostJob";
import Manage from "../Pages/DashBoardPages/Manage";
import PostJobUpdate from "../Pages/DashBoardPages/PostJobUpdate";
import JobDetails from "../Pages/OthersPages/JobDetails";

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
        loader: () => fetch('http://localhost:3000/posted_jobs')
      },
      {
        path: '/find-jobs',
        element: <FindJobs/>,
        loader: () => fetch('http://localhost:3000/posted_jobs')
      },
      {
        path: '/find-candidates',
        element: <FindCandidates/> ,
        loader: () => fetch('http://localhost:3000/candidates')
      },
      {
        path: '/job-details/:id',
        element: <JobDetails/>,
        loader: () => fetch('http://localhost:5000/jobs')
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
        element: <UserProfile/>,
        loader: ()=> fetch('http://localhost:5000/users')
      },
      {
        path: '/dashboard/manage',
        element: <Manage/>,
        loader: ()=> fetch('http://localhost:5000/jobs')
      },
      {
        path: '/dashboard/post-job',
        element: <PostJob/>
      },
      {
        path: '/dashboard/job-update/:id',
        element: <PostJobUpdate/>,
        loader: ()=> fetch("http://localhost:5000/jobs")
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