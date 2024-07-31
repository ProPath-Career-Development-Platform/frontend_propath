import React from 'react'
import Breadcrumbs from '@mui/joy/Breadcrumbs';
import Box from '@mui/joy/Box';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SchoolIcon from '@mui/icons-material/School';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import Card from '@mui/joy/Card';
import Table from '@mui/joy/Table';
import Button from '@mui/joy/Button';
import VisibilityIcon from '@mui/icons-material/Visibility';
import {Link as RouterLink} from 'react-router-dom';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


import SmallCard from '../../components/Admin/Smallcards';

const AdminCourses = () => {

    const cardData = [
        { icon: SchoolIcon, heading: 'Total Courses', count: 5},
        { icon: Diversity3Icon, heading: 'Total Enrollments', count: 30},
        
      ];

      const courses = [
        { id: 1, name: 'Leadership Essentials', hosted: 'Creative Software', enroll: 20, left: 10 },
        { id: 2, name: 'Effective Communication Skills', hosted: 'IFS', enroll: 15, left: 5 },
        { id: 3, name: 'Time Management Strategies', hosted: '99x', enroll: 25, left: 8 },
        { id: 4, name: 'Conflict Resolution Techniques', hosted: 'GTN Technologies', enroll: 30, left: 12 },
        { id: 5, name: 'Emotional Intelligence in the Workplace', hosted: 'LSEG', enroll: 22, left: 7 },
        { id: 6, name: 'Strategic Thinking and Planning', hosted: 'Sysco Labs', enroll: 18, left: 6 },
        { id: 7, name: 'Team Building and Collaboration', hosted: 'Dialog Axiata', enroll: 28, left: 9 },
    ];
    
      
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
                   Courses
                 </Link>
                </Breadcrumbs>
             </Box>

             <Box
                    sx={{
                        display:'flex',
                        flexDirection:'row',
                        width:'100%',
                        justifyContent:'space-evenly'
                    }}
                >
                    {cardData.map((card, index) => (
                    <SmallCard 
                        key={index}
                        icon={card.icon}
                        heading={card.heading}
                        count={card.count}
            
                        />
                        ))}
                </Box>

                <Box 
                sx={{
                    
                    marginTop:4,
                    
                    
                }}
                >
                  <Card>
                <Typography 
                level="h4" 
                sx={{
                    marginBottom:2
                }}
                >Registered Courses</Typography>
                <Table hoverRow >
      `         <thead color='primary'>
                <tr>
                <th style={{width:'25%'}}>Course Name</th>
                <th style={{width:'15%'}}>Hosted</th>
                <th style={{textAlign:'center'}}>Current Enrollments</th>
                <th style={{textAlign:'center'}}>Enrollments Left</th>
                <th style={{ width: '12%' }}></th>
                <th style={{ width: '12%' }}></th>
                </tr>
                 </thead>
                <tbody>
                {courses.map((row) => (
                <tr key={row.id}>
                <td >{row.name}</td>
                <td>{row.hosted}</td>
                <td style={{textAlign:'center'}} >{row.enroll}</td>
                <td style={{textAlign:'center',color:'red'}}>{row.left}</td>
                <td>
                    <Button startDecorator={<VisibilityIcon />} size="sm"
                        component= {RouterLink}
                        to = "/admin/RegisterdCompany/info"
                >View</Button></td>
                 <td><Button startDecorator={<DeleteForeverIcon />} size="sm" color="danger">Remove</Button></td>
                </tr>
        ))}
      </tbody>
    </Table>
    </Card>
                </Box>
                
             </Box>
  )
}

export default AdminCourses