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

function MeetUp() {


  //  // Initialize state with a default image from the public folder or from localStorage if available
  //  const [image, setImage] = useState(() => localStorage.getItem('userImage') || '/meetups.jpg');
  //  const fileInputRef = useRef(null);
 
  //  useEffect(() => {
  //    // Check for the saved image in localStorage on component mount
  //    const savedImage = localStorage.getItem('userImage');
  //    if (savedImage) {
  //      setImage(savedImage);
  //    }
  //  }, []);
 
  //  const handleImageChange = (event) => {
  //    const file = event.target.files[0];
  //    if (file) {
  //      const reader = new FileReader();
  //      reader.onload = (e) => {
  //        const imageUrl = e.target.result;
  //        setImage(imageUrl);
  //        localStorage.setItem('userImage', imageUrl);
  //      };
  //      reader.readAsDataURL(file);
  //    }
  //  };
 
  //  const handleClick = () => {
  //    fileInputRef.current.click();
  //  };
  
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
          <Card>
            <Box
              sx={{
                display:'flex',
                flexDirection:{xs:'column',sm:'row'},
                justifyContent:{sm:'space-around'},
                mt:{xs:1 , sm:3},
                gap:{xs:3}
              }}
            >
              <Box>
                <Typography  level="h3" component="h1" sx={{mt:4}}>
                  Connect and Create Where Ideas Become Reality
                </Typography>
                <Typography sx={{mt:{xs:1 , sm:3} , width:{sm:550 , xs:400}}}>
                Whether you're into coding, painting, or public speaking,  
                find and connect with people who share your passion.
                Host or join meetups and workshops to learn, share, and grow together.  
                Events are happening all the time-join us and bring your ideas to life. 
                </Typography>
                <Button 
                startDecorator={<EditCalendarIcon/>} 
                sx={{mt:{xs:1 , sm:3}}}
                component= {RouterLink}
                to = "/jobprovider/meet-up/createEvent"
                > 
                Create Event</Button>
              </Box>
              <Box
              component="img"
              src="/meetups.jpg"
              sx={{
                width: 350,
                height: 350,
                borderRadius: '50%', // For a circular image
                objectFit: 'cover',
              }}
              >
              </Box>
            </Box>
            </Card>
            <Box
              sx ={{
                display:'flex',
                flexDirection:'column',
                mt:{sm:2},
                gap:{sm:3}
              }}
            >

              <Box>
              <Typography  level="h3" component="h1">
                  Upcoming Events
                </Typography>
              </Box>
              <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap:3,
        width: '100%',
        position: 'relative',
        overflow: { xs: 'auto', sm: 'initial' },
       
       
      }}
    >
     
      <Card
        orientation="horizontal"
        sx={{
          width: '90%',
          flexWrap: 'wrap',
          display:'flex',
          flexDirection:{sm:'row',xs:'column'},
          overflow: 'auto',
          
          
        }}
      >
        <AspectRatio objectFit="object-fit" sx={{width:400}}>
          <img
            src="https://i.ytimg.com/vi/zrdaueLMoYI/maxresdefault.jpg"
            // srcSet="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286&dpr=2 2x"
            loading="lazy"
            alt=""
            
          />
        </AspectRatio>
        <CardContent>
          <Box
            sx={{
              alignSelf:'center'
            }}
          >
          <Typography  level="h4" component="h1">
                  Docker Essentails Workshop
                </Typography>
          </Box>
          <Box
            sx={{
              ml:{sm:3}
            }}
          >
          <List size="md">
           <ListItem>
            <ListItemDecorator>
            <CalendarMonthOutlinedIcon/>  
            </ListItemDecorator>
            Event Date - 2st Aug 2024
          </ListItem>
          <ListItem>
            <ListItemDecorator>
            <PinDropOutlinedIcon/>
            </ListItemDecorator>
            Location - UCSC Premisus
          </ListItem>
          <ListItem>
            <ListItemDecorator>
            <GroupsOutlinedIcon/>
            </ListItemDecorator>
             Current participants - 21 Attending
          </ListItem>
          
        </List>
          </Box>
          <Box
          sx={{
            // 
            ml:{sm:5}
          }}
          >
             <Button  startDecorator={<EditCalendarIcon/>} sx={{mt:{xs:1 , sm:3}}}> Manage Event</Button>
          </Box>
            
        </CardContent>
      </Card>


      <Card
        orientation="horizontal"
        sx={{
          width: '90%',
          flexWrap: 'wrap',
          display:'flex',
          flexDirection:{sm:'row',xs:'column'},
          overflow: 'auto',
          
        }}
      >
        <AspectRatio objectFit="object-fit" sx={{width:400}}>
          <img
            src="https://th.bing.com/th/id/OIP.omJ4NBvS7Mcr45IRv_yGqQHaDt?rs=1&pid=ImgDetMain"
            // srcSet="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286&dpr=2 2x"
            loading="lazy"
            alt=""
            
          />
        </AspectRatio>
        <CardContent>
          <Box
            sx={{
              alignSelf:'center'
            }}
          >
          <Typography  level="h4" component="h1">
                  API Integration Essentials
                </Typography>
          </Box>
          <Box
            sx={{
              ml:{sm:3}
            }}
          >
          <List size="md">
           <ListItem>
            <ListItemDecorator>
            <CalendarMonthOutlinedIcon/>  
            </ListItemDecorator>
            Event Date - 5th Aug 2024
          </ListItem>
          <ListItem>
            <ListItemDecorator>
            <PinDropOutlinedIcon/>
            </ListItemDecorator>
            Location - WSO2 Premisus
          </ListItem>
          <ListItem>
            <ListItemDecorator>
            <GroupsOutlinedIcon/>
            </ListItemDecorator>
             Current participants - 32 Attending
          </ListItem>
          
        </List>
          </Box>
          <Box
          sx={{
            // 
            ml:{sm:5}
          }}
          >
             <Button  startDecorator={<EditCalendarIcon/>} sx={{mt:{xs:1 , sm:3}}}> Manage Event</Button>
          </Box>
            
        </CardContent>
      </Card>
      
    </Box>






              
            </Box>


          
          </Box>
  )
}

export default MeetUp