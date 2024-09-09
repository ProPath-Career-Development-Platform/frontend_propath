
import React from 'react';
import Typography from '@mui/joy/Typography';
import Box from '@mui/joy/Box';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import TimerIcon from '@mui/icons-material/Timer';
import SchoolIcon from '@mui/icons-material/School';
import WalletIcon from '@mui/icons-material/Wallet';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorkIcon from '@mui/icons-material/Work';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';


const Jobcard = ({jobPostedDate, jobExpiresIn , education , maxSalary , minSalary, jobType , experience , location}) => {

  const postedDate = new Date(jobPostedDate).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  const expiryDate= new Date(jobExpiresIn).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  const ExpiryDate = new Date()
  
  return (
   
    <Box sx={{ border: '2px solid #e0e0e0' }}>
        <Typography sx={{fontSize:'18px' , fontWeight: '500' , marginTop: '13px' , marginLeft: '13px'}}>Job Overview</Typography>
        <Box sx={{display : 'grid' , gridTemplateColumns: { xs: 'repeat(1, 1fr)', // 1 column for extra-small screens (mobile)
                              sm: 'repeat(1, 1fr)', // 2 columns for small screens (tablet)
                              md: 'repeat(1, 1fr)',
                              lg: 'repeat(3,1fr)',
                               } , gap: 5, alignItems: 'center' , justifyContent : 'center' , flexDirection : {xs: 'column' , sm: 'column', md:'column' , lg: 'row'}}}>
            <Box sx={{marginTop: '15px' , marginLeft: '24px' , alignItems: 'center' , justifyContent: 'center'}}>
              <CalendarTodayIcon sx={{width: '32px' , height: '32px', color: 'blue'}}/>
              <Typography>Job posted In</Typography>
              <Typography sx = {{fontWeight: '700' , fontSize: ' 14px'}}>{postedDate}</Typography>
            </Box>
            <Box sx={{marginTop: '15px' , marginLeft: '24px'}}>
              <TimerIcon sx={{width: '32px' , height: '32px' , color: 'blue'}}/>
              <Typography>Job expire in</Typography>
              <Typography sx = {{fontWeight: '700', fontSize: ' 14px'}}>{expiryDate}</Typography>
            </Box>
            <Box sx={{marginLeft: '24px'}}>
              <SchoolIcon sx={{width: '32px' , height: '32px' , color: 'blue'}}/>
              <Typography>Education</Typography>
              <Typography sx = {{fontWeight: '700' , fontSize: ' 14px' , width: '50px'}}>{education}</Typography>
            </Box>
            <Box sx={{marginLeft: '24px'}}>
              <WalletIcon sx={{width: '32px' , height: '32px' , color: 'blue'}}/>
              <Typography>Salary</Typography>
              <Typography sx = {{fontWeight: '700' , fontSize: ' 14px' ,  width: '50px'}}>${minSalary}-{maxSalary}k/month</Typography>
            </Box>
            <Box sx={{marginLeft: '24px'}}>
              <WorkIcon sx={{width: '32px' , height: '32px' , color: 'blue'}}/>
              <Typography>Job Type</Typography>
              <Typography sx = {{fontWeight: '700' , fontSize: ' 14px'}}>{jobType}</Typography>
            </Box>
            <Box sx={{marginLeft: '24px'}}>
              <LocationOnIcon sx={{width: '32px' , height: '32px' , color: 'blue'}}/>
              <Typography>Location</Typography>
              <Typography sx = {{fontWeight: '700' , fontSize: ' 14px'}}>{location}</Typography>
            </Box>
            <Box sx={{marginLeft: '24px' , marginBottom: '12px'}}>
              <WorkHistoryIcon sx={{width: '32px' , height: '32px' , color: 'blue' }}/>
              <Typography>Experience</Typography>
              <Typography sx = {{fontWeight: '700' , fontSize: ' 14px'}}>{experience}</Typography>
            </Box>
            
        </Box>
      </Box>


  )



}

export default Jobcard