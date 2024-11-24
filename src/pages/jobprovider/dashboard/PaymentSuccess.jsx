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
import { useParams } from 'react-router-dom';


const JpPaymentSuccess = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const sessionId = queryParams.get('sessionId');
  const type = queryParams.get('type');


    console.log(sessionId);

  const [loading, setLoading] = useState(true);
  const[error,setError] = useState(false);

  const jwtToken = localStorage.getItem('token');

  useEffect(() => {

    if(type === 'month'){
      axios.post(`http://localhost:8080/jobprovider/verify-session-monthly/${sessionId}`, {}, {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      })
      .then((response) => {
  
          if(response.data === false){
              setError(true);
          }
  
        setLoading(false);
  
      
       
      })
      .catch((error) => {
        setLoading(false);
        setError(true);
      });
    }else if(type === 'upgrade'){
    // Send axios post request
    axios.post(`http://localhost:8080/jobprovider/verify-session-upgrade/${sessionId}`, {}, {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    })
    .then((response) => {

        if(response.data === false){
            setError(true);
        }

      setLoading(false);

    
     
    })
    .catch((error) => {
      setLoading(false);
      setError(true);
    });

    }
  }, [sessionId,type]);
  

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
        <Typography level="h2">Verifying Payment Status...</Typography>
        <Typography level="body-md">Please wait while we verify your payment.</Typography>
        <CircularProgress sx={{ mt: 2 }} />
      </CardContent>
    </Card>
  ) : error ? (
    // Error State
    <>
      <Card orientation="horizontal" sx={{ m: 'auto', display: { xs: 'none', sm: 'flex' } }}>
        <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', p: 5, gap: 2 }}>
          <Typography level="h2">Payment Failed!</Typography>
          <Typography level="body-md">
            We encountered an issue while verifying your payment. This may have occurred because the payment has already been processed. Please contact support for further assistance.
          </Typography>
          <Button variant="soft" color="primary" sx={{ width: '100px' }} component={RouterLink} to="/jobprovider/plans-and-billing/">Back</Button>
        </CardContent>
        <CardOverflow>
          {/* Responsive images */}
          <AspectRatio ratio="10/9" objectFit="contain" sx={{ display: { xs: 'none', sm: 'none', md: 'block' }, width: '550px' }}>
            <img src="/payment-fail.png" alt="Verification failed" />
          </AspectRatio>
          <AspectRatio ratio="1" objectFit="contain" sx={{ display: { xs: 'none', sm: 'block', md: 'none' }, width: '360px' }}>
            <img src="/payment-fail.png" alt="Verification failed" />
          </AspectRatio>
          <AspectRatio ratio="1" objectFit="contain" sx={{ display: { xs: 'block', sm: 'none', md: 'none' }, width: '100%' }}>
            <img src="/payment-fail.png" alt="Verification failed" />
          </AspectRatio>
        </CardOverflow>
      </Card>
      {/* Small screen error message */}
      <Card sx={{ m: 'auto', display: { xs: 'block', sm: 'none' } }}>
        <CardOverflow>
          <AspectRatio ratio="4/3" objectFit="contain">
            <img src="/payment-fail.png" alt="Verification failed" />
          </AspectRatio>
        </CardOverflow>
        <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', p: 1, gap: 2, mt: 2 }}>
          <Typography level="h3">Payment Failed!</Typography>
          <Typography level="body-sm">
          We encountered an issue while verifying your payment. This may have occurred because the payment has already been processed. Please contact support for further assistance.
          </Typography>
          <Button variant="soft" color="primary" size="sm" sx={{ width: '100px' }} component={RouterLink} to="/jobprovider/plans-and-billing/">Back</Button>
        </CardContent>
      </Card>
    </>
  ) : (
    // Success State
    <>
      <Card orientation="horizontal" sx={{ m: 'auto', display: { xs: 'none', sm: 'flex' } }}>
        <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', p: 5, gap: 2 }}>
          <Typography level="h2">Payment Successful!</Typography>
          <Typography level="body-md">Your payment has been successfully processed. Thank you for your purchase! You will receive a confirmation email shortly.</Typography>
          <Button variant="soft" color="primary" sx={{ width: '100px' }} component={RouterLink} to="/jobprovider/plans-and-billing/">Back</Button>
        </CardContent>
        <CardOverflow>
          {/* Responsive images */}
          <AspectRatio ratio="10/9" objectFit="contain" sx={{ display: { xs: 'none', sm: 'none', md: 'block' }, width: '550px' }}>
            <img src="/payment-suc.png" alt="Verification successful" />
          </AspectRatio>
          <AspectRatio ratio="1" objectFit="contain" sx={{ display: { xs: 'none', sm: 'block', md: 'none' }, width: '360px' }}>
            <img src="/payment-suc.png" alt="Verification successful" />
          </AspectRatio>
          <AspectRatio ratio="1" objectFit="contain" sx={{ display: { xs: 'block', sm: 'none', md: 'none' }, width: '100%' }}>
            <img src="/payment-suc.png" alt="Verification successful" />
          </AspectRatio>
        </CardOverflow>
      </Card>
      {/* Small screen success message */}
      <Card sx={{ m: 'auto', display: { xs: 'block', sm: 'none' } }}>
        <CardOverflow>
          <AspectRatio ratio="4/3" objectFit="contain">
            <img src="/payment-suc.png" alt="Verification successful" />
          </AspectRatio>
        </CardOverflow>
        <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', p: 1, gap: 2, mt: 2 }}>
          <Typography level="h3">Payment Successful!</Typography>
          <Typography level="body-sm">Your payment has been successfully processed. Thank you for your purchase! You will receive a confirmation email shortly.</Typography>
          <Button variant="soft" color="primary" size="sm" sx={{ width: '100px' }} component={RouterLink} to="/jobprovider/plans-and-billing/">Back</Button>
        </CardContent>
      </Card>
    </>
  )
}

                


            
        



           

           
          </Box>

          

  )
}

export default JpPaymentSuccess