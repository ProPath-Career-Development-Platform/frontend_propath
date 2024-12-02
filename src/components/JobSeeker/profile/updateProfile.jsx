import * as React from "react";
import ToggleButtonGroup from "@mui/joy/ToggleButtonGroup";
import Button from "@mui/joy/Button";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import Stack from "@mui/joy/Stack";
import seba from "/seba.jpg";
import { Avatar } from "@mui/joy";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import OpenInNew from "@mui/icons-material/OpenInNew";
import { useEffect, useState } from "react";
import axios from "axios";
import { getToken } from "../../../pages/Auth/Auth";
import { useNavigate } from "react-router-dom";
import TopNavBar from "../../JobSeeker/TopNavBar";
<TopNavBar />

export default function UpdateProfile() {
  const [seekerdetails, setSeekerDetails] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/jobseeker/getUserDetails", {
        headers: {
          Authorization: `Bearer ${getToken()}`, // Include the token in the headers
        },
      })
      .then((response) => {
        setSeekerDetails(response.data); // Store the response data in state
        console.log("Response Data: ", response.data); // Log the response data
      })
      .catch((error) => {
        console.error(
          "Error fetching data:",
          error.response ? error.response.data : error.message
        );
      });
  }, []);

  const navigate = useNavigate();

  const handleSave = () => {};


  const details = [
    { label: "Name:", value: seekerdetails.user?.name },
    { label: "Email:", value: seekerdetails.user?.email },
    {
      label: "Status:",
      value: seekerdetails.user?.enabled == true ? "Active" : "Not Active",
    },
  ];
  const [type, setType] = React.useState(1);
  return (
    <Stack sx={{ padding: "10px" }}>
      <ToggleButtonGroup
        value={type}
        onChange={(event, newValue) => setType(newValue || undefined)}
        sx={{ display: "flex", justifyContent: "Center" }}
      >
        <Button sx={{ borderBottom: type == 1 ? "2px solid blue" : "auto" }}>
          Profile Details
        </Button>
      </ToggleButtonGroup>

      {type == 1 && (
        <Box sx={{ display: "flex", gap: 3, mt: "40px" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: 3,
              backgroundColor: "#EDF3FC",
              borderRadius: "12px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
              width: "400px",
              margin: "0 auto",
            }}
          >
            <Avatar
              src={seba}
              sx={{
                width: "150px",
                height: "150px",
                borderRadius: "50%",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              }}
            />
            <Box sx={{ mt: "20px", mb: "20px", textAlign: "center" }}>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {seekerdetails.user?.name}
              </Typography>
              <Typography variant="body1" sx={{ fontSize: "13px" }}>
                {seekerdetails.user?.email}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ width: "500px" }}>
            {details.map((item, index) => (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  borderRadius: "8px",
                  backgroundColor: index % 2 == 0 ? "#EDF3FC" : "white",
                  justifyContent: "space-between",
                }}
              >
                <Box sx={{ marginLeft: "50px" }}>
                  <Typography sx={{ lineHeight: "50px" }}>
                    {item.label}{" "}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                >
                  <Typography sx={{ lineHeight: "50px" }}>
                    {item.value}{" "}
                  </Typography>
                </Box>
              </Box>
            ))}
            <Button sx={{ marginTop: "110px", marginLeft: "390px" }}>
              Save
            </Button>
            <Box></Box>
          </Box>
        </Box>
      )}
    </Stack>
  );
}
