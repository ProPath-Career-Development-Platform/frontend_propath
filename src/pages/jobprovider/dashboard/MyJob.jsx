import React,{useState,useEffect} from 'react'
import Button from '@mui/joy/Button';
import Breadcrumbs from '@mui/joy/Breadcrumbs';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import IconButton from '@mui/joy/IconButton';
import Box from '@mui/joy/Box';
import Table from '@mui/joy/Table';
import Sheet from '@mui/joy/Sheet';
import { typographyClasses } from '@mui/joy/Typography';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Skeleton from '@mui/joy/Skeleton';

import Dropdown from '@mui/joy/Dropdown';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import MoreVert from '@mui/icons-material/MoreVert';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Add from '@mui/icons-material/Add';
import Badge, { badgeClasses } from '@mui/joy/Badge';
import Avatar from '@mui/joy/Avatar';
import Snackbar from '@mui/joy/Snackbar';
import Divider from '@mui/joy/Divider';
import { Link as RouterLink } from 'react-router-dom';
import {getUserIdFromToken} from '../../../utils/tokenUtils';
import JobTable from '../../../components/jobprovider/dashboard/JobTable';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import DialogActions from '@mui/joy/DialogActions';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import axios from 'axios';
import WorkIcon from '@mui/icons-material/Work';
import {getUserId} from '../../../utils/auth';



function MyJob() {

  console.log("user id", getUserId());

  const [open,setOpen] = useState({
    open:false,
    id:''
  });
  const [loading,setLoading] = useState(true);
  const [change, setChange] = useState(false);
  const [count, setCount] = useState(0);
  const [isLoaded, setIsLoaded] = useState({
    bannerImg: true
  });

  const [updateMsg, setUpdateMsg] = useState(false);
  const [postMsg, setPostMsg] = useState(false);

  const token = localStorage.getItem('token');

  const modelCheck = (id) => {

    setOpen(prevState => ({
      ...prevState, 
      open: true,  
      id: id       
    }));
  }


  const markAsExpire = async (id) => {

   
    try {
        const response = await axios.put(`http://localhost:8080/jobprovider/job/status/expire/${id}`, {}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        // Handle the response, if needed
        console.log('Job marked as expired:', response.data);
        setChange(prev => !prev);
        setLoading(true);

        // Return the response or perform any other actions
        return response.data;

    } catch (error) {
        console.error('Error marking job as expired:', error);
    }
};

useEffect(() => {

  if (sessionStorage.getItem('jobUpdateSuc')) {
    setUpdateMsg(true); 
  }

  if (sessionStorage.getItem('jobPostSuc')) {
    setPostMsg(true); 
  }

},[]);

const handleUpdateSnackbar = () => {

  setUpdateMsg(false);
  sessionStorage.removeItem('jobUpdateSuc');
}

const handlePostSnackbar = () => {

  setPostMsg(false);
  sessionStorage.removeItem('jobPostSuc');
}



  
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
            
              <Box
              sx={{
                display:'flex',
                alignItems:'center',
                gap:'16px',
               
              }}
              >
                
              
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
                My Jobs 
              </Typography>
             
            </Box>

            <Divider />


            <Card
              variant="outlined"
            
              sx={{

              
                mb:2
                
              }}
            >

              <CardOverflow >

            <AspectRatio sx={{
                
                display:{xs:'none', sm:'block'},
      
                
                }}
                 ratio="1" maxHeight={350}>
           
              <Skeleton loading={isLoaded.bannerImg} variant="overlay">
                <img
                  src="https://ik.imagekit.io/propath/annie-spratt-hCb3lIB8L8E-unsplash%20(1)%20(1).jpg?updatedAt=1724606245558"
                  loading="lazy"
                  alt=""
                  onLoad={() => setIsLoaded(prevState => ({ ...prevState, bannerImg: false }))}
                  
                />
              </Skeleton>
            
            </AspectRatio>

            <AspectRatio sx={{
                  
                  display:{xs:'block', sm:'none'},
                  }}
                  ratio="20/9" maxHeight={200}>
              
                <Skeleton loading={isLoaded.bannerImg} variant="overlay">
                  <img

                    src="https://ik.imagekit.io/propath/annie-spratt-hCb3lIB8L8E-unsplash%20(1)%20(1).jpg?updatedAt=1724606245558"
                    loading="lazy"
                    alt=""
                    onLoad={() => setIsLoaded(prevState => ({ ...prevState, bannerImg: false }))}

                  />
                </Skeleton>


            </AspectRatio>

              </CardOverflow>
      <CardContent sx={{m:2}}>
        <Typography level="h3" id="card-description" sx={{mb:{xs:0,sm:1}}}>
          <Skeleton loading={isLoaded.bannerImg}>Post Your Job - Connect with Top Talent </Skeleton>
        </Typography>
        <Typography level="body-md" aria-describedby="card-description" mb={1}>

          <Skeleton loading={isLoaded.bannerImg}>
          Take the next step in building your dream team.
           Post your job today and reach out to a diverse pool of talented professionals ready to contribute to your success. 
           Whether you need seasoned experts or fresh perspectives, find the right candidates to help your business thrive. 
           </Skeleton>
        </Typography>

        {
          isLoaded.bannerImg ? (

            <Skeleton loading={isLoaded.bannerImg} width={200} height={44} sx={{mt:{md:2} , borderRadius:'5px'}} variant="rectangular" />
          ) : (

        <Button 
                startDecorator={<WorkIcon/>} 
                sx={{
                  mt:{md:2},
                  width:{md:'200px'}
                }}
                component= {RouterLink}
                to = "/jobprovider/my-jobs/post-a-job"
                > 
                Post a Job</Button>

          )
        }

          
      </CardContent>
    </Card>


    <Box sx={{display:'flex', justifyContent:'flex-start'}}>

              <Typography  level="h3" >My Jobs ({count})</Typography>
            </Box>
  <Divider sx={{mb:2}} />
            

            

          <JobTable key={getUserId()} markAsExpire={modelCheck} loading={loading} setLoading={setLoading} change={change} setChange={setChange} count ={setCount} />

          <React.Fragment>
      <Modal open={open.open} onClose={() => setOpen(open.false)}>
        <ModalDialog variant="outlined" role="alertdialog">
          <DialogTitle>
            <WarningRoundedIcon />
            Confirmation
          </DialogTitle>
          <Divider />
          <DialogContent>
          Are you sure you want to expire this job? This action cannot be undone.
          </DialogContent>
          <DialogActions>
            <Button  variant="solid" color="danger"  onClick={() => {setOpen({ open: false }); markAsExpire(open.id)}}>
              Expire
            </Button>
            <Button variant="outlined" color="neutral" onClick={() => setOpen({ open: false, id: '' })} >
              Cancel
            </Button>
          </DialogActions>
        </ModalDialog>
      </Modal>

     
      
      <Snackbar
        variant="soft"
        color="success"
        open={updateMsg}
        onClose={() => handleUpdateSnackbar()}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        startDecorator={<CheckCircleOutlineIcon />}
        endDecorator={
          <Button
            onClick={() => handleUpdateSnackbar()}
            size="sm"
            variant="soft"
            color="success"
          >
            Dismiss
          </Button>
        }
      >
        Job updated successfully!
      </Snackbar>

      <Snackbar
        variant="soft"
        color="success"
        open={postMsg}
        onClose={() => handlePostSnackbar()}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        startDecorator={<CheckCircleOutlineIcon />}
        endDecorator={
          <Button
            onClick={() => handlePostSnackbar()}
            size="sm"
            variant="soft"
            color="success"
          >
            Dismiss
          </Button>
        }
      >
        Job posted successfully!
      </Snackbar>
   
    </React.Fragment>


            
   </Box>
  )
}

export default MyJob