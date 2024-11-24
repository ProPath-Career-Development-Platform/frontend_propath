import React, {useEffect, useState} from 'react'
import Box from '@mui/joy/Box';
import Breadcrumbs from '@mui/joy/Breadcrumbs';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import Link from '@mui/joy/Link';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import Divider from '@mui/joy/Divider';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardActions from '@mui/joy/CardActions';
import Typography from '@mui/joy/Typography';
import AspectRatio from '@mui/joy/AspectRatio';
import PaymentIcon from '@mui/icons-material/Payment';
import Chip from '@mui/joy/Chip';
import { ListItemDecorator } from '@mui/joy';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import BlockIcon from '@mui/icons-material/Block';
import Table from '@mui/joy/Table';
import Sheet from '@mui/joy/Sheet';
import DownloadIcon from '@mui/icons-material/Download';
import CircularProgress from '@mui/joy/CircularProgress';
import {Link as RouterLink} from 'react-router-dom';
import axios from 'axios';
import Skeleton from '@mui/joy/Skeleton';
import { loadStripe } from '@stripe/stripe-js';
import BillTable from '../../../components/jobprovider/dashboard/BillTable';

function PlanAndBilling() {

  const token = localStorage.getItem('token');
  const [loading, setLoading] = useState(true);
  const [butLoad,setButLoad] = useState(false);
  const [subscription, setSubscription] = useState([]);
  const [currentPlanFeatures, setCurrentPlanFeatures] = useState([]);
  const [remainingPlanFeatures, setRemainingPlanFeatures] = useState([]);

  useEffect(() => {


    axios.get('http://localhost:8080/jobprovider/subscription', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then((response) => {
      setSubscription(response.data);
     
    })
    .catch((error) => {
      console.log(error);
    })
    
  

  

  }, [])

  useEffect(() => {
    const selectedPlanFeatures = plans[subscription.planName]?.features || [];
      const remainingFeatures =plans.PREMIUM.features;
  
      setCurrentPlanFeatures(selectedPlanFeatures);
      setRemainingPlanFeatures(remainingFeatures);
      setLoading(false);  
  }, [subscription]);
  
  

  const plans = {
    BASIC: {
      name: "Basic",
      features: [
        { text: "3 Job Posting", included: true },
        { text: "3 Meetup or Workshop", included: true },
      ],
    },
    STANDARD: {
      name: "Standard",
      features: [
        { text: "5 Job Postings", included: true },
        { text: "24/7 Critical support", included: true },
        { text: "5 Meetup or Workshop", included: true },
      ],
    },
    PREMIUM: {
      name: "Premium",
      features: [
        { text: "10 Job Postings", included: true },
        { text: "24/7 Critical support", included: true },
        { text: "10 Meetup or Workshop", included: true },
      ],
    },
  };






 

  const handlePayment = async () => {

    

    const stripe = await loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);
  
    try {
      setButLoad(true);
      // Send the request to create a checkout session
      const response = await axios.get('http://localhost:8080/jobprovider/create-checkout-session-monthly', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
  
      // Extract the session ID from the response
      const { sessionId } = response.data;
  
      if (sessionId) {
        // Redirect to Stripe Checkout
        const { error } = await stripe.redirectToCheckout({ sessionId });
        if (error) {
          console.error("Error redirecting to checkout: ", error);
        }
      } else {
        console.error("No session ID received from backend.");
      }
    } catch (error) {
      // Log and handle errors from the request
      console.error("Error creating checkout session: ", error);
    }
  };
  
  


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
                Plans and Billing
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
              Plans and Billing
            </Typography>
          
          </Box>

          {/*breadcrumbs over*/}
          <Divider />

          <Box sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, minmax(80px, 1fr))',
                    gap: 1.5,
                    marginBottom: '1rem',
                  }}>


                  <Card  sx={{ borderRadius: 10, maxWidth: '100%',  }}>
                    <CardContent>

                    {loading ? (

                        <Box sx={{display: 'flex', justifyContent:'center',alignItems:'center', m:'auto'}}>
                        <CircularProgress  />
                        </Box>
                      
                    ) : (

                        <>
                         <Typography level="body-sm" fontWeight="lg">Current Plan</Typography>
                        
                         <Typography level="h2" fontSize="xlg" sx={{mt:1,mb:1}}>{subscription.planName}</Typography>

                          <Typography level="body-sm">
                          The Basic Plan is ideal for individual job seekers and small businesses needing to post a few job listings, offering essential features at an affordable price.
                          </Typography>

                          <CardActions >

                            <Box sx={(theme)=>({
                                display: 'flex',
                                gap: 1,
                                flexDirection: 'row',
                                alignItems: 'center',
                                width: '100%',

                                [theme.breakpoints.down('500')]: {
                                  display: 'flex',
                                  gap: 1,
                                  flexShrink: 1,
                                  flexDirection: 'column',
                                  alignItems: 'start',
                                  minWidth: 100,
                                  
                                }
                            })}>
                              <Button 
                              variant="solid" 
                              size ="md"
                              component= {RouterLink}
                              to = "/jobprovider/plans-and-billing/changePlan"
                              >
                               Change Plan </Button>
                              

                            </Box>

                           

                          

                          </CardActions>
                          </>


                    )
                    }
                        
                        



                        </CardContent>

                  </Card>

                  <Card orientation='horizontal'  sx={{  borderRadius: 10, maxWidth: '100%' }}>

                        <CardContent>

                        {loading ? (

                            <Box sx={{display: 'flex', justifyContent:'center',alignItems:'center', m:'auto'}}>
                            <CircularProgress  />
                            </Box>

                            ) : (

                              <>

   {subscription.planName === "BASIC" ? (
                                <>
                                <Typography level="body-sm" fontWeight="lg">No Payment Required</Typography>
                                <Typography color='primary' level="h2" fontSize="xlg" sx={{mt:1}}>FREE</Typography>
                                
                                </>
                              ) : (
                                <>
                                <Typography level="body-sm" fontWeight="lg">Next Invoice</Typography>
                                <Typography color='primary' level="h2" fontSize="xlg" sx={{mt:1}}>LKR {subscription.planPrice}</Typography>
                                <Typography  level="title-lg"  sx={{mb:0.5}}>{subscription.planEndDate}</Typography>
                                </>
                              )
                              }

                               

                                <Typography  level="body-md"  sx={(theme)=>({
                                  
                                  mb:3,
                                  fontSize: '0.875rem',
                                  [theme.breakpoints.up('834')]: {
                                    fontSize:'md'
                                  }


                                })}
                                  
                                  
                                  >Package Started: <Typography fontWeight="md">{subscription.planCreatedAt}</Typography></Typography>

                                  {subscription.planName === "BASIC" ? (
                                    <Button 
                                    variant="solid" size ="md" endDecorator={<PaymentIcon/>}  
                                    component= {RouterLink}
                                    to = "/jobprovider/plan-and-billing/Paynow" disabled>
                                      Pay Now 
                                    </Button>
                                  ) : (

                                <Button 
                                variant="solid" size ="md" endDecorator={<PaymentIcon/>}  
                                 disabled={subscription.paidStatus === "success"}
                                onClick={()=>handlePayment()}
                                loading = {butLoad}
                                >
                                  Pay Now 
                                </Button>
                                  )
                                    }

                                </>
                            )}

                        </CardContent>

                        
                        
                        <AspectRatio  variant="soft" ratio={1} objectFit="fill"  sx={(theme)=>({
                              display: 'none',
                             
                              
                            [theme.breakpoints.up('1267')]: {
                              display: 'block',
                              width: 200,
                             
                          
            
                            }
                          
                        })}>
                                
                                <img
                                  src="/wallet-purple.png"
                                  loading="lazy"
                                  alt=""
                                />
    
                        </AspectRatio>
                      


                  </Card>

          </Box>

          <Typography  level="h4" >Are you satisfied with the benefits of your plan?</Typography>





          <Card orientation="horizontal" variant="outlined" sx={{ borderRadius: 10 }}>
      <CardContent>
        <Typography level="title-lg">Current Plan Benefits</Typography>
        <List size="md">
          {currentPlanFeatures.map((feature, index) => (
            <ListItem key={index}>
              <ListItemDecorator>
                <CheckCircleOutlineIcon color="success" />
              </ListItemDecorator>
              {feature.text}
            </ListItem>
          ))}
        </List>
      </CardContent>

      <Divider orientation="vertical" flexItem />

      <CardContent>
        <Typography level="title-lg">Remaining Plan Benefits</Typography>
        <List size="md">
          {remainingPlanFeatures.map((feature, index) => (
            <ListItem key={index}>
              <ListItemDecorator>
                <BlockIcon color="danger" />
              </ListItemDecorator>
              {feature.text}
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
          
          
    <Typography  level="h4" sx={{ mt:2 }} >Latest Invoices</Typography>

    <BillTable/>


          







        </Box>
  )
}

export default PlanAndBilling