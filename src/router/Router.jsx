import React from 'react';
import { createBrowserRouter, Navigate } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";

//dashboard Layout
import DashboardLayout from "../layout/Dashboard";


//jobprovider
import JPCompnaySetup1 from "../pages/jobprovider/CompanySetup/CompanyInfo";

import JpHome from "../pages/jobprovider/dashboard/Home";
import JpDashboard from "../pages/jobprovider/dashboard/Dashboard";
import JpPostAJob from "../pages/jobprovider/dashboard/PostaJob";
import JpMyJobs from "../pages/jobprovider/dashboard/MyJob";
import JpApplications from "../pages/jobprovider/dashboard/Applications";
import JpPlansAndBilling from "../pages/jobprovider/dashboard/PlanAndBilling";
import JpMeetUp from "../pages/jobprovider/dashboard/MeetUp";
import JpCreateEvent from "../pages/jobprovider/dashboard/CreateAnEvent"
import JpChangePlan from "../pages/jobprovider/dashboard/ChangePlan";
import JpSettings from "../pages/jobprovider/dashboard/Settings"

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

import Navbar1 from "../components/navbar/Navbar1";
import EmployerSite from "../pages/landingPage/EmployerSite";
import ExploreCompanies from "../pages/landingPage/ExploreCompanies";
import Workshops from "../pages/landingPage/Workshops";
import ProfessionalMemberships from '../pages/landingPage/ProfessionalMemberships';



import AdminHome from "../pages/Admin/AdminHome";
import AdminCompanies from "../pages/Admin/AdminCompanies";
import AdminUsers from "../pages/Admin/AdminUsers";
import AdminJobs from "../pages/Admin/AdminJobs";
import AdminCompanyInfo from '../pages/Admin/AdminCompanyInfo';


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
        path: "workshops",
        element: <Workshops />,
      },
      {
        path: "professionalmemberships",
        element: <ProfessionalMemberships />,
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
    element: <JPCompnaySetup1/>,
    children: [
      {
        path:"Setup",
        element:<JPCompnaySetup1/>
      }
    ]
  },

  {
    path: "/jobprovider",
    element: <DashboardLayout user="jobprovider"/>,
    children: [
      {
        path:"/jobprovider",
        element: <Navigate to="/jobprovider/home/" replace />
      },
      {
         path:"home",
         element:<JpHome/>
         
      },
      {
        path:"dashboard",
        element:<JpDashboard/>
      },
      {
        path:"post-a-job",
        element:<JpPostAJob/>
      },
      {
        path:"my-jobs",
        element:<JpMyJobs/>
      },
      {
        path:"my-jobs/applications",
        element:<JpApplications/>
      },
      {
        path:"plans-and-billing",
        element:<JpPlansAndBilling/>
      },
      {
        path:"plan-and-billing/changePlan",
        element:<JpChangePlan/>
      },
      {
        path:"meet-up",
        element:<JpMeetUp/>
      },
      {
        path:"meet-up/createEvent",
        element:<JpCreateEvent/>
      },
      {
        path:"settings",
        element:<JpSettings/>
      },
    ]
  },

  {
    path: "/Jobseeker",
    element: (
      <>
        {/* <TopNav /> */}
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
        {/* <TopNav /> */}
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


  {
    path: "/admin",
    element: (
      <>
        {/* <TopNav /> */}
        <TopNavBar /> {/* insert correct navbar for admin */}
        <DashboardLayout user="admin" />
      </>
    ),
    children: [
      {
        path: "/admin",
        element: <Navigate to="/admin/home" replace />,
      },

      {
        path: "home",
        element: <AdminHome />,
      },
      {
        path: "RegisterdCompanies",
        element: <AdminCompanies />,
      },
      {
        path: "RegisterdUsers",
        element: <AdminUsers />,
      },
      {
        path: "RegisterdCompany/info",
        element: <AdminCompanyInfo />,
      },
      {
        path: "Postedjobs",
        element: <AdminJobs />,
      },
    ],
  },
 
]);

export default router;
