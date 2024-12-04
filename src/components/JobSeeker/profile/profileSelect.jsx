import * as React from "react";
import ToggleButtonGroup from "@mui/joy/ToggleButtonGroup";
import Button from "@mui/joy/Button";
import Stack from "@mui/joy/Stack";
import seba from "/seba.jpg";
import { Avatar } from "@mui/joy";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import Input from "@mui/joy/Input"; // Use Input instead of TextField
import { useEffect, useState } from "react";
import axios from "axios";
import { getToken } from "../../../pages/Auth/Auth"; // Assuming this function retrieves the auth token
import Swal from "sweetalert2";

export default function ProfileSelect() {
  const [seekerdetails, setSeekerDetails] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [editDetails, setEditDetails] = useState({
    name: "",
    email: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    role: "", // Role will be set automatically from seekerdetails
  });

  const [errorMessages, setErrorMessages] = useState({});

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

        // Set the editDetails with current user id and role from the fetched data
        setEditDetails({
          name: response.data.user?.name || "", // Set user name
          email: response.data.user?.email || "", // Set user email
          currentPassword: "",
          newPassword: "",
          confirmPassword: "",
          role: response.data.user?.role || "", // Set user role
        });
      })
      .catch((error) => {
        console.error(
          "Error fetching data:",
          error.response ? error.response.data : error.message
        );
      });
  }, []);

  const handleOpenModal = () => {
    setErrorMessages({});
    setModalOpen(true); // Open the modal when clicked
  };

  const handleCloseModal = () => {
    setModalOpen(false); // Close the modal when clicked
  };

  const handleSave = () => {
    const errors = {};

    // Validate passwords
    if (editDetails.newPassword !== editDetails.confirmPassword) {
      errors.passwordMismatch =
        "New password and confirm password do not match.";
    }

    // If there are any errors, set errorMessages and return early
    if (Object.keys(errors).length > 0) {
      setErrorMessages(errors);
      return;
    }

    // Send the updated profile details, including id and role, to backend
    axios
      .put(
        "http://localhost:8080/jobseeker/update-profile",
        {
          id: seekerdetails.user?.id,
          role: seekerdetails.user?.role,
          ...editDetails, // Send all the other fields
        },
        {
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        }
      )
      .then(() => {
        // Fetch updated data and close modal
        return axios.get("http://localhost:8080/jobseeker/getUserDetails", {
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        });
      })
      .then((response) => {
        setSeekerDetails(response.data); // Update seeker details with new data
        handleCloseModal(); // Close the modal

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your profile has been successfully updated",
          showConfirmButton: false,
          timer: 2000,
        });
      })
      .catch((error) => {
        const errorMessage = error.response
          ? error.response.data
          : error.message;
        console.error("Error fetching data:", errorMessage);
        setErrorMessages({ fetchError: errorMessage });
      });
  };

  const details = [
    { label: "Name:", value: seekerdetails.user?.name },
    { label: "Email:", value: seekerdetails.user?.email },
    {
      label: "Status:",
      value: seekerdetails.user?.enabled === true ? "Active" : "Not Active",
    },
  ];

  const [type, setType] = React.useState(1);
  if (!seekerdetails) {
    return <div>Loading...</div>;
  }

  return (
    <Stack sx={{ padding: "10px" }}>
      <ToggleButtonGroup
        value={type}
        onChange={(event, newValue) => setType(newValue || undefined)}
        sx={{ display: "flex", justifyContent: "Center" }}
      >
        <Button sx={{ borderBottom: type === 1 ? "2px solid blue" : "auto" }}>
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
                key={index}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  borderRadius: "8px",
                  backgroundColor: index % 2 === 0 ? "#EDF3FC" : "white",
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
            <Button
              onClick={handleOpenModal}
              sx={{ marginTop: "110px", marginLeft: "390px" }}
            >
              Edit Profile
            </Button>
          </Box>
        </Box>
      )}

      {/* Modal */}
      <Modal open={isModalOpen} onClose={handleCloseModal}>
        <ModalDialog
          aria-labelledby="edit-profile-modal-title"
          sx={{ width: 400 }}
        >
          <Typography id="edit-profile-modal-title" level="h4">
            Edit Profile
          </Typography>
          <Stack spacing={2} mt={2}>
            <Input
              label="Name"
              placeholder="Name"
              value={editDetails.name}
              onChange={(e) =>
                setEditDetails((prev) => ({ ...prev, name: e.target.value }))
              }
            />
            {errorMessages.name && (
              <Typography color="red" sx={{ fontSize: "12px", color: "red" }}>
                {errorMessages.name}
              </Typography>
            )}
            <Input
              label="Email"
              placeholder="Email"
              value={editDetails.email}
              onChange={(e) =>
                setEditDetails((prev) => ({ ...prev, email: e.target.value }))
              }
            />
            {errorMessages.email && (
              <Typography color="red" sx={{ fontSize: "12px", color: "red" }}>
                {errorMessages.email}
              </Typography>
            )}
            <Input
              label="Current Password"
              placeholder="Current Password"
              type="password"
              value={editDetails.currentPassword}
              onChange={(e) =>
                setEditDetails((prev) => ({
                  ...prev,
                  currentPassword: e.target.value,
                }))
              }
            />
            {errorMessages.fetchError && (
              <div className="error-message">{errorMessages.fetchError}</div>
            )}
            <Input
              label="New Password"
              placeholder="New Password"
              type="password"
              value={editDetails.newPassword}
              onChange={(e) =>
                setEditDetails((prev) => ({
                  ...prev,
                  newPassword: e.target.value,
                }))
              }
            />
            <Input
              label="Confirm Password"
              placeholder="Confirm Password"
              type="password"
              value={editDetails.confirmPassword}
              onChange={(e) =>
                setEditDetails((prev) => ({
                  ...prev,
                  confirmPassword: e.target.value,
                }))
              }
            />
            {errorMessages.passwordMismatch && (
              <Typography sx={{ fontSize: "12px", color: "red" }}>
                {errorMessages.passwordMismatch}
              </Typography>
            )}
          </Stack>

          <Button sx={{ marginTop: 2 }} onClick={handleSave}>
            Save Changes
          </Button>
        </ModalDialog>
      </Modal>
    </Stack>
  );
}
