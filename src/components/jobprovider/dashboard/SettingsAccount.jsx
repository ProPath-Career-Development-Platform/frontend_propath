import React ,{useState}from 'react'

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
import Typography from '@mui/joy/Typography';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import LinearProgress from '@mui/joy/LinearProgress';
import LockIcon from '@mui/icons-material/Lock';
import Autocomplete from '@mui/joy/Autocomplete';


function SettingsAccount() {
  
  const [contactFormData, setContactFormData] = useState({
    mapLocation: '',
    phone: '',
    email: ''
  });

  const [passwordFormData, setPasswordFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  

  const [errors, setErrors] = useState({});

  const [value, setValue] = useState(''); // for password

  const minLength = 12; // for password

  const handleChangeForContact = (e) => {
    const { name, value } = e.target;

    if (errors[name]) {
      setErrors((prevState) => {
        const newErrors = { ...prevState };
        delete newErrors[name];
        return newErrors;
      });
    }

    setContactFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleChangeForPassword = (e) => {
    const { name, value } = e.target;

    if (errors[name]) {
      setErrors((prevState) => {
        const newErrors = { ...prevState };
        delete newErrors[name];
        return newErrors;
      });
    }

    setPasswordFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  
  const validateForm = (form) => {
    const newErrors = {};

    if(form === 'contact'){

      if (!contactFormData.mapLocation) {
        newErrors.mapLocation = 'Map Location is required';
      }

      if (!contactFormData.phone) {
        newErrors.phone = 'Phone is required';

        //sri lanka phone number validation start with 94
      }else if (!/^(94)[0-9]{9}$/.test(contactFormData.phone)) {
        newErrors.phone = 'Phone number is invalid';
      }

      if (!contactFormData.email) {
        newErrors.email = 'Email is required';
      }else if (!/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(contactFormData.email)) {
        newErrors.email = 'Email is invalid';
      }


    }else if(form === 'password'){

    }

  return newErrors;


  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(event.target);
    const formId = formData.get('form');

    const validationErrors = validateForm(formId);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
     
    }else{

      if(formId === 'contact'){
        alert(JSON.stringify(contactFormData));
      }else if(formId === 'password'){
        alert(JSON.stringify(passwordFormData));
      }
      
    }


  }


  const resetForm = () => {
    setFormData(initialValues);
    setErrors({});
  }

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
                        gap:'2'

                        
                    }}
                >

                 <Typography sx={{ mb:2}} level='title-lg'>Contact Info</Typography>

                 <Input sx={{display:'none'}} name='form' value='contact' />

                <FormControl
                    sx={{
                        mb:2
                        
                      }}

                    error={Boolean(errors.mapLocation)}
                >
                    <FormLabel>Map Location</FormLabel>
                    <Autocomplete
                        name='mapLocation'
                        startDecorator={<Button disabled><LocationOnIcon/></Button>}
                        placeholder='Enter your map location'
                        options={top100Films}
                        onChange={(event, newValue) => {

                          if (errors.mapLocation) {
                            setErrors((prevState) => {
                              const newErrors = { ...prevState };
                              delete newErrors.mapLocation;
                              return newErrors;
                            });
                          }

                          setContactFormData({...contactFormData, mapLocation: newValue});
                        }}

                       // onInputChange={handleChangeForContact}
                      
                    />

                    {errors.mapLocation && (
                        <FormHelperText error>{errors.mapLocation}</FormHelperText>
                    )}
                </FormControl>

                <FormControl
                    sx={{
                        mb: 2
                      }}

                    error={Boolean(errors.phone)}
                >
                    <FormLabel>Phone</FormLabel>
                    <Input
                        name='phone'
                        startDecorator={<Button disabled><CallIcon/></Button>}
                        placeholder='Enter your phone number'
                        onChange={handleChangeForContact}

                    />

                    {errors.phone && (
                        <FormHelperText error>{errors.phone}</FormHelperText>
                    )}
                </FormControl>

                <FormControl
                    sx={{
                        mb: 2
                      }}
                    
                    error={Boolean(errors.email)}
                >
                    <FormLabel>Email</FormLabel>
                    <Input
                        name='email'
                        startDecorator={<Button disabled><EmailIcon/></Button>}
                        placeholder='Enter your phone number'
                        onChange={handleChangeForContact}
                    />

                    {errors.email && (
                        <FormHelperText error>{errors.email}</FormHelperText>
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


        <form>
        <Card>
                
                <CardContent>
                <Box
                    sx={{
                        display: { xs: 'block', sm: 'grid',}, 
                        gap:'2'

                        
                    }}
                >

                    <Typography sx={{ mb:2}} level='title-lg'>Change Password</Typography>

                    <FormControl
                    sx={{
                        mb:2
                        
                      }}
                    >
                    <FormLabel>Current Password</FormLabel>
                    <Input
                        name='mapLocation'
                        startDecorator={<Button disabled><LockIcon /></Button>}
                        placeholder='Enter your map location'
                       
                    />
                    </FormControl>

                    <Stack
                        spacing={0.5}
                        sx={{
                            '--hue': Math.min(value.length * 10, 120),
                        }}
                        >
                        <FormControl
                            sx={{
                            mb: 2,
                            }}
                        >
                         <FormLabel>New Password</FormLabel>
                        <Input
                            type="password"
                            placeholder="Type in here…"
                            startDecorator={<Button disabled><KeyIcon /></Button>}
                            value={value}
                            onChange={(event) => setValue(event.target.value)}
                        />
                        </FormControl>
                        <LinearProgress
                            determinate
                            size="sm"
                            value={Math.min((value.length * 100) / minLength, 100)}
                            sx={{
                            bgcolor: 'background.level3',
                            color: 'hsl(var(--hue) 80% 40%)',
                            }}
                        />
                        <Typography
                            level="body-xs"
                            sx={{ alignSelf: 'flex-end', color: 'hsl(var(--hue) 80% 30%)' }}
                        >
                            {value.length < 3 && 'Very weak'}
                            {value.length >= 3 && value.length < 6 && 'Weak'}
                            {value.length >= 6 && value.length < 10 && 'Strong'}
                            {value.length >= 10 && 'Very strong'}
                        </Typography>
                        </Stack>

                        <FormControl
                    sx={{
                        mb:2
                        
                      }}
                    >
                    <FormLabel>Confirm Password</FormLabel>
                    <Input
                        type='password'
                        name='mapLocation'
                        startDecorator={<Button disabled><KeyIcon /></Button>}
                        placeholder='Enter your map location'
                    />
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


        <Card>

            <CardContent>

                <Box>
                    <Typography sx={{ mb:2}} level='title-lg'>Delete your Company</Typography>

                    <Typography sx={{ mb:2}} level='body-sm'>If you delete your Jobpilot account, you will no longer be able to get information about the matched jobs, following employers, and job alert, shortlisted jobs and more. You will be abandoned from all the services of Jobpilot.com.</Typography>

                    
                </Box>
                

            </CardContent>

            <CardOverflow sx={{ borderTop: '1px solid', borderColor: 'divider' }}>
                    <CardActions sx={{ alignSelf: 'flex-end', pt: 2 }}>
                    <Button variant='solid' color='danger'>Delete Account</Button>
                    </CardActions>
            
            </CardOverflow>
        </Card>

    </Stack>
    
    
    </>
  )
}

export default SettingsAccount