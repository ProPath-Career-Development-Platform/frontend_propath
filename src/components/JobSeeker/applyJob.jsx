import React, { useState, useEffect, useRef } from "react";
import {
  Button,
  Modal,
  ModalDialog,
  DialogTitle,
  Stack,
  Box,
  Typography,
  Avatar,
  FormControl,
  FormLabel,
  Input,
} from "@mui/joy";
import IndicatorStepper from "./stepper";
import SurveyQuestions from "./surveyQuestions";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import seba from "/seba.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { keyframes } from "@emotion/react";
import { useNavigate } from "react-router-dom";

export default function AppliedJob() {
  const scaleFadeIn = keyframes`
    0% { transform: scale(0); opacity: 0; }
    50% { transform: scale(1.1); opacity: 0.5; }
    100% { transform: scale(1); opacity: 1; }
  `;

  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1); // 1: Contact Info, 2: Survey, 3: Success
  const inputCvRef = useRef(null);
  const [showIcon, setShowIcon] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setShowIcon(true);

    if (step === 3) {
      // Redirect to the home page after 5 seconds
      const timer = setTimeout(() => navigate("/jobseeker"), 5000);

      // Cleanup the timer when the component unmounts
      return () => clearTimeout(timer);
    }
  }, [step, navigate]);

  const handleCvUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.size < 10000000) {
      console.log("CV uploaded:", file.name);
    } else {
      alert("File size exceeds 10MB.");
    }
  };

  const submitContactInfo = () => setStep(2);

  const completeSurvey = () => setStep(3);

  return (
    <>
      <Button sx={{ backgroundColor: "blue" }} onClick={() => setOpen(true)}>
        <Typography
          sx={{ display: { xs: "none", lg: "block" }, color: "white" }}
        >
          Apply Now
        </Typography>
      </Button>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: "flex", justifyContent: "center", overflow: "auto" }}
      >
        <ModalDialog
          sx={{
            width: "90vw", // Adjust the width dynamically based on viewport size
            maxWidth: "600px", // Set a maximum width for the modal
            padding: "20px",
          }}
        >
          <Box sx={{ margin: "15px 0" }}>
            <IndicatorStepper callback={setStep} num={step} />
          </Box>

          {step === 1 && (
            <Box>
              <DialogTitle
                sx={{
                  marginBottom: "10px",
                  paddingBottom: "3px",
                  borderBottom: "1px solid #E8DFDF",
                }}
              >
                Contact Info
              </DialogTitle>
              <Box>
                <Box sx={{ display: "flex", gap: 3, mt: "25px" }}>
                  <Avatar
                    src={seba}
                    sx={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                    }}
                  />
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      Santhush Fernando
                    </Typography>
                    <Typography variant="body1" sx={{ fontSize: "13px" }}>
                      SFernando@gmail.com
                    </Typography>
                    <Typography variant="body1" sx={{ fontSize: "13px" }}>
                      Sri Lanka
                    </Typography>
                  </Box>
                </Box>

                <form onSubmit={(event) => event.preventDefault()}>
                  <Stack spacing={2}>
                    <FormControl>
                      <FormLabel>Email</FormLabel>
                      <Input autoFocus required />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Phone</FormLabel>
                      <Input required />
                    </FormControl>
                    <FormControl>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          border: "2px dashed #0071FF",
                          borderRadius: "8px",
                          padding: "20px",
                          width: "100%",
                          cursor: "pointer",
                          "&:hover": { backgroundColor: "#f0f7ff" },
                        }}
                        onClick={() => inputCvRef.current.click()}
                      >
                        <FontAwesomeIcon icon={faPlusCircle} size="2xl" />
                        <Typography variant="subtitle1" sx={{ mt: 1 }}>
                          Add CV/Resume
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          Only PDF format allowed. Max file size 10MB.
                        </Typography>
                        <input
                          type="file"
                          hidden
                          ref={inputCvRef}
                          onChange={handleCvUpload}
                        />
                      </Box>
                    </FormControl>
                    <Button type="submit" onClick={submitContactInfo}>
                      Submit Contact Info
                    </Button>
                  </Stack>
                </form>
              </Box>
            </Box>
          )}

          {step === 2 && <SurveyQuestions callback={completeSurvey} />}

          {step === 3 && (
            <Box sx={{ textAlign: "center" }}>
              <DialogTitle
                sx={{
                  marginBottom: "10px",
                  paddingBottom: "3px",
                  borderBottom: "1px solid #E8DFDF",
                }}
              >
                <Typography sx={{ color: "green", fontSize: "23px" }}>
                  Application Submitted Successfully
                </Typography>
              </DialogTitle>
              {showIcon && (
                <DoneAllIcon
                  sx={{
                    fontSize: 50,
                    animation: `${scaleFadeIn} 1s ease-in-out`,
                    color: "green",
                  }}
                />
              )}
            </Box>
          )}
        </ModalDialog>
      </Modal>
    </>
  );
}
