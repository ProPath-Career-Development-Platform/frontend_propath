import * as React from 'react';
import { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import AspectRatio from '@mui/joy/AspectRatio';
import Typography from '@mui/joy/Typography';
import Card from '@mui/joy/Card';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Drawer from '@mui/joy/Drawer';
import List from '@mui/joy/List';
import ListDivider from '@mui/joy/ListDivider';
import ListItem from '@mui/joy/ListItem';
import ListItemContent from '@mui/joy/ListItemContent';
import ListItemButton from '@mui/joy/ListItemButton';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import Avatar from '@mui/joy/Avatar';
import Divider from '@mui/joy/Divider';
import ModalClose from '@mui/joy/ModalClose';
import Stack from '@mui/joy/Stack';
import Sheet from '@mui/joy/Sheet';
import Chip from '@mui/joy/Chip';
import axios from 'axios';
import { Link as RouterLink ,useNavigate} from 'react-router-dom';
import IconButton from '@mui/joy/IconButton';
import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';
import CloseIcon from '@mui/icons-material/Close';
import Snackbar from '@mui/joy/Snackbar';


//const token = localStorage.getItem('token');




const data = [
  {
    src: 'https://wallpapers.com/images/hd/professional-profile-pictures-1080-x-1080-460wjhrkbwdcp1ig.jpg',
    title: '1. Nimal Siriwardene',
    description: '86%',
  },
  {
    src: 'https://th.bing.com/th/id/OIP.cSkquXu3JhiiQ_HoUjrsnwHaHa?w=2000&h=2000&rs=1&pid=ImgDetMain',
    title: '2. Saman Kumara',
    description: '75%',
  },
  {
    src: 'https://th.bing.com/th/id/OIP.jSABp5nC5XxTMlTNb2F48QHaHa?w=512&h=512&rs=1&pid=ImgDetMain',
    title: '3. Nihal Jayasinghe',
    description: '80%',
  },
  {
    src: 'https://media-exp1.licdn.com/dms/image/C4D03AQGQzG04iPoGmw/profile-displayphoto-shrink_800_800/0/1659000660769?e=2147483647&v=beta&t=14svvpUmQgxhn6iMSqNYwjmntF2sDpgL_EumzcgbmsQ',
    title: '4. Maheesh Pranandu',
    description: '90%',
  },
  {
    src: 'https://images.squarespace-cdn.com/content/v1/600ef9a4c8a01716d6b350ac/1615598648962-ZSR8JWMP0LDW0U54946O/2018-07-02_0004.jpg',
    title: '5. Chandrika Bandara',
    description: '78%',
  },
  
];

export default function FinalCandidateList({selectedIds, open , setOpen,count,setSelectIds}) {

  const [applicantDetails, setApplicantDetails] = useState([]);
  const [snackOpen, setSnackOpen] = useState(false);
  console.log(selectedIds);

  const { jobId } = useParams();
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  const updateStatus = async (seekerId, jobId) => {


    try {
      const response = await axios.put(
        `http://localhost:8080/jobprovider/applicant/updateStatus/${seekerId}/${jobId}`, 
        null, // No payload
        {
          headers: {
            Authorization: `Bearer ${token}` // Ensure token is defined
          }
        }
      );
  
      if (response.status === 200) {
        console.log('Status updated successfully');
        // Additional logic such as updating the UI or state can be added here
  
        // Remove the applicant from the list of selectedIds
        setSelectIds((prevSelectedIds) =>
          prevSelectedIds.filter((id) => id !== seekerId)
        );

        if(count === 1){
          setOpen(false);
        }

        

      } else {
        console.log('Failed to update status');
      }
    } catch (error) {
      console.error('Error updating status:', error);
      setSnackOpen(true);
    } 

  };


  const updateStatusPreSelected = async (jobId, selectedIds) => {
    try {
      const response = await axios.put(
        `http://localhost:8080/jobprovider/applicant/updateStatusPreSelected/${jobId}`, 
        selectedIds, 
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }
      );
      if (response.status === 200) {
        console.log('Applicants updated successfully');
        navigate(`/jobprovider/my-jobs/${jobId}/shedule-interview`, { state: { selectedIds } });
        
      } else {
        console.error('Failed to update applicants');
      }
    } catch (error) {
      console.error('Error updating applicants:', error);
      setSnackOpen(true);
    }
  };
  
  

  //updateStatu

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        // Ensure selectedApplicantIds is not empty
        if (selectedIds.length === 0) return;

        // Prepare a request to fetch details for all selected applicants //use post instead of get beacuse we pass lot of ids
        const response = await axios.post("http://localhost:8080/jobprovider/applicant/selected", 
          selectedIds,
          {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
        );
        setApplicantDetails(response.data);
        
      } catch (error) {
        console.error('Error fetching applicant details:', error);
      }
    };

    fetchDetails();
  }, [selectedIds]);

 
    const toggleDrawer = (inOpen) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setOpen(inOpen);
      };


     

  return (

    <React.Fragment>
     
      <Drawer
        size="md"
        variant="plain"
        open={open}
        onClose={() => setOpen(false)}
        slotProps={{
          content: {
            sx: {
              bgcolor: 'transparent',
              p: { md: 3, sm: 0 },
              boxShadow: 'none',
            },
          },
        }}

        sx={{
          zIndex: '10001',
        }}
      >
        <React.Fragment>
    
    <Snackbar
    sx={{mb:2}}
      variant="soft"
      color="danger"
      open={snackOpen}
      onClose={() => setSnackOpen(false)}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      startDecorator={<CloseIcon />}
      endDecorator={
        <Button
          onClick={() => setSnackOpen(false)}
          size="sm"
          variant="soft"
          color="danger"
        >
          Dismiss
        </Button>
      }
    >
     Error Occured.
    </Snackbar>
  </React.Fragment>
        <Sheet
          sx={{
            borderRadius: 'md',
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            height: '100%',
            overflow: 'auto',
          }}
        >
          <DialogTitle>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
            }}>

            <Typography level="h6">Your Final List</Typography>
            <Typography level="body-sm">You Selected {count} Candidates.</Typography>
            </Box>
         </DialogTitle>
          <ModalClose />
          <Divider sx={{ mt: 'auto' }} />
          <DialogContent sx={{ gap: 2 }}>

          <Card variant="outlined" sx={{ width: '100%', p: 0 }}>

      <List sx={{ py: 'var(--ListDivider-gap)' }}>
        {applicantDetails.map((applicantDetails) => (
          <React.Fragment key={applicantDetails.seekerId}>
            <ListItem>
              <ListItemButton sx={{ gap: 2 }}>
             
                 <Avatar
                    size='lg'
                    src={`https://wallpapers.com/images/hd/professional-profile-pictures-1080-x-1080-460wjhrkbwdcp1ig.jpg`}
                    
                  /> 
                
                <ListItemContent sx={{}}>
                  <Typography fontWeight="md">{applicantDetails.name}</Typography>
                  <Typography level="body-sm">ATS Score :<Chip color='primary' sx={{ml:1}}>{applicantDetails.atsScore}</Chip></Typography>
                  
                </ListItemContent>
              </ListItemButton>

              <IconButton
              aria-label="bookmark Bahamas Islands"
              variant="soft"
              color="danger"
              size="sm"
              sx={{ position: 'absolute', top: '0.875rem', right: '0.5rem' }}
              onClick={()=>updateStatus(applicantDetails.seekerId,jobId)}
            >
              <CloseIcon />

            </IconButton>


            </ListItem>
            {data.length != 1 && <ListDivider />}
          </React.Fragment>
        ))}
      </List> 
    </Card>
            
          </DialogContent>

          <Divider sx={{ mt: 'auto' }} />
          <Stack
            direction="row"
            justifyContent="space-between"
            useFlexGap
            spacing={1}
          >
            <Button
             sx={{fontSize:{xs:'13px',sm:'sm'}}}
              variant="outlined"
              color="neutral"
              onClick={() => setOpen(false)}
            >
              Close
            </Button>
            <Button size='sm' sx={{fontSize:{xs:'13px',sm:'sm'}}} component={RouterLink} to={`/jobprovider/my-jobs/${jobId}/shedule-interview`} onClick={()=>updateStatusPreSelected(jobId,selectedIds)} >Confirm & Go to Schedule</Button>
          </Stack>
        </Sheet>
      </Drawer>



      


    </React.Fragment>

    


    
  );
}