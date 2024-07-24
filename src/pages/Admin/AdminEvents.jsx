import React from 'react'
import Breadcrumbs from '@mui/joy/Breadcrumbs';
import Box from '@mui/joy/Box';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PublicIcon from '@mui/icons-material/Public';
import GroupsIcon from '@mui/icons-material/Groups';
import SchoolIcon from '@mui/icons-material/School';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import Card from '@mui/joy/Card';
import Table from '@mui/joy/Table';
import Button from '@mui/joy/Button';
import VisibilityIcon from '@mui/icons-material/Visibility';
import {Link as RouterLink} from 'react-router-dom';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


import SmallCard from '../../components/Admin/Smallcards';
import MultipleBarComponent from '../../components/Admin/MultipleBar';

const AdminEvents = () => {


    const cardData = [
        { icon: GroupsIcon, heading: 'Physical Events', count: 12},
        { icon: PublicIcon, heading: 'Virtual Events', count: 5},
        { icon: Diversity1Icon, heading: 'Meetups', count: 10},
        { icon: SchoolIcon, heading: 'Workshops', count: 7},
      ];

      const EventData = [
        {
        item1:'MeetUps',
        item2:'3',
        item3:'7'
        
        },
        {
        item1:'Workshops',
        item2:'2',
        item3:'5'
        
        },
        
        ];


        const companies = [
            {
              name: '99x',
              status: 'Approved',
              orgType: 'Private Limited',
              IndustryType: 'Information Technology'
            },
            {
              name: 'IFS',
              status: 'Declined',
              orgType: 'Private Limited',
              IndustryType: 'Information Technology'
            },
            {
              name: 'LSEG',
              status: 'Approved',
              orgType: 'Private Limited',
              IndustryType: 'Information Technology'
            },
            {
              name: 'MASS',
              status: 'Approved',
              orgType: 'Public Limited',
              IndustryType: 'Apparel'
            },
            {
              name: 'Sysco Labs',
              status: 'Approved',
              orgType: 'Private Limited',
              IndustryType: 'Information Technology'
            }
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
                   Events
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
                        
                        mt:5,
                        width:'60%',
                        alignSelf:'center'
                    }}
                >
                    
                    <Card>
                    <Typography level="h5" sx={{textAlign:'center'}}>Organization Types of Registerd Companies</Typography>
                    <MultipleBarComponent data={EventData} style={{ width:'60%'}}/> 
                  </Card> 
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
                >Events</Typography>
                <Table hoverRow >
      `         <thead color='primary'>
                <tr>
                <th>Name</th>
                <th>Status</th>
                <th>Organization Type</th>
                <th>Industry Type</th>
                <th style={{ width: '12%' }}></th>
                <th style={{ width: '12%' }}></th>
                </tr>
                 </thead>
                <tbody>
                {companies.map((row) => (
                <tr key={row.name}>
                <td>{row.name}</td>
                <td>{row.status}</td>
                <td>{row.orgType}</td>
                <td>{row.IndustryType}</td>
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

export default AdminEvents