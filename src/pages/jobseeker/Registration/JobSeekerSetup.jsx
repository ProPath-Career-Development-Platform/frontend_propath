import React from 'react'
import TopNav from '../../../components/landingPage/navbar/TopNav';
import NavigationPanel from './NavigationPanel'
import '../../../index.css'
import Box from '@mui/material/Box';



const JobSeekerSetup = () => {
  return (

      <div
      style={{
        backgroundColor: 'white', // Background color
        margin: 0, // Margin
        padding: 0, // Padding
        width: '100%', // Width
        height: '100%', // Height
        overflow: 'auto', // Overflow
        maxHeight: 'calc(100vh - 10px)', // Max Height
      }}
      >
       
      <Box sx={{ width: '100%', height:'100'}} >
      {/* <Navbar1/>  */}
      <NavigationPanel/>
      </Box>
     
      </div> 
    
  )
}

export default JobSeekerSetup