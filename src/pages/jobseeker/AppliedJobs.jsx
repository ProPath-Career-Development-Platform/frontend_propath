import React, { useState } from "react";
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
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";

import Divider from "@mui/joy/Divider";

const jobs = [
  {
    title: "Networking Engineer",
    location: "Colmbo 06",
    salary: "LKR50k-80k/month",
    type: "Remote",
    dateApplied: "Feb 2, 2024 19:28",
    status: "Active",
    icon: "https://via.placeholder.com/32/00FF00/FFFFFF?text=U",
  },
  {
    title: "Product Designer",
    location: "Nugegoda",
    salary: "LKR50k-80k/month",
    type: "Full Time",
    dateApplied: "Dec 7, 2023 23:26",
    status: "Expired",
    icon: "https://via.placeholder.com/32/FF0000/FFFFFF?text=P",
  },
  {
    title: "Junior Graphic Designer",
    location: "Kandy",
    salary: "LKR50k-80k/month",
    type: "Casual",
    dateApplied: "Feb 2, 2024 19:28",
    status: "Active",
    icon: "https://via.placeholder.com/32/000000/FFFFFF?text=A",
  },
  {
    title: "Visual Designer",
    location: "Galle",
    salary: "LKR50k-80k/month",
    type: "Contract",
    dateApplied: "Dec 7, 2023 23:26",
    status: "Expired",
    icon: "https://via.placeholder.com/32/0000FF/FFFFFF?text=M",
  },
  {
    title: "Cloud Engineer",
    location: "Colmbo 06",
    salary: "LKR50k-80k/month",
    type: "Remote",
    dateApplied: "Feb 2, 2024 19:28",
    status: "Active",
    icon: "https://via.placeholder.com/32/00F000/FFFFFF?text=C",
  },
  {
    title: "Software Engineer",
    location: "Colmbo 02",
    salary: "LKR50k-80k/month",
    type: "Remote",
    dateApplied: "Feb 2, 2024 19:28",
    status: "Active",
    icon: "https://via.placeholder.com/32/FFFFF/FFFFFF?text=S",
  },
  {
    title: "Quality Assurance Engineer",
    location: "Gampaha",
    salary: "LKR50k-80k/month",
    type: "Remote",
    dateApplied: "Feb 2, 2024 19:28",
    status: "Expired",
    icon: "https://via.placeholder.com/32/F0FF00/FFFFFF?text=Q",
  },
  {
    title: "DevOps Engineer",
    location: "Colmbo 06",
    salary: "LKR50k-80k/month",
    type: "Remote",
    dateApplied: "Feb 2, 2024 19:28",
    status: "Active",
    icon: "https://via.placeholder.com/32/000000/FFFFFF?text=D",
  },
  {
    title: "Networking Engineer",
    location: "Mount Lavinia",
    salary: "LKR50k-80k/month",
    type: "Remote",
    dateApplied: "Feb 2, 2024 19:28",
    status: "Expired",
    icon: "https://via.placeholder.com/32/0000FF/FFFFFF?text=N",
  },
];

const AppliedJobs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 7;

  // Calculate total pages
  const totalPages = Math.ceil(jobs.length / jobsPerPage);

  // Calculate the jobs to display on the current page
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

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
        height: "100dvh",
        gap: 1,
        maxHeight: "calc(100vh - 10px)",
        overflow: 'auto ',
        '&::-webkit-scrollbar': {
          display: 'none',
        },
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Breadcrumbs
          size="sm"
          aria-label="breadcrumbs"
          separator={<ChevronRightRoundedIcon fontSize="sm" />}
          sx={{ pl: 0 }}
        >
          <Link
            underline="none"
            color="neutral"
            href="#some-link"
            aria-label="Home"
          >
            <HomeRoundedIcon />
          </Link>
          <Link
            underline="hover"
            color="neutral"
            href="/jobseeker/home/"
            fontSize={12}
            fontWeight={500}
          >
            Dashboard
          </Link>
          <Typography color="primary" fontWeight={500} fontSize={12}>
            Applied Jobs
          </Typography>
        </Breadcrumbs>
      </Box>
      <Box
        sx={{
          display: "flex",
          mb: 1,
          gap: 1,
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { xs: "start", sm: "center" },
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <Typography level="h2" component="h1">
          Applied Jobs
        </Typography>
      </Box>

      {/*breadcrumbs over*/}
      <Divider />

      <Box
        sx={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
          gap: 15,
          marginTop: "20px",
        }}
      ></Box>

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
          {currentJobs.map((job, index) => (
            <tr key={index}>
              <td>
                <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
                  <img
                    src={job.icon}
                    alt={job.title}
                    style={{ width: 46, height: 46 }}
                  />
                  <Box>
                    <Typography>
                      {job.title}{" "}
                      <Box
                        component="span"
                        sx={{
                          backgroundColor: "lightblue",
                          padding: "2px 4px",
                          borderRadius: "8px",
                          marginLeft: "8px",
                        }}
                      >
                        {job.type}
                      </Box>
                    </Typography>
                    <Typography level="body-sm">
                      <LocationOnIcon fontSize="small" /> {job.location}
                    </Typography>
                    <Typography level="body-sm">
                      <AttachMoneyIcon fontSize="small" /> {job.salary}
                    </Typography>
                  </Box>
                </Box>
              </td>
              <td>{job.dateApplied}</td>
              <td>
                {job.status === "Active" ? (
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                    <CheckCircleOutlineIcon color="success" /> {job.status}
                  </Box>
                ) : (
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                    <WarningAmberIcon color="danger" /> {job.status}
                  </Box>
                )}
              </td>
              <td>
                <Button color="primary" variant="solid" size="md">
                  View Details
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {/* Pagination Controls */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
          marginTop: 2,
          position: "relative",
          bottom: 0,
          pb: 3, 
          backgroundColor: "inherit", 
          zIndex: 1000, 
        }}
      >
        {currentPage > 1 && (
          <Button
            onClick={() => paginate(currentPage - 1)}
            sx={{
              backgroundColor: "transparent", 
              color: "inherit", 
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.04)", 
              },
            }}
          >
            {<FontAwesomeIcon icon={faCircleArrowLeft} size="lg" />}
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
              sx={{
                backgroundColor:
                  pageNumber === currentPage ? "#1565c0" : "transparent",
                color: pageNumber === currentPage ? "white" : "inherit",
                "&:hover": {
                  backgroundColor:
                    pageNumber === currentPage
                      ? "#1565c0"
                      : "rgba(0, 0, 0, 0.04)",
                },
                "&:disabled": {
                  backgroundColor: "#ccc",
                  color: "black",
                },
              }}
            >
              {pageNumber}
            </Button>
          ))}
        {currentPage < totalPages && (
          <Button
            onClick={() => paginate(currentPage + 1)}
            sx={{
              backgroundColor: "transparent", 
              color: "inherit", 
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.04)", 
              },
            }}
          >
            {<FontAwesomeIcon icon={faCircleArrowRight} size="lg" />}
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default AppliedJobs;
