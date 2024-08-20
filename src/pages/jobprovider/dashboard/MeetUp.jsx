import React, { useState,useRef,useEffect} from 'react';
import Box from '@mui/joy/Box';
import Breadcrumbs from '@mui/joy/Breadcrumbs';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import Link from '@mui/joy/Link';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import Typography from '@mui/joy/Typography';
import Divider from '@mui/joy/Divider';
import Button from '@mui/joy/Button';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Skeleton from '@mui/joy/Skeleton';
import { useLocation } from 'react-router-dom';
import { CssVarsProvider, extendTheme } from '@mui/joy/styles';
import Snackbar from '@mui/joy/Snackbar';
import PlaylistAddCheckCircleRoundedIcon from '@mui/icons-material/PlaylistAddCheckCircleRounded';

import Stack from '@mui/joy/Stack';
import Chip from '@mui/joy/Chip';

import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Check from '@mui/icons-material/Check';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import PinDropOutlinedIcon from '@mui/icons-material/PinDropOutlined';


import {Link as RouterLink} from 'react-router-dom';
import axios from 'axios';
import EventCard from '../../../components/jobprovider/dashboard/eventCard';
import BasicPagination from '../../../components/jobprovider/dashboard/BasicPagination'
import FilterButton from '../../../components/jobprovider/dashboard/filterButton';

import RadioButton from '../../../components/jobprovider/dashboard/RadioButton';

function MeetUp() {

  const location = useLocation();

  const [snackOpen, setSnackOpen] = React.useState(false);


  const handleCloseSnackbar = () => {
    setSnackOpen(false);
    sessionStorage.removeItem('eventDeleteSuc');
  };

  const theme = extendTheme({
    components: {
      JoySkeleton: {
        defaultProps: {
          animation: 'wave',
        },
      },
    },
  });


  const [events, setEvents] = useState([]);
  const [isLoaded, setIsLoaded] = useState({
    bannerImg:true,
    eventCard:true

  });

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

 
  const getJwtToken = () => {
    return localStorage.getItem('token');
  };

  useEffect(() => {

    if (sessionStorage.getItem('eventDeleteSuc')) {
      setSnackOpen(true);
      
    }

    axios.get('http://localhost:8080/jobprovider/event', {
      headers: {
        Authorization: `Bearer ${getJwtToken()}`,
      },
    }).then((response) => {
      setEvents(response.data);
      setIsLoaded(prevState => ({ ...prevState, eventCard: false }));
      console.log(response.data);
    }).catch((error) => {
      console.error('Error fetching events:', error);
    });
  }, []);

  
  // Calculate paginated events
  const indexOfLastEvent = currentPage * itemsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - itemsPerPage;
  const currentEvents = events.slice(indexOfFirstEvent, indexOfLastEvent);
  
  // Handle page change
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
 
    
  };
  // Watch for changes to currentPage and currentEvents

  
// Calculate page count
const pageCount = Math.ceil(events.length / itemsPerPage);
  

  
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
                Workshops / MeetUps
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
              Workshops and MeetUps
            </Typography>
          
          </Box>

          {/*breadcrumbs over*/}
          <Divider />
            <Card
              variant="outlined"
            
              sx={{

              
                mb:2
                
              }}
            >

              <CardOverflow >

            <AspectRatio sx={{
                
                display:{xs:'none', sm:'block'},
      
                
                }}
                 ratio="1" maxHeight={300}>
            <CssVarsProvider theme={theme}>
              <Skeleton loading={isLoaded.bannerImg} variant="overlay">
                <img
                  src="/workshophero.jpg"
                  loading="lazy"
                  alt=""
                  onLoad={() => setIsLoaded(prevState => ({ ...prevState, bannerImg: false }))}
                  
                />
              </Skeleton>
            </CssVarsProvider>
            </AspectRatio>

            <AspectRatio sx={{
                  
                  display:{xs:'block', sm:'none'},
                  }}
                  ratio="20/9" maxHeight={200}>
              <CssVarsProvider theme={theme}>
                <Skeleton loading={isLoaded.bannerImg} variant="overlay">
                  <img

                    src="/workshophero.jpg"
                    loading="lazy"
                    alt=""
                    onLoad={() => setIsLoaded(prevState => ({ ...prevState, bannerImg: false }))}

                  />
                </Skeleton>

              </CssVarsProvider>

            </AspectRatio>

              </CardOverflow>
      <CardContent sx={{m:2}}>
        <Typography level="h3" id="card-description" sx={{mb:{xs:0,sm:1}}}>
          <Skeleton loading={isLoaded.bannerImg}>Connect and Create Where Ideas Become Reality </Skeleton>
        </Typography>
        <Typography level="body-md" aria-describedby="card-description" mb={1}>

          <Skeleton loading={isLoaded.bannerImg}>
                Whether you're into coding, painting, or public speaking,  
                find and connect with people who share your passion.
                Host or join meetups and workshops to learn, share, and grow together.  
                Events are happening all the time-join us and bring your ideas to life. 
           </Skeleton>
        </Typography>

        {
          isLoaded.bannerImg ? (

            <Skeleton loading={isLoaded.bannerImg} width={200} height={44} sx={{mt:{md:2} , borderRadius:'5px'}} variant="rectangular" />
          ) : (

        <Button 
                startDecorator={<EditCalendarIcon/>} 
                sx={{
                  mt:{md:2},
                  width:{md:'200px'}
                }}
                component= {RouterLink}
                to = "/jobprovider/meet-up/createEvent"
                > 
                Create Event</Button>

          )
        }

          
      </CardContent>
    </Card>






          <Box
            sx={{
              display: 'flex',
              gap: 1,
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              mb:1
              
              
            }}
          >

            <Box sx={{display:'flex', justifyContent:'flex-start'}}>

              <Typography  level="h3" >My Events ({events.length})</Typography>
            </Box>

            <Box sx={{display:'flex', justifyContent:'flex-end', gap:1}}>

              <FilterButton/>
              <RadioButton pages={itemsPerPage} setPageNumber={setItemsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />
            </Box>


          </Box>
          

            

          <Divider sx={{mb:2}} />

     

          {

  isLoaded.eventCard ? (
    <>
      <EventCard keyWords={["test"]} skeleton = {true}/>
      <EventCard keyWords={["test"]} skeleton = {true}/>
      <EventCard keyWords={["test"]} skeleton = {true}/>
      <EventCard keyWords={["test"]} skeleton = {true}/>
      <EventCard keyWords={["test"]} skeleton = {true}/>
    </>
  ) : 

  events.length === 0 ? (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
          width: '100%',
          position: 'relative',
          px: { xs: 2, md: 4 },
          pt: 2,
        }}
      >
        <Box sx={{ m: 'auto' }}>
          <AspectRatio
            ratio="4/3"
            variant="soft"
            objectFit="contain"
            sx={{ width: { sm: '100%', md: '500px' }, borderRadius: '10px' }}
          >
            <img src="/empty-events.png" loading="lazy" alt="" />
          </AspectRatio>
          <Typography level="title-md" sx={{ mt: 2, textAlign: 'center' }}>
            No events yet. Why not create one to get started?
          </Typography>
        </Box>
      </Box>
      <Divider sx={{ mt: 2 }} />
    </>
  ) :

  (
    <>
      

      


      <Stack spacing={1} sx={{
        px: { xs: 2, md: 4 },
        pt: 2,
        
        minHeight: { xs:'400px',md:'580px'},
        
        overflowY: 'auto', // Enable vertical scrolling
    
  }}
>
          
          <Stack spacing={2} sx={{ overflow: 'auto', p:{xs:0.3,md:2} }}>

          {currentEvents.map((event) => (
          <EventCard
            key={event.id}
            eventId={event.id}
            eventImage={event.banner}
            eventName={event.title}
            eventDate={event.date}
            eventLocation={event.location}
            eventParticipants={event.maxParticipant}
            keywords={event.keyWords}
            status={event.status}
            skeleton = {false}
          />
        ))}
            
          </Stack>
        </Stack>
      <Divider sx={{ mt: 2 }} />

      <Box sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
        <BasicPagination
          page={currentPage}
          pageCount={pageCount}
          pageChange={handlePageChange}
        />
      </Box>
    </>
  )
  
}  


<React.Fragment>
      
      <Snackbar
        variant="soft"
        color="success"
        open={snackOpen}
        onClose={() => handleCloseSnackbar()}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        startDecorator={<PlaylistAddCheckCircleRoundedIcon />}
        endDecorator={
          <Button
            onClick={() => handleCloseSnackbar()}
            size="sm"
            variant="soft"
            color="success"
          >
            Dismiss
          </Button>
        }
      >
        Event deleted successfully.
      </Snackbar>
    </React.Fragment>


          </Box>



  )
}

export default MeetUp