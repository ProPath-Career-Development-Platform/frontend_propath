import React, { useState } from 'react';
import Button from '@mui/joy/Button';
import Breadcrumbs from '@mui/joy/Breadcrumbs';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import Box from '@mui/joy/Box';
import ProfileDropdown from '../../components/JobSeeker/ProfileDropDown';
import Alert from '../../components/JobSeeker/alert';
import JSSearch from '../../components/JobSeeker/search';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import wso2 from '/wso2.png';
import LinkIcon from '@mui/icons-material/Link';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import TimerIcon from '@mui/icons-material/Timer';
import SchoolIcon from '@mui/icons-material/School';
import WalletIcon from '@mui/icons-material/Wallet';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorkIcon from '@mui/icons-material/Work';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import Jobcard from '../../components/JobSeeker/jobcard';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InfoIcon from '@mui/icons-material/Info';
import { jsx } from '@emotion/react';

const Companycard = ({phone , email, website , about , location , name , expire}) => {
    const companyDetails = [['Location : ' , location ],
                            ['Company Size : ', '20 - 300 employees '] , ['Phone', phone] , ['Email :' , email],
                            ['Website',website]]

    const timer = () => {
       

        const today = new Date()
        const future = new Date(expire)
        const difference = future - today

     
        let seconds = Math.floor(difference / 1000); 
        let minutes = Math.floor(seconds / 60); 
        let hours = Math.floor(minutes / 60); 
        let days = Math.floor(hours / 24); 

        
        seconds = seconds % 60;
        minutes = minutes % 60;
        hours = hours % 24;
        days = days;

        return days+ " : " + hours + " : " + minutes + " : " + seconds
         

    }

    const [timeLeft , setTimeLeft] = useState(timer())
    console.log("Functsion :" , {phone})
   return(

            <Box sx={{ border: '2px solid #e0e0e0' , marginTop : '10px'}}>
            <Box sx={{display: 'flex' ,marginTop: '15px' , marginBottom: '15px'}}>
            <Box sx={{marginTop:'10px' , marginLeft : '15px' , display : 'flex'}}>
                <img 
                    src={wso2} 
                    alt="Logo" 
                    style={{ 
                    width: '45px', // Adjust the size as needed
                    height: '45px', // Adjust the size as needed
                    borderRadius: '50%',
                    objectFit: 'cover' 
                    }} 
                />

                <Box sx={{display: 'flex'  , marginLeft : '20px' , alignItems: 'center' ,width:'100%'}}>
                    <Box>
                    <Typography sx={{fontWeight:'bold' , fontSize: {xs: 'auto' , sm : 'auto' , md: '30px'} , marginBottom : '4px'}}>{name}</Typography>
                    </Box>
                   
                  
                </Box>
               
                
            </Box>
            </Box>
                <Box sx = {{marginLeft : '16px' , marginTop : '16px' , position : 'relative'}}>
                <Typography sx ={{display:'flex' , marginBottom: '30px' , marginRight : '10px'}} ><InfoIcon/>{about}</Typography>
                {companyDetails.map((item, index) => (
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' , flexDirection : {sm : 'column' , xs:  'column' , md : 'row'

                                } }}>
                                    <Typography>{item[0]}</Typography>
                                    {index === companyDetails.length - 1 ? (
                                            <a href={website}>
                                                <Typography sx={{ marginRight: 1, fontWeight: 500 }}>{item[1]}</Typography>
                                            </a>
                                            ) : (
                                            <Typography sx={{ marginRight: 1, fontWeight: 500 }}>{item[1]}</Typography>
                                     )}
                                                                                
                                        
                                    
                                    
                                    
                                </Box>

                ) )
                }

                </Box>
                <Box sx={{ marginTop: '25px', marginBottom: '16px' , display:'flex' ,justifyContent: 'center'}}>
                <Stack spacing={2} direction={'row'}>
                    <InstagramIcon sx={{ fontSize: 25 , color: "#E1306C"}} />
                    <FacebookIcon sx={{ fontSize: 25 , color: "blue"}} />
                    <XIcon sx={{ fontSize: 25 , color: "black"}} />
                    <YouTubeIcon sx={{ fontSize: 25 , color: "red" }} />
                </Stack>
                </Box>

            </Box>
            
   )

}

export default Companycard
