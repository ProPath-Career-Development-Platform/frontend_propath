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
import {Link as RouterLink} from 'react-router-dom';


import ChartComponent, { jobData } from '../../components/Admin/chart';
import DoughnutChartComponent from '../../components/Admin/doughnutchart';

const AdminJobs = () => {

const Subscription =[
  
    { id: 1, jobtitle: "Premium", count: 20 },
    { id: 2, jobtitle: "Basic", count: 80 },
    { id: 3, jobtitle: "Standard", count: 60 },
    
  
];

const jobs = [
  {jobrole:'Software Engineer', company:'IFS', applicant:20, postedDate:'2024/07/21'},
  {jobrole:'UI/UX Engineer',company:'99X', applicant:10, postedDate:'2024/07/21'},
  {jobrole:'QA Engineer', company:'LSEG',applicant: 12, postedDate:'2024/07/21'},
  {jobrole:'Business Analyst', company:'WSO2',applicant: 29,postedDate:'2024/07/21'},
  {jobrole:'Project Manager',company:'Sysco Labs', applicant:10, postedDate:'2024/07/21'},
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
                   href="/jobprovider/Dashboard/"
                   fontSize={12}
                   fontWeight={500}
                 >
                   Jobs
                 </Link>
                 
                
                
               </Breadcrumbs>
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
                        <Typography level="h4" sx={{textAlign:'center'}}>Number of Job Posts by Each Job role</Typography>
                        <br />
                        <Card>
                       
                        <ChartComponent/>
                        </Card>
                    </Box>
                    <Box>
                    <Typography level="h4" sx={{textAlign:'center'}}>Job Posting Subscriptions</Typography>
                    <br />
                    <Card>
                    <DoughnutChartComponent data={Subscription} /> 
                    </Card>  
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
                
             </Box>
  )
}

export default AdminJobs