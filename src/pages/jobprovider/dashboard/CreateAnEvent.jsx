import * as React from 'react';

import Box from '@mui/joy/Box';
import Breadcrumbs from '@mui/joy/Breadcrumbs';
import Link from '@mui/joy/Link';
import Typography, { typographyClasses } from '@mui/joy/Typography';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import Divider from '@mui/joy/Divider';
import Stack from '@mui/joy/Stack';
import Stepper from '@mui/joy/Stepper';
import Step, { stepClasses } from '@mui/joy/Step';
import StepIndicator, { stepIndicatorClasses } from '@mui/joy/StepIndicator';
import { styled } from '@mui/joy';

import Card from '@mui/joy/Card';
import CardOverflow from '@mui/joy/CardOverflow';
import CardContent from '@mui/joy/CardContent';

import Input from '@mui/joy/Input';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';

import CardActions from '@mui/joy/CardActions';
import Button from '@mui/joy/Button';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import AppRegistrationRoundedIcon from '@mui/icons-material/AppRegistrationRounded';
import EventIcon from '@mui/icons-material/Event';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import AspectRatio from '@mui/joy/AspectRatio';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import Autocomplete from '@mui/joy/Autocomplete';
import CircularProgress from '@mui/joy/CircularProgress';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import Textarea from '@mui/joy/Textarea';
import IconButton from '@mui/joy/IconButton';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import Tooltip from '@mui/joy/Tooltip';
import Badge from '@mui/joy/Badge';
import InfoOutlined from '@mui/icons-material/InfoOutlined';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import UnpublishedIcon from '@mui/icons-material/Unpublished';
import MapBoxGeo from '../../../components/jobprovider/dashboard/mapBoxGeo';


import ImageKit from "imagekit";
import axios from 'axios';
import RichText from '../../../components/jobprovider/dashboard/RichText';

import {checkUserSubscription} from '../../../utils/checkUserSubcription';
import PaymentModel from '../../../components/jobprovider/dashboard/PaymentModel'

function CreateAnEvent() {

  const [paymentOpen,setPaymentOpen] = React.useState(false);

  React.useEffect(() => {
    
    const verifySubscription = async () => {
      const isSubscribed = await checkUserSubscription();

      console.log(isSubscribed);

      setPaymentOpen(isSubscribed);
    };

    verifySubscription();
  }, []);

  const imagekit = new ImageKit({
   
    urlEndpoint: import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT,
    publicKey: import.meta.env.VITE_IMAGEKIT_PUBLIC_KEY,
    privateKey: import.meta.env.VITE_IMAGEKIT_PRIVATE_KEY
   
  });

  const uploadImage = async (file) => {
    try {
      const response = await imagekit.upload({
        file: file, // the file you want to upload
        fileName: file.name, // file name you want to save as
      });
  
      // Return the uploaded image URL
      return response.url; 
    } catch (error) {
      console.error("Error uploading image:", error);
      return null; // Return null in case of an error
    }
  };
  



  const VisuallyHiddenInput = styled('input')`
        clip: rect(0 0 0 0);
        clip-path: inset(50%);
        height: 1px;
        overflow: hidden;
        position: absolute;
        bottom: 0;
        left: 0;
        white-space: nowrap;
        width: 1px;
      `;
    
      const [loading, setLoading] = React.useState({
        bannerImg: false,
        keySearching: false,
      }); // State for loading status

    const [formData, setFormData] = React.useState({
        bannerImg: false,
        bannerFile:'',
        eventTitle: '',
        eventDate: '',
        startTime: '',
        endTime: '',
        maxParticipant: '',
        closeDate: '',
        mapLocation: '',
        keyWords: [],
        eventDescription: '',
        bannerUrl: '',
        latitude: 6.9387469, 
        longitude: 79.8541134,
        


      }); // State for form data

      //errors

      const [error, setError] = React.useState({});
      const [step , setStep] = React.useState(0);
      const[response, setResponse] = React.useState(
        {
        loading : false,
        error : false,
      }
      );

      const [emptyDescription, setEmptyDescription] = React.useState(true);

      const handleNextStep = () => {
        if (step < 2) {

          if (step === 0) {
            const errors = validationStep1();
            if (Object.keys(errors).length > 0) {
              return;
            }else{
              setStep(prevStep => prevStep + 1);
            
            }
          }else if(step === 1){
            const errors = validationStep2();

            if (Object.keys(errors).length > 0) {
              return;
            }else{
              setStep(prevStep => prevStep + 1);
            }

          }

           

          
        }
      }

      const handleBackStep = () => {
        if (step > 0) {
          setStep(prevStep => prevStep - 1);
        }
      }

      //errors validation

      const validationStep1 = () => {
        const newErrors = {};

        if (!formData.eventTitle) {
          newErrors.eventTitle = 'Event Title is required';
        }

        if (!formData.eventDate) {
          newErrors.eventDate = 'Event Date is required';
        } else if (new Date(formData.eventDate) < new Date()) {
          newErrors.eventDate = 'Event Date should be greater than today';
        }

        if (!formData.bannerImg) {
          newErrors.bannerImg = 'Event Banner is required';
        }

        setError(newErrors);

       return newErrors;

       //return [];

    
        

      }

      const validationStep2 = () => {

        const newErrors = {};

        if (!formData.startTime) {
          newErrors.startTime = 'Start Time is required';
        }

        if (!formData.endTime) {
          newErrors.endTime = 'End Time is required';
        }

        if (!formData.maxParticipant) {
          newErrors.maxParticipant = 'Maximum Participant is required';
        }else if (formData.maxParticipant < 1) {
          newErrors.maxParticipant = 'Maximum Participant should be greater than 0';
        }

        if (!formData.closeDate) {
          newErrors.closeDate = 'Registration Closing Date is required';
        }

        if (!formData.mapLocation) {
          newErrors.mapLocation = 'Event Location is required';
        }

        setError(newErrors);

       return newErrors;

      // return [];
    

      }

      const validationStep3 = () => {

        const newErrors = {};

        if (formData.keyWords.length < 1) {
          newErrors.keyWords = 'Key Words is required';
        }

        if (!formData.eventDescription || emptyDescription) {
          newErrors.eventDescription = 'Event Description is required';
        }
        
        

        setError(newErrors);

        return newErrors;
      }
        






    /* auto complete*/

    
    const [options, setOptions] = React.useState([]);
    const [inputValue, setInputValue] = React.useState('');

    const[text,setText] = React.useState('');

   


    React.useEffect(() => {
      const fetchKeywords = async (input) => {

        setLoading((prev) => ({
          ...prev,
          keySearching: true,
        }));

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
          setLoading((prev) => ({
            ...prev,
            keySearching: false,
          }));  // Set loading to false after the fetch request is done
        }
      };
  
      fetchKeywords(inputValue);
    }, [inputValue]);

    const capitalizeWords = (str) => {
      return str.replace(/\b\w/g, char => char.toUpperCase());
    };


    /* auto complete over */

    const handleChange = (e) => {
      const { name, value } = e.target;
  
      if (error[name]) {
        setError((prevState) => {
          const newErrors = { ...prevState };
          delete newErrors[name];
          return newErrors;
        });
      }
  
  
  
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    };

    const imgInputHandle = (e) =>{
      const file = e.target.files[0];
      const inputTagName = e.target.name;
      //file type validation only accept (jpg,jpeg,png)

      if(error.bannerImg){
        setError((prevState) => {
          const newErrors = { ...prevState };
          delete newErrors.bannerImg;
          return newErrors;
        });
      }
  
       // File type validation
       if (!file.type.match('image/jpeg') && !file.type.match('image/png')) {
        alert('Please select a jpg, jpeg, or png image file');
        return;
      }
  
  
  
      const reader = new FileReader();
  
      setLoading(
        (prev) => ({
          ...prev,
          [inputTagName]: true,
        })
      ); // Start loading
  
  
      reader.onloadend = () =>{
        setFormData((prev) => ({
          ...prev,
          [inputTagName]: reader.result,
        }));

        setFormData((prev) => ({
          ...prev,
          bannerFile: file,
        }));

     
  
        setImgSnackOpen(true);
  
        setLoading(
          (prev) => ({
            ...prev,
            [inputTagName]: false,
          })
        ); // Stop loading
      };
  
      reader.readAsDataURL(file);
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        
       
          const errors = validationStep3();
          if (Object.keys(errors).length > 0) {
            return;

          }else{

         /*   setResponse((prev) => ({
              ...prev,
              loading: true,
            })
            );*/


           // setStep(prevStep => prevStep + 1);
           // alert(JSON.stringify(formData));

            //send data to server

            const jwtToken = localStorage.getItem('token');
            // Transform keywords to the desired format
             const formattedKeywords = formData.keyWords.map(keyword => keyword.word);

            
             setResponse((prev) => ({
               ...prev,
               loading: true,
             }));
             
             const uploadedBannerUrl = await uploadImage(formData.bannerFile);

           
             
           
          

            const eventData = {
              title: formData.eventTitle,
              date: formData.eventDate,
              banner: uploadedBannerUrl,
              startTime: formData.startTime,
              endTime: formData.endTime,
              maxParticipant: parseInt(formData.maxParticipant, 10), // Convert to number
              closeDate: formData.closeDate,
              location: formData.mapLocation,
              latitude: formData.latitude,
              longitude: formData.longitude,
              keyWords: formattedKeywords, // Format keyWords
              description: formData.eventDescription,
              delete: "false", // You can use a boolean instead of string if needed
              status: "active", // You can use a boolean instead of string if needed
              
            };

            console.log(eventData);

            try {
              // Set loading to true before the request
              
            
              const response = await axios.post('http://localhost:8080/jobprovider/event', eventData, {
                headers: {
                  Authorization: `Bearer ${jwtToken}`,
                  'Content-Type': 'application/json',
                },
              });
            
              // Check if the response is successful
              if (response.status >= 200 && response.status < 300) {
                console.log('Event created:', response.data);
                
                // Increment the step after a successful response
                setStep((prevStep) => prevStep + 1);
              } else {
                console.error('Unexpected response status:', response.status);
              }
              
            } catch (error) {

              console.error('Error creating event:', error);
              setStep((prevStep) => prevStep + 1);
              setResponse((prev) => ({
                ...prev,
                error: true,
              }));

            } finally {
              // Set loading to false after the request completes, regardless of success or failure
              setResponse((prev) => ({
                ...prev,
                loading: false,
              }));
            }


            

           

          }
        


    }


    // function to address
    const handleAddress = (address) => {
      setFormData((prev) => ({
        ...prev,
        mapLocation: address,
      }));

      console.log(address);

    }

    // handle lat
    const handleLat = (lat) => {
      setFormData((prev) => ({
        ...prev,
        latitude: lat,
      }));

      console.log(lat);
    }

    // handle long

    const handleLong = (long) => {
      setFormData((prev) => ({
        ...prev,
        longitude: long,
      }));

      console.log(long);

    }
  



  const handleChangeText = (content, delta, source, editor) => {

    //error handling
    if (error.eventDescription) {
      setError((prevState) => {
        const newErrors = { ...prevState };
        delete newErrors.eventDescription;

        return newErrors;
      });
    }

    //check if the editor is empty
    if (editor.getText().trim().length === 0) {
      setError((prevState) => ({
        ...prevState,
        eventDescription: 'Event Description is required',
      }));
      setEmptyDescription(true);
    }else{
      setEmptyDescription(false);
    }


    //set value to description
    setText(editor.getHTML()); // You can also use editor.getText() to get plain text
    setFormData((prev) => ({
      ...prev,
      eventDescription: editor.getHTML(),
    }));
    console.log(editor.getHTML());
  };




    

    const today = new Date();

    const formatDate = (date) => {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
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
                  Settings
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
                Create An Event
              </Typography>
              
            </Box>

            <Divider />

            


          
            <form
                 onSubmit={handleSubmit}
            >    
                <Card
                    sx={{
                        display: 'flex',
                        width: {xs: '100%',sm: '100%' ,md: '100%',lg:'1000px'},
                        mx: 'auto',
                        px: { xs: 2, md: 6 },
                        py: { xs: 2, md: 3 },
                    }}

                >
                
                
            

                <Stepper
      size="lg"
      sx={{
        width: '100%',
        '--StepIndicator-size': '3rem',
        '--Step-connectorInset': '0.5rem',
        '--Step-connectorRadius': '1rem',
        '--Step-connectorThickness': '4px',
        '--joy-palette-success-solidBg': 'var(--joy-palette-primary-400)',
        [`& .${stepClasses.completed}`]: {
          '&::after': { bgcolor: 'primary.solidBg' },
        },
        [`& .${stepClasses.active}`]: {
          [`& .${stepIndicatorClasses.root}`]: {
            border: '4px solid',
            borderColor: '#fff',
            boxShadow: (theme) => `0 0 0 3px ${theme.vars.palette.primary[500]}`,
          },
        },
        [`& .${stepClasses.disabled} *`]: {
          color: 'neutral.softDisabledColor',
        },
      }}
    >
      <Step
        completed = {step > 0}
        orientation="vertical"
        active={step === 0}
        indicator={
            
            step > 0 ? (
                <StepIndicator variant="solid" color="primary">
                <CheckRoundedIcon />
                </StepIndicator>
            ):(
                <StepIndicator variant="outlined" color="primary">
                <AppRegistrationRoundedIcon />
              </StepIndicator>
            )
        }
       >

        <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 1,
            textAlign: 'center',

        }}>
          <Typography sx={{
            textTransform: 'uppercase',
            fontWeight: 'lg',
            fontSize: { xs: '0.75rem', sm: '0.875rem' },
            letterSpacing: '0.5px',
          }}
          level="title-sm">Step 1</Typography>
            
            <Typography sx={{fontSize:{xs:'0.73rem', sm:'0.8rem', md:'1rem'}}}>Basic Informations</Typography>
        </Box>
        

        </Step>
      <Step
        orientation="vertical"
        completed = {step > 1}
        active={step === 1}
        indicator={
            step > 1 ? (
                <StepIndicator variant="solid" color="primary">
                <CheckRoundedIcon />
                </StepIndicator>
            ):(
                <StepIndicator variant="outlined" color="primary">
                    <EventIcon />
                </StepIndicator>
            )

        }
      >

    <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 1,
            textAlign: 'center',

        }}>
          <Typography sx={{
            textTransform: 'uppercase',
            fontWeight: 'lg',
            fontSize: { xs: '0.75rem', sm: '0.875rem' },
            letterSpacing: '0.5px',
          }}
          level="title-sm">Step 2</Typography>
            
            <Typography sx={{fontSize:{xs:'0.73rem', sm:'0.8rem', md:'1rem'}}}>Event Details</Typography>
        </Box>

        </Step>
      <Step
        orientation="vertical"
        active={step === 2}
        indicator={
          step > 2 ? (
              <StepIndicator variant="solid" color="primary">
              <CheckRoundedIcon />
              </StepIndicator>
          ):(
              <StepIndicator variant="outlined" color="primary">
                  <EventIcon />
              </StepIndicator>
          )

      }
      >

    <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 1,
            textAlign: 'center',

        }}>
          <Typography sx={{
            textTransform: 'uppercase',
            fontWeight: 'lg',
            fontSize: { xs: '0.75rem', sm: '0.875rem' },
            letterSpacing: '0.5px',
          }}
          level="title-sm">Step 3</Typography>
            
            <Typography sx={{fontSize:{xs:'0.73rem', sm:'0.8rem', md:'1rem'}}}>Additional Info</Typography>
        </Box>

      </Step>
     
    </Stepper>

   


    <Divider />

       
                <CardContent>
            
                   
                  <Box sx={{
                      display: step != 0 ? 'none' :'',
                  }}>
                    <Box
                      sx={{
                          display: { xs: 'block', sm: 'grid' },
                          gridTemplateColumns: 'repeat(2, minmax(80px, 1fr))',
                          gap: '1rem',
                          marginBottom: '1rem',  
                      }}
                    >

                        <FormControl  sx={{ mt: 2 }} error={Boolean(error.eventTitle)}>
                            <FormLabel htmlFor="event-title">Event Title</FormLabel>
                            <Input 
                                  name="eventTitle" 
                                  placeholder="Enter Event Title"  
                                  value={formData.eventTitle}   
                                  onChange={
                                              (event) => {

                                                if (error.eventTitle) {
                                                  setError((prevState) => {
                                                    const newErrors = { ...prevState };
                                                    delete newErrors.eventTitle;
                                                    return newErrors;
                                                  });
                                                }

                                              
                                                setFormData({...formData,eventTitle: event.target.value})
                                               }
                                            } 
                            />

                            {error.eventTitle && (
                              <FormHelperText>
                                <InfoOutlined/> {error.eventTitle}
                              </FormHelperText>
                            )}
                        </FormControl>

                        <FormControl  sx={{ mt: 2 }} error={Boolean(error.eventDate)}>
                            <FormLabel htmlFor="event-title">Event Date</FormLabel>
                            <Input 
                                  name="eventDate" 
                                  type='date' 
                                  placeholder="Select Event Date" 
                                  value={formData.eventDate} 
                                  slotProps={{
                                    input:{
                                      min:formatDate(today)
                                    }
                                  }}
                                  onChange={
                                    
                                              (event) => { 
                                                
                                                if (error.eventDate) {
                                                  setError((prevState) => {
                                                    const newErrors = { ...prevState };
                                                    delete newErrors.eventDate;
                                                    return newErrors;
                                                  });
                                                }


                                                setFormData({...formData,eventDate: event.target.value})
                                              }
                                           } 
                                  />

                            {error.eventDate && (
                              <FormHelperText>
                                <InfoOutlined/> {error.eventDate}
                              </FormHelperText>
                            )}
                        </FormControl>

                      </Box>

                        <Typography level="title-md">Event Banner</Typography>

                        <AspectRatio color={error.bannerImg ? 'danger' : 'neutral'} variant='outlined'  ratio="21/9" objectFit='fill'  sx={{  bgcolor: 'background.level1', borderRadius: 'md', position:'relative', mt:1  }}>

                          <div>

                         {!formData.bannerImg ? (


                         

                            <Box component="label" sx={{cursor:'pointer' ,display: 'flex', flexDirection:'column', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%',}}>
                              <InsertPhotoOutlinedIcon sx={{fontSize:{xs:80, sm:100}}} />
                              <Typography level="title-sm">Upload Image</Typography>
                              <VisuallyHiddenInput name="bannerImg" type="file" onChange={imgInputHandle}  />
                            </Box>

                         

                         ):

                         (

                          <>
                          <img src={formData.bannerImg}  loading="lazy" alt="Event Banner"   />

                          <IconButton
                            component="label"
                            size="sm"
                            variant="outlined"
                            color="neutral"
                            sx={{
                              position: 'absolute',
                              bgcolor: 'background.body',
                              zIndex: 2,
                              borderRadius: '50%',
                              right: '1rem',

                              top: 0,
                              transform: 'translateY(50%)',
                            }}
                          >
                            <Tooltip title="Change Banner"  placement='right'>

                             
                                  <Badge>
                                  <EditRoundedIcon />
                                  </Badge>
                             
                              
                             
                              
                            </Tooltip>

                            <VisuallyHiddenInput name="bannerImg" type="file" onChange={imgInputHandle} />
                            </IconButton>


                          </>
                         )
                        }

                          </div>
                            

                        </AspectRatio>


                      </Box>

                       
                    

                  

                    <Box sx={{
                      display: step != 1 ? 'none' :''
                    }}>

                        
                        
                        <Box
                      sx={{
                          display:  { xs: 'block', sm: 'grid' },
                          gridTemplateColumns: 'repeat(2, minmax(80px, 1fr))',
                          gap: '1rem',
                          marginBottom: '1rem',  
                      }}
                    >

                        <FormControl  sx={{ mt: 2 }} error={Boolean(error.startTime)}>
                            <FormLabel >Start TIme</FormLabel>
                            <Input 
                                  name="startTime" 
                                  type='time' 
                                  placeholder="Select Start Time"  
                                  value={formData.startTime}   
                                  onChange={(event) => {

                                        if (error.startTime) {
                                          setError((prevState) => {
                                            const newErrors = { ...prevState };
                                            delete newErrors.startTime;
                                            return newErrors;
                                          }
                                          );
                                        }
                                    
                                            setFormData({...formData,startTime: event.target.value})

                                            console.log(formData.startTime);
                                            console.log(formData);
                                            }
                                            }
                                             />

                            {error.startTime && (
                              <FormHelperText>
                                <InfoOutlined/> {error.startTime}
                              </FormHelperText>
                            )}
                        </FormControl>

                        <FormControl  sx={{ mt: 2 }} error={Boolean(error.endTime)}>
                            <FormLabel >End Time</FormLabel>
                            <Input 
                                  name="endTime" 
                                  type='time' 
                                  placeholder="Select End Time" 
                                  value={formData.endTime} 
                                  onChange={(event) => {

                                        if (error.endTime) {
                                          setError((prevState) => {
                                            const newErrors = { ...prevState };
                                            delete newErrors.endTime;
                                            return newErrors;
                                          }
                                          );
                                        }

                                              setFormData({...formData,endTime: event.target.value})
                                            }
                                            } 
                            />

                            {error.endTime && (
                              <FormHelperText>
                                <InfoOutlined/> {error.endTime}
                              </FormHelperText>
                            )}
                        </FormControl>

                        <FormControl  sx={{ mt: 2 }} error={Boolean(error.maxParticipant)}>
                            <FormLabel >Maximum Number of Participants</FormLabel>
                            <Input 
                                  type='number' 
                                  name="maxParticipant" 
                                  placeholder="Enter Maximum Participant"  
                                  value={formData.maxParticipant}   
                                  onChange={(event) => {

                                    if (error.maxParticipant) {
                                      setError((prevState) => {
                                        const newErrors = { ...prevState };
                                        delete newErrors.maxParticipant;
                                        return newErrors;
                                      });
                                    }

                                    
                                    setFormData({...formData,maxParticipant: event.target.value})
                                    
                                    }} />

                            {error.maxParticipant && (
                              <FormHelperText>
                                <InfoOutlined/> {error.maxParticipant}
                              </FormHelperText>
                            )}
                        </FormControl>

                        <FormControl  sx={{ mt: 2 }} error={Boolean(error.closeDate)}>
                            <FormLabel>Registration Closing Date</FormLabel>
                            <Input 
                              name="closeDate" 
                              type='date' 
                              placeholder="Select a Close Date" 
                              value={formData.closeDate} 
                              onChange={(event) => {

                                if (error.closeDate) {
                                  setError((prevState) => {
                                    const newErrors = { ...prevState };
                                    delete newErrors.closeDate;
                                    return newErrors;
                                  });
                                }
                                
                                setFormData({...formData,closeDate: event.target.value})
                              }}
                              slotProps={{
                                input:{
                                  min:formatDate(today),
                                },
                              }}
                               />

                            {error.closeDate && (
                              <FormHelperText>
                                <InfoOutlined/> {error.closeDate}
                              </FormHelperText>
                            )}
                        </FormControl>

                            </Box>

                      <FormControl error={Boolean(error.mapLocation)}>
                      <FormLabel>Event Location</FormLabel>
                      <Input
                        name='mapLocation'
                        startDecorator={<Button disabled><LocationOnIcon/></Button>}
                        placeholder='Mark the Event Location'
                        onChange={
                          (event) => {

                            if (error.mapLocation) {
                              setError((prevState) => {
                                const newErrors = { ...prevState };
                                delete newErrors.mapLocation;
                                return newErrors;
                              });
                            }
                          
                            setFormData({...formData, mapLocation: event.target.value})
                          }
                        }
                        value={formData.mapLocation}
                        

                        // onInputChange={handleChangeForContact}
                        
                      />

                      {error.mapLocation && (
                        <FormHelperText>
                          <InfoOutlined/> {error.mapLocation}
                        </FormHelperText>
                      )}

                      </FormControl>

                    <Box sx={{mt:2}}>             
                          <MapBoxGeo
                     
                                  lng={formData.longitude}
                                  setLng={(lng) => handleLong(lng)}
                                  lat={formData.latitude}
                                  setLat={(lat) => handleLat(lat)}
                                  setFullAddress={(address) => handleAddress(address)}
                                  isVisible={step === 1}
                                  />

                    </Box>
             

                     
                      </Box>
                      
                      
                        

                  

                    <Box sx={{
                      display: step != 2 ? 'none' :''
                    }}>

                       

                      <FormControl sx={{mb:2}} error={Boolean(error.keyWords)}>
                        
                        <FormLabel>Select Key Words</FormLabel>
                        <Autocomplete
                          
                          multiple={true}
                          getOptionLabel={(options) => options.word}
                          name='keyWords'
                          startDecorator={<Button disabled><KeyboardIcon/></Button>}
                          placeholder='Search Keywords...'
                          options={options}
                          loading={loading.keySearching}
                          value={formData.keyWords}
                          onChange={(event, newValue) => {

                            if (error.keyWords) {
                              setError((prevState) => {
                                const newErrors = { ...prevState };
                                delete newErrors.keyWords;
                                return newErrors;
                              });
                            }
                          
                            
                            setFormData({...formData, keyWords: newValue});
                      
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

                        {error.keyWords && (
                          <FormHelperText>
                            <InfoOutlined/> {error.keyWords}
                          </FormHelperText>
                        )}

                      </FormControl>


                      <FormControl error={Boolean(error.eventDescription)}>
                        <FormLabel>Event Description</FormLabel>
                        {/* <Textarea
                           name='eventDescription'
                           placeholder='Enter Event Description'
                           minRows={5}
                           maxRows={4}
                           onChange ={(event) => {
 
                             if (error.eventDescription) {
                               setError((prevState) => {
                                 const newErrors = { ...prevState };
                                 delete newErrors.eventDescription;
                                 return newErrors;
                               });
                             }
                             
                             setFormData({...formData, eventDescription: event.target.value})
                             
                           }}
                           value={formData.eventDescription}
                         />
                       */}
                       
                       
                       
                          <RichText text={text} handleChange={handleChangeText}/>

                        {error.eventDescription && (
                          <FormHelperText>
                            <InfoOutlined/> {error.eventDescription}
                          </FormHelperText>
                        )}
                      </FormControl>





                    </Box>

                    {step >2 && !response.error && (

                      <Box sx={{display:'flex',flexDirection:'column', justifyContent:'center', alignContent:'center', mx:'auto' ,gap:2}}>
                        <PublishedWithChangesIcon sx={{fontSize:'120px', mx:'auto'}} color='success'/>
                        <Typography  level="title-lg">Event Created Successfully!</Typography>
                      </Box>
                      
                      
                    )}

                    {step >2 && response.error && (

                    <Box sx={{display:'flex',flexDirection:'column', justifyContent:'center', alignContent:'center', mx:'auto' ,gap:2}}>
                      <UnpublishedIcon sx={{fontSize:'120px', mx:'auto'}} color='danger'/>
                      <Typography  level="title-lg">Failed to Create Event!</Typography>
                    </Box>


                    )}

                

                </CardContent>



                <CardOverflow sx={{ borderTop: '1px solid', borderColor: 'divider' }}>
                    <CardActions sx={{ alignSelf: 'flex-end', pt: 2 }}>

                        {step > 0 && step <= 2 && (

                        <Button onClick={handleBackStep}  size="sm" variant="outlined" color="neutral">
                            Back
                        </Button>


                        )}


                        {step === 2 && (
                            <Button loading={response.loading} onClick={handleSubmit}  size="sm" variant="solid">
                            Publish
                        </Button>

                        )}

                        {step < 2 && (

                          <Button type='button' onClick={handleNextStep} size="sm" variant="solid">
                            Next
                          </Button>

                        )}

                        {step >2 && !response.error && (

                          <Button type='button' onClick={() => {
                            
                            setStep(0)

                            setResponse((prev) => ({
                              ...prev,
                              loading: false,
                            })
                            );

                            setFormData({
                              bannerImg: false,
                              eventTitle: '',
                              eventDate: '',
                              startTime: '',
                              endTime: '',
                              maxParticipant: '',
                              closeDate: '',
                              mapLocation: '',
                              keyWords: [],
                              eventDescription: '',
                              bannerUrl: '',
                              latitude: 6.9387469,
                              longitude: 79.8541134,

                            });


                          }} size="sm" variant="solid">
                            Create Another Event
                          </Button>

                        )}

                        {step >2 && response.error && (

                          <Button type='button' onClick={() => {
                            
                            setStep(0)

                            setResponse((prev) => ({
                              ...prev,
                              loading: false,
                              error: false,
                            })
                            );
                          }}>
                            Try Again
                          </Button>

                        )}
                        
                    </CardActions>
            
                </CardOverflow>


                </Card>

                </form>  

             

                <PaymentModel open={paymentOpen} />

  




          </Box>
    )
}

export default CreateAnEvent
