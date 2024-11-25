import React, { useState, useEffect, useRef } from "react";
import {
  Button,
  Modal,
  ModalDialog,
  DialogTitle,
  Stack,
  Box,
  Typography,
  FormControl,
  FormLabel,
  Input,
} from "@mui/joy";
import IndicatorStepper from "./stepper";
import SurveyQuestions from "./surveyQuestions";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { keyframes } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import ImageKit from "imagekit";

const CVUploadField = ({ formData, setFormData }) => {
  const inputCvRef = useRef(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // New state for loading

  const imagekit = new ImageKit({
    urlEndpoint: import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT,
    publicKey: import.meta.env.VITE_IMAGEKIT_PUBLIC_KEY,
    privateKey: import.meta.env.VITE_IMAGEKIT_PRIVATE_KEY,
  });

  const handleCvUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const isValidFormat = file.type === "application/pdf";
    const isValidSize = file.size <= 10 * 1024 * 1024; // 10MB limit

    if (!isValidFormat) {
      setError("Only PDF files are allowed.");
      return;
    }

    if (!isValidSize) {
      setError("File size exceeds 10MB.");
      return;
    }

    setError("");
    setLoading(true); // Set loading to true when upload starts

    imagekit.upload(
      {
        file: file,
        fileName: file.name,
        tags: ["cv"],
      },
      (err, result) => {
        setLoading(false); // Set loading to false when upload finishes

        if (err) {
          console.error("Error uploading CV:", err);
          setError("Failed to upload CV. Please try again.");
          return;
        }

        console.log("CV uploaded successfully:", result);

        setFormData((prev) => ({
          ...prev,
          cv: result.url,
          cvName: file.name, // Store the file name
        }));
      }
    );
  };

  return (
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
          {formData.cv ? "Replace CV/Resume" : "Add CV/Resume"}
        </Typography>

        {/* Display uploaded CV name if available */}
        {formData.cv && !loading && (
          <Typography variant="body2" sx={{ mt: 1 }}>
            Uploaded CV: {formData.cvName}
            <a
              href={formData.cv}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0071FF", marginLeft: "8px" }}
            >
              View CV
            </a>
          </Typography>
        )}

        {/* Show loading message */}
        {loading && (
          <Typography variant="body2" sx={{ mt: 1, color: "blue" }}>
            Uploading your CV... Please wait.
          </Typography>
        )}

        <input
          type="file"
          hidden
          ref={inputCvRef}
          onChange={handleCvUpload}
          accept="application/pdf"
        />
      </Box>

      {error && (
        <Typography color="error" variant="body2" sx={{ mt: 1 }}>
          {error}
        </Typography>
      )}
    </FormControl>
  );
};

export default function AppliedJob() {
  const scaleFadeIn = keyframes`
    0% { transform: scale(0); opacity: 0; }
    50% { transform: scale(1.1); opacity: 0.5; }
    100% { transform: scale(1); opacity: 1; }
  `;

  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    cv: "",
  });
  const [surveyResults, setSurveyResults] = useState(null);
  const handleSurveyComplete = (surveyData) => {
    setSurveyResults(surveyData); // Save the survey results to state
    setStep(2); // Transition to step 3 once survey is complete
  };
  const [errorMessage, setErrorMessage] = useState("");
  const [jobDetails, setJobDetails] = useState(null);
  const [userDetails, setUserDetails] = useState(null);
  const [checkUserAlreadyApplied, setCheckUserAlreadyApplied] = useState();

  const navigate = useNavigate();
  const { jobId } = useParams();

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          `http://localhost:8080/jobseeker/jobDetails/${jobId}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setJobDetails(response.data);
      } catch (error) {
        console.error("Error fetching job details:", error);
      }
    };

    const fetchUserDetails = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          `http://localhost:8080/jobseeker/getUserDetails`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        console.log("User details:", response.data);
        setUserDetails(response.data); // Update user details here
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchJobDetails();
    fetchUserDetails();

    if (step === 3) {
      const timer = setTimeout(() => navigate("/jobseeker"), 5000);
      return () => clearTimeout(timer);
    }
  }, [step, jobId, navigate]);

  useEffect(() => {
    if (userDetails) {
      const checkUserApplied = async () => {
        try {
          const token = localStorage.getItem("token");
          const userId = userDetails?.user?.id;
          console.log("User ID:", userId);
          const response = await axios.get(
            `http://localhost:8080/jobseeker/check-applied/${userId}/${jobId}`,
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );
          console.log("User already applied:", response.data);
          setCheckUserAlreadyApplied(response.data);
        } catch (error) {
          console.error("Error checking if user already applied:", error);
        }
      };

      checkUserApplied();
    }
  }, [userDetails, jobId]);

  const validateForm = () => {
    const { email } = formData;

    if (!email) return "Email is required.";
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) return "Please enter a valid email address.";

    if (!formData.cv) return "Please upload your CV.";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("response", surveyResults);
    const error = validateForm();
    if (error) {
      setErrorMessage(error);
      return;
    }

    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("No token found in localStorage");

      const applicationData = {
        user: { id: userDetails.id },
        job: { id: jobId },
        atsScore: 85,
        appliedDate: new Date().toISOString(),
        status: "Pending",
        cv: formData.cv,
        response: JSON.stringify(surveyResults),
        email: formData.email,
      };

      console.log("Application data:", applicationData);

      await axios.post(
        `http://localhost:8080/jobseeker/apply`,
        applicationData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      setStep(3);
    } catch (error) {
      console.error("Error submitting application:", error);
    }
  };

  return (
    <>
      <Button
        sx={{
          backgroundColor: checkUserAlreadyApplied ? "grey" : "blue",
          pointerEvents: checkUserAlreadyApplied ? "none" : "auto",
        }}
        disabled={checkUserAlreadyApplied}
        onClick={() => !checkUserAlreadyApplied && setOpen(true)}
      >
        <Typography
          sx={{
            display: { xs: "none", lg: "block" },
            color: "white",
          }}
        >
          {checkUserAlreadyApplied ? "Application Submitted" : "Apply Now"}
        </Typography>
      </Button>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: "flex", justifyContent: "center", overflow: "auto" }}
      >
        <ModalDialog sx={{ width: "90vw", maxWidth: "600px", padding: "20px" }}>
          <Box sx={{ margin: "15px 0" }}>
            <IndicatorStepper callback={setStep} num={step} />
          </Box>

          {step === 2 && (
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
              {errorMessage && (
                <Typography color="error" sx={{ mb: 2 }}>
                  {errorMessage}
                </Typography>
              )}
              <form onSubmit={handleSubmit}>
                <Stack spacing={2}>
                  <FormControl>
                    <FormLabel>Email</FormLabel>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          email: e.target.value,
                        }))
                      }
                      required
                    />
                  </FormControl>
                  <CVUploadField
                    formData={formData}
                    setFormData={setFormData}
                  />
                  <Button type="submit" disabled={!formData.cv}>
                    Submit Contact Info
                  </Button>
                </Stack>
              </form>
            </Box>
          )}

          {step === 1 && <SurveyQuestions callback={handleSurveyComplete} />}

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
              <DoneAllIcon
                sx={{
                  fontSize: 50,
                  animation: `${scaleFadeIn} 1s ease-in-out`,
                  color: "green",
                }}
              />
            </Box>
          )}
        </ModalDialog>
      </Modal>
    </>
  );
}
