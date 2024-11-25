import React , {useState, useEffect} from 'react'
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';
import { Box } from '@mui/joy';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import Chip from '@mui/joy/Chip';
import axios from 'axios';
import { getToken } from '../../../pages/Auth/Auth';
import Swal from 'sweetalert2';
import GroupAddIcon from '@mui/icons-material/GroupAdd';

import EventSeatIcon from '@mui/icons-material/EventSeat'; // For Seats Left
import LocationOnIcon from '@mui/icons-material/LocationOn'; // For Location



export default function BasicCard({url , callback ,details}) {
  const [num, setNum] = useState(0)
  const [scrollTop, setScrollTop] = useState(15); // Initial top position in percentage

  const postEvent = async (eventId) => {
    try {
      const token = getToken(); // Function to retrieve the token
      const response = await axios.post(
        `http://localhost:8080/jobseeker/registerEvent/${details.event.id}`, // Endpoint with eventId as a path variable
        {}, // No payload needed as eventId is in the URL
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in headers
            "Content-Type": "application/json", // Content type for the request
          },
        }
      );
  
      console.log("Event registration successful:", response.data);
    } catch (error) {
      console.error(
        "Error registering for the event:",
        error.response?.data || error.message
      );
    }
  };
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      console.log(scrollPosition); // Log the scroll position
      const newTop = Math.max(0, 15 - scrollPosition / 10); // Adjust divisor for speed
      setScrollTop(newTop);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <Card sx={{ width: 320 }}>
      <div>
     
      
        <IconButton
          aria-label="bookmark Bahamas Islands"
          variant="plain"
          color="neutral"
          size="sm"
          sx={{ position: 'absolute', top: '0.875rem', right: '0.5rem' }}
        >

        </IconButton>
      </div>
      <AspectRatio minHeight="120px" maxHeight="200px">
        <img
          src={url}

          loading="lazy"
          alt=""
          style={{objectFit: 'cover'}}
        />
      </AspectRatio>
      <CardContent 
      orientation="horizontal" 
      sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center' 
      }}
    >
      <Button
        variant="solid"
        size="md"
        color="primary"
        aria-label="Explore Bahamas Islands"
        sx={{ fontWeight: 600 , width: 200 , background:details?.isApplied==false?'#3f067a': 'green' , marginTop: '15px'}}
        onClick={()=> {
         
          setNum(1)
          callback(true)
         { details?.event?.maxParticipant - details?.event?.currentParticipants > 0 && 
          Swal.fire({
            title: details?.event?.title,
            text: details?.isApplied == false ? "Do you want to enroll to this event" : "Are you sure you want to leave this event?",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: details?.isApplied == false ? "Yes , I enroll ": "Yes, I leave"
          }).then((result) => {
            if (result.isConfirmed) {
              postEvent();
              Swal.fire({
                title: "Successful!",
                text: details?.isApplied == false 
                  ? "You have enrolled successfully." 
                  : `You have successfully left "${details?.event?.title}."`, // Backticks for template literal
                icon: "success"
              });
            }
          });
        }
        { details?.event?.maxParticipant - details?.event?.currentParticipants <=0  && 
          Swal.fire({
            title: "Oops :-( ",
            text: "Enrollment is closed as the maximum number of participants has been reached.",
            icon: "warning",
            showCancelButton: false,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            
          })
        }
        }}
      > {details?.isApplied==false && (
        <Typography sx={{fontWeight: "bold", color:'white'}}> Enroll</Typography>
       

      )}
        {details?.isApplied==true && (
        <Typography sx={{fontWeight: "bold", color:'white'}}> Enrolled</Typography>
        

      )}
        
      </Button>
    </CardContent>

    <Box >
      
    <Box
  sx={{
    display: 'grid',
    gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, // 1 column for small screens, 2 columns for larger screens
    gap: 4,
    justifyContent: 'center',
    mt: 3,
  }}
>
  {/* Enrollments */}
  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
    <GroupAddIcon sx={{ fontSize: 30, color: 'blue' }} />
    <Typography sx={{ fontWeight: 600, fontSize: 14 }}>
      {details?.event?.currentParticipants} Enrolled
    </Typography>
  </Box>

  {/* Seats Left */}
  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
    <EventSeatIcon sx={{ fontSize: 30, color: 'blue' }} />
    <Typography sx={{ fontWeight: 600, fontSize: 14 }}>
      {details?.event?.maxParticipant - details?.event?.currentParticipants} Seats Left
    </Typography>
  </Box>

  {/* Location */}
  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <LocationOnIcon sx={{ fontSize: 30, color: 'blue' }} />
    <Typography sx={{ fontSize: 12, color: 'text.secondary' ,  marginTop:'10px'}}>Location</Typography>
    <Typography sx={{ fontWeight: 600, fontSize: 14 }}>{details?.event?.location}</Typography>
    
  </Box>

  {/* Registration Deadline */}
  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <AccessTimeIcon sx={{ fontSize: 30, color: 'blue' }} />
    <Typography sx={{ fontSize: 12, color: 'text.secondary' , marginTop:'10px' }}>Registration Ends On</Typography>

    <Typography sx={{ fontWeight: 600, fontSize: 14 }}>{details?.event?.closeDate}</Typography>
  </Box>
</Box>




          
          
          </Box>
    </Card>
  );
}
