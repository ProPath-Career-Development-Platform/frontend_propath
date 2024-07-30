import React from 'react';
import { createBrowserRouter, Navigate } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";

// dashboard Layout
import DashboardLayout from "../layout/Dashboard";

// jobprovider
import JpPostAJob from "../pages/jobprovider/dashboard/PostaJob";

// jobseeker
import JobSeekerHomeOverview from "../pages/jobseeker/JobSeekerHomeOverview";
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
import JobDetails from "../pages/jobseeker/jobDetail";

import Navbar1 from "../components/navbar/Navbar1";
import EmployerSite from "../pages/landingPage/EmployerSite";
import ExploreCompanies from "../pages/landingPage/ExploreCompanies";


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
        path: "explorecompanies",
        element: <ExploreCompanies />,
      },
      {
        path: "employersite",
        element: <EmployerSite />,
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
    path: "/jobprovider",
    element: <DashboardLayout user="jobprovider" />,
    children: [
      {
        path: "post-a-job",
        element: <JpPostAJob />,
      },
    ],
  },
  {
    path: "/jobseeker/setup",
    element: (
      <>
        {/* <TopNav /> */}
        <TopNavBar />
        <JobSeekerSetup />
      </>
    ),
  },
  {
    path: "/jobseeker",
    element: (
      <>
        {/* <TopNav /> */}
        <TopNavBar />
        <DashboardLayout user="jobseeker" />
      </>
    ),
    children: [
      {
        path: "",
        element: <Navigate to="home" replace />,
      },
      {
        path: "home",
        element: <JobSeekerHome />,
      },
      {
        path: "overview",
        element: <JobSeekerHomeOverview />,
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
      {
        path: "JobDetails/:jobId",
        element: <JobDetails />,
      }
    ],
  },
 
]);

export default router;
