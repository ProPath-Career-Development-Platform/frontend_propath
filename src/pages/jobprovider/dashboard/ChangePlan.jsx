import React from 'react'
import Breadcrumbs from '@mui/joy/Breadcrumbs';
import Box from '@mui/joy/Box';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';



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

const ChangePlan = () => {
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
        <Chip size="sm" variant="outlined" color="primary">
          BASIC
        </Chip>
        <Typography level="h2">Professional</Typography>
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
          {/* <ListItem>
            <ListItemDecorator>
            <CheckCircleIcon color="primary"/>
            </ListItemDecorator>
            API Integration
          </ListItem> */}
        </List>
        <Divider inset="none" />
        <CardActions>
          <Typography level="title-lg" sx={{ mr: 'auto' }} color="primary">
            3.990€{' '}
            <Typography fontSize="sm" textColor="text.tertiary">
              / month
            </Typography>
          </Typography>
          <Button
            variant="soft"
            color="primary"
            endDecorator={<KeyboardArrowRight />}
          >
            Start now
          </Button>
        </CardActions>
      </Card>
                </Box> 
                <Box>
               <Card size="lg" variant="outlined">
        <Chip size="sm" variant="outlined" color="primary">
          Recommended
        </Chip>
        <Typography level="h2">Professional</Typography>
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
          {/* <ListItem>
            <ListItemDecorator>
            <CheckCircleIcon color="primary"/>
            </ListItemDecorator>
            
          </ListItem> */}
        </List>
        <Divider inset="none" />
        <CardActions>
          <Typography level="title-lg" sx={{ mr: 'auto' }} color="primary">
            3.990€{' '}
            <Typography fontSize="sm" textColor="text.tertiary">
              / month
            </Typography>
          </Typography>
          <Button
            variant="soft"
            color="primary"
            endDecorator={<KeyboardArrowRight />}
          >
            Start now
          </Button>
        </CardActions>
      </Card>
                </Box> 
                <Box>
               <Card size="lg" variant="outlined">
        <Chip size="sm" variant="outlined" color="primary">
            Premium
        </Chip>
        <Typography level="h2">Professional</Typography>
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
            3.990€{' '}
            <Typography fontSize="sm" textColor="text.tertiary">
              / month
            </Typography>
          </Typography>
          <Button
            variant="soft"
            color="primary"
            endDecorator={<KeyboardArrowRight />}
          >
            Start now
          </Button>
        </CardActions>
      </Card>
                </Box> 
              
            </Box>
        
    </Box>
  )
}

export default ChangePlan