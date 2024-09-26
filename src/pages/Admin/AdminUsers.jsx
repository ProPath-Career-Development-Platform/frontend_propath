// import React from 'react'
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

// import LineChart from '../../components/Admin/LineChart';

// const AdminUsers = () => {

//   const today = new Date();
//     const months = [
//       new Date(today.getFullYear(), today.getMonth() - 3).toLocaleString('default', { month: 'long' }),
//       new Date(today.getFullYear(), today.getMonth() - 2).toLocaleString('default', { month: 'long' }),
//       new Date(today.getFullYear(), today.getMonth() - 1).toLocaleString('default', { month: 'long' }),
//       new Date(today.getFullYear(), today.getMonth()).toLocaleString('default', { month: 'long' }),
//     ];

//   const userData = {
//     labels: months,
//     datasets: [
//       {
//         label: 'Users',
//         data: [
//            1000, 500, 900, 200
           
//         ],
//         borderColor: '#5F35AE',
//         backgroundColor: '#E1CBFF',
//         fill: true,
//       },
//     ],
//   };

//   const Users =[
//     {
//       id: 1,
//       name:'Santhush',
//       Email:'santhushfernando2000@gmai.com',
//       Applied_jobs:4,
//       city:'Piliyandala'
//     },
//     {
//       id: 1,
//       name:'Tharindu',
//       Email:'santhushfernando2000@gmai.com',
//       Applied_jobs:2,
//       city:'Piliyandala'
//     },
//     {
//       id: 1,
//       name:'Manil',
//       Email:'santhushfernando2000@gmai.com',
//       Applied_jobs:3,
//       city:'Piliyandala'
//     },
//     {
//       id: 1,
//       name:'Pahasara',
//       Email:'santhushfernando2000@gmai.com',
//       Applied_jobs:5,
//       city:'Piliyandala'
//     },
//     {
//       id: 1,
//       name:'Sandani',
//       Email:'santhushfernando2000@gmai.com',
//       Applied_jobs:3,
//       city:'Piliyandala'
//     },
//     {
//       id: 1,
//       name:'Thisara',
//       Email:'santhushfernando2000@gmai.com',
//       Applied_jobs:5,
//       city:'Piliyandala'
//     },
//   ];

  
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
//                    Users
//                  </Link>
                 
                
                
//                </Breadcrumbs>
//              </Box>

//              <Box
//                     sx={{
//                         marginTop:3,
//                         width:'100%',
                       
                        
//                     }}
//                     >
//                         <Typography level="h4">User Growth compared to Months</Typography>
//                         <br />
//                         <Card>
//                         <LineChart data={userData} /> 
                        
//                         </Card>
//                     </Box>


//                     <Box 
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
//                 >Registered Users</Typography>
//                 <Table hoverRow>
//       `         <thead color='primary'>
//                 <tr>
//                 <th style={{ width: '10%'}}>Name</th>
//                 <th style={{ width: '20%'}}>Email</th>
//                 <th style={{ width: '10%'}}>City</th>
//                 <th style={{ width: '12%', textAlign:'center'}}>Applied Jobs</th>
//                 <th style={{ width: '12%', textAlign:'center' }}></th>
//                 <th style={{ width: '12%', textAlign:'center' }}></th>
//                 </tr>
//                  </thead>
//                 <tbody>
//                 {Users.map((row) => (
//                 <tr key={row.id}>
//                 <td>{row.name}</td>
//                 <td>{row.Email}</td>
//                 <td>{row.city}</td>
//                 <td style={{textAlign:'center' }}>{row.Applied_jobs}</td>
//                 <td><Button startDecorator={<VisibilityIcon />} size="sm">View</Button></td>
//                 <td><Button startDecorator={<DeleteForeverIcon />} size="sm" color="danger">Remove</Button></td>
//                 </tr>
//         ))}
//       </tbody>
//     </Table>
//     </Card>
//                 </Box>
               
             
//              </Box>
//   )
// }

// export default AdminUsers

import React from 'react'
import UserChart from '../../components/Admin/UserChart'
import UserTable from '../../components/Admin/UserTable'

const AdminUsers = () => {
  return (
    <div className='mx-8'>
      <UserChart/>
      <UserTable/> 
    </div>
  )
}

export default AdminUsers