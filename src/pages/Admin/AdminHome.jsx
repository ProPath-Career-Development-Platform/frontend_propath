// import React from 'react'
// import Breadcrumbs from '@mui/joy/Breadcrumbs';
// import Box from '@mui/joy/Box';
// import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
// import Link from '@mui/joy/Link';
// import Typography from '@mui/joy/Typography';
// import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
// import HomeIcon from '@mui/icons-material/Home';
// import WorkIcon from '@mui/icons-material/Work';
// import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
// import InsertInvitationTwoToneIcon from '@mui/icons-material/InsertInvitationTwoTone';
// import Table from '@mui/joy/Table';
// import Button from '@mui/joy/Button';
// import VisibilityIcon from '@mui/icons-material/Visibility';
// import Card from '@mui/joy/Card';

// import ChartComponent, { jobData } from '../../components/Admin/chart';
// import PieChartComponent from '../../components/Admin/PieChart';
// import DoughnutChartComponent from '../../components/Admin/doughnutchart';
// import SmallCard from '../../components/Admin/Smallcards';
// import LineChart from '../../components/Admin/LineChart';





// function createJobs(jobrole, company, applicant, postedDate) {
//   return { jobrole, company, applicant, postedDate};
// }

// function createCompanies(name, status, orgType, IndustryType) {
//     return { name, status, orgType, IndustryType};
//   }


//   //generate dummy revenue

//   const generateDummyRevenueData = () => {
//     const today = new Date();
//     const months = [
//       new Date(today.getFullYear(), today.getMonth() - 3).toLocaleString('default', { month: 'long' }),
//       new Date(today.getFullYear(), today.getMonth() - 2).toLocaleString('default', { month: 'long' }),
//       new Date(today.getFullYear(), today.getMonth() - 1).toLocaleString('default', { month: 'long' }),
//       new Date(today.getFullYear(), today.getMonth()).toLocaleString('default', { month: 'long' }),
//     ];
  
//     const revenueData = {
//       labels: months,
//       datasets: [
//         {
//           label: 'Revenue',
//           data: [
//             Math.floor(Math.random() * 500000) + 100000, // Random revenue for 4 months
//             Math.floor(Math.random() * 500000) + 100000,
//             Math.floor(Math.random() * 500000) + 100000,
//             Math.floor(Math.random() * 500000) + 100000
//           ],
//           borderColor: '#5F35AE',
//           backgroundColor: '#E1CBFF',
//           fill: true,
//         },
//       ],
//     };
  
//     return revenueData;
//   };





// const AdminHome =() => {

  

//     const cardData = [
//         { icon: HomeIcon, heading: 'Registered Companies', count: 560},
//         { icon: WorkIcon, heading: 'Jobs Posts', count: 120},
//         { icon: PeopleAltIcon, heading: 'Job Seekers', count: 3000},
//         { icon: InsertInvitationTwoToneIcon, heading: 'Registered Events', count: 75},
//       ];


//       const jobs = [
//         createJobs('Software Engineer', 'IFS', 20, '2024/07/21'),
//         createJobs('UI/UX Engineer', '99X', 10, '2024/07/21'),
//         createJobs('QA Engineer', 'LSEG', 12, '2024/07/21'),
//         createJobs('Business Analyst', 'WSO2', 29, '2024/07/21'),
//         createJobs('Project Manager','Sysco Labs', 10, '2024/07/21'),
//       ];

//       const companies = [
//         createCompanies( 'IFS', 'Approved','Private Limited', 'Information Technology'),
//         createCompanies('99X', 'Declined','Private Limited', 'Information Technology'),
//         createCompanies('LSEG', 'Approved','Private Limited', 'Information Technology'),
//         createCompanies( 'MASS','Approved', 'Public Limited', 'Apperal'),
//         createCompanies('Sysco Labs','Approved','Private Limited', 'Information Technology'),
//       ];


//       const jobDataPie = [
//         { id: 1, jobtitle: "Software Engineer", count: 100 },
//         { id: 2, jobtitle: "UI/UX Engineer", count: 50 },
//         { id: 3, jobtitle: "QA Engineer", count: 150 },
//         { id: 4, jobtitle: "Business Analyst", count: 300 },
//       ];

//       const revenueData = generateDummyRevenueData();

//   return (
//     <Box
//     component="main"
//              className="MainContent"
//              sx={{
//                px: { xs: 2, md: 6 },
//                pt: {
//                  xs: 'calc(12px + var(--Header-height))',
//                  sm: 'calc(12px + var(--Header-height))',
//                  md: 3,
//                },
//                pb: { xs: 2, sm: 2, md: 3 },
//                flex: 1,
//                display: 'flex',
//                flexDirection: 'column',
//                minWidth: 0,
//                height: '100dvh',
//                gap: 1,
//                overflow: 'auto',
//                maxHeight: 'calc(100vh - 10px)',
//              }}
//      >
 
         
//  <Box>
//                <Breadcrumbs
//                  size="sm"
//                  aria-label="breadcrumbs"
//                  separator={<ChevronRightRoundedIcon fontSize="sm" />}
//                  sx={{ pl: 0 }}
//                >
//                  <Link
//                    underline="none"
//                    color="neutral"
//                    href="#some-link"
//                    aria-label="Home"
//                  >
//                    <HomeRoundedIcon />
//                  </Link>
//                  <Link
//                    underline="hover"
//                    color="primary"
//                    href="/jobprovider/Dashboard/"
//                    fontSize={12}
//                    fontWeight={500}
//                  >
//                    Dashboard
//                  </Link>
                 
                
                
//                </Breadcrumbs>
//              </Box>
//                 <Box
//                     sx={{
//                         display:'flex',
//                         flexDirection:'row',
//                         width:'100%',
//                         justifyContent:'space-evenly'
//                     }}
//                 >
//                     {cardData.map((card, index) => (
//                     <SmallCard 
//                         key={index}
//                         icon={card.icon}
//                         heading={card.heading}
//                         count={card.count}
            
//                         />
//                         ))}
//                 </Box>
//                 <Box
//                 sx={{
//                     width:'100%',
//                     display:'flex',
//                     flexDirection:'row',
//                     justifyContent:'space-between',
//                     marginTop:5
                    
//                 }}
//                 >
//                     <Box
//                     sx={{
//                         width:'700px'
//                     }}
//                     >
//                         <Typography level="h4">Revenue Earned by Subscription</Typography>
//                         <br />
//                         <Card
//                           sx={{
//                             height:'333px'
//                           }}
//                         >
//                         <LineChart data={revenueData} />
                        
//                         </Card>
//                     </Box>
//                     <Box>
//                     <Typography level="h4" >Types of Registerd Companies</Typography>
//                     <br />
//                     <Card>
//                     <DoughnutChartComponent data={jobDataPie} />
//                     </Card>  
//                     </Box>
                
//                 </Box>

//                 <Box 
//                 sx={{
                    
//                     marginTop:4
                    
//                 }}
//                 >
//                   <Card>
//                 <Typography 
//                 level="h4" 
//                 sx={{
//                     marginBottom:2
//                 }}
//                 >Recently Posted Jobs</Typography>
//                 <Table hoverRow>
//       `         <thead color='primary'>
//                 <tr>
//                 <th style={{ width: '20%' }}>Job Role</th>
//                 <th>Company</th>
//                 <th>Applicants</th>
//                 <th>Posted Date</th>
//                 <th></th>
//                 </tr>
//                  </thead>
//                 <tbody>
//                 {jobs.map((row) => (
//                 <tr key={row.jobrole}>
//                 <td>{row.jobrole}</td>
//                 <td>{row.company}</td>
//                 <td>{row.applicant}</td>
//                 <td>{row.postedDate}</td>
//                 <td><Button startDecorator={<VisibilityIcon />} size="sm">View</Button></td>
//                 </tr>
//         ))}
//       </tbody>
//     </Table>
//     </Card>
//                 </Box>


//                 <Box 
//                 sx={{
                    
//                     marginTop:4
                    
//                 }}
//                 >
//                   <Card>
//                 <Typography 
//                 level="h4" 
//                 sx={{
//                     marginBottom:2
//                 }}
//                 >Recently Registered Companies</Typography>
//                 <Table hoverRow>
//       `         <thead color='primary'>
//                 <tr>
//                 <th style={{ width: '20%' }}>Name</th>
//                 <th>Status</th>
//                 <th>Organization Type</th>
//                 <th>Industry Type</th>
//                 <th></th>
//                 </tr>
//                  </thead>
//                 <tbody>
//                 {companies.map((row) => (
//                 <tr key={row.name}>
//                 <td>{row.name}</td>
//                 <td>{row.status}</td>
//                 <td>{row.orgType}</td>
//                 <td>{row.IndustryType}</td>
//                 <td><Button startDecorator={<VisibilityIcon />} size="sm">View</Button></td>
//                 </tr>
//         ))}
//       </tbody>
//     </Table>
//     </Card>
//                 </Box>
               
             
//              </Box>
//   )
// }

// export default AdminHome

import React from 'react'
import DashboardCards from '../../components/Admin/DashboardCards'
import RevenueChart from '../../components/Admin/RevenueChart'
import NewRegChart from '../../components/Admin/NewRegChart'

const AdminHome = () => {
  return (
    <div>
      <DashboardCards/>
      <div className='mx-8 flex my-3 gap-4'>
        <div className="w-1/2">
          <NewRegChart/>
        </div>        
        <div className="w-1/2">
          <RevenueChart/>
        </div> 
      </div>
    </div>
  )
}

export default AdminHome