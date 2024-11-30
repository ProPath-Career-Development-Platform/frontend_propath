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
import Autocomplete from '@mui/joy/Autocomplete';
import CircularProgress from '@mui/joy/CircularProgress';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import axios from 'axios';
import RichText from '../../../components/jobprovider/dashboard/RichText';
import dayjs from 'dayjs';


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
import { useNavigate } from 'react-router-dom';
import { generateQuestions } from '../../../services/generativeAi';

import {checkUserSubscription} from '../../../utils/checkUserSubcription';
import PaymentModel from '../../../components/jobprovider/dashboard/PaymentModel'




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

  const [paymentOpen,setPaymentOpen] = React.useState(false);

  React.useEffect(() => {
    
    const verifySubscription = async () => {
      const isSubscribed = await checkUserSubscription();

      console.log(isSubscribed);

      setPaymentOpen(isSubscribed);
    };

    verifySubscription();
  }, []);

  const navigate = useNavigate();

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
  const [surLoad,setSurLoad] = React.useState(true);
  const [submitLoad, setSubmitLoad] = React.useState(false);

   /* auto complete*/

    
   const [options, setOptions] = React.useState([]);
   const [inputValue, setInputValue] = React.useState('');
   const [loading, setLoading] = React.useState(false);
   const[text,setText] = React.useState('');
   const [emptyDescription, setEmptyDescription] = React.useState(true);
   const [response, setResponse] = React.useState(false);
   const[limit,setLimit] = React.useState([]);
   const jwtToken = localStorage.getItem('token');
   

   //check-plan-before
   React.useEffect(() => {

    //http://localhost:8080/jobprovider/plan-limits-check

    axios.get('http://localhost:8080/jobprovider/plan-limits-check', {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }).then((response) => {
      setLimit(response.data);
      console.log(response.data);
    }).catch((error) => {
      console.log(error);
    });

  }, []);



  


   React.useEffect(() => {
     const fetchKeywords = async (input) => {

       setLoading(true); // Set loading to true before the fetch request is made

       setOptions([]); // Clear the options before fetching new ones

       try {
         if (input.length > 0) {
           const response = await fetch(`https://api.datamuse.com/sug?s=${input}`);

          

           const data = await response.json();
           
           if (Array.isArray(data)) {
             const formattedOptions = data.map(item => ({
               word: capitalizeWords(item.word)
             }));

             
              
          
             formattedOptions.push({ word: capitalizeWords(input) });
           
             

             setOptions(formattedOptions);
           } else {
             //console.error('Unexpected data format:', data);
             setOptions([]);
           }
         } else {
           setOptions([]);
         }
       } catch (error) {
         console.error('Error fetching keywords:', error);
         setOptions([]);
       } finally {
        setLoading(false);  // Set loading to false after the fetch request is done
       }
     };
 
     fetchKeywords(inputValue);
   }, [inputValue]);

   const capitalizeWords = (str) => {
     return str.replace(/\b\w/g, char => char.toUpperCase());
   };


   /* auto complete over */


  //suevey creator start===========================

  const handleBlur = async (event) => {
    const jobTitle = event.target.value; // Get the job title from the input field
    console.log("User finished typing:", jobTitle);
    setSurLoad(true);
  
    // Generate questions based on the job title
    const questionBank = await generateQuestions(jobTitle);

    console.log(questionBank);
  
    // Check if the creator is initialized
    if (creator === undefined) {
      let options = {
        showLogicTab: false,
        showTranslationTab: false,
        showJSONEditorTab: false,
        showEmbededSurveyTab: false,
        isAutoSave: true,
      };
  
      creator = new SurveyCreator(options);
  
      // Add each question from the bank to the toolbox
      questionBank.forEach((question, index) => {
        creator.toolbox.addItem({
          name: question.name,
          iconName: "icon-default",
          title: question.title,
          json: question,
          category: "Custom", // Optional: Organize in a specific category
        });
      });
  
      creator.saveSurveyFunc = (saveNo, callback) => {
        callback(saveNo, true);
  
        saveSurveyJson(creator.JSON, saveNo, callback);
      };
  
    } else {
      const customItems = creator.toolbox.items.filter(item => item.category === "Custom");
      customItems.forEach(item => {
      creator.toolbox.removeItem(item.name); // Remove the item by name
    });
      // If creator already exists, add new questions to the toolbox
      questionBank.forEach((question) => {
        creator.toolbox.addItem({
          name: question.name,
          iconName: "icon-default",
          title: question.title,
          json: question,
          category: "Custom",
        });
      });
    }
    setCreator(creator); // Update the state with the creator instance
    setSurLoad(false);
  };

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
    if (!formData.description  || emptyDescription) {
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

    setSubmitLoad(true);

   

    if (limit.EXCEED_SERVICES.job ==='exceed') {
      setOpen(true);
      setSubmitLoad(false);
    }else{

      const validationErrors = validateForm();
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
      } else {
        
         


       // alert(JSON.stringify(formData));

        //fetch to post data to the sever localhost only custom form 

        setResponse(true);

        const jwtToken = localStorage.getItem('token');
        // Transform keywords to the desired format
         const formattedTags = formData.tags.map(keyword => keyword.word);

      
           
          const data = {

            jobTitle: formData.jobTitle,
            tags: formattedTags,
            jobRole: formData.jobRole,
            minSalary: formData.minSalary,
            maxSalary: formData.maxSalary,
            salaryType: formData.salaryType,
            education: formData.education,
            experience: formData.experience,
            jobType: formData.jobType,
            vacancies: formData.vacancies,
            expiryDate: formData.expirationDate,
            jobLevel: formData.jobLevel,
            jobDescription: formData.description,
            customizedForm: formData.isCustomizedFormNeeded ?  formData.customizedForm : null,
            postedIn: dayjs().format('YYYY-MM-DD'),
            delete: false,
            status: "active"
          }

          try {

            axios.post('http://localhost:8080/jobprovider/job', data, {
              headers: {
                Authorization: `Bearer ${jwtToken}`,
                'Content-Type': 'application/json'

              },
            }).then((response) => {
              console.log(response.data);

              navigate('/jobprovider/my-jobs/');
              sessionStorage.setItem('jobPostSuc', true);

            }
            ).catch((error) => {
              console.log(error);
            });

          } catch (error) {
            console.error('Error posting job:', error);

          

            
          
          } finally {
            // Set loading to false after the request completes, regardless of success or failure
            setResponse(false);
            setSubmitLoad(false);
          }


        

       

        
        

        
        // Perform further actions like API submission
        //fetch to post data to the server here
      }

    }



  };


  const handleChangeText = (content, delta, source, editor) => {

    //error handling
    if (errors.description) {
      setErrors((prevState) => {
        const newErrors = { ...prevState };
        delete newErrors.description;

        return newErrors;
      });
    }

    //check if the editor is empty
    if (editor.getText().trim().length === 0) {
      setErrors((prevState) => ({
        ...prevState,
        description: 'Description is required',
      }));
      setEmptyDescription(true);
    }else{
      setEmptyDescription(false);
    }


    //set value to description
    setText(editor.getHTML()); // You can also use editor.getText() to get plain text
    setFormData((prev) => ({
      ...prev,
      description: editor.getHTML(),
    }));
   // console.log(editor.getHTML());
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
                    <Input name="jobTitle"   placeholder='Add job tittle, role, vacancies etc' onChange={handleInputChange} onBlur={handleBlur} />
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

<FormControl sx={{mb:2}} error={Boolean(errors.tags)}>
                        

                        <FormLabel>Select Tags</FormLabel>
                        <Autocomplete
                          
                          multiple={true}
                          getOptionLabel={(options) => options.word}
                          name='keyWords'
                          startDecorator={<Button disabled><KeyboardIcon/></Button>}
                          placeholder='Search Keywords...'
                          options={options}
                          loading={loading.keySearching}
                          value={formData.tags}
                          onChange={(event, newValue) => {

                            if (errors.tags) {
                              setErrors((prevState) => {
                                const newErrors = { ...prevState };
                                delete newErrors.tags;
                                return newErrors;
                              });
                            }
                          
                            
                            setFormData({...formData, tags: newValue});
                      
                          }}

                          inputValue={inputValue}
                          onInputChange={(event, newInputValue) => {
                            setInputValue(newInputValue);
                          }}

                          endDecorator={
                            loading.keySearching ? (
                              <CircularProgress size="sm" sx={{ bgcolor: 'background.surface' }} />
                            ) : null
                          }

                        // onInputChange={handleChangeForContact}
                        
                        />

                        {errors.tags && (
                          <FormHelperText>
                            <InfoOutlined/> {errors.tags}
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
                        <Option value="Developer">Developer</Option>
                        <Option value="Designer">Designer</Option>
                        <Option value="Manager">Manager</Option>
                        <Option value="Analyst">Analyst</Option>
                        <Option value="Tester">Tester</Option>
                        <Option value="Consultant">Consultant</Option>
                        <Option value="Coordinator">Coordinator</Option>
                        <Option value="Specialist">Specialist</Option>
                        <Option value="Executive">Executive</Option>
                        <Option value="Director">Director</Option>
                        <Option value="Intern">Intern</Option>

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
                        <Option key="1" value="Hourly">Hourly</Option>
                        <Option key="2" value="Daily">Daily</Option>
                        <Option key="3" value="Weekly">Weekly</Option>
                        <Option key="4" value="Monthly">Monthly</Option>
                        <Option key="5" value="Yearly">Yearly</Option>
                        <Option key="6" value="Project-Based">Project-Based</Option>

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
                          <Option value="High School Diploma">High School Diploma</Option>
                          <Option value="Associate Degree">Associate Degree</Option>
                          <Option value="Bachelor's Degree">Bachelor's Degree</Option>
                          <Option value="Master's Degree">Master's Degree</Option>
                          <Option value="Doctorate (PhD)">Doctorate (PhD)</Option>
                          <Option value="Professional Certification">Professional Certification</Option>
                          <Option value="Diploma or Vocational Training">Diploma or Vocational Training</Option>
                          <Option value="No Formal Education">No Formal Education</Option>
                          <Option value="Currently Enrolled in a Degree Program">Currently Enrolled in a Degree Program</Option>

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
                          <Option value="No Experience">No Experience</Option>
                          <Option value="Less than 1 Year">Less than 1 Year</Option>
                          <Option value="1 to 2 Years">1 to 2 Years</Option>
                          <Option value="3 to 5 Years">3 to 5 Years</Option>
                          <Option value="6 to 10 Years">6 to 10 Years</Option>
                          <Option value="More than 10 Years">More than 10 Years</Option>


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
                          <Option value="Full-Time<">Full-Time</Option>
                          <Option value="Part-Time">Part-Time</Option>
                          <Option value="Contract">Contract</Option>
                          <Option value="Temporary">Temporary</Option>
                          <Option value="Freelance">Freelance</Option>
                          <Option value="Internship">Internship</Option>
                          <Option value="Volunteer">Volunteer</Option>
                          <Option value="Remote">Remote</Option>

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
                          <Option value="Entry Level">Entry Level</Option>
                          <Option value="Mid Level">Mid Level</Option>
                          <Option value="Senior Level">Senior Level</Option>
                          <Option value="Manager">Manager</Option>
                          <Option value="Director">Director</Option>
                          <Option value="Executive">Executive</Option>
                          <Option value="Intern">Intern</Option>
                          <Option value="Volunteer">Volunteer</Option>

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
                        disabled={surLoad}
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

                      endDecorator={ <CircularProgress sx={{display: surLoad && formData.jobTitle ? 'block' : 'none'}}  size='sm'/>}
                        />
                        }
                  >
                    Need a Customized Form?
                  </Typography>
                 


                  <Box borderRadius={10}   sx={{ display: checked ? 'block' : 'none' , mt:1,mb:1  , border: !Boolean(errors.customizedForm) ? '1px solid #CDD7E1' : '1px solid red' , padding:1 }}>

                  {checked && <SurveyCreatorComponent  creator={creator}/>}
                  
                  </Box>

                  

                  </FormControl>
                  


                  <Typography level="title-lg" sx={{marginBottom: '1rem',}} >Job Description</Typography>

                  <FormControl error = {Boolean(errors.description)}>
                 
                   
                    
                    <RichText text={text} handleChange={handleChangeText}/>
                    

                      {
                        errors.description && (
                          <FormHelperText>
                            <InfoOutlined /> {errors.description}
                          </FormHelperText>
                        )
                      }
                  </FormControl>

                  <CardActions sx={{ maxWidth:'200px' }}>
                    <Button loading={response} type='submit' variant="solid" color="primary"  endDecorator={<ArrowForwardOutlinedIcon />}>
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

                <PaymentModel open={paymentOpen} />
          </Box>

  )
}

export default Dashboard