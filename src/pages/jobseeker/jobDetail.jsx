import React, { useState, useEffect } from "react";
import Button from "@mui/joy/Button";
import Breadcrumbs from "@mui/joy/Breadcrumbs";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import Box from "@mui/joy/Box";
import ProfileDropdown from "../../components/JobSeeker/ProfileDropDown";
import Alert from "../../components/JobSeeker/alert";
import JSSearch from "../../components/JobSeeker/search";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import LinkIcon from "@mui/icons-material/Link";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import TimerIcon from "@mui/icons-material/Timer";
import SchoolIcon from "@mui/icons-material/School";
import WalletIcon from "@mui/icons-material/Wallet";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Companycard from "../../components/JobSeeker/companycard";
import ApplyJob from "../../components/JobSeeker/applyJob";
import axios from "axios";
import { useParams, useLocation } from "react-router-dom";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import Jobcard from "../../components/JobSeeker/jobcard";
import JSCard from "../../components/JobSeeker/card";
import RenderRichText from "../../components/jobprovider/dashboard/RenderRichText";
import Card from "@mui/joy/Card";
import CardActions from "@mui/joy/CardActions";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import AspectRatio from "@mui/joy/AspectRatio";
import BakeryDiningIcon from "@mui/icons-material/BakeryDining";
import BusinessIcon from "@mui/icons-material/Business";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { useNavigate } from "react-router-dom";

const JobDetails = ({
  content,
  location,
  company,
  customizedForm,
  education,
  experience,
  expiryDate,
  jobType,
  jobLevel,
  jobRole,
  minSalary,
  maxSalary,
  salaryType,
  vacancies,
  postedIn,
  type,
  img,
  logoImg,
  status,
}) => {
  const [jobDetails, setJobDetails] = useState(null);
  const [Submit, setSubmit] = useState(0);
  const [jobs, setJobs] = useState([]);
  const [companyDetails, setCompanyDetails] = useState(null);
  const [relatedJobs, setRelatedJobs] = useState([]);
  const navigate = useNavigate();

  const { jobId } = useParams();
  console.log("Job ID2:", jobId);
  const token = localStorage.getItem("token");

  var amount = 6;
  const location1 = useLocation();
  const { title } = location1.state || {};
  console.log("location", location1);
  // Parse the tags from the URL
  const searchParams = new URLSearchParams(location1.search);
  const fetchJobDetails = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/jobseeker/jobDetails/${jobId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setJobDetails(response.data);
      console.log("Fetched job details:", response.data);
    } catch (error) {
      console.error("Error fetching job details:", error);
    }
  };

  const handleApplyNowClick = (id) => {
    navigate(`/JobSeeker/JobDetails/${id}`, {
      state: { title },
    });
  };

  const fetchCompanyDetails = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/jobseeker/postedCompany/${jobId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setCompanyDetails(response.data);
      console.log("Fetched company details:", response.data);
    } catch (error) {
      console.error("Error fetching company details:", error);
    }
  };

  // Fetch related jobs
  const fetchRelatedJobs = async () => {
    if (!jobId || !token) {
      console.error("Missing jobId or token");
      return;
    }

    try {
      const response = await axios.get(
        `http://localhost:8080/jobseeker/related-jobs/${jobId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setRelatedJobs(response.data || []);
      console.log("Fetched related jobs:", response.data);
    } catch (error) {
      console.error(
        "Error fetching related jobs:",
        error.response || error.message
      );
      setRelatedJobs([]); // Set to an empty array on failure to prevent mapping issues
    }
  };

  useEffect(() => {
    if (jobId && token) {
      fetchCompanyDetails();
      fetchJobDetails();
      fetchRelatedJobs();
    } else {
      console.warn("Job ID or token is missing.");
    }
  }, [jobId, token]);

  const applyhandleChange = (value) => {
    setSubmit(value);
    console.log(Submit);
  };

  if (!jobDetails) {
    return <Typography>Loading...</Typography>;
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
      <Box
        sx={{
          display: "flex",
          mb: 1,
          gap: 1,
          flexDirection: { sm: "row" },
          alignItems: { xs: "start", sm: "center" },
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Breadcrumbs
            size="lg"
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
              href="#some-link"
              fontSize={12}
              fontWeight={500}
              onClick = {() => navigate("/JobSeeker")}
            >
              Dashboard
            </Link>
            <Typography color="primary" fontWeight={500} fontSize={12}>
              Home
            </Typography>
          </Breadcrumbs>
        </Box>

        <Box sx={{ display: "flex" }}>
          {/* <JSSearch /> */}
          <Alert />
          <ProfileDropdown />
        </Box>
      </Box>
      <Box sx={{ borderBottom: "2px solid #e0e0e0" }}>
        <Typography variant="h4">Find a job</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          position: "relative",
        }}
      >
        <Box sx={{ marginTop: "10px" }}>
          {companyDetails && companyDetails.logoImg && (
            <img
              src={companyDetails.logoImg}
              alt="Logo"
              style={{
                width: "100px", // Adjust the size as needed
                height: "100px", // Adjust the size as needed
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
          )}
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginTop: { xs: "16px" },
            justifyContent: "center",
            height: "75%",
          }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "auto", sm: "auto", md: "30px" },
              marginBottom: "4px",
            }}
          >
            {jobDetails.jobTitle}
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: { xs: 1, sm: 1, md: 1, lg: 2 },
              flexDirection: {
                xs: "column",
                sm: "column",
                md: "column",
                lg: "row",
              },
            }}
          >
            {companyDetails ? (
              <>
                <Typography>
                  <LinkIcon />
                  {companyDetails.companyWebsite}
                </Typography>
                <Typography>
                  <LocalPhoneIcon />
                  {companyDetails.contactNumber}
                </Typography>
                <Typography>
                  <EmailIcon />
                  {companyDetails.email}
                </Typography>
              </>
            ) : (
              <Typography>No company details available.</Typography>
            )}
          </Box>
        </Box>

        <Box
          sx={{
            alignItems: "center",
            justifyContent: "center",
            height: "95%",
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            right: 0,
          }}
        >
          <Stack
            direction={{ xs: "column", sm: "column", md: "column", lg: "row" }}
            spacing={2}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "blue",
                height: "42px",
                width: { xs: "50px", sm: "50px", md: "50px", lg: "auto" },
              }}
            >
              <BookmarkBorderIcon sx={{ color: "white" }} />
            </Button>
            {Submit == 0 && (
              <ApplyJob title={title} callback={applyhandleChange}></ApplyJob>
            )}

            {Submit == 1 && (
              <Button sx={{ backgroundColor: "red" }}>
                <Typography
                  sx={{
                    display: {
                      xs: "none",
                      sm: "none",
                      md: "none",
                      lg: "block",
                    },
                    color: "white",
                  }}
                >
                  Pending
                </Typography>
              </Button>
            )}
          </Stack>
          <Typography
            sx={{
              fontSize: "12px",
              marginTop: "3px",
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
            Job expires in :{" "}
            <span style={{ color: "red" }}>{jobDetails.expiryDate}</span>
          </Typography>
        </Box>
      </Box>

      <Box sx={{ display: "flex" }}>
        <Box sx={{ maxWidth: "60%" }}>
          <Stack direction={"column"} sx={{}}>
            <Typography
              sx={{ fontSize: "18px", fontWeight: "500", marginTop: "13px" }}
            >
              Job description
            </Typography>
            {/* Use RenderRichText to render HTML content safely */}
            <RenderRichText text={jobDetails.jobDescription} />
          </Stack>
        </Box>
        <Box sx={{ marginLeft: "150px", minWidth: "40%" }}>
          {Submit == 1 && <AppliedCard></AppliedCard>}
          <Jobcard />
          <Companycard />
        </Box>
      </Box>

      <Box sx={{ border: "2px solid #e0e0e0", marginTop: "10px" }}>
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "auto", sm: "auto", md: "20px" },
            marginBottom: "12px",
            marginTop: "12px",
            marginLeft: "12px",
          }}
        >
          Related Jobs
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(1, 1fr)", // 1 column for extra-small screens (mobile)
              sm: "repeat(2, 1fr)", // 2 columns for small screens (tablet)
              md: "repeat(3, 1fr)", // 3 columns for medium and larger screens (desktop)
            },
            gap: 2,
          }}
        >
          {relatedJobs.length > 0 ? (
            relatedJobs.map((job, index) => (
              <Card
                key={index}
                data-resizable
                sx={{
                  textAlign: "center",
                  alignItems: "center",
                  width: 300,
                  overflow: "auto",
                  resize: "horizontal",
                  "--icon-size": "60px",
                  marginBottom: "15px",
                }}
              >
                <CardOverflow>
                  <AspectRatio
                    sx={{ minWidth: 200, height: 90, marginBottom: "10px" }}
                  >
                    <img
                      src={job.company?.logoImg} // Corrected to use job object
                      loading="lazy"
                      alt=""
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        border: "1px solid #ccc",
                      }}
                    />
                  </AspectRatio>
                </CardOverflow>
                <Typography
                  level="title-lg"
                  sx={{ mt: "calc(var(--icon-size) / 0.8)" }}
                >
                  {job.jobTitle} {/* Corrected to use job.jobTitle */}
                </Typography>
                <Typography>
                  <BusinessIcon /> {job.company?.companyName}{" "}
                  {/* Corrected to use job object */}
                  <LocationOnIcon /> {job.company?.location}{" "}
                  {/* Corrected to use job object */}
                </Typography>
                <CardContent sx={{ fontSize: "17px" }}>
                  {job.jobLevel}
                </CardContent>{" "}
                {/* Corrected to use job object */}
                <CardActions
                  orientation="vertical"
                  buttonFlex={1}
                  sx={{
                    "--Button-radius": "40px",
                    width: "clamp(min(100%, 120px), 50%, min(100%, 160px))",
                  }}
                >
                  <Button
                    variant="solid"
                    sx={{ backgroundColor: "#3f067a" }}
                    onClick={() => handleApplyNowClick(job.id)} 
                  >
                    Apply Now <ArrowRightAltIcon sx={{ marginLeft: "3px" }} />
                  </Button>
                </CardActions>
              </Card>
            ))
          ) : (
            <Typography
              sx={{
                textAlign: "center",
                fontSize: "18px",
                color: "gray",
                marginTop: "20px",
                gridColumn: "span 3", // Make it span across all columns in the grid
              }}
            >
              No related jobs found.
            </Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default JobDetails;
