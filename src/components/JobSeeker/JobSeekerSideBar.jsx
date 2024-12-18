import React, { useState , useContext , useEffect} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Box from "@mui/joy/Box";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemButton, { listItemButtonClasses } from "@mui/joy/ListItemButton";
import ListItemContent from "@mui/joy/ListItemContent";
import Card from "@mui/joy/Card";
import Stack from "@mui/joy/Stack";
import IconButton from "@mui/joy/IconButton";
import LinearProgress from "@mui/joy/LinearProgress";
import Button from "@mui/joy/Button";
import Divider from "@mui/joy/Divider";
import Avatar from "@mui/joy/Avatar";
import seba from "/seba.jpg";

import BookmarkIcon from "@mui/icons-material/Bookmark";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import GroupRoundedIcon from "@mui/icons-material/GroupRounded";
import SupportRoundedIcon from "@mui/icons-material/SupportRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import QuestionAnswerRoundedIcon from "@mui/icons-material/QuestionAnswerRounded";
import Chip from "@mui/joy/Chip";
import LayersIcon from "@mui/icons-material/Layers";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import WorkIcon from "@mui/icons-material/Work";
import PaymentIcon from "@mui/icons-material/Payment";
import GroupsIcon from "@mui/icons-material/Groups";
import { Link as RouterLink } from 'react-router-dom';
import Typography from "@mui/joy/Typography";
import UserContext from "../../utils/userContext";
import axios from "axios";


console.log("Current pathname:", location.pathname);

function Toggler({ defaultExpanded = false, renderToggle, children }) {
  const [open, setOpen] = useState(defaultExpanded);
 
  return (
    <>
      {renderToggle({ open, setOpen })}
      <Box
        sx={{
          display: "grid",
          gridTemplateRows: open ? "1fr" : "0fr",
          transition: "0.2s ease",
          "& > *": {
            overflow: "hidden",
          },
        }}
      >
        {children}
      </Box>
    </>
  );
}

function JobSeekerSideBar() {

  const [userDetails, setUserDetails] = useState(null);
  const navigate = useNavigate();

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

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };


  return (
    <>
      <Box
        sx={{
          minHeight: 0,
          overflow: "hidden auto",
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          [`& .${listItemButtonClasses.root}`]: {
            gap: 1.5,
          },
        }}
      >
        {/* ================ List here ========== */}
        <List
          size="sm"
          sx={{
            gap: 1,
            "--List-nestedInsetStart": "30px",
            "--ListItem-radius": (theme) => theme.vars.radius.sm,
          }}
        >
          <ListItem>
            <ListItemButton
              component={RouterLink}
              to="/jobseeker/home/"
              selected={location.pathname === "/jobseeker/home/"}
            >
              <LayersIcon />
              <ListItemContent>
                <Typography level="title-sm">Home</Typography>
              </ListItemContent>
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton
              component={RouterLink}
              to="/jobseeker/dashboard/"
              selected={location.pathname === "/jobseeker/dashboard/"}
            >
              <LayersIcon />
              <ListItemContent>
                <Typography level="title-sm">Dashboard</Typography>
              </ListItemContent>
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton
              component={RouterLink}
              to="/jobseeker/applied-jobs/"
              selected={location.pathname === "/jobseeker/applied-jobs/"}
            >
              <WorkIcon />
              <ListItemContent>
                <Typography level="title-sm">Applied Jobs</Typography>
              </ListItemContent>
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton
              component={RouterLink}
              to="/jobseeker/favorites/"
              selected={location.pathname === "/jobseeker/favorites/"}
            >
              <BookmarkIcon />
              <ListItemContent>
                <Typography level="title-sm">Favorite Jobs</Typography>
              </ListItemContent>
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton
              role="menuitem"
              component={RouterLink}
              to="/jobseeker/job-alert/"
              selected={location.pathname === "/jobseeker/job-alert/"}
            >
              <NotificationsActiveIcon />
              <ListItemContent>
                <Typography level="title-sm">Notificiations</Typography>
              </ListItemContent>
              {/* <Chip size="sm" color="primary" variant="solid">
                7
              </Chip> */}
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton
              role="menuitem"
              component={RouterLink}
              to="/jobseeker/courses/"
              selected={location.pathname === "/jobseeker/courses/"}
            >
              <NotificationsActiveIcon />
              <ListItemContent>
                <Typography level="title-sm">Events & Meetups</Typography>
              </ListItemContent>
            </ListItemButton>
          </ListItem>

          {/* <ListItem>
            <ListItemButton
              component={RouterLink}
              to="/jobseeker/setup/"
              selected={location.pathname === "/jobseeker/setup/"}
            >
              <SettingsRoundedIcon />
              <ListItemContent>
                <Typography level="title-sm">Set Up</Typography>
              </ListItemContent>
            </ListItemButton>
          </ListItem> */}
        </List>
          
        {/* <Card
          invertedColors
          variant="soft"
          color="warning"
          size="sm"
          sx={{ boxShadow: "none" }}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography level="title-sm">Used space</Typography>
            <IconButton size="sm">
              <CloseRoundedIcon />
            </IconButton>
          </Stack>
          <Typography level="body-xs">
            Your team has used 80% of your available space. Need more?
          </Typography>
          <LinearProgress variant="outlined" value={80} />
          <Button size="sm" variant="solid">
            Upgrade plan
          </Button>
        </Card> */}
      </Box>
      <Divider />
      <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
        <Avatar variant="outlined" size="sm" src="" />
        <Box sx={{ minWidth: 0, flex: 1 }}>
          <Typography level="title-sm">{userDetails?.user?.name}</Typography>
          {/* <Typography level="body-xs">{userDetails?.user?.email}</Typography> */}
        </Box>

        <IconButton size="sm" variant="plain" color="neutral" onClick={handleLogout}>

          <LogoutRoundedIcon />
        </IconButton>
      </Box>
    </>
  );
}

export default JobSeekerSideBar;
