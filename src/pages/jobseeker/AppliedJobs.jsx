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
import {
  faCircleArrowRight,
  faCircleArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import Divider from "@mui/joy/Divider";
import axios from "axios";
import BusinessIcon from "@mui/icons-material/Business";
import CancelIcon from '@mui/icons-material/Cancel';

const AppliedJobs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [userDetails, setUserDetails] = useState(null);
  const [companyDetails, setCompanyDetails] = useState([]);
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
        console.log("Applied Jobs: ", response.data);
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
        console.log("Fetched Company Details: ", companyData);
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
              <th>Date Applied</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {currentJobs.map((job, index) => {
              const jobProviderId = job.job?.user?.id;

              console.log("Job Provider ID: ", jobProviderId);
              // Find the company that matches the job's user ID
              const company = companyDetails.find(
                (comp) => comp?.user?.id === jobProviderId
              );

              // Debugging to check if the company is being found
              console.log("Company: ", company);

              return (
                <tr key={index}>
                  <td>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
                      <img
                        src={company?.logoImg || ""}
                        alt={job.job?.jobTitle || "Job"}
                        style={{ width: 66, height: 66, borderRadius: 28 }}
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
                  <td>{new Date(job.appliedDate).toLocaleDateString()}</td>
                  <td>
                    {job.status === "active" ? (
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1.5 }}
                      >
                        <CheckCircleOutlineIcon color="success" /> Active
                      </Box>
                    ) : job.status === "pending" ? (
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1.5 }}
                      >
                        <WarningAmberIcon color="warning" /> Pending
                      </Box>
                    ) : job.status === "rejected" ? (
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1.5 }}
                      >
                        <CancelIcon color="error" /> Rejected
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
                      color="primary"
                      variant="solid"
                      size="md"
                      onClick={() => window.open(job.cv, "_blank")}
                    >
                      View CV
                    </Button>
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
