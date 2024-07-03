import React from 'react';
import { createBrowserRouter, Navigate } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";

//dashboard Layout
import DashboardLayout from "../layout/Dashboard";

//jobseeker
import JobSeekerHome from "../pages/jobseeker/JobSeekerHome";
import Login from "../pages/Auth/Login";
import ForgotPassword from "../pages/Auth/ForgetPassword";
import Signup from "../pages/Auth/Signup";
import PasswordReset from "../pages/Auth/PasswordReset";
import EmailVerification from "../pages/Auth/Emailverification";
import JobSeekerSetup from "../pages/jobseeker/Registration/JobSeekerSetup";
import JsAppliedJobs from "../pages/jobseeker/AppliedJobs";
import JsFavorites from "../pages/jobseeker/Favorites";
import JsJobAlert from "../pages/jobseeker/JobAlert";
import TopNavBar from "../components/JobSeeker/TopNavBar";
import TopNav from "../components/landingPage/navbar/TopNav";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "forgotpassword",
        element: <ForgotPassword />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "resetpassword",
        element: <PasswordReset />,
      },
      {
        path: "emailverification",
        element: <EmailVerification />,
      },
      {
        path: "topnavbar",
        element: <TopNavBar />,
      },
    ],
  },


  {
    path: "/Jobseeker",
    element: (
      <>
        <TopNav />
        <TopNavBar />
        <JobSeekerSetup />
      </>
    ),
    children: [
      {
        path: "Setup",
        element: <JobSeekerSetup />,
      },
    ],
  },

  {
    path: "/jobseeker",
    element: (
      <>
        <TopNav />
        <TopNavBar />
        <DashboardLayout user="jobseeker" />
      </>
    ),
    children: [
      {
        path: "/jobseeker",
        element: <Navigate to="/jobseeker/home/" replace />,
      },

      {
        path: "home",
        element: <JobSeekerHome />,
      },
      {
        path: "applied-jobs",
        element: <JsAppliedJobs />,
      },
      {
        path: "favorites",
        element: <JsFavorites />,
      },
      {
        path: "job-alert",
        element: <JsJobAlert />,
      },
    ],
  },
]);

export default router;
