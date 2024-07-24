import React from 'react'
import Breadcrumbs from '@mui/joy/Breadcrumbs';
import Box from '@mui/joy/Box';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

const AdminInterviews = () => {
  return (
    <Box
    component="main"
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
               overflow: 'auto',
               maxHeight: 'calc(100vh - 10px)',
             }}
     >
 
         
 <Box>
               <Breadcrumbs
                 size="sm"
                 aria-label="breadcrumbs"
                 separator={<ChevronRightRoundedIcon fontSize="sm" />}
                 sx={{ pl: 0 }}
               >
                 <Link
                   underline="none"
                   color="neutral"
                   href="#some-link"
                   aria-label="Home"
                 >
                   <HomeRoundedIcon />
                 </Link>
                 <Link
                   underline="hover"
                   color="nuetral"
                   href="/admin/home/"
                   fontSize={12}
                   fontWeight={500}
                 >
                   Dashboard
                 </Link>
                 <Link
                   underline="hover"
                   color="primary"
                   href="/admin/Events/"
                   fontSize={12}
                   fontWeight={500}
                 >
                   Interviews
                 </Link>
                </Breadcrumbs>
             </Box>
             </Box>
  )
}

export default AdminInterviews