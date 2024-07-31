import React from 'react'
import Breadcrumbs from '@mui/joy/Breadcrumbs';
import Box from '@mui/joy/Box';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import Table from '@mui/joy/Table';
import Button from '@mui/joy/Button';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Card from '@mui/joy/Card';


import InfoCard from '../../components/Admin/InfoCard';
import GeneralCard from '../../components/Admin/GeneralCard';


function createJobs(jobrole, company, applicant, postedDate) {
  return { jobrole, company, applicant, postedDate};
}




const AdminCompanyInfo = () => {


  const jobs = [
    createJobs('Software Engineer', 'IFS', 20, '2024/05/23'),
    createJobs('UI/UX Engineer', '99X', 10, '2024/06/23'),
    createJobs('QA Engineer', 'LSEG', 12, '2024/07/23'),
    createJobs('Business Analyst', 'WSO2', 29, '2024/07/26'),
    createJobs('Project Manager','Sysco Labs', 10, '2024/05/23'),
  ];

  const events =[
    {
      'name':'Learn ML Basics',
      'location':'BMICH',
      'Date':'2024/07/23',
      'participants':23,
    },
    {
      'name':'Learn ML Basics',
      'location':'BMICH',
      'Date':'2024/07/23',
      'participants':23,
    },
    {
      'name':'Learn ML Basics',
      'location':'BMICH',
      'Date':'2024/07/23',
      'participants':23,
    },
  ]

  
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
                   color="nuetral"
                   href="/admin/RegisterdCompanies/"
                   fontSize={12}
                   fontWeight={500}
                 >
                   Company
                 </Link>
                 <Link
                   underline="hover"
                   color="primary"
                   href="/jobprovider/Dashboard/"
                   fontSize={12}
                   fontWeight={500}
                 >
                   Info
                 </Link>
                 
                
                
               </Breadcrumbs>
             </Box>
              <Box
              sx={{
                display:'flex',
                flexDirection:'row',
                justifyContent:'space-around',
                mt:3
              }}
              >
                <Box>
                <InfoCard/>
                </Box>
                <Box>
                  <GeneralCard/>
                </Box>
                
              </Box>


              <Box 
                sx={{
                    
                    marginTop:4
                    
                }}
                >
                  <Card>
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
                {jobs.map((row) => (
                <tr key={row.jobrole}>
                <td>{row.jobrole}</td>
                <td>{row.company}</td>
                <td>{row.applicant}</td>
                <td>{row.postedDate}</td>
                <td><Button startDecorator={<VisibilityIcon />} size="sm">View</Button></td>
                </tr>
        ))}
      </tbody>
    </Table>
    </Card>
                </Box>

                <Box 
                sx={{
                    
                    marginTop:4
                    
                }}
                >
                  <Card>
                <Typography 
                level="h4" 
                sx={{
                    marginBottom:2
                }}
                >Recently Posted Events</Typography>
                <Table hoverRow>
      `         <thead color='primary'>
                <tr>
                <th style={{ width: '20%' }}>Event Name</th>
                <th>Event Date</th>
                <th>Location</th>
                <th>Participants</th>
                <th></th>
                </tr>
                 </thead>
                <tbody>
                {events.map((row) => (
                <tr key={row.name}>
                <td>{row.name}</td>
                <td>{row.Date}</td>
                <td>{row.location}</td>
                <td>{row.participants}</td>
                <td><Button startDecorator={<VisibilityIcon />} size="sm">View</Button></td>
                </tr>
        ))}
      </tbody>
    </Table>
    </Card>
                </Box>


             
             </Box>
  )
}

export default AdminCompanyInfo