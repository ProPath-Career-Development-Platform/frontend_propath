import * as React from 'react';
import Box from '@mui/joy/Box';
import CircularProgress from '@mui/joy/CircularProgress';
import ReportIcon from '@mui/icons-material/Report';
import WarningIcon from '@mui/icons-material/Warning';

export default function CircularProgressChildren() {
  return (

        <Box

        sx={{
            display:'flex',
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center',
        }}
        >

      <CircularProgress color="primary" determinate value={55} size="lg" sx={{ '--CircularProgress-size': '120px' }}>
        55%
      </CircularProgress>

      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1, ml: 2 }}>

        <div>
            100
        </div>

        <div>
            Max Participant 
        </div>

        </Box>



        </Box>
   
      
  
  );
}