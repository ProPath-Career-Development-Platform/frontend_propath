import React from 'react'
import { useState, useEffect ,useContext} from 'react';

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
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

import EditRoundedIcon from '@mui/icons-material/EditRounded';
import InfoOutlined from '@mui/icons-material/InfoOutlined';
import Tooltip from '@mui/joy/Tooltip';
import { styled } from '@mui/joy';
import CircularProgress from '@mui/joy/CircularProgress';
import Badge from '@mui/joy/Badge';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import Typography from '@mui/joy/Typography';
import axios from 'axios';
import ImageKit from "imagekit";
import Skeleton from '@mui/joy/Skeleton';
import UserContext from '../../../utils/userContext'


function SettingsCompanyInfo() {

  const jwtToken = localStorage.getItem('token');

  const {logUser,setLogUser} = useContext(UserContext);

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


  const [formData, setFormData] = useState({
    companyName: '',
    aboutUs: '',
    bannerImg: '',
    logoImg: '',
    bannerUrl: false,
    logoImgUrl : false

  });

  const [loadForm,setFormLoad] = useState(false);
  const [dataLoad,setDataLoad] = useState(true);
  const [responseStat,setResponseStat] = useState(false);

  const[change,setChnage] = useState(
    {bannerImg:false,
    logoImg:false,
    reset:false}
  );

 

  useEffect(()=> {

    //setDataLoad(true);

    axios.get('http://localhost:8080/jobprovider/company', {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }).then((response) => {

      
      setFormData(
        (prev) => ({
          ...prev,
          companyName: response.data.companyName,
          aboutUs:response.data.aboutUs,
          bannerImg: response.data.bannerImg,
          logoImg: response.data.logoImg,

        }));
        setDataLoad(false);
    }
    ).catch((error) => {
      console.error(error);
    });

  },[])

  useEffect(()=> {

    //setDataLoad(true);

    axios.get('http://localhost:8080/jobprovider/company', {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }).then((response) => {

      
      setFormData(
        (prev) => ({
          ...prev,
          companyName: response.data.companyName,
          aboutUs:response.data.aboutUs,
          bannerImg: response.data.bannerImg,
          logoImg: response.data.logoImg,

        }));
        setDataLoad(false);
    }
    ).catch((error) => {
      console.error(error);
    });

  },[change.reset])

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

  const initialValues = {  // this is for reseting the form
    companyName: formData.companyName,
    aboutUs:formData.aboutUs,
    bannerImg:formData.bannerImg,
    logoImg: formData.logoImg,
    bannerUrl:false,
    logoImgUrl:false
    
   // bannerImg: 'https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318',
   // logoImg: 'https://th.bing.com/th/id/R.3d6a2ad56bc3403c5cfcc3efe09b741b?rik=7w0mZmIMOAqbkQ&pid=ImgRaw&r=0',
  };


  const [error, setError] = useState({});
  const [loading, setLoading] = useState({
    bannerImg: false,
    logoImg: false,
  }); // State for loading status

  const [imgSnackOpen, setImgSnackOpen] = useState(false);
  const [errorPut,setErrorPut] = useState(false);


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


  const handleSubmit = async (event) =>{
    event.preventDefault();
    
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setError(validationErrors);
    } else {
      alert(JSON.stringify(formData));

      //form loading

      setFormLoad(true);



     
        const LinkBannerImg = await uploadImage(change.bannerImg ? formData.bannerImgUrl : null);
      

     
        const LinkLogoImg = await uploadImage(change.logoImg ? formData.logoImgUrl : null);
      

      const companyInfo = {

        companyName : formData.companyName,
        aboutUs : formData.aboutUs,
        bannerImg : LinkBannerImg != null ? LinkBannerImg  : formData.bannerImg,
        logoImg : LinkLogoImg != null ?  LinkLogoImg : formData.logoImg,
      }

      console.log(companyInfo);

      try {
        const response = await axios.put(
          'http://localhost:8080/jobprovider/settings/company',
          companyInfo,
          {
            headers: {
              Authorization: `Bearer ${jwtToken}`,
              'Content-Type': 'application/json',
            },
          }
        );
        console.log('Settings updated successfully:', response.data);
        //update LocalStorage company info
        setLogUser((prev) => {
          const updatedLogUser = {
            ...prev,
            companyName: companyInfo.companyName,
            logoImg: companyInfo.logoImg,
          };
          
          // Update local storage
          localStorage.setItem('logUser', JSON.stringify(updatedLogUser));
      
          return updatedLogUser;
        });
        setResponseStat(true);
      } catch (error) {
        console.error('Error changing setting:', error);
        setErrorPut(true);
      } finally {
        // Optionally, you can perform any cleanup actions here if necessary
        setFormLoad(false);
      }
      

     


    }
  }

  const resetForm = () => {
    setChnage((prev) => ({
      bannerImg: false,
      reset: !change.reset,
      logoImg: false,

    }));
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

    if(inputTagName === "logoImg"){
      setFormData((prev) => ({
        ...prev,
        logoImgUrl: file,
      }));

      setChnage((prev) => ({
        ...prev,
        logoImg: true,
      }));
    }else if (inputTagName === "bannerImg"){
      setFormData((prev) => ({
        ...prev,
        bannerImgUrl: file,
      }));

      setChnage((prev) => ({
        ...prev,
        bannerImg: true,
      }));
    }

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
                        
                        <Skeleton animation="wave" loading={dataLoad}>
                        
                          <img
                            src={formData.bannerImg}
                            
                            loading="lazy"
                            alt="New Banner"
                            
                          />
                  </Skeleton>
                        )
                      }

             
             
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

            {change.bannerImg ? (
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

                      <Skeleton animation="wave" loading={dataLoad}>
                      
                        <img
                          src={formData.logoImg}
                          
                          loading="lazy"
                          alt="New Banner"
                          
                        />
                      </Skeleton>
                      
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
                  {change.logoImg ? (
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
                <Skeleton animation="wave" loading={dataLoad}>
                <Input name="companyName" placeholder="Company Name" value={formData.companyName} onChange={handleChange} />
                </Skeleton>
                {error.companyName && (
                        <FormHelperText>
                            <InfoOutlined /> {error.companyName}
                        </FormHelperText>
                    )}
              </FormControl>

              <FormControl error={Boolean(error.aboutUs)}>
                <FormLabel>About Us</FormLabel>
                <Skeleton animation="wave" loading={dataLoad}>
                <Textarea
                  name = "aboutUs"
                  placeholder="Type in here…"
                  value={formData.aboutUs}
                  minRows={5}
                  maxRows={8}
                  onChange={handleChange}
                />
                </Skeleton>
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
              <Button disabled={loadForm} onClick={resetForm} size="sm" variant="outlined" color="neutral">
                Cancel
              </Button>
              <Button loading={loadForm} disabled={dataLoad} type="submit" size="sm" variant="solid">
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

                  <Snackbar
                    variant="soft"
                    color="warning"
                    open={errorPut}
                    onClose={() => setErrorPut(false)}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    startDecorator={<WarningAmberIcon />}
                    endDecorator={
                      <Button
                        onClick={() => setErrorPut(false)}
                        size="sm"
                        variant="soft"
                        color="warning"
                      >
                        Dismiss
                      </Button>
                    }
                  > 
                    <Box sx={{display: 'flex' , flexDirection:'column'}}>

                    <Typography level='title-md' textAlign={'left'}>Error</Typography>
                    <Typography level='body-sm'>Please Try again later.</Typography>
                    </Box>
                  </Snackbar>

                  <Snackbar
                    variant="soft"
                    color="success"
                    open={responseStat}
                    onClose={() => setResponseStat(false)}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    startDecorator={<CheckCircleOutlineIcon />}
                    endDecorator={
                      <Button
                        onClick={() => setResponseStat(false)}
                        size="sm"
                        variant="soft"
                        color="success"
                      >
                        Dismiss
                      </Button>
                    }
                  > 
                    <Box sx={{display: 'flex' , flexDirection:'column'}}>

                    Company Info Updated
                    </Box>
                  </Snackbar>
                </React.Fragment>
    
    </>
  )
}

export default SettingsCompanyInfo