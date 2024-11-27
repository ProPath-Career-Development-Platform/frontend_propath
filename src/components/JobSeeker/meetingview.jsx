import React, { useState, useEffect } from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardActions from "@mui/joy/CardActions";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
// import Select from '@mui/joy/Select';
import Option from "@mui/joy/Option";
import ButtonGroup from "@mui/joy/ButtonGroup";
import Settings from "@mui/icons-material/Settings";
import Chip from "@mui/joy/Chip";
import Badge from "@mui/joy/Badge";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import Select, { selectClasses } from "@mui/joy/Select";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import Grid from "@mui/joy/Grid";
import GroupsSharpIcon from "@mui/icons-material/GroupsSharp";
import ModalClose from "@mui/joy/ModalClose";
import Modal from "@mui/joy/Modal";
import LocationOn from "@mui/icons-material/LocationOn";
import Interviewcart from "./interviewcart";
import axios from "axios";

export default function Meetingview({ status, callback }) {
  const time = ["7.30am", "8.30am", "9.30am", "10.30am", "11.30am"];
  const date = [
    ["Mon", "11", "7 slots"],
    ["Tue", "12", "7 slots"],
    ["Wed", "13", "7 slots"],
    ["Thu", "14", "7 slots"],
    ["Fri", "15", "7 slots"],
    ["Sat", "16", "7 slots"],
    ["Sun", "17", "7 slots"],
  ];
  const [selectedDate, setSelectedDate] = useState(-1);
  const [selectedTime, setSelectedTime] = useState(-1);
  const [datenum, setDatenum] = useState(0);
  const [open, setOpen] = useState(status);
  const [num, setNum] = useState(1);
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [userDetails, setUserDetails] = useState(null);
  const [companyDetails, setCompanyDetails] = useState([]);
  useEffect(() => {
    setOpen(status);
  }, [status]);

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
      } catch (error) {
        console.error("Error fetching applied jobs: ", error);
      }
    };

    fetchAppliedJobs();
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
      } catch (error) {
        console.error("Error fetching company details: ", error);
      }
    };

    fetchCompanyDetails();
  }, [appliedJobs]);

  return (
    <Box>
      {num == 1 && (
        <Modal
          open={open} // Ensure `open` state is used
          onClose={() => {
            setOpen(false);
            callback(); // Trigger callback to close dynamically created root
          }}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Card
            variant="outlined"
            sx={{
              width: "480px",
              margin: "10px",
              height: "auto",
              // to make the card resizable
              overflow: "auto",
            }}
          >
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <GroupsSharpIcon sx={{ fontSize: "50px", color: "#814DDE" }} />
              </Box>
              <ModalClose />
              <Typography sx={{ marginLeft: "10px" }} level="title-lg">
                Interview Scheduler
              </Typography>
              <Typography
                sx={{ marginLeft: "10px", marginTop: "10px" }}
                level="body-sm"
              >
                Please select a preferred date and time
              </Typography>
              <Typography
                sx={{
                  marginLeft: "7px",
                  fontWeight: 500,
                  marginBottom: "10px",
                }}
                level="body-sm"
              >
                <LocationOn />
                {[
                  ...new Set(
                    appliedJobs.map((job) => {
                      const jobProviderId = job.job?.user?.id;
                      const company = companyDetails.find(
                        (company) => company.user?.id === jobProviderId
                      );
                      return company?.location; // Collecting all locations
                    })
                  ),
                ].map((location, index) => (
                  <Typography
                    key={`location-${index}`}
                    sx={{
                      marginLeft: "7px",
                      fontWeight: 500,
                      marginBottom: "5px",
                    }}
                  >
                    {location}
                  </Typography>
                ))}
              </Typography>

              <hr />

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  margin: "10px",
                }}
              >
                <Select
                  sx={{
                    width: "200px",
                  }}
                  defaultValue="September 2023"
                  indicator={<KeyboardArrowDown />}
                  slotProps={{
                    button: {
                      id: "select-field-demo-button",
                      "aria-labelledby":
                        "select-field-demo-label select-field-demo-button",
                    },
                  }}
                >
                  <Option value="September 2023">September 2023</Option>
                  <Option value="October 2023">October 2023</Option>
                </Select>
                <ButtonGroup aria-label="outlined primary button group">
                  <Button
                    onClick={() => datenum != 0 && setDatenum(datenum - 4)}
                  >
                    {<KeyboardArrowLeft />}
                  </Button>
                  <Button
                    onClick={() =>
                      datenum != date.length - 3 && setDatenum(datenum + 4)
                    }
                  >
                    {<KeyboardArrowRight />}
                  </Button>
                </ButtonGroup>
              </Box>
              <Box
                sx={{
                  marginLeft: "10px",
                  marginBottom: "20px",
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "repeat(1, 1fr)", // 1 column for extra-small screens (mobile)
                    sm: "repeat(2, 1fr)", // 2 columns for small screens (tablet)
                    md: "repeat(4, 1fr)", // 3 columns for medium and larger screens (desktop)
                  },

                  gap: 1,
                }}
              >
                {date.slice(datenum, datenum + 4).map((item, index) => (
                  <Button
                    key={`date-${index}`}
                    onClick={() => {
                      setSelectedDate(index), setSelectedTime(-1);
                    }}
                    sx={{
                      width: "100px",
                      height: "125px",
                      display: "flex",
                      flexDirection: "column",
                      backgroundColor:
                        index == selectedDate
                          ? "Var(--joy-palette-primary-100)"
                          : "#fff",
                    }}
                    variant="outlined"
                  >
                    <Typography level="title-lg">{item[0]}</Typography>
                    <Typography level="title-lg">{item[1]}</Typography>
                    <Typography level="body-sm">{item[2]}</Typography>
                  </Button>
                ))}
              </Box>

              {selectedDate != -1 && (
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      marginBottom: "10px",
                      marginLeft: "10px",
                    }}
                  >
                    <Chip
                      sx={{
                        backgroundColor:
                          "linear-gradient(to left, #E1CBFF , #fff, 200px)",
                        marginBottom: "10px",
                      }}
                    >
                      <Typography
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          color: "#814DDE",
                          width: "400px",
                          margin: "5px",
                        }}
                        level="title-md"
                      >
                        <AccessTimeIcon
                          sx={{ color: "#814DDE", marginRight: "5px" }}
                        />
                        Time Slots
                      </Typography>
                    </Chip>
                  </Box>
                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: {
                        xs: "repeat(1, 1fr)", // 1 column for extra-small screens (mobile)
                        sm: "repeat(2, 1fr)", // 2 columns for small screens (tablet)
                        md: "repeat(3, 1fr)", // 3 columns for medium and larger screens (desktop)
                      },

                      gap: 1,
                    }}
                  >
                    {time.map((item, index) => (
                      <Button
                        key={`time-${index}`}
                        onClick={() => {
                          setSelectedTime(index);
                        }}
                        sx={{
                          width: "130px",
                          marginLeft: "10px",
                          backgroundColor:
                            index == selectedTime
                              ? "Var(--joy-palette-primary-100)"
                              : "#fff",
                        }}
                        variant="outlined"
                      >
                        {item}
                      </Button>
                    ))}
                  </Box>
                </Box>
              )}

              <Button
                sx={{
                  width: "30%",
                  display: "flex",
                  justifyContent: "center",
                  marginLeft: "70%",
                  marginTop: "20px",
                }}
                onClick={() => {
                  setNum(2);
                }}
              >
                Confirm
              </Button>
            </CardContent>
          </Card>
        </Modal>
      )}

      {num == 2 && <Interviewcart></Interviewcart>}
    </Box>
  );
}
