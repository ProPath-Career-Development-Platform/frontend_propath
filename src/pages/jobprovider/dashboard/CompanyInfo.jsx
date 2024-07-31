import React from 'react'
import Navbar from '../../../components/jobprovider/CompanySetup1/Navbar'
import NavigationPanel from '../../../components/jobprovider/CompanySetup1/NavigationPanel'

import '../../../index.css'
import Box from '@mui/material/Box';
import DashboardLayout from "../../../layout/Dashboard";



const CompanyInfo = () => {
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
      <Navbar/> 
      {/* <DashboardLayout/> */}
      <NavigationPanel/>
      </Box>
     
      </div> 
    
  )
}

export default CompanyInfo