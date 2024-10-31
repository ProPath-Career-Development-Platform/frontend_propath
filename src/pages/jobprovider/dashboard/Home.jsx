import React,{useState,useEffect} from 'react'
import Button from '@mui/joy/Button';
import Breadcrumbs from '@mui/joy/Breadcrumbs';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardActions from '@mui/joy/CardActions';
import IconButton from '@mui/joy/IconButton';
import Box from '@mui/joy/Box';
import Table from '@mui/joy/Table';
import Sheet from '@mui/joy/Sheet';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import { typographyClasses } from '@mui/joy/Typography';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import EventOutlinedIcon from '@mui/icons-material/EventOutlined';

import Dropdown from '@mui/joy/Dropdown';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import MoreVert from '@mui/icons-material/MoreVert';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';


import Divider from '@mui/joy/Divider';
import SmallCard from '../../../components/Admin/Smallcards';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import InsertInvitationTwoToneIcon from '@mui/icons-material/InsertInvitationTwoTone';
import {getUserIdFromToken} from '../../../utils/tokenUtils';
import ChartComponent, { jobData } from '../../../components/jobprovider/dashboard/BarChart';
import DoughnutChartComponent from '../../../components/Admin/doughnutchart';
import {Link as RouterLink} from 'react-router-dom';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';



function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('UI/UX Designer', 'Active', 200, 24),
  createData('Senior UI/UX Designer', 'Expire', 100, 37),
  createData('Techical Support Specialist', 'Active', 50, 24),
  createData('Junior Graphic Designer', 'Expire', 1000, 67),
  createData('Front End Developer', 'Active', 300, 49),
];


const cardData = [
  
  { icon: WorkIcon, heading: 'Jobs Posts', count: 10},
  { icon: PeopleAltIcon, heading: 'Applicants', count: 150},
  { icon: InsertInvitationTwoToneIcon, heading: 'Upcoming Events', count: 5},
];

const Subscription =[
  
  { id: 1, jobtitle: "Premium", count: 20 },
  { id: 2, jobtitle: "Basic", count: 80 },
  { id: 3, jobtitle: "Standard", count: 60 },
  

];




  

const Home = () => {
 

  const [company, setCompany] = useState(null);
  const [postedJobs, setPostedJobs] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const jwtToken = localStorage.getItem('token');

  const navigate = useNavigate();

  
 useEffect(() => {
  setLoading(true);

  axios.get('http://localhost:8080/jobprovider/company', {
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
  }).then((response) => {

    if(response.data.status === "delete"){
      navigate('/jobprovider/dashboard');
    }else{

      localStorage.setItem('companyName', response.data.companyName);
      localStorage.setItem('companyEmail', response.data.email);
      localStorage.setItem('companyLogo', response.data.logoImg);
      
      setLoading(false);

    }




  }
  ).catch((error) => {
    console.error(error);
  });
 },[jwtToken]);


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
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
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
                  
                </Typography>
              </Breadcrumbs>
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
                Home 
              </Typography>
             
            </Box>

            {/*breadcrumbs over*/}
            <Divider />

            <Box sx={{  alignItems: 'center', marginTop:'20px' }}>

              <Typography color="primary" fontSize="lg" fontWeight="lg">
                Hello, {company?.companyName ? company.companyName : 'Company Name'}
              </Typography>

              <Typography fontSize="md" textColor="text.secondary" lineHeight="lg">
                Here is your daily activities and applications
              </Typography>

            </Box>
              
            {/* insights */}

            <Box sx={{   
                        display:'flex',
                        flexDirection:'row',
                        width:'100%',
                        justifyContent:'space-evenly',
                        mt:4
                   
            }}>
                 {/* {cardData.map((card, index) => (
                    <SmallCard 
                        key={index}
                        icon={card.icon}
                        heading={card.heading}
                        count={card.count}
            
                        />
                        ))} */}
            <Card variant="soft" color="primary"  invertedColors>
              <CardContent orientation="horizontal">
                <IconButton variant="soft" color="primary" size="lg" sx={{width:'80px'}} >

                  <WorkOutlineIcon sx ={{fontSize: 50}}/>

                </IconButton>

                <CardContent>
                  <Typography level="body-md">Open Jobs</Typography>
                  <Typography level="h2">560</Typography>
                </CardContent>
              </CardContent>
              <CardActions>
                
                <Button variant="solid" size="sm"
                 component= {RouterLink}
                 to = "/jobprovider/my-jobs">
                
                  Job Posts
                </Button>
              </CardActions>
            </Card>

            <Card variant="soft" color="primary"  invertedColors>
              <CardContent orientation="horizontal">
                <IconButton variant="soft" color="primary" size="lg" sx={{width:'80px'}} >

                  <PeopleAltOutlinedIcon sx ={{fontSize: 50}}/>

                </IconButton>

                <CardContent>
                  <Typography level="body-md">Applicants</Typography>
                  <Typography level="h2">560</Typography>
                </CardContent>
              </CardContent>
              <CardActions>
                
                <Button variant="solid" size="sm"
                 component= {RouterLink}
                 to = "/jobprovider/my-jobs/applications">
                
                  Applicants
                </Button>
              </CardActions>
            </Card>
            <Card variant="soft" color="primary"  invertedColors>
              <CardContent orientation="horizontal">
                <IconButton variant="soft" color="primary" size="lg" sx={{width:'80px'}} >

                  <EventOutlinedIcon sx ={{fontSize: 50}}/>

                </IconButton>

                <CardContent>
                  <Typography level="body-md">Events</Typography>
                  <Typography level="h2">560</Typography>
                </CardContent>
              </CardContent>
              <CardActions>
                
                <Button variant="solid" size="sm"
                component= {RouterLink}
                to = "/jobprovider/meet-up">
                
                  Registered Events
                </Button>
              </CardActions>
            </Card>
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
                        width:'700px',
                        
                    }}
                    >
                        {/* <Typography level="h4" sx={{textAlign:'center'}}>Number of Job Posts by Each Job role</Typography>
                        <br /> */}
                        <Card
                        
                        >
                       
                        <ChartComponent/>
                        </Card>
                    </Box>
                    <Box>
                    {/* <Typography level="h4" sx={{textAlign:'center'}}>Events With Number of participants</Typography>
                    <br /> */}
                    <Card
                      
                    >
                    <DoughnutChartComponent data={Subscription} /> 
                    </Card>  
                    </Box>
                
                </Box>


            {/* insights over, Table */}

            <Typography level="title-lg" sx={{marginTop: '20px'}}>Recent Posted Applications</Typography>



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
                {postedJobs.map((job) => (
                  <tr key={job.id}>

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

                         <Typography level='title-lg' sx={{marginTop:'5px', marginBottom:'5px'}}> {job.jobTitle} </Typography> 

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
                          <Typography level='body-md'>{job.jobType}</Typography>
                          <Typography  level='body-md'>•</Typography>
                          <Typography level='body-sm'>23 Days Remaining</Typography>
                        </Box>
                      </Box>
                      
                    </td>


                    <td> 

                    <Box sx={{display:'flex', alignItems:'center', gap: 1.5}}>
                      
                    {new Date(job.expiryDate) > new Date() ?(
                                                  <>
                                                    <CheckCircleOutlineIcon color="success" /> Active
                                                  </>
                                                ) : (
                                                  <>
                                                    <WarningAmberIcon color="danger" /> Expired
                                                  </>
                                                )
                    }

   
                    </Box> 
                    </td>

                    <td>
                      <Box sx={{display:'flex', alignItems:'center', gap: 1.5}}>
                        <PeopleAltOutlinedIcon />      {job.vacancies}
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
                        <Button color="primary" variant='solid' size="sm">View Applications</Button>

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

export default Home