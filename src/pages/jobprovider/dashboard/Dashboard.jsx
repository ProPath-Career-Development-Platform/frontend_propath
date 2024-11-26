import React from 'react'
import Button from '@mui/joy/Button';
import Breadcrumbs from '@mui/joy/Breadcrumbs';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import ArrowForward from '@mui/icons-material/ArrowForward';
import Box from '@mui/joy/Box';
import { Container } from '@mui/material';
import { typographyClasses } from '@mui/joy/Typography';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import AspectRatio from '@mui/joy/AspectRatio';
import axios from 'axios';
import UserContext from '../../../utils/userContext'
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CircularProgress from '@mui/joy/CircularProgress';
import CardOverflow from '@mui/joy/CardOverflow';







const Dashboard = () => {

  const {logUser,setLogUser} = React.useContext(UserContext);

  const navigate = useNavigate();

  const jwtToken = localStorage.getItem('token');

  const[isPending, setIsPending] = React.useState(false);
  const[isDataLoad, setDataLoad] = React.useState(true);

  const handleSignInClick = () => {
    navigate('/jobprovider/setup');
  };

  React.useEffect(()=> {

   

    axios.get('http://localhost:8080/jobprovider/company/status', {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }).then((response) => {

      if(response.data === "pending"){
        setIsPending(true);
      }else if (response.data === "active"){


          axios.get('http://localhost:8080/jobprovider/company', {
            headers: {
              Authorization: `Bearer ${jwtToken}`,
            },
          }).then((response) => {
            
              setLogUser(response.data);
              localStorage.setItem('logUser', JSON.stringify(response.data));
              navigate('/jobprovider/home/');
            
          }).catch((error) => {
            console.log(error);
          });
        
        navigate('/jobprovider/home');
      }

      setDataLoad(false);
      
     
    }
    ).catch((error) => {
      console.error(error);
    });

  },[]);


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
                  Company Setup
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
                Company Setup
              </Typography>
              {/* <Button
                color="primary"
                startDecorator={<DownloadRoundedIcon />}
                size="sm"
              >
                Test button
              </Button> */}
            </Box>

            {

              isDataLoad ? (


                <Card sx={{ m: 'auto', display: {sm: 'flex' }, width: '100%', height:'100%' }}>
                <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', p: 5 }}>
                  
                  <CircularProgress size='lg' sx={{ mt: 2 }} />
                </CardContent>
              </Card>
                ) : 

              
              isPending ? (

                <>                <Card orientation='horizontal' sx={{m:'auto', display:{xs:'none',sm:'flex'}}}>


                <CardContent sx={{ display:'flex', flexDirection:'column', justifyContent:'center', alignContent:'center', p:5,gap:2}}>

               


                   
                    <Typography level='h2'>Company Registration Successful!</Typography>
                    <Typography level='body-md'>Your company has been registered successfully. An admin will review and verify the information shortly. You'll be notified once the verification process is complete.</Typography>
                   
                    

                </CardContent>

                <CardOverflow>

                    <AspectRatio ratio="10/9" objectFit='contain' sx={{display:{xs:'none',sm:'none', md:'block'},width:'550px'}}>
                        <img src="/com-ver.png"/>
                    </AspectRatio>

                    <AspectRatio ratio="1" objectFit='contain' sx={{display:{xs:'none',sm:'block', md:'none'},width:'360px'}}>
                        <img src="/com-ver.png"/>
                    </AspectRatio>

                    <AspectRatio ratio="1" objectFit='contain' sx={{display:{xs:'block',sm:'none', md:'none'},width:'100%'}}>
                        <img src="/com-ver.png"/>
                    </AspectRatio>

                </CardOverflow>

              </Card>


              <Card  sx={{m:'auto', display:{xs:'block',sm:'none'}}}>

              <CardOverflow>

                 

                    <AspectRatio ratio="4/3" objectFit='contain'>
                        <img src="/com-ver.png"/>
                    </AspectRatio>

                </CardOverflow>

                <CardContent sx={{ display:'flex', flexDirection:'column', justifyContent:'center', alignContent:'center', p:1,gap:2, mt:2}}>

               


                   
                <Typography level='h2'>Company Registration Successful!</Typography>
                 <Typography level='body-md'>Your company has been registered successfully. An admin will review and verify the information shortly. You'll be notified once the verification process is complete.</Typography>
                   
                    
                    

                </CardContent>


                </Card>

                </>

              ):

              (

                <>

<Container sx={(theme) => ({
        position: 'relative',
        overflow: 'auto',
        maxHeight: 'calc(100vh - 64px)',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: '10px',
        mt:4,
        padding: '16px',
        border: '2px solid #814DDE',
        py: 10,
        gap: 4,
        [theme.breakpoints.up(834)]: {
          flexDirection: 'row',
          gap: 6,
        },
        [theme.breakpoints.up(1199)]: {
          gap: 12,
        },
      })} >

<Box
        sx={(theme) => ({
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem',
          maxWidth: '50ch',
          width:'100%',
          
          textAlign: 'center',
          flexShrink: 999,
          [theme.breakpoints.up(834)]: {
            minWidth: 500,
            alignItems: 'flex-start',
            textAlign: 'initial',
          },
          [`& .${typographyClasses.root}`]: {
            textWrap: 'balance',
          },
        })}
      >
        <Box>
          <img src="/logonew.png" alt="" style={{width:'300px',height:'70px'}} />
        </Box>
      <Typography color="primary" fontSize="m" fontWeight="lg">
        Where Talents Meet Opportunity
      </Typography>
      <Typography
        level="h2"
        fontWeight="l"
        fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
      >
       Register your Company To Startup
      </Typography>
      {/* <Typography fontSize="lg" textColor="text.secondary" lineHeight="lg">
        Dashboard Pgae
      </Typography> */}
      <Button size="lg" endDecorator={<ArrowForward fontSize="xl" />} onClick={handleSignInClick}>
        Get Started
      </Button>
      {/* <Typography>
        Already a member?  <Link
      component="button"
      fontWeight="lg"
      onClick={handleSignInClick}
    >
      Sign in
    </Link>
      </Typography> */}
     

  
      </Box>

                <AspectRatio
                ratio="16/9"
                objectFit="cover"
                variant="soft"
                sx={{
                  width: '550px',
                  borderRadius: 'md',
                 
                }}
                
                >
              <img loading="lazy" src="/new.jpg" alt=""  />
              </AspectRatio>

            </Container>
                
                
                </>


              )
            }

            


           

           
          </Box>

  )
}

export default Dashboard