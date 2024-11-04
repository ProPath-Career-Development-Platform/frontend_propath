import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Typography from '@mui/joy/Typography';
import Box from '@mui/joy/Box';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import TimerIcon from '@mui/icons-material/Timer';
import SchoolIcon from '@mui/icons-material/School';
import WalletIcon from '@mui/icons-material/Wallet';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorkIcon from '@mui/icons-material/Work';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import { useParams } from 'react-router-dom';

const Jobcard = () => {
  const [jobDetails, setJobDetails] = useState(null);
  const { jobId } = useParams();
  const token = localStorage.getItem("token");

  const fetchJobDetails = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/jobseeker/jobDetails/${jobId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setJobDetails(response.data);
    } catch (error) {
      console.error("Error fetching job details:", error);
    }
  };

  useEffect(() => {
    if (jobId) {
      fetchJobDetails();
    }
  }, [jobId]);

  if (!jobDetails) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Box sx={{ border: '2px solid #e0e0e0', padding: '16px' }}>
      <Typography sx={{ fontSize: '18px', fontWeight: '500', marginBottom: '16px' }}>Job Overview</Typography>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr', lg: 'repeat(3, 1fr)' },
          gap: 2,
          alignItems: 'center',
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <CalendarTodayIcon sx={{ width: 32, height: 32, color: 'blue' }} />
          <Typography>Job posted In</Typography>
          <Typography sx={{ fontWeight: '700', fontSize: '13px' }}>{jobDetails.postedIn || 'N/A'}</Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <TimerIcon sx={{ width: 32, height: 32, color: 'blue' }} />
          <Typography>Job expire in</Typography>
          <Typography sx={{ fontWeight: '700', fontSize: '13px' }}>{jobDetails.expiryDate || 'N/A'}</Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <SchoolIcon sx={{ width: 32, height: 32, color: 'blue' }} />
          <Typography>Education</Typography>
          <Typography sx={{ fontWeight: '700', fontSize: '13px' }}>{jobDetails.education || 'N/A'}</Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <WalletIcon sx={{ width: 32, height: 32, color: 'blue' }} />
          <Typography>Salary</Typography>
          <Typography sx={{ fontWeight: '700', fontSize: '13px' }}>{jobDetails.salary || 'N/A'}</Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <WorkIcon sx={{ width: 32, height: 32, color: 'blue' }} />
          <Typography>Job Type</Typography>
          <Typography sx={{ fontWeight: '700', fontSize: '13px' }}>{jobDetails.jobType || 'N/A'}</Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <LocationOnIcon sx={{ width: 32, height: 32, color: 'blue' }} />
          <Typography>Location</Typography>
          <Typography sx={{ fontWeight: '700', fontSize: '13px' }}>{jobDetails.location || 'N/A'}</Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <WorkHistoryIcon sx={{ width: 32, height: 32, color: 'blue' }} />
          <Typography>Experience</Typography>
          <Typography sx={{ fontWeight: '700', fontSize: '13px' }}>{jobDetails.experience || 'N/A'}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Jobcard;
