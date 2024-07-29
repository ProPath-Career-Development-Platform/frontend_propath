import React from 'react'
import { Box, Typography } from '@mui/joy'
import JSSearch from '../../components/JobSeeker/search'
import Alert from '../../components/JobSeeker/alert'
import ProfileDropdown from '../../components/JobSeeker/ProfileDropDown'
import ProfileSelect from '../../components/JobSeeker/profile/profileSelect'
import logo from '/logo.png'
const profile = () => {
  return (
    <Box sx={{px: { xs: 2, md: 6 },
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
            gap: 2,
            maxHeight: 'calc(100vh - 10px)', }}>
            
            <Box
            sx={{
                      display: 'flex',
                      mb: 1,
                      gap: 1,
                      flexDirection: { xs: 'column', sm: 'row' },
                      alignItems: { xs: 'start', sm: 'center' },
                      flexWrap: 'wrap',
                      justifyContent: 'space-between',
                    }}
                      >
                        <Box sx={{width : 130}}>
                        <img src={logo} />
                        </Box>
    
                        <Box sx={{ display: 'flex' }}>
                            <JSSearch/>
                            <Alert />
                            <ProfileDropdown />
                        </Box>
                      
                      
            </Box>
            <Box sx={{display: 'flex' , justifyContent: 'center' , pt: '20px'}}>
                <Box sx={{  width: 'fit-content' ,border:'1px solid' , borderRadius: '10px' , display:'flex' , justifyContent: 'center' , padding: '40px'}}>
                    <Box sx={{marginTop: '20px' , marginBottom: '30px' }}><ProfileSelect/></Box>
                </Box>
            </Box>
            
    </Box>
  )
}

export default profile