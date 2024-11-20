import React ,{useEffect,useState}from 'react'
import Breadcrumbs from '@mui/joy/Breadcrumbs';
import Box from '@mui/joy/Box';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

import { loadStripe } from '@stripe/stripe-js';
import dayjs from 'dayjs';

import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import Chip from '@mui/joy/Chip';
import Divider from '@mui/joy/Divider';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Check from '@mui/icons-material/Check';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import axios from 'axios';
import {Link as RouterLink} from 'react-router-dom';


import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import DialogActions from '@mui/joy/DialogActions';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import DeleteForever from '@mui/icons-material/DeleteForever';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded'
import { useNavigate } from 'react-router-dom';
import Snackbar from '@mui/joy/Snackbar';

const ChangePlan = () => {

  
  const navigate = useNavigate();

  const token = localStorage.getItem('token');
  const [loading, setLoading] = useState({
    but1: false,
    but2: false,
    but3: false,
  });
  const [disabled, setDisabled] = useState({
    but1: false,
    but2: false,
    but3: false,
  });
  const [subscription, setSubscription] = useState([]);
  const [plans, setPlans] = useState([]);
  const [open, setOpen] = useState(false);
  const [modBut,setModBut] = useState(false);
  const [eOpen, setEOpen] = useState(false);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch subscription details
        const subscriptionResponse = await axios.get(
          "http://localhost:8080/jobprovider/subscription",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
  
        setSubscription(subscriptionResponse.data);
  
        // Fetch subscription plans
        const plansResponse = await axios.get(
          "http://localhost:8080/jobprovider/subscription/plan",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
  
        setPlans(plansResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, [token]); // Add `token` as a dependency if it can change
  
  // Separate useEffect to handle subscription updates
  useEffect(() => {
    if (subscription) {
      const endDate = dayjs(subscription.planEndDate);
      const today = dayjs();
  
      if (endDate.isAfter(today)) {
        if (subscription.planName === "BASIC") {
          setDisabled({
            but1: true,
            but2: false,
            but3: false,
          });
        } else if (subscription.planName === "STANDARD") {
          setDisabled({
            but1: true,
            but2: true,
            but3: false,
          });
        } else if (subscription.planName === "PREMIUM") {
          setDisabled({
            but1: true,
            but2: true,
            but3: true,
          });
        }
      }
    }
  }, [subscription]); // React when `subscription` updates
  

 

  const handleCheckout = async (newPrice,planId) => {

  
    const startDate = dayjs(subscription.planStartDate); // Start date of the current plan
    const endDate = dayjs(subscription.planEndDate); // End date of the current plan
    const today = dayjs(); // Today's date
    const currentPlan = subscription.planPrice; // Current plan price
    let upgrade = false;

   
    if (endDate.isAfter(today)) {
      // Calculate total days in the current billing cycle
      const totalDays = endDate.diff(startDate, 'day');
  
      // Calculate days remaining in the current plan
      const remainingDays = endDate.diff(today, 'day');
  
      // Calculate cost per day for the current plan
      const currentPlanDailyRate = currentPlan / totalDays;
  
      // Calculate the refund for unused days
      const refundAmount = currentPlanDailyRate * remainingDays;
  
      // Calculate cost per day for the new plan
      const newPlanDailyRate = newPrice / totalDays;
  
      // Calculate the cost of the new plan for the remaining days
      const newPlanCostForRemainingDays = newPlanDailyRate * remainingDays;
  
      // Determine additional amount needed
      const additionalPayment = newPlanCostForRemainingDays - refundAmount;
  
      if (additionalPayment > 0) {
        newPrice = additionalPayment;
        upgrade = true;
      }
    }
 
    const stripePromise = await loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);
    
    try {
      const response = await axios.post(
        'http://localhost:8080/jobprovider/create-checkout-session',
        { price: newPrice, planId: planId, upgrade: upgrade },
        {
          headers: { Authorization: `Bearer ${token}` , 'Content-Type': 'application/json' },
        }
      );

      const { sessionId } = response.data;

      if (sessionId) {
        
        const { error } = await stripePromise.redirectToCheckout({ sessionId });
       // const { error } = await stripe.redirectToCheckout({ sessionId });
      // window.location.href = `https://checkout.stripe.com/pay/${sessionId}`;

        if (error) {
          console.error("Error redirecting to checkout: ", error);
        }
      } else {
        console.error("No session ID received from backend.");
        //set all buttons to false
        setLoading({
          but1: false,
          but2: false,
          but3: false,
        });
      }
    } catch (error) {
      console.error("Error creating checkout session: ", error);
    }
  };

  const handleBasic = async () => {
    try {

      setModBut(true);

      const response = await axios.get(
        'http://localhost:8080/jobprovider/change-plan-basic',
        {
          headers: { Authorization: `Bearer ${token}`},
        }
      );

      if (response.status === 200) {
        setOpen(false);
        setModBut(false);
        //redirect to dashboard
        navigate('/jobprovider/plans-and-billing/');
        
        console.log("Successfully changed to basic plan.");
      } else {
        setOpen(false);
        setEOpen(true);
        setModBut(false);
        console.error("Failed to change to basic plan.");
      }
    } catch (error) {
      setOpen(false);
      setEOpen(true);
      setModBut(false);
      console.error("Error changing to basic plan: ", error);
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

        
<Box>
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
                  href="/jobprovider/Dashboard/"
                  fontSize={12}
                  fontWeight={500}
                >
                  Dashboard
                </Link>
                <Link
                  underline="hover"
                  color="neutral"
                  href="/jobprovider/my-jobs/"
                  fontSize={12}
                  fontWeight={500}
                >
                  Plans and Billings
                </Link>
                <Typography color="primary" fontWeight={500} fontSize={12}>
                  Change Plan
                </Typography>
               
              </Breadcrumbs>
            </Box>

            <Box
                sx={{
                    width:'100%',
                    display:'flex',
                    flexDirection:{xs:'column',sm:'row'},
                    mt:3,
                    justifyContent:'space-around'
                    
                }}
            >
               <Box>
               <Typography level="h2">Buy Premium Subscription to Post a Job</Typography>
                <Typography sx={{width:{sm:550 , xs:400},mt:{xs:1 , sm:3}}}>Discover the perfect subscription plan to elevate your job postings.With our subscriptions, 
                  you can post jobs effortlessly, track applications seamlessly, and connect with top candidates. 
                  Choose the plan that fits your needs and take the next step in building your dream team.</Typography>
                </Box> 
                <Box>
                    <img src="/postJob.png" alt="" />
                </Box>
            </Box>
            <Box
               sx={{
                width:'100%',
                display:'flex',
                flexDirection:{xs:'column',sm:'row'},
                gap:{xs:3},
                mt:3,
                justifyContent:'space-around'
                
            }} 
            >
               <Box>
               <Card size="lg" variant="outlined">

                {subscription.planName ==="BASIC" &&
               <Chip
                variant="outlined"
                color="primary"
                size="md"
                endDecorator={<CheckCircleIcon fontSize="sm" />}
                
              >
                Selected
              </Chip>
    }

        <Typography level="h2">BASIC</Typography>
        <Divider inset="none" />
        <List size="sm" sx={{ mx: 'calc(-1 * var(--ListItem-paddingX))' }}>
          <ListItem>
            <ListItemDecorator>
            <CheckCircleIcon color="primary"/>
            </ListItemDecorator>
            Post 1 Job
          </ListItem>
          <ListItem>
            <ListItemDecorator>
            <CheckCircleIcon color="primary"/>
            </ListItemDecorator>
            10 days Resume visibility
          </ListItem>
          <ListItem>
            <ListItemDecorator>
            <CheckCircleIcon color="primary"/>
            </ListItemDecorator>
            24/7 Critical support
          </ListItem>
          <ListItem>
            <ListItemDecorator>
            <CheckCircleIcon color="primary"/>
            </ListItemDecorator>
            One Meetup or Workshop
          </ListItem>
        </List>
        <Divider inset="none" />
        <CardActions>
          <Typography level="title-lg" sx={{ mr: 'auto' }} color="primary">
          {plans[0]?.price} LKR{' '}
            <Typography fontSize="sm" textColor="text.tertiary">
              / month
            </Typography>
          </Typography>
          <Button
            variant="soft"
            color="primary"
            endDecorator={<KeyboardArrowRight />}
            disabled={disabled.but1 || subscription.planName ==="BASIC"}
            loading={loading.but1}
            onClick={()=> setOpen(true)}
          >
            Start now
          </Button>
        </CardActions>
      </Card>
                </Box> 
                <Box>
               <Card size="lg" variant="outlined">
               {subscription.planName ==="STANDARD" &&
               <Chip
                variant="outlined"
                color="primary"
                size="md"
                endDecorator={<CheckCircleIcon fontSize="sm" />}
                
              >
                Selected
              </Chip>
    }
        <Typography level="h2">STANDARD</Typography>
        <Divider inset="none" />
        <List size="sm" sx={{ mx: 'calc(-1 * var(--ListItem-paddingX))' }}>
          <ListItem>
            <ListItemDecorator>
            <CheckCircleIcon color="primary"/>
            </ListItemDecorator>
            Post 3 Job
          </ListItem>
          <ListItem>
            <ListItemDecorator>
            <CheckCircleIcon color="primary"/>
            </ListItemDecorator>
            10 days Resume visibility
          </ListItem>
          <ListItem>
            <ListItemDecorator>
            <CheckCircleIcon color="primary"/>
            </ListItemDecorator>
            24/7 Critical support
          </ListItem>
          <ListItem>
            <ListItemDecorator>
            <CheckCircleIcon color="primary"/>
            </ListItemDecorator>
            3 Meetups or Workshps
          </ListItem>
        </List>
        <Divider inset="none" />
        <CardActions>
          <Typography level="title-lg" sx={{ mr: 'auto' }} color="primary">
          {plans[1]?.price} LKR{' '}
            <Typography fontSize="sm" textColor="text.tertiary">
              / month
            </Typography>
          </Typography>
          <Button

            variant="soft"
            color="primary"
            endDecorator={<KeyboardArrowRight />}
            disabled={disabled.but2 || subscription.planName ==="STANDARD"}
            onClick={() =>{handleCheckout(plans[1]?.price,plans[1]?.id); setLoading({but2: true});}}
            loading={loading.but2}

          >
            Start now
          </Button>
        </CardActions>
      </Card>
                </Box> 
                <Box>
               <Card size="lg" variant="outlined">
               {subscription.planName ==="PREMIUM" &&
               <Chip
                variant="outlined"
                color="primary"
                size="md"
                endDecorator={<CheckCircleIcon fontSize="sm" />}
                
              >
                Selected
              </Chip>
    }
        <Typography level="h2">PREMIUM</Typography>
        <Divider inset="none" />
        <List size="sm" sx={{ mx: 'calc(-1 * var(--ListItem-paddingX))' }}>
          <ListItem>
            <ListItemDecorator>
            <CheckCircleIcon color="primary"/>
            </ListItemDecorator>
            Post 10 Job
          </ListItem>
          <ListItem>
            <ListItemDecorator>
            <CheckCircleIcon color="primary"/>
            </ListItemDecorator>
            10 days Resume visibility
          </ListItem>
          <ListItem>
            <ListItemDecorator>
            <CheckCircleIcon color="primary"/>
            </ListItemDecorator>
            24/7 Critical support
          </ListItem>
          <ListItem>
            <ListItemDecorator>
            <CheckCircleIcon color="primary"/>
            </ListItemDecorator>
            Meetups / Workshops Publishing
          </ListItem>
        </List>
        <Divider inset="none" />
        <CardActions>
          <Typography level="title-lg" sx={{ mr: 'auto' }} color="primary">
          {plans[2]?.price} LKR€{' '}
            <Typography fontSize="sm" textColor="text.tertiary">
              / month
            </Typography>
          </Typography>
          <Button
            variant="soft"
            color="primary"
            endDecorator={<KeyboardArrowRight />}
            disabled={disabled.but3 || subscription.planName ==="PREMIUM"}
            loading={loading.but3}
            onClick={() =>{handleCheckout(plans[2]?.price,plans[2]?.id); setLoading({but3: true});}}
          
          >
            Start now
          </Button>
        </CardActions>
      </Card>
                </Box> 
              
            </Box>

            <React.Fragment>
      
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog variant="outlined" role="alertdialog">
          <DialogTitle>
            <WarningRoundedIcon />
            Confirmation
          </DialogTitle>
          <Divider />
          <DialogContent>
            Are you sure you want to change subscrption to basic?
          </DialogContent>
          <DialogActions>
            <Button loading={modBut}variant="solid" color="danger" onClick={() => handleBasic()}>
              Yes
            </Button>
            <Button variant="solid" color="neutral" onClick={() => setOpen(false)}>
              Cancel
            </Button>
          </DialogActions>
        </ModalDialog>
      </Modal>

      <Snackbar
        variant="soft"
        color="warning"
        open={eOpen}
        onClose={() => setEOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        startDecorator={<WarningRoundedIcon />}
        endDecorator={
          <Button
            onClick={() => setEOpen(false)}
            size="sm"
            variant="soft"
            color="warning"
          >
            Dismiss
          </Button>
        }
      >
        Error changing plan. Please try again.
      </Snackbar>
    </React.Fragment>
        
    </Box>
  )
}

export default ChangePlan