import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";

//dashboard Layout
import DashboardLayout from "../layout/Dashboard";
import JobDetail from "../pages/jobseeker/jobDetail";
import JobScore from "../components/JobSeeker/jobScore";

//jobprovider
import JPCompnaySetup1 from "../pages/jobprovider/dashboard/CompanyInfo";
import JPCompany from "../pages/jobprovider/dashboard/CompanyRegister";
import JpHome from "../pages/jobprovider/dashboard/Home";
import JpDashboard from "../pages/jobprovider/dashboard/Dashboard";
import JpPostAJob from "../pages/jobprovider/dashboard/PostaJob";
import JpMyJobs from "../pages/jobprovider/dashboard/MyJob";
import JpApplications from "../pages/jobprovider/dashboard/Applications";
import JpPlansAndBilling from "../pages/jobprovider/dashboard/PlanAndBilling";
import JpMeetUp from "../pages/jobprovider/dashboard/MeetUp";
import JpCreateEvent from "../pages/jobprovider/dashboard/CreateAnEvent";
import JpChangePlan from "../pages/jobprovider/dashboard/ChangePlan";
import JpSettings from "../pages/jobprovider/dashboard/Settings";
import JpInterviewSchedule from "../pages/jobprovider/dashboard/InterviewSchedule";
import JpInterviews from "../pages/jobprovider/dashboard/MyInterviews";

import JpCheckout from "../pages/jobprovider/dashboard/chekout/Checkout";
import JpEventPreview from "../pages/jobprovider/dashboard/EventPreview";
import JpUpdateEvent from "../pages/jobprovider/dashboard/UpdateEvent";
import JpError from "../pages/jobprovider/dashboard/Page404";
import JpUpdateJob from "../pages/jobprovider/dashboard/UpdateJob";

import JpVemail from "../pages/jobprovider/dashboard/emailVerification";
import JpPaymentSuccess from "../pages/jobprovider/dashboard/PaymentSuccess";
import JpPaymentFail from "../pages/jobprovider/dashboard/PaymentFailed";

import JobDetails from "../pages/jobseeker/jobDetail";

//jobseeker
import JobSeekerDashboard from "../pages/jobseeker/JobSeekerDashboard";
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
import AppliedCard from "../components/JobSeeker/appliedcard";
import Navbar1 from "../components/navbar/Navbar1";
import Courses from "../pages/jobseeker/courses";
import Course from "../pages/jobseeker/course";
import Footer from "../components/landingPage/footer/Footer";
import Profile from "../pages/jobseeker/profile";

//Admin
import AdminHome from "../pages/Admin/AdminHome";
import AdminCompanies from "../pages/Admin/AdminCompanies";
import AdminUsers from "../pages/Admin/AdminUsers";
import AdminJobs from "../pages/Admin/AdminJobs";
import AdminCompanyInfo from "../pages/Admin/AdminCompanyInfo";
import AdminEvents from "../pages/Admin/AdminEvents";
import AdminCourses from "../pages/Admin/AdminCourses";
import AdminInterviews from "../pages/Admin/AdminInterviews";

//landing page
import CPDcourses from "../pages/landingPage/CPDcourses";
import ExploreCompanies from "../pages/landingPage/ExploreCompanies";
import Workshops from "../pages/landingPage/Workshops";
import ProfessionalMemberships from "../pages/landingPage/ProfessionalMemberships";
import EmployerSite from "../pages/landingPage/EmployerSite";

//security
import ProtectedRoute from "../components/ProtectedRoute";
import AdminLayout from "../layout/AdminLayout";

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
        path: "cpdcourses",
        element: <CPDcourses />,
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
    element: (
      <ProtectedRoute requiredRole="JobProvider">
        <JPCompnaySetup1 />
      </ProtectedRoute>
    ),

    children: [
      {
        path: "setup",
        element: <JPCompnaySetup1 />,
      },
    ],
  },
  {
    path: "/jobprovider/plan-and-billing/Paynow",
    element: <JpCheckout />,
  },

  {
    path: "/jobprovider",
    element: (
      <ProtectedRoute requiredRole="JobProvider">
        <DashboardLayout user="jobprovider" />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/jobprovider",
        element: <Navigate to="/jobprovider/home/" replace />,
      },
      {
        path: "home",
        element: <JpHome />,
      },
      {
        path: "CompanyRegister",
        element: <JPCompany />,
      },
      {
        path: "dashboard",
        element: <JpDashboard />,
      },
      {
        path: "my-jobs/post-a-job",
        element: <JpPostAJob />,
      },
      {
        path: "my-jobs/update-job/:jobId",
        element: <JpUpdateJob />,
      },
      {
        path: "my-jobs",
        element: <JpMyJobs />,
      },
      {
        path: "my-jobs/:jobId/applications",
        element: <JpApplications />,
      },
      {
        path: "my-jobs/:jobId/shedule-interview",
        element: (
          <>
            <JpInterviewSchedule />
          </>
        ),
      },
      {
        path: "plans-and-billing",
        element: <JpPlansAndBilling />,
      },
      {
        path: "plans-and-billing/changePlan",
        element: <JpChangePlan />,
      },
      {
        path: "plan-and-billing/Paynow",
        element: <JpCheckout />,
      },
      {
        path: "meet-up",
        element: <JpMeetUp />,
      },
      {
        path: "meet-up/createEvent",
        element: <JpCreateEvent />,
      },
      {
        path: "Interviews",
        element: <JpInterviews />,
      },
      {
        path: "settings",
        element: <JpSettings />,
      },
      {
        path: "meet-up/preview-event/:id",
        element: <JpEventPreview />,
      },
      {
        path: "meet-up/updateEvent/:id",
        element: <JpUpdateEvent />,
      },
      {
        path: "error/404",
        element: <JpError />,
      },
      {
        path: "verify-email",
        element: <JpVemail />,
      },
      {
        path: "plans-and-billing/payment/success",
        element: <JpPaymentSuccess />,
      },
      {
        path: "plans-and-billing/payment/failed",
        element: <JpPaymentFail />,
      },
    ],
  },

  {
    path: "/Jobseeker",
    element: (
      <>
        {/* <TopNav /> */}
        <ProtectedRoute requiredRole="JobSeeker">
          <JobSeekerSetup />
        </ProtectedRoute>
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

        <ProtectedRoute requiredRole="JobSeeker">
          <DashboardLayout user="jobseeker" />
        </ProtectedRoute>
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
        path: "dashboard",
        element: <JobSeekerDashboard />,
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
        element: <JobDetail />,
      },

      {
        path: "Courses",
        element: <Courses />,
      },

      {
        path: "courses/course",
        element: <Course />,
      },

      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "JobScore",
        element: <JobScore />,
      },
      {
        path: "appliedcard",
        element: <AppliedCard />,
      },
    ],
  },

  {
    path: "/admin",
    element: (
      <>
        <ProtectedRoute requiredRole="Admin">
          <AdminLayout user="admin" />
        </ProtectedRoute>
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
      {
        path: "Events",
        element: <AdminEvents />,
      },
      {
        path: "PDC_Courses",
        element: <AdminCourses />,
      },
      {
        path: "Interviews",
        element: <AdminInterviews />,
      },
    ],
  },
]);

export default router;
