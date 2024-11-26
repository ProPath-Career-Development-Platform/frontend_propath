import * as React from "react";
import ToggleButtonGroup from "@mui/joy/ToggleButtonGroup";
import Button from "@mui/joy/Button";
import Stack from "@mui/joy/Stack";
import { Avatar } from "@mui/joy";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import OpenInNew from "@mui/icons-material/OpenInNew";
import axios from "axios";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useNavigate } from "react-router-dom";

export default function ProfileSelect() {
  const [type, setType] = React.useState(1);
  const [userDetails, setUserDetails] = React.useState(null);
  const navigate = useNavigate();

  React.useEffect(() => {
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

  const userDetailFields = [
    { label: "Name:", value: userDetails?.user?.name || "N/A" },
    { label: "Email:", value: userDetails?.user?.email || "N/A" },
    {
      label: "Status:",
      value: (
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <CheckCircleOutlineIcon color="success" />
          {"Active"}
        </Box>
      ),
    },
    { label: "Location:", value: userDetails?.user?.location || "Sri Lanka" }, // Default location
  ];

  return (
    <Stack sx={{ padding: "10px" }}>
      <ToggleButtonGroup
        value={type}
        onChange={(event, newValue) => setType(newValue || undefined)}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Button
          sx={{ borderBottom: type === 1 ? "2px solid blue" : "auto" }}
        >
          Profile Details
        </Button>
      </ToggleButtonGroup>

      {type === 1 && (
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
              src={userDetails?.user?.profilePicture || "/seba.jpg"}
              sx={{
                width: "150px",
                height: "150px",
                borderRadius: "50%",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              }}
            />
            <Box sx={{ mt: "20px", mb: "20px", textAlign: "center" }}>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {userDetails?.user?.name || "N/A"}
              </Typography>
              <Typography variant="body1" sx={{ fontSize: "13px" }}>
                {userDetails?.user?.email || "N/A"}
              </Typography>
              <Typography variant="body1" sx={{ fontSize: "13px" }}>
                {userDetails?.user?.location || "Sri Lanka"}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ width: "500px" }}>
            {userDetailFields.map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  borderRadius: "8px",
                  backgroundColor: index % 2 === 0 ? "#EDF3FC" : "white",
                  justifyContent: "space-between",
                  padding: "10px",
                }}
              >
                <Typography sx={{ lineHeight: "50px" }}>
                  {item.label}
                </Typography>
                <Typography sx={{ lineHeight: "50px" }}>
                  {item.value}
                </Typography>
              </Box>
            ))}
            <Button
              component="a"
              href="/download-cv"
              startDecorator={<OpenInNew />}
              sx={{ marginTop: "30px" }}
            >
              Download CV
            </Button>
          </Box>
        </Box>
      )}
    </Stack>
  );
}
