import React from "react";
import { useState, useEffect } from "react";
import Button from "@mui/joy/Button";
import Breadcrumbs from "@mui/joy/Breadcrumbs";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import Box from "@mui/joy/Box";
import { NumericFormat } from "react-number-format";
import Snackbar from "@mui/joy/Snackbar";
import Switch from "@mui/joy/Switch";

import Card from "@mui/joy/Card";
import CardActions from "@mui/joy/CardActions";
import CardContent from "@mui/joy/CardContent";
import Divider from "@mui/joy/Divider";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import InfoOutlined from "@mui/icons-material/InfoOutlined";
import FormHelperText from "@mui/joy/FormHelperText";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";

import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import { Chip } from "@mui/joy";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import Textarea from "@mui/joy/Textarea";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";

import { SurveyCreatorComponent, SurveyCreator } from "survey-creator-react";
import "survey-core/defaultV2.css";
import "survey-creator-core/survey-creator-core.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function decodeJWT(token) {
  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
}
const formatDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const getUserIdFromToken = () => {
  const token = localStorage.getItem("token");
  if (token) {
    const decodedToken = decodeJWT(token);
    const id = decodedToken.user_id;
    console.log("User ID from token:", id);
    return id;
  }
  return null;
};

const NumericFormatAdapter = React.forwardRef(function NumericFormatAdapter(
  props,
  ref
) {
  const { onChange, ...other } = props;

  return (
    <NumericFormat
      {...other}
      getInputRef={ref}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator
      valueIsNumericString
      prefix="Rs."
    />
  );
});

const Dashboard = () => {
  const today = new Date();
  const nextMonth = new Date(today);
  nextMonth.setMonth(today.getMonth() + 1);

  const [formData, setFormData] = useState({
    jobProviderId: getUserIdFromToken(),
    jobTitle: "",
    tags: [],
    jobRole: "",
    minSalary: "",
    maxSalary: "",
    salaryType: "",
    education: "",
    experience: "",
    jobType: "",
    jobLocation: "",
    vacancies: "",
    expiryDate: "",
    jobLevel: "",
    jobDescription: "",
    customizedForm: null,
    isCustomizedFormNeeded: false,
    customQuestions: [],
  });

  const [errors, setErrors] = useState({});
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState(false);
  const [creator, setCreator] = useState(null);
  const [surveyOpen, setSurveyOpen] = useState(false);
  const [errorSurveyOpen, setErrorSurveyOpen] = useState(false);

  //suevey creator start===========================

  useEffect(() => {
    if (creator === null) {
      let options = {
        showLogicTab: false,
        showTranslationTab: false,
        showJSONEditorTab: false,
        showEmbededSurveyTab: false,
        isAutoSave: true,
      };
      const surveyCreator = new SurveyCreator(options);
      surveyCreator.saveSurveyFunc = (saveNo, callback) => {
        callback(saveNo, true);
        saveSurveyJson(surveyCreator.JSON, saveNo, callback);
      };
      setCreator(surveyCreator);
    }
  }, [creator]);

  //creator.JSON = props.json;

  const saveSurveyJson = (json, saveNo, callback) => {
    const jsonDataString = JSON.stringify(json);
    console.log("Survey JSON:", jsonDataString); // Log the survey JSON
    setFormData((prevFormData) => ({
      ...prevFormData,
      customizedForm: jsonDataString,
      customQuestions: json.pages[0].elements, // Adjust this line based on your actual survey structure
    }));
    callback(saveNo, true);
  };

  //survey js over===========================

  const handleInputChange = (e) => {
    if (!e || !e.target) {
      console.error("Event or event target is missing");
      return;
    }
    const { name, value } = e.target;
    if (errors[name]) {
      setErrors((prevState) => {
        const newErrors = { ...prevState };
        delete newErrors[name];
        return newErrors;
      });
    }
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleTagSelectChange = (event, newValue) => {
    if (errors.tags) {
      setErrors((prevState) => {
        const newErrors = { ...prevState };
        delete newErrors.tags;
        return newErrors;
      });
    }
    setFormData((prevState) => ({
      ...prevState,
      tags: newValue,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    // Validate form fields
    if (!formData.jobTitle) newErrors.jobTitle = "Job title is required";
    if (!formData.tags || formData.tags.length === 0)
      newErrors.tags = "At least one tag is required";
    if (!formData.jobRole) newErrors.jobRole = "Job role is required";
    if (!formData.minSalary) {
      newErrors.minSalary = "Minimum salary is required";
    } else if (Number(formData.minSalary) < 0) {
      newErrors.minSalary = "Minimum salary must be greater than 0";
    }
    if (!formData.maxSalary) {
      newErrors.maxSalary = "Maximum salary is required";
    } else if (Number(formData.maxSalary) < 0) {
      newErrors.maxSalary = "Maximum salary must be greater than 0";
    } else if (Number(formData.minSalary) >= Number(formData.maxSalary)) {
      newErrors.maxSalary =
        "Maximum salary must be greater than minimum salary";
    }
    if (!formData.jobLocation)
      newErrors.jobLocation = "Job location is required";
    if (!formData.salaryType) newErrors.salaryType = "Salary type is required";
    if (!formData.education) newErrors.education = "Education is required";
    if (!formData.experience) newErrors.experience = "Experience is required";
    if (!formData.jobType) newErrors.jobType = "Job type is required";
    if (!formData.vacancies) {
      newErrors.vacancies = "Number of vacancies is required";
    } else if (Number(formData.vacancies) <= 0) {
      newErrors.vacancies = "Number of vacancies must be greater than 0";
    }
    if (!formData.expiryDate)
      newErrors.expiryDate = "Expiration date is required";
    if (!formData.jobLevel) newErrors.jobLevel = "Job level is required";
    if (!formData.jobDescription)
      newErrors.jobDescription = "jobDescription is required";
    if (checked && !formData.customizedForm)
      newErrors.customizedForm = "Customized form is required";
    return newErrors;
  };

  const handleChange = (e) => {
    console.log("Event:", e);
    if (e && e.target) {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    } else {
      console.log("Event or event.target is null");
    }
  };
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const userId = getUserIdFromToken();
    if (!userId) {
      console.error("User ID not found");
      return;
    }

    const plan = "basic";
    const token = localStorage.getItem("token");
    const postCount = 0;

    const decodedToken = decodeJWT(token);
    console.log("Decoded Token:", decodedToken);

    console.log("Token from localStorage:", token); // Debug logging

    // Check if customQuestions is already an object
    let parsedCustomQuestions;
    if (typeof formData.customQuestions === "string") {
      try {
        parsedCustomQuestions = JSON.parse(formData.customQuestions);
      } catch (error) {
        console.error("Invalid JSON in customQuestions:", formData.customQuestions);
        return;
      }
    } else {
      parsedCustomQuestions = formData.customQuestions;
    }

    // Transform customQuestions to match the expected DTO format
    const transformedCustomQuestions = parsedCustomQuestions.map((question) => ({
      questionText: question.name,
    }));

    const jobData = {
      ...formData,
      customQuestions: transformedCustomQuestions,
      minSalary: Number(formData.minSalary),
      maxSalary: Number(formData.maxSalary),
      vacancies: Number(formData.vacancies),
    };

    console.log("Submitting job data: ", jobData);

    try {
      const response = await axios.post(
        "http://localhost:8080/jobprovider/post-a-job",
        jobData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Job posted successfully!", response.data);
      navigate("login");

      if (plan === "basic" && postCount >= 1) {
        setOpen(true);
      } else if (plan === "standard" && postCount >= 3) {
        setOpen(true);
      } else if (plan === "premium" && postCount >= 6) {
        setOpen(true);
      } else {
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
          setErrors(validationErrors);
        } 
      }
    } catch (error) {
      console.error("There was an error posting the job!", error);
    }
  };


  const renderValue = (selected) => (
    <Box sx={{ display: "flex", gap: "0.25rem" }}>
      {selected.map((value) => (
        <Chip key={value} variant="soft" color="primary" label={value}>
          {value.label}
        </Chip>
      ))}
    </Box>
  );

  return (
    <Box
      component="main"
      className="MainContent"
      sx={{
        px: { xs: 2, md: 6 },
        pt: {
          xs: "calc(12px + var(--Header-height))",
          sm: "calc(12px + var(--Header-height))",
          md: 3,
        },
        pb: { xs: 2, sm: 2, md: 3 },
        flex: 1,
        display: "flex",
        flexDirection: "column",
        minWidth: 0,
        height: "100dvh",
        gap: 1,
        overflow: "auto",
        maxHeight: "calc(100vh - 10px)",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Breadcrumbs
          size="sm"
          aria-label="breadcrumbs"
          separator={<ChevronRightRoundedIcon fontSize="sm" />}
          sx={{ pl: 0 }}
        >
          <Link
            underline="none"
            color="neutral"
            href="#some-link"
            aria-label="Home"
          >
            <HomeRoundedIcon />
          </Link>
          <Link
            underline="hover"
            color="neutral"
            href="#some-link"
            fontSize={12}
            fontWeight={500}
          >
            Dashboard
          </Link>
          <Typography color="primary" fontWeight={500} fontSize={12}>
            Post A Job
          </Typography>
        </Breadcrumbs>
      </Box>
      <Box
        sx={{
          display: "flex",
          mb: 1,
          gap: 1,
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { xs: "start", sm: "center" },
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <Typography level="h2" component="h1">
          Post A Job
        </Typography>
      </Box>

      <Divider />

      <form onSubmit={handleSubmit}>
        <Card
          variant="outlined"
          sx={{
            maxHeight: "max-content",
            minWidth: "100%",
            mx: "auto",
            backgroundColor: "transparent",
          }}
        >
          <Typography
            level="title-lg"
            startDecorator={<WorkOutlineOutlinedIcon />}
          >
            Enter Details of the Job
          </Typography>
          <Divider inset="none" />
          <CardContent>
            <Typography level="title-lg" sx={{ marginBottom: "1rem" }}>
              Job Informations
            </Typography>

            <FormControl
              sx={{ gridColumn: "1/-1", marginBottom: 1 }}
              error={Boolean(errors.jobTitle)}
            >
              <FormLabel>Job Title</FormLabel>
              <Input
                placeholder="Add job title, role, vacancies etc"
                type="text"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleChange}
              />
              {errors.jobTitle && (
                <FormHelperText>
                  <InfoOutlined /> {errors.jobTitle}
                </FormHelperText>
              )}
            </FormControl>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(2, minmax(80px, 1fr))",
                gap: 6,
                marginBottom: "1rem",
              }}
            >
              <FormControl error={Boolean(errors.tags)}>
                <FormLabel>Tags</FormLabel>
                <Select
                  name="tags"
                  multiple
                  placeholder="Job keyword, tags etc..."
                  value={formData.tags} // Ensure this is always an array
                  onChange={handleTagSelectChange}
                  renderValue={renderValue}
                  sx={{
                    minWidth: "15rem",
                  }}
                  MenuProps={{
                    PaperProps: {
                      style: {
                        width: "15rem",
                      },
                    },
                  }}
                >
                  <Option value="dog">Dog</Option>
                  <Option value="cat">Cat</Option>
                  <Option value="fish">Fish</Option>
                  <Option value="bird">Bird</Option>
                </Select>

                {errors.tags && (
                  <FormHelperText>
                    <InfoOutlined /> {errors.tags}
                  </FormHelperText>
                )}
              </FormControl>

              <FormControl error={Boolean(errors.jobRole)}>
                <FormLabel>Job Role</FormLabel>
                <Select
                  name="jobRole"
                  value={formData.jobRole}
                  placeholder="Select a Role"
                  onChange={(event, newValue) => {
                    console.log("Event: ", event);
                    console.log("New Value: ", newValue);

                    const value = newValue ?? "";
                    console.log("Selected Value: ", value);

                    if (errors.jobRole) {
                      setErrors((prevState) => {
                        const newErrors = { ...prevState };
                        delete newErrors.jobRole;
                        return newErrors;
                      });
                    }
                    setFormData({ ...formData, jobRole: value });
                    console.log("Updated formData: ", {
                      ...formData,
                      jobRole: value,
                    });
                  }}
                >
                  <Option value="dog">Dog</Option>
                  <Option value="cat">Cat</Option>
                  <Option value="fish">Fish</Option>
                  <Option value="bird">Bird</Option>
                </Select>

                {errors.jobRole && (
                  <FormHelperText>
                    <InfoOutlined /> {errors.jobRole}
                  </FormHelperText>
                )}
              </FormControl>

              <FormControl error={Boolean(errors.jobLocation)}>
                <FormLabel>Location</FormLabel>
                <Input
                  name="jobLocation"
                  value={formData.jobLocation}
                  placeholder="Enter number of vacancies"
                  onChange={handleInputChange}
                />
                {errors.jobLocation && (
                  <FormHelperText>
                    <InfoOutlined /> {errors.jobLocation}
                  </FormHelperText>
                )}
              </FormControl>
            </Box>

            <Typography level="title-lg" sx={{ marginBottom: "1rem" }}>
              Salery
            </Typography>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(3, minmax(80px, 1fr))",
                gap: 1.5,
                marginBottom: "1rem",
              }}
            >
              <FormControl error={Boolean(errors.minSalary)}>
                <FormLabel>Min Salary</FormLabel>
                <Input
                  name="minSalary"
                  value={formData.minSalary}
                  onChange={handleInputChange}
                  placeholder="Enter Minimum Salary"
                  startDecorator={
                    <Button disabled variant="soft" color="neutral">
                      LKR
                    </Button>
                  }
                  slotProps={{
                    input: {
                      component: NumericFormatAdapter,
                    },
                  }}
                />
                {errors.minSalary && (
                  <FormHelperText>
                    <InfoOutlined /> {errors.minSalary}
                  </FormHelperText>
                )}
              </FormControl>

              <FormControl error={Boolean(errors.maxSalary)}>
                <FormLabel>Max Salary</FormLabel>
                <Input
                  name="maxSalary"
                  value={formData.maxSalary}
                  onChange={handleInputChange}
                  placeholder="Enter Maximum Salary"
                  startDecorator={
                    <Button disabled variant="soft" color="neutral">
                      LKR
                    </Button>
                  }
                  slotProps={{
                    input: {
                      component: NumericFormatAdapter,
                    },
                  }}
                />
                {errors.maxSalary && (
                  <FormHelperText>
                    <InfoOutlined /> {errors.maxSalary}
                  </FormHelperText>
                )}
              </FormControl>

              <FormControl error={Boolean(errors.salaryType)}>
                <FormLabel>Salary Type</FormLabel>
                <Select
                  name="salaryType"
                  value={formData.salaryType}
                  placeholder="Select a Type"
                  onChange={(event, newValue) => {
                    const value = newValue ?? "";
                    if (errors.salaryType) {
                      setErrors((prevState) => {
                        const newErrors = { ...prevState };
                        delete newErrors.salaryType;
                        return newErrors;
                      });
                    }
                    setFormData({ ...formData, salaryType: value });
                  }}
                >
                  <Option key="1" value="Monthly">
                    Monthly
                  </Option>
                  <Option key="2" value="Yearly">
                    Yearly
                  </Option>
                  <Option key="3" value="Hourly">
                    Hourly
                  </Option>
                  <Option key="4" value="Weekly">
                    Weekly
                  </Option>
                </Select>

                {errors.salaryType && (
                  <FormHelperText>
                    <InfoOutlined /> {errors.salaryType}
                  </FormHelperText>
                )}
              </FormControl>
            </Box>

            <Typography level="title-lg" sx={{ marginBottom: "1rem" }}>
              Advanced Informations
            </Typography>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(3, minmax(80px, 1fr))",
                gap: 1.5,
                marginBottom: "1rem",
              }}
            >
              <FormControl error={Boolean(errors.education)}>
                <FormLabel>Education</FormLabel>
                <Select
                  name="education"
                  value={formData.education}
                  placeholder="Select"
                  onChange={(event, newValue) => {
                    const value = newValue ?? "";
                    if (errors.education) {
                      setErrors((prevState) => {
                        const newErrors = { ...prevState };
                        delete newErrors.education;
                        return newErrors;
                      });
                    }
                    setFormData({ ...formData, education: value });
                  }}
                >
                  <Option value="dog">Dog</Option>
                  <Option value="cat">Cat</Option>
                  <Option value="fish">Fish</Option>
                  <Option value="bird">Bird</Option>
                </Select>

                {errors.education && (
                  <FormHelperText>
                    <InfoOutlined /> {errors.education}
                  </FormHelperText>
                )}
              </FormControl>

              <FormControl error={Boolean(errors.experience)}>
                <FormLabel>Experience</FormLabel>
                <Select
                  name="experience"
                  value={formData.experience}
                  placeholder="Select"
                  onChange={(event, newValue) => {
                    const value = newValue ?? "";
                    if (errors.experience) {
                      setErrors((prevState) => {
                        const newErrors = { ...prevState };
                        delete newErrors.experience;
                        return newErrors;
                      });
                    }
                    setFormData({ ...formData, experience: value });
                  }}
                >
                  <Option value="dog">Dog</Option>
                  <Option value="cat">Cat</Option>
                  <Option value="fish">Fish</Option>
                  <Option value="bird">Bird</Option>
                </Select>

                {errors.experience && (
                  <FormHelperText>
                    <InfoOutlined /> {errors.experience}
                  </FormHelperText>
                )}
              </FormControl>

              <FormControl error={Boolean(errors.jobType)}>
                <FormLabel>Job Type</FormLabel>
                <Select
                  name="jobType"
                  value={formData.jobType}
                  placeholder="Select"
                  onChange={(event, newValue) => {
                    const value = newValue ?? "";

                    if (errors.jobType) {
                      setErrors((prevState) => {
                        const newErrors = { ...prevState };
                        delete newErrors.jobType;
                        return newErrors;
                      });
                    }

                    setFormData((prevData) => ({
                      ...prevData,
                      jobType: value,
                    }));
                  }}
                >
                  <Option value="dog">Dog</Option>
                  <Option value="cat">Cat</Option>
                  <Option value="fish">Fish</Option>
                  <Option value="bird">Bird</Option>
                </Select>

                {errors.jobType && (
                  <FormHelperText>
                    <InfoOutlined /> {errors.jobType}
                  </FormHelperText>
                )}
              </FormControl>

              <FormControl error={Boolean(errors.vacancies)}>
                <FormLabel>Vacancies</FormLabel>
                <Input
                  name="vacancies"
                  value={formData.vacancies}
                  placeholder="Enter number of vacancies"
                  onChange={handleInputChange}
                />
                {errors.vacancies && (
                  <FormHelperText>
                    <InfoOutlined /> {errors.vacancies}
                  </FormHelperText>
                )}
              </FormControl>

              <FormControl error={Boolean(errors.expiryDate)}>
                <FormLabel>Expiration Date</FormLabel>
                <Input
                  name="expiryDate"
                  value={formData.expiryDate}
                  type="date"
                  placeholder="Select a date"
                  onChange={handleInputChange}
                  slotProps={{
                    input: {
                      min: formatDate(today),
                      max: formatDate(nextMonth),
                    },
                  }}
                />
                {errors.expiryDate && (
                  <FormHelperText>
                    <InfoOutlined /> {errors.expiryDate}
                  </FormHelperText>
                )}
              </FormControl>

              <FormControl error={Boolean(errors.jobLevel)}>
                <FormLabel>Job Level</FormLabel>
                <Select
                  name="jobLevel"
                  value={formData.jobLevel}
                  placeholder="Select"
                  onChange={(event, newValue) => {
                    const value = newValue ?? "";
                    if (errors.jobLevel) {
                      setErrors((prevState) => {
                        const newErrors = { ...prevState };
                        delete newErrors.jobLevel;
                        return newErrors;
                      });
                    }
                    setFormData({ ...formData, jobLevel: value });
                  }}
                >
                  <Option value="dog">Dog</Option>
                  <Option value="cat">Cat</Option>
                  <Option value="fish">Fish</Option>
                  <Option value="bird">Bird</Option>
                </Select>
                {errors.jobLevel && (
                  <FormHelperText>
                    <InfoOutlined /> {errors.jobLevel}
                  </FormHelperText>
                )}
              </FormControl>
            </Box>

            <FormControl error={Boolean(errors.customizedForm)}>
              <Typography
                sx={{ marginBottom: "1rem" }}
                level="title-lg"
                endDecorator={
                  <Switch
                    sx={{ ml: 1 }}
                    checked={checked}
                    onChange={(event) => {
                      const isChecked = event.target.checked;
                      setChecked(isChecked);
                      console.log(isChecked);

                      setFormData({
                        ...formData,
                        isCustomizedFormNeeded: isChecked,
                      });

                      if (!isChecked) {
                        setSurveyOpen(true);

                        setErrors((prevState) => {
                          const newErrors = { ...prevState };
                          delete newErrors.customizedForm;
                          return newErrors;
                        });
                      }
                    }}
                  />
                }
              >
                Need a Customized Form?
              </Typography>

              <Box
                borderRadius={10}
                sx={{
                  display: checked ? "block" : "none",
                  mt: 1,
                  mb: 1,
                  border: !Boolean(errors.customizedForm)
                    ? "1px solid #CDD7E1"
                    : "1px solid red",
                  padding: 1,
                }}
              >
                {creator && <SurveyCreatorComponent creator={creator} />}
              </Box>
            </FormControl>

            <Typography level="title-lg" sx={{ marginBottom: "1rem" }}>
              Job jobDescription
            </Typography>

            <FormControl error={Boolean(errors.jobDescription)}>
              <FormLabel>jobDescription</FormLabel>
              <Textarea
                name="jobDescription"
                value={formData.jobDescription}
                onChange={handleInputChange}
                placeholder="Enter job jobDescription here..."
                minRows={4}
                maxRows={6}
              />
              {errors.jobDescription && (
                <FormHelperText>
                  <InfoOutlined /> {errors.jobDescription}
                </FormHelperText>
              )}
            </FormControl>

            <CardActions sx={{ maxWidth: "200px" }}>
              <Button
                type="submit"
                variant="solid"
                color="primary"
                endDecorator={<ArrowForwardOutlinedIcon />}
              >
                Post Job
              </Button>
            </CardActions>
          </CardContent>
        </Card>
      </form>

      <React.Fragment>
        <Snackbar
          variant="soft"
          color="warning"
          open={open}
          onClose={() => setOpen(false)}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          startDecorator={<WarningAmberIcon />}
          endDecorator={
            <Button
              onClick={() => setOpen(false)}
              size="sm"
              variant="soft"
              color="warning"
            >
              Dismiss
            </Button>
          }
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography level="title-md" textAlign={"left"}>
              Please consider upgrading your plan.
            </Typography>
            <Typography level="body-sm">
              You have exceeded the posting limit for your current plan.
            </Typography>
          </Box>
        </Snackbar>

        <Snackbar
          variant="soft"
          color="danger"
          open={surveyOpen}
          onClose={() => setSurveyOpen(false)}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          startDecorator={<WarningAmberIcon />}
          endDecorator={
            <Button
              onClick={() => setSurveyOpen(false)}
              size="sm"
              variant="soft"
              color="danger"
            >
              Dismiss
            </Button>
          }
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography level="title-md" textAlign={"left"}>
              The customized form has been disabled.
            </Typography>
            <Typography level="body-sm">
              This form will not be included with the job posting.
            </Typography>
          </Box>
        </Snackbar>

        <Snackbar
          variant="soft"
          color="danger"
          open={errorSurveyOpen}
          onClose={() => setErrorSurveyOpen(false)}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          startDecorator={<WarningAmberIcon />}
          endDecorator={
            <Button
              onClick={() => setErrorSurveyOpen(false)}
              size="sm"
              variant="soft"
              color="danger"
            >
              Dismiss
            </Button>
          }
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography level="title-md" textAlign={"left"}>
              Please create the form.
            </Typography>
            <Typography level="body-sm">
              Drag and drop items from the toolbox on the left side.
            </Typography>
          </Box>
        </Snackbar>
      </React.Fragment>
    </Box>
  );
};

export default Dashboard;
