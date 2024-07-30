import React, { useState } from "react";
import axios from "axios";
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
import Sheet from "@mui/joy/Sheet";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import { typographyClasses } from "@mui/joy/Typography";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import Dropdown from "@mui/joy/Dropdown";
import Menu from "@mui/joy/Menu";
import MenuButton from "@mui/joy/MenuButton";
import MenuItem from "@mui/joy/MenuItem";
import MoreVert from "@mui/icons-material/MoreVert";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Divider from "@mui/joy/Divider";
import logo from "/logo.png";
import Navbar1 from "../../components/navbar/Navbar1";
import JSCard from "../../components/JobSeeker/card";
import ProfileDropdown from "../../components/JobSeeker/ProfileDropDown";
import Alert from "../../components/JobSeeker/alert";
import { AlertTitle } from "@mui/material";
import JSSearch from "../../components/JobSeeker/search";
import JSDropDown from "../../components/JobSeeker/JSDropDown";
import Checkbox from "@mui/joy/Checkbox";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import ListIcon from "@mui/icons-material/List";
import GridViewIcon from "@mui/icons-material/GridView";
import { Grid } from "@mui/joy";
import JSSort from "../../components/JobSeeker/sort";
import jobcard from "../../components/JobSeeker/jobcard";
import AdvancedFilter from "../../components/JobSeeker/advancedfilter/advancedfilter";
import BasicCard from "../../components/JobSeeker/course/cardSlider";
import banner from "/banner.png";
import Pagination from "../../components/JobSeeker/pagination";
import ListNew from "../../components/list";
import Footer from "../../components/landingPage/footer/Footer";
import Banner from "../../components/JobSeeker/banner";
import ApplyATS from "../../components/JobSeeker/applyATS";
const cardData = [
  {
    title: "Senior Software Engineer",
    content:
      "Designs, develops, and maintains software applications.",
    location: "Colombo 02",
    company: "WSO2",
    img: "/jobs/logo.png",
  },
  {
    title: "Technical Support Specialist",
    content: "Provides technical assistance and support to clients.",
    location: "Kandy",
    company: "Tech Support Co.",
    img: "/jobs/99x.png",
  },
  {
    title: "Nurse",
    content: "Provides medical care and support to patients.",
    location: "Colombo",
    company: "HealthCare Solutions",
    img: "/jobs/nurse.jpg",
  },
  {
    title: "Teacher",
    content: "Educates students and prepares lesson plans.",
    location: "Kandy",
    company: "Bright Future School",
    img: "/jobs/teacher.jpg",
  },
  {
    title: "Accountant",
    content: "Manages financial records and prepares financial statements.",
    location: "Galle",
    company: "Finance Experts",
    img: "/jobs/accountant.webp",
  },
  {
    title: "Chef",
    content: "Prepares and cooks meals in a restaurant.",
    location: "Matara",
    company: "Royal Hotel",
    img: "/jobs/chef.jpg",
  },
  {
    title: "Electrician",
    content: "Installs and repairs electrical systems.",
    location: "Jaffna",
    company: "Electric Solutions",
    img: "/jobs/electrician.jpg",
  },
  {
    title: "Marketing Specialist",
    content: "Develops and implements marketing strategies.",
    location: "Batticaloa",
    company: "Optimize Marketing",
    img: "/jobs/marketing_specialist.jpg",
  },
  {
    title: "Construction Worker",
    content: "Works on building construction and maintenance projects.",
    location: "Negombo",
    company: "Gold Standard Construction",
    img: "/jobs/construction_worker.webp",
  },
  {
    title: "UI/UX Designer",
    content:
      "Responsible for designing user interfaces and improving user experience.",
    location: "Colombo",
    company: "ABC Design",
    img: "/jobs/sysco.png",
  },
  {
    title: "Pharmacist",
    content: "Dispenses medications and advises on their use.",
    location: "Anuradhapura",
    company: "Slogan Pharmacy",
    img: "/jobs/pharmacist.jpg",
  },
  {
    title: "Driver",
    content: "Operates vehicles to transport goods or passengers.",
    location: "Colombo",
    company: "Logistic Express",
    img: "/jobs/driver.png",
  },
  {
    title: "Sales Associate",
    content: "Assists customers and promotes sales in a retail setting.",
    location: "Kandy",
    company: "Kantoor Sales",
    img: "/jobs/sales_associate.webp",
  },
  {
    title: "Customer Service Representative",
    content: "Handles customer inquiries and resolves issues.",
    location: "Galle",
    company: "Pure Customer Service",
    img: "/jobs/customer_service_representative.webp",
  },
  {
    title: "Senior UI/UX Designer",
    content: "Leads design projects and mentors junior designers.",
    location: "Galle",
    company: "Creative Solutions",
    img: "/jobs/ifs.png",
  },
  {
    title: "Receptionist",
    content: "Manages front desk operations and greets visitors.",
    location: "Matara",
    company: "Creative Analysts",
    img: "/jobs/receptionist.jpg",
  },
  {
    title: "Warehouse Worker",
    content: "Handles inventory and prepares shipments in a warehouse.",
    location: "Jaffna",
    company: "NTC Logistics",
    img: "/jobs/warehouse_worker.png",
  },
  {
    title: "Bank Teller",
    content: "Processes banking transactions and assists customers.",
    location: "Batticaloa",
    company: "commerce Bank",
    img: "/jobs/bank_teller.jpg",
  },
  {
    title: "Fitness Trainer",
    content: "Coaches clients on fitness routines and health.",
    location: "Negombo",
    company: "Fit Life Gym",
    img: "/jobs/fitness_trainer.webp",
  },
  {
    title: "Bartender",
    content: "Prepares and serves drinks in a bar.",
    location: "Anuradhapura",
    company: "Nightlife Bar",
    img: "/jobs/bartender.png",
  },
  {
    title: "Security Guard",
    content: "Ensures the safety and security of a premises.",
    location: "Colombo",
    company: "Apex Security Partners",
    img: "/jobs/security_guard.jpg",
  },
  {
    title: "Plumber",
    content: "Installs and repairs plumbing systems.",
    location: "Kandy",
    company: "Plumbing Pros",
    img: "/jobs/plumber.webp",
  },
  {
    title: "Hair Stylist",
    content: "Provides hair cutting and styling services.",
    location: "Galle",
    company: "Beauty Salon",
    img: "/jobs/hair_stylist.avif",
  },
  {
    title: "Real Estate Agent",
    content: "Assists clients in buying and selling properties.",
    location: "Matara",
    company: "Realty Experts",
    img: "/jobs/real_estate_agent.jpg",
  },
  {
    title: "Junior Graphic Designer",
    content: "Creates visual content under the guidance of senior designers.",
    location: "Jaffna",
    company: "Graphic World",
    img: "/jobs/virtusa.jpg",
  },
  {
    title: "Veterinarian",
    content: "Provides medical care to animals.",
    location: "Jaffna",
    company: "Pet Care Clinic",
    img: "/jobs/veterinarian.jpg",
  },
  {
    title: "Librarian",
    content: "Manages library resources and assists patrons.",
    location: "Batticaloa",
    company: "City Library",
    img: "/jobs/librarian.jpg",
  },
];

const REST_API_BASE_URL = "http://localhost:8080/jobprovider/all-rows";
export const getEmployee = (employeeId) => axios.get(REST_API_BASE_URL);

const JobSeekerHome = () => {
  const [type, setType] = useState(1);
  const people = ["Bob", "Lisa", "Anika", "Obi", "Sara"];
  const pageLimit = 8;
  const [pagePeople, setPagePeople] = useState([]);
  const [page, setPage] = useState(12);

  const handlePageChange = (event, newValue) => {
    const newPage = 12; // Extract the number from the selected value
    setPage(newPage);
    console.log(page);
  };

  const [selectedSize, setSelectedSize] = useState(12); // Initial value
  const total = Math.floor(cardData.length / Number(selectedSize));
  const [PageNumber, setPageNumber] = useState(0);
  const handleSizeChange = (event, newValue) => {
    const x = newValue.split(" ");
    setSelectedSize(x[0]);
    console.log(selectedSize);
  };

  const getValuefromChild = (value) => {
    setPageNumber(value);
    console.log("page Num", PageNumber);
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
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { xs: "start", sm: "center" },
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ width: 130 }}>
          <img src={logo} />
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
            {type == 1 && (
              <IconButton
                aria-label="list view"
                onClick={() => {
                  setType(0);
                }}
              >
                <ListIcon />
              </IconButton>
            )}

            {type == 0 && (
              <IconButton
                aria-label="list view"
                onClick={() => {
                  setType(1);
                }}
              >
                <GridViewIcon />
              </IconButton>
            )}
          </Box>
          <Box></Box>
        </Box>
      </Box>

      {/* {/breadcrumbs over/} */}
      <Divider />
      {type == 1 && (
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(1, 1fr)", // 1 column for extra-small screens (mobile)
              sm: "repeat(2, 1fr)", // 2 columns for small screens (tablet)
              md: "repeat(3, 1fr)", // 3 columns for medium and larger screens (desktop)
            },
            marginLeft: {
              lg: "55px",
            },
            gap: 2,
          }}
        >
          {cardData
            .slice(
              PageNumber * Number(selectedSize),
              PageNumber * Number(selectedSize) + Number(selectedSize)
            )
            .map((card, index) => (
              <JSCard
                key={index}
                title={card.title}
                content={card.content}
                location={card.location}
                company={card.company}
                type={type}
                img={card.img}
              />
            ))}
        </Box>
      )}
      {type == 0 && (
        <Box
          sx={{
            display: "column",
            marginTop: "20px",
          }}
        >
          {cardData
            .slice(
              PageNumber * Number(selectedSize),
              PageNumber * Number(selectedSize) + Number(selectedSize)
            )
            .map((card, index) => (
              <JSCard
                key={index}
                title={card.title}
                content={card.content}
                location={card.location}
                company={card.company}
                type={type}
              />
            ))}
        </Box>
      )}

      <Box>
        <Pagination
          currentPage={PageNumber}
          total={total}
          callback={getValuefromChild}
        />
      </Box>
    </Box>
  );
};

export default JobSeekerHome;
