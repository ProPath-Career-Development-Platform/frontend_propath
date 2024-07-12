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

function CreateAnEvent() {

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
        eventTitle: '',
        eventDate: '',
        startTime: '',
        endTime: '',
        maxParticipant: '',
        closeDate: '',
        mapLocation: '',
        keyWords: [],
        eventDescription: ''

      }); // State for form data

    const [step , setStep] = React.useState(0);

    const handleNextStep = () => {
        if(step === 2) return;
        setStep(prevStep => prevStep + 1);
    }

    const handleBackStep = () => {
        if(step === 0) return;
        setStep(prevStep => prevStep - 1);
    }


    /* auto complete*/

    
    const [options, setOptions] = React.useState([]);
    const [inputValue, setInputValue] = React.useState('');

   


    React.useEffect(() => {
      const fetchKeywords = async (input) => {

        setLoading((prev) => ({
          ...prev,
          keySearching: true,
        }));


        try {
          if (input.length > 1) {
            const response = await fetch(`https://api.datamuse.com/sug?s=${input}`);

           

            const data = await response.json();
            
            if (Array.isArray(data)) {
              const formattedOptions = data.map(item => ({
                word: capitalizeWords(item.word)
              }));
              setOptions(formattedOptions);
            } else {
              console.error('Unexpected data format:', data);
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

    const top100Films = [
      { label: 'The Shawshank Redemption', year: 1994 },
      { label: 'The Godfather', year: 1972 },
      { label: 'The Godfather: Part II', year: 1974 },
      { label: 'The Dark Knight', year: 2008 },
      { label: '12 Angry Men', year: 1957 },
      { label: "Schindler's List", year: 1993 },
      { label: 'Pulp Fiction', year: 1994 }
    ];

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


          

                <Card
                    sx={{
                        display: 'flex',
                        width: {xs: '100%',sm: '100%' ,md: '1000px'},
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
          <StepIndicator variant="outlined" color="primary">
            <FactCheckIcon />
          </StepIndicator>
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

                    {step === 0 && (

                      <>

                    <Box
                      sx={{
                          display: { xs: 'block', sm: 'grid',},
                          gridTemplateColumns: 'repeat(2, minmax(80px, 1fr))',
                          gap: '1rem',
                          marginBottom: '1rem',  
                      }}
                    >

                        <FormControl  sx={{ mt: 2 }}>
                            <FormLabel htmlFor="event-title">Event Title</FormLabel>
                            <Input name="eventTitle" placeholder="Enter Event Title"  value={formData.eventTitle}   onChange={(event) => setFormData({...formData,eventTitle: event.target.value})} />
                        </FormControl>

                        <FormControl  sx={{ mt: 2 }}>
                            <FormLabel htmlFor="event-title">Event Date</FormLabel>
                            <Input name="eventDate" type='date' placeholder="Select Event Date" value={formData.eventDate} onChange={(event) => setFormData({...formData,eventDate: event.target.value})} />
                        </FormControl>

                      </Box>

                        <Typography level="title-md">Event Banner</Typography>

                        <AspectRatio  ratio="21/9" objectFit='fit' sx={{ width: '100%', my: 2, bgcolor: 'background.level2', borderRadius: 'md', maxHeight:'auto' }}>

                         {!formData.bannerImg ? (


                          <Box sx={{ display: 'flex', flexDirection:'column', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>

                            <Box component="label" sx={{cursor:'pointer'}}>
                              <InsertPhotoOutlinedIcon sx={{fontSize:100}} />
                              <Typography level="title-sm">Upload Image</Typography>
                              <VisuallyHiddenInput name="bannerImg" type="file" onChange={imgInputHandle}  />
                            </Box>

                          </Box>

                         ):

                         (
                          <img src={formData.bannerImg}  loading="lazy" alt="Event Banner"   />
                         )
                         }


                            

                        </AspectRatio>

                      </>

                    )}

                    {step === 1 && (

                        <>
                        
                        <Box
                      sx={{
                          display: { xs: 'block', sm: 'grid',},
                          gridTemplateColumns: 'repeat(2, minmax(80px, 1fr))',
                          gap: '1rem',
                          marginBottom: '1rem',  
                      }}
                    >

                        <FormControl  sx={{ mt: 2 }}>
                            <FormLabel >Start TIme</FormLabel>
                            <Input name="startTime" type='time' placeholder="Select Start Time"  value={formData.startTime}   onChange={(event) => setFormData({...formData,startTime: event.target.value})} />
                        </FormControl>

                        <FormControl  sx={{ mt: 2 }}>
                            <FormLabel >End Time</FormLabel>
                            <Input name="endTime" type='time' placeholder="Select End Time" value={formData.endTime} onChange={(event) => setFormData({...formData,endTime: event.target.value})} />
                        </FormControl>

                        <FormControl  sx={{ mt: 2 }}>
                            <FormLabel >Maximum Number of Participants</FormLabel>
                            <Input name="maxParticipant" placeholder="Enter Maximum Participant"  value={formData.maxParticipant}   onChange={(event) => setFormData({...formData,maxParticipant: event.target.value})} />
                        </FormControl>

                        <FormControl  sx={{ mt: 2 }}>
                            <FormLabel>Registration Closing Date</FormLabel>
                            <Input name="closeDate" type='date' placeholder="Select a Close Date" value={formData.closeDate} onChange={(event) => setFormData({...formData,closeDate: event.target.value})} />
                        </FormControl>

                      </Box>

                      <FormControl>
                      <FormLabel>Event Location</FormLabel>
                      <Autocomplete
                        name='mapLocation'
                        startDecorator={<Button disabled><LocationOnIcon/></Button>}
                        placeholder='Enter your map location'
                        options={top100Films}
                        value={formData.mapLocation}
                        onChange={(event, newValue) => {

                         

                          setFormData({...formData, mapLocation: newValue});
                        }}

                       // onInputChange={handleChangeForContact}
                      
                      />

                      </FormControl>

                        
                        </>
                    )}

                    {step === 2 && (

                       <>

                      <FormControl sx={{mb:2}}>
                        
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

                      </FormControl>


                      <FormControl>
                        <FormLabel>Event Description</FormLabel>
                        <Textarea
                          name='eventDescription'
                          placeholder='Enter Event Description'
                          minRows={5}
                          maxRows={4}
                          onChange ={(event) => setFormData({...formData, eventDescription: event.target.value})}
                          value={formData.eventDescription}
                        />
                      </FormControl>



                       </>
                    )}

                

                </CardContent>



                <CardOverflow sx={{ borderTop: '1px solid', borderColor: 'divider' }}>
                    <CardActions sx={{ alignSelf: 'flex-end', pt: 2 }}>

                        {step > 0 && (

                        <Button onClick={handleBackStep}  size="sm" variant="outlined" color="neutral">
                            Back
                        </Button>


                        )}
                        {step === 2 ? (
                            <Button  size="sm" variant="solid">
                            Publish
                        </Button>

                        ):
                        
                        <Button onClick={handleNextStep} size="sm" variant="solid">
                            Next
                        </Button>
                        }
                    </CardActions>
            
                </CardOverflow>


                </Card>



  




          </Box>
    )
}

export default CreateAnEvent
