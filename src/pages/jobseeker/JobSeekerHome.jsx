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
import TopNavBar from "../../components/JobSeeker/TopNavBar";

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
];

const JobSeekerHome = () => {
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
          overflow: "auto",
          maxHeight: "calc(100vh - 10px)",
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
            Overview
          </Typography>
        </Box>

        <Divider />

        <Box sx={{ alignItems: "center", marginTop: "20px" }}>
          <Typography color="primary" fontSize="lg" fontWeight="lg">
            Hello, Siriwat K.
          </Typography>

          <Typography fontSize="md" textColor="text.secondary" lineHeight="lg">
            Here is your daily activities and job alerts
          </Typography>
        </Box>

        <Box
          sx={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
            gap: 15,
            marginTop: "20px",
          }}
        >
          <Card variant="soft" color="primary" invertedColors>
            <CardContent orientation="horizontal">
              <IconButton
                variant="soft"
                color="primary"
                size="lg"
                sx={{ width: "80px" }}
              >
                <WorkOutlineIcon sx={{ fontSize: 50 }} />
              </IconButton>

              <CardContent>
                <Typography level="body-md">Applied Jobs</Typography>
                <Typography level="h2">589</Typography>
              </CardContent>
            </CardContent>
            <CardActions>
              <Button variant="solid" size="sm">
                See Jobs
              </Button>
            </CardActions>
          </Card>

          <Card variant="soft" color="warning" invertedColors>
            <CardContent orientation="horizontal">
              <IconButton
                variant="soft"
                color="primary"
                size="lg"
                sx={{ width: "80px" }}
              >
                <BookmarkBorderOutlinedIcon sx={{ fontSize: 50 }} />
              </IconButton>

              <CardContent>
                <Typography level="body-md">Favorite Jobs</Typography>
                <Typography level="h2">238</Typography>
              </CardContent>
            </CardContent>
            <CardActions>
              <Button variant="solid" size="sm">
                See Jobs
              </Button>
            </CardActions>
          </Card>

          <Card variant="soft" color="success" invertedColors>
            <CardContent orientation="horizontal">
              <IconButton
                variant="soft"
                color="primary"
                size="lg"
                sx={{ width: "80px" }}
              >
                <NotificationsActiveOutlinedIcon sx={{ fontSize: 50 }} />
              </IconButton>

              <CardContent>
                <Typography level="body-md">Job Alerts</Typography>
                <Typography level="h2">574</Typography>
              </CardContent>
            </CardContent>
            <CardActions>
              <Button variant="solid" size="sm">
                See Jobs
              </Button>
            </CardActions>
          </Card>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <Typography level="h4">Recently Applied</Typography>
          <Link
            component="button"
            onClick={handleNavigate}
            sx={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}
          >
            <Typography level="h5">
              View All <FontAwesomeIcon icon={faCircleArrowRight} size="sl" />
            </Typography>
          </Link>
        </Box>

        <Table
          hoverRow
          sx={{ "& tbody": { bgcolor: "background.surface" } }}
          size="md"
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
            {jobs.map((job, index) => (
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
                  <Button color="primary" variant="solid" size="sm">
                    View Details
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Box>
    </>
  );
};

export default JobSeekerHome;
