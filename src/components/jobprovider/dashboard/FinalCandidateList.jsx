import * as React from 'react';
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
import { Link as RouterLink } from 'react-router-dom';



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

export default function FinalCandidateList({open , setOpen,count}) {

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
        {data.map((item, index) => (
          <React.Fragment key={item.title}>
            <ListItem>
              <ListItemButton sx={{ gap: 2 }}>
             
                  <Avatar
                    size='lg'
                    src={`${item.src}`}
                    alt={item.title}
                  />
                
                <ListItemContent sx={{}}>
                  <Typography fontWeight="md">{item.title}</Typography>
                  <Typography level="body-sm">ATS Score :<Chip color='primary' sx={{ml:1}}>{item.description}</Chip></Typography>
                  
                </ListItemContent>
              </ListItemButton>
            </ListItem>
            {index !== data.length - 1 && <ListDivider />}
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
            <Button size='sm' sx={{fontSize:{xs:'13px',sm:'sm'}}} component={RouterLink} to="/jobprovider/my-jobs/shedule-interview">Confirm & Go to Schedule</Button>
          </Stack>
        </Sheet>
      </Drawer>
    </React.Fragment>


    
  );
}