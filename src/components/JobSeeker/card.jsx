import * as React from "react";
import { useState, useEffect } from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardActions from "@mui/joy/CardActions";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Typography from "@mui/joy/Typography";
import BakeryDiningIcon from "@mui/icons-material/BakeryDining";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BusinessIcon from "@mui/icons-material/Business";
import { Box } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { useNavigate } from "react-router-dom";
import wso2img from "../../assets/wso2.png";
import sysco from "../../assets/sysco.png";
import axios from "axios";

export default function JSCard({
  jobId,
  title,
  content,
  location,
  company,
  customizedForm,
  applicantCount,
  education,
  experience,
  expiryDate,
  jobType,
  jobLevel,
  jobRole,
  logoImg,
  maxSalary,
  minSalary,
  postedIn,
  tags,
  user,
  type,
  img,
}) {
  const navigate = useNavigate();

  const handleApplyNowClick = () => {
    console.log("Job ID: ", jobId);

    // Ensure tags is an array and join them into a comma-separated string
    const tagsParam = Array.isArray(tags) ? tags.join(",") : "";

    // Encode the tags for safe inclusion in the URL
    const encodedTags = encodeURIComponent(tagsParam);

    // Navigate to the JobDetails page with the jobId and tags
    navigate(`/JobSeeker/JobDetails/${jobId}`, {
      state: { title },
    });
  };

  const [companyDetails, setCompanyDetails] = useState(null);
  const [userDetails, setUserDetails] = useState(null);
  const [checkUserAlreadyApplied, setCheckUserAlreadyApplied] = useState();
  const fetchCompanyDetails = async () => {
    const token = localStorage.getItem("token");
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
      // console.log("Fetched company details:", response.data);
    } catch (error) {
      console.error("Error fetching company details:", error);
    }
  };
  const fetchUserDetails = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        `http://localhost:8080/jobseeker/getUserDetails`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      // console.log("User details:", response.data);
      setUserDetails(response.data); // Update user details here
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };
  useEffect(() => {
    if (jobId) {
      fetchCompanyDetails();
      fetchUserDetails();
    } else {
      console.error("Job ID not found");
    }
  }, [jobId]);

  useEffect(() => {
    if (userDetails) {
      const checkUserApplied = async () => {
        try {
          const token = localStorage.getItem("token");
          const userId = userDetails?.user?.id;
          console.log("User ID:", userId);
          const response = await axios.get(
            `http://localhost:8080/jobseeker/check-applied/${userId}/${jobId}`,
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );
          // console.log("User already applied:", response.data);
          setCheckUserAlreadyApplied(response.data);
        } catch (error) {
          console.error("Error checking if user already applied:", error);
        }
      };

      checkUserApplied();
    }
  }, [userDetails, jobId]);

  if (type === 1) {
    return (
      <Card
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
          <AspectRatio sx={{ minWidth: 200, height: 90, marginBottom: "10px" }}>
            <img
              src={img}
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
          {title}
        </Typography>
        <Typography>
          <BusinessIcon /> {company}
          <LocationOnIcon /> {location}
        </Typography>
        <CardContent sx={{ fontSize: "17px" }}>{jobLevel}</CardContent>
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
            sx={{
              backgroundColor: checkUserAlreadyApplied ? "grey" : "#3f067a",
              color: checkUserAlreadyApplied ? "white" : "white",
              "&:hover": {
                backgroundColor: checkUserAlreadyApplied ? "grey" : "#2c054d",
              },
            }}
            onClick={handleApplyNowClick}
          >
            {checkUserAlreadyApplied ? "Applied" : "Apply Now"}{" "}
            <ArrowRightAltIcon sx={{ marginLeft: "3px" }} />
          </Button>
        </CardActions>
      </Card>
    );
  } else {
    return (
      <Card
        data-resizable
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          width: "100%",
          overflow: "auto",
          resize: "horizontal",
          "--icon-size": "60px",
          padding: 2,
          gap: 2,
          margin: "20px",
          border: "1px solid #ccc",
          position: "relative",
          maxHeight: "25%",
        }}
      >
        <CardOverflow sx={{ top: "8px" }}>
          <AspectRatio
            variant="outlined"
            color="warning"
            ratio="1"
            sx={{
              m: "auto",
              borderRadius: "50%",
              width: "var(--icon-size)",
              boxShadow: "sm",
              position: "relative",
            }}
          >
            <div>
              <BakeryDiningIcon color="warning" sx={{ fontSize: "2.5rem" }} />
            </div>
          </AspectRatio>
        </CardOverflow>
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: 1,
            marginLeft: "20px",
            position: "relative",
            top: "10px",
          }}
        >
          <Typography level="title-lg">
            {title}
            <BusinessIcon sx={{ marginLeft: "20px" }} /> {company}
            <LocationOnIcon sx={{ marginLeft: "20px" }} /> {location}
          </Typography>
          <CardContent sx={{ maxWidth: "100%" }}>{jobLevel}</CardContent>
          <CardActions
            sx={{
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            <Button
              variant="solid"
              color="warning"
              sx={{
                maxWidth: "20%",
                position: "absolute",
                right: "10px",
                top: "14px",
              }}
              onClick={handleApplyNowClick}
            >
              Apply Now <ArrowRightAltIcon sx={{ marginLeft: "3px" }} />
            </Button>
          </CardActions>
        </Box>
      </Card>
    );
  }
}