import React from 'react'

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

function CreateAnEvent() {

    const [step , setStep] = React.useState(0);

    const handleNextStep = () => {
        if(step === 2) return;
        setStep(prevStep => prevStep + 1);
    }

    const handleBackStep = () => {
        if(step === 0) return;
        setStep(prevStep => prevStep - 1);
    }

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
            boxShadow: (theme) => `0 0 0 1px ${theme.vars.palette.primary[500]}`,
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



                        <FormControl fullWidth sx={{ mb: 2 }}>
                            <FormLabel htmlFor="event-title">Event Title</FormLabel>
                            <Input id="event-title" placeholder="Enter Event Title" />
                        </FormControl>

                        <FormControl fullWidth sx={{ mb: 2 }}>
                            <FormLabel htmlFor="event-title">Event Date</FormLabel>
                            <Input type='date' placeholder="Select Event Date" />
                        </FormControl>

                        <Typography level="title-md">Event Banner</Typography>

                        <AspectRatio maxHeight={300} ratio="21/9" objectFit='cover'sx={{ width: '100%', my: 2, bgcolor: 'background.level2', borderRadius: 'md',  }}>

                          <Box sx={{ display: 'flex', flexDirection:'column', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>

                            <InsertPhotoOutlinedIcon sx={{fontSize:100}} />
                            <Typography level="title-sm">Upload Image</Typography>
                          </Box>

                            

                        </AspectRatio>

                      </>

                    )}

                    {step === 1 && (

                        <div>test2</div>
                    )}

                    {step === 2 && (

                        <div>test3</div>
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
