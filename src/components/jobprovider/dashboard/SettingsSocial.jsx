import React ,{useState,useEffect}from 'react'

import Stack from '@mui/joy/Stack';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import CardOverflow from '@mui/joy/CardOverflow';
import CardContent from '@mui/joy/CardContent'
import Box from '@mui/joy/Box';
import Input from '@mui/joy/Input';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import LanguageIcon from '@mui/icons-material/Language';
import Button from '@mui/joy/Button';
import Textarea from '@mui/joy/Textarea';
import InfoOutlined from '@mui/icons-material/InfoOutlined';
import axios from 'axios';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import Skeleton from '@mui/joy/Skeleton';
import Snackbar from '@mui/joy/Snackbar';
import Typography from '@mui/joy/Typography';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

function SettingsSocial() {

  const jwtToken = localStorage.getItem('token');
  
  const [formData, setFormData] = useState({
    xurl: '',
    fbUrl: '',
    linkedinUrl: '',
    youtubeUrl: '',
  })

  const [dataLoad, setDataLoad] = useState(true);
  const [formLoad,setFormLoad] = useState(false);
  const [resStat,setResStat] = useState(false);
  const [errorPut, setErrorPut] = useState(false);

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
            xurl: response.data.xurl,
            fbUrl: response.data.fbUrl,
            linkedinUrl: response.data.linkedinUrl,
            youtubeUrl: response.data.youtubeUrl,


        }));
        setDataLoad(false);
    }
    ).catch((error) => {
      console.error(error);
    });

  },[])


  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (errors[name]) {
      setErrors((prevState) => {
        const newErrors = { ...prevState };
        delete newErrors[name];
        return newErrors;
      });
    }

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
  
    
    if (formData.xurl && !/^(ftp|http|https):\/\/[^ "]+$/.test(formData.xurl)) {
      newErrors.xurl = 'Invalid URL';
    }
  
    if (formData.fbUrl && !/^(ftp|http|https):\/\/[^ "]+$/.test(formData.fbUrl)) {
      newErrors.fbUrl = 'Invalid URL';
    }
  
    if (formData.linkedinUrl && !/^(ftp|http|https):\/\/[^ "]+$/.test(formData.linkedinUrl)) {
      newErrors.linkedinUrl = 'Invalid URL';
    }
  
    if (formData.youtubeUrl && !/^(ftp|http|https):\/\/[^ "]+$/.test(formData.youtubeUrl)) {
      newErrors.youtubeUrl = 'Invalid URL';
    }
  
    return newErrors;
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
     
    }else{
      //alert(JSON.stringify(formData));

      setFormLoad(true);

      const postData = {
        xurl: formData.xurl,
        fbUrl: formData.fbUrl,
        linkedinUrl: formData.linkedinUrl,
        youtubeUrl: formData.youtubeUrl,
      }

      try {
        const response = await axios.put('http://localhost:8080/jobprovider/settings/social', postData, {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
            'Content-Type': 'application/json',
          },
        });
        console.log(response);
        setResStat(true);
      } catch (error) {
        console.error(error);
        setErrorPut(true);
      } finally {
        setFormLoad(false);
      }

    }


  }


  const resetForm = () => {
    setFormData(initialValues);
    setErrors({});
  }
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
    <form
     onSubmit={handleSubmit}
    >
        <Card>
            
            <CardContent>

                <Box
                    sx={{
                        display: { xs: 'block', sm: 'grid',},
                        gridTemplateColumns: 'repeat(2, minmax(80px, 1fr))',
                        gap: '1rem',
                        marginBottom: '1rem',  
                    }}
                >

                   
                    <FormControl

                      error={Boolean(errors.xurl)}
                    >

                        <FormLabel>X (Twitter)</FormLabel>
                        <Skeleton loading={dataLoad}>
                        <Input
                          name='xurl'
                          onChange={handleChange}
                          placeholder='https://www.example.com'
                          value={formData.xurl}
                          startDecorator={<Button disabled><XIcon/></Button>}
                          />
                        </Skeleton>
                        
                        {errors.xurl && (

                          <FormHelperText>
                            <InfoOutlined/> {errors.xurl}
                          </FormHelperText>

                        )}


                    </FormControl>

                    <FormControl

                    error={Boolean(errors.youtubeUrl)}
                    >

                    <FormLabel>Youtube</FormLabel>
                    <Skeleton loading={dataLoad}>
                    <Input
                        name='youtubeUrl'
                        onChange={handleChange}
                        placeholder='https://www.example.com'
                        value={formData.youtubeUrl}
                        startDecorator={<Button disabled><YouTubeIcon/></Button>}
                        />
                    </Skeleton>
                    
                    {errors.youtubeUrl && (

                        <FormHelperText>
                        <InfoOutlined/> {errors.youtubeUrl}
                        </FormHelperText>

                    )}


                    </FormControl>


                    <FormControl

                    error={Boolean(errors.linkedinUrl)}
                    >

                    <FormLabel>LinkedIn</FormLabel>
                    <Skeleton loading={dataLoad}>
                    <Input
                        name='linkedinUrl'
                        onChange={handleChange}
                        placeholder='https://www.example.com'
                        value={formData.linkedinUrl}
                        startDecorator={<Button disabled><LinkedInIcon/></Button>}
                        />
                    </Skeleton>
                    
                    {errors.linkedinUrl && (

                        <FormHelperText>
                        <InfoOutlined/> {errors.linkedinUrl}
                        </FormHelperText>

                    )}


                    </FormControl>

                    <FormControl

                    error={Boolean(errors.fbUrl)}
                    >

                    <FormLabel>FaceBook</FormLabel>
                    <Skeleton loading={dataLoad}>
                    <Input
                        name='fbUrl'
                        onChange={handleChange}
                        placeholder='https://www.example.com'
                        value={formData.fbUrl}
                        startDecorator={<Button disabled><FacebookIcon/></Button>}
                        />
                    </Skeleton>
                    
                    {errors.fbUrl && (

                        <FormHelperText>
                        <InfoOutlined/> {errors.fbUrl}
                        </FormHelperText>

                    )}


                    </FormControl>

                </Box>

                




            </CardContent>

                <CardOverflow sx={{ borderTop: '1px solid', borderColor: 'divider' }}>
            <CardActions sx={{ alignSelf: 'flex-end', pt: 2 }}>
              <Button disabled={dataLoad || formLoad} onClick={resetForm} size="sm" variant="outlined" color="neutral">
                Cancel
              </Button>
              <Button disabled={dataLoad} loading={formLoad} type="submit" size="sm" variant="solid">
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
                    color="success"
                    open={resStat}
                    onClose={() => setResStat(false)}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    startDecorator={<CheckCircleOutlineIcon />}
                    endDecorator={
                      <Button
                        onClick={() =>  setResStat(false)}
                        size="sm"
                        variant="soft"
                        color="success"
                      >
                        Dismiss
                      </Button>
                    }
                  > 
                    <Box sx={{display: 'flex' , flexDirection:'column'}}>

                    Social Media Info Updated
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
                        onClick={() =>setErrorPut(false)}
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
                </React.Fragment>
    
    
    </>
  )
}

export default SettingsSocial