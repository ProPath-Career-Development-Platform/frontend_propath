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
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import { format, isBefore, isToday } from "date-fns";

export default function Meetingview({
  status,
  callback,
  jobId,
  location,
  companyName,
  companyLogo,
}) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [open, setOpen] = useState(status);
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [userDetails, setUserDetails] = useState(null);
  const [selectedInterviewId, setSelectedInterviewId] = useState(null);
  const [companyDetails, setCompanyDetails] = useState([]);
  const [interviewDetails, setInterviewDetails] = useState([]);
  const [updateInterview, setUpdateInterview] = useState(false);
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

  const handleOkay = () => {
    window.location.reload("/jobseeker/applied-jobs");
  };

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

  const [availableDates, setAvailableDates] = useState([]);
  const [timeSlots, setTimeSlots] = useState([]);
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [confirmedDate, setConfirmedDate] = useState(null);
  const [confirmedTime, setConfirmedTime] = useState(null);

  useEffect(() => {
    const today = new Date();
    const dates = [
      ...new Set(
        interviewDetails
          .map((interview) => interview.interviewDate)
          .filter((date) => new Date(date) > today) // Filter out past and current dates
      ),
    ];
    setAvailableDates(dates);

    // Pre-select the first available future date if dates exist
    if (dates.length > 0) {
      setSelectedDate(dates[0]);
    }
  }, [interviewDetails]);

  const formatDate = (date) => {
    const [month, day, year] = date.split("/");
    return `${day}/${month}/${year}`;
  };

  // Update time slots and IDs when the date changes
  useEffect(() => {
    if (selectedDate) {
      const slots = interviewDetails
        .filter((interview) => interview.interviewDate === selectedDate)
        .flatMap((interview) =>
          interview.timeSlot.map((time) => ({ time, id: interview.id }))
        );
      setTimeSlots(slots);
    }
  }, [selectedDate, interviewDetails]);

  const handleTimeSlotSelection = (time, id) => {
    setSelectedTime(time);
    setSelectedInterviewId(id);
  };
  const handleConfirm = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.put(
        `http://localhost:8080/jobseeker/update-interview/${selectedInterviewId}`,
        {
          user: {
            id: userDetails.user.id,
          },
          interviewDate: selectedDate,
          timeSlot: [selectedTime],
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Interview confirmed: ", response.data);
      setConfirmedDate(selectedDate);
      setConfirmedTime(selectedTime);
      console.log(selectedDate, selectedTime);
      setSuccessMessage("Interview successfully scheduled!");
    } catch (error) {
      console.error("Error confirming interview: ", error);
      alert("Failed to schedule interview. Please try again later.");
    }
  };

  useEffect(() => {
    if (!selectedDate) return;

    const slots = interviewDetails
      .filter((interview) => interview.interviewDate === selectedDate)
      .flatMap((interview) =>
        interview.timeSlot.map((time) => ({
          time,
          id: interview.id,
          userId: interview.user?.id || null,
        }))
      );

    setTimeSlots((prevSlots) => {
      if (JSON.stringify(prevSlots) !== JSON.stringify(slots)) {
        return slots;
      }
      return prevSlots;
    });
  }, [selectedDate, interviewDetails]);

  return (
    <Box>
      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
          callback();
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
            overflow: "auto",
          }}
        >
          <CardContent>
            <Typography sx={{ marginLeft: "10px" }} level="title-lg">
              Interview Scheduler
            </Typography>
            <Typography
              sx={{
                marginLeft: "7px",
                fontWeight: 500,
                marginBottom: "10px",
              }}
              level="body-sm"
            >
              <QueryBuilderIcon sx={{ color: "green" }} />
              <Typography
                sx={{
                  marginLeft: "2px",
                  fontWeight: 500,
                  marginBottom: "1px",
                }}
              >
                <Typography
                  sx={{
                    marginLeft: "1px",
                    fontWeight: 500,
                    marginBottom: "1px",
                  }}
                  level="body-sm"
                >
                  <Typography
                    sx={{
                      marginLeft: "1px",
                      fontWeight: 500,
                      marginBottom: "1px",
                    }}
                  >
                    {interviewDetails.length > 0
                      ? interviewDetails[0].duration + " minutes"
                      : "No duration available"}
                  </Typography>
                </Typography>
              </Typography>
            </Typography>
            <Typography level="body-sm" sx={{ marginTop: "10px" }}>
              Please select a preferred date and time for your interview.
            </Typography>
            <Box sx={{ marginTop: "20px" }}>
              {/* Date Dropdown */}
              {availableDates.length > 0 ? (
                <Select
                  sx={{ width: "200px" }}
                  value={selectedDate}
                  onChange={(event, newValue) => setSelectedDate(newValue)}
                  indicator={<KeyboardArrowDown />}
                >
                  {availableDates.map((date, index) => (
                    <Option key={index} value={date}>
                      {formatDate(date)}
                    </Option>
                  ))}
                </Select>
              ) : (
                <Typography level="body-sm" sx={{ color: "red" }}>
                  No available dates for interviews.
                </Typography>
              )}
            </Box>
            {selectedDate && availableDates.length > 0 && (
              <Box sx={{ marginTop: "20px" }}>
                <Typography level="body-sm">Available Time Slots:</Typography>
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: {
                      xs: "repeat(2, 1fr)",
                      sm: "repeat(3, 1fr)",
                    },
                    gap: 2,
                    marginTop: "10px",
                  }}
                >
                  {timeSlots.map((slot) => (
                    <Button
                      key={slot.id}
                      onClick={() =>
                        handleTimeSlotSelection(slot.time, slot.id)
                      }
                      sx={{
                        width: "130px",
                        backgroundColor:
                          slot.userId === null
                            ? selectedTime === slot.time
                              ? "green"
                              : "#fff"
                            : "gray",
                        color:
                          slot.userId === null
                            ? selectedTime === slot.time
                              ? "#fff"
                              : "inherit"
                            : "#fff",
                        borderColor:
                          slot.userId === null
                            ? selectedTime === slot.time
                              ? "green"
                              : "gray"
                            : "gray",
                        cursor:
                          slot.userId === null ? "pointer" : "not-allowed",
                        "&:hover": {
                          backgroundColor:
                            slot.userId === null
                              ? selectedTime === slot.time
                                ? "darkgreen"
                                : "lightgray"
                              : "gray",
                        },
                      }}
                      disabled={slot.userId !== null} // Disable button if userId is not null
                      variant="outlined"
                    >
                      {slot.time} {/* Display the time property */}
                    </Button>
                  ))}
                </Box>
              </Box>
            )}
            {/* <Button
              sx={{
                marginTop: "20px",
                width: "100%",
              }}
              onClick={handleConfirm}
            >
              Confirm
            </Button> */}
            {!selectedDate || !selectedTime ? (
              <Button
                sx={{
                  marginTop: "20px",
                  width: "100%",
                }}
                onClick={handleOkay}
              >
                Okay
              </Button>
            ) : (
              <Button
                sx={{
                  marginTop: "20px",
                  width: "100%",
                }}
                onClick={handleConfirm}
              >
                Confirm
              </Button>
            )}
            
            {successMessage && (
              <Box sx={{ marginTop: "20px" }}>
                <Interviewcart
                  jobId={jobId}
                  companyName={companyName}
                  companyLogo={companyLogo}
                  companyLocation={location}
                  selectedDate={confirmedDate}
                  selectedTime={confirmedTime}
                />
              </Box>
            )}
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
          </CardContent>
        </Card>
      </Modal>
    </Box>
  );
}
