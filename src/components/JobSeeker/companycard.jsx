import React from 'react';
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
import { jsx } from '@emotion/react';

const Companycard = () => {
    const companyDetails = [['Founded In :', '06 March 2006'] , ['Organization type :' , 'Private Company'] ,
                            ['Company Size : ', '20 - 300 employees '] , ['Phone', '+76 548 7514'] , ['Email :' , 'maniltenuka@gmail.com'],
                            ['Website','www.wso2.com']]
   return(

            <Box sx={{ border: '2px solid #e0e0e0' , marginTop : '10px'}}>
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

                <Box sx={{display: 'flex' , flexDirection : 'column' , marginLeft : '10px'}}>
                    <Typography sx={{fontWeight:'bold' , fontSize: {xs: 'auto' , sm : 'auto' , md: '15px'} , marginBottom : '4px'}}>WS02</Typography>
                    <Typography sx={{fontWeight:'bold' , fontSize: {xs: 'auto' , sm : 'auto' , md: '10px'} , marginBottom : '4px'}}>IT and Cosultancy Service</Typography>
                </Box>
               
                
            </Box>
                <Box sx = {{marginLeft : '16px' , marginTop : '16px' , position : 'relative'}}>

                {companyDetails.map((item) => (
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' , flexDirection : {sm : 'column' , xs:  'column' , md : 'row'

                                } }}>
                                    <Typography>{item[0]}</Typography>
                                    <Typography sx={{ marginRight : 1 , fontWeight : 500}}>{item[1]}</Typography>
                                </Box>

                ) )
                }

                </Box>
                <Box sx={{marginTop: '16px', marginLeft : '16px' , marginBottom : '16px'}}>
                    <Stack spacing={2}  direction={'row'}>
                    <InstagramIcon/>
                    <FacebookIcon/>
                    <XIcon/>
                    <YouTubeIcon/>
                    </Stack>
                </Box>
            </Box>
            
   )

}

export default Companycard
