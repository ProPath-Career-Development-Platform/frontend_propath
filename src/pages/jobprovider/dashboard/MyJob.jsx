import React from 'react'
import Button from '@mui/joy/Button';
import Breadcrumbs from '@mui/joy/Breadcrumbs';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import IconButton from '@mui/joy/IconButton';
import Box from '@mui/joy/Box';
import Table from '@mui/joy/Table';
import Sheet from '@mui/joy/Sheet';
import { typographyClasses } from '@mui/joy/Typography';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';

import Dropdown from '@mui/joy/Dropdown';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import MoreVert from '@mui/icons-material/MoreVert';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Add from '@mui/icons-material/Add';
import Badge, { badgeClasses } from '@mui/joy/Badge';
import Avatar from '@mui/joy/Avatar';

import Divider from '@mui/joy/Divider';


function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('UI/UX Designer', 'Active', 200, 24),
  createData('Senior UI/UX Designer', 'Expire', 100, 37),
  createData('Techical Support Specialist', 'Active', 50, 24),
  createData('Junior Graphic Designer', 'Expire', 1000, 67),
  createData('Front End Developer', 'Active', 300, 49),
  createData('Quality Assurance Engineer', 'Active', 300, 49),
  createData('Business Analytics', 'Expire', 300, 49),
  createData('Junior Project Manager', 'Active', 300, 49),
];



function MyJob() {
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
    <Box sx={{ display: 'flex', alignItems: 'center',flexDirection:'row',justifyContent:'space-between'}}>
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
                  color="neutral"
                  href="#some-link"
                  fontSize={12}
                  fontWeight={500}
                >
                  Dashboard
                </Link>
                <Typography color="primary" fontWeight={500} fontSize={12}>
                  My Jobs
                </Typography>
              </Breadcrumbs>
            </Box>
            
              <Box
              sx={{
                display:'flex',
                alignItems:'center',
                gap:'16px',
               
              }}
              >
                <Box>
                  <a href="/jobprovider/post-a-job/"><Button startDecorator={<Add />} size="sm">Post a Job</Button></a>
                </Box>
                <Box
                  
                >
                <Badge
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                  badgeInset="14%"
                  color="success"
                  sx={{
                  [`& .${badgeClasses.badge}`]: {
                  '&::after': {
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  animation: 'ripple 1.2s infinite ease-in-out',
                  border: '2px solid',
                  borderColor: 'success.500',
                  content: '""',
                  },
                  },
                  '@keyframes ripple': {
                  '0%': {
                   transform: 'scale(1)',
                    opacity: 1,
                  },
                  '100%': {
                   transform: 'scale(2)',
                  opacity: 0,
                  },
                  },
                  }}
                   >
                  <Avatar alt="Remy Sharp" src="../../public/seba.jpg" />
                </Badge>
                </Box>
              
              </Box>
              
            </Box>

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
              <Typography level="h2" component="h1">
                My Jobs <Typography fontWeight={400} color="neutral">({100})</Typography>
              </Typography>
             
            </Box>

            <Divider />
            

            <Sheet  sx={{ pt: 1, borderRadius: 'sm' }}>
            <Table
              hoverRow
              sx={{  '& tbody': { bgcolor: 'background.surface' } }}
              size='md'
            >
              
              <thead>
                <tr>
                  <th>Jobs</th>
                  <th>Status</th>
                  <th>Applications</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.name}>

                    <td>

                      <Box sx={(theme)=>({
                                 display:'flex',
                                 flexDirection: 'column',
                                  alignItems: 'left',
                                  [theme.breakpoints.up(834)]: {
                                    alignItems: 'flex-start',
                                    textAlign: 'initial',
                                  },
                                  [`& .${typographyClasses.root}`]: {
                                    textWrap: 'balance',
                                  },
                                  })}>

                         <Typography level='title-lg' sx={{marginTop:'5px', marginBottom:'5px'}}> {row.name} </Typography> 

                        <Box sx={(theme)=>({ 
                                  display:'flex',
                                  gap: 1.5,
                                  alignItems: 'center',
                                  [theme.breakpoints.down(834)]: {
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    gap: 0,
                                  },
                            })}>
                          <Typography level='body-md'>Full Time</Typography>
                          <Typography  level='body-md'>•</Typography>
                          <Typography level='body-sm'>23 Days Remaining</Typography>
                        </Box>
                      </Box>
                      
                    </td>


                    <td> 

                    <Box sx={{display:'flex', alignItems:'center', gap: 1.5}}>
                      
                    {row.calories === 'Active' ? (
                                                  <>
                                                    <CheckCircleOutlineIcon color="success" /> {row.calories}
                                                  </>
                                                ) : (
                                                  <>
                                                    <WarningAmberIcon color="danger" /> {row.calories}
                                                  </>
                                                )
                    }

   
                    </Box> 
                    </td>

                    <td>
                      <Box sx={{display:'flex', alignItems:'center', gap: 1.5}}>
                        <PeopleAltOutlinedIcon />      {row.fat}
                      </Box>
                    </td>


                    <td>

                      <Box sx={(theme)=>({
                                    display:'flex',
                                    alignItems:'center',
                                    gap: 1,
                                    [theme.breakpoints.down(834)]: {
                                      flexDirection: 'column',
                                      gap: 1,
                                    },
                        }
                        )}>
                        <a href="/jobprovider/my-jobs/applications"><Button color="primary" variant='solid' size="sm">View Applications</Button></a>

                        <Dropdown>
                            <MenuButton
                              slots={{ root: IconButton }}
                              slotProps={{ root: { variant: 'outlined', color: 'neutral' } }}
                              
                            >
                              <MoreVert />
                            </MenuButton>
                            <Menu>

                              <MenuItem component="a" href="/jobprovider/my-jobs/">
                              <ListItemDecorator>
                                <RemoveRedEyeIcon />
                              </ListItemDecorator>{' '}
                                View Details
                              </MenuItem>
                              
                              <MenuItem>
                              <ListItemDecorator>
                                <WarningAmberIcon color="danger" />
                              </ListItemDecorator>{' '}
                                
                              Mark As Expired
                              </MenuItem>
                            </Menu>
                          </Dropdown>
                      </Box>
                      
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Sheet>
            
   </Box>
  )
}

export default MyJob