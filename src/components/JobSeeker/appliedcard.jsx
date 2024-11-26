import React, { useState } from "react";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import TimerIcon from "@mui/icons-material/Timer";
import SchoolIcon from "@mui/icons-material/School";
import WalletIcon from "@mui/icons-material/Wallet";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WorkIcon from "@mui/icons-material/Work";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import Button from "@mui/joy/Button";
import Chip from "@mui/joy/Chip";
import SurveyQuestions from "./surveyQuestions";
import OpenInNew from "@mui/icons-material/OpenInNew";
import Interviewcart from "./interviewcart";
import Meetingview from "./meetingview";

const AppliedCard = ({ status }) => {
  const [state, setState] = useState(1);
  const [meeting, setMeeting] = useState(false);
  const getValuefromChild = (event) => {
    setState(2);
  };

  const companyDetails = [
    ["Applied Date:", "06 March 2006"],
    ["Status :", status],
  ];

  const handleMeetingClick = () => {
    setMeeting(!meeting);
  };

  return (
    <Box sx={{ border: "2px solid #e0e0e0", marginBottom: "3px" }}>
      <Typography
        sx={{
          fontSize: "18px",
          fontWeight: "500",
          marginTop: "13px",
          marginLeft: "13px",
        }}
      >
        Application Details
      </Typography>

      <Box sx={{ marginLeft: "16px", marginTop: "16px", position: "relative" }}>
        {companyDetails.map((item) => (
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "6px",
              flexDirection: { sm: "column", xs: "column", md: "row" },
            }}
            key={item[0]}
          >
            <Typography>{item[0]}</Typography>
            {item[1] === "Pending" && (
              <Chip
                size="md"
                variant="solid"
                sx={{
                  backgroundColor: "yellow",
                  marginRight: 1,
                  color: "black",
                  border: "1px solid #e0e0e0",
                }}
              >
                {" "}
                Pending{" "}
              </Chip>
            )}
            {item[1] === "Active" && (
              <Chip
                size="md"
                variant="solid"
                sx={{ backgroundColor: "green", marginRight: 1 }}
              >
                {" "}
                Active{" "}
              </Chip>
            )}
            {item[1] !== "Active" && item[1] !== "Pending" && (
              <Typography sx={{ marginRight: 1, fontWeight: 500 }}>
                {item[1]}
              </Typography>
            )}
          </Box>
        ))}
      </Box>

      <Box sx={{ marginTop: "13px", marginLeft: "13px", marginBottom: "13px" }}>
        {companyDetails[1][1] === "Active" && state === 1 && (
          <Box>
            <Button
              sx={{ backgroundColor: "blue" }}
              onClick={handleMeetingClick}
            >
              <Typography sx={{ color: "white" }}>
                {meeting ? "Cancel Interview" : "Schedule Interview"}
              </Typography>
            </Button>

            {/* Only show the Meetingview modal if 'meeting' is true */}
            {meeting && (
              <Meetingview status={meeting} callback={getValuefromChild} />
            )}
          </Box>
        )}

        {companyDetails[1][1] === "Pending" && state === 1 && (
          <Button
            component="a"
            href="#as-link"
            startDecorator={<OpenInNew />}
            sx={{ marginTop: "30px" }}
          >
            Download CV
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default AppliedCard;
