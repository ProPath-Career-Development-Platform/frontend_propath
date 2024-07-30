import React, { useEffect, useState } from "react";
import Box from "@mui/joy/Box";
import IconButton from "@mui/joy/IconButton";
import ListIcon from "@mui/icons-material/List";
import GridViewIcon from "@mui/icons-material/GridView";
import Typography from "@mui/joy/Typography";
import Divider from "@mui/joy/Divider";
import axios from "axios";
import JSSearch from "../../components/JobSeeker/search";
import ProfileDropdown from "../../components/JobSeeker/ProfileDropDown";
import Alert from "../../components/JobSeeker/alert";
import JSDropDown from "../../components/JobSeeker/JSDropDown";
import AdvancedFilter from "../../components/JobSeeker/advancedfilter/advancedfilter";
import JSSort from "../../components/JobSeeker/sort";
import JSCard from "../../components/JobSeeker/card";
import Pagination from "../../components/JobSeeker/pagination";
import Banner from "../../components/JobSeeker/banner";
import logo from "../../assets/logo.png";

function decodeJWT(token) {
  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
}

const JobSeekerHome = () => {
  const [type, setType] = useState(1);
  const [jobs, setJobs] = useState([]);
  const [selectedSize, setSelectedSize] = useState(12); // Initial value
  const [pageNumber, setPageNumber] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const token = localStorage.getItem("token");
  const decodedToken = decodeJWT(token);
  console.log("decodedToken", decodedToken);

  const handleSizeChange = (newValue) => {
    const x = newValue.split(" ");
    setSelectedSize(parseInt(x[0], 10));
  };

  const fetchJobs = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/jobseeker/all-jobs",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Fetched job data:", response.data);
      setJobs(response.data);
      setTotalPages(Math.ceil(response.data.length / selectedSize));
    } catch (error) {
      console.error("Error fetching job data:", error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, [selectedSize, pageNumber]);

  const handlePageChange = (value) => {
    setPageNumber(value);
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
          <JSSearch />
          <Alert />
          <ProfileDropdown />
        </Box>
      </Box>

      <Box sx={{ flexGrow: 1 }}>
        <Banner />
      </Box>

      <Box sx={{ marginTop: "40px", marginBottom: "20px" }}>
        <Typography sx={{ fontSize: "25px", fontWeight: 500 }}>
          Related Jobs
        </Typography>
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
        <Box sx={{ display: "flex", gap: 2 }}>
          <JSDropDown
            name={"Job Type "}
            sizes={["Fulltime", "Contract", "Internship", "PartTime", "Casual"]}
            proptype="1"
          />
          <JSDropDown
            name={"Modality "}
            sizes={["Inoffice", "Remote"]}
            proptype="1"
          />
          <JSDropDown
            name={"Job Type "}
            sizes={[
              "Srilanka",
              "Bangladesh",
              "Internship",
              "PartTime",
              "Casual",
            ]}
            proptype="1"
          />
          <JSDropDown
            name={"Salary "}
            sizes={["Fulltime", "Contract", "Internship", "PartTime", "Casual"]}
            proptype="0"
          />
          <AdvancedFilter />
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 1,
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { xs: "start", sm: "center" },
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          <JSSort
            sizes={["6 per Page", "12 per Page", "15 per Page", "18 per Page"]}
            initial="12 per Page"
            onChange={handleSizeChange}
          />
          <JSSort
            sizes={["Latest", "Oldest", "Trending", "Most Viewed"]}
            initial="Latest"
          />

          <Box
            sx={{
              display: "flex",
              borderRadius: "2px",
              border: "1px solid #ccc",
            }}
          >
            {type === 1 ? (
              <IconButton aria-label="list view" onClick={() => setType(0)}>
                <ListIcon />
              </IconButton>
            ) : (
              <IconButton aria-label="grid view" onClick={() => setType(1)}>
                <GridViewIcon />
              </IconButton>
            )}
          </Box>
        </Box>
      </Box>

      <Divider />

      {type === 1 ? (
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            marginLeft: { lg: "55px" },
            gap: 2,
          }}
        >
          {jobs
            .slice(
              pageNumber * selectedSize,
              pageNumber * selectedSize + selectedSize
            )
            .map((job, index) => (
              <JSCard
                jobId={job.id}
                title={job.jobTitle}
                content={job.jobDescription}
                location={job.jobLocation}
                company={job.companyName}
                customQuestion={job.customQuestion}
                education={job.education}
                experience={job.experience}
                expiryDate={job.expiryDate}
                jobType={job.jobType}
                jobLevel={job.jobLevel}
                jobRole={job.jobRole}
                minSalary={job.minSalary}
                maxSalary={job.maxSalary}
                salaryType={job.salaryType}
                vacancies={job.vacancies}
                tags={job.tags}
                type={type}
                img={job.image}
              />
            ))}
        </Box>
      ) : (
        <Box
          sx={{ display: "flex", flexDirection: "column", marginTop: "20px" }}
        >
          {jobs
            .slice(
              pageNumber * selectedSize,
              pageNumber * selectedSize + selectedSize
            )
            .map((job, index) => (
              <JSCard
                jobId={job.id}
                title={job.jobTitle}
                content={job.jobDescription}
                location={job.jobLocation}
                company={job.companyName}
                customQuestion={job.customQuestion}
                education={job.education}
                experience={job.experience}
                expiryDate={job.expiryDate}
                jobType={job.jobType}
                jobLevel={job.jobLevel}
                jobRole={job.jobRole}
                minSalary={job.minSalary}
                maxSalary={job.maxSalary}
                salaryType={job.salaryType}
                vacancies={job.vacancies}
                tags={job.tags}
                postedIn={job.postedIn}
                type={type}
                img={job.image}
              />
            ))}
        </Box>
      )}

      <Box>
        <Pagination
          currentPage={pageNumber}
          total={totalPages}
          callback={handlePageChange}
        />
      </Box>
    </Box>
  );
};

export default JobSeekerHome;
