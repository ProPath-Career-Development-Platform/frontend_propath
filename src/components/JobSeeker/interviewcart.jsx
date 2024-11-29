import * as React from "react";
import Avatar from "@mui/joy/Avatar";
// import AvatarGroup from '@mui/joy/AvatarGroup';
import Box from "@mui/joy/Box";
// import Button from '@mui/joy/Button';
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
// import CardActions from '@mui/joy/CardActions';
// import IconButton from '@mui/joy/IconButton';
import Typography from "@mui/joy/Typography";
// import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import ListItemButton from "@mui/joy/ListItemButton";
import Home from "@mui/icons-material/Home";
import Apps from "@mui/icons-material/Apps";
import Chip from "@mui/joy/Chip";
import Button from "@mui/joy/Button";
import Divider from "@mui/joy/Divider";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { AccessTime } from "@mui/icons-material";
import Table from "@mui/joy/Table";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Modal from "@mui/joy/Modal";
import axios from "axios";
import { useEffect, useState } from "react";
import LocationOn from "@mui/icons-material/LocationOn";
import { useNavigate } from "react-router-dom";

const getDayOfWeek = (dateString) => {
  const date = new Date(dateString);
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return daysOfWeek[date.getDay()];
};

const formatDate = (date) => {
  const [month, day, year] = date.split("/");
  return `${day}/${month}/${year}`;
};

export default function Interviewcart({
  jobId,
  companyName,
  companyLogo,
  companyLocation,
  selectedDate,
  selectedTime,
}) {
  const [open, setOpen] = React.useState(true);
  const [interviewDetails, setInterviewDetails] = useState([]);
  const dayOfWeek = getDayOfWeek(selectedDate);

  useEffect(() => {
    const fetchInterviewDetails = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          `http://localhost:8080/jobseeker/interviews/${jobId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setInterviewDetails(response.data);
      } catch (error) {
        console.error("Error fetching interview details: ", error);
      }
    };

    fetchInterviewDetails();
  }, [jobId]);

  const handleClose = () => {
    window.location.href = "/jobseeker/applied-jobs";
  };

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        variant="outlined"
        sx={{
          width: 520,
          height: "auto",
          // to make the card resizable
          overflow: "auto",
          resize: "horizontal",
          backgroundColor: "rgb(245 245 245)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* <Avatar src="/static/images/avatar/1.jpg" size="lg" />
        <AvatarGroup size="sm" sx={{ '--Avatar-size': '28px' }}>
          <Avatar src="/static/images/avatar/2.jpg" />
          <Avatar src="/static/images/avatar/3.jpg" />
          <Avatar src="/static/images/avatar/4.jpg" />
          <Avatar>+4K</Avatar>
        </AvatarGroup> */}
        </Box>
        <CardContent>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CheckCircleOutlineIcon sx={{ color: "green", fontSize: "50px" }} />
          </Box>
          <Typography level="title-lg" sx={{ textAlign: "center" }}>
            Thank you! Your interview time slot is confirmed
          </Typography>
          <Box sx={{ display: "flex", gap: 1, alignItem: "center" }}>
            <Chip
              sx={{
                border: "#3f067a solid 1px",
                backgroundColor: "rgb(226 232 240)",
                margin: "auto",
                color: "#3f067a",
                paddingLeft: 0,
              }}
              variant="soft"
            >
              <Chip
                sx={{ backgroundColor: "rgb(134 239 172)", margin: "2px" }}
                variant="soft"
              >
                Email will be sent.
              </Chip>

              <Chip sx={{ backgroundColor: "rgb(226 232 240)" }} variant="soft">
                Check your inbox for an email with all the details!
              </Chip>
            </Chip>
          </Box>
          <Typography level="body-sm">
            <Card
              variant="outlined"
              sx={{
                width: "auto",
                // to make the card resizable
                overflow: "auto",
                margin: "10px",
                resize: "horizontal",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              ></Box>
              <CardContent>
                <Typography level="body-xs">Your interview in </Typography>
                <Typography
                  sx={{
                    fontSize: "20px",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                  level="title-lg"
                >
                  {companyName}
                  <Avatar
                    sx={{
                      marginTop: "-20px",
                    }}
                    src={companyLogo}
                    size="lg"
                  />
                </Typography>
                <hr />
                <Table aria-label="basic table">
                  <tbody>
                    <tr
                      sx={{ display: "flex", justifyContent: "spacebetween" }}
                    >
                      <td>
                        <AccessTimeIcon />
                        Time
                      </td>

                      <td>
                        {dayOfWeek}, {formatDate(selectedDate)}, {selectedTime}{" "}
                        (India Standard Time - Colombo)
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <LocationOn />
                        Location
                      </td>
                      <td>{companyLocation}</td>
                    </tr>
                    <tr>
                      <td>
                        <FormatAlignLeftIcon />
                        Details
                      </td>
                      <td>we've sent and email with your interview details</td>
                    </tr>
                  </tbody>
                </Table>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    marginLeft: "9vw",
                    width: "70px",
                    backgroundColor: "rgb(134 239 172)",
                    "&:hover": {
                      backgroundColor: "#0BDA51", 
                    },
                  }}
                  onClick={handleClose}
                >
                  Finish
                </Button>
              </CardContent>
            </Card>
          </Typography>
        </CardContent>
      </Card>
    </Modal>
  );
}
