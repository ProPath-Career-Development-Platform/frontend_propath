import React from 'react'
import { useState } from 'react';

import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import Input from '@mui/joy/Input';
import IconButton from '@mui/joy/IconButton';
import Textarea from '@mui/joy/Textarea';
import Stack from '@mui/joy/Stack';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import CardOverflow from '@mui/joy/CardOverflow';
import CardContent from '@mui/joy/CardContent'
import Snackbar from '@mui/joy/Snackbar';

import EditRoundedIcon from '@mui/icons-material/EditRounded';
import InfoOutlined from '@mui/icons-material/InfoOutlined';
import Tooltip from '@mui/joy/Tooltip';
import { styled } from '@mui/joy';
import CircularProgress from '@mui/joy/CircularProgress';
import Badge from '@mui/joy/Badge';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import Typography from '@mui/joy/Typography';



function SettingsCompanyInfo() {

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

  const initialValues = {  // this is for reseting the form
    companyName: '',
    aboutUs: '',
    bannerImg: 'https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318',
    logoImg: 'https://th.bing.com/th/id/R.3d6a2ad56bc3403c5cfcc3efe09b741b?rik=7w0mZmIMOAqbkQ&pid=ImgRaw&r=0',
  };

  const [formData, setFormData] = useState({
    companyName: '',
    aboutUs: '',
    bannerImg: '',
    logoImg: '',

  });

  const [error, setError] = useState({});
  const [loading, setLoading] = useState({
    bannerImg: false,
    logoImg: false,
  }); // State for loading status

  const [imgSnackOpen, setImgSnackOpen] = useState(false);


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

  const validateForm = () => {

    const newErrors ={};

    if(!formData.companyName){
      newErrors.companyName = 'Company Name is required';
    }

    if(!formData.aboutUs){
      newErrors.aboutUs = 'About Us is required';
    }

    return newErrors;
  }


  const handleSubmit = (event) =>{
    event.preventDefault();
    
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setError(validationErrors);
    } else {
      alert(JSON.stringify(formData));
    }
  }

  const resetForm = () => {
    setFormData(initialValues);
    setError({});
  }

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

  return (
    <>
    <Stack
        spacing={4}
        sx={{
          display: 'flex',
          maxWidth: '1000px',
          mx: 'auto',
          px: { xs: 2, md: 6 },
          py: { xs: 2, md: 3 },
        }}
      >
    <form onSubmit={handleSubmit}>
        <Card>

          <CardContent>

            <Box 
              sx={{
                maxWidth:'100%',
                maxHeight:'auto',
                position:'relative',
                mb:5
              }}
            >

            <AspectRatio ratio="21/9"
             objectFit='cover'
             >

                {loading.bannerImg ? (
                        
                          <CircularProgress />
                       
                      ) : (
                        !formData.bannerImg ? (
                          <img
                            src={initialValues.bannerImg}
                            
                            loading="lazy"
                            alt="Initial Banner"
                            
                          />
                        ) : (
                          <img
                            src={formData.bannerImg}
                            
                            loading="lazy"
                            alt="New Banner"
                            
                          />
                        )
                      )}
             
             
           </AspectRatio>

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

            {formData.bannerImg && formData.bannerImg != initialValues.bannerImg ? (
                <Badge>
                <EditRoundedIcon />
                </Badge>
            ):(
              <EditRoundedIcon />
            )}
            
          </Tooltip>

          <VisuallyHiddenInput name="bannerImg" type="file" onChange={imgInputHandle} />
           </IconButton>

           <Box sx={{
                    display: 'flex',
                    position: 'absolute',
                    bottom:0,
                    ml:{xs:2,sm:5},
                    mb:1,
                    width: '100%',
                              
            }}>

                <Box
                sx={{
                
                position: 'relative',
                 

                }}>
                  <AspectRatio
                  variant='soft'
                  ratio="1"
                  maxHeight={200}
                  objectFit='fill'
                  sx={(theme)=>
                    ({ 
                      flex: 1,
                       minWidth: {xs:70,sm:130,md:150},

                      borderRadius: 'sm',
                      [theme.breakpoints.between('900', '1047')]: {
                        minWidth:100,
                      }
                       })}
                >

                    {loading.logoImg ? (
                        
                        <CircularProgress />
                     
                    ) : (
                      !formData.logoImg ? (
                        <img
                          src={initialValues.logoImg}
                          
                          loading="lazy"
                          alt="Initial Banner"
                          
                        />
                      ) : (
                        <img
                          src={formData.logoImg}
                          
                          loading="lazy"
                          alt="New Banner"
                          
                        />
                      )
                    )}
                
                  
                </AspectRatio>
                <IconButton
                  component="label"
                  size="sm"
                  variant="outlined"
                  color="neutral"
                  sx={(theme)=>({
                    bgcolor: 'background.body',
                    position: 'absolute',
                    zIndex: 2,
                    borderRadius: '50%',
                    left: {xs:50,sm:90,md:110},
                    top: {xs:40,sm:90,md:110},
                    boxShadow: 'sm',
                    [theme.breakpoints.between('900', '1047')]: {
                      left:60,
                      top:60,
                    }
                  })}
                >
                  <Tooltip title="Change Logo"  placement='right'>
                  {formData.logoImg && formData.logoImg != initialValues.logoImg ? (
                    <Badge>
                    <EditRoundedIcon />
                    </Badge>
                ):(
                  <EditRoundedIcon />
                )}
                  </Tooltip>
                  <VisuallyHiddenInput name="logoImg" type="file" onChange={imgInputHandle} />
                </IconButton>


               </Box>
            </Box>

          </Box>

          
         
            <Box sx={{

              display: { xs: 'block', sm: 'grid',},
              gap:2,

             
            }}>


              <FormControl 
                
                sx={{
                      mb:{xs: 2, sm: 0}
                    }}
                error={Boolean(error.companyName)}>
                <FormLabel>Company Name</FormLabel>
                <Input name="companyName" placeholder="Company Name" value={formData.companyName} onChange={handleChange} />
                {error.companyName && (
                        <FormHelperText>
                            <InfoOutlined /> {error.companyName}
                        </FormHelperText>
                    )}
              </FormControl>

              <FormControl error={Boolean(error.aboutUs)}>
                <FormLabel>About Us</FormLabel>
                <Textarea
                  name = "aboutUs"
                  placeholder="Type in here…"
                  value={formData.aboutUs}
                  minRows={5}
                  maxRows={8}
                  onChange={handleChange}
                />
                {error.aboutUs && (
                        <FormHelperText>
                            <InfoOutlined /> {error.aboutUs}
                        </FormHelperText>
                    )}
              </FormControl>


            </Box>


          </CardContent>

          <CardOverflow sx={{ borderTop: '1px solid', borderColor: 'divider' }}>
            <CardActions sx={{ alignSelf: 'flex-end', pt: 2 }}>
              <Button onClick={resetForm} size="sm" variant="outlined" color="neutral">
                Cancel
              </Button>
              <Button type="submit" size="sm" variant="solid">
                Save
              </Button>
            </CardActions>
       
          </CardOverflow>

     

          
        </Card>      

      </form>
     </Stack>


     <React.Fragment>

                  <Snackbar
                    variant="soft"
                    color="warning"
                    open={imgSnackOpen}
                    onClose={() => setImgSnackOpen(false)}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    startDecorator={<WarningAmberIcon />}
                    endDecorator={
                      <Button
                        onClick={() => setImgSnackOpen(false)}
                        size="sm"
                        variant="soft"
                        color="warning"
                      >
                        Dismiss
                      </Button>
                    }
                  > 
                    <Box sx={{display: 'flex' , flexDirection:'column'}}>

                    <Typography level='title-md' textAlign={'left'}>Remember to Save</Typography>
                    <Typography level='body-sm'>Click the Save button to finalize your banner or logo modifications.</Typography>
                    </Box>
                  </Snackbar>
                </React.Fragment>
    
    </>
  )
}

export default SettingsCompanyInfo