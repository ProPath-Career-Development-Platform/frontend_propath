import React from 'react'
import { Box, Button, Input, Typography } from '@mui/joy'
import Textarea from '@mui/joy/Textarea';
import { useState } from 'react';
const Event = () => {

  const [jobSeekerId, setJobSeekerId ] = useState("")
  const [eventId, setEventId ] = useState("")
  
  console.log("jobSeekerId" + jobSeekerId)
  
  const submit = ()=> {
    
  }
  return (
    <Box  component="main"
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
      maxHeight: 'calc(100vh - 10px)',
      overflow: 'auto ',
      '&::-webkit-scrollbar': {
        display: 'none',
      },
    }}>

    <Box sx={{py: 2, display: 'flex', gap: 2, alignItems: 'center',justifyContent: 'center' , flexDirection: 'column'}}>
        
         
        <Box>
            <Typography>Enter Seeker Id</Typography>
            <Textarea placeholder="Seeker Id" id='jobseeker' onChange={(e) => { setJobSeekerId(e.target.value) } }/>
        </Box>
        <Box>
            <Typography>Enter Event Id</Typography>
            <Textarea placeholder="Event Id" id='eventId' onChange={(e) => {setEventId(e.target.value)}} />
        </Box>       
        <Box>
            <Button onClick={submit}>submit</Button>
        </Box>
    </Box>
    </Box>
  )
}

export default Event