import React,{useEffect,useState} from 'react';
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

import {checkUserSubscription} from '../../../utils/checkUserSubcription';
import PaymentModel from '../../../components/jobprovider/dashboard/PaymentModel'
import QrScanner from 'react-qr-scanner';
import MoreHoriz from '@mui/icons-material/MoreHoriz';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import DialogActions from '@mui/joy/DialogActions';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import VerifiedIcon from '@mui/icons-material/Verified';
import ModalClose from '@mui/joy/ModalClose';
import CircularProgress from '@mui/joy/CircularProgress';










function QrScannerComponent() {
    const { id } = useParams();
    const token = localStorage.getItem("token");
  
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [data, setData] = useState(null);
    const [user, setUser] = useState(null);
    const [ver, setVer] = useState(false);
    const [participant, setParticipant] = useState(null);
    const [isScanning, setIsScanning] = useState(false); // Flag to prevent duplicate scans

    const [webCam ,setWebCam] = useState(true);
    const [lQr,setLQr] = useState(false);

    const [errorMessage, setErrorMessage] = useState(null);
    const[wLoading, setWLoading] = useState(true);
    const [event,setEvent] = useState(null);
    const [eLoad, setELoad] = useState(true);
    
  const navigate = useNavigate();


    useEffect(() => {


  const requestWebcamAccess = () => {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {
        console.log("Webcam access granted.");
        setErrorMessage(null); 
        setWebCam(false);
        setWLoading(false);
        setLQr(true);
      })
      .catch((error) => {
        setWLoading(false);
        console.error("Error accessing webcam:", error);
        if (error.name === "NotAllowedError") {
          setErrorMessage(
            "Webcam access denied. Please click the padlock icon in your browser's address bar and enable camera access."
          );
        } else if (error.name === "NotFoundError" || error.name === "DevicesNotFoundError") {
          setErrorMessage("No webcam found. Please connect a webcam.");
        } else if (error.name === "SecurityError") {
          setErrorMessage(
            "Webcam access is blocked. Please check your browser or system settings."
          );
        } else {
          setErrorMessage("An unknown error occurred. Please try again.");
        }
      });
  };

    requestWebcamAccess();

 } , []);
  
    const handleScan = async (result) => {
      if (result && !isScanning) {
        console.log("QR Code Result:", result);
        setIsScanning(true); // Prevent further scans
  
        const text = result.text || "Invalid QR Code";
        setData(text);
  
        const payload = { qrToken: text };
        console.log("Sending POST request with payload:", payload);
  
        setLoading(true);
  
        try {
          const response = await axios.post(
            `http://localhost:8080/jobprovider/participant/verify/${id}`,
            payload,
            {
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
            }
          );
  
          console.log("Response:", response.data);
  
          if (response.data.verified === true) {
            setVer(true);
          } else {
            if(response.data.participate == true){
                setParticipant(true);
            }
            setVer(false);
          }
  
          setUser(response.data); // Corrected `response.date` to `response.data`
        } catch (error) {
          console.error("Error during Axios request:", error.response || error.message);
        } finally {
          setLoading(false);
          setIsScanning(false); // Reset scanning flag
         
        }
      }
    };
  
    useEffect(() => {
      if (data) {
        setOpen(true);
      }
    }, [data]);
  
    const handleError = (error) => {
      console.error("QR Scan Error:", error);
    };
  
    const previewStyle = {
      height: "100%",
      width: "100%",
    };

    const handleCloseModal = () => {
        setOpen(false);
        setParticipant(null);
        setUser(null);
        setVer(false);
        setData(null); // Reset scanner data
        
    };


    useEffect(() => {
      axios.get(`http://localhost:8080/jobprovider/event/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((response) => {
        setEvent(response.data);
        setELoad(false);
        console.log(response.data);
      }).catch((error) => {
        console.error('Error fetching events:', error);
        navigate('/jobprovider/error/404');
      });
  
      
  
  
    }, []);
  

    




      
  
    return (
      <>
        <Box
          component="main"
          className="MainContent"
          sx={{
            px: { xs: 2, md: 6 },
            pt: {
              xs: "calc(12px + var(--Header-height))",
              sm: "calc(12px + var(--Header-height))",
              md: 3,
            },
            pb: { xs: 2, sm: 2, md: 3 },
            flex: 1,
            display: "flex",
            flexDirection: "column",
            minWidth: 0,
            height: "100dvh",
            gap: 1,
            overflow: "auto",
            maxHeight: "calc(100vh - 10px)",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <Breadcrumbs
              size="sm"
              aria-label="breadcrumbs"
              separator={<ChevronRightRoundedIcon fontSize="sm" />}
              sx={{ pl: 0 }}
            >
              <Link underline="none" color="neutral" href="#some-link" aria-label="Home">
                <HomeRoundedIcon />
              </Link>
              <Link underline="hover" color="neutral" href="#some-link" fontSize={12} fontWeight={500}>
                Dashboard
              </Link>
              <Typography color="primary" fontWeight={500} fontSize={12}>
                My Jobs
              </Typography>
            </Breadcrumbs>
          </Box>
  
          <Typography level="h2" component="h1">
            QR Scanner
          </Typography>
  
          <Divider />
  
          <Card variant="outlined" sx={{ minWidth: 300 }}>
            <CardContent orientation="horizontal" sx={{ display:{xs:'none',md:'flex'},justifyContent: "space-between", gap: 1 }}>

              <Box sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
              <Avatar
                size="md"
                src="https://ik.imagekit.io/propath/camera-png-icon-3.png"
                sx={{ p: 0, border: "2px solid", borderColor: "background.body" }}
              />
              

              <Typography sx={{ fontWeight: "lg" }}>QR Scanner |  </Typography> <Typography sx={{ml:1}} level="title-md"> <Skeleton animation="wave" variant="rectangular" sx={{width:'300px'}} height="1.5em" loading={eLoad}> {event?.title}</Skeleton></Typography>
              </Box>

              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              {isScanning ? (
                <Typography level="title-md" startDecorator={<CircularProgress size="sm" />}>
                  Scanning for QR Code...
                </Typography>
              ) : lQr ? (
                <Typography level="title-md" startDecorator={<CircularProgress size="sm" />}>
                  Searching for QR Code...
                </Typography>
              ) : null}
            </Box>
            </CardContent>


            <CardContent orientation="horizontal" sx={{ display:{xs:'flex',md:'none'},justifyContent: "center", gap: 1,flexDirection:'column' }}>

           <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

           <Avatar
                size="md"
                src="https://ik.imagekit.io/propath/camera-png-icon-3.png"
                sx={{ p: 0, border: "2px solid", borderColor: "background.body" }}
              />
              

              <Typography sx={{ fontWeight: "lg" }}>QR Scanner</Typography> 


           </Box>
             
              <Typography  sx={{textAlign:'center'}} level="title-md"> <Skeleton animation="wave" variant="rectangular" sx={{width:'300px'}} height="1.5em" loading={eLoad}> {event?.title}</Skeleton></Typography>
              

             <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              {isScanning ? (
                <Typography   level="body-xs" startDecorator={<CircularProgress sx={{"--CircularProgress-size": "15px",  "--CircularProgress-trackThickness": "1px","--CircularProgress-progressThickness": "1px" }}  />}>
                  Scanning for QR Code...
                </Typography>
              ) : lQr ? (
                <Typography  level="body-xs" startDecorator={<CircularProgress sx={{"--CircularProgress-size": "15px",  "--CircularProgress-trackThickness": "1px","--CircularProgress-progressThickness": "1px" }}  />}>
                  Searching for QR Code...
                </Typography>
              ) : null}

              </Box>
          
            </CardContent>


            <Divider />
            <CardContent sx={{ m: "auto", width: { xs: "90%", md: "50%" } }}>
             {
                wLoading ? (

                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <CircularProgress />
                  </Box>


                )

                :

                webCam ? (

                    <Box sx={{ display: 'flex', gap: 5, alignItems: 'center', justifyContent: 'center' ,flexDirection:'column'}}>
                <AspectRatio ratio="16/9" objectFit="contain" sx={{width:{xs:'90%', sm:'500px'}, borderRadius:10}}>
                <img src='https://ik.imagekit.io/propath/QR%20Code-bro.png?updatedAt=1733114305982' alt="QR Code" />
                </AspectRatio>

                <Box>
                
                    
                   
                    <Typography level="title-lg" variant='soft' color='danger' sx={{mt:1,borderRadius:5}} >
                        Please Allow Camera Access.
                      </Typography>
                
              
                
                
                </Box>
                </Box>
                ):
             !open ? 

             (<QrScanner delay={300} style={previewStyle} onError={handleError} onScan={handleScan} />) :

             <CircularProgress />
             
            } 
            </CardContent>
          </Card>
  
          <Modal open={open} onClose={() => handleCloseModal(false)}>
            <ModalDialog variant="outlined" role="alertdialog" sx={{ width: "90%", maxWidth: "1000px" }}>
              <DialogTitle>Participant Confirmation</DialogTitle>  <ModalClose />
              <Divider />
              <DialogContent>
                {
                loading ? (
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <CircularProgress />
                  </Box>
                ) : user && ver ? (
                    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', justifyContent: 'center' ,flexDirection:'column'}}>
                    <Avatar src={user.userProPic} sx={{ '--Avatar-size': '15rem' }}  />
        
                    <Box>
                      <Typography level="h1" >
                        {user.userName}
                      </Typography>
                    </Box>
        
                    <Box sx={{display:'flex'}}>
                      <Typography level="title-lg" >
                        <AspectRatio
                        ratio="1"
                        variant="soft"
                        color="primary"
                        sx={{ minWidth: 40, borderRadius: '50%' }}
                    >
                        <div>
                        <VerifiedIcon sx={{fontSize:'50px'}} /> 
                        </div>
                        </AspectRatio>
                        Verified
                      </Typography>
                    </Box>
        
                    <Box sx={{display:{xs:'row',sm:'flex'} ,gap:2}}>
                      <Typography level="title-sm" >
                        Email :  <Typography level="body-sm" >{user.userEmail}</Typography>
                      </Typography>
        
                      <Typography level="title-sm" sx={{mt:{xs:1,sm:0}}}>
                        Enroll Date :  <Typography level="body-sm" >{user.enrollDate}</Typography>
                      </Typography>
                    </Box>
        
                    </Box>
                ) : participant ? (

                    <Box sx={{ display: 'flex', gap: 5, alignItems: 'center', justifyContent: 'center' ,flexDirection:{xs:'column', sm:'row'}}}>
                    <AspectRatio ratio="16/9" objectFit="contain" sx={{width:{xs:'90%', sm:'500px'}, borderRadius:10}}>
                    <img src='https://ik.imagekit.io/propath/QR%20Code-pana%20(1).png?updatedAt=1733078636648' alt="QR Code" />
                    </AspectRatio>
        
                    <Box>
                    <Typography level="h2" >
                        Sorry,
                      </Typography>
                      <Typography level="h4" >
                        QR Code Invalid.
                      </Typography>
                      <Typography level="title-md" variant='soft' color='danger' sx={{mt:1,borderRadius:5}} >
                        This QR Code already used.
                      </Typography>
                    </Box>
                    </Box>
                ) : (


                    <Box sx={{ display: 'flex', gap: 5, alignItems: 'center', justifyContent: 'center' ,flexDirection:{xs:'column', sm:'row'}}}>
                    <AspectRatio ratio="16/9" objectFit="contain" sx={{width:{xs:'90%', sm:'500px'}, borderRadius:10}}>
                    <img src='https://ik.imagekit.io/propath/QR%20Code-pana%20(1).png?updatedAt=1733078636648' alt="QR Code" />
                    </AspectRatio>
        
                    <Box>
                    <Typography level="h2" >
                        Sorry,
                      </Typography>
                      <Typography level="h4" >
                        QR Code Invalid.
                      </Typography>
                      <Typography level="title-md" variant='soft' color='danger' sx={{mt:1,borderRadius:5}} >
                        This QR Code not belongs to this event.
                      </Typography>
                      
                    </Box>
                    </Box>
                )
            
            
            }
              </DialogContent>

              
                
              
            </ModalDialog>
          </Modal>
        </Box>
      </>
    );
  }
  
  export default QrScannerComponent;
  