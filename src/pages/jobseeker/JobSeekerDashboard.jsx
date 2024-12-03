import React from "react";
import Button from "@mui/joy/Button";
import Breadcrumbs from "@mui/joy/Breadcrumbs";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardActions from "@mui/joy/CardActions";
import IconButton from "@mui/joy/IconButton";
import Box from "@mui/joy/Box";
import Table from "@mui/joy/Table";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import Divider from "@mui/joy/Divider";
import EditIcon from "@mui/icons-material/Edit";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import WorkIcon from "@mui/icons-material/Work";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import JSSearch from "../../components/JobSeeker/search";
import Alert from "../../components/JobSeeker/alert";
import ProfileDropdown from "../../components/JobSeeker/ProfileDropDown";
import TopNavBar from "../../components/JobSeeker/TopNavBar";
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import EventOutlinedIcon from '@mui/icons-material/EventOutlined';
import logo from "/logo.png"
import PieChart from "../../components/JobSeeker/JSCharts/PieChart";
import { useState,useEffect } from "react";
import axios from "axios";
import BusinessIcon from "@mui/icons-material/Business";
import AppliedJobs from "./AppliedJobs";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";


const jobs = [
  
  {
    title: "Junior Graphic Designer",
    location: "Kandy",
    salary: "LKR50k-80k/month",
    type: "Casual",
    dateApplied: "Feb 2, 2024 19:28",
    status: "Active",
    icon: "https://via.placeholder.com/32/0000FF/FFFFFF?text=M",
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
    title: "Networking Engineer",
    location: "Colmbo 06",
    salary: "LKR50k-80k/month",
    type: "Remote",
    dateApplied: "Feb 2, 2024 19:28",
    status: "Active",
    icon: "https://via.placeholder.com/32/0000FF/FFFFFF?text=M",
  },
  {
    title: "Product Designer",
    location: "Nugegoda",
    salary: "LKR50k-80k/month",
    type: "Full Time",
    dateApplied: "Dec 7, 2023 23:26",
    status: "Expired",
    icon: "https://via.placeholder.com/32/FF0000/FFFFFF?text=P",
  }
];

const donutData = {
  series: [5, 3],          // 5 active jobs, 3 expired jobs
  labels: ["Active", "Expired"],   // Labels for each slice of the donut chart
  colors: ["#00E396", "#FF4560"],  // Colors for each slice
};


const JobSeekerDashboard= () => {

  const [appliedJobs, setAppliedJobs] = useState([]);
  const [userDetails, setUserDetails] = useState(null);
  const [companyDetails, setCompanyDetails] = useState([]);
  const currentJobs = appliedJobs?.slice(0, 1) || [];
  const [events, setEvents] = useState([]);

 
  

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
        console.log("User : " + userDetails.data)
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
        console.log(appliedJobs);
      } catch (error) {
        console.error("Error fetching applied jobs: ", error);
      }
    };

    fetchAppliedJobs();
  }, [userDetails]);

  useEffect(() => {
    if (!userDetails?.user?.id) return; // Wait until userDetails is available

    const fetchAppliedEvents = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          `http://localhost:8080/jobseeker/getAppliedEvents/${userDetails.user.id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setEvents(response.data);
        console.log(events)
       
      } catch (error) {
        console.error("Error fetching applied events: ", error);
      }
    };

    fetchAppliedEvents();
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
        console.log(companyData)
      } catch (error) {
        console.error("Error fetching company details: ", error);
      }
    };

    fetchCompanyDetails();
  }, [appliedJobs]);
  const [notificationList, setNotificationList] = useState();
 
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/jobseeker/applied-jobs");
  };
 
  

  return (
    <>
      {/* <TopNavBar /> */}
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
        }}
      >
        {/* <Box sx={{ display: "flex", alignItems: "center" }}>
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
          </Breadcrumbs>
        </Box> */}
        <Box
            sx={{
                      display: 'flex',
                      mb: 1,
                      gap: 1,
                      flexDirection: { xs: 'column', sm: 'row' },
                      alignItems: { xs: 'start', sm: 'center' },
                      flexWrap: 'wrap',
                      justifyContent: 'space-between',
                    }}
                      >
                        <Box sx={{width : 130}}>
                        <img src={logo} />
                        </Box>

                          
                        
                      
                        <Box sx={{ display: 'flex' }}>
                            <JSSearch  />
                            <Alert />
                            <ProfileDropdown />
                           


                        </Box>
                      
                      
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
            Dashboard
          </Typography>
        </Box>

        <Divider />
        <Box sx={{display:'flex', mt:'40px' }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)', // 2 equal-width columns
            gap: 2, // space between the grid items
            width: '100%',
            padding: '16px',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            backgroundColor: 'white' // full width
          }}
        >
            <Card variant="soft" color="primary"  invertedColors sx={{maxWidth:'250px'}}>
              <CardContent orientation="horizontal">
                <IconButton variant="soft" color="primary" size="lg" sx={{width:'80px'}} >

                  <WorkOutlineIcon sx ={{fontSize: 50}}/>

                </IconButton>

                <CardContent>
                  <Typography level="body-md">Open Jobs</Typography>
                  <Typography level="h2">560</Typography>
                </CardContent>
              </CardContent>
              <CardActions>
                
                <Button variant="solid" size="sm"
                >
                
                  Job Posts
                </Button>
              </CardActions>
            </Card>
            <Card variant="soft" color="primary"  invertedColors sx={{maxWidth:'250px'}}>
              <CardContent orientation="horizontal">
                <IconButton variant="soft" color="primary" size="lg" sx={{width:'80px'}} >

                  <PeopleAltOutlinedIcon sx ={{fontSize: 50}}/>

                </IconButton>

                <CardContent>
                  <Typography level="body-md">Applied Jobs</Typography>
                  <Typography level="h2">12</Typography>
                </CardContent>
              </CardContent>
              <CardActions>
                
                <Button variant="solid" size="sm"
            
                 >
                
                  view
                </Button>
              </CardActions>
            </Card>
            <Card variant="soft" color="primary"  invertedColors sx={{maxWidth:'250px'}}>
              <CardContent orientation="horizontal">
                <IconButton variant="soft" color="primary" size="lg" sx={{width:'80px'}} >

                  <EventOutlinedIcon sx ={{fontSize: 50}}/>

                </IconButton>

                <CardContent>
                  <Typography level="body-md">Applied Events</Typography>
                  <Typography level="h2">109</Typography>
                </CardContent>
              </CardContent>
              <CardActions>
                
                <Button variant="solid" size="sm"
                >
                
                  Registered Events
                </Button>
              </CardActions>
            </Card>
        </Box>
        <Box sx={{marginLeft:'20px', display:"flex" , padding: '7px', borderRadius: '8px',boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',backgroundColor: 'white' , paddingTop:'25px'}}>
              <Box sx={{ alignItems: "center"  }}>
                <PieChart
              series={donutData.series}
              labels={donutData.labels}
              colors={donutData.colors}
              height={300}
            />
              </Box>
              <Box sx={{ alignItems: "center" }}>
              
            
          
              <PieChart
              series={donutData.series}
              labels={donutData.labels}
              colors={donutData.colors}
              height={300}
            />
              </Box>
        </Box>
        </Box>
        
       
       
        <Box sx={{   
                        display:'flex',
                        flexDirection:'row',
                        width:'100%',
                        justifyContent:'space-evenly',
                        mt:4
                   
            }}>
                 {/* {cardData.map((card, index) => (
                    <SmallCard 
                        key={index}
                        icon={card.icon}
                        heading={card.heading}
                        count={card.count}
            
                        />
                        ))} */}
            
            </Box>


       
        <Box sx={{display:'flex'}}>
          <Box sx={{marginRight:'10px'}}>
          <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "20px",
            gap:'15px',
            marginBottom:"15px"

         
          }}
        >
          <Typography level="h4">Recently Applied</Typography>
          <Link
            component="button"
            onClick={handleNavigate}
            sx={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}
          >
            <Typography level="h5">
              <FontAwesomeIcon icon={faCircleArrowRight} size="sl" />
            </Typography>
          </Link>
          </Box>
          <Table
  hoverRow
  sx={{
    "& tbody": { bgcolor: "background.surface" },
    borderCollapse: "collapse",
    width: "100%",
    border: "1px solid #ddd",
    borderRadius: "8px",
  }}
  size="md"
>
  <thead>
    <tr>
      <th
        style={{
          padding: "12px 16px",
          textAlign: "center",
          fontWeight: "bold",
          color: "#333",
          borderBottom: "2px solid #ddd",
          fontSize: "14px",
        }}
      >
        Job
      </th>

      <th
        style={{
          padding: "12px 16px",
          textAlign: "center",
          fontWeight: "bold",
          color: "#333",
          borderBottom: "2px solid #ddd",
          fontSize: "14px",
        }}
      >
        Action
      </th>
    </tr>
  </thead>
  <tbody sx>
    {appliedJobs.map((job, index) => {
      const jobProviderId = job.job?.user?.id;
      // Find the company that matches the job's user ID
      const company = companyDetails.find(
        (comp) => comp?.user?.id === jobProviderId
      );

      return (
        <tr key={index} style={{ borderBottom: "1px solid #ddd" }}>
          
          <td style={{ padding: "12px 16px" , display:'flex' , minHeight:'130px', alignItems:'center' }}>
          <img
                        src={company?.logoImg || ""}
                        alt={job.job?.jobTitle || "Job"}
                        style={{ width: 56, height: 56, borderRadius: 48 , marginRight:'20px'}}
            />
            <Box>
              <Typography variant="body1" fontWeight="bold">
                <Box>
                {job.job?.jobTitle}{" "}
                </Box>
               
                <Box
                  component="span"
                  sx={{
                    backgroundColor: "lightblue",
                    padding: "2px 4px",
                    borderRadius: "8px",
                    marginLeft: "1px",
                  }}
                >
                  {job.job?.jobType}
                </Box>
              </Typography>
              <Typography level="body-sm">
                <BusinessIcon fontSize="small" /> {company?.companyName || "N/A"}
              </Typography>
              <Typography level="body-sm">
                <LocationOnIcon fontSize="small" /> {company?.location || "N/A"}
              </Typography>
             
            </Box>
          </td>

          <td style={{ padding: "12px 16px", textAlign: "center" ,  minHeight:'130px'}}>
            <Button
              color="primary"
              variant="solid"
              size="sm"
              onClick = {(()=>{
                  navigate(`/JobSeeker/JobDetails/${job.job?.id}`); 
              })}
              


              sx={{
                borderRadius: "8px",
                boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
                padding: "6px 12px",
                textTransform: "none",
              }}
            >
              View Details
            </Button>
          </td>
        </tr>
      );
    })}
  </tbody>
</Table>

          </Box>
          <Box>
          <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "20px",
            marginBottom:"15px",
            gap:'15px'
          }}
        >
          <Typography level="h4">Recently Applied Events</Typography>
          <Link
            component="button"
            onClick={handleNavigate}
            sx={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}
          >
            <Typography level="h5">
               <FontAwesomeIcon icon={faCircleArrowRight} size="sl" />
            </Typography>
          </Link>
          </Box>
          <Table
          hoverRow
          sx={{
            "& tbody": { bgcolor: "background.surface" },
            borderCollapse: "collapse",
            width: "100%",
            border: "1px solid #ddd",
            borderRadius: "8px",
          }}
          size="md"
        >
          <thead>
            <tr>
              <th
                style={{
                  padding: "12px 16px",
                  textAlign: "left",
                  fontWeight: "bold",
                  color: "#333",
                  borderBottom: "2px solid #ddd",
                  fontSize: "14px",
                }}
              >
                Job
              </th>

              <th
                style={{
                  padding: "12px 16px",
                  textAlign: "center",
                  fontWeight: "bold",
                  color: "#333",
                  borderBottom: "2px solid #ddd",
                  fontSize: "14px",
                }}
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {events?.map((event, index) => (
              <tr key={index} style={{ borderBottom: "1px solid #ddd" }}>
                <td style={{ padding: "12px 16px" }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <img
                      src={event?.event?.banner}
                      style={{
                        width: 50,
                        height: 50,
                        borderRadius: "8px",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                      }}
                    />
                    <Box>
                      <Typography variant="body1" fontWeight="bold">
                        {event?.event?.title}{" "}
                        <Box
                          component="span"
                          sx={{
                            backgroundColor: "lightblue",
                            padding: "2px 8px",
                            borderRadius: "8px",
                            fontSize: "12px",
                            fontWeight: "normal",
                          }}
                        >
                          {event?.type}
                        </Box>
                      </Typography>
                      <Typography level="body-sm">
                        <LocationOnIcon fontSize="small" sx={{ marginRight: 1 }} />
                        {event?.event?.location}
                      </Typography>
                      <Typography level="body-sm">
                        <CalendarTodayIcon fontSize="small" sx={{ marginRight: 1 }} />
                        {event?.event?.date}
                      </Typography>
                    </Box>
                  </Box>
                </td>
             
               
                <td style={{ padding: "12px 16px", textAlign: "center" }}>
                  <Button
                    color="primary"
                    variant="solid"
                    size="sm"
                    onClick={
                      ()=>{
                        navigate("/JobSeeker/courses/course/", { state: { id: event?.event?.id } });
                      }
                    }
                    
                    sx={{
                      borderRadius: "8px",
                      boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
                      padding: "6px 12px",
                      textTransform: "none",
                    }}
                  >
                    View Details
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
          </Table>
          </Box>
        
        </Box>
      </Box>
    </>
  );
};

export default JobSeekerDashboard;
