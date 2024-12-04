import { useState, useEffect } from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import { useParams } from "react-router-dom";
import axios from "axios";
import { SurveyModel } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css"; // SurveyJS Theme

function SurveyQuestions({ callback }) {
  const [surveyJson, setSurveyJson] = useState(null);
  const { jobId } = useParams();
  const token = localStorage.getItem("token");

  const fetchJobDetails = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/jobseeker/jobDetails/${jobId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = response.data;
      if (data?.customizedForm) {
        setSurveyJson(JSON.parse(data.customizedForm));
      } else {
        console.error("Invalid or missing customized form:", data);
      }
    } catch (error) {
      console.error("Error fetching job details:", error);
    }
  };

  useEffect(() => {
    fetchJobDetails();
  }, []);

  const handleSurveyComplete = (survey) => {
    console.log("Survey Results:", survey.data);
    callback(survey.data); // Notify parent component that survey is complete
  };

  if (!surveyJson) {
    return <div>Loading Survey...</div>;
  }

  const survey = new SurveyModel(surveyJson);
  survey.onComplete.add(handleSurveyComplete);

  return (
    <Box
    sx={{
      display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%", // Fill the available width
    padding: "20px",
    margin: "0 auto", // Center horizontally
    height:'90%',
    overflow:'auto'
    }}
  >
      <Survey model={survey} />
    </Box>
  );
}

export default SurveyQuestions;
