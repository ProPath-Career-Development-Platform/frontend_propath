import React, { useState, useRef } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
import TabPanel from "@mui/lab/TabPanel";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import Switch from "@mui/material/Switch";

import Typography from "@mui/material/Typography";
import "boxicons";
import { FormControl, FormLabel, Select, MenuItem } from "@mui/material";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import "../../../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGear,
  faGlobe,
  faUser,
  faCircleUser,
  faCircleArrowRight,
  faImage,
  faTrashAlt,
  faLink,
  faCircleArrowLeft,
  faCircleXmark,
  faFileAlt,
  faPlusCircle,
  faFile,
  faEllipsisV,
} from "@fortawesome/free-solid-svg-icons";
import ListItemIcon from "@mui/material/ListItemIcon";
import InputAdornment from "@mui/material/InputAdornment";
import Option from "@mui/joy/Option";
import Input from "@mui/joy/Input";
import LocationOn from "@mui/icons-material/LocationOn";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import Button from "@mui/joy/Button";
import Avatar from "@mui/joy/Avatar";
import MailIcon from "@mui/icons-material/Mail";
import DeleteIcon from "@mui/icons-material/Delete";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import Textarea from "@mui/joy/Textarea";
import IconButton from "@mui/joy/IconButton";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import FormatBold from "@mui/icons-material/FormatBold";
import Menu from "@mui/joy/Menu";
import FormatItalic from "@mui/icons-material/FormatItalic";
import FormatUnderlined from "@mui/icons-material/FormatUnderlined";
import FormatListBulleted from "@mui/icons-material/FormatListBulleted";
import Link from "@mui/icons-material/Link";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import Check from "@mui/icons-material/Check";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function NavigationPanel() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [image, setImage] = useState(null);
  const [imageName, setImageName] = useState("");
  const inputFileRef = useRef(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.size < 2000000) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
        setImageName(file.name);
      };
      reader.readAsDataURL(file);
    } else {
      alert("Image size more than 2MB");
    }
  };
  const [profilePrivacy, setProfilePrivacy] = useState(true); // true for YES, false for NO
  const [resumePrivacy, setResumePrivacy] = useState(false); // true for YES, false for NO

  const handleProfilePrivacyChange = (event) => {
    setProfilePrivacy(event.target.checked);
  };

  const handleResumePrivacyChange = (event) => {
    setResumePrivacy(event.target.checked);
  };

  const today = new Date().toISOString().split("T")[0];

  const [italic, setItalic] = React.useState(false);
  const [fontWeight, setFontWeight] = React.useState("normal");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [underline, setUnderline] = React.useState(false);
  const [bulletPoints, setBulletPoints] = React.useState(false);
  const [link, setLink] = React.useState(false);

  const [links, setLinks] = useState([
    { platform: "Facebook", url: "" },
    { platform: "Instagram", url: "" },
    { platform: "Linkedin", url: "" },
  ]);

  const handleSocialChange = (index, event) => {
    const newLinks = [...links];
    newLinks[index].platform = event.target.value;
    setLinks(newLinks);
  };

  const handleUrlChange = (index, event) => {
    const newLinks = [...links];
    newLinks[index].url = event.target.value;
    setLinks(newLinks);
  };

  const handleAddLink = () => {
    setLinks([...links, { platform: "Facebook", url: "" }]);
  };

  const handleCancel = (index) => {
    const newLinks = [...links];
    newLinks.splice(index, 1);
    setLinks(newLinks);
  };

  const [classification, setClassification] = useState("dog");
  const [subClassification, setSubClassification] = useState("");

  const subClassificationOptions = {
    dog: ["Audit", "Assistant Accountants"],
    fish: ["Constracts Management", "Planing & Scheduling"],
    bird: ["Chemical Engineering", "Industrial Engineering"],
    cat: ["Database Development & Administration", "Software Development"],
  };

  const handleClassificationChange = (event) => {
    if (event && event.target) {
      const value = event.target.value;
      setClassification(value);
      setSubClassification("");
    } else {
      console.error("Invalid event object in handleClassificationChange");
    }
  };

  const handleSubClassificationChange = (event) => {
    if (event && event.target) {
      const value = event.target.value;
      setSubClassification(value);
    } else {
      console.error("Invalid event object in handleSubClassificationChange");
    }
  };

  const [cvFile, setCvFile] = useState(null);
  const [cvFileName, setCvFileName] = useState("");
  const inputCvRef = useRef(null);
  // const [anchorEl, setAnchorEl] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  const handleCvUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.size < 10000000) {
      const reader = new FileReader();
      reader.onload = () => {
        setCvFile(reader.result);
        setCvFileName(file.name);
      };
      reader.readAsDataURL(file);
    } else {
      alert("File size more than 10MB");
    }
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = () => {
    setOpenDialog(true);
  };

  const handleConfirmDelete = () => {
    setCvFile(null);
    setCvFileName("");
    if (inputCvRef.current) {
      inputCvRef.current.value = "";
    }
    setOpenDialog(false);
    handleClose();
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [showNewPassword, setShowNewPassword] = useState(false);

  const handleClickShowNewPassword = () => {
    setShowNewPassword(!showNewPassword);
  };
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  return (
    <>
      {/* <JobSeekerSideBar /> */}
      <Box sx={{ width: "100%", typography: "body1", mt: 6 }}>
        <TabContext value={value} centered>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              onChange={handleChange}
              aria-label="lab API tabs example"
              centered
            >
              <Tab
                label={
                  <span>
                    <FontAwesomeIcon icon={faUser} size="lg" /> Personal
                  </span>
                }
                value="1"
              />
              <Tab
                label={
                  <span>
                    <FontAwesomeIcon icon={faCircleUser} size="lg" /> Profile
                  </span>
                }
                value="2"
              />
              <Tab
                label={
                  <span>
                    <FontAwesomeIcon icon={faGlobe} size="lg" /> Social Links
                  </span>
                }
                value="3"
              />
              <Tab
                label={
                  <span>
                    <FontAwesomeIcon icon={faGear} size="lg" /> Account Setting
                  </span>
                }
                value="4"
              />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "40% 60%",
                gap: "3",
                border: 2,
                borderRadius: 3,
                boxShadow: 3,
                pb: 2,
              }}
            >
              <Box
                sx={{
                  pl: 2,
                  pr: 2,
                  pt: 2,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <div>
                    <img
                      src="../../../src/assets/logo.png"
                      alt=""
                      style={{ height: "40px" }}
                    />
                  </div>
                  <div>
                    <p>Where Talents meets Opportunity</p>
                  </div>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    mt: 2,
                    flexGrow: 1,
                  }}
                >
                  <img
                    src="../../../src/assets/founding_info.jpg"
                    alt=""
                    style={{
                      borderRadius: "20px",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "3",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: "20px",
                    pt: 6,
                    marginLeft: { xs: 0, md: "25vh" },
                  }}
                >
                  <p>Profile Picture</p>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    // gap: "20px",
                  }}
                >
                  <Box
                    sx={{
                      maxWidth: { xs: "100%", md: "400px" },
                      width: "100%",
                      background: "#fff",
                      padding: "30px",
                      borderRadius: "30px",
                      display: "flex",
                      marginLeft: { xs: 0, md: "100px" },
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <input
                      type="file"
                      id="file"
                      accept="image/*"
                      hidden
                      ref={inputFileRef}
                      onChange={handleImageUpload}
                    />
                    <Box
                      className={`img-area ${image ? "active" : ""}`}
                      data-img={imageName}
                      sx={{
                        position: "relative",
                        width: "100%",
                        height: { xs: "100px", md: "240px" },
                        background: "#f2f2f2",
                        marginBottom: "30px",
                        borderRadius: "15px",
                        overflow: "hidden",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        "&.active:hover::before": {
                          opacity: 1,
                        },
                        "&::before": {
                          content: `"${imageName}"`,
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          background: "rgba(0, 0, 0, .5)",
                          color: "#fff",
                          fontWeight: 500,
                          textAlign: "center",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          pointerEvents: "none",
                          opacity: 0,
                          transition: "all .3s ease",
                        },
                      }}
                    >
                      {image ? (
                        <Box
                          component="img"
                          src={image}
                          alt="Preview"
                          sx={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "center",
                            zIndex: 100,
                          }}
                        />
                      ) : (
                        <>
                          <FontAwesomeIcon icon={faImage} size="2xl" />
                          <i
                            className="bx bxs-cloud-upload icon"
                            style={{ fontSize: "100px" }}
                          ></i>
                          <Typography
                            variant="h6"
                            component="h3"
                            sx={{ marginBottom: "6px" }}
                          >
                            Upload Profile Picture
                          </Typography>
                          <Typography variant="body2" color="textSecondary">
                            Image size must be less than{" "}
                            <span style={{ fontWeight: 600 }}>2MB</span>
                          </Typography>
                        </>
                      )}
                    </Box>
                    <Button
                      variant="contained"
                      sx={{
                        display: "block",
                        width: "50%",
                        padding: "10px 0",
                        borderRadius: "15px",
                        backgroundColor: "#814DDE", // Corrected background color
                        color: "#fff",
                        fontWeight: 500,
                        fontSize: "16px",
                        cursor: "pointer",
                        transition: "all .3s ease",
                        "&:hover": {
                          backgroundColor: "#005DD1", // Corrected hover background color
                        },
                      }}
                      onClick={() => inputFileRef.current.click()}
                    >
                      Select Image
                    </Button>
                  </Box>

                  <Box
                    sx={{
                      maxWidth: { xs: "100%", md: "400px" },
                      width: "100%",
                      background: "#fff",
                      marginRight: { xs: 0, md: "130px" },
                      padding: "30px",
                      borderRadius: "30px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 2,
                      }}
                    >
                      <Typography variant="h6" component="h3" sx={{ mb: 2 }}>
                        Your CV/Resume
                      </Typography>

                      {cvFile ? (
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            background: "#f9f9f9",
                            padding: "16px",
                            borderRadius: "8px",
                            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                            width: "100%",
                            maxWidth: "500px",
                          }}
                        >
                          <Box sx={{ display: "flex", alignItems: "center" }}>
                            <FontAwesomeIcon icon={faFileAlt} size="lg" />
                            <Box sx={{ ml: 2 }}>
                              <Typography variant="subtitle1">
                                {cvFileName}
                              </Typography>
                            </Box>
                          </Box>
                          <IconButton
                            aria-label="more"
                            aria-controls="long-menu"
                            aria-haspopup="true"
                            onClick={handleClick} // Function to handle click event on the icon
                          >
                            <FontAwesomeIcon icon={faEllipsisV} />
                          </IconButton>
                          <Menu
                            id="long-menu"
                            anchorEl={anchorEl} // State for managing menu position
                            keepMounted
                            open={Boolean(anchorEl)} // State for managing menu open/close
                            onClose={handleClose} // Function to handle menu close
                          >
                            <MenuItem onClick={handleDelete}>
                              <ListItemIcon>
                                <DeleteIcon sx={{ color: "red" }} />
                              </ListItemIcon>
                              Delete
                            </MenuItem>
                          </Menu>
                        </Box>
                      ) : (
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            border: "2px dashed #0071FF",
                            borderRadius: "8px",
                            padding: "20px",
                            width: "100%",
                            maxWidth: "500px",
                            cursor: "pointer",
                            "&:hover": {
                              backgroundColor: "#f0f7ff",
                            },
                          }}
                          onClick={() => inputCvRef.current.click()}
                        >
                          <FontAwesomeIcon icon={faPlusCircle} size="2xl" />
                          <Typography variant="subtitle1" sx={{ mt: 1 }}>
                            Add CV/Resume
                          </Typography>
                          <Typography variant="body2" color="textSecondary">
                            Only PDF format available. Max file size 10MB
                          </Typography>
                          <input
                            type="file"
                            id="cv-file-upload"
                            accept=".pdf"
                            hidden
                            ref={inputCvRef}
                            onChange={handleCvUpload}
                          />
                        </Box>
                      )}
                    </Box>
                  </Box>
                </Box>

                <Dialog
                  open={openDialog}
                  onClose={() => setOpenDialog(false)}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle id="alert-dialog-title">
                    {"Confirm Deletion"}
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      Are you sure you want to delete this file?
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button
                      onClick={() => setOpenDialog(false)}
                      sx={{
                        backgroundColor: "gray",
                        "&:hover": {
                          backgroundColor: "#b8b8b8", // Lighter or darker shade of gray
                        },
                      }}
                    >
                      Cancel
                    </Button>
                    <Button
                      onClick={handleConfirmDelete}
                      sx={{
                        backgroundColor: "red",
                        "&:hover": {
                          backgroundColor: "#cc0000", // Darker shade of red
                        },
                      }}
                      autoFocus
                    >
                      Confirm
                    </Button>
                  </DialogActions>
                </Dialog>

                <Box
                  sx={{
                    pb: 4, // Adds padding-bottom (2 * 8px = 16px)
                  }}
                >
                  <Box
                    sx={{
                      width: "95%",
                      maxWidth: "100%",
                      paddingLeft: "30px",
                    }}
                  >
                    <TextField
                      sx={{
                        marginBottom: "20px",
                        "& .MuiInputBase-input": {
                          height: "30px", // Reducing the height of the input field
                          padding: "12px 30px", // Adjust padding as needed to center the text vertically
                        },
                      }}
                      fullWidth
                      label="Full Name"
                      id="fullName"
                      required
                    />
                    <TextField
                      sx={{
                        marginBottom: "20px",
                        "& .MuiInputBase-input": {
                          height: "30px", // Reducing the height of the input field
                          padding: "12px 30px", // Adjust padding as needed to center the text vertically
                        },
                      }}
                      fullWidth
                      label="Enter suburb or town"
                      id="suburbOrTown"
                      required
                    />
                    <FormControl fullWidth>
                      <FormLabel
                        sx={{
                          fontSize: "0.875rem", // Match the font size to TextField label for consistency
                          marginBottom: "4px", // Adjust bottom margin to align with TextField styling
                          "&.Mui-focused": {
                            padding: "12px 30px",
                            height: "10px",
                          },
                        }}
                        id="select-field-demo-label"
                        htmlFor="suburbOrTown"
                      >
                        Preferred classification
                      </FormLabel>
                      <Select
                        sx={{
                          height: "50px", // Explicitly reduce the height of the Select component
                          ".MuiSelect-select": {
                            paddingTop: "4px", // Reduce padding inside the select
                            paddingBottom: "4px", // Reduce padding inside the select
                          },
                        }}
                        value={classification}
                        onChange={handleClassificationChange}
                        id="select-field-demo-button"
                        aria-labelledby="select-field-demo-label select-field-demo-button"
                      >
                        <MenuItem value="dog">Accounting</MenuItem>
                        <MenuItem value="fish">Construction</MenuItem>
                        <MenuItem value="bird">Engineering</MenuItem>
                        <MenuItem value="cat">
                          Information & Communication Technology
                        </MenuItem>
                      </Select>
                    </FormControl>

                    <FormControl fullWidth style={{ marginTop: "20px" }}>
                      <FormLabel
                        sx={{
                          fontSize: "0.875rem", // Match the font size to TextField label for consistency
                          marginBottom: "4px", // Adjust bottom margin to align with TextField styling
                          "&.Mui-focused": {
                            padding: "12px 30px",
                            height: "10px",
                          },
                        }}
                        id="select-sub-field-demo-label"
                        htmlFor="select-sub-field-demo-button"
                      >
                        Preferred sub classification
                      </FormLabel>
                      <Select
                        sx={{
                          height: "50px", // Explicitly reduce the height of the Select component
                          ".MuiSelect-select": {
                            paddingTop: "4px", // Reduce padding inside the select
                            paddingBottom: "4px", // Reduce padding inside the select
                          },
                        }}
                        value={subClassification}
                        onChange={handleSubClassificationChange}
                        id="select-sub-field-demo-button"
                        aria-labelledby="select-sub-field-demo-label select-sub-field-demo-button"
                        disabled={!classification}
                      >
                        {subClassificationOptions[classification]?.map(
                          (option) => (
                            <MenuItem key={option} value={option}>
                              {option}
                            </MenuItem>
                          )
                        )}
                      </Select>
                    </FormControl>
                  </Box>
                </Box>

                <Box
                  sx={{
                    alignSelf: "center",
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      display: "block",
                      width: "200px",
                      padding: "10px 0",
                      borderRadius: "15px",
                      backgroundColor: "#814DDE",
                      color: "#fff",
                      fontWeight: 500,
                      fontSize: "15px",
                      cursor: "pointer",
                      transition: "all .3s ease",
                    }}
                  >
                    Save Changes{" "}
                  </Button>
                </Box>
              </Box>
            </Box>
          </TabPanel>

          {/* company info page end */}

          <TabPanel value="2">
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "40% 60%",
                gap: "3",
                border: 2,
                borderRadius: 3,
                boxShadow: 3,
                pb: 6,
                overflow: "auto",
                maxHeight: "calc(100vh-10px)",
              }}
            >
              <Box
                sx={{
                  pl: 2,
                  pr: 2,
                  pt: 2,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <div>
                    <img
                      src="../../../src/assets/logo.png"
                      alt=""
                      style={{ height: "40px" }}
                    />
                  </div>
                  <div>
                    <p>Where Talents meets Opportunity</p>
                  </div>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    mt: 2,
                    flexGrow: 1,
                  }}
                >
                  <img
                    src="../../../src/assets/company_info.jpg"
                    alt=""
                    style={{
                      borderRadius: "20px",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "40px",
                  // justifyContent:'center'
                  pt: 12,
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "30px",
                  }}
                >
                  <Box>
                    <FormControl sx={{ width: 270 }}>
                      <FormLabel
                        sx={{
                          fontSize: "0.75rem", // Reduced font size
                          marginBottom: "4px", // Reduced bottom margin
                          "&.Mui-focused": {
                            padding: "8px 30px", // Reduced padding
                            height: "5px",
                          },
                        }}
                        id="select-field-demo-label"
                        htmlFor="select-field-demo-button"
                      >
                        Gender
                      </FormLabel>
                      <Select
                        defaultValue="male"
                        id="select-field-demo-button"
                        aria-labelledby="select-field-demo-label select-field-demo-button"
                        sx={{
                          height: "40px", // Explicitly reduce the height of the Select component
                          ".MuiSelect-select": {
                            paddingTop: "4px", // Reduce padding inside the select
                            paddingBottom: "4px", // Reduce padding inside the select
                          },
                        }}
                      >
                        <MenuItem value="male">Male</MenuItem>
                        <MenuItem value="female">Female</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                  <Box>
                    <FormControl sx={{ width: 270 }}>
                      <FormLabel
                        sx={{
                          fontSize: "0.75rem", // Reduced font size
                          marginBottom: "4px", // Reduced bottom margin
                          "&.Mui-focused": {
                            padding: "8px 30px", // Reduced padding
                            height: "5px",
                          },
                        }}
                        id="select-field-demo-label"
                        htmlFor="select-field-demo-button"
                      >
                        Experience
                      </FormLabel>
                      <Select
                        sx={{
                          height: "40px", // Explicitly reduce the height of the Select component
                          ".MuiSelect-select": {
                            paddingTop: "4px", // Reduce padding inside the select
                            paddingBottom: "4px", // Reduce padding inside the select
                          },
                        }}
                        defaultValue="none"
                        id="select-field-demo-button"
                        aria-labelledby="select-field-demo-label select-field-demo-button"
                      >
                        <MenuItem value="none">None</MenuItem>
                        <MenuItem value="1-2 years">1-2 years</MenuItem>
                        <MenuItem value="3-5 years">3-5 years</MenuItem>
                        <MenuItem value="6-10 years">6-10 years</MenuItem>
                        <MenuItem value="10+ years">10+ years</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "30px",
                  }}
                >
                  <Box>
                    <FormControl sx={{ width: 270 }}>
                      <FormLabel>Date of Birth</FormLabel>
                      <Input
                        type="date"
                        // placeholder="Enter a URL"
                        startAdornment={
                          <InputAdornment position="start">
                            <FontAwesomeIcon
                              icon={faLink}
                              style={{ color: "#74C0FC" }}
                            />
                          </InputAdornment>
                        }
                      />
                    </FormControl>
                  </Box>
                  <Box>
                    <FormControl sx={{ width: 270 }}>
                      <FormLabel
                        sx={{
                          fontSize: "0.75rem", // Reduced font size
                          marginBottom: "4px", // Reduced bottom margin
                          "&.Mui-focused": {
                            padding: "8px 30px", // Reduced padding
                            height: "5px",
                          },
                        }}
                        id="select-field-demo-label"
                        htmlFor="select-field-demo-button"
                      >
                        Availability
                      </FormLabel>
                      <Select
                        sx={{
                          height: "40px", // Explicitly reduce the height of the Select component
                          ".MuiSelect-select": {
                            paddingTop: "4px", // Reduce padding inside the select
                            paddingBottom: "4px", // Reduce padding inside the select
                          },
                        }}
                        defaultValue="now"
                        id="select-field-demo-button"
                        aria-labelledby="select-field-demo-label select-field-demo-button"
                      >
                        <MenuItem value="now">Now</MenuItem>
                        <MenuItem value="2 weeks">2 weeks</MenuItem>
                        <MenuItem value="4 weeks">4 weeks</MenuItem>
                        <MenuItem value="8 weeks">8 weeks</MenuItem>
                        <MenuItem value="12+ weeks">12+ weeks</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    marginRight: "300px",
                  }}
                >
                  <Box>
                    <FormControl sx={{ width: 270 }}>
                      <FormLabel
                        sx={{
                          fontSize: "0.75rem", // Reduced font size
                          marginBottom: "4px", // Reduced bottom margin
                          "&.Mui-focused": {
                            padding: "8px 30px", // Reduced padding
                            height: "5px",
                          },
                        }}
                        id="select-field-demo-label"
                        htmlFor="select-field-demo-button"
                      >
                        Preffered Work Type
                      </FormLabel>
                      <Select
                        defaultValue="Full time"
                        id="select-field-demo-button"
                        aria-labelledby="select-field-demo-label select-field-demo-button"
                        sx={{
                          height: "40px", // Explicitly reduce the height of the Select component
                          ".MuiSelect-select": {
                            paddingTop: "4px", // Reduce padding inside the select
                            paddingBottom: "4px", // Reduce padding inside the select
                          },
                        }}
                      >
                        <MenuItem value="Full time">Full Time</MenuItem>
                        <MenuItem value="part time">Part Time</MenuItem>
                        <MenuItem value="remote">Remote</MenuItem>
                        <MenuItem value="casual">Casual</MenuItem>
                        <MenuItem value="contract">Contract</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    marginRight: "190px",
                  }}
                >
                  <FormLabel
                    sx={{
                      fontSize: "0.75rem", // Reduced font size
                      marginBottom: "4px", // Reduced bottom margin
                      "&.Mui-focused": {
                        padding: "8px 30px", // Reduced padding
                        height: "5px",
                      },
                    }}
                    id="select-field-demo-label"
                    htmlFor="select-field-demo-button"
                  >
                    Salary expectation
                  </FormLabel>
                  <Box component="form">
                    <FormControl fullWidth sx={{ mb: 2 }}>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "5px" /* Increased gap between elements */,
                        }}
                      >
                        <Select
                          id="currency-select"
                          defaultValue="LKR"
                          sx={{
                            height: "45px", // Increased height of the Select component
                            ".MuiSelect-select": {
                              paddingTop: "4px", // Reduce padding inside the select
                              paddingBottom: "4px", // Reduce padding inside the select
                            },
                            marginRight: "2px", // Added marginRight to create a gap
                          }}
                        >
                          <MenuItem value="LKR">LKR</MenuItem>
                          {/* Add other currency options if needed */}
                        </Select>
                        <Input
                          placeholder="Enter amount"
                          type="number"
                          sx={{
                            flexGrow: 1,
                            width: "100%",
                            height: "45px", // Increased height of the Input component
                          }}
                        />
                        <Select
                          defaultValue="Annual"
                          sx={{
                            height: "45px", // Increased height of the Select component
                            ".MuiSelect-select": {
                              paddingTop: "4px", // Reduce padding inside the select
                              paddingBottom: "4px", // Reduce padding inside the select
                            },
                          }}
                        >
                          <MenuItem value="Annual">Annual</MenuItem>
                          <MenuItem value="Monthly">Monthly</MenuItem>
                          <MenuItem value="Weekly">Weekly</MenuItem>
                          <MenuItem value="Hourly">Hourly</MenuItem>
                        </Select>
                      </Box>
                    </FormControl>
                  </Box>
                </Box>
                <Box
                  sx={{
                    width: "68%",
                  }}
                >
                  <FormControl>
                    <FormLabel>Biography</FormLabel>
                    <Textarea
                      placeholder="Write down you biography here.Let the employers know who you are..."
                      minRows={3}
                      endDecorator={
                        <Box
                          sx={{
                            display: "flex",
                            gap: "var(--Textarea-paddingBlock)",
                            pt: "var(--Textarea-paddingBlock)",
                            borderTop: "1px solid",
                            borderColor: "divider",
                            flex: "auto",
                          }}
                        >
                          <IconButton
                            variant="plain"
                            color="neutral"
                            onClick={(event) =>
                              setAnchorEl(event.currentTarget)
                            }
                          >
                            <FormatBold />
                            <KeyboardArrowDown fontSize="md" />
                          </IconButton>
                          <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={() => setAnchorEl(null)}
                            size="sm"
                            placement="bottom-start"
                            sx={{ "--ListItemDecorator-size": "24px" }}
                          >
                            {["200", "normal", "bold"].map((weight) => (
                              <MenuItem
                                key={weight}
                                selected={fontWeight === weight}
                                onClick={() => {
                                  setFontWeight(weight);
                                  setAnchorEl(null);
                                }}
                                sx={{ fontWeight: weight }}
                              >
                                <ListItemDecorator>
                                  {fontWeight === weight && (
                                    <Check fontSize="sm" />
                                  )}
                                </ListItemDecorator>
                                {weight === "200" ? "lighter" : weight}
                              </MenuItem>
                            ))}
                          </Menu>
                          <IconButton
                            variant={italic ? "soft" : "plain"}
                            color={italic ? "primary" : "neutral"}
                            aria-pressed={italic}
                            onClick={() => setItalic((bool) => !bool)}
                          >
                            <FormatItalic />
                          </IconButton>
                          <IconButton
                            variant={underline ? "soft" : "plain"}
                            color={underline ? "primary" : "neutral"}
                            aria-pressed={underline}
                            onClick={() => setUnderline((bool) => !bool)}
                          >
                            <FormatUnderlined />
                          </IconButton>
                          <IconButton
                            variant={bulletPoints ? "soft" : "plain"}
                            color={bulletPoints ? "primary" : "neutral"}
                            aria-pressed={bulletPoints}
                            onClick={() => setBulletPoints((bool) => !bool)}
                          >
                            <FormatListBulleted />
                          </IconButton>
                          <IconButton
                            variant={link ? "soft" : "plain"}
                            color={link ? "primary" : "neutral"}
                            aria-pressed={link}
                            onClick={() => setLink((bool) => !bool)}
                          >
                            <Link />
                          </IconButton>
                        </Box>
                      }
                      sx={{
                        minWidth: 750,
                        fontWeight,
                        fontStyle: italic ? "italic" : "initial",
                        textDecoration: underline ? "underline" : "initial",
                        listStyleType: bulletPoints ? "disc" : "none",
                      }}
                    />
                  </FormControl>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "10px",
                    justifyItems: "flex-start",
                  }}
                >
                  <Box>
                    <Button
                      variant="solid"
                      sx={{
                        display: "block",
                        width: "200px",
                        padding: "10px 0",
                        borderRadius: "15px",
                        backgroundColor: "#814DDE",
                        color: "#fff",
                        fontWeight: 500,
                        fontSize: "15px",
                        cursor: "pointer",
                        transition: "all .3s ease",
                      }}
                    >
                      Save Changes{" "}
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          </TabPanel>

          <TabPanel value="3">
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "40% 60%",
                gap: "3",
                border: 2,
                borderRadius: 3,
                boxShadow: 3,
                pb: 6,
                overflow: "auto",
                maxHeight: "calc(100vh-10px)",
              }}
            >
              <Box
                sx={{
                  pl: 2,
                  pr: 2,
                  pt: 2,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <div>
                    <img
                      src="../../../src/assets/logo.png"
                      alt=""
                      style={{ height: "40px" }}
                    />
                  </div>
                  <div>
                    <p>Where Talents meets Opportunity</p>
                  </div>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    mt: 2,
                    flexGrow: 1,
                  }}
                >
                  <img
                    src="../../../src/assets/Social_media.jpg"
                    alt=""
                    style={{
                      borderRadius: "20px",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "40px",
                  pt: 12,
                  alignItems: "center",
                }}
              >
                {links.map((link, index) => (
                  <Box key={index} sx={{ width: "100%", paddingLeft: 10 }}>
                    <p>Social Link {index + 1}</p>
                    <Box
                      key={index}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        border: "1px solid #ccc",
                        borderRadius: "4px",
                        padding: "5px",
                        width: "90%",
                      }}
                    >
                      <Select
                        sx={{
                          height: "50px", // Explicitly reduce the height of the Select component
                          ".MuiSelect-select": {
                            paddingTop: "4px", // Reduce padding inside the select
                            paddingBottom: "4px", // Reduce padding inside the select
                          },
                        }}
                        value={link.platform}
                        onChange={(event) => handleSocialChange(index, event)}
                        style={{
                          marginRight: "5px",
                          width: "150px",
                          padding: "5px",
                          borderRadius: "4px",
                          backgroundColor: "white", // Set background color
                          // color: 'black', // Set text color
                          border: "1px solid #ccc", // Set border color
                        }}
                      >
                        <MenuItem value="Facebook">
                          <box-icon
                            name="facebook-circle"
                            type="logo"
                            color="#1877f2"
                          ></box-icon>{" "}
                          Facebook
                        </MenuItem>
                        <MenuItem value="Instagram">
                          <box-icon
                            name="instagram"
                            type="logo"
                            color="#E1306C"
                          ></box-icon>{" "}
                          Instagram
                        </MenuItem>
                        <MenuItem value="YouTube">
                          <box-icon
                            name="youtube"
                            type="logo"
                            color="#FF0000"
                          ></box-icon>{" "}
                          YouTube
                        </MenuItem>
                        <MenuItem value="Linkedin">
                          <box-icon
                            name="linkedin-square"
                            type="logo"
                            color="#0077B5"
                          ></box-icon>{" "}
                          Linkedin
                        </MenuItem>
                      </Select>

                      <TextField
                        type="text"
                        placeholder="Profile link/url..."
                        value={link.url}
                        onChange={(event) => handleUrlChange(index, event)}
                        variant="outlined"
                        sx={{ flexGrow: 1, marginRight: "5px" }}
                        InputProps={{
                          sx: { paddingRight: "10px", borderRadius: "10px" },
                        }}
                      />
                      <IconButton onClick={() => handleCancel(index)}>
                        <FontAwesomeIcon
                          icon={faCircleXmark}
                          size="xl"
                          style={{ color: "#ff4747" }}
                        />
                      </IconButton>
                    </Box>
                  </Box>
                ))}
                <Button
                  variant="solid"
                  onClick={handleAddLink}
                  sx={{
                    backgroundColor: "#814DDE"
                  }}
                >
                  Add Another Link
                </Button>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "10px",
                    justifyItems: "flex-start",
                  }}
                >
                  <Box>
                    <Button
                      variant="contained"
                      sx={{
                        display: "block",
                        width: "200px",
                        padding: "10px 0",
                        borderRadius: "15px",
                        backgroundColor: "#814DDE",
                        color: "#fff",
                        fontWeight: 500,
                        fontSize: "15px",
                        cursor: "pointer",
                        transition: "all .3s ease",
                      }}
                    >
                      Save Changes{" "}
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          </TabPanel>

          <TabPanel value="4">
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "40% 60%",
                gap: "3",
                border: 2,
                borderRadius: 3,
                boxShadow: 3,
                pb: 7,
                overflow: "auto",
                maxHeight: "calc(100vh-10px)",
              }}
            >
              <Box
                sx={{
                  pl: 2,
                  pr: 2,
                  pt: 2,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <div>
                    <img
                      src="../../../src/assets/logo.png"
                      alt=""
                      style={{ height: "40px" }}
                    />
                  </div>
                  <div>
                    <p>Where Talents meets Opportunity</p>
                  </div>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    mt: 2,
                    flexGrow: 1,
                  }}
                >
                  <img
                    src="../../../src/assets/2.webp"
                    alt=""
                    style={{
                      borderRadius: "20px",
                      height: "80%",
                      objectFit: "fill",
                    }}
                  />
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "40px",
                  pt: 12,
                  pb: 6,
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    width: "80%",
                  }}
                >
                  <FormLabel style={{ marginBottom: 5 }}>Location</FormLabel>
                  <Input
                    placeholder="Company Location"
                    startDecorator={
                      <Button
                        variant="soft"
                        color="neutral"
                        startDecorator={<LocationOn />}
                      >
                        Locate
                      </Button>
                    }
                    sx={{ width: "100%" }}
                  />
                </Box>

                <Box
                  sx={{
                    width: "80%",
                  }}
                >
                  <FormLabel style={{ marginBottom: 5 }}>
                    Contact Number
                  </FormLabel>
                  <Input
                    placeholder="Company Contact Number"
                    startDecorator={
                      <Button
                        variant="soft"
                        color="neutral"
                        startDecorator={
                          <Avatar
                            src="../../../src/assets/sri-lanka.png"
                            size="lg"
                            sx={{ width: 24, height: 24 }}
                          />
                        }
                      >
                        +94
                      </Button>
                    }
                    sx={{ width: "100%" }}
                  />
                </Box>

                <Box
                  sx={{
                    width: "80%",
                  }}
                >
                  <FormLabel style={{ marginBottom: 5 }}>Email</FormLabel>
                  <Input
                    placeholder="Company Email"
                    startDecorator={
                      <Button
                        variant="soft"
                        color="neutral"
                        startDecorator={<MailIcon />}
                      ></Button>
                    }
                    sx={{ width: "100%" }}
                  />
                </Box>

                {/* Notification Settings */}
                <Box
                  sx={{
                    width: "80%",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      margin: "20px 0",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    Notification
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <FormGroup
                      sx={{ display: "flex", flexDirection: "column" }}
                    >
                      <FormControlLabel
                        control={<Checkbox defaultChecked />}
                        label="Notify me when employers shortlisted me"
                      />
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Notify me when employers saved my profile"
                      />
                      <FormControlLabel
                        control={<Checkbox defaultChecked />}
                        label="Notify me when my applied jobs are expire"
                      />
                    </FormGroup>
                    <FormGroup
                      sx={{ display: "flex", flexDirection: "column" }}
                    >
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Notify me when I have up to 5 job alerts"
                      />
                      <FormControlLabel
                        control={<Checkbox defaultChecked />}
                        label="Notify me when employers rejected me"
                      />
                    </FormGroup>
                  </Box>
                </Box>
                {/* Job Alerts */}
                <Box
                  sx={{
                    width: "80%",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      margin: "20px 0",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    Job Alert
                  </Typography>
                  <Box sx={{ display: "flex", gap: "20px", marginTop: "20px" }}>
                    <Input
                      variant="soft"
                      color="neutral"
                      startDecorator={<BusinessCenterIcon />}
                      placeholder="Your job roles"
                      sx={{ width: "100%" }}
                    />
                    <Input
                      variant="soft"
                      color="neutral"
                      startDecorator={<LocationOn />}
                      placeholder="City, state, country name"
                      sx={{ width: "100%" }}
                    />
                  </Box>
                </Box>

                {/* Profile Privacy */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <Typography variant="h6" sx={{ margin: "20px 0" }}>
                    Privacy
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                      marginLeft: "20%",
                    }}
                  >
                    <Box
                      sx={{
                        width: "80%",
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <Switch
                        checked={profilePrivacy}
                        onChange={handleProfilePrivacyChange}
                      />
                      <FormLabel>Profile Privacy</FormLabel>
                    </Box>

                    {/* Resume Privacy */}
                    <Box
                      sx={{
                        width: "80%",
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <Switch
                        checked={resumePrivacy}
                        onChange={handleResumePrivacyChange}
                      />
                      <FormLabel>Resume Privacy</FormLabel>
                    </Box>
                  </Box>
                </Box>

                {/* Change Password */}
                <Box
                  sx={{
                    width: "80%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Typography level="h6" sx={{ margin: "20px 0" }}>
                    Change Password
                  </Typography>
                  <Box sx={{ display: "flex", gap: "10vh" }}>
                    <Input
                      placeholder="Current Password"
                      type={showPassword ? "text" : "password"} // Dynamically change the type based on showPassword
                      endDecorator={
                        <IconButton
                          variant="plain"
                          color="neutral"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      }
                    />
                    <Input
                      placeholder="New Password"
                      type={showNewPassword ? "text" : "password"} // Dynamically change the type based on showNewPassword
                      endDecorator={
                        <IconButton
                          variant="plain"
                          color="neutral"
                          onClick={handleClickShowNewPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {showNewPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      }
                    />
                    <Input
                      placeholder="Confirm Password"
                      type={showConfirmPassword ? "text" : "password"} // Dynamically change the type based on showConfirmPassword
                      endDecorator={
                        <IconButton
                          variant="plain"
                          color="neutral"
                          onClick={handleClickShowConfirmPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {showConfirmPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      }
                    />
                  </Box>
                </Box>

                {/* Delete Account */}
                <Box
                  sx={{
                    width: "80%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Typography level="h6" sx={{ margin: "20px 0" }}>
                    Delete Account
                  </Typography>
                  <Typography sx={{ margin: "20px 0", textAlign: "center" }}>
                    If you delete your Jobpilot account, you will no longer be
                    able to get information about the matched jobs, following
                    employers, and job alerts, shortlisted jobs, and more. You
                    will be abandoned from all the services of ProPath.com.
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "red",
                      color: "#fff",
                      "&:hover": {
                        backgroundColor: "darkred",
                      },
                    }}
                  >
                    <FontAwesomeIcon icon={faTrashAlt} /> Delete Your Account
                  </Button>
                </Box>

                {/* Save and Previous Buttons */}
                <Box
                  sx={{
                    pt: 3,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "10px",
                      justifyItems: "flex-start",
                    }}
                  >
                    <Box>
                      <Button
                        variant="contained"
                        sx={{
                          display: "block",
                          width: "200px",
                          padding: "10px 0",
                          borderRadius: "15px",
                          backgroundColor: "#814DDE",
                          color: "#fff",
                          fontWeight: 500,
                          fontSize: "15px",
                          cursor: "pointer",
                          transition: "all .3s ease",
                        }}
                      >
                        Save Changes{" "}
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </TabPanel>
        </TabContext>
      </Box>
    </>
  );
}
