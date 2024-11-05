import React ,{useState,useEffect,useContext}from 'react'

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
import Button from '@mui/joy/Button';
import Typography from '@mui/joy/Typography';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import LinearProgress from '@mui/joy/LinearProgress';
import LockIcon from '@mui/icons-material/Lock';
import axios from 'axios';
import Skeleton from '@mui/joy/Skeleton';
import Snackbar from '@mui/joy/Snackbar';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import Divider from '@mui/joy/Divider';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import DialogActions from '@mui/joy/DialogActions';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import UserContext from '../../../utils/userContext';
import { useNavigate } from 'react-router-dom';
import CircularProgress from '@mui/joy/CircularProgress';
import ErrorIcon from '@mui/icons-material/Error';
import Tooltip from '@mui/joy/Tooltip';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';



function SettingsAccount() {

  const {logout} = useContext(UserContext);
  const navigate = useNavigate();
  
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

  const [personalFormData, setPersonalFormData] = useState({
    userName: '',
    pEmail: '',
    newEmail:''
  });

  const jwtToken = localStorage.getItem('token');
  
  const [dataLoad, setDataLoad] = useState(true);
  const [formLoad, setFormLoad] = useState({
    contact: false,
    password: false

  });

  
  const [snackbar, setSnackbar] = useState({
    contact: false,
    cError: false,
    pError:false,
    error:false,
    password: false,
    delete: false,

    personalError:false,
    personal:false,
    personalBoth:false
  });

  const [personalCheck,setPersonalCheck] = useState({
    username:false,
    email:false,
    emailLoad:false
  })


useEffect(()=> {

    //setDataLoad(true);

    axios.get('http://localhost:8080/jobprovider/company', {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }).then((response) => {

      
      setContactFormData(
        (prev) => ({
          ...prev,
          mapLocation: response.data.location,
          phone:response.data.contactNumber,
          email: response.data.email,
        

        }));

        setPersonalFormData(
          (prev) => ({
            ...prev,
            userName: response.data.user.username,
            pEmail: response.data.user.email,
            newEmail: response.data.user.email
          
          }));
        setDataLoad(false);
    }
    ).catch((error) => {
      console.error(error);
    });

  },[])

  

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

  const handleChangeForPersonal = (e) => {
    const { name, value } = e.target;

    if (errors[name]) {
      setErrors((prevState) => {
        const newErrors = { ...prevState };
        delete newErrors[name];
        return newErrors;
      });
    }

    setPersonalFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    setPersonalCheck((prevState) => ({
      ...prevState,
      username: false
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

      if (!passwordFormData.currentPassword) {
        newErrors.currentPassword = 'Current Password is required';
      }else{

        if (!passwordFormData.newPassword) {
          newErrors.newPassword = 'New Password is required';
        }else if (passwordFormData.newPassword.length < 8) {
          newErrors.newPassword = 'New Password must be at least 8 characters';
        } else if (!passwordFormData.confirmPassword) {
  
          newErrors.confirmPassword = 'Confirm Password is required';
        }else if (passwordFormData.newPassword !== passwordFormData.confirmPassword) {
          newErrors.confirmPassword = 'Passwords do not match';
  
        }

      }

    }else if(form === 'personal'){

      if (!personalFormData.userName) {
        newErrors.userName = 'User Name is required';
      }

      if (!personalFormData.newEmail) {
        newErrors.newEmail = 'Email is required';
      }else if (!/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(personalFormData.newEmail)) {
        newErrors.newEmail = 'Email is invalid';
      }
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

        setFormLoad((prevState) => ({
          ...prevState,
          contact: true
        }));

        const data = {
          location: contactFormData.mapLocation,
          contactNumber: contactFormData.phone,
          email: contactFormData.email
        }

        try {
          axios.put('http://localhost:8080/jobprovider/settings/contactInfo', data, {
            headers: {
              Authorization: `Bearer ${jwtToken}`,
            },
          }).then((response) => {
            console.log(response);


            setSnackbar((prevState) => ({
              ...prevState,
              contact: true
            }));

          }) .catch((error)=>{

            setSnackbar((prevState) => ({
              ...prevState,
              error:true
            }))
          });
        }
        catch (error) {
          console.error(error);

          setSnackbar((prevState) => ({
            ...prevState,
            error: true
          }));

        }finally{
          setFormLoad((prevState) => ({
            ...prevState,
            contact: false
          }));
        }





      }else if(formId === 'password'){
       // alert(JSON.stringify(passwordFormData));

        setFormLoad((prevState) => ({
          ...prevState,
          password: true
        }));



        const pwd ={
          pwd: passwordFormData.currentPassword,
          newPwd: passwordFormData.newPassword
        }

        //check password correct

        try {
          axios.post('http://localhost:8080/jobprovider/settings/password', pwd, {
            headers: {
              Authorization: `Bearer ${jwtToken}`,
            },
          }).then((response) => {
            console.log(response);


            setSnackbar((prevState) => ({
              ...prevState,
              password: true
            }));

          }) .catch((error)=>{

            if (!error.response) {
              // Network error or no response from the server
              console.error("Network error or no response from the server:", error.message);
              setSnackbar((prevState) => ({
                ...prevState,
                error:true
              }))
            } else {
              // Handle the error based on the status code
              console.error("Error response code:", error.response.status);

              if(error.response.status === 401){
                setSnackbar((prevState) => ({
                  ...prevState,
                  pError:true
                }))
              }
            }

           
          });
          
        }finally{
          setFormLoad((prevState) => ({
            ...prevState,
            password: false
          }));
        }


      }else if(formId == 'personal'){

        if(personalFormData.pEmail === personalFormData.newEmail){

          const name = {
            username: personalFormData.userName,
          };
          
          try {
            axios
              .post('http://localhost:8080/jobprovider/update/personal/name', name, {
                headers: {
                  Authorization: `Bearer ${jwtToken}`,
                },
              })
              .then((response) => {
                console.log(response);
          
                setSnackbar((prevState) => ({
                  ...prevState,
                  personal: true,
                }));

                setPersonalCheck((prevState) => ({
                  ...prevState,
                  username: true,
                }));

              })
              .catch((error) => {
                if (!error.response) {
                  // Network error or no response from the server
                  console.error("Network error or no response from the server:", error.message);
                  setSnackbar((prevState) => ({
                    ...prevState,
                    error: true,
                  }));
                } else {
                  // Handle the error based on the status code
                  console.error("Error response code:", error.response.status);
          
                  if (error.response.status === 401) {
                    setSnackbar((prevState) => ({
                      ...prevState,
                      pError: true,
                    }));
                  }
                }
              })
              .finally(() => {
                
              });
          } catch (error) {
            console.error("Unexpected error:", error);
          }
          
        


        }else{

          //send verification email to new email

          //1st req to name

          setPersonalCheck((prevState) => ({
            ...prevState,
            emailLoad: true,
            
          }));

          const name = {
            username: personalFormData.userName,
          };
          
          try {
            axios
              .post('http://localhost:8080/jobprovider/update/personal/name', name, {
                headers: {
                  Authorization: `Bearer ${jwtToken}`,
                },
              })
              .then((response) => {
                console.log(response);
          
                
                setSnackbar((prevState) => ({
                  ...prevState,
                  personalBoth: true,
                }));

                setPersonalCheck((prevState) => ({
                  ...prevState,
                  username: true,
                  
                }));

              })
              .catch((error) => {
                if (!error.response) {
                  // Network error or no response from the server
                  console.error("Network error or no response from the server:", error.message);
                  setSnackbar((prevState) => ({
                    ...prevState,
                    error: true,
                  }));
                } else {
                  // Handle the error based on the status code
                  console.error("Error response code:", error.response.status);
          
                  if (error.response.status === 401) {
                    setSnackbar((prevState) => ({
                      ...prevState,
                      pError: true,
                    }));
                  }
                }
              })
              .finally(() => {
                
              });
          } catch (error) {
            console.error("Unexpected error:", error);
          }


          //2nd req to send email, 

          const email ={
            newEmail : personalFormData.newEmail
          }

          try {
            axios
              .post('http://localhost:8080/jobprovider/send/v-email', email, {
                headers: {
                  Authorization: `Bearer ${jwtToken}`,
                },
              })
              .then((response) => {
                console.log(response);
          
                setSnackbar((prevState) => ({
                  ...prevState,
                  personalBoth: true,
                }));

                setPersonalCheck((prevState) => ({
                  ...prevState,
                  
                  email:true,
                }));

              })
              .catch((error) => {
                if (!error.response) {
                  // Network error or no response from the server
                  console.error("Network error or no response from the server:", error.message);
                  setSnackbar((prevState) => ({
                    ...prevState,
                    error: true,
                  }));
                } else {
                  // Handle the error based on the status code
                  console.error("Error response code:", error.response.status);
          
                  if (error.response.status === 401) {
                    setSnackbar((prevState) => ({
                      ...prevState,
                      pError: true,
                    }));
                  }
                }
              })
              .finally(() => {
                setPersonalCheck((prevState) => ({
                  ...prevState,
                  emailLoad: false,
                  
                }));
              });
          } catch (error) {
            console.error("Unexpected error:", error);
          }


          
        }


      }
      
    }


  }


  const resetForm = () => {
    setFormData(initialValues);
    setErrors({});
  }

  const handleDelete = () =>{

    try {

      axios.delete('http://localhost:8080/jobprovider/company', {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      }).then((response) => {
        console.log(response);

        logout(navigate);
      }
      ).catch((error) => {
        console.error(error);
      }
      );

    }
    catch (error) {
      console.error(error);
    }
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
                        gap:'2'

                        
                    }}
                >

                 <Typography sx={{ mb:2}} level='title-lg'>Personal Account Info</Typography>

                 <Input sx={{display:'none'}} name='form' value='personal' />

                <FormControl
                    sx={{
                        mb:2
                        
                      }}

                    error={Boolean(errors.userName)}
                >
                    <FormLabel>User Name</FormLabel>
                    <Skeleton loading={dataLoad}  >
                    <Input
                        name='userName'
                        startDecorator={<Button disabled><AccountCircleIcon/></Button>}
                        placeholder='Enter User Name'
                        value={personalFormData.userName}
                        onChange={handleChangeForPersonal}
                        endDecorator={personalCheck.username ? <Tooltip title="Updated" ><CheckCircleIcon size="sm" color="success"/></Tooltip> : ''}

                       // onInputChange={handleChangeForContact}
                      
                    />
                    </Skeleton>

                    {errors.userName && (
                        <FormHelperText error>{errors.userName}</FormHelperText>
                    )}
                </FormControl>

                

                <FormControl
                    sx={{
                        mb: 2
                      }}
                    
                    error={Boolean(errors.newEmail)}
                >
                    <FormLabel>Email</FormLabel>
                    <Skeleton loading={dataLoad}  >
                    <Input
                        name='newEmail'
                        startDecorator={<Button disabled><EmailIcon/></Button>}
                        placeholder='Enter Email'
                        onChange={handleChangeForPersonal}
                        value={personalFormData.newEmail}
                        endDecorator={
                          personalCheck.emailLoad ? (
                            <CircularProgress size="sm" />
                          ) : personalCheck.email ? (
                            <Tooltip title="Please verify your email">
                              <ErrorIcon color="warning" />
                            </Tooltip>
                          ) : null
                        }
                        
                    />
                    </Skeleton>

                    {errors.newEmail && (
                        <FormHelperText error>{errors.newEmail}</FormHelperText>
                    )}
                </FormControl>


                </Box>




            </CardContent>

            <CardOverflow sx={{ borderTop: '1px solid', borderColor: 'divider' }}>
            <CardActions sx={{ alignSelf: 'flex-end', pt: 2 }}>
              <Button onClick={resetForm} size="sm" variant="outlined" color="neutral">
                Cancel
              </Button>
              <Button disabled={dataLoad} type="submit" size="sm" variant="solid">
                Save
              </Button>
            </CardActions>
       
          </CardOverflow>

        </Card>
    </form> 

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
                    <Skeleton loading={dataLoad}  >
                    <Input
                        name='mapLocation'
                        startDecorator={<Button disabled><LocationOnIcon/></Button>}
                        placeholder='Enter your map location'
                        value={contactFormData.mapLocation}
                        onChange={handleChangeForContact}

                       // onInputChange={handleChangeForContact}
                      
                    />
                    </Skeleton>

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
                    <Skeleton loading={dataLoad}  >
                    <Input
                        name='phone'
                        startDecorator={<Button disabled><CallIcon/></Button>}
                        placeholder='Enter your phone number'
                        onChange={handleChangeForContact}
                        value={contactFormData.phone}

                    />
                    </Skeleton>

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
                    <Skeleton loading={dataLoad}  >
                    <Input
                        name='email'
                        startDecorator={<Button disabled><EmailIcon/></Button>}
                        placeholder='Enter your phone number'
                        onChange={handleChangeForContact}
                        value={contactFormData.email}
                    />
                    </Skeleton>

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
              <Button disabled={dataLoad} type="submit" size="sm" variant="solid">
                Save
              </Button>
            </CardActions>
       
          </CardOverflow>

        </Card>
    </form>   


        <form
         onSubmit={handleSubmit}
        >

        <Input sx={{display:'none'}} name='form' value='password' />
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

                    error={Boolean(errors.currentPassword)}
                    >
                    <FormLabel>Current Password</FormLabel>
                    <Skeleton loading={dataLoad}  >
                    <Input
                        name='currentPassword'
                        startDecorator={<Button disabled><LockIcon /></Button>}
                        placeholder='Enter your current password'
                        onChange={handleChangeForPassword}
                        type="password"
                       
                    />
                    </Skeleton>

                    {errors.currentPassword && (
                        <FormHelperText error>{errors.currentPassword}</FormHelperText>
                    )}
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

                            error={Boolean(errors.newPassword)}
                        >
                         <FormLabel>New Password</FormLabel>
                         <Skeleton loading={dataLoad}>
                        <Input
                            type="password"
                            name="newPassword"
                            placeholder="Type in here…"
                            startDecorator={<Button disabled><KeyIcon /></Button>}
                            value={value}
                            onChange={(event) => {
                              
                              setValue(event.target.value);

                              if (errors.newPassword) {
                                setErrors((prevState) => {
                                  const newErrors = { ...prevState };
                                  delete newErrors.newPassword;
                                  return newErrors;
                                });
                              }

                              handleChangeForPassword(event);


                            }}
                        />
                        </Skeleton>
                        {errors.newPassword && (
                            <FormHelperText error>{errors.newPassword}</FormHelperText>
                        )  
                        }


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
                            {value.length == 0 && ''}
                            {value.length < 3 && value.length != 0 && 'Very weak'}
                            {value.length >= 3 && value.length < 6 && 'Weak'}
                            {value.length >= 6 && value.length < 10 && 'Strong'}
                            {value.length >= 10 && 'Very strong'}
                        </Typography>
                        </Stack>

                        <FormControl
                        sx={{
                            mb:2
                            
                          }}

                    error={Boolean(errors.confirmPassword)}
                    >
                    <FormLabel>Confirm Password</FormLabel>
                    <Skeleton loading={dataLoad}  >
                    <Input
                        type='password'
                        name='confirmPassword'
                        startDecorator={<Button disabled><KeyIcon /></Button>}
                        placeholder='Confirm your password'
                        onChange={
                          handleChangeForPassword
                        }
                    />
                    </Skeleton>

                    {errors.confirmPassword && (
                        <FormHelperText error>{errors.confirmPassword}</FormHelperText>
                    )}
                    </FormControl>

                </Box>
                
                </CardContent>

                <CardOverflow sx={{ borderTop: '1px solid', borderColor: 'divider' }}>
                    <CardActions sx={{ alignSelf: 'flex-end', pt: 2 }}>
                        <Button type="reset" size="sm" variant="outlined" color="neutral">
                            Cancel
                        </Button>
                        <Button loading={formLoad.password} disabled={dataLoad} type="submit" size="sm" variant="solid">
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
                    <Button disabled={dataLoad} variant='solid' color='danger' onClick={()=> setSnackbar({...snackbar,delete:true})}>Delete Account</Button>
                    </CardActions>
            
            </CardOverflow>
        </Card>

    </Stack>

    <React.Fragment>

<Snackbar
  variant="soft"
  color="warning"
  open={snackbar.pError}
  onClose={() => setSnackbar({ ...snackbar, pError: false })}
  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
  startDecorator={<WarningAmberIcon />}
  endDecorator={
    <Button
      onClick={() => setSnackbar({ ...snackbar, pError: false })}
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
  <Typography level='body-sm'>Current Password Not Matched.</Typography>
  </Box>
</Snackbar>

<Snackbar
  variant="soft"
  color="warning"
  open={snackbar.error}
  onClose={() => setSnackbar({ ...snackbar, error: false })}
  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
  startDecorator={<WarningAmberIcon />}
  endDecorator={
    <Button
      onClick={() => setSnackbar({ ...snackbar, error: false })}
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
  <Typography level='body-sm'>Please try again later.</Typography>
  </Box>
</Snackbar>



<Snackbar
  variant="soft"
  color="success"
  open={snackbar.contact}
  onClose={() => setSnackbar({...snackbar, contact:false})}
  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
  startDecorator={<CheckCircleOutlineIcon />}
  endDecorator={
    <Button
      onClick={() => setSnackbar({...snackbar, contact:false})}
      size="sm"
      variant="soft"
      color="success"
    >
      Dismiss
    </Button>
  }
> 
  <Box sx={{display: 'flex' , flexDirection:'column'}}>

  Company Contact Info Updated
  </Box>
</Snackbar>

<Snackbar
  variant="soft"
  color="success"
  open={snackbar.password}
  onClose={() => setSnackbar({...snackbar, password:false})}
  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
  startDecorator={<CheckCircleOutlineIcon />}
  endDecorator={
    <Button
      onClick={() => setSnackbar({...snackbar, password:false})}
      size="sm"
      variant="soft"
      color="success"
    >
      Dismiss
    </Button>
  }
> 
  <Box sx={{display: 'flex' , flexDirection:'column'}}>

  Password Updated.
  </Box>
</Snackbar>


<Snackbar
  variant="soft"
  color="success"
  open={snackbar.personal}
  onClose={() => setSnackbar({...snackbar, personal:false})}
  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
  startDecorator={<CheckCircleOutlineIcon />}
  endDecorator={
    <Button
      onClick={() => setSnackbar({...snackbar, personal:false})}
      size="sm"
      variant="soft"
      color="success"
    >
      Dismiss
    </Button>
  }
> 
  <Box sx={{display: 'flex' , flexDirection:'column'}}>

  Personal Information Updated.
  </Box>
</Snackbar>


<Snackbar
  variant="soft"
  color="warning"
  open={snackbar.personalBoth}
  onClose={() => setSnackbar({...snackbar, personalBoth:false})}
  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
  startDecorator={<CheckCircleOutlineIcon />}
  endDecorator={
    <Button
      onClick={() => setSnackbar({...snackbar, personalBoth:false})}
      size="sm"
      variant="soft"
      color="success"
    >
      Dismiss
    </Button>
  }
> 
  <Box sx={{display: 'flex' , flexDirection:'column'}}>

  Please check your inbox to verify your new email address.
  </Box>
</Snackbar>


<Modal open={snackbar.delete} onClose={() => setSnackbar({...snackbar,delete:false})}>
        <ModalDialog variant="outlined" role="alertdialog">
          <DialogTitle>
            <WarningRoundedIcon />
            Confirmation
          </DialogTitle>
          <Divider />
          <DialogContent>
            Are you sure you want to remove the company?
          </DialogContent>
          <DialogActions>
            <Button  variant="solid" color="danger" onClick={() => {setSnackbar({...snackbar,delete:false}); handleDelete()}}>
              Remove
            </Button>
            <Button variant="outlined" color="neutral" onClick={() => setSnackbar({...snackbar,delete:false})}>
              Cancel
            </Button>
          </DialogActions>
        </ModalDialog>
      </Modal>

</React.Fragment>
    
    
    </>
  )
}

export default SettingsAccount