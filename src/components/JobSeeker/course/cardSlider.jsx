import React , {useState, useEffect,useRef} from 'react'
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

import Snackbar from '@mui/joy/Snackbar';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import Stack from '@mui/joy/Stack';
import QRCodeStyling from "qr-code-styling";
import CryptoJS from "crypto-js";
import ImageKit from "imagekit";
import { jwtDecode } from "jwt-decode";




export default function BasicCard({url , callback ,details}) {
  const [num, setNum] = useState(0)
  const [scrollTop, setScrollTop] = useState(15); // Initial top position in percentage
  const [response, setResponse] = useState(null);
  const [load, setLoad] = useState(false);
  const [open, setOpen] = useState(false);
  const [reasons, setReasons] = React.useState([]);
  const [genToken,setGenToken] = useState(null);
  const [urlQR, setUrlQR] = React.useState(null);
  const qrRef = useRef(null);


  

  const imagekit = new ImageKit({
   
    urlEndpoint: import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT,
    publicKey: import.meta.env.VITE_IMAGEKIT_PUBLIC_KEY,
    privateKey: import.meta.env.VITE_IMAGEKIT_PRIVATE_KEY
   
  });

  React.useEffect(() => {
    if (
      ['timeout'].every((item) =>
        reasons.includes(item),
      )
    ) {
      setOpen(false);
    }
  }, [reasons]);

  const postEvent = async (eventId) => {
    try {
      setLoad(true);  // Show loading state
      setOpen(true);  // Open snackbar or any loader
  
    const tokenL = localStorage.getItem('token');
    const decoded = jwtDecode(tokenL);

    const userId = decoded.user_id;
    const email  = decoded.email;
    const timestamp = new Date().getTime();
    const data = `${userId}-${email}-${timestamp}`;
    const hashedData = CryptoJS.SHA256(data).toString(CryptoJS.enc.Base64);

    //generate QR

    const qrCode = new QRCodeStyling({
      width: 300,
      height: 300,
      data: hashedData,  // Use the generated token as the QR code data
      dotsOptions: {
        color: "#000000",
        type: "square",
      },
      backgroundOptions: {
        color: "#ffffff",
      },
    });

    // Append QR code to the DOM if not already appended
    if (qrRef.current?.childNodes.length === 0) {
      qrCode.append(qrRef.current);
    }

    // Generate Blob from QR code
    const qrBlob = await qrCode.getRawData("png");
    if (!qrBlob) {
      console.error("Failed to generate QR code Blob.");
      
    }

    // Upload to ImageKit
    var URL = null;
    if(details && details.qrImg == null){

      const qrUrl = await uploadImage(qrBlob);
      URL = qrUrl;
    }
    

      // Proceed with the API call to register the event
      const token = getToken(); // Get the token (ensure the function is working)
      const response = await axios.post(
        `http://localhost:8080/jobseeker/registerEvent/${details.event.id}`, // Endpoint with eventId
        {
          qrToken: hashedData,  // Use the token set earlier
          qrImg: URL,     // Send the uploaded QR image URL
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include token in headers
            "Content-Type": "application/json", // Ensure correct content type
          },
        }
      );
  
      console.log("Event registration successful:", response.data);
      setResponse(response.data);  // Update the response state
    } catch (error) {
      console.error("Error registering for the event:", error.response?.data || error.message);
    } finally {
      setLoad(false);  // Reset loading state
    }
  };
  
  
  
  useEffect(() => {

   const func = () => {
    Swal.fire({
      title: "Successful!",
      text: response.isApplied
        ? "You have enrolled successfully." 
        : `You have successfully left "${details?.event?.title}."`, // Backticks for template literal
      icon: "success"
    });


   } 

    if (response) {
      func();
    }


  }, [response]);
  
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


  const generateToken =  () => {
   //details.event.id, details.event.user.id
   const token = localStorage.getItem('token');
    const decoded = jwtDecode(token);

    const userId = decoded.user_id;
    const email  = decoded.email;
    const timestamp = new Date().getTime();
    const data = `${userId}-${email}-${timestamp}`;
    const hashedData = CryptoJS.SHA256(data).toString(CryptoJS.enc.Base64);
    //setGenToken(hashedData);
    return hashedData;
  };




 
    



  const uploadImage = async (qrBlob) => {
    try {
      
      // Upload to ImageKit
      const response = await imagekit.upload({
        file: qrBlob, // the file you want to upload
        fileName: `qr-code.png`, // file name to save
      });
  
      console.log("Image uploaded successfully:", response.url);
  
      return response.url;  // Return the URL of the uploaded image
    } catch (error) {
      console.error("Error uploading image:", error);
      return { token: null, url: null };  // Return null for both token and URL in case of error
    }
  };
  
  
  


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
         { details?.event.maxParticipant - details?.event.currentParticipants > 0 && 
          Swal.fire({
            title: details?.event?.title,
            text: details?.isApplied == false ? "Do you want to enroll to this event" : "Are you sure you want to leave this event?",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes",
          }).then((result) => {
            if (result.isConfirmed) {
              postEvent();
             
            }
          });
        }
        { details?.event.maxParticipant - details?.event.currentParticipants <=0  && 
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
      > {details?.isApplied  ==false && (
        <Typography sx={{fontWeight: "bold", color:'white'}}> Enroll</Typography>
       

      )}
        {details?.isApplied ==true && (
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



<Snackbar
        autoHideDuration={response ? 1000 : null}
        open={open}
        size='lg'
        onClose={(event, reason) => {
          setReasons((prev) => [...new Set([...prev, reason])]);
        }}
        onUnmount={() => {
          setReasons([]);
        }}
        
      >
        
              {reasons.includes('timeout') ? (
                <CheckBoxIcon color="success" />
              ) : (
                <CheckBoxOutlineBlankIcon />
              )}{' '}
              Enrolling...
           
      </Snackbar>




          
          
          </Box>
    </Card>
  );
}