import React from 'react'
import Breadcrumbs from '@mui/joy/Breadcrumbs';
import Box from '@mui/joy/Box';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import InsertInvitationTwoToneIcon from '@mui/icons-material/InsertInvitationTwoTone';
import Table from '@mui/joy/Table';
import Button from '@mui/joy/Button';
import VisibilityIcon from '@mui/icons-material/Visibility';

import ChartComponent, { jobData } from '../../components/Admin/chart';
import PieChartComponent,{jobDataPie} from '../../components/Admin/PieChart';
import SmallCard from '../../components/Admin/Smallcards';




function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}





const AdminHome =() => {

    const cardData = [
        { icon: HomeIcon, heading: 'Registered Companies', count: 560},
        { icon: WorkIcon, heading: 'Jobs Posts', count: 120},
        { icon: PeopleAltIcon, heading: 'Job Seekers', count: 3000},
        { icon: InsertInvitationTwoToneIcon, heading: 'Registered Events', count: 75},
      ];


      const rows = [
        createData('Software Engineer', 'IFS', 20, 24, ),
        createData('UI/UX Engineer', '99X', 10, 37, 4.3),
        createData('QA Engineer', 'LSEG', 12, 24, 6.0),
        createData('Business Analyst', 'WSO2', 29, 67, 4.3),
        createData('Project Manager','Sysco Labs', 10, 49, 3.9),
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
                   color="primary"
                   href="/jobprovider/Dashboard/"
                   fontSize={12}
                   fontWeight={500}
                 >
                   Dashboard
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
                    width:'100%',
                    display:'flex',
                    flexDirection:'row',
                    justifyContent:'space-between',
                    marginTop:5
                    
                }}
                >
                    <Box
                    sx={{
                        width:'700px'
                    }}
                    >
                        <Typography level="h4">Number of Job Posts by Each Job role</Typography>
                        <br />
                        <ChartComponent />
                    </Box>
                    <Box>
                    <Typography level="h4" >Types of Registerd Companies</Typography>
                    <br />
                    <PieChartComponent />  
                        
                    </Box>
                
                </Box>

                <Box 
                sx={{
                    
                    marginTop:4
                    
                }}
                >
                <Typography 
                level="h4" 
                sx={{
                    marginBottom:2
                }}
                >Recently Posted Jobs</Typography>
                <Table hoverRow>
      `         <thead color='primary'>
                <tr>
                <th style={{ width: '20%' }}>Job Role</th>
                <th>Company</th>
                <th>Applicants</th>
                <th>Posted Date</th>
                <th></th>
                </tr>
                 </thead>
                <tbody>
                {rows.map((row) => (
                <tr key={row.name}>
                <td>{row.name}</td>
                <td>{row.calories}</td>
                <td>{row.fat}</td>
                <td>{row.carbs}</td>
                <td><Button startDecorator={<VisibilityIcon />} size="sm">View</Button></td>
                </tr>
        ))}
      </tbody>
    </Table>
                </Box>


                <Box 
                sx={{
                    
                    marginTop:4
                    
                }}
                >
                <Typography 
                level="h4" 
                sx={{
                    marginBottom:2
                }}
                >Recently Registered Companies</Typography>
                <Table hoverRow>
      `         <thead color='primary'>
                <tr>
                <th style={{ width: '20%' }}>Job Role</th>
                <th>Company</th>
                <th>Applicants</th>
                <th>Posted Date</th>
                <th></th>
                </tr>
                 </thead>
                <tbody>
                {rows.map((row) => (
                <tr key={row.name}>
                <td>{row.name}</td>
                <td>{row.calories}</td>
                <td>{row.fat}</td>
                <td>{row.carbs}</td>
                <td><Button startDecorator={<VisibilityIcon />} size="sm">View</Button></td>
                </tr>
        ))}
      </tbody>
    </Table>
                </Box>
               
             
             </Box>
  )
}

export default AdminHome