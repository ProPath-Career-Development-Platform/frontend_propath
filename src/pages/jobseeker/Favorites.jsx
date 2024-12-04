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
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import Divider from "@mui/joy/Divider";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Favorites = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 6;

  const [favoriteJobs, setFavoriteJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [userDetails, setUserDetails] = useState(null);

  const navigate = useNavigate();

  // Fetch favorite jobs
  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        setIsLoading(true); // Start loading
        const token = localStorage.getItem("token");
        const response = await axios.get(
          `http://localhost:8080/jobseeker/favorites`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        // Fetch detailed job information for each favorite
        const jobs = await Promise.all(
          response.data.map(async (favorite) => {
            const jobResponse = await axios.get(
              `http://localhost:8080/jobseeker/jobDetails/${favorite.jobId}`,
              {
                headers: { Authorization: `Bearer ${token}` },
              }
            );

            // Add company details to each job
            const companyResponse = await axios.get(
              `http://localhost:8080/jobseeker/postedCompany/${favorite.jobId}`,
              {
                headers: { Authorization: `Bearer ${token}` },
              }
            );

            return {
              ...jobResponse.data,
              company: companyResponse.data,
            };
          })
        );
        console.log(jobs);
        setFavoriteJobs(jobs);
      } catch (error) {
        console.error("Error fetching favorite jobs or related data", error);
      } finally {
        setIsLoading(false); // End loading
      }
    };

    fetchFavorites();
  }, []);

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
        console.log("applied", response.data);
        setAppliedJobs(response.data);
      } catch (error) {
        console.error("Error fetching applied jobs: ", error);
      }
    };

    fetchAppliedJobs();
  }, [userDetails]);

  const handleApplyNowClick = (jobId, title) => {
    navigate(`/JobSeeker/JobDetails/${jobId}`, {
      state: { title },
    });
  };


  // Pagination calculations
  const totalPages = Math.ceil(favoriteJobs.length / jobsPerPage);
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = favoriteJobs.slice(indexOfFirstJob, indexOfLastJob);

  // Change page function
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }

  {
    currentJobs.map((job, index) => {
      const calculateRemainingDays = (expiryDate) => {
        const currentDate = new Date();
        const expiry = new Date(expiryDate);
        const timeDiff = expiry - currentDate; // Difference in milliseconds
        const remainingDays = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)); // Convert to days
        return remainingDays > 0 ? remainingDays : 0;
      };

      const remainingDays = calculateRemainingDays(job.expiryDate);
      const isExpired = job.status === "Expired" || remainingDays === 0;
    });
  }


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
        overflow: "auto ",
        "&::-webkit-scrollbar": {
          display: "none",
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
            Favorite Jobs
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
          Favorite Jobs
        </Typography>
      </Box>

      <Divider />

      <Table
        hoverRow
        sx={{ "& tbody": { bgcolor: "background.surface" } }}
        size="lg"
      >
        <tbody>
          {currentJobs.map((job, index) => {
            const calculateRemainingDays = (expiryDate) => {
              const currentDate = new Date();
              const expiry = new Date(expiryDate);
              const timeDiff = expiry - currentDate; // Difference in milliseconds
              const remainingDays = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)); // Convert to days
              return remainingDays > 0 ? remainingDays : 0;
            };

            const remainingDays = calculateRemainingDays(job.expiryDate);
            const isExpired = job.status === "Expired" || remainingDays === 0;

            const isApplied = appliedJobs.some(
              (appliedJob) => appliedJob.job?.id === job.id
            );

            return (
              <tr key={index} style={{ height: "100px" }}>
                <td>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
                    <img
                      src={job.logoImg || "https://via.placeholder.com/32"}
                      alt={job.jobTtile}
                      style={{ width: 46, height: 46 }}
                    />
                    <Box>
                      <Typography>
                        {job.jobTitle}{" "}
                        <Box
                          component="span"
                          sx={{
                            backgroundColor: "lightblue",
                            padding: "2px 4px",
                            borderRadius: "8px",
                            marginLeft: "8px",
                          }}
                        >
                          {job.jobType}
                        </Box>
                      </Typography>
                      <Typography
                        level="body-sm"
                        sx={{ display: "flex", alignItems: "center", gap: 2 }}
                      >
                        <LocationOnIcon fontSize="small" /> {job.location}
                        <AttachMoneyIcon fontSize="small" /> LKR {job.minSalary} -
                        LKR {job.maxSalary}/{job.salaryType}
                        {remainingDays > 0 ? (
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: 1.5,
                            }}
                          >
                            <CheckCircleOutlineIcon color="success" />{" "}
                            {remainingDays} Days Remaining
                          </Box>
                        ) : (
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: 1.5,
                            }}
                          >
                            <WarningAmberIcon color="danger" /> Expired
                          </Box>
                        )}
                      </Typography>
                    </Box>
                  </Box>
                </td>
                <td>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "center",
                      width: "150%",
                    }}
                  >
                    <BookmarkAddedIcon />
                  </div>
                </td>
                <td>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "center",
                      width: "80%",
                    }}
                  >
                    {isApplied ? (
                      <Button
                        color="primary"
                        variant="solid"
                        size="md"
                        sx = {{backgroundColor: "#DA70D6"}}
                        onClick={() => navigate(`/jobseeker/applied-jobs`)}
                      >
                        Check Status
                      </Button>
                    ) : isExpired ? (
                      <Button
                        color="primary"
                        variant="solid"
                        size="md"
                        disabled
                      >
                        Deadline Expired
                      </Button>
                    ) : (
                      <Button
                        color="primary"
                        variant="solid"
                        size="md"
                        sx={{
                          "&:hover": {
                            backgroundColor: "#DA70D6",
                          },
                        }}
                        onClick={() =>
                          handleApplyNowClick(job.id, job.jobTitle)
                        }
                      >
                        Apply Now
                        <span style={{ marginRight: "8px" }}></span>
                        <FontAwesomeIcon icon={faCircleArrowRight} size="md" />
                      </Button>
                    )}
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      {/* Pagination Controls */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
          marginTop: 2,
          position: "fixed",
          marginLeft: "30%",
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
            {<FontAwesomeIcon icon={faCircleArrowLeft} />}
          </Button>
        )}
        {[...Array(totalPages).keys()].map((page) => (
          <Button
            key={page}
            onClick={() => paginate(page + 1)}
            color={currentPage === page + 1 ? "primary" : "neutral"}
          >
            {page + 1}
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
            {<FontAwesomeIcon icon={faCircleArrowRight} />}
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default Favorites;
