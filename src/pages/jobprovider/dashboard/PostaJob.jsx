import React from 'react'
import { useState } from 'react';
import Button from '@mui/joy/Button';
import Breadcrumbs from '@mui/joy/Breadcrumbs';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import Box from '@mui/joy/Box';
import { NumericFormat } from 'react-number-format';
import Snackbar from '@mui/joy/Snackbar';
import Switch from '@mui/joy/Switch';


import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import CardContent from '@mui/joy/CardContent';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import InfoOutlined from '@mui/icons-material/InfoOutlined';
import FormHelperText from '@mui/joy/FormHelperText';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import {Chip}  from '@mui/joy';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import Textarea from '@mui/joy/Textarea';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';

import { SurveyCreatorComponent, SurveyCreator } from "survey-creator-react";
import "survey-core/defaultV2.css";
import "survey-creator-core/survey-creator-core.css";

const formatDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const NumericFormatAdapter = React.forwardRef(
  function NumericFormatAdapter(props, ref) {
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
  },
);



const Dashboard = () => {

  const today = new Date();
  const nextMonth = new Date(today);
  nextMonth.setMonth(today.getMonth() + 1);

  const [formData, setFormData] = useState({
    jobTitle: '',
    tags: [],
    jobRole: '',
    minSalary: '',
    maxSalary: '',
    salaryType: '',
    education: '',
    experience: '',
    jobType: '',
    vacancies: '',
    expirationDate: '',
    jobLevel: '',
    description: '',
    customizedForm: '',
    isCustomizedFormNeeded: false,
  });

  const [errors, setErrors] = useState({});
  const [open, setOpen] = React.useState(false);
  const [checked, setChecked] = React.useState(false);
  let [creator, setCreator] = useState();
  const [surveyOpen, setsurveyOpen] = React.useState(false);  // error1
  const [errorsurveyOpen, setErrorSurveyOpen] = React.useState(false); // error2


  //suevey creator start===========================




  if (creator === undefined) {
    let options = { showLogicTab: false, showTranslationTab: false,showJSONEditorTab: false, showEmbededSurveyTab: false, isAutoSave: true};
    creator = new SurveyCreator(options);
   // creator.toolbox.removeItem('file');

    creator.saveSurveyFunc = (saveNo, callback) => {
     // console.log(JSON.stringify(creator.JSON));
      callback(saveNo, true);

       // If you use a web service:
      saveSurveyJson(
        creator.JSON,
       saveNo,
        callback
       );


    };
     
    setCreator(creator);
  }

  //creator.JSON = props.json;

  function saveSurveyJson( json, saveNo, callback) {
    const jsonDataString = JSON.stringify(json); // Convert JSON object to string
    const dataToSend = {
      jsonData: jsonDataString // Wrap JSON string within quotes
    };

    // Update formData using functional state update to ensure correctness
    setFormData(prevFormData => ({
      ...prevFormData,
      customizedForm: jsonDataString,
    }));

    callback(saveNo, true);
  }

  //survey js over===========================

  const handleInputChange = (e) => {
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

    //jobTitle
    if (!formData.jobTitle) {
      newErrors.jobTitle = 'Job title is required';
    }

    //tags
    if (!formData.tags || formData.tags.length === 0) {
      newErrors.tags = 'At least one tag is required';
    }

    //jobRole
    if (!formData.jobRole) {
      newErrors.jobRole = 'Job role is required';
    }

    //Salary (min and max)==========================================
    if (!formData.minSalary) {
      newErrors.minSalary = 'Minimum salary is required';
    }else if(formData.minSalary && Number(formData.minSalary) < 0) {
      newErrors.minSalary = 'Minimum salary must be greater than 0';
    }

    if (!formData.maxSalary) {
      newErrors.maxSalary = 'Maximum salary is required';
    }else if(formData.maxSalary && Number(formData.maxSalary) < 0) {
      newErrors.maxSalary = 'Maximum salary must be greater than 0';
    }else if(formData.minSalary && formData.maxSalary && Number(formData.minSalary) >= Number(formData.maxSalary)) {
      newErrors.maxSalary = 'Maximum salary must be greater than minimum salary';
    }
    //Salery (min and max over)==========================================

    //salaryType
    if (!formData.salaryType) {
      newErrors.salaryType = 'Salary type is required';
    }

    //education
    if (!formData.education) {
      newErrors.education = 'Education is required';
    }

    //experience
    if (!formData.experience) {
      newErrors.experience = 'Experience is required';
    }

    //jobType
    if (!formData.jobType) {
      newErrors.jobType = 'Job type is required';
    }

    //vacancies ==========================================
    if (!formData.vacancies) {
      newErrors.vacancies = 'Number of vacancies is required';
    }else if (formData.vacancies && Number(formData.vacancies) <= 0) {
      newErrors.vacancies = 'Number of vacancies must be greater than 0';
    }

    //vacancies over ==========================================

    //expirationDate
    if (!formData.expirationDate) {
      newErrors.expirationDate = 'Expiration date is required';
    }

    //jobLevel
    if (!formData.jobLevel) {
      newErrors.jobLevel = 'Job level is required';
    }

    //description
    if (!formData.description) {
      newErrors.description = 'Description is required';
    }

    //customizedForm
    if (checked && !formData.customizedForm) {
      newErrors.customizedForm = 'Customized form is required';
      if(Object.keys(newErrors).length <=1) setErrorSurveyOpen(true);
    }
    // Add more validation rules as needed
    return newErrors;
  };


  



  const handleSubmit = (event) => {
    event.preventDefault();

    const plan = 'basic'; // Check if user is on free plan
    const postCount = 0; // Check if user has reached the maximum number of posts allowed

    if (plan === 'basic' && postCount >= 1) {
      setOpen(true);
    }else if (plan === 'standard' && postCount >= 3) {
      setOpen(true);
    }else if (plan === 'premium' && postCount >= 6) {
      setOpen(true);
    }else{

      const validationErrors = validateForm();
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
      } else {
        
         


        alert(JSON.stringify(formData));

        //fetch to post data to the sever localhost only custom form 

        

       

        
        

        
        // Perform further actions like API submission
        //fetch to post data to the server here
      }

    }



  };


  return (
    
    <Box
            component="main"
            className="MainContent"
            sx={{
              px: { xs: 2, md: 6 },
              pt: {
                xs: 'calc(12px + var(--Header-height))',
                sm: 'calc(12px + var(--Header-height))',
                md: 3,
              },
              pb: { xs: 2, sm: 2, md: 3 },
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              minWidth: 0,
              height: '100dvh',
              gap: 1,
              overflow: 'auto',
              maxHeight: 'calc(100vh - 10px)',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
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
                display: 'flex',
                mb: 1,
                gap: 1,
                flexDirection: { xs: 'column', sm: 'row' },
                alignItems: { xs: 'start', sm: 'center' },
                flexWrap: 'wrap',
                justifyContent: 'space-between',
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
                maxHeight: 'max-content',
                minWidth: '100%',
                mx: 'auto',
                backgroundColor: 'transparent',
              }}
            >
                <Typography level="title-lg" startDecorator={<WorkOutlineOutlinedIcon />}>
                  Enter Details of the Job
                </Typography>
                <Divider inset="none" />
                <CardContent>

                <Typography level="title-lg" sx={{marginBottom: '1rem',}} >Job Informations</Typography>

                  <FormControl sx={{ gridColumn: '1/-1', marginBottom:1 }} error={Boolean(errors.jobTitle)}>
                    <FormLabel>Job Title</FormLabel>
                    <Input name="jobTitle"   placeholder='Add job tittle, role, vacancies etc' onChange={handleInputChange} />
                    {errors.jobTitle && (
                        <FormHelperText>
                            <InfoOutlined /> {errors.jobTitle}
                        </FormHelperText>
                    )}
                  </FormControl>

                  <Box sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, minmax(80px, 1fr))',
                    gap: 6,
                    marginBottom: '1rem',
                  }}>


                  <FormControl error={Boolean(errors.tags)} >

                  <FormLabel>Tags</FormLabel>
                    <Select
                      name="tags"
                      multiple
                      placeholder="Job keyword, tags etc..."
                      onChange={handleTagSelectChange}
                      renderValue={(selected) => (
                        <Box sx={{ display: 'flex', gap: '0.25rem' }}>
                          {selected.map((selectedOption) => (
                            <Chip variant="soft" color="primary">
                              {selectedOption.label}
                            </Chip>
                          ))}
                        </Box>
                      )}
                      sx={{
                        minWidth: '15rem',
                      }}
                      slotProps={{
                        listbox: {
                          sx: {
                            width: '100%',
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
                        name='jobRole' 
                        placeholder="Select a Role" 

                        onChange={(event, newValue) => { 

                                  if (errors.jobRole) {
                                    setErrors((prevState) => {
                                      const newErrors = { ...prevState };
                                      delete newErrors.jobRole;
                                      return newErrors;
                                    });
                                  }

                                  setFormData({ ...formData, jobRole: newValue }); 

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


                  </Box>

                  <Typography level="title-lg" sx={{marginBottom: '1rem',}} >Salery</Typography>

                  <Box sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, minmax(80px, 1fr))',
                    gap: 1.5,
                    marginBottom: '1rem',
                  }}>

                  <FormControl error={Boolean(errors.minSalary)}>
                    <FormLabel>Min Salery</FormLabel>
                    <Input 
                      name = 'minSalary'
                      onChange={handleInputChange}
                      placeholder='Enter Minimum Salary'
                      startDecorator={<Button disabled variant='soft' color="neutral">LKR</Button>}
                      slotProps={{
                        input: {
                          component: NumericFormatAdapter,
                          
                        },
                      }}
                      />
                      {
                        errors.minSalary && (
                          <FormHelperText>
                            <InfoOutlined /> {errors.minSalary}
                          </FormHelperText>
                        )
                      }
                  </FormControl>

                  <FormControl error={Boolean(errors.maxSalary)}>
                    <FormLabel>Max Salery</FormLabel>
                    <Input 
                      name = 'maxSalary'
                      placeholder='Enter Maximum Salary'
                      onChange={handleInputChange}
                      startDecorator={<Button disabled variant='soft' color="neutral">LKR</Button>}
                      slotProps={{
                        input: {
                          component: NumericFormatAdapter,
                        },
                      }} 
                      />
                      {
                        errors.maxSalary && (
                          <FormHelperText>
                            <InfoOutlined /> {errors.maxSalary}
                          </FormHelperText>
                        )
                      }
                  </FormControl>

                  <FormControl error={Boolean(errors.salaryType)}>
                    <FormLabel>Salary Type</FormLabel>
                      <Select 
                      
                        placeholder="Select a Type"
                        onChange={(event, newValue) => { 

                          if (errors.salaryType) {
                            setErrors((prevState) => {
                              const newErrors = { ...prevState };
                              delete newErrors.salaryType;
                              return newErrors;
                            });
                          }
                          
                          setFormData({ ...formData, salaryType: newValue }); }}
                        
                        >
                          <Option key='1' value="dog">Dog</Option>
                          <Option key='2' value="cat">Cat</Option>
                          <Option key='3' value="fish">Fish</Option>
                          <Option key='4' value="bird">Bird</Option>
                      </Select>

                      {
                        errors.salaryType && (
                          <FormHelperText>
                            <InfoOutlined /> {errors.salaryType}
                          </FormHelperText>
                        )
                      }
                  </FormControl>

                  </Box>

                  <Typography level="title-lg" sx={{marginBottom: '1rem',}} >Advanced Informations</Typography>

                  <Box sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, minmax(80px, 1fr))',
                    gap: 1.5,
                    marginBottom: '1rem',
                  }}>

                  <FormControl error={Boolean(errors.education)}>
                    <FormLabel>Education</FormLabel>
                      <Select 
                        placeholder="Select"
                        onChange={(event, newValue) => {
                            
                            if (errors.education) {
                              setErrors((prevState) => {
                                const newErrors = { ...prevState };
                                delete newErrors.education;
                                return newErrors;
                              });
                            }
  
                            setFormData({ ...formData, education: newValue }); }
                        }
                        >
                          <Option value="dog">Dog</Option>
                          <Option value="cat">Cat</Option>
                          <Option value="fish">Fish</Option>
                          <Option value="bird">Bird</Option>
                      </Select>

                      {
                        errors.education && (
                          <FormHelperText>
                            <InfoOutlined /> {errors.education}
                          </FormHelperText>
                        )
                      }
                  </FormControl>


                  <FormControl error= {Boolean(errors.experience)}>
                    <FormLabel>Experience</FormLabel>
                      <Select 
                        placeholder="Select"
                        onChange={(event, newValue) => {
                              
                              if (errors.experience) {
                                setErrors((prevState) => {
                                  const newErrors = { ...prevState };
                                  delete newErrors.experience;
                                  return newErrors;
                                });
                              }
    
                              setFormData({ ...formData, experience: newValue }); }
                          }
                      >
                          <Option value="dog">Dog</Option>
                          <Option value="cat">Cat</Option>
                          <Option value="fish">Fish</Option>
                          <Option value="bird">Bird</Option>
                      </Select>

                      {
                        errors.experience && (
                          <FormHelperText>
                            <InfoOutlined /> {errors.experience}
                          </FormHelperText>
                        )
                      }
                  </FormControl>

                
                  <FormControl error={Boolean(errors.jobType)}>
                    <FormLabel>Job Type</FormLabel>
                      <Select 
                        placeholder="Select"
                        onChange={(event, newValue) => {
                              
                              if (errors.jobType) {
                                setErrors((prevState) => {
                                  const newErrors = { ...prevState };
                                  delete newErrors.jobType;
                                  return newErrors;
                                });
                              }
    
                              setFormData({ ...formData, jobType: newValue }); }
                          }
                      >
                          <Option value="dog">Dog</Option>
                          <Option value="cat">Cat</Option>
                          <Option value="fish">Fish</Option>
                          <Option value="bird">Bird</Option>
                      </Select>

                      {
                        errors.jobType && (
                          <FormHelperText>
                            <InfoOutlined /> {errors.jobType}
                          </FormHelperText>
                        )
                      }

                  </FormControl>

                  <FormControl error={Boolean(errors.vacancies)}>
                    <FormLabel>Vacancies</FormLabel>
                      <Input 
                      placeholder='Enter number of vacancies' 
                      onChange={handleInputChange}
                      name='vacancies'
                      />

                      {
                        errors.vacancies && (
                          <FormHelperText>
                            <InfoOutlined /> {errors.vacancies}
                          </FormHelperText>
                        )
                      }
                  </FormControl>


                  <FormControl error={Boolean(errors.expirationDate)}>
                    <FormLabel>Expiration Date</FormLabel>
                      <Input 
                      name="expirationDate"
                      type="date" 
                      placeholder='Select a date'
                      onChange={handleInputChange}
                      slotProps={{
                        input: {
                          min: formatDate(today),
                          max: formatDate(nextMonth),
                        },
                      }}/>

                      {
                        errors.expirationDate && (
                          <FormHelperText>
                            <InfoOutlined /> {errors.expirationDate}
                          </FormHelperText>
                        )
                      }
                  </FormControl>

                
                  <FormControl error={Boolean(errors.jobLevel)}>
                    <FormLabel>Job Level</FormLabel>
                      <Select
                        placeholder="Select"
                        onChange={(event, newValue) => {
                                
                                if (errors.jobLevel) {
                                  setErrors((prevState) => {
                                    const newErrors = { ...prevState };
                                    delete newErrors.jobLevel;
                                    return newErrors;
                                  });
                                }
      
                                setFormData({ ...formData, jobLevel: newValue }); }
                            }

                        >
                          <Option value="dog">Dog</Option>
                          <Option value="cat">Cat</Option>
                          <Option value="fish">Fish</Option>
                          <Option value="bird">Bird</Option>
                      </Select>

                      {
                        errors.expirationDate && (
                          <FormHelperText>
                            <InfoOutlined /> {errors.expirationDate}
                          </FormHelperText>
                        )
                      }

                  </FormControl>

                  </Box>

                  {/* Swithch here for Survey */}

                  <FormControl error={Boolean(errors.customizedForm)}>

                  <Typography sx={{marginBottom:'1rem'}} level="title-lg" endDecorator={
                    
                        <Switch
                        sx={{ ml: 1 }}
                        checked={checked}
                        onChange={ (event) => {
                          const isChecked = event.target.checked;
                          setChecked(isChecked);
                          console.log(isChecked);


                          setFormData({ ...formData, isCustomizedFormNeeded: isChecked });

                          
                            

                          if(!isChecked){
                            setsurveyOpen(true);

                            setErrors((prevState) => {
                              const newErrors = { ...prevState };
                              delete newErrors.customizedForm;
                              return newErrors;
                            });
                          }

                        }
                      }
                        />
                        }
                  >
                    Need a Customized Form?
                  </Typography>

                  <Box borderRadius={10}   sx={{ display: checked ? 'block' : 'none' , mt:1,mb:1  , border: !Boolean(errors.customizedForm) ? '1px solid #CDD7E1' : '1px solid red' , padding:1 }}>

                    <SurveyCreatorComponent  creator={creator} />
                  
                  </Box>

                  

                  </FormControl>
                  


                  <Typography level="title-lg" sx={{marginBottom: '1rem',}} >Job Description</Typography>

                  <FormControl error = {Boolean(errors.description)}>
                    <FormLabel>Description</FormLabel>
                      <Textarea
                      name="description"
                      onChange={handleInputChange}
                      placeholder="Enter job description here..."
                      minRows={4}
                      maxRows={6} 
                       />

                      {
                        errors.description && (
                          <FormHelperText>
                            <InfoOutlined /> {errors.description}
                          </FormHelperText>
                        )
                      }
                  </FormControl>

                  <CardActions sx={{ maxWidth:'200px' }}>
                    <Button type='submit' variant="solid" color="primary" endDecorator={<ArrowForwardOutlinedIcon />}>
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
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
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
                   <Box sx={{display: 'flex' , flexDirection:'column'}}>

                      <Typography level='title-md' textAlign={'left'}>Please consider upgrading your plan.</Typography>
                      <Typography level='body-sm'>You have exceeded the posting limit for your current plan.</Typography>
                    </Box>
                    
                  </Snackbar>

                  <Snackbar
                    variant="soft"
                    color="danger"
                    open={surveyOpen}
                    onClose={() => setsurveyOpen(false)}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    startDecorator={<WarningAmberIcon />}
                    endDecorator={
                      <Button
                        onClick={() => setsurveyOpen(false)}
                        size="sm"
                        variant="soft"
                        color="danger"
                      >
                        Dismiss
                      </Button>
                    }
                  >
                    <Box sx={{display: 'flex' , flexDirection:'column'}}>

                      <Typography level='title-md' textAlign={'left'}>The customized form has been disabled.</Typography>
                      <Typography level='body-sm'>This form will not be included with the job posting.</Typography>
                    </Box>
                    
                  </Snackbar>


                  <Snackbar
                    variant="soft"
                    color="danger"
                    open={errorsurveyOpen}
                    onClose={() => setErrorSurveyOpen(false)}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
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
                    <Box sx={{display: 'flex' , flexDirection:'column'}}>

                    <Typography level='title-md' textAlign={'left'}>Please create the form.</Typography>
                    <Typography level='body-sm'>Drag and drop items from the toolbox on the left side.</Typography>
                    </Box>
                  </Snackbar>
                </React.Fragment>

                
          </Box>

  )
}

export default Dashboard