import React ,{useState,useEffect,useContext}from 'react'
import Button from '@mui/joy/Button';
import Typography from '@mui/joy/Typography';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import { AspectRatio } from '@mui/joy';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import CircularProgress from '@mui/joy/CircularProgress';
import axios from 'axios';
import {Link as RouterLink} from 'react-router-dom';


const emailVerification = () => {
  const navigate = useNavigate();
  const location = useLocation();

 const getQueryParams = () => {
    const params = new URLSearchParams(location.search);
    return {
      token: params.get('token'), // Extracting the token
    };
  };

  const { token } = getQueryParams();

  const [loading, setLoading] = useState(true);
  const[error,setError] = useState(false);

  const jwtToken = localStorage.getItem('token');

  useEffect(() => {
    // Send axios post request
    axios.post(`http://localhost:8080/jobprovider/verify-email/${token}`, {}, {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    })
    .then((response) => {
      setLoading(false);

      //change jwt token
      localStorage.setItem('token', response.data.jwt);
     
    })
    .catch((error) => {
      setLoading(false);
      setError(true);
    });
  }, [token]);
  

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
                
              </Typography>
              
            </Box>

            {
  loading ? (
    // Loading State
    <Card sx={{ m: 'auto', display: { xs: 'none', sm: 'flex' } }}>
      <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', p: 5 }}>
        <Typography level="h2">Verifying Email...</Typography>
        <Typography level="body-md">Please wait while we verify your email address.</Typography>
        <CircularProgress sx={{ mt: 2 }} />
      </CardContent>
    </Card>
  ) : error ? (
    // Error State
    <>
      <Card orientation="horizontal" sx={{ m: 'auto', display: { xs: 'none', sm: 'flex' } }}>
        <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', p: 5, gap: 2 }}>
          <Typography level="h2">Email Verification Failed!</Typography>
          <Typography level="body-md">
            We encountered an issue while updating your email address. This may be because the verification link has expired. Please request a new verification link or contact support for further assistance.
          </Typography>
          <Button variant="soft" color="primary" sx={{ width: '100px' }} component={RouterLink} to="/jobprovider/settings/">Settings</Button>
        </CardContent>
        <CardOverflow>
          {/* Responsive images */}
          <AspectRatio ratio="10/9" objectFit="contain" sx={{ display: { xs: 'none', sm: 'none', md: 'block' }, width: '550px' }}>
            <img src="/email-v.png" alt="Verification failed" />
          </AspectRatio>
          <AspectRatio ratio="1" objectFit="contain" sx={{ display: { xs: 'none', sm: 'block', md: 'none' }, width: '360px' }}>
            <img src="/email-v.png" alt="Verification failed" />
          </AspectRatio>
          <AspectRatio ratio="1" objectFit="contain" sx={{ display: { xs: 'block', sm: 'none', md: 'none' }, width: '100%' }}>
            <img src="/email-v.png" alt="Verification failed" />
          </AspectRatio>
        </CardOverflow>
      </Card>
      {/* Small screen error message */}
      <Card sx={{ m: 'auto', display: { xs: 'block', sm: 'none' } }}>
        <CardOverflow>
          <AspectRatio ratio="4/3" objectFit="contain">
            <img src="/email-v.png" alt="Verification failed" />
          </AspectRatio>
        </CardOverflow>
        <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', p: 1, gap: 2, mt: 2 }}>
          <Typography level="h3">Email Verification Failed!</Typography>
          <Typography level="body-sm">
            We encountered an issue while updating your email address. This may be because the verification link has expired. Please request a new verification link or contact support for further assistance.
          </Typography>
          <Button variant="soft" color="primary" size="sm" sx={{ width: '100px' }} component={RouterLink} to="/jobprovider/settings/">Settings</Button>
        </CardContent>
      </Card>
    </>
  ) : (
    // Success State
    <>
      <Card orientation="horizontal" sx={{ m: 'auto', display: { xs: 'none', sm: 'flex' } }}>
        <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', p: 5, gap: 2 }}>
          <Typography level="h2">Email Verification Successful!</Typography>
          <Typography level="body-md">Your email address has been successfully verified! You can now access all features of your account.</Typography>
          <Button variant="soft" color="primary" sx={{ width: '100px' }} component={RouterLink} to="/jobprovider/settings/">Settings</Button>
        </CardContent>
        <CardOverflow>
          {/* Responsive images */}
          <AspectRatio ratio="10/9" objectFit="contain" sx={{ display: { xs: 'none', sm: 'none', md: 'block' }, width: '550px' }}>
            <img src="/email-v.png" alt="Verification successful" />
          </AspectRatio>
          <AspectRatio ratio="1" objectFit="contain" sx={{ display: { xs: 'none', sm: 'block', md: 'none' }, width: '360px' }}>
            <img src="/email-v.png" alt="Verification successful" />
          </AspectRatio>
          <AspectRatio ratio="1" objectFit="contain" sx={{ display: { xs: 'block', sm: 'none', md: 'none' }, width: '100%' }}>
            <img src="/email-v.png" alt="Verification successful" />
          </AspectRatio>
        </CardOverflow>
      </Card>
      {/* Small screen success message */}
      <Card sx={{ m: 'auto', display: { xs: 'block', sm: 'none' } }}>
        <CardOverflow>
          <AspectRatio ratio="4/3" objectFit="contain">
            <img src="/email-v.png" alt="Verification successful" />
          </AspectRatio>
        </CardOverflow>
        <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', p: 1, gap: 2, mt: 2 }}>
          <Typography level="h3">Email Verification Successful!</Typography>
          <Typography level="body-sm">Your email address has been successfully verified! You can now access all features of your account.</Typography>
          <Button variant="soft" color="primary" size="sm" sx={{ width: '100px' }} component={RouterLink} to="/jobprovider/settings/">Settings</Button>
        </CardContent>
      </Card>
    </>
  )
}

                


            
        



           

           
          </Box>

          

  )
}

export default emailVerification