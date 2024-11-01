import React , {useState , useEffect} from 'react';
import Button from '@mui/joy/Button';
import Breadcrumbs from '@mui/joy/Breadcrumbs';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import Box from '@mui/joy/Box';
import ProfileDropdown from '../../components/JobSeeker/ProfileDropDown';
import Alert from '../../components/JobSeeker/alert';
import JSSearch from '../../components/JobSeeker/search';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import wso2 from '/wso2.png';
import LinkIcon from '@mui/icons-material/Link';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import TimerIcon from '@mui/icons-material/Timer';
import SchoolIcon from '@mui/icons-material/School';
import WalletIcon from '@mui/icons-material/Wallet';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorkIcon from '@mui/icons-material/Work';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import Jobcard from '../../components/JobSeeker/jobcard';
import Companycard from '../../components/JobSeeker/companycard';
import JSCard from '../../components/JobSeeker/card';
import { useLocation } from 'react-router-dom';
import ApplyJob from '../../components/JobSeeker/applyJob';
import AppliedCard from '../../components/JobSeeker/appliedcard';
import Interviewcart from '../../components/JobSeeker/interviewcart';
import CircularProgress from '@mui/joy/CircularProgress';
const JobDetails = () => {

  const responsibilities = [
    "Quisque semper gravida est et consectetur.",
    "Curabitur blandit lorem velit, vitae pretium leo placerat eget.",
    "Morbi mattis in ipsum ac tempus.",
    "Curabitur eu vehicula libero. Vestibulum sed purus ullamcorper, lobortis lectus nec.",
    "Vulputate turpis. Quisque ante odio, iaculis a porttitor sit amet.",
    "Lobortis vel lectus. Nulla at risus ut diam.",
    "Commodo feugiat. Nullam laoreet, diam placerat dapibus tincidunt.",
    "Odio metus posuere lorem, id condimentum erat velit nec neque.",
    "Dui sodales ut. Curabitur tempus augue."
  ];

  const cardData = [
    { title: 'UI/UX Designer', content: 'Responsible for designing user interfaces and improving user experience.', location: 'Colombo', company: 'ABC Design' , img : '/jobs/sysco.png'},
    { title: 'Senior UI/UX Designer', content: 'Leads design projects and mentors junior designers.', location: 'Galle', company: 'Creative Solutions' , img : '/jobs/ifs.png'},
    { title: 'Technical Support Specialist', content: 'Provides technical assistance and support to clients.', location: 'Kandy', company: 'Tech Support Co.' ,  img : '/jobs/99x.png' },
    { title: 'Junior Graphic Designer', content: 'Creates visual content under the guidance of senior designers.', location: 'Jaffna', company: 'Graphic World' , img : '/jobs/virtusa.jpg' },
    { title: 'Front End Developer', content: 'Develops and implements front-end web applications.', location: 'Negombo', company: 'Web Solutions' ,img : '/jobs/codegen.png' },
    { title: 'Backend Developer', content: 'Handles server-side logic and database management.', location: 'Matara', company: 'Data Masters' ,img : '/jobs/microsoft.png' }
  ]

  var amount = 6
  const location = useLocation();
  const { title } = location.state || {}
  
  const [Submit , setSubmit] = useState(0)
  const applyhandleChange = (value)=> {

    setSubmit(value)
    console.log(Submit)

  }
  useEffect(() => {
    if (Submit === 1) {
      const timer = setTimeout(() => {
        setSubmit(2);
      }, 4000); // 10 seconds
  
      return () => clearTimeout(timer); // Cleanup timeout if the component unmounts or Submit changes
    }
  }, [Submit]);
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
        maxHeight: 'calc(100vh - 10px)',
        overflow: 'auto ',
        '&::-webkit-scrollbar': {
          display: 'none',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          mb: 1,
          gap: 1,
          flexDirection: {sm: 'row' },
          alignItems: { xs: 'start', sm: 'center' },
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Breadcrumbs
            size="lg"
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
              Home
            </Typography>
          </Breadcrumbs>
        </Box>
        <Box sx={{ display: 'flex' }}>
          <JSSearch />
          <Alert />
          <ProfileDropdown />
        </Box>
      </Box>
      <Box sx={{ borderBottom: '2px solid #e0e0e0' }} >
        <Typography variant="h4">Find a job</Typography>
      </Box>
      <Box
       sx={{
        display: 'flex',
        gap : 2, 
        position: 'relative'

      }}>
      <Box sx={{marginTop:'10px'}}>
            <img 
                src={wso2} 
                alt="Logo" 
                style={{ 
                width: '100px', // Adjust the size as needed
                height: '100px', // Adjust the size as needed
                borderRadius: '50%',
                objectFit: 'cover' 
                }} 
            />
      </Box>

      <Box sx =  
        {{display: 'flex', 
        flexDirection: 'column', 
        marginTop: {xs:'16px'},
        justifyContent: 'center', 
        height: '75%'}}
        >
        <Typography sx={{fontWeight:'bold' , fontSize: {xs: 'auto' , sm : 'auto' , md: '30px'} , marginBottom : '4px'}}>{title}</Typography>
        <Box sx={{display:'flex' , gap: {xs: 1 , sm: 1 , md : 1 , lg: 2} ,
                  flexDirection: {xs:'column' , sm:'column' , md:'column' , lg: 'row'}
        }}>
            <Typography><LinkIcon/>WWW.Instagram.com</Typography>
            <Typography><LocalPhoneIcon/>+94 76 2 777 952</Typography>
            <Typography><EmailIcon/>maniltenuka@gmail.com</Typography>
        
        </Box>
    
        
      </Box>
      
      <Box 
      sx={{alignItems:'center' , justifyContent:'center' , height: '95%' , display: 'flex' , flexDirection: 'column' ,position:'absolute' , right: 0 }}>
      <Stack direction={{xs:'column' , sm: 'column' , md: 'column' , lg: 'row'}} spacing={2}>
      <Button variant="contained" sx={{backgroundColor:'blue' , height: '42px' , width:{xs : '50px', sm: '50px' , md : '50px' , lg : 'auto'} }} >
         <BookmarkBorderIcon sx={{color:'white' }}/>
      </Button>
      {Submit == 0 && (
        <ApplyJob title = {title} callback={applyhandleChange}></ApplyJob>
      )}

      {Submit == 1 && (
           <Button
           sx={{ backgroundColor: 'blue' }}
           onClick={() => {
             setSubmit(2);
             console.log(Submit);
           }} // Correct capitalization of onClick and proper use of curly braces
         >
              <CircularProgress variant="soft"  />

       </Button>
      )
      }

    {Submit ==2 && (
      <Button
        sx={{ backgroundColor: 'green' }}
        onClick={() => setSubmit(2)} // Correct capitalization of onClick
      >
        <Typography
          sx={{
            display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' },
            color: 'white'
          }}
        >
         Active
        </Typography>
      </Button>
    )}
     
     
      
      </Stack>
      <Typography sx={{ fontSize: '12px', marginTop: '3px' , display: 'flex' , flexDirection: {xs: 'column' , sm: 'row' }}}>
        Job expires in : <span style={{ color: 'red' }}>30 June 2021</span>
      </Typography>

      </Box>
      </Box>
      
      <Box sx = {{display:'flex'}}>

      
        <Box sx={{maxWidth : '60%'}} >
          <Stack direction={'column'} sx={{}}>
              <Typography sx={{fontSize:'18px' , fontWeight: '500' , marginTop: '13px'}}>Job description</Typography>
              <Typography sx = {{fontSize: '16px'}}>Integer aliquet pretium consequat. Donec et sapien id leo accumsan pellentesque eget maximus tellus. Duis et est ac leo rhoncus tincidunt vitae vehicula augue. Donec in suscipit diam. Pellentesque quis justo sit amet arcu commodo sollicitudin. Integer finibus blandit condimentum. Vivamus sit amet ligula ullamcorper, pulvinar ante id, tristique erat. Quisque sit amet aliquam urna. Maecenas blandit felis id massa sodales finibus. Integer bibendum eu nulla eu sollicitudin. Sed lobortis diam tincidunt accumsan faucibus. Quisque blandit augue quis turpis auctor, dapibus euismod ante ultricies. Ut non felis lacinia turpis feugiat euismod at id magna. Sed ut orci arcu. Suspendisse sollicitudin faucibus aliquet.

                          Nam dapibus consectetur erat in euismod. Cras urna augue, mollis venenatis augue sed, porttitor aliquet nibh. Sed tristique dictum elementum. Nulla imperdiet sit amet quam eget lobortis. Etiam in neque sit amet orci interdum tincidunt.
              </Typography>
              <Typography sx={{fontSize:'18px' , fontWeight: '500' , marginTop: '13px'}}>Responsibilities</Typography>
              <ul>
                {responsibilities.map((item, index) => (
                  <Typography key = {index} sx = {{fontSize: '16px'}}>
                    <FiberManualRecordIcon sx={{ fontSize: '10px', marginRight: '8px' }} />
                    {item}
                  </Typography>
                ))}
              </ul>
          </Stack>
        </Box>
        <Box sx = {{marginLeft : '16px' , minWidth : '40%'}}>
        {Submit == 1 && (
          <AppliedCard status={'Pending'}></AppliedCard>
        )}
        {Submit == 2 && (
          <Box>
          <AppliedCard status={'Active'}></AppliedCard>
          
          </Box>
         

        )}
        <Jobcard/>
        <Companycard/>
        </Box>
      </Box>

      <Box sx = {{border: '2px solid #e0e0e0' , marginTop : '10px'}} >
      <Typography sx={{fontWeight:'bold' , fontSize: {xs: 'auto' , sm : 'auto' , md: '20px'} , marginBottom : '12px' , marginTop : '12px' , marginLeft: '12px'}}>Related Jobs</Typography>
      <Box 
                          sx={{ 
                            display: 'grid', 
                            gridTemplateColumns: {
                              xs: 'repeat(1, 1fr)', // 1 column for extra-small screens (mobile)
                              sm: 'repeat(2, 1fr)', // 2 columns for small screens (tablet)
                              md: 'repeat(3, 1fr)', // 3 columns for medium and larger screens (desktop)
                            }, 
                            gap: 2, 
                            
                          }}
                        >
                          {cardData.slice(0,6).map((card, index) => (
                            <JSCard key={index} title={card.title} content={card.content} location={card.location} company={card.company} type = {1} img = {card.img} />
                          ))}
                          
                        
      </Box>
                      
      </Box>
     
     

    </Box>
  );
};

export default JobDetails;
