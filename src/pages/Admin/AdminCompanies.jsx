// import React,{useEffect, useState} from 'react'
// import Breadcrumbs from '@mui/joy/Breadcrumbs';
// import Box from '@mui/joy/Box';
// import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
// import Link from '@mui/joy/Link';
// import Typography from '@mui/joy/Typography';
// import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
// import Table from '@mui/joy/Table';
// import Button from '@mui/joy/Button';
// import VisibilityIcon from '@mui/icons-material/Visibility';
// import Card from '@mui/joy/Card';
// import {Link as RouterLink} from 'react-router-dom';
// import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
// import CheckIcon from '@mui/icons-material/Check';


// import DoughnutChartComponent from '../../components/Admin/doughnutchart';
// import axios from "axios";

// export const listCompanies = () => {
//   return axios.get('http://localhost:8080/admin/RegisterdCompanies');
// }

// export const updateCompanyStatus = (id, company) => {
//   return axios.put(`http://localhost:8080/admin/RegisterdCompanies/verify/${id}`, company);
// };


// const jobDataDoughnut1 = [
//     { id: 1, jobtitle: "Private Limited", count: 100 },
//     { id: 2, jobtitle: "Public Limited ", count: 50 },
//     { id: 3, jobtitle: "Government Agencies", count: 150 },
//     { id: 4, jobtitle: "Partnerships", count: 300 },
//   ];
  
//   const jobDataDoughnut2 = [
//     { id: 1, jobtitle: "Tech Company", count: 120 },
//     { id: 2, jobtitle: "Consulting", count: 80 },
//     { id: 3, jobtitle: "Finance", count: 200 },
//     { id: 4, jobtitle: "Healthcare", count: 100 },
//   ];

  

// const AdminCompanies = () => {

//   const[companies,setCompanies] = useState([])
      
//   useEffect(()=>{
//       listCompanies().then((response)=>{
        
//         setCompanies(response.data);
        
//       }).catch(error=>{
//         console.error(error);
//       })
//   },[]);

//   const handleApprove = (id) => {
//     const updatedCompany = { status: 'verified' };
//     updateCompanyStatus(id, updatedCompany)
//       .then((response) => {
//         const updatedCompanies = companies.map((company) =>
//           company.id === id ? { ...company, status: 'verified' } : company
//         );
//         setCompanies(updatedCompanies);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

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
//                    color="nuetral"
//                    href="/admin/home/"
//                    fontSize={12}
//                    fontWeight={500}
//                  >
//                    Dashboard
//                  </Link>
//                  <Link
//                    underline="hover"
//                    color="primary"
//                    href="/jobprovider/Dashboard/"
//                    fontSize={12}
//                    fontWeight={500}
//                  >
//                    Company
//                  </Link>
                 
                
                
//                </Breadcrumbs>
//              </Box>

//              <Box
//                 sx={{
//                     width:'100%',
//                     display:'flex',
//                     flexDirection:'row',
//                     justifyContent:'space-around',
//                     marginTop:5,
                   
                  
                    
//                 }}
//                 >
//                     <Box
//                     // sx={{ width: 400, height: 400 }}
//                     >
//                     <Typography level="h5" sx={{textAlign:'center'}}>Organization Types of Registerd Companies</Typography>
//                     <br />
//                     <Card
//                         sx={{
//                             display:'flex',
//                             alignItems:'center',
//                             justifyContent:'center',
//                             // width: '100%',
//                             // height: '100%',
//                         }}
//                     >
//                     <DoughnutChartComponent data={jobDataDoughnut1} />  
//                     </Card>  
//                     </Box>
//                     <Box
//                     // sx={{ width: 400, height: 400 }}
//                     >
//                     <Typography level="h5"sx={{textAlign:'center'}}>Industry Types of Registerd Companies</Typography>
//                     <br />
//                     <Card
//                      sx={{
//                         display:'flex',
//                         alignItems:'center',
//                         justifyContent:'center',
//                         // width: '100%',
//                         // height: '100%',
//                     }}
//                     >
//                     <DoughnutChartComponent data={jobDataDoughnut2} /> 
//                     </Card>  
//                     </Box>
                
//                 </Box>

//                 <Box 
//                 sx={{
                    
//                     marginTop:4,
                    
                    
//                 }}
//                 >
//                   <Card>
//                 <Typography 
//                 level="h4" 
//                 sx={{
//                     marginBottom:2
//                 }}
//                 >Registered Companies</Typography>
//                 <Table hoverRow >
//       `         <thead color='primary'>
//                 <tr>
//                 <th style={{ width: '12%' }}>Name</th>
//                 <th style={{ width: '12%' }}>Status</th>
//                 <th>Organization Type</th>
//                 <th>Industry Type</th>
//                 <th style={{ width: '12%' }}></th>
//                 <th style={{ width: '12%' }}></th>
//                 <th style={{ width: '12%' }}></th>
//                 </tr>
//                  </thead>
//                 <tbody>
//                 {companies.map((row) => (
//                 <tr key={row.id}>
//                 <td>{row.companyName}</td>
//                 <td>{row.status}</td>
//                 <td>{row.organizationType}</td>
//                 <td>{row.industryType}</td>
//                 <td>
//                     <Button startDecorator={<VisibilityIcon />} size="sm"
//                         component= {RouterLink}
//                         to = "/admin/RegisterdCompany/info"
//                 >View</Button></td>
//                 <td><Button startDecorator={<CheckIcon />} size="sm" color="success"  onClick={() => handleApprove(row.id)}>Approve</Button></td>
//                 <td><Button startDecorator={<DeleteForeverIcon />} size="sm" color="danger">Reject</Button></td>
//                 </tr>
//         ))}
//       </tbody>
//     </Table>
//     </Card>
//                 </Box>
             
//              </Box>
//   )
// }

// export default AdminCompanies

import React from 'react'
import CompanyRequests from '../../components/Admin/CompanyRequests'
import CompanyTable from '../../components/Admin/CompanyTable'
import CompanyChart from '../../components/Admin/CompanyChart'

const AdminCompanies = () => {
  return (
    <div className='mx-8 mt-3'>
      <div className='flex my-3 gap-6'>
        <div className="w-1/2">
          <CompanyChart/>
        </div>        
        <div className="w-1/2">
          <CompanyRequests/>
        </div> 
      </div>
      <CompanyTable/>
    </div>
  )
}

export default AdminCompanies
