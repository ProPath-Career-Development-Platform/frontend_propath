import React from 'react'
import { Box } from '@mui/joy'
import Typography from '@mui/joy/Typography'
import Chip from '@mui/joy/Chip';
import ATSAccordion from './ATSSeeker/ATSaccordion';
const JobScore = () => {
  return (
    <Box
            component="main"
            className="MainContent"
            sx={{
              background : '#f5f7fc',
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
              maxHeight: 'calc(100vh - 10px)',
              overflow:'auto',
              '&::-webkit-scrollbar': {
                display: 'none',
              }
           
            }}
          >
    <Box sx={{display:'flex', height: 'fitContent'}}>
        <Box sx = {{width: '40%' , border: "solid 1px #e0e0e0" , boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '10px' ,  height: '100%' , margin: '15px' , background: 'white ' }}>
        <Box sx={{marginTop: '40px' , display: 'flex' ,  flexDirection: 'column' , justifyContent: 'center' , alignItems: 'center' ,  borderBottom: "solid 1px #e0e0e0" , borderWidth: '60%'}}>
            
            <Typography sx={{fontSize: '26px' , fontWeight: 400}}>Your Score</Typography>
          
            
            <Typography sx={{fontSize: '26px' , fontWeight: 500 , color:'red'}}>43 / 100</Typography>
            <Typography sx={{fontSize: '14px' , fontWeight: 400 , marginBottom: '10px'}}>13 Issues</Typography>
        </Box>
        <Box sx={{display:'flex' , justifyContent:'space-around'}}>
           <ATSAccordion></ATSAccordion>
        </Box>
        </Box>


        <Box>Description</Box>
    </Box>
    
    </Box>
  
  )
}

export default JobScore