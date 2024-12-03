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
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import { Alert } from "@mui/joy";
import Divider from "@mui/joy/Divider";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../../assets/logo.png";
import JSSearch from "../../components/JobSeeker/search";
import ProfileDropdown from "../../components/JobSeeker/ProfileDropDown";
import Alert1 from "../../components/JobSeeker/alert";
const jobs = [
  {
    title: "Networking Engineer",
    location: "Colmbo 06",
    salary: "LKR50k-80k/month",
    type: "Remote",
    dateApplied: "Feb 2, 2024 19:28",
    remaining: "4 Days Remaining",
    favorite: "yes",
    icon: "https://via.placeholder.com/32/00FF00/FFFFFF?text=U",
  },
  {
    title: "Product Designer",
    location: "Nugegoda",
    salary: "LKR50k-80k/month",
    type: "Full Time",
    dateApplied: "Dec 7, 2023 23:26",
    remaining: "4 Days Remaining",
    favorite: "no",
    icon: "https://via.placeholder.com/32/FF0000/FFFFFF?text=P",
  },
  {
    title: "Junior Graphic Designer",
    location: "Kandy",
    salary: "LKR50k-80k/month",
    type: "Casual",
    dateApplied: "Feb 2, 2024 19:28",
    remaining: "4 Days Remaining",
    favorite: "yes",
    icon: "https://via.placeholder.com/32/000000/FFFFFF?text=A",
  },
  {
    title: "Visual Designer",
    location: "Galle",
    salary: "LKR50k-80k/month",
    type: "Contract",
    dateApplied: "Dec 7, 2023 23:26",
    remaining: "Expired",
    favorite: "yes",
    icon: "https://via.placeholder.com/32/0000FF/FFFFFF?text=M",
  },
  {
    title: "Cloud Engineer",
    location: "Colmbo 06",
    salary: "LKR50k-80k/month",
    type: "Remote",
    dateApplied: "Feb 2, 2024 19:28",
    remaining: "4 Days Remaining",
    favorite: "no",
    icon: "https://via.placeholder.com/32/00F000/FFFFFF?text=C",
  },
  {
    title: "Software Engineer",
    location: "Colmbo 02",
    salary: "LKR50k-80k/month",
    type: "Remote",
    dateApplied: "Feb 2, 2024 19:28",
    remaining: "4 Days Remaining",
    favorite: "yes",
    icon: "https://via.placeholder.com/32/FFFFF/FFFFFF?text=S",
  },
  {
    title: "Quality Assurance Engineer",
    location: "Gampaha",
    salary: "LKR50k-80k/month",
    type: "Remote",
    dateApplied: "Feb 2, 2024 19:28",
    remaining: "Expired",
    favorite: "yes",
    icon: "https://via.placeholder.com/32/F0FF00/FFFFFF?text=Q",
  },
  {
    title: "DevOps Engineer",
    location: "Colmbo 06",
    salary: "LKR50k-80k/month",
    type: "Remote",
    dateApplied: "Feb 2, 2024 19:28",
    remaining: "4 Days Remaining",
    favorite: "yes",
    icon: "https://via.placeholder.com/32/000000/FFFFFF?text=D",
  },
  {
    title: "Networking Engineer",
    location: "Mount Lavinia",
    salary: "LKR50k-80k/month",
    type: "Remote",
    dateApplied: "Feb 2, 2024 19:28",
    remaining: "4 Days Remaining",
    favorite: "yes",
    icon: "https://via.placeholder.com/32/0000FF/FFFFFF?text=N",
  },
];

const JobAlert = () => {
  const [notificationList, setNotificationList] = useState();
 
  const token = localStorage.getItem("token");

  
  useEffect(() => {
    const fetchJobDetails = async () => {
      if (!token) {
        setError("Authorization token is missing.");
        return; // Return early if no token is available
      }

      try {
        const response = await axios.get(
          `http://localhost:8080/jobseeker/getNotifications/1`, // API URL
          {
            headers: {
              Authorization: `Bearer ${token}`,  // Authorization header with token
            },
          }
        );
        setNotificationList(response.data);  // Set the fetched data to state
        console.log("Fetched job details:", response.data);  // Optional: for debugging
      } catch (error) {
        setError("Error fetching job details.");
        console.error("Error fetching job details:", error);  // Optional: for debugging
      }
    };

    // Trigger fetch when the token changes
    if (token) {
      fetchJobDetails();
    }
  }, [token]);

  if(notificationList){
    const sortedData = notificationList.sort((a, b) => {
      const dateA = new Date(a[2]);
      const dateB = new Date(b[2]);
      return dateA - dateB; // Ascending order (earliest first)
  });
  }

  const [notifications, setNotifications] = useState([
    { id: 1, message: 'You have a new message!' },
    { id: 2, message: 'Your order has been shipped!' },
    { id: 3, message: 'New update available for your app.' },
  ]);
  
  const removeNotification = (index) => {
    setNotificationList(notificationList.filter((_, i) => i !== index));
  };
  
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 6;

  // Filter out expired jobs
  const activeJobs = jobs.filter((job) => job.remaining !== "Expired");

  // Calculate total pages
  const totalPages = Math.ceil(activeJobs.length / jobsPerPage);

  // Calculate the jobs to display on the current page
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = activeJobs.slice(indexOfFirstJob, indexOfLastJob);

  // Change page function
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/jobseeker/setup", { state: { value: "4" } });
  };

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
        overflow: "auto",
        "&::-webkit-scrollbar": { display: "none" },
      }}
    >
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
        <Box sx={{ width: 130 }}>
          <img src={logo} alt="Logo" />
        </Box>
        <Box sx={{ display: "flex" }}>
          {/* <JSSearch /> */}
          <Alert1 />
          <ProfileDropdown />
        </Box>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" , }}>
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
            Job Alerts
          </Typography>
        </Breadcrumbs>
      </Box>
     
      {/* Notification container */}
      <Box
        sx={{
          width: '80%',
          padding: '16px',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          backgroundColor: 'white',
          ml:'10%',
          mt:'1%'
        }}
      >
  <Box
  sx={{
    width: '80%',
    padding: '16px',
    borderRadius: '8px',
    backgroundColor: 'white',
    mt: '1%',
    boxSizing: 'border-box', // Ensures padding doesn't affect overall width
  }}
>
  <Box
    sx={{
      fontSize: '1.5rem',          // Larger font size for the title
      fontWeight: '600',           // Slightly lighter than bold for a more balanced look
      color: '#2D3A4C',            // Darker, slightly muted gray for readability
      borderRadius: '8px',         // Keep rounded corners
      marginBottom: '0px',        // Space below the title
      letterSpacing: '0.5px',      // Slight spacing between letters for clarity
    }}
  >
    Notifications
  </Box>
</Box>

<Box
  sx={{
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    mt: '1%',
  }}
>
  {notificationList?.sort((a, b) => {
    const dateA = new Date(a[2]);
    const dateB = new Date(b[2]);
    return dateB - dateA;
  }).map((notification, index) => (
    <Alert
      key={index}
      color="success"
      sx={{
        width: '100%',
        marginBottom: '2px', // Increased spacing between alerts
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: '8px', // Rounded corners for the Alert box
       // Soft shadow for better depth
        padding: '1px',
        backgroundColor: 'white', // Light green background for success notifications
      }}
    >
      {notification[1] === "newJob" ? (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            backgroundColor: '#814dde', // Lighter background for job-related notifications
            padding: '16px',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            width: '100%',
            marginBottom: '12px',
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              color: 'white', // Darker green color for the title
              marginBottom: '8px',
            }}
          >
            New Job Posted on {notification[2]}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: '14px',
              color: 'white', // Lighter gray color for the content
            }}
          >
            {notification[0]}
          </Typography>
        </Box>
      ) : notification[1] === "upcoming Events" ? (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            backgroundColor: '#814dde',
            padding: '16px',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            width: '100%',
            marginBottom: '12px',
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              color: 'white',
              marginBottom: '8px',
            }}
          >
            You Have an Upcoming Event:
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: '14px',
              color: 'white',
            }}
          >
            {notification[0]}
          </Typography>
        </Box>
      ) : notification[1] === "newEvent" ? (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            backgroundColor: '#814dde',
            padding: '16px',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            width: '100%',
            marginBottom: '12px',
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              color: 'white',
              marginBottom: '8px',
            }}
          >
            New Event on {notification[2]}:
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: '14px',
              color: 'white',
            }}
          >
            {notification[0]}
          </Typography>
        </Box>
      ) : (
        <div></div>
      )}

<Box
  sx={{
    display: 'flex',
    flexDirection: 'column', // Stack items vertically
    alignItems: 'flex-start', // Align children to the start horizontally
    justifyContent: 'center', // Center content vertically
    height: '100%', // Ensure parent container has height
  }}
>
  {/* Your button and other content */}
  <Button
    variant="plain"
    color="danger"
    onClick={() => removeNotification(index)}
    sx={{
      fontWeight: 'bold',
      marginTop: '8px',
      alignSelf: 'center', // Center the button vertically
      color: '#d32f2f',
      textTransform: 'uppercase',
      padding: '6px 12px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    X
  </Button>
</Box>

    </Alert>
  ))}
</Box>

      </Box>


      {/* Page content */}
      <Box
        sx={{
          paddingTop: '100px',
          textAlign: 'center',
        }}
      >
        <h1>Notification Page</h1>
        <p>This page displays all notifications at the top.</p>
      </Box>
    </Box>
    
  );
};

export default JobAlert;
