import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Typography from '@mui/joy/Typography';
import Box from '@mui/joy/Box';
import Stack from '@mui/material/Stack';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Companycard = () => {
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
    <Box sx={{ border: '2px solid #e0e0e0', marginTop: '10px', padding: '16px' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', marginLeft: '10px' }}>
          <Typography sx={{ fontWeight: 'bold', fontSize: '15px', marginBottom: '4px' }}>
            {jobDetails.companyName}
          </Typography>
          <Typography sx={{ fontSize: '12px', color: 'gray' }}>
            {jobDetails.jobRole}
          </Typography>
        </Box>
      </Box>

      <Box sx={{ marginLeft: '16px', marginTop: '16px' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
          <Typography>Job Level:</Typography>
          <Typography sx={{ fontWeight: 500 }}>{jobDetails.jobLevel}</Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
          <Typography>Job Role:</Typography>
          <Typography sx={{ fontWeight: 500 }}>{jobDetails.jobRole}</Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
          <Typography>Salary Range:</Typography>
          <Typography sx={{ fontWeight: 500 }}>
            LKR {jobDetails.minSalary} - LKR {jobDetails.maxSalary} / {jobDetails.salaryType}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
          <Typography>Tags:</Typography>
          <Typography sx={{ fontWeight: 500 }}>
            {jobDetails.tags.join(', ')}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
          <Typography>Vacancies:</Typography>
          <Typography sx={{ fontWeight: 500 }}>{jobDetails.vacancies}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Companycard;
