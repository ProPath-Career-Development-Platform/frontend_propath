import {useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Button from '@mui/joy/Button';
import Breadcrumbs from '@mui/joy/Breadcrumbs';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import IconButton from '@mui/joy/IconButton';
import Box from '@mui/joy/Box';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import TabPanel from '@mui/joy/TabPanel';
import Tab from '@mui/joy/Tab';
import { tabClasses } from '@mui/joy/Tab';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Skeleton from '@mui/joy/Skeleton';
import { Helmet } from 'react-helmet';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import CardActions from '@mui/joy/CardActions';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
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
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Add from '@mui/icons-material/Add';
import Badge, { badgeClasses } from '@mui/joy/Badge';
import Avatar from '@mui/joy/Avatar';
import AvatarGroup from '@mui/joy/AvatarGroup';
import Chip from '@mui/joy/Chip';

import Divider from '@mui/joy/Divider';
import AspectRatio from '@mui/joy/AspectRatio';
import ButtonGroup from '@mui/joy/ButtonGroup';
import Settings from '@mui/icons-material/Settings';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import { Link as RouterLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import DescriptionIcon from '@mui/icons-material/Description';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import PeopleIcon from '@mui/icons-material/People';

import DateAndTimeFormat from '../../../components/jobprovider/dashboard/DateAndTimeFormat'; 
import RenderRichText from '../../../components/jobprovider/dashboard/RenderRichText';
import EventStatsBarChart from '../../../components/jobprovider/dashboard/EventStatsBarChart';
import EventStatsCircle from '../../../components/jobprovider/dashboard/EventStatsCircle';
import ViewOnlyMap from '../../../components/jobprovider/dashboard/ViewOnlyMap';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DeleteButton from '../../../components/jobprovider/dashboard/DeleteButton';

import EventParticipantTable from '../../../components/jobprovider/dashboard/EventParticipantTable'










function JobPreview() {

  const { id } = useParams();



  const [loading, setLoading] = useState(true);
  const [event, setEvent] = useState([]);
  const [snackOpen, setSnackOpen] = useState(false);
  const [userData, setUserData] = useState([]);


  const getJwtToken = () => {
    return localStorage.getItem('token');
  };

  useEffect(() => {
    axios.get(`http://localhost:8080/jobprovider/event/${id}`, {
      headers: {
        Authorization: `Bearer ${getJwtToken()}`,
      },
    }).then((response) => {
      setEvent(response.data);
      setLoading(false);
      console.log(response.data);
    }).catch((error) => {
      console.error('Error fetching events:', error);
      navigate('/jobprovider/error/404');
    });

    axios.get(`http://localhost:8080/jobprovider/event/register/${id}`,{
      headers:{
        'Authorization': `Bearer ${getJwtToken()}`
      }
    }).then((response) => {
      setUserData(response.data);
    }
    ).catch((error) => {
      console.log(error);
    }
    )


  }, []);

  const ogURL = window.location.href;


  //function to handle delete
  const navigate = useNavigate();

  const handelDelete = () => {

    axios.delete(`http://localhost:8080/jobprovider/event/${id}`, {
      headers: {
        Authorization: `Bearer ${getJwtToken()}`,
      },
    }).then((response) => {

      navigate('/jobprovider/meet-up');
      sessionStorage.setItem('eventDeleteSuc', true);
      console.log(response.data);
    }
  ).catch((error) => {
      setSnackOpen(true);
      console.error('Error deleting event:', error);
    });
  }

 




  return (

    <>

    <Helmet>
        
        <meta property="og:title" content={event.title} />
        <meta property="og:description" content= {event.description} />
        <meta property="og:image" content={event.banner} />
        <meta property="og:url" content= {ogURL} />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={event.title} />
        <meta name="twitter:description" content={event.description} />
        <meta name="twitter:image" content={event.banner} />
      </Helmet>
    
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
                Event Preview <Typography fontWeight={400} color="neutral"></Typography>
              </Typography>
             
            </Box>

            <Divider />




                <AspectRatio ratio="30/9"   objectFit="cover" sx={{display:{xs:'none',sm:'none',md:'block'},borderRadius:'lg'}}>

                  <Skeleton animation="wave" loading={loading}>

                    <img src={event.banner} alt="job preview" />

                  </Skeleton>
                    
                </AspectRatio>

                <AspectRatio ratio="20/9"   objectFit="cover" sx={{display:{sm:'block',md:'none'},borderRadius:'lg'}}>
                    
                    <Skeleton animation="wave" loading={loading}>

                    <img src={event.banner} alt="job preview" />

                    </Skeleton>

                </AspectRatio>

                <Box sx={{ display:'flex', justifyContent:{sm:'space-between'}, mt:2, flexDirection:{xs:'column',sm:'row'} }}>

                  <Box>

                    <Typography level="title-md" color="primary">
                      
                      <Skeleton variant="rectangular" width={200} height="1em" animation="wave" loading={loading}>
                        <DateAndTimeFormat date={event.date} startTime="12:50" endTime={event.endTime} />
                      </Skeleton>
                      
                    </Typography>
                   
                  </Box>

                  <Box sx={{display:'flex', alignContent:'center', justifyContent:{xs:'flex-start', sm:'center'}}}>

                    

                    <ButtonGroup   variant="plain" size="sm" sx={{mt:{xs:1,sm:0}}}>
                          <IconButton disabled>
                            Share
                          </IconButton>
                          
                          <IconButton 
                            component="a"
                            href={`https://www.facebook.com/sharer/sharer.php?u=${ogURL}`}
                            target="_blank"
                          >
                            <FacebookIcon />
                          </IconButton>

                          <IconButton
                          //twitter
                            component="a"
                            href={`https://twitter.com/intent/tweet?url=${ogURL}`}
                            target="_blank"
                            
                          >
                            
                            <XIcon />
                          </IconButton>

                          <IconButton
                           
                            component="a"
                            href={`https://www.linkedin.com/shareArticle?mini=true&url=${ogURL}`}
                            target="_blank"
                          >
                            <LinkedInIcon />
                          </IconButton>

                    </ButtonGroup>

                    


                    
                  </Box>


                </Box>

            
              <Typography level="h3">

              <Skeleton animation="wave" variant="rectangular" sx={{width:'80%'}} height="1.5em" loading={loading}>

                {event.title}


              </Skeleton>
              
              </Typography>
              <Box sx={{display:'flex',alignItems:'center',gap:1,mt:1,mb:1}}>

                {loading ? 

                   <>
                   
                   
                   <Skeleton variant="rectangular" width={80} height={20} />
                   <Skeleton variant="rectangular" width={80} height={20} />
                   <Skeleton variant="rectangular" width={80} height={20} />
                  
                   
                   </>
                

                :

                event.keyWords && event.keyWords.map((keyWord) => (
                    <Chip color="primary" size="md" variant='soft'>{keyWord}</Chip>
                  ))

              }
              
              </Box>

              <Typography level="body-xs" sx={{mb:1}} startDecorator={<LocationOnIcon/> }>
                <Skeleton animation="wave" variant="rectangular" sx={{ width: '60%' }} height="1.5em" loading={loading}>
                  {event.location}
                </Skeleton>
              </Typography>

              




              <AvatarGroup sx={{display:{xs:'flex',sm:'none'}}}>
 
                

                {userData.length > 10 ? (
                  <>
                    {userData.slice(0, 9).map((user) => (
                      <Avatar key={user.userId} alt={user.userName} src={user.profilePicture} />
                    ))}
                    <Avatar>+{userData.length - 9}</Avatar>
                  </>
                ) : (
                  userData.map((user) => (
                    <Avatar key={user.userId} alt={user.userName} src={user.profilePicture} />
                  ))
                )}

              </AvatarGroup>

              <AvatarGroup sx={{display:{xs:'none',sm:'flex'}}}>
 
              {userData.length > 15 ? (
                  <>
                    {userData.slice(0, 14).map((user) => (
                      <Avatar key={user.userId} alt={user.userName} src={user.profilePicture} />
                    ))}
                    <Avatar>+{userData.length - 14}</Avatar>
                  </>
                ) : (
                  userData.map((user) => (
                    <Avatar key={user.userId} alt={user.userName} src={user.profilePicture} />
                  ))
                )}

              </AvatarGroup>



              <Tabs

              
          defaultValue={0}
         
          sx={{
            bgcolor: 'transparent',
            mt :3,

            
          }}
        >
          <TabList
           
            tabFlex="auto"
            size="sm"
            sx={{

            
            
             
              left:'-10px',
              pl: { xs: 0, md: 0 },
              justifyContent: 'left',
              [`&& .${tabClasses.root}`]: {
                fontWeight: '600',
                flex: 'initial',
                color: 'text.tertiary',
                [`&.${tabClasses.selected}`]: {
                  bgcolor: 'transparent',
                  color: 'text.primary',
                  '&::after': {
                    height: '2px',
                    bgcolor: 'primary.500',
                  },
                },
              },
            }}
          >
            <Tab  sx={{ borderRadius: '6px 6px 0 0' }} indicatorInset value={0}>
            <DescriptionIcon  /> 
            
            <Typography  sx={{display:{xs:'none' , sm:'block' ,md:'block'}}} >Description</Typography>
            </Tab>
            <Tab sx={{ borderRadius: '6px 6px 0 0' }} indicatorInset value={1} disabled={loading}>
             <LocationOnIcon/> 

             <Typography  sx={{display:{xs:'none' , sm:'block' ,md:'block'}}} >Location</Typography>
            </Tab>
            <Tab sx={{ borderRadius: '6px 6px 0 0' }} indicatorInset value={2} disabled={loading} >
             <QueryStatsIcon/> 

             <Typography  sx={{display:{xs:'none' , sm:'block' ,md:'block'}}} >Stats</Typography>
            </Tab>
            <Tab sx={{ borderRadius: '6px 6px 0 0' }} indicatorInset value={3} disabled={loading} >
             <PeopleIcon /> 
             <Typography  sx={{display:{xs:'none' , sm:'block' ,md:'block'}}} >Attendance</Typography>
            </Tab>
            <Tab sx={{ borderRadius: '6px 6px 0 0' }} indicatorInset value={4} disabled={loading} >
            <SettingsOutlinedIcon />
            <Typography  sx={{display:{xs:'none' , sm:'block' ,md:'block'}}} >Manage</Typography>
            </Tab>
          </TabList>

          <TabPanel value={0}>

          {loading ? (

            <>

              <Box sx={{display:'flex',gap:2,flexDirection:'column',mt:1}}>


              <Skeleton animation="wave" variant="rectangular" sx={{ width: '80%' }} height="1.5em" />

              <Skeleton animation="wave" variant="rectangular"  height="10.5em" loading={loading}></Skeleton>

              <Skeleton animation="wave" variant="rectangular"  height="5.5em" />

              </Box>
            
            </>




            ) : (



          
              <Card>
                <CardContent sx={{p:2}}>
                <RenderRichText text={event.description} />
                </CardContent>
                  
              </Card>


             
  



             

              


            )}




          

           

          </TabPanel>

          <TabPanel value={2}>


           

            


            <Card>

              <CardContent>

                <EventStatsBarChart  userData= {userData}/>
              
              </CardContent>
            </Card>

          
          

          
          



          </TabPanel>

          <TabPanel value={4}>

            

                <Card>

                  <CardContent>

                      <Box>
                          <Typography sx={{ mb:2}} level='title-lg'>Manage Your Event</Typography>

                          <Typography sx={{ mb:2}} level='body-sm'>You can manage your event by updating or deleting it using the options below</Typography>

                          
                      </Box>
                      

                  </CardContent>

                  <CardOverflow sx={{ borderTop: '1px solid', borderColor: 'divider' }}>
                          <CardActions sx={{ alignSelf: 'flex-end', pt: 2 }}>
                          <Button  component= {RouterLink} to={`/jobprovider/meet-up/updateEvent/${id}`} variant='solid' color='primary'>Update Event</Button>
                          <DeleteButton handelDelete={handelDelete} snackOpen={snackOpen} setSnackOpen={setSnackOpen} />
                          </CardActions>

                  </CardOverflow>
                  </Card>


                  
            

         

          
          



          </TabPanel>


          <TabPanel value={1}>

            <Card>
                
                <CardContent>
  
                  <ViewOnlyMap lat={event.latitude} lng ={event.longitude}  />
                
                </CardContent>

            </Card>

          
          



          </TabPanel>

          <TabPanel value={3}>

            

            <EventParticipantTable eventId={id} userData={userData} loading = {loading} />

              

          </TabPanel>

        </Tabs>
              
          




             





            


            

            
            
   </Box>
    </>
  )
}

export default JobPreview