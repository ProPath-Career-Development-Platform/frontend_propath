import React, { useEffect, useState } from "react";
import Button from "@mui/joy/Button";
import Breadcrumbs from "@mui/joy/Breadcrumbs";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import Box from "@mui/joy/Box";
import Table from "@mui/joy/Table";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CelebrationIcon from "@mui/icons-material/Celebration";
import {
  faCircleArrowRight,
  faCircleArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import Divider from "@mui/joy/Divider";
import axios from "axios";
import BusinessIcon from "@mui/icons-material/Business";
import CancelIcon from "@mui/icons-material/Cancel";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import OpenInNew from "@mui/icons-material/OpenInNew";
import Meetingview from "../../components/JobSeeker/meetingview";
import ReactDOM from "react-dom/client";

const AppliedJobs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [userDetails, setUserDetails] = useState(null);
  const [companyDetails, setCompanyDetails] = useState([]);
  const [interviewDetails, setInterviewDetails] = useState([]); // Add state for interview details
  const jobsPerPage = 7;

  // Calculate indexes for pagination
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;

  const currentJobs = appliedJobs?.slice(indexOfFirstJob, indexOfLastJob) || [];
  const totalPages = Math.ceil((appliedJobs?.length || 0) / jobsPerPage);

  // Fetch User Details
  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          `http://localhost:8080/jobseeker/getUserDetails`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setUserDetails(response.data);
      } catch (error) {
        console.error("Error fetching user details: ", error);
      }
    };

    fetchUserDetails();
  }, []);

  // Fetch Applied Jobs
  useEffect(() => {
    if (!userDetails?.user?.id) return; // Wait until userDetails is available

    const fetchAppliedJobs = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          `http://localhost:8080/jobseeker/applied-jobs/${userDetails.user.id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setAppliedJobs(response.data);
      } catch (error) {
        console.error("Error fetching applied jobs: ", error);
      }
    };

    fetchAppliedJobs();
  }, [userDetails]);

  useEffect(() => {
    if (!appliedJobs || appliedJobs.length === 0) return;

    const fetchCompanyDetails = async () => {
      try {
        const token = localStorage.getItem("token");
        const jobIds = appliedJobs.map((job) => job.job?.id).filter(Boolean);

        const responses = await Promise.all(
          jobIds.map((jobId) =>
            axios.get(
              `http://localhost:8080/jobseeker/postedCompany/${jobId}`,
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            )
          )
        );

        const companyData = responses.map((res) => res.data);
        setCompanyDetails(companyData);
      } catch (error) {
        console.error("Error fetching company details: ", error);
      }
    };

    fetchCompanyDetails();
  }, [appliedJobs]);

  useEffect(() => {
    // Reset currentPage when appliedJobs changes
    setCurrentPage(1);
  }, [appliedJobs]);

  // Fetch Interview Details
  useEffect(() => {
    const fetchInterviewDetails = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          `http://localhost:8080/jobseeker/selected-preselected-interviews`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log("Interview Details: ", response.data);
        setInterviewDetails(response.data);
      } catch (error) {
        console.error("Error fetching interview details: ", error);
      }
    };

    fetchInterviewDetails();
  }, []);

  // Change page function
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Box
      component="main"
      className="MainContent"
      sx={{
        px: { xs: 2, md: 6 },
        pt: {
          xs: "calc(12px + var(--Header-height))",
          sm: "calc(12px + var(--Header-height))",
          md: 3,
        },
        pb: { xs: 2, sm: 2, md: 3 },
        flex: 1,
        display: "flex",
        flexDirection: "column",
        minWidth: 0,
        gap: 1,
        maxHeight: "calc(100vh - 10px)",
        overflow: "auto",
      }}
    >
      {/* Breadcrumbs */}
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Breadcrumbs
          size="sm"
          aria-label="breadcrumbs"
          separator={<ChevronRightRoundedIcon fontSize="sm" />}
        >
          <Link underline="none" color="neutral" href="#some-link">
            <HomeRoundedIcon />
          </Link>
          <Link
            underline="hover"
            color="neutral"
            href="/jobseeker/home/"
            fontSize={12}
          >
            Dashboard
          </Link>
          <Typography color="primary" fontWeight={500} fontSize={12}>
            Applied Jobs
          </Typography>
        </Breadcrumbs>
      </Box>

      <Typography level="h2" component="h1" sx={{ mt: 2 }}>
        Applied Jobs
      </Typography>
      <Divider />

      {appliedJobs.length === 0 ? (
        <Typography sx={{ mt: 3, textAlign: "center" }}>
          No jobs applied yet.
        </Typography>
      ) : (
        <Table
          hoverRow
          sx={{ "& tbody": { bgcolor: "background.surface" } }}
          size="lg"
        >
          <thead>
            <tr>
              <th>Job</th>
              <th>Status</th>
              <th>Action</th>
              <th>Schedule the Interview</th>
            </tr>
          </thead>
          <tbody>
            {currentJobs.map((job, index) => {
              const jobProviderId = job.job?.user?.id;
              // Find the company that matches the job's user ID
              const company = companyDetails.find(
                (comp) => comp?.user?.id === jobProviderId
              );

              // Find the interview that matches the job's ID
              // const interview = interviewDetails.find(
              //   (interview) => interview.job?.id === job.job?.id
              // );

              return (
                <tr key={index}>
                  <td>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
                      <img
                        src={company?.logoImg || ""}
                        alt={job.job?.jobTitle || "Job"}
                        style={{ width: 56, height: 56, borderRadius: 48 }}
                      />
                      <Box>
                        <Typography>
                          {job.job?.jobTitle}{" "}
                          <Box
                            component="span"
                            sx={{
                              backgroundColor: "lightblue",
                              padding: "2px 4px",
                              borderRadius: "8px",
                              marginLeft: "8px",
                            }}
                          >
                            {job.job?.jobType}
                          </Box>
                        </Typography>
                        <Typography level="body-sm">
                          <BusinessIcon fontSize="small" />{" "}
                          {company?.companyName || "N/A"}
                        </Typography>
                        <Typography level="body-sm">
                          <LocationOnIcon fontSize="small" />{" "}
                          {company?.location || "N/A"}
                        </Typography>
                        <Typography level="body-sm">
                          <AttachMoneyIcon fontSize="small" />
                          {job.job?.minSalary} - {job.job?.maxSalary} /{" "}
                          {job.job?.salaryType}
                        </Typography>
                      </Box>
                    </Box>
                  </td>
                  {/* <td>{new Date(job.appliedDate).toLocaleDateString()}</td> */}
                  <td>
                    {job.status === "selected" ? (
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1.5 }}
                      >
                        <CheckCircleOutlineIcon color="success" /> Selected
                      </Box>
                    ) : job.status === "preSelected" ? (
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1.5 }}
                      >
                        <WarningAmberIcon color="success" /> Pre Selected
                      </Box>
                    ) : job.status === "pending" ? (
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1.5 }}
                      >
                        <WarningAmberIcon color="warning" /> Pending
                      </Box>
                    ) : job.status === "HIRED" ? (
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1.5 }}
                      >
                        <CelebrationIcon color="success" /> Hired
                      </Box>
                    ) : job.status === "REJECTED" ? (
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1.5 }}
                      >
                        <CancelIcon color="error" /> Not Selected
                      </Box>
                    ) : (
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1.5 }}
                      >
                        <WarningAmberIcon color="warning" /> {job.status}
                      </Box>
                    )}
                  </td>
                  <td>
                    <Button
                      sx={{ backgroundColor: "#DA70D6", color: "#e7e7e7" }}
                      variant="contained"
                      size="md"
                      onClick={() => window.open(job.cv, "_blank")}
                      startDecorator={<OpenInNew />}
                    >
                      View Your CV
                    </Button>
                  </td>
                  <td>
                    {(() => {
                      // Find the interview for the current job and user
                      const interview = interviewDetails.find(
                        (interview) =>
                          interview.user?.id === userDetails.user?.id &&
                          interview.job?.id === job.job?.id
                      );

                      if (interview) {
                        return (
                          <Button
                            sx={{
                              backgroundColor: "#BDB5D5",
                              color: "white",
                              cursor: "not-allowed",
                            }}
                            variant="contained"
                            size="md"
                            disabled
                          >
                            Scheduled
                          </Button>
                        );
                      } else {
                        return (
                          <Button
                            sx={{
                              backgroundColor:
                                job.status === "selected" ||
                                job.status === "preSelected"
                                  ? "#5D3FD3"
                                  : "#E0E0E0",
                              color:
                                job.status === "selected" ||
                                job.status === "preSelected"
                                  ? "#e7e7e7"
                                  : "#A0A0A0",
                              cursor:
                                job.status === "selected" ||
                                job.status === "preSelected"
                                  ? "pointer"
                                  : "not-allowed",
                            }}
                            variant="contained"
                            size="md"
                            disabled={
                              !(
                                job.status === "selected" ||
                                job.status === "preSelected"
                              )
                            }
                            onClick={() => {
                              if (
                                job.status === "selected" ||
                                job.status === "preSelected"
                              ) {
                                const rootElement =
                                  document.createElement("div");
                                rootElement.id = "calendar-root";
                                document.body.appendChild(rootElement);

                                const root = ReactDOM.createRoot(rootElement);
                                const closeModal = () => {
                                  root.unmount();
                                  document.body.removeChild(rootElement);
                                };

                                root.render(
                                  <Meetingview
                                    status={true}
                                    callback={closeModal}
                                    jobId={job?.job?.id}
                                    location={company?.location}
                                    userId={userDetails?.user?.id}
                                    companyName={company?.companyName}
                                    companyLogo={company?.logoImg}
                                  />
                                );
                              }
                            }}
                          >
                            Schedule
                          </Button>
                        );
                      }
                    })()}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      )}

      {/* Pagination */}
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 2 }}>
        {currentPage > 1 && (
          <Button onClick={() => paginate(currentPage - 1)}>
            <FontAwesomeIcon icon={faCircleArrowLeft} size="lg" />
          </Button>
        )}
        {Array.from({ length: totalPages }, (_, index) => index + 1)
          .filter(
            (pageNumber) =>
              pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1
          )
          .map((pageNumber) => (
            <Button
              key={pageNumber}
              onClick={() => paginate(pageNumber)}
              disabled={pageNumber === currentPage}
            >
              {pageNumber}
            </Button>
          ))}
        {currentPage < totalPages && (
          <Button onClick={() => paginate(currentPage + 1)}>
            <FontAwesomeIcon icon={faCircleArrowRight} size="lg" />
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default AppliedJobs;
